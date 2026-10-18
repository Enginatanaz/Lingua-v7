import React from 'react';
import { 
  CheckCircle2, 
  Lock, 
  Unlock, 
  Award, 
  Layers, 
  ChevronRight, 
  Sparkles,
  BookOpen
} from 'lucide-react';
import { CEFRLevel } from '../../types/lesson';
import { CEFR_LEVELS_INFO, CURRICULUM_MODULES } from '../../data/curriculumData';

interface LevelRoadmapProps {
  selectedLevel: CEFRLevel;
  onSelectLevel: (level: CEFRLevel) => void;
  getLevelStats: (level: CEFRLevel) => {
    totalCount: number;
    completedCount: number;
    percent: number;
    isUnlocked: boolean;
    isCompleted: boolean;
  };
}

const levels: CEFRLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

export const LevelRoadmap: React.FC<LevelRoadmapProps> = ({
  selectedLevel,
  onSelectLevel,
  getLevelStats,
}) => {
  return (
    <div className="space-y-4">
      {/* Section Title */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
            <span className="w-2.5 h-6 bg-indigo-600 rounded-full inline-block" />
            CEFR Seviye Haritası ve İlerleme Yolu
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            A1 Başlangıçtan C2 Ustalığa kadar 6 aşamalı uluslararası dil standartları
          </p>
        </div>
      </div>

      {/* Grid of 6 Level Cards with Progression Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3.5 relative">
        {levels.map((level, idx) => {
          const info = CEFR_LEVELS_INFO[level];
          const stats = getLevelStats(level);
          const isSelected = selectedLevel === level;
          const levelModules = CURRICULUM_MODULES.filter((m) => m.level === level);

          return (
            <button
              key={level}
              onClick={() => onSelectLevel(level)}
              className={`p-4 sm:p-5 rounded-3xl border text-left transition-all relative flex flex-col justify-between cursor-pointer group ${
                isSelected
                  ? 'bg-white border-indigo-600 ring-2 ring-indigo-600/20 shadow-md scale-[1.02]'
                  : stats.isCompleted
                  ? 'bg-emerald-50/40 border-emerald-200/80 hover:border-emerald-400 hover:bg-emerald-50/70 shadow-2xs'
                  : stats.isUnlocked
                  ? 'bg-white border-slate-200/90 hover:border-indigo-300 hover:shadow-xs'
                  : 'bg-slate-50/90 border-slate-200/60 opacity-80 hover:opacity-100'
              }`}
            >
              {/* Top Badge & Lock/Complete Icon */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className={`px-2.5 py-1 rounded-xl text-xs font-black tracking-tight text-white shadow-2xs ${info.colorScheme.badgeBg}`}>
                    {level}
                  </span>

                  <div>
                    {stats.isCompleted ? (
                      <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold" title="Seviye Tamamlandı">
                        ✓
                      </span>
                    ) : stats.isUnlocked ? (
                      <span className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-700 flex items-center justify-center text-xs font-bold" title="Açık Seviye">
                        <Unlock className="w-3.5 h-3.5" />
                      </span>
                    ) : (
                      <span className="w-6 h-6 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center text-xs" title="Kilitli Seviye">
                        <Lock className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </div>
                </div>

                {/* Level Title and Tagline */}
                <h3 className="font-extrabold text-slate-900 text-sm tracking-tight mb-1 group-hover:text-indigo-600 transition-colors">
                  {info.name}
                </h3>

                <p className="text-[11px] text-slate-500 font-medium leading-relaxed line-clamp-2 mb-3">
                  {info.tagline}
                </p>
              </div>

              {/* Progress and Module Counts */}
              <div className="pt-3 border-t border-slate-100 space-y-2">
                <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium">
                  <span>{levelModules.length} Modül • {stats.totalCount} Ders</span>
                  <span className="font-extrabold text-slate-900">%{stats.percent}</span>
                </div>

                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      stats.isCompleted
                        ? 'bg-emerald-500'
                        : isSelected
                        ? 'bg-indigo-600'
                        : 'bg-indigo-400'
                    }`}
                    style={{ width: `${stats.percent}%` }}
                  />
                </div>

                {/* Indicator text */}
                <div className="text-[10px] font-bold text-slate-400 pt-0.5 flex items-center justify-between">
                  <span>{stats.completedCount} / {stats.totalCount} bitti</span>
                  {isSelected && <span className="text-indigo-600 font-extrabold">Seçili</span>}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
