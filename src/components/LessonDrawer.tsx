import React, { useState, useMemo } from 'react';
import { 
  X, 
  Search, 
  GraduationCap, 
  CheckCircle2, 
  Clock, 
  Award, 
  Sparkles,
  BookOpen,
  Filter
} from 'lucide-react';
import { getAllCurriculumLessons } from '../data/lessonsData';
import { CEFRLevel } from '../types/lesson';

interface LessonDrawerProps {
  isOpen: boolean;
  activeLessonId: number;
  completedLessonIds: number[];
  onSelectLesson: (id: number) => void;
  onClose: () => void;
}

const levels: (CEFRLevel | 'ALL')[] = ['ALL', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

export const LessonDrawer: React.FC<LessonDrawerProps> = ({
  isOpen,
  activeLessonId,
  completedLessonIds,
  onSelectLesson,
  onClose,
}) => {
  const [selectedLevel, setSelectedLevel] = useState<CEFRLevel | 'ALL'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const allLessons = useMemo(() => getAllCurriculumLessons(), []);

  const filteredLessons = useMemo(() => {
    return allLessons.filter((l) => {
      const matchesLevel = selectedLevel === 'ALL' || l.level === selectedLevel;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        l.title.toLowerCase().includes(q) ||
        l.code.toLowerCase().includes(q) ||
        l.moduleName.toLowerCase().includes(q) ||
        l.learningObjective.toLowerCase().includes(q);

      return matchesLevel && matchesSearch;
    });
  }, [allLessons, selectedLevel, searchQuery]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden animate-fadeIn">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl flex flex-col max-h-[90vh] z-10 overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-200/80 bg-slate-50/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-xs">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                LinguAAI 488 Derslik Tam Müfredat
              </h2>
              <p className="text-xs text-slate-500">
                A1'den C2'ye kadar tüm seviyeler, üniteler ve pedagojik modüller
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-100 bg-white space-y-3">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Ders adı, konu, kod (ör. A1-01, To Be, Zamanlar)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
            />
          </div>

          {/* Level Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-1">
            {levels.map((lvl) => (
              <button
                key={lvl}
                onClick={() => setSelectedLevel(lvl)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all cursor-pointer ${
                  selectedLevel === lvl
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {lvl === 'ALL' ? 'Tüm Seviyeler (488)' : lvl}
              </button>
            ))}
          </div>
        </div>

        {/* Lessons List Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-2.5">
          <div className="text-xs font-semibold text-slate-400 mb-2">
            Toplam {filteredLessons.length} ders listeleniyor
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {filteredLessons.map((l) => {
              const isActive = l.id === activeLessonId;
              const isCompleted = completedLessonIds.includes(l.id);

              return (
                <button
                  key={l.id}
                  onClick={() => {
                    onSelectLesson(l.id);
                    onClose();
                  }}
                  className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between cursor-pointer ${
                    isActive
                      ? 'bg-indigo-50/70 border-indigo-400 ring-2 ring-indigo-400/20 shadow-xs'
                      : isCompleted
                      ? 'bg-emerald-50/40 border-emerald-200 hover:bg-emerald-50/70'
                      : 'bg-white border-slate-200 hover:border-indigo-300 hover:bg-slate-50/50'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-extrabold px-2 py-0.5 rounded-md bg-slate-900 text-white font-mono">
                        {l.code}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        {l.moduleName}
                      </span>
                    </div>

                    <div className="flex items-center gap-1">
                      {l.isDetailed && (
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-indigo-100 text-indigo-700">
                          ★ Tam Modül
                        </span>
                      )}
                      {isCompleted && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      )}
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 line-clamp-1 mb-1">
                    {l.title}
                  </h3>

                  <p className="text-xs text-slate-500 line-clamp-2 mb-3">
                    {l.learningObjective}
                  </p>

                  <div className="flex items-center justify-between text-[11px] font-medium text-slate-400 border-t border-slate-100 pt-2">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> ~{l.estimatedMinutes} dk
                    </span>
                    <span className="text-indigo-600 font-bold">
                      +{l.xpReward} XP
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-200/80 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
          <span>Herhangi bir derse tıklayarak anında çalışmaya başlayabilirsiniz.</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-200 text-slate-800 font-semibold hover:bg-slate-300 transition-colors"
          >
            Kapat
          </button>
        </div>
      </div>
    </div>
  );
};
