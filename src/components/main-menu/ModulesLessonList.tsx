import React, { useState, useMemo } from 'react';
import { 
  CheckCircle2, 
  Lock, 
  Play, 
  Clock, 
  Award, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  Sparkles,
  BookOpen,
  Target,
  FileCheck2,
  AlertCircle
} from 'lucide-react';
import { CEFRLevel } from '../../types/lesson';
import { LessonDisplayStatus, CurriculumLessonDef } from '../../types/curriculum';
import { CEFR_LEVELS_INFO, CURRICULUM_MODULES, getFullCurriculumLessons } from '../../data/curriculumData';

interface ModulesLessonListProps {
  selectedLevel: CEFRLevel;
  getLessonStatus: (lessonId: number) => LessonDisplayStatus;
  onSelectLesson: (lessonId: number) => void;
  unlockAllMode: boolean;
  onToggleUnlockMode: () => void;
}

export const ModulesLessonList: React.FC<ModulesLessonListProps> = ({
  selectedLevel,
  getLessonStatus,
  onSelectLesson,
  unlockAllMode,
  onToggleUnlockMode,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({
    'mod-a1-1': true,
    'mod-a1-2': true,
    'mod-a2-1': true,
    'mod-b1-1': true,
    'mod-b2-1': true,
    'mod-c1-1': true,
    'mod-c2-1': true,
  });

  const levelInfo = CEFR_LEVELS_INFO[selectedLevel];
  const allCurriculumLessons = useMemo(() => getFullCurriculumLessons(), []);

  // Filter modules for this level
  const levelModules = useMemo(() => {
    return CURRICULUM_MODULES.filter((m) => m.level === selectedLevel);
  }, [selectedLevel]);

  const toggleModule = (modId: string) => {
    setExpandedModules((prev) => ({
      ...prev,
      [modId]: prev[modId] === undefined ? false : !prev[modId],
    }));
  };

  // Filter lessons by query
  const filteredLessonsByModule = useMemo(() => {
    const map = new Map<string, CurriculumLessonDef[]>();
    const q = searchQuery.trim().toLowerCase();

    for (const mod of levelModules) {
      const lessons = allCurriculumLessons.filter((l) => {
        const belongs = l.moduleId === mod.id;
        if (!belongs) return false;
        if (!q) return true;
        return (
          l.title.toLowerCase().includes(q) ||
          l.code.toLowerCase().includes(q) ||
          l.description.toLowerCase().includes(q)
        );
      });
      map.set(mod.id, lessons);
    }

    return map;
  }, [levelModules, allCurriculumLessons, searchQuery]);

  return (
    <div className="space-y-6">
      {/* 1. Level Pedagogical Overview & Learning Objectives Card */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className={`px-2.5 py-1 rounded-xl text-xs font-black text-white ${levelInfo.colorScheme.badgeBg}`}>
                {levelInfo.id}
              </span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                {levelInfo.name} — CEFR Standart Müfredatı
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              {levelInfo.titleTr}
            </h3>

            <p className="text-sm text-slate-600 mt-2 max-w-3xl leading-relaxed">
              {levelInfo.description}
            </p>
          </div>

          {/* Level Assessment Badge */}
          <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100 lg:max-w-xs shrink-0">
            <div className="flex items-center gap-2 text-indigo-900 font-bold text-xs uppercase tracking-wider mb-1">
              <FileCheck2 className="w-4 h-4 text-indigo-600" />
              <span>{levelInfo.assessmentTitle}</span>
            </div>
            <p className="text-xs text-indigo-950/80 leading-relaxed">
              {levelInfo.assessmentDescription}
            </p>
          </div>
        </div>

        {/* Level Learning Objectives Checklist */}
        <div className="mt-6">
          <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <Target className="w-3.5 h-3.5 text-indigo-600" />
            {levelInfo.id} Seviyesi Temel Kazanım Hedefleri ({levelInfo.learningObjectives.length})
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {levelInfo.learningObjectives.map((obj, oIdx) => (
              <div key={oIdx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-800 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{obj}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder={`${levelInfo.id} seviyesindeki derslerde veya konularda ara (ör. To Be, Zamanlar, Past Simple)...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-slate-200 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
          />
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-500 font-medium px-1">
          <span>Toplam {levelModules.length} Modül</span>
        </div>
      </div>

      {/* 3. Modules and Structured Lessons List */}
      <div className="space-y-4">
        {levelModules.map((module, mIdx) => {
          const lessons = filteredLessonsByModule.get(module.id) || [];
          const isExpanded = expandedModules[module.id] ?? true;

          // Compute completed in module
          const completedCount = lessons.filter(
            (l) => getLessonStatus(l.id) === 'completed'
          ).length;

          return (
            <div
              key={module.id}
              className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs transition-all"
            >
              {/* Module Header Bar (Collapsible) */}
              <button
                onClick={() => toggleModule(module.id)}
                className="w-full p-5 sm:p-6 text-left flex items-start sm:items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors cursor-pointer"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-700 font-extrabold text-xs flex items-center justify-center shrink-0 border border-indigo-100 mt-0.5 sm:mt-0">
                    {module.order}
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider">
                        Modül {module.order}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">•</span>
                      <span className="text-xs text-slate-500 font-semibold">
                        {lessons.length} Ders ({completedCount} Tamamlandı)
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                      {module.title}
                    </h4>

                    <p className="text-xs text-slate-500 mt-0.5 font-normal">
                      {module.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs font-bold px-2 py-1 rounded-lg bg-slate-100 text-slate-700 hidden sm:inline">
                    {completedCount} / {lessons.length}
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </div>
              </button>

              {/* Module Lessons Grid */}
              {isExpanded && (
                <div className="p-4 sm:p-6 pt-0 border-t border-slate-100 bg-slate-50/40">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-4">
                    {lessons.map((lesson) => {
                      const status = getLessonStatus(lesson.id);
                      const isLocked = status === 'locked';

                      return (
                        <div
                          key={lesson.id}
                          className={`rounded-2xl border p-4 sm:p-5 flex flex-col justify-between transition-all ${
                            status === 'completed'
                              ? 'bg-white border-emerald-200/90 hover:border-emerald-400 shadow-2xs'
                              : status === 'in_progress'
                              ? 'bg-white border-indigo-500 ring-2 ring-indigo-500/20 shadow-xs'
                              : status === 'next'
                              ? 'bg-white border-slate-200 hover:border-indigo-400 hover:shadow-xs'
                              : 'bg-slate-100/70 border-slate-200/60 opacity-80'
                          }`}
                        >
                          <div>
                            {/* Card Top: Code, Duration & Status */}
                            <div className="flex items-center justify-between gap-2 mb-2">
                              <span className="text-[11px] font-black px-2 py-0.5 rounded-md bg-slate-900 text-white font-mono">
                                {lesson.code}
                              </span>

                              <div>
                                {status === 'completed' && (
                                  <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                                    ✓ Bitti
                                  </span>
                                )}
                                {status === 'in_progress' && (
                                  <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800">
                                    Devam Ediyor
                                  </span>
                                )}
                                {status === 'next' && (
                                  <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
                                    Sıradaki
                                  </span>
                                )}
                                {isLocked && (
                                  <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-200 text-slate-600">
                                    <Lock className="w-3 h-3" /> Kilitli
                                  </span>
                                )}
                              </div>
                            </div>

                            {/* Lesson Title (Single main concept) */}
                            <h5 className="font-extrabold text-sm sm:text-base text-slate-900 tracking-tight leading-snug mb-1.5">
                              {lesson.title}
                            </h5>

                            {/* Description / Objective */}
                            <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-3">
                              {lesson.description}
                            </p>
                          </div>

                          {/* Card Footer: Metadata & Action CTA */}
                          <div className="pt-3 border-t border-slate-100 space-y-3">
                            <div className="flex items-center justify-between text-[11px] font-medium text-slate-400">
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" /> ~{lesson.estimatedDuration} dk
                              </span>
                              <span className="text-indigo-600 font-bold">
                                +{lesson.xpReward} XP
                              </span>
                            </div>

                            {/* Action Button */}
                            {isLocked ? (
                              <button
                                onClick={onToggleUnlockMode}
                                className="w-full py-2 px-3 rounded-xl bg-slate-200/80 text-slate-600 hover:bg-slate-300 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                                title="Önceki dersi tamamlayın veya Serbest Keşif Modunu açın"
                              >
                                <Lock className="w-3.5 h-3.5" />
                                <span>Kilitli (Açmak için tıkla)</span>
                              </button>
                            ) : (
                              <button
                                onClick={() => onSelectLesson(lesson.id)}
                                className={`w-full py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 active:scale-98 transition-all cursor-pointer ${
                                  status === 'completed'
                                    ? 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                                    : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs'
                                }`}
                              >
                                <Play className="w-3.5 h-3.5 fill-current" />
                                <span>{status === 'completed' ? 'Tekrar İncele' : 'Derse Başla'}</span>
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
