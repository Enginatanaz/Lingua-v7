import React from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  Award,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { LESSON_STEPS } from '../data/lessonsData';

interface BottomToolbarProps {
  currentStepIndex: number;
  totalSteps: number;
  isLessonCompleted: boolean;
  onPrev: () => void;
  onNext: () => void;
  onFinishLesson: () => void;
}

export const BottomToolbar: React.FC<BottomToolbarProps> = ({
  currentStepIndex,
  totalSteps,
  isLessonCompleted,
  onPrev,
  onNext,
  onFinishLesson,
}) => {
  const isFirstStep = currentStepIndex === 0;
  const isLastStep = currentStepIndex === totalSteps - 1;

  const currentStep = LESSON_STEPS[currentStepIndex];
  const nextStep = !isLastStep ? LESSON_STEPS[currentStepIndex + 1] : null;

  return (
    <div className="sticky bottom-0 z-20 bg-white/95 backdrop-blur-md border-t border-slate-200/90 py-3.5 px-4 sm:px-6 lg:px-8 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Prev Step Button */}
        <button
          onClick={onPrev}
          disabled={isFirstStep}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-xs sm:text-sm hover:bg-slate-50 disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Önceki Adım</span>
          <span className="sm:hidden">Geri</span>
        </button>

        {/* Step Indicator In Center */}
        <div className="text-center">
          <div className="text-xs font-bold text-slate-900">
            {currentStep.label}
          </div>
          <div className="text-[11px] text-slate-500 font-medium">
            Adım {currentStepIndex + 1} / {totalSteps}
          </div>
        </div>

        {/* Next Step / Complete Action */}
        {!isLastStep ? (
          <button
            onClick={onNext}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs sm:text-sm hover:bg-indigo-700 active:scale-98 transition-all shadow-sm hover:shadow-md cursor-pointer"
          >
            <span className="hidden sm:inline">Sonraki: {nextStep?.shortLabel}</span>
            <span className="sm:hidden">İleri</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={onFinishLesson}
            className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-white font-bold text-xs sm:text-sm active:scale-98 transition-all shadow-sm cursor-pointer ${
              isLessonCompleted
                ? 'bg-emerald-600 hover:bg-emerald-700'
                : 'bg-indigo-600 hover:bg-indigo-700'
            }`}
          >
            <Check className="w-4 h-4" />
            <span>{isLessonCompleted ? 'Ders Tamamlandı' : 'Dersi Bitir'}</span>
          </button>
        )}
      </div>
    </div>
  );
};
