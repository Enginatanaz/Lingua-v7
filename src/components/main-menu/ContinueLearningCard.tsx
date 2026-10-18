import React from 'react';
import { 
  Play, 
  ArrowRight, 
  Clock, 
  Award, 
  BookOpen, 
  Sparkles,
  CheckCircle2,
  Compass
} from 'lucide-react';
import { LessonData } from '../../types/lesson';
import { LESSON_STEPS } from '../../data/lessonsData';
import { CEFR_LEVELS_INFO } from '../../data/curriculumData';

interface ContinueLearningCardProps {
  lesson: LessonData;
  currentStepIndex: number;
  isCompleted: boolean;
  onContinue: () => void;
}

export const ContinueLearningCard: React.FC<ContinueLearningCardProps> = ({
  lesson,
  currentStepIndex,
  isCompleted,
  onContinue,
}) => {
  const levelInfo = CEFR_LEVELS_INFO[lesson.level] || CEFR_LEVELS_INFO.A1;
  const progressPercent = isCompleted ? 100 : Math.round(((currentStepIndex + 1) / LESSON_STEPS.length) * 100);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-lg relative overflow-hidden border border-slate-800">
      {/* Background Ambient Glow */}
      <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-1/3 bottom-0 translate-y-10 w-60 h-60 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        {/* Left Information */}
        <div className="max-w-2xl space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-bold text-indigo-300 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Öğrenmeye Devam Et
            </span>

            <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${levelInfo.colorScheme.bg} ${levelInfo.colorScheme.text}`}>
              {levelInfo.titleTr}
            </span>

            <span className="text-xs text-slate-400 font-medium font-mono">
              {lesson.code}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-snug">
            {lesson.title}
          </h2>

          <p className="text-xs sm:text-sm text-indigo-100/90 leading-relaxed font-normal line-clamp-2">
            {lesson.learningObjective}
          </p>

          {/* Quick Metrics & Step Bar */}
          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-300">
            <span className="flex items-center gap-1 font-medium">
              <BookOpen className="w-4 h-4 text-indigo-400" />
              {lesson.moduleName}
            </span>

            <span className="flex items-center gap-1 font-medium">
              <Clock className="w-4 h-4 text-indigo-400" />
              ~{lesson.estimatedMinutes} dk
            </span>

            <span className="flex items-center gap-1 font-bold text-amber-300">
              <Award className="w-4 h-4 text-amber-300" />
              +{lesson.xpReward} XP
            </span>

            <span className="flex items-center gap-1.5 font-semibold text-emerald-400">
              <Compass className="w-4 h-4" />
              Adım {currentStepIndex + 1} / {LESSON_STEPS.length} ({LESSON_STEPS[currentStepIndex].shortLabel})
            </span>
          </div>
        </div>

        {/* Right CTA Area */}
        <div className="shrink-0 flex flex-col sm:flex-row md:flex-col items-start sm:items-center md:items-end gap-3 self-stretch md:self-center justify-between md:justify-center">
          {/* Progress ring or mini bar */}
          <div className="w-full sm:w-44 text-right">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-300 mb-1.5">
              <span>Ders İlerlemesi</span>
              <span className="text-indigo-300 font-bold">%{progressPercent}</span>
            </div>
            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden border border-white/10">
              <div 
                className="h-full bg-gradient-to-r from-indigo-400 to-emerald-400 rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Big Action Button */}
          <button
            onClick={onContinue}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-indigo-500 hover:bg-indigo-600 active:scale-98 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-indigo-500/30 transition-all cursor-pointer group"
          >
            <Play className="w-4 h-4 fill-white group-hover:translate-x-0.5 transition-transform" />
            <span>{isCompleted ? 'Dersi Tekrar Et' : 'Derse Devam Et'}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
