import React, { useState } from 'react';
import { 
  Puzzle, 
  RotateCcw, 
  Check, 
  X, 
  ArrowRight, 
  Sparkles,
  HelpCircle,
  Keyboard,
  Layers,
  Lightbulb,
  Brain
} from 'lucide-react';
import { LessonData } from '../../types/lesson';
import { AudioButton } from '../common/AudioButton';
import { addMistake } from '../../services/srsEngine';
import { validateStudentAnswer, ValidationResult } from '../../utils/answerValidator';

interface StepSentenceBuilderProps {
  lesson: LessonData;
  sentenceCompleted: boolean;
  onSetSentenceCompleted: (val: boolean) => void;
  onContinue: () => void;
}

export const StepSentenceBuilder: React.FC<StepSentenceBuilderProps> = ({
  lesson,
  sentenceCompleted,
  onSetSentenceCompleted,
  onContinue,
}) => {
  const task = lesson.sentenceBuilderTask;
  
  // Modes: 'tiles' (block clicking) or 'typing' (free keyboard input)
  const [inputMode, setInputMode] = useState<'tiles' | 'typing'>('tiles');
  const [typedInput, setTypedInput] = useState<string>('');
  const [showHint, setShowHint] = useState<boolean>(false);

  // Available words in bank (word + unique token index)
  const [bankWords, setBankWords] = useState<{ id: string; word: string }[]>(() =>
    task.availableWords.map((w, idx) => ({ id: `token-${idx}-${w}`, word: w }))
  );

  // User's constructed sentence sequence
  const [selectedTokens, setSelectedTokens] = useState<{ id: string; word: string }[]>([]);
  const [resultState, setResultState] = useState<'idle' | 'correct' | 'wrong'>(
    sentenceCompleted ? 'correct' : 'idle'
  );
  const [validationInfo, setValidationInfo] = useState<ValidationResult | null>(null);

  // Add word from bank to sentence
  const handleSelectWord = (token: { id: string; word: string }) => {
    if (resultState === 'correct') return;
    setSelectedTokens((prev) => [...prev, token]);
    setBankWords((prev) => prev.filter((t) => t.id !== token.id));
    setResultState('idle');
  };

  // Remove word from sentence back to bank
  const handleRemoveWord = (token: { id: string; word: string }) => {
    if (resultState === 'correct') return;
    setSelectedTokens((prev) => prev.filter((t) => t.id !== token.id));
    setBankWords((prev) => [...prev, token]);
    setResultState('idle');
  };

  // Reset words and input
  const handleReset = () => {
    setSelectedTokens([]);
    setBankWords(task.availableWords.map((w, idx) => ({ id: `token-${idx}-${w}`, word: w })));
    setTypedInput('');
    setResultState('idle');
    setValidationInfo(null);
  };

  // Validate answer
  const handleCheck = () => {
    const candidateText =
      inputMode === 'tiles'
        ? selectedTokens.map((t) => t.word).join(' ').trim()
        : typedInput.trim();

    if (!candidateText) return;

    const val = validateStudentAnswer(candidateText, task.targetEn);
    setValidationInfo(val);

    if (val.isCorrect) {
      setResultState('correct');
      onSetSentenceCompleted(true);
    } else {
      setResultState('wrong');
      addMistake({
        lessonId: lesson.id,
        lessonTitle: lesson.title,
        lessonCode: lesson.code,
        level: lesson.level,
        exerciseId: `sb-${lesson.id}`,
        prompt: `Kendi Cümleni Oluştur: "${task.promptTr}"`,
        userWrongAnswer: candidateText,
        correctAnswer: task.targetEn,
        explanation: task.explanation,
      });
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn max-w-4xl mx-auto">
      {/* Intro Header & Mode Switcher */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-wider mb-2">
              <Puzzle className="w-4 h-4" />
              <span>Bölüm 5 — Kendi Cümleni Oluşturma & Üretim</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Cümle Kurucu Laboratuvarı
            </h2>

            <p className="text-sm text-slate-600 mt-1">
              Türkçe hedef anlamı İngilizceye aktarın. İster kelime bloklarını sırayla dizin, ister klavyenizle özgürce yazın.
            </p>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center bg-slate-100 p-1 rounded-xl self-start sm:self-center border border-slate-200">
            <button
              onClick={() => { setInputMode('tiles'); setResultState('idle'); }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                inputMode === 'tiles'
                  ? 'bg-white text-indigo-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Kelime Blokları</span>
            </button>
            <button
              onClick={() => { setInputMode('typing'); setResultState('idle'); }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                inputMode === 'typing'
                  ? 'bg-white text-indigo-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Keyboard className="w-3.5 h-3.5" />
              <span>Klavyeyle Yaz</span>
            </button>
          </div>
        </div>
      </div>

      {/* Target Turkish Prompt Box */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-6 shadow-sm border border-slate-800">
        <div className="flex items-center justify-between gap-3 mb-2">
          <span className="text-xs font-semibold text-indigo-300 uppercase tracking-wider block">
            Hedef Türkçe Anlam:
          </span>
          <button
            onClick={() => setShowHint(!showHint)}
            className="flex items-center gap-1 text-xs text-amber-300 hover:text-amber-200 font-semibold cursor-pointer"
          >
            <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
            <span>{showHint ? 'İpucunu Kapat' : 'İpucu Gör'}</span>
          </button>
        </div>

        <div className="text-xl sm:text-2xl font-bold tracking-tight text-white">
          "{task.promptTr}"
        </div>

        {showHint && (
          <div className="mt-3 p-3 rounded-xl bg-amber-400/10 border border-amber-300/30 text-xs sm:text-sm text-amber-200 animate-fadeIn">
            <strong>Pedagojik İpucu:</strong> Bu cümlede <em>"{task.availableWords.slice(0, 3).join(', ')}"</em> gibi temel bileşenleri ve ilgili zaman/kalıp kuralını kullanmalısınız.
          </div>
        )}
      </div>

      {/* Mode 1: Tiles Word Assembly Area */}
      {inputMode === 'tiles' && (
        <div className={`rounded-2xl border-2 p-5 sm:p-6 transition-all min-h-[130px] flex flex-col justify-between ${
          resultState === 'correct'
            ? 'bg-emerald-50/70 border-emerald-400'
            : resultState === 'wrong'
            ? 'bg-rose-50/60 border-rose-400'
            : 'bg-white border-dashed border-indigo-200'
        }`}>
          <div>
            <div className="flex items-center justify-between text-xs text-slate-500 font-semibold mb-3">
              <span>Oluşturulan Cümle (Kelimeleri çıkarmak için üzerine tıklayın):</span>
              {selectedTokens.length > 0 && resultState !== 'correct' && (
                <button
                  onClick={handleReset}
                  className="text-slate-500 hover:text-slate-800 flex items-center gap-1 cursor-pointer font-bold"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Sıfırla</span>
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-2.5 min-h-[44px] items-center">
              {selectedTokens.length === 0 ? (
                <span className="text-slate-400 text-sm italic">
                  Aşağıdaki kelime havuzundan kelimelere tıklayarak cümleyi başlatın...
                </span>
              ) : (
                selectedTokens.map((token) => (
                  <button
                    key={token.id}
                    onClick={() => handleRemoveWord(token)}
                    disabled={resultState === 'correct'}
                    className="px-3.5 py-2 rounded-xl bg-indigo-600 text-white font-semibold text-sm sm:text-base shadow-xs hover:bg-indigo-700 active:scale-95 transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <span>{token.word}</span>
                  </button>
                ))
              )}
            </div>
          </div>

          {/* Action button inside assembly */}
          <div className="mt-5 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <div>
              {resultState === 'correct' && (
                <div className="flex flex-wrap items-center gap-3 text-emerald-800 font-bold text-sm">
                  <span className="flex items-center gap-1.5">
                    <Check className="w-5 h-5 text-emerald-600" />
                    <span>Mükemmel! Doğru cümle kuruldu.</span>
                  </span>
                  <AudioButton text={task.targetEn} size="sm" showSpeedToggle label="Telaffuzu Dinle" />
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-emerald-300 text-emerald-800 hover:bg-emerald-100/60 font-semibold text-xs transition-colors cursor-pointer"
                    title="Cümleyi baştan kur"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Yeniden Kur</span>
                  </button>
                </div>
              )}
              {resultState === 'wrong' && (
                <div className="flex items-center gap-1.5 text-rose-700 font-semibold text-xs sm:text-sm">
                  <X className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>Kelime dizilimi hatalı (Hata Bankasına Kaydedildi). Sıralamayı kontrol edip tekrar deneyin.</span>
                </div>
              )}
            </div>

            {resultState !== 'correct' && (
              <button
                onClick={handleCheck}
                disabled={selectedTokens.length === 0}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs sm:text-sm hover:bg-indigo-700 disabled:opacity-40 transition-all shadow-xs cursor-pointer"
              >
                Cümleyi Kontrol Et
              </button>
            )}
          </div>
        </div>
      )}

      {/* Mode 2: Free Typing Input Area */}
      {inputMode === 'typing' && (
        <div className={`bg-white rounded-2xl border-2 p-5 sm:p-6 transition-all ${
          resultState === 'correct'
            ? 'border-emerald-400 bg-emerald-50/40'
            : resultState === 'wrong'
            ? 'border-rose-400 bg-rose-50/40'
            : 'border-slate-200'
        }`}>
          <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wider">
            İngilizce Cümlenizi Buraya Yazın:
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Örn: I have visited..."
              value={typedInput}
              onChange={(e) => {
                setTypedInput(e.target.value);
                if (resultState !== 'idle') setResultState('idle');
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleCheck();
              }}
              disabled={resultState === 'correct'}
              className="flex-1 px-4 py-3 rounded-xl border border-slate-300 text-sm sm:text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 bg-white"
            />
            {resultState !== 'correct' ? (
              <button
                onClick={handleCheck}
                disabled={!typedInput.trim()}
                className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-bold text-xs sm:text-sm hover:bg-indigo-700 disabled:opacity-40 transition-colors cursor-pointer"
              >
                Kontrol Et
              </button>
            ) : (
              <button
                onClick={handleReset}
                className="px-4 py-3 rounded-xl bg-white border border-emerald-300 text-emerald-800 font-bold text-xs sm:text-sm hover:bg-emerald-50 transition-colors cursor-pointer flex items-center gap-1"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Tekrar Yaz</span>
              </button>
            )}
          </div>

          {/* Feedback & Result Badges */}
          {resultState === 'correct' && (
            <div className="mt-4 p-3.5 rounded-xl bg-emerald-100/70 border border-emerald-300 flex flex-wrap items-center justify-between gap-3 text-emerald-950">
              <div className="flex items-center gap-2 font-bold text-sm">
                <Check className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Harika! Cümleniz dilbilgisi kurallarına tam uygun.</span>
                {validationInfo?.feedbackCategory === 'contraction-variant' && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-200 text-emerald-900">
                    Kısaltma Eşdeğeri Kabul Edildi
                  </span>
                )}
              </div>
              <AudioButton text={task.targetEn} size="sm" showSpeedToggle label="Dinle" />
            </div>
          )}

          {resultState === 'wrong' && (
            <div className="mt-4 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-950 text-xs sm:text-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="font-bold flex items-center gap-1.5 text-rose-800">
                  <X className="w-4 h-4 text-rose-600 shrink-0" />
                  Girdiğiniz cümle hedeflenen kalıpla uyuşmuyor:
                </span>
                <p className="mt-1 text-slate-700">
                  Doğru yapı: <strong>{task.targetEn}</strong>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <AudioButton text={task.targetEn} size="sm" label="Doğrusunu Dinle" />
                <button
                  onClick={handleReset}
                  className="px-3 py-1.5 rounded-lg bg-white border border-rose-200 text-rose-700 font-bold text-xs hover:bg-rose-100 transition-colors"
                >
                  Tekrar Dene
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Word Bank Container (Only in Tiles Mode) */}
      {inputMode === 'tiles' && resultState !== 'correct' && (
        <div className="bg-slate-100/90 rounded-2xl p-5 border border-slate-200/80">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">
            Kullanılabilir Kelime Havuzu ({bankWords.length} Kelime):
          </span>

          <div className="flex flex-wrap gap-2 sm:gap-2.5">
            {bankWords.map((token) => (
              <button
                key={token.id}
                onClick={() => handleSelectWord(token)}
                className="px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-slate-800 font-semibold text-sm hover:border-indigo-400 hover:bg-indigo-50/50 active:scale-95 transition-all shadow-2xs cursor-pointer"
              >
                {token.word}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Detailed Grammar Explanation on Completion */}
      {resultState === 'correct' && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 text-emerald-950 animate-fadeIn">
          <div className="font-bold text-sm mb-1 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>Kazanım ve Yapı Analizi:</span>
          </div>
          <p className="text-xs sm:text-sm leading-relaxed text-emerald-900">{task.explanation}</p>
        </div>
      )}

      {/* Action CTA */}
      <div className="pt-2 flex justify-end">
        <button
          onClick={onContinue}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 text-white font-bold text-sm hover:bg-indigo-700 active:scale-98 transition-all shadow-sm hover:shadow-md cursor-pointer"
        >
          <span>Ders Özeti ve Tamamlamaya Geç</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
