import React from 'react';
import { 
  Sparkles, 
  BookOpen, 
  MessageSquareQuote, 
  HelpCircle, 
  Puzzle, 
  CheckCircle2 
} from 'lucide-react';
import { LESSON_STEPS } from '../data/lessonsData';
import { LessonStepDef } from '../types/lesson';

interface StepNavigationProps {
  currentStepIndex: number;
  completedSteps: number[];
  onSelectStep: (index: number) => void;
}

const stepIcons: Record<string, React.ReactNode> = {
  intro: <Sparkles className="w-4 h-4" />,
  lecture: <BookOpen className="w-4 h-4" />,
  examples: <MessageSquareQuote className="w-4 h-4" />,
  exercises: <HelpCircle className="w-4 h-4" />,
  sentence: <Puzzle className="w-4 h-4" />,
  summary: <CheckCircle2 className="w-4 h-4" />,
};

export const StepNavigation: React.FC<StepNavigationProps> = ({
  currentStepIndex,
  completedSteps,
  onSelectStep,
}) => {
  return (
    <nav className="bg-slate-100/90 border-b border-slate-200/90 py-2 px-3 sm:px-6">
      <div className="max-w-7xl mx-auto overflow-x-auto scrollbar-none py-0.5">
        <ol className="flex items-center min-w-max md:min-w-0 md:justify-between gap-1 sm:gap-2">
          {LESSON_STEPS.map((step: LessonStepDef, idx: number) => {
            const isActive = idx === currentStepIndex;
            const isCompleted = completedSteps.includes(idx);
            const isPast = idx < currentStepIndex;

            return (
              <li key={step.key} className="flex-1">
                <button
                  onClick={() => onSelectStep(idx)}
                  className={`w-full group flex items-center gap-2 px-3 py-2 rounded-xl text-left transition-all ${
                    isActive
                      ? 'bg-white text-indigo-700 shadow-sm border border-indigo-200/80 font-bold'
                      : isCompleted
                      ? 'bg-slate-50/80 hover:bg-white text-slate-700 font-medium'
                      : 'text-slate-500 hover:bg-slate-200/60 font-medium'
                  }`}
                >
                  {/* Step number badge / icon */}
                  <div
                    className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs shrink-0 transition-colors ${
                      isActive
                        ? 'bg-indigo-600 text-white'
                        : isCompleted
                        ? 'bg-emerald-100 text-emerald-700 font-bold'
                        : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {isCompleted && !isActive ? '✓' : step.stepNumber}
                  </div>

                  {/* Step Title */}
                  <div className="min-w-0">
                    <span className="text-xs tracking-tight block truncate">
                      <span className="hidden sm:inline">{step.label}</span>
                      <span className="sm:hidden">{step.shortLabel}</span>
                    </span>
                  </div>
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};
