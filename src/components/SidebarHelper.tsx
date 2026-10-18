import React, { useState } from 'react';
import { 
  BookMarked, 
  Target, 
  Volume2, 
  FileText, 
  Save, 
  X, 
  Check, 
  Sparkles,
  ExternalLink,
  ChevronRight,
  ListOrdered
} from 'lucide-react';
import { LessonData, VocabularyItem } from '../types/lesson';
import { LESSON_STEPS } from '../data/lessonsData';
import { audioEngine } from '../services/audioEngine';
import { AudioButton } from './common/AudioButton';
import { 
  getAllWordRecords, 
  updateWordMastery, 
  getWordStatusBadge,
  subscribeToStudentMemory 
} from '../services/studentMemoryEngine';
import { WordLearningRecord } from '../types/adaptive';

interface SidebarHelperProps {
  lesson: LessonData;
  currentStepIndex: number;
  completedSteps: number[];
  studentNotes: string;
  onSaveNotes: (notes: string) => void;
  onSelectStep: (stepIndex: number) => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
}

export const SidebarHelper: React.FC<SidebarHelperProps> = ({
  lesson,
  currentStepIndex,
  completedSteps,
  studentNotes,
  onSaveNotes,
  onSelectStep,
  isOpenMobile,
  onCloseMobile,
}) => {
  const [activeTab, setActiveTab] = useState<'vocab' | 'notes' | 'steps'>('vocab');
  const [localNoteText, setLocalNoteText] = useState(studentNotes);
  const [justSaved, setJustSaved] = useState(false);
  const [playingWord, setPlayingWord] = useState<string | null>(null);
  const [wordRecords, setWordRecords] = useState<WordLearningRecord[]>(getAllWordRecords());

  React.useEffect(() => {
    setWordRecords(getAllWordRecords());
    const unsub = subscribeToStudentMemory(() => {
      setWordRecords(getAllWordRecords());
    });
    return unsub;
  }, []);

  // Sync note text if lesson changes
  React.useEffect(() => {
    setLocalNoteText(studentNotes);
  }, [studentNotes]);

  const handleSave = () => {
    onSaveNotes(localNoteText);
    setJustSaved(true);
    setTimeout(() => setJustSaved(false), 2000);
  };

  const handlePlayWord = (v: VocabularyItem) => {
    setPlayingWord(v.word);
    audioEngine.speakSingle(v.word, {
      lang: 'en',
      rate: 0.85 as any,
      onEnd: () => setPlayingWord(null),
    });
  };

  const content = (
    <div className="flex flex-col h-full bg-white">
      {/* Sidebar Header with Tab Navigation */}
      <div className="p-4 border-b border-slate-200/80 bg-slate-50/70">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-indigo-100 text-indigo-700 flex items-center justify-center">
              <BookMarked className="w-3.5 h-3.5" />
            </div>
            <span className="font-bold text-xs uppercase tracking-wider text-slate-800">
              Yardımcı Panel
            </span>
          </div>

          {/* Close for mobile */}
          <button
            onClick={onCloseMobile}
            className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab switchers */}
        <div className="grid grid-cols-3 gap-1 p-1 bg-slate-200/70 rounded-xl">
          <button
            onClick={() => setActiveTab('vocab')}
            className={`py-1.5 px-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'vocab'
                ? 'bg-white text-indigo-700 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Kelimeler ({lesson.vocabulary.length})
          </button>

          <button
            onClick={() => setActiveTab('notes')}
            className={`py-1.5 px-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'notes'
                ? 'bg-white text-indigo-700 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Notlarım
          </button>

          <button
            onClick={() => setActiveTab('steps')}
            className={`py-1.5 px-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'steps'
                ? 'bg-white text-indigo-700 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Adımlar
          </button>
        </div>
      </div>

      {/* Tab Body */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Tab 1: Vocabulary Cards with Audio */}
        {activeTab === 'vocab' && (
          <div className="space-y-3">
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              Bu Derste Geçen Temel Kelimeler
            </div>

            {lesson.vocabulary.length === 0 ? (
              <p className="text-xs text-slate-400 italic">Bu ders için kelime listesi bulunmuyor.</p>
            ) : (
              lesson.vocabulary.map((vocab) => {
                const norm = vocab.word.trim().toLowerCase();
                const record = wordRecords.find((w) => w.word.toLowerCase() === norm);
                const badge = record ? getWordStatusBadge(record.status) : { labelTr: 'Yeni Kelime', color: 'text-slate-600', bg: 'bg-slate-100' };

                return (
                  <div
                    key={vocab.id}
                    className="p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/60 hover:bg-slate-50 transition-colors space-y-2"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="font-bold text-slate-900 text-sm">{vocab.word}</span>
                          <span className="text-[10px] uppercase font-bold text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded">
                            {vocab.partOfSpeech}
                          </span>
                        </div>
                        {vocab.phonetic && (
                          <span className="text-[11px] text-slate-400 font-mono">
                            {vocab.phonetic}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-1.5">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${badge.bg} ${badge.color}`}>
                          {badge.labelTr}
                        </span>
                        <AudioButton text={vocab.word} size="sm" showSpeedToggle />
                      </div>
                    </div>

                    <div className="text-xs text-slate-700 font-semibold">
                      {vocab.meaningTr}
                    </div>

                    <div className="text-[11px] text-slate-600 bg-white p-2 rounded-lg border border-slate-100 flex items-start justify-between gap-2">
                      <span className="italic">"{vocab.exampleSentence}"</span>
                      <AudioButton text={vocab.exampleSentence} size="sm" />
                    </div>

                    {/* Word mastery progression buttons */}
                    <div className="pt-1 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-200/50">
                      <span className="text-[10px]">Hafıza Durumu:</span>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => updateWordMastery(vocab.word, 'recognized')}
                          className="px-2 py-0.5 rounded bg-white hover:bg-sky-50 text-sky-700 border border-slate-200 hover:border-sky-300 font-semibold cursor-pointer"
                          title="Bu kelimeyi tanıyorum"
                        >
                          Tanıdım
                        </button>
                        <button
                          onClick={() => updateWordMastery(vocab.word, 'recalled')}
                          className="px-2 py-0.5 rounded bg-white hover:bg-emerald-50 text-emerald-700 border border-slate-200 hover:border-emerald-300 font-semibold cursor-pointer"
                          title="Bu kelimeyi hatırlayıp doğru kullanabiliyorum"
                        >
                          Hatırladım ✓
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        )}

        {/* Tab 2: Student Notes Area (LocalStorage Persisted) */}
        {activeTab === 'notes' && (
          <div className="flex flex-col h-full space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Ders Not Defteriniz
              </span>
              {justSaved && (
                <span className="text-[11px] text-emerald-600 font-bold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Kaydedildi
                </span>
              )}
            </div>

            <p className="text-xs text-slate-500">
              Bu dersle ilgili önemli hatırlatıcılarınızı veya kurallarınızı buraya not alın; otomatik olarak tarayıcınızda saklanır.
            </p>

            <textarea
              value={localNoteText}
              onChange={(e) => setLocalNoteText(e.target.value)}
              placeholder="Örnek: To Be fiilinde eylem bildiren fiil kullanılmaz..."
              className="w-full flex-1 min-h-[220px] p-3 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 resize-none font-sans bg-slate-50/50"
            />

            <button
              onClick={handleSave}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors cursor-pointer shadow-2xs"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Notu Kaydet</span>
            </button>
          </div>
        )}

        {/* Tab 3: Step Checklist & Quick Jump */}
        {activeTab === 'steps' && (
          <div className="space-y-3">
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              Ders Akış Haritası
            </div>

            <div className="space-y-1.5">
              {LESSON_STEPS.map((step, idx) => {
                const isActive = idx === currentStepIndex;
                const isCompleted = completedSteps.includes(idx);

                return (
                  <button
                    key={step.key}
                    onClick={() => {
                      onSelectStep(idx);
                      onCloseMobile();
                    }}
                    className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                      isActive
                        ? 'bg-indigo-50/80 border-indigo-300 text-indigo-900 font-bold'
                        : isCompleted
                        ? 'bg-slate-50 border-slate-200 text-slate-700'
                        : 'bg-white border-slate-100 text-slate-400'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className={`w-5 h-5 rounded-md text-[10px] font-extrabold flex items-center justify-center ${
                        isActive
                          ? 'bg-indigo-600 text-white'
                          : isCompleted
                          ? 'bg-emerald-500 text-white'
                          : 'bg-slate-200 text-slate-600'
                      }`}>
                        {isCompleted && !isActive ? '✓' : step.stepNumber}
                      </div>
                      <span className="text-xs truncate">{step.label}</span>
                    </div>

                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Footer Info Box */}
      <div className="p-3 border-t border-slate-200/80 bg-slate-50 text-[11px] text-slate-500 text-center">
        LinguAAI Pedagojik Asistan v6.0
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sticky Sidebar */}
      <aside className="hidden lg:block w-80 shrink-0 sticky top-28 h-[calc(100vh-8rem)] rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden">
        {content}
      </aside>

      {/* Mobile Drawer Overlay & Sheet */}
      {isOpenMobile && (
        <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
          <div
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity"
            onClick={onCloseMobile}
          />
          <div className="relative w-full max-w-sm h-full bg-white shadow-2xl z-10 flex flex-col animate-slideLeft">
            {content}
          </div>
        </div>
      )}
    </>
  );
};
