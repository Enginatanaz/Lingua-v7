import React, { useState } from 'react';
import { 
  HelpCircle, 
  Check, 
  X, 
  Lightbulb, 
  ArrowRight, 
  Award,
  RotateCcw,
  Sparkles,
  Volume2,
  Brain,
  Zap,
  CheckCircle2,
  AlertTriangle,
  Flame,
  BookmarkCheck,
  Headphones
} from 'lucide-react';
import { LessonData, ExerciseItem } from '../../types/lesson';
import { addMistake, resolveMistake } from '../../services/srsEngine';
import { updateWordMastery, recordSkillPerformance } from '../../services/studentMemoryEngine';
import { AudioButton } from '../common/AudioButton';
import { validateStudentAnswer, ValidationResult } from '../../utils/answerValidator';
import { AdaptiveLessonSupplement } from '../../types/adaptive';
import { MistakeRecord } from '../../types/srs';

interface StepExercisesProps {
  lesson: LessonData;
  adaptiveSupplement?: AdaptiveLessonSupplement;
  exerciseAnswers: Record<string, { userAnswer: string; isCorrect: boolean }>;
  onRecordAnswer: (exerciseId: string, answer: string, isCorrect: boolean) => void;
  onContinue: () => void;
}

export const StepExercises: React.FC<StepExercisesProps> = ({
  lesson,
  adaptiveSupplement,
  exerciseAnswers,
  onRecordAnswer,
  onContinue,
}) => {
  const [fillInputs, setFillInputs] = useState<Record<string, string>>({});
  const [showHints, setShowHints] = useState<Record<string, boolean>>({});
  const [validationResults, setValidationResults] = useState<Record<string, ValidationResult>>({});
  
  // Mistake diagnostics & remedial state
  const [mistakeRecords, setMistakeRecords] = useState<Record<string, MistakeRecord>>({});
  const [remedialAnswers, setRemedialAnswers] = useState<Record<string, { option: string; isCorrect: boolean }>>({});
  const [resolvedRemedials, setResolvedRemedials] = useState<Record<string, boolean>>({});

  // Interleaved review state (SRS past lesson question)
  const [interleavedAnswer, setInterleavedAnswer] = useState<string | null>(null);
  const [isInterleavedSubmitted, setIsInterleavedSubmitted] = useState<boolean>(false);

  // Use adapted exercises if provided
  const exercises = adaptiveSupplement?.adaptedExercises || lesson.exercises;

  const handleSelectOption = (exercise: ExerciseItem, option: string) => {
    if (exerciseAnswers[exercise.id]) return;

    const val = validateStudentAnswer(option, exercise.correctAnswer);
    setValidationResults((prev) => ({ ...prev, [exercise.id]: val }));
    onRecordAnswer(exercise.id, option, val.isCorrect);

    // Update student memory & skills
    recordSkillPerformance('grammar', val.isCorrect, { topic: lesson.title });
    if (exercise.sentence) {
      exercise.sentence.replace(/[^\w\s]/gi, '').split(/\s+/).forEach((w) => {
        if (w.length > 3) updateWordMastery(w, val.isCorrect ? 'recalled' : 'mistake');
      });
    }

    if (!val.isCorrect) {
      const rec = addMistake({
        lessonId: lesson.id,
        lessonTitle: lesson.title,
        lessonCode: lesson.code,
        level: lesson.level,
        exerciseId: exercise.id,
        prompt: exercise.prompt,
        sentence: exercise.sentence,
        userWrongAnswer: option,
        correctAnswer: exercise.correctAnswer,
        explanation: exercise.explanation,
      });
      setMistakeRecords((prev) => ({ ...prev, [exercise.id]: rec }));
    }
  };

  const handleFillSubmit = (exercise: ExerciseItem) => {
    const userInput = fillInputs[exercise.id] || '';
    if (!userInput.trim()) return;

    const val = validateStudentAnswer(userInput.trim(), exercise.correctAnswer);
    setValidationResults((prev) => ({ ...prev, [exercise.id]: val }));
    onRecordAnswer(exercise.id, userInput.trim(), val.isCorrect);

    recordSkillPerformance('grammar', val.isCorrect, { topic: lesson.title });

    if (!val.isCorrect) {
      const rec = addMistake({
        lessonId: lesson.id,
        lessonTitle: lesson.title,
        lessonCode: lesson.code,
        level: lesson.level,
        exerciseId: exercise.id,
        prompt: exercise.prompt,
        sentence: exercise.sentence,
        userWrongAnswer: userInput.trim(),
        correctAnswer: exercise.correctAnswer,
        explanation: exercise.explanation,
      });
      setMistakeRecords((prev) => ({ ...prev, [exercise.id]: rec }));
    }
  };

  const handleRemedialSelect = (exerciseId: string, option: string, correctAnswer: string, mistakeId: string) => {
    const isCorrect = option.trim().toLowerCase() === correctAnswer.trim().toLowerCase();
    setRemedialAnswers((prev) => ({
      ...prev,
      [exerciseId]: { option, isCorrect },
    }));

    if (isCorrect) {
      resolveMistake(mistakeId);
      setResolvedRemedials((prev) => ({ ...prev, [exerciseId]: true }));
      recordSkillPerformance('grammar', true, { topic: 'Remedial Drill Success' });
    }
  };

  const handleRetry = (exerciseId: string) => {
    setFillInputs((prev) => ({ ...prev, [exerciseId]: '' }));
    setValidationResults((prev) => {
      const next = { ...prev };
      delete next[exerciseId];
      return next;
    });
    setRemedialAnswers((prev) => {
      const next = { ...prev };
      delete next[exerciseId];
      return next;
    });
    onRecordAnswer(exerciseId, '', false);
  };

  const toggleHint = (id: string) => {
    setShowHints((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const answeredCount = Object.keys(exerciseAnswers).length;
  const correctCount = Object.values(exerciseAnswers).filter((a) => a.isCorrect).length;
  const allAnswered = answeredCount >= exercises.length;

  const categoryBadges: Record<string, { label: string; bg: string; text: string }> = {
    grammatical: { label: 'Dil Bilgisi / Çekim', bg: 'bg-purple-100', text: 'text-purple-800' },
    lexical: { label: 'Sözcük Seçimi & Eşdizim', bg: 'bg-emerald-100', text: 'text-emerald-800' },
    structural: { label: 'Cümle Yapısı & Sözcük Dizimi', bg: 'bg-indigo-100', text: 'text-indigo-800' },
    spelling_phonological: { label: 'Yazım & Fonetik', bg: 'bg-amber-100', text: 'text-amber-800' },
    pragmatic_nuance: { label: 'Bağlamsal Üslup & Nüans', bg: 'bg-sky-100', text: 'text-sky-800' },
  };

  return (
    <div className="space-y-6 animate-fadeIn max-w-4xl mx-auto">
      {/* 1. Header and Progress Badge */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-wider mb-2">
              <HelpCircle className="w-4 h-4" />
              <span>Bölüm 4 — İnteraktif Alıştırmalar & Uyarlanabilir Pratik</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Kavrama ve Uygulama Alıştırmaları
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Soruları çözün, anında pedagojik hata teşhisi alın ve zayıf noktaları telafi edin.
            </p>
          </div>

          <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 shrink-0">
            <span className="text-xs font-semibold text-slate-600">Durum:</span>
            <span className="text-sm font-bold text-indigo-600">{answeredCount} / {exercises.length}</span>
            {allAnswered && (
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                {correctCount} Doğru
              </span>
            )}
          </div>
        </div>

        {/* Listening & Focus Prompt Bar */}
        {adaptiveSupplement?.listeningSupport && (
          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-slate-700">
              <Headphones className="w-4 h-4 text-indigo-600 shrink-0" />
              <span className="font-semibold">{adaptiveSupplement.listeningSupport.preListeningPromptTr}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-400 font-medium">Önerilen Hız:</span>
              <span className="font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-indigo-700">
                {adaptiveSupplement.listeningSupport.suggestedSpeed}x
              </span>
            </div>
          </div>
        )}
      </div>

      {/* 2. INTERLEAVED RETRIEVAL (Spaced Repetition Warm-up / Hafıza Isınma) */}
      {adaptiveSupplement?.interleavedReview && adaptiveSupplement.interleavedReview.questions.length > 0 && (
        <section className="bg-gradient-to-br from-indigo-50/90 to-amber-50/80 rounded-2xl border border-indigo-200 p-5 sm:p-6 shadow-xs animate-fadeIn">
          <div className="flex items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-amber-500" />
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-900">
                {adaptiveSupplement.interleavedReview.badgeTr}
              </span>
            </div>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-indigo-100 text-indigo-800">
              Aralıklı Tekrar (SRS)
            </span>
          </div>

          <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
            {adaptiveSupplement.interleavedReview.titleTr}
          </h3>
          <p className="text-xs text-slate-600 mb-4">
            {adaptiveSupplement.interleavedReview.descriptionTr}
          </p>

          {adaptiveSupplement.interleavedReview.questions.map((q) => {
            const isCorrect = interleavedAnswer?.toLowerCase() === q.correctAnswer.toLowerCase();
            return (
              <div key={q.id} className="bg-white rounded-xl p-4 border border-indigo-100 space-y-3">
                <p className="text-xs sm:text-sm font-semibold text-slate-800">{q.prompt}</p>
                {q.sentence && (
                  <div className="p-3 bg-slate-50 rounded-lg font-mono text-sm font-bold text-slate-900 flex items-center justify-between">
                    <span>{q.sentence}</span>
                    <AudioButton text={q.sentence} size="sm" />
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {q.options?.map((opt, idx) => (
                    <button
                      key={idx}
                      disabled={isInterleavedSubmitted}
                      onClick={() => {
                        setInterleavedAnswer(opt);
                        setIsInterleavedSubmitted(true);
                      }}
                      className={`p-2.5 rounded-lg text-xs font-semibold border text-left transition-all cursor-pointer ${
                        isInterleavedSubmitted
                          ? opt.toLowerCase() === q.correctAnswer.toLowerCase()
                            ? 'bg-emerald-50 border-emerald-400 text-emerald-900 font-bold'
                            : interleavedAnswer === opt
                            ? 'bg-rose-50 border-rose-300 text-rose-800 line-through'
                            : 'bg-slate-50 border-slate-100 text-slate-400 opacity-60'
                          : 'bg-white border-slate-200 hover:border-indigo-400 hover:bg-indigo-50/40 text-slate-800'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>

                {isInterleavedSubmitted && (
                  <div className={`p-3 rounded-lg text-xs ${isCorrect ? 'bg-emerald-50 text-emerald-900' : 'bg-amber-50 text-amber-900'}`}>
                    <strong>{isCorrect ? '✓ Harika Hatırladınız!' : '💡 Hatırlatma:'}</strong> {q.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </section>
      )}

      {/* 3. Exercises List */}
      <div className="space-y-5">
        {exercises.map((exercise, index) => {
          const userState = exerciseAnswers[exercise.id];
          const hasAnswered = !!userState;
          const isCorrect = userState?.isCorrect;
          const mistakeRecord = mistakeRecords[exercise.id];
          const remedialResult = remedialAnswers[exercise.id];
          const isResolved = resolvedRemedials[exercise.id];

          return (
            <div
              key={exercise.id}
              className={`bg-white rounded-2xl border p-5 sm:p-6 shadow-xs transition-all ${
                hasAnswered
                  ? isCorrect
                    ? 'border-emerald-300 ring-1 ring-emerald-300/40'
                    : 'border-rose-300 ring-1 ring-rose-300/40'
                  : 'border-slate-200/90'
              }`}
            >
              {/* Question Header */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-700">
                    Soru {index + 1}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase">
                    {exercise.type === 'multiple-choice' ? 'Çoktan Seçmeli' : 'Boşluk Doldurma'}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {exercise.hint && !hasAnswered && (
                    <button
                      onClick={() => toggleHint(exercise.id)}
                      className="flex items-center gap-1 text-xs text-amber-700 hover:text-amber-800 bg-amber-50 hover:bg-amber-100 px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
                    >
                      <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                      <span>{showHints[exercise.id] ? 'İpucunu Gizle' : 'İpucu Gör'}</span>
                    </button>
                  )}

                  {exercise.sentence && (
                    <AudioButton text={exercise.sentence} size="sm" showSpeedToggle />
                  )}
                </div>
              </div>

              {/* Prompt & Sentence */}
              <div className="mb-4">
                <p className="text-xs sm:text-sm font-medium text-slate-500 mb-1">
                  {exercise.prompt}
                </p>
                {exercise.sentence && (
                  <p className="text-base sm:text-lg font-bold text-slate-900 bg-slate-50 p-3.5 rounded-xl border border-slate-200 font-sans">
                    {exercise.sentence}
                  </p>
                )}
              </div>

              {/* Hint Callout */}
              {showHints[exercise.id] && !hasAnswered && exercise.hint && (
                <div className="mb-4 p-3 rounded-xl bg-amber-50 border border-amber-200/70 text-xs sm:text-sm text-amber-900 flex items-start gap-2 animate-fadeIn">
                  <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>{exercise.hint}</span>
                </div>
              )}

              {/* Multiple Choice Options */}
              {exercise.type === 'multiple-choice' && exercise.options && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {exercise.options.map((opt, optIdx) => {
                    const isSelected = userState?.userAnswer === opt;
                    const isCorrectOpt = opt.toLowerCase() === exercise.correctAnswer.toLowerCase();

                    let btnClass = "bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-800";
                    if (hasAnswered) {
                      if (isCorrectOpt) {
                        btnClass = "bg-emerald-50 border-emerald-500 text-emerald-900 font-bold ring-2 ring-emerald-400/20";
                      } else if (isSelected && !isCorrectOpt) {
                        btnClass = "bg-rose-50 border-rose-300 text-rose-800 line-through";
                      } else {
                        btnClass = "bg-slate-50 border-slate-100 text-slate-400 opacity-60";
                      }
                    }

                    return (
                      <button
                        key={optIdx}
                        disabled={hasAnswered}
                        onClick={() => handleSelectOption(exercise, opt)}
                        className={`p-3.5 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${btnClass}`}
                      >
                        <span className="flex items-center gap-2.5">
                          <span className="w-6 h-6 rounded-md bg-white text-slate-700 text-xs font-bold flex items-center justify-center border border-slate-200/80">
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          <span>{opt}</span>
                        </span>

                        {hasAnswered && isCorrectOpt && <Check className="w-4 h-4 text-emerald-600" />}
                        {hasAnswered && isSelected && !isCorrectOpt && <X className="w-4 h-4 text-rose-600" />}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Fill in the blank input */}
              {exercise.type === 'fill-blank' && (
                <div className="space-y-3">
                  {!hasAnswered ? (
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Cevabınızı buraya yazın..."
                        value={fillInputs[exercise.id] || ''}
                        onChange={(e) => setFillInputs({ ...fillInputs, [exercise.id]: e.target.value })}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') handleFillSubmit(exercise);
                        }}
                        className="flex-1 px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 bg-white"
                      />
                      <button
                        onClick={() => handleFillSubmit(exercise)}
                        disabled={!fillInputs[exercise.id]?.trim()}
                        className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs sm:text-sm hover:bg-indigo-700 disabled:opacity-40 transition-colors cursor-pointer"
                      >
                        Cevapla
                      </button>
                    </div>
                  ) : (
                    <div className={`p-3.5 rounded-xl border text-sm flex items-center justify-between ${
                      isCorrect ? 'bg-emerald-50 border-emerald-300 text-emerald-900' : 'bg-rose-50 border-rose-300 text-rose-900'
                    }`}>
                      <div>
                        <span>Sizin Cevabınız: <strong>{userState.userAnswer}</strong></span>
                        {!isCorrect && (
                          <span className="ml-3 text-slate-600 font-semibold">(Doğru cevap: <em>{exercise.correctAnswer}</em>)</span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <AudioButton text={exercise.correctAnswer} size="sm" />
                        {isCorrect ? <Check className="w-5 h-5 text-emerald-600" /> : <X className="w-5 h-5 text-rose-600" />}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Feedback and Intelligent Diagnosis Card */}
              {hasAnswered && (
                <div className="mt-4 space-y-4 animate-fadeIn">
                  {/* Basic Explanation */}
                  <div className={`p-4 rounded-xl text-xs sm:text-sm border ${
                    isCorrect
                      ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
                      : 'bg-rose-50/80 border-rose-200 text-rose-950'
                  }`}>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="font-bold flex items-center gap-2">
                        {isCorrect ? (
                          <>
                            <Check className="w-4 h-4 text-emerald-600" />
                            <span>Doğru Yanıt — Harika Çıkarım!</span>
                          </>
                        ) : (
                          <>
                            <Brain className="w-4 h-4 text-rose-600" />
                            <span>Hata Analizi (MistakeBank'e Kaydedildi):</span>
                          </>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        {!isCorrect && (
                          <button
                            onClick={() => handleRetry(exercise.id)}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-rose-200 text-rose-700 hover:bg-rose-100 font-bold text-xs transition-colors cursor-pointer"
                          >
                            <RotateCcw className="w-3 h-3" />
                            <span>Yeniden Çöz</span>
                          </button>
                        )}
                        <AudioButton text={exercise.correctAnswer} size="sm" label="Doğrusunu Dinle" />
                      </div>
                    </div>
                    <p className="leading-relaxed text-slate-700">{exercise.explanation}</p>
                  </div>

                  {/* AKILLI HATA TEŞHİSİ VE ANINDA TELAFİ ALIŞTIRMASI */}
                  {!isCorrect && mistakeRecord && (
                    <div className="p-5 rounded-2xl bg-amber-50/70 border-2 border-amber-300 text-slate-800 space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-200 pb-3">
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-amber-600" />
                          <span className="font-bold text-xs uppercase tracking-wider text-amber-900">
                            Pedagojik Hata Teşhisi
                          </span>
                        </div>
                        {mistakeRecord.errorCategory && categoryBadges[mistakeRecord.errorCategory] && (
                          <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${categoryBadges[mistakeRecord.errorCategory].bg} ${categoryBadges[mistakeRecord.errorCategory].text}`}>
                            {categoryBadges[mistakeRecord.errorCategory].label}
                          </span>
                        )}
                      </div>

                      <div className="space-y-1.5 text-xs sm:text-sm">
                        <p className="text-slate-700">
                          <strong className="text-slate-900">Hata Analizi: </strong>
                          {mistakeRecord.diagnosis}
                        </p>
                        {mistakeRecord.ruleSnippet && (
                          <p className="text-amber-900 bg-amber-100/60 p-2.5 rounded-xl border border-amber-200 font-mono text-xs">
                            💡 {mistakeRecord.ruleSnippet}
                          </p>
                        )}
                      </div>

                      {/* Interactive Remedial Drill (Telafi Sorusu) */}
                      {mistakeRecord.remedialQuestion && (
                        <div className="mt-3 p-4 rounded-xl bg-white border border-amber-200 shadow-2xs space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-indigo-700 uppercase tracking-wide flex items-center gap-1.5">
                              <Zap className="w-3.5 h-3.5 text-indigo-600" />
                              Anında Telafi Alıştırması (Remedial Drill)
                            </span>
                            {isResolved && (
                              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                Çözüldü & Pekiştirildi
                              </span>
                            )}
                          </div>

                          <p className="text-xs sm:text-sm font-semibold text-slate-900">
                            {mistakeRecord.remedialQuestion.prompt}
                          </p>

                          {mistakeRecord.remedialQuestion.sentence && (
                            <p className="text-xs sm:text-sm font-mono p-2.5 bg-slate-50 rounded-lg text-slate-800">
                              {mistakeRecord.remedialQuestion.sentence}
                            </p>
                          )}

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                            {mistakeRecord.remedialQuestion.options?.map((opt, oIdx) => (
                              <button
                                key={oIdx}
                                disabled={isResolved}
                                onClick={() => handleRemedialSelect(
                                  exercise.id,
                                  opt,
                                  mistakeRecord.remedialQuestion!.correctAnswer,
                                  mistakeRecord.id
                                )}
                                className={`p-2.5 rounded-lg text-xs font-semibold border text-left transition-all cursor-pointer ${
                                  isResolved && opt.toLowerCase() === mistakeRecord.remedialQuestion!.correctAnswer.toLowerCase()
                                    ? 'bg-emerald-600 text-white font-bold border-emerald-700'
                                    : remedialResult?.option === opt && !remedialResult.isCorrect
                                    ? 'bg-rose-100 text-rose-800 border-rose-300'
                                    : 'bg-slate-50 border-slate-200 hover:bg-indigo-50 hover:border-indigo-300 text-slate-800'
                                }`}
                              >
                                {opt}
                              </button>
                            ))}
                          </div>

                          {isResolved && (
                            <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-900 text-xs flex items-center gap-2">
                              <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                              <span>{mistakeRecord.remedialQuestion.explanation}</span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Action CTA */}
      <div className="pt-2 flex justify-end">
        <button
          onClick={onContinue}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 text-white font-bold text-sm hover:bg-indigo-700 active:scale-98 transition-all shadow-sm hover:shadow-md cursor-pointer"
        >
          <span>Kendi Cümleni Kurma Laboratuvarına Geç</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
