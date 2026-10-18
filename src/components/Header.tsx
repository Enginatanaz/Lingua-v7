import React from 'react';
import { 
  BookOpen, 
  ChevronLeft, 
  ChevronRight, 
  Award, 
  Flame, 
  Menu, 
  Sparkles,
  Volume2,
  SlidersHorizontal,
  GraduationCap,
  LayoutGrid,
  Home
} from 'lucide-react';
import { LessonData, CEFRLevel } from '../types/lesson';
import { LESSON_STEPS } from '../data/lessonsData';

interface HeaderProps {
  lesson: LessonData;
  currentStepIndex: number;
  totalXp: number;
  streakDays: number;
  isCompleted: boolean;
  onGoToMainMenu: () => void;
  onOpenCurriculum: () => void;
  onToggleSidebar: () => void;
  onPrevLesson: () => void;
  onNextLesson: () => void;
  onOpenMistakeBank?: () => void;
  mistakeCount?: number;
}

const levelColorMap: Record<CEFRLevel, { bg: string; text: string; border: string; label: string }> = {
  A1: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', label: 'A1 Başlangıç' },
  A2: { bg: 'bg-teal-50', text: 'text-teal-700', border: 'border-teal-200', label: 'A2 Temel' },
  B1: { bg: 'bg-sky-50', text: 'text-sky-700', border: 'border-sky-200', label: 'B1 Orta' },
  B2: { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200', label: 'B2 İleri Orta' },
  C1: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200', label: 'C1 İleri' },
  C2: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200', label: 'C2 Usta' },
};

export const Header: React.FC<HeaderProps> = ({
  lesson,
  currentStepIndex,
  totalXp,
  streakDays,
  isCompleted,
  onGoToMainMenu,
  onOpenCurriculum,
  onToggleSidebar,
  onPrevLesson,
  onNextLesson,
  onOpenMistakeBank,
  mistakeCount = 0,
}) => {
  const levelStyle = levelColorMap[lesson.level] || levelColorMap.A1;
  const progressPercent = Math.round(((currentStepIndex + 1) / LESSON_STEPS.length) * 100);

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
      {/* Top brand & global meta bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 border-b border-slate-100">
          {/* Brand & navigation buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Main Menu Button */}
            <button
              onClick={onGoToMainMenu}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 text-slate-700 font-bold text-xs transition-all cursor-pointer border border-slate-200/70"
              title="Ana Menüye Dön"
            >
              <LayoutGrid className="w-4 h-4 text-indigo-600" />
              <span>Ana Menü</span>
            </button>

            <div className="h-5 w-px bg-slate-200 hidden sm:block" />

            {/* Brand Title */}
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-sm sm:text-base tracking-tight text-slate-900">
                Lingu<span className="text-indigo-600">AAI</span>
              </span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-sm bg-indigo-50 text-indigo-700 border border-indigo-200/60 uppercase">
                V6.0
              </span>
            </div>

            <div className="h-5 w-px bg-slate-200 hidden md:block" />

            {/* Quick Prev / Next Lesson Buttons */}
            <div className="hidden sm:flex items-center gap-1">
              <button
                onClick={onPrevLesson}
                disabled={lesson.id <= 1}
                className="p-1.5 rounded-md text-slate-500 hover:text-slate-800 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                title="Önceki Ders"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenCurriculum}
                className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors flex items-center gap-1 cursor-pointer"
                title="Müfredat Çekmecesini Aç"
              >
                <span>Ders {lesson.id}</span>
                <span className="text-slate-400 font-normal font-mono">({lesson.code})</span>
              </button>

              <button
                onClick={onNextLesson}
                disabled={lesson.id >= 488}
                className="p-1.5 rounded-md text-slate-500 hover:text-slate-800 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                title="Sonraki Ders"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* User gamification stats & mobile controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* MistakeBank Button */}
            {onOpenMistakeBank && (
              <button
                onClick={onOpenMistakeBank}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                  mistakeCount > 0
                    ? 'bg-amber-50 hover:bg-amber-100 text-amber-800 border-amber-300 shadow-2xs'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border-slate-200'
                }`}
                title="Hata Bankası ve Aralıklı Tekrar (SRS)"
              >
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                <span>Hata Bankası</span>
                {mistakeCount > 0 && (
                  <span className="px-1.5 py-0.2 rounded-full bg-amber-200 text-amber-900 text-[10px]">
                    {mistakeCount}
                  </span>
                )}
              </button>
            )}

            {/* Streak */}
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200/60 text-amber-700 text-xs font-bold" title="Günlük Çalışma Serisi">
              <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500 animate-pulse" />
              <span>{streakDays} gün</span>
            </div>

            {/* Total XP */}
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-indigo-50 border border-indigo-200/60 text-indigo-700 text-xs font-bold" title="Kazanılan Deneyim Puanı">
              <Award className="w-3.5 h-3.5 text-indigo-600" />
              <span>{totalXp} XP</span>
            </div>

            {/* Mobile panel toggle */}
            <button
              onClick={onToggleSidebar}
              className="lg:hidden p-1.5 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
              title="Yardımcı Paneli Aç/Kapat"
            >
              <SlidersHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Lesson Subheader: Level, Title, Objective & Progress bar */}
        <div className="py-2.5 flex flex-col md:flex-row md:items-center justify-between gap-2">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              {/* Level badge */}
              <span className={`inline-flex items-center text-xs font-semibold px-2 py-0.5 rounded-md border ${levelStyle.bg} ${levelStyle.text} ${levelStyle.border}`}>
                {levelStyle.label}
              </span>
              <span className="text-xs text-slate-500 font-medium">
                {lesson.moduleName}
              </span>
              {isCompleted && (
                <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  ✓ Tamamlandı
                </span>
              )}
            </div>

            <h1 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 tracking-tight truncate">
              {lesson.title}
            </h1>

            <p className="text-xs text-slate-600 line-clamp-1 mt-0.5 hidden sm:block">
              <span className="font-semibold text-slate-700">Hedef:</span> {lesson.learningObjective}
            </p>
          </div>

          {/* In-lesson Progress Bar */}
          <div className="flex items-center gap-3 shrink-0 self-start md:self-center">
            <div className="w-28 sm:w-36 flex flex-col gap-1">
              <div className="flex items-center justify-between text-[11px] font-medium text-slate-600">
                <span>Adım {currentStepIndex + 1} / {LESSON_STEPS.length}</span>
                <span className="font-bold text-indigo-600">%{progressPercent}</span>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200/50">
                <div
                  className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
