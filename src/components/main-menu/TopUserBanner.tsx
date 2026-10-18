import React from 'react';
import { 
  Flame, 
  Award, 
  Target, 
  Sparkles, 
  GraduationCap, 
  Lock, 
  Unlock,
  CheckCircle2,
  TrendingUp,
  Clock
} from 'lucide-react';
import { CEFRLevel } from '../../types/lesson';
import { CEFR_LEVELS_INFO } from '../../data/curriculumData';

interface TopUserBannerProps {
  currentLevel: CEFRLevel;
  totalXp: number;
  streakDays: number;
  completedLessonCount: number;
  totalLessonCount: number;
  unlockAllMode: boolean;
  onToggleUnlockMode: () => void;
}

export const TopUserBanner: React.FC<TopUserBannerProps> = ({
  currentLevel,
  totalXp,
  streakDays,
  completedLessonCount,
  totalLessonCount,
  unlockAllMode,
  onToggleUnlockMode,
}) => {
  const levelInfo = CEFR_LEVELS_INFO[currentLevel] || CEFR_LEVELS_INFO.A1;
  const overallPercent = totalLessonCount > 0 ? Math.round((completedLessonCount / totalLessonCount) * 100) : 0;

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-7 shadow-xs">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        {/* User Greeting & Level Badge */}
        <div className="flex items-start gap-4">
          <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-800 text-white flex items-center justify-center font-extrabold text-xl shadow-md shrink-0 ring-4 ring-indigo-50">
            <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8" />
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-200/60 uppercase">
                LinguAAI v6.0
              </span>
              <span className={`text-xs font-bold px-2.5 py-0.5 rounded-md border ${levelInfo.colorScheme.bg} ${levelInfo.colorScheme.text} ${levelInfo.colorScheme.border}`}>
                {levelInfo.titleTr}
              </span>
            </div>

            <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Hoş Geldiniz! 👋
            </h1>

            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
              Bugünkü hedefinize ulaşmak için öğrenme yolculuğuna devam edin.
            </p>
          </div>
        </div>

        {/* Metrics Bar & Progression Mode Toggle */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          {/* Daily Goal Widget */}
          <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
              <Target className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-semibold text-slate-500">Günlük Hedef</div>
              <div className="text-xs font-bold text-slate-900">2 Ders / 20 dk</div>
            </div>
          </div>

          {/* Streak Widget */}
          <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-amber-50/80 border border-amber-200/70">
            <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
              <Flame className="w-4 h-4 fill-amber-500 text-amber-500 animate-pulse" />
            </div>
            <div>
              <div className="text-[11px] font-semibold text-amber-700">Seri</div>
              <div className="text-xs font-bold text-amber-950">{streakDays} Gün</div>
            </div>
          </div>

          {/* Total XP */}
          <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-indigo-50/80 border border-indigo-200/70">
            <div className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
              <Award className="w-4 h-4 text-indigo-600" />
            </div>
            <div>
              <div className="text-[11px] font-semibold text-indigo-700">Toplam Puan</div>
              <div className="text-xs font-bold text-indigo-950">{totalXp} XP</div>
            </div>
          </div>

          {/* Mode Switch: Student vs Explorer/Instructor */}
          <button
            onClick={onToggleUnlockMode}
            className={`px-3 py-2 rounded-2xl border text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
              unlockAllMode
                ? 'bg-purple-50 border-purple-300 text-purple-900 shadow-2xs'
                : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
            title="Tüm seviye ve dersleri incelemek için serbest erişim modu"
          >
            {unlockAllMode ? (
              <>
                <Unlock className="w-3.5 h-3.5 text-purple-600" />
                <span className="hidden sm:inline">Serbest Keşif Modu</span>
                <span className="sm:hidden">Serbest</span>
              </>
            ) : (
              <>
                <Lock className="w-3.5 h-3.5 text-slate-400" />
                <span className="hidden sm:inline">Sıralı İlerleme</span>
                <span className="sm:hidden">Sıralı</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Global Curriculum Progress Bar */}
      <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
          <TrendingUp className="w-4 h-4 text-indigo-600" />
          <span>Genel Müfredat İlerlemesi:</span>
          <span className="font-bold text-slate-900">{completedLessonCount} / {totalLessonCount} Ders Tamamlandı</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-full sm:w-48 h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200/60">
            <div 
              className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full transition-all duration-500"
              style={{ width: `${Math.max(overallPercent, 2)}%` }}
            />
          </div>
          <span className="text-xs font-extrabold text-indigo-600 min-w-8 text-right">
            %{overallPercent}
          </span>
        </div>
      </div>
    </div>
  );
};
