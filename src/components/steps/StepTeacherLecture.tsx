import React, { useState } from 'react';
import { 
  BookOpen, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  HelpCircle, 
  ArrowRight,
  Bookmark,
  Volume2,
  Info,
  Check,
  X,
  Target,
  BrainCircuit,
  MessageSquare,
  Scale,
  Zap,
  Briefcase,
  Compass,
  GraduationCap
} from 'lucide-react';
import { LessonData } from '../../types/lesson';
import { AudioButton } from '../common/AudioButton';
import { addMistake } from '../../services/srsEngine';
import { RotateCcw, Brain } from 'lucide-react';
import { LiveTeacherStudio } from '../teacher/LiveTeacherStudio';

import { AdaptiveLessonSupplement } from '../../types/adaptive';

interface StepTeacherLectureProps {
  lesson: LessonData;
  adaptiveSupplement?: AdaptiveLessonSupplement;
  onSelectProfilePreset?: (preset: 'a1_beginner' | 'b1_intermediate' | 'c1_advanced') => void;
  activePresetKey?: string;
  onContinue: () => void;
}

const skillTypeLabels: Record<string, { label: string; bg: string; text: string }> = {
  grammar: { label: 'Dilbilgisi & Yapı', bg: 'bg-indigo-50', text: 'text-indigo-700' },
  vocabulary: { label: 'Kelime & Eşdizim', bg: 'bg-emerald-50', text: 'text-emerald-700' },
  pronunciation: { label: 'Telaffuz & Sesbilim', bg: 'bg-purple-50', text: 'text-purple-700' },
  listening: { label: 'Dinleme & Çıkarım', bg: 'bg-amber-50', text: 'text-amber-700' },
  reading: { label: 'Okuma & Anlam', bg: 'bg-teal-50', text: 'text-teal-700' },
  speaking: { label: 'Konuşma & İletişim', bg: 'bg-sky-50', text: 'text-sky-700' },
  writing: { label: 'Yazma & Kompozisyon', bg: 'bg-rose-50', text: 'text-rose-700' },
};

export const StepTeacherLecture: React.FC<StepTeacherLectureProps> = ({
  lesson,
  adaptiveSupplement,
  onSelectProfilePreset,
  activePresetKey = 'b1_intermediate',
  onContinue,
}) => {
  const lecture = lesson.teacherLecture;
  const skillMeta = skillTypeLabels[lecture.skillType || 'grammar'] || skillTypeLabels.grammar;
  
  // Interactive quick check state
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasSubmittedCheck, setHasSubmittedCheck] = useState<boolean>(false);

  const isCheckCorrect = selectedOption === lecture.quickCheck.correctIndex;

  const handleSelectOption = (idx: number) => {
    setSelectedOption(idx);
    setHasSubmittedCheck(true);

    if (idx !== lecture.quickCheck.correctIndex) {
      addMistake({
        lessonId: lesson.id,
        lessonTitle: lesson.title,
        lessonCode: lesson.code,
        level: lesson.level,
        exerciseId: `qc-${lesson.id}`,
        prompt: lecture.quickCheck.question,
        userWrongAnswer: lecture.quickCheck.options[idx] || '',
        correctAnswer: lecture.quickCheck.options[lecture.quickCheck.correctIndex] || '',
        explanation: lecture.quickCheck.explanation,
      });
    }
  };

  const handleRetryCheck = () => {
    setSelectedOption(null);
    setHasSubmittedCheck(false);
  };

  const scaffoldLabels: Record<string, { label: string; badge: string; desc: string }> = {
    heavy: { 
      label: 'Yoğun İskele (Heavy Scaffolding)', 
      badge: 'bg-amber-100 text-amber-900 border-amber-300',
      desc: 'Adım adım Türkçe köprüler, bol ipucu ve ayrıntılı fonetik açıklamalar devrede.'
    },
    moderate: { 
      label: 'Dengeli Destek (Moderate Scaffolding)', 
      badge: 'bg-indigo-100 text-indigo-900 border-indigo-300',
      desc: 'Doğal anlatım, zaman ve eşdizim köprüleri, ihtiyaç anında mikro-ipuçları.'
    },
    light: { 
      label: 'Sade / İleri Seviye (Light Scaffolding)', 
      badge: 'bg-emerald-100 text-emerald-900 border-emerald-300',
      desc: 'Doğrudan hedef dil analizi, pragmatik üslup, nüans ve söylem derinliği.'
    },
  };

  const activeScaffold = scaffoldLabels[adaptiveSupplement?.scaffoldingLevel || 'moderate'];

  return (
    <article className="space-y-8 animate-fadeIn max-w-4xl mx-auto">
      {/* 0. ADAPTIVE TEACHING & STUDENT MEMORY BAR */}
      {adaptiveSupplement && (
        <section className="bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-7 shadow-lg border border-indigo-500/20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-indigo-800/60">
            <div className="flex items-center gap-3">
              <span className="text-3xl p-2 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/10">
                {adaptiveSupplement.studentProfile.avatar}
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-extrabold text-white tracking-tight">
                    {adaptiveSupplement.personalizedTeacherNote.greeting}
                  </h3>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${activeScaffold.badge}`}>
                    {activeScaffold.label}
                  </span>
                </div>
                <p className="text-xs text-indigo-200/80 mt-0.5">
                  Öğrenci profiline ve geçmiş alıştırma hafızasına göre kişiselleştirildi
                </p>
              </div>
            </div>

            {/* Profile simulation switcher for testing */}
            {onSelectProfilePreset && (
              <div className="flex items-center gap-1.5 bg-black/30 p-1.5 rounded-2xl border border-white/10 self-start sm:self-center">
                <span className="text-[10px] font-bold text-indigo-300 uppercase px-2 hidden sm:inline">
                  Öğrenci Test Modeli:
                </span>
                <button
                  onClick={() => onSelectProfilePreset('a1_beginner')}
                  className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activePresetKey === 'a1_beginner'
                      ? 'bg-amber-400 text-slate-950 shadow-sm'
                      : 'text-indigo-200 hover:text-white hover:bg-white/10'
                  }`}
                  title="A1 Başlangıç - Yoğun İskele & Temel Kelime"
                >
                  🌱 Emre (A1)
                </button>
                <button
                  onClick={() => onSelectProfilePreset('b1_intermediate')}
                  className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activePresetKey === 'b1_intermediate'
                      ? 'bg-indigo-400 text-slate-950 shadow-sm'
                      : 'text-indigo-200 hover:text-white hover:bg-white/10'
                  }`}
                  title="B1 Orta - Telafi & Dengeli Destek"
                >
                  🎯 Selin (B1)
                </button>
                <button
                  onClick={() => onSelectProfilePreset('c1_advanced')}
                  className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activePresetKey === 'c1_advanced'
                      ? 'bg-emerald-400 text-slate-950 shadow-sm'
                      : 'text-indigo-200 hover:text-white hover:bg-white/10'
                  }`}
                  title="C1 İleri - Nüans, Üslup & Söylem"
                >
                  🚀 Can (C1)
                </button>
              </div>
            )}
          </div>

          <div className="pt-4 space-y-3">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs sm:text-sm leading-relaxed text-indigo-100 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
              <div className="space-y-1.5">
                <p>
                  <strong className="text-white">Öğretmeninizden Kişiye Özel Tavsiye: </strong>
                  {adaptiveSupplement.personalizedTeacherNote.contextWhy}
                </p>
                <p className="text-indigo-200/90 italic">
                  💡 {adaptiveSupplement.personalizedTeacherNote.focusTip}
                </p>
              </div>
            </div>

            {/* Targeted Micro-Scaffold Callouts from previous error patterns */}
            {adaptiveSupplement.scaffoldCallouts.length > 0 && (
              <div className="space-y-2">
                {adaptiveSupplement.scaffoldCallouts.map((scaffold, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-400/30 text-xs text-amber-100 flex items-start gap-3"
                  >
                    <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-amber-300 block">{scaffold.titleTr}</span>
                      <p className="mt-0.5 text-slate-200">{scaffold.guidanceTr}</p>
                      <span className="inline-block mt-1 text-[11px] font-mono text-amber-200 bg-amber-950/60 px-2 py-0.5 rounded">
                        Örnek: {scaffold.quickExample}
                      </span>
                      <span className="block mt-1 text-[10px] text-amber-300/80 italic">
                        {scaffold.reassuranceTr}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* 1. Header & Context Intro Card */}
      <section className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <span className={`px-2.5 py-1 rounded-xl text-xs font-bold border ${skillMeta.bg} ${skillMeta.text} border-indigo-100`}>
              {skillMeta.label}
            </span>
            <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-slate-900 text-white font-mono">
              {lesson.level}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
            <BookOpen className="w-4 h-4 text-indigo-600" />
            <span>Öğretmen Masterclass</span>
          </div>
        </div>
        
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug mb-3">
          {lecture.coreConcept.title}
        </h2>

        {/* Concrete Competency Target */}
        {lecture.concreteCompetency && (
          <div className="mb-4 p-3.5 rounded-2xl bg-indigo-50/80 border border-indigo-100 flex items-start gap-3">
            <Target className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
            <div>
              <span className="text-[11px] font-bold text-indigo-900 uppercase tracking-wider block">
                Kazanılacak Somut Beceri
              </span>
              <p className="text-xs sm:text-sm text-indigo-950 font-medium mt-0.5">
                {lecture.concreteCompetency}
              </p>
            </div>
          </div>
        )}

        <div className="prose prose-slate max-w-none">
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            {lecture.introduction}
          </p>
        </div>

        {/* Why it matters callout */}
        <div className="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
          <Info className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-slate-900 text-sm">Neden Bu Kadar Önemli?</h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
              {lecture.coreConcept.whyItMatters}
            </p>
          </div>
        </div>
      </section>

      {/* Live Conversational Teacher Audio Studio (Natural Bilingual TTS) */}
      <LiveTeacherStudio lecture={lecture} lesson={lesson} />

      {/* 2. Core Linguistic Logic & Explanation */}
      <section className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-100 pb-4 mb-6">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
            <span className="w-2.5 h-6 bg-indigo-600 rounded-full inline-block" />
            Kavramın Mantığı: Neden Böyle Kullanılır?
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Kuralı ezberlemek yerine anadili konuşucularının düşünme mekanizmasını kavrayın
          </p>
        </div>

        <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
          <p>{lecture.coreConcept.explanation}</p>
        </div>

        {/* Step-by-Step Breakdown Sequence */}
        <div className="mt-8 space-y-5">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Adım Adım Pedagojik Analiz ({lecture.breakdownSteps.length} Aşama)
          </h4>

          {lecture.breakdownSteps.map((step) => (
            <div 
              key={step.stepNumber} 
              className="p-5 sm:p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-indigo-200 transition-colors"
            >
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white font-black text-sm flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  {step.stepNumber}
                </div>

                <div className="flex-1 min-w-0">
                  <h5 className="font-bold text-slate-900 text-sm sm:text-base mb-1.5">
                    {step.title}
                  </h5>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3">
                    {step.content}
                  </p>

                  {/* Formula or highlighted phrase */}
                  {step.formula && (
                    <div className="p-3 rounded-xl bg-slate-900 text-indigo-300 font-mono text-xs mb-3 overflow-x-auto shadow-2xs">
                      <span className="text-slate-400 font-sans mr-2">Formül:</span>
                      {step.formula}
                    </div>
                  )}

                  {step.keyPhrase && (
                    <div className="inline-block px-3.5 py-1.5 rounded-xl bg-indigo-100/70 border border-indigo-200 text-indigo-900 font-semibold text-xs mb-2">
                      {step.keyPhrase}
                    </div>
                  )}

                  {/* Rationale explanation */}
                  {step.rationale && (
                    <div className="text-xs text-slate-600 bg-white p-2.5 rounded-lg border border-slate-200/70 mb-2">
                      <span className="font-semibold text-slate-800">Pedagojik Gerekçe: </span>
                      {step.rationale}
                    </div>
                  )}

                  {/* Warning Note */}
                  {step.warningNote && (
                    <div className="text-xs text-rose-700 bg-rose-50 p-2.5 rounded-lg border border-rose-200 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                      <span>{step.warningNote}</span>
                    </div>
                  )}

                  {/* Sub points */}
                  {step.subPoints && step.subPoints.length > 0 && (
                    <ul className="mt-2 space-y-1.5 pl-1">
                      {step.subPoints.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-2" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Contrastive Analysis (If Available) */}
      {lecture.contrastiveAnalysis && (
        <section className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-2 mb-4">
            <Scale className="w-5 h-5 text-indigo-600" />
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              Karşılaştırmalı Analiz: {lecture.contrastiveAnalysis.conceptA} vs {lecture.contrastiveAnalysis.conceptB}
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 mb-4">
            {lecture.contrastiveAnalysis.keyDifference}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-200">
              <span className="text-xs font-bold text-indigo-900 block mb-1">
                {lecture.contrastiveAnalysis.conceptA}
              </span>
              <p className="text-xs sm:text-sm text-slate-800 font-medium">
                {lecture.contrastiveAnalysis.exampleA}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-200">
              <span className="text-xs font-bold text-purple-900 block mb-1">
                {lecture.contrastiveAnalysis.conceptB}
              </span>
              <p className="text-xs sm:text-sm text-slate-800 font-medium">
                {lecture.contrastiveAnalysis.exampleB}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* 4. Common Mistakes & Pitfalls (Sık Yapılan Hatalar) */}
      {lecture.commonMistakes && lecture.commonMistakes.length > 0 && (
        <section className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
          <div className="border-b border-slate-100 pb-4 mb-5">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-rose-600" />
              Sık Yapılan Kritik Öğrenci Hataları ve Doğruları
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Türkçe düşünerek doğrudan çeviri yapmaktan kaynaklanan tuzaklar
            </p>
          </div>

          <div className="space-y-4">
            {lecture.commonMistakes.map((mistake, mIdx) => (
              <div key={mIdx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200/80 text-rose-950">
                    <span className="text-[10px] font-bold text-rose-700 uppercase tracking-wider block mb-0.5">
                      ❌ Yanlış Kullanım
                    </span>
                    <span className="text-xs sm:text-sm font-semibold line-through">
                      "{mistake.wrongExample}"
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200/80 text-emerald-950">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-0.5">
                      ✅ Doğru Kullanım
                    </span>
                    <span className="text-xs sm:text-sm font-bold">
                      "{mistake.correctExample}"
                    </span>
                  </div>
                </div>

                <div className="text-xs text-slate-700 leading-relaxed pt-1">
                  <span className="font-semibold text-slate-900">Hatanın Nedeni: </span>
                  {mistake.rootCause}
                </div>

                <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Akılda Kalıcı İpucu: </strong>{mistake.memoryTip}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 5. Real-World Application Scenario */}
      {lecture.realWorldContext && (
        <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-md relative overflow-hidden">
          <div className="flex items-center gap-2 mb-2">
            <Compass className="w-5 h-5 text-indigo-400" />
            <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider">
              Gerçek Hayat Uygulama Sahnesi
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-extrabold text-white mb-2">
            {lecture.realWorldContext.scenarioTitle}
          </h3>

          <p className="text-xs sm:text-sm text-indigo-100/90 leading-relaxed mb-5">
            {lecture.realWorldContext.description}
          </p>

          {lecture.realWorldContext.dialogue && lecture.realWorldContext.dialogue.length > 0 && (
            <div className="space-y-2.5 p-4 rounded-2xl bg-white/5 border border-white/10">
              {lecture.realWorldContext.dialogue.map((turn, tIdx) => (
                <div key={tIdx} className="text-xs sm:text-sm flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2">
                      {turn.speaker && (
                        <span className="font-bold text-indigo-300 shrink-0">{turn.speaker}:</span>
                      )}
                      <span className="text-white font-medium">{turn.textEn}</span>
                    </div>
                    <div className="text-[11px] text-slate-400 pl-4 mt-0.5">
                      {turn.textTr}
                    </div>
                  </div>
                  <AudioButton text={turn.textEn} size="sm" showSpeedToggle={tIdx === 0} />
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* 6. Memory Hook / Zihinsel Kanca */}
      {lecture.memoryHook && (
        <section className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200/90 flex items-start gap-3.5 shadow-2xs">
          <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-amber-950 text-sm">Öğretmenin Hafıza Kancası (Memory Hook)</h4>
            <p className="text-xs sm:text-sm text-amber-900 font-semibold mt-1 leading-relaxed">
              💡 {lecture.memoryHook}
            </p>
          </div>
        </section>
      )}

      {/* 7. Interactive Quick Comprehension Check */}
      <section className="bg-gradient-to-br from-indigo-50/90 via-white to-slate-50 rounded-3xl border-2 border-indigo-200/80 p-6 sm:p-8 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-xs">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-900 text-base sm:text-lg">
                Öğretmen Anlama Kontrolü
              </h3>
              <p className="text-xs text-slate-500">
                Devam etmeden önce bu soruyu yanıtlayarak konuyu pekiştirin
              </p>
            </div>
          </div>

          <AudioButton text={lecture.quickCheck.question} size="sm" showSpeedToggle />
        </div>

        <p className="text-sm sm:text-base font-semibold text-slate-800 mt-4 mb-4">
          {lecture.quickCheck.question}
        </p>

        <div className="space-y-2.5">
          {lecture.quickCheck.options.map((option, idx) => {
            const isSelected = selectedOption === idx;
            const isCorrectOption = idx === lecture.quickCheck.correctIndex;

            let buttonStyle = "bg-white border-slate-200 hover:border-indigo-300 text-slate-700";

            if (hasSubmittedCheck) {
              if (isCorrectOption) {
                buttonStyle = "bg-emerald-50 border-emerald-400 text-emerald-900 font-semibold ring-2 ring-emerald-400/20";
              } else if (isSelected && !isCorrectOption) {
                buttonStyle = "bg-rose-50 border-rose-300 text-rose-800 line-through";
              } else {
                buttonStyle = "bg-slate-50 border-slate-200 text-slate-400 opacity-60";
              }
            } else if (isSelected) {
              buttonStyle = "bg-indigo-50 border-indigo-500 text-indigo-900 font-semibold";
            }

            return (
              <button
                key={idx}
                disabled={hasSubmittedCheck}
                onClick={() => handleSelectOption(idx)}
                className={`w-full text-left p-3.5 sm:p-4 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between cursor-pointer ${buttonStyle}`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-md bg-slate-100 text-slate-700 text-xs font-bold flex items-center justify-center shrink-0">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span>{option}</span>
                </div>

                <div className="flex items-center gap-2">
                  <AudioButton text={option} size="sm" />
                  {hasSubmittedCheck && isCorrectOption && (
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  )}
                  {hasSubmittedCheck && isSelected && !isCorrectOption && (
                    <X className="w-4 h-4 text-rose-600 shrink-0" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Feedback explanation with retry */}
        {hasSubmittedCheck && (
          <div className={`mt-5 p-4 rounded-xl text-xs sm:text-sm animate-fadeIn ${
            isCheckCorrect 
              ? 'bg-emerald-100/70 border border-emerald-300 text-emerald-950 font-medium' 
              : 'bg-rose-100/70 border border-rose-300 text-rose-950 font-medium'
          }`}>
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <div className="font-bold flex items-center gap-1.5">
                {isCheckCorrect ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-700" />
                    <span>🎉 Harika! Doğru kavrayış.</span>
                  </>
                ) : (
                  <>
                    <Brain className="w-4 h-4 text-rose-700" />
                    <span>💡 Hata Analizi (SRS Hata Bankasına Eklendi):</span>
                  </>
                )}
              </div>

              {!isCheckCorrect && (
                <button
                  onClick={handleRetryCheck}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-rose-300 text-rose-800 hover:bg-rose-50 font-bold text-xs transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Tekrar Dene</span>
                </button>
              )}
            </div>
            <p className="leading-relaxed">{lecture.quickCheck.explanation}</p>
          </div>
        )}
      </section>

      {/* Navigation action */}
      <div className="pt-2 flex justify-end">
        <button
          onClick={onContinue}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-indigo-600 text-white font-bold text-sm hover:bg-indigo-700 active:scale-98 transition-all shadow-sm hover:shadow-md cursor-pointer"
        >
          <span>Örnek Cümlelere ve Kurallara Geç</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </article>
  );
};
