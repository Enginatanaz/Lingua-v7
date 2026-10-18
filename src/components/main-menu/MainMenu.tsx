import React from 'react';
import { CEFRLevel, LessonData } from '../../types/lesson';
import { LessonDisplayStatus } from '../../types/curriculum';
import { TopUserBanner } from './TopUserBanner';
import { ContinueLearningCard } from './ContinueLearningCard';
import { LevelRoadmap } from './LevelRoadmap';
import { ModulesLessonList } from './ModulesLessonList';
import { PersonalStatsSection } from './PersonalStatsSection';
import { getFullCurriculumLessons } from '../../data/curriculumData';

interface MainMenuProps {
  currentLesson: LessonData;
  currentStepIndex: number;
  isCurrentLessonCompleted: boolean;
  selectedLevel: CEFRLevel;
  onSelectLevel: (level: CEFRLevel) => void;
  onOpenLesson: (lessonId: number) => void;
  completedLessonIds: number[];
  totalXp: number;
  streakDays: number;
  unlockAllMode: boolean;
  onToggleUnlockMode: () => void;
  getLessonStatus: (lessonId: number) => LessonDisplayStatus;
  getLevelStats: (level: CEFRLevel) => {
    totalCount: number;
    completedCount: number;
    percent: number;
    isUnlocked: boolean;
    isCompleted: boolean;
  };
  onOpenMistakeBank?: () => void;
}

export const MainMenu: React.FC<MainMenuProps> = ({
  currentLesson,
  currentStepIndex,
  isCurrentLessonCompleted,
  selectedLevel,
  onSelectLevel,
  onOpenLesson,
  completedLessonIds,
  totalXp,
  streakDays,
  unlockAllMode,
  onToggleUnlockMode,
  getLessonStatus,
  getLevelStats,
  onOpenMistakeBank,
}) => {
  const allCurriculum = getFullCurriculumLessons();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8 animate-fadeIn">
      {/* A. Top User & Progress Banner */}
      <TopUserBanner
        currentLevel={selectedLevel}
        totalXp={totalXp}
        streakDays={streakDays}
        completedLessonCount={completedLessonIds.length}
        totalLessonCount={allCurriculum.length}
        unlockAllMode={unlockAllMode}
        onToggleUnlockMode={onToggleUnlockMode}
      />

      {/* B. Continue Learning Hero Card */}
      <ContinueLearningCard
        lesson={currentLesson}
        currentStepIndex={currentStepIndex}
        isCompleted={isCurrentLessonCompleted}
        onContinue={() => onOpenLesson(currentLesson.id)}
      />

      {/* C. CEFR Level Roadmap */}
      <LevelRoadmap
        selectedLevel={selectedLevel}
        onSelectLevel={onSelectLevel}
        getLevelStats={getLevelStats}
      />

      {/* D. Modules and Lessons List for Selected Level */}
      <ModulesLessonList
        selectedLevel={selectedLevel}
        getLessonStatus={getLessonStatus}
        onSelectLesson={onOpenLesson}
        unlockAllMode={unlockAllMode}
        onToggleUnlockMode={onToggleUnlockMode}
      />

      {/* E. Personal Stats & Review Section */}
      <PersonalStatsSection
        completedLessonIds={completedLessonIds}
        onOpenLesson={onOpenLesson}
        onOpenMistakeBank={onOpenMistakeBank}
      />

      {/* Footer Branding */}
      <footer className="pt-6 pb-12 border-t border-slate-200 text-center text-xs text-slate-400 space-y-1">
        <p className="font-semibold text-slate-500">
          LinguAAI v6.0 — Avrupa Dilleri Ortak Çerçeve Programı (CEFR A1–C2) Standart Müfredatı
        </p>
        <p>Her ders tek bir ana kavramı ele alır ve iletişimsel yeterlilik odaklıdır.</p>
      </footer>
    </div>
  );
};
