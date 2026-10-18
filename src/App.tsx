import React, { useState, useEffect } from 'react';
import { useLessonState } from './hooks/useLessonState';
import { MainMenu } from './components/main-menu/MainMenu';
import { Header } from './components/Header';
import { StepNavigation } from './components/StepNavigation';
import { StepIntroduction } from './components/steps/StepIntroduction';
import { StepTeacherLecture } from './components/steps/StepTeacherLecture';
import { StepExamples } from './components/steps/StepExamples';
import { StepExercises } from './components/steps/StepExercises';
import { StepSentenceBuilder } from './components/steps/StepSentenceBuilder';
import { StepSummary } from './components/steps/StepSummary';
import { SidebarHelper } from './components/SidebarHelper';
import { BottomToolbar } from './components/BottomToolbar';
import { LessonDrawer } from './components/LessonDrawer';
import { MistakeBankModal } from './components/srs/MistakeBankModal';
import { getSRSStats, subscribeToSRS } from './services/srsEngine';
import { LESSON_STEPS } from './data/lessonsData';

export default function App() {
  const {
    activeView,
    selectedLevel,
    setSelectedLevel,
    unlockAllMode,
    toggleUnlockAllMode,
    studentProfile,
    activePresetKey,
    selectProfilePreset,
    adaptiveSupplement,
    currentLesson,
    currentLessonId,
    currentStepIndex,
    completedSteps,
    exerciseAnswers,
    sentenceBuilderCompleted,
    setSentenceBuilderCompleted,
    studentNotes,
    saveStudentNotes,
    appProgress,
    isLessonCompleted,
    openLesson,
    backToMainMenu,
    changeLesson,
    goToStep,
    nextStep,
    prevStep,
    recordExerciseAnswer,
    completeCurrentLesson,
    getLessonStatus,
    getLevelStats,
  } = useLessonState(1);

  const [isCurriculumOpen, setIsCurriculumOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isMistakeBankOpen, setIsMistakeBankOpen] = useState(false);
  const [srsStats, setSrsStats] = useState(getSRSStats());

  // Subscribe to SRS state changes
  useEffect(() => {
    const unsubscribe = subscribeToSRS(() => {
      setSrsStats(getSRSStats());
    });
    return unsubscribe;
  }, []);

  // Keyboard shortcuts in Lesson View
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeTag = document.activeElement?.tagName.toLowerCase();
      if (activeTag === 'input' || activeTag === 'textarea') return;

      if (activeView === 'lesson') {
        if (e.key === 'ArrowRight' && (e.altKey || e.metaKey)) {
          nextStep();
        } else if (e.key === 'ArrowLeft' && (e.altKey || e.metaKey)) {
          prevStep();
        } else if (e.key === 'Escape') {
          backToMainMenu();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeView, nextStep, prevStep, backToMainMenu]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900 selection:bg-indigo-500 selection:text-white">
      {/* VIEW 1: MAIN MENU (Full A1–C2 CEFR Curriculum Hub) */}
      {activeView === 'main_menu' && (
        <MainMenu
          currentLesson={currentLesson}
          currentStepIndex={currentStepIndex}
          isCurrentLessonCompleted={isLessonCompleted}
          selectedLevel={selectedLevel}
          onSelectLevel={setSelectedLevel}
          onOpenLesson={openLesson}
          completedLessonIds={appProgress.completedLessonIds}
          totalXp={appProgress.totalXp}
          streakDays={appProgress.streakDays}
          unlockAllMode={unlockAllMode}
          onToggleUnlockMode={toggleUnlockAllMode}
          getLessonStatus={getLessonStatus}
          getLevelStats={getLevelStats}
          onOpenMistakeBank={() => setIsMistakeBankOpen(true)}
        />
      )}

      {/* VIEW 2: ACTIVE LESSON SCREEN (6 Steps, Teacher Lecture, Exercises, Speech) */}
      {activeView === 'lesson' && (
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <Header
            lesson={currentLesson}
            currentStepIndex={currentStepIndex}
            totalXp={appProgress.totalXp}
            streakDays={appProgress.streakDays}
            isCompleted={isLessonCompleted}
            onGoToMainMenu={backToMainMenu}
            onOpenCurriculum={() => setIsCurriculumOpen(true)}
            onToggleSidebar={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
            onPrevLesson={() => changeLesson(Math.max(1, currentLessonId - 1))}
            onNextLesson={() => changeLesson(Math.min(488, currentLessonId + 1))}
            onOpenMistakeBank={() => setIsMistakeBankOpen(true)}
            mistakeCount={srsStats.dueCount}
          />

          {/* 6-Step Stepper Navigation */}
          <StepNavigation
            currentStepIndex={currentStepIndex}
            completedSteps={completedSteps}
            onSelectStep={goToStep}
          />

          {/* Main Focused Learning Canvas */}
          <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            <div className="flex flex-col lg:flex-row items-start gap-8">
              {/* Step Body */}
              <div className="flex-1 w-full min-w-0">
                {currentStepIndex === 0 && (
                  <StepIntroduction
                    lesson={currentLesson}
                    onStartLecture={() => goToStep(1)}
                  />
                )}

                {currentStepIndex === 1 && (
                  <StepTeacherLecture
                    lesson={currentLesson}
                    adaptiveSupplement={adaptiveSupplement}
                    onSelectProfilePreset={selectProfilePreset}
                    activePresetKey={activePresetKey}
                    onContinue={() => goToStep(2)}
                  />
                )}

                {currentStepIndex === 2 && (
                  <StepExamples
                    lesson={currentLesson}
                    onContinue={() => goToStep(3)}
                  />
                )}

                {currentStepIndex === 3 && (
                  <StepExercises
                    lesson={currentLesson}
                    adaptiveSupplement={adaptiveSupplement}
                    exerciseAnswers={exerciseAnswers}
                    onRecordAnswer={recordExerciseAnswer}
                    onContinue={() => goToStep(4)}
                  />
                )}

                {currentStepIndex === 4 && (
                  <StepSentenceBuilder
                    lesson={currentLesson}
                    sentenceCompleted={sentenceBuilderCompleted}
                    onSetSentenceCompleted={setSentenceBuilderCompleted}
                    onContinue={() => goToStep(5)}
                  />
                )}

                {currentStepIndex === 5 && (
                  <StepSummary
                    lesson={currentLesson}
                    isCompleted={isLessonCompleted}
                    onCompleteLesson={completeCurrentLesson}
                    onNextLesson={() => changeLesson(Math.min(488, currentLessonId + 1))}
                    onRestartLesson={() => goToStep(0)}
                    onOpenMistakeBank={() => setIsMistakeBankOpen(true)}
                  />
                )}
              </div>

              {/* Right Sidebar Helper (Vocabulary, Student Notes, Steps) */}
              <SidebarHelper
                lesson={currentLesson}
                currentStepIndex={currentStepIndex}
                completedSteps={completedSteps}
                studentNotes={studentNotes}
                onSaveNotes={saveStudentNotes}
                onSelectStep={goToStep}
                isOpenMobile={isMobileSidebarOpen}
                onCloseMobile={() => setIsMobileSidebarOpen(false)}
              />
            </div>
          </main>

          {/* Bottom Action Bar */}
          <BottomToolbar
            currentStepIndex={currentStepIndex}
            totalSteps={LESSON_STEPS.length}
            isLessonCompleted={isLessonCompleted}
            onPrev={prevStep}
            onNext={nextStep}
            onFinishLesson={completeCurrentLesson}
          />
        </div>
      )}

      {/* Global Curriculum Browser Drawer */}
      <LessonDrawer
        isOpen={isCurriculumOpen}
        activeLessonId={currentLessonId}
        completedLessonIds={appProgress.completedLessonIds}
        onSelectLesson={(id) => {
          openLesson(id);
          setIsCurriculumOpen(false);
        }}
        onClose={() => setIsCurriculumOpen(false)}
      />

      {/* Spaced Repetition System & MistakeBank Modal */}
      <MistakeBankModal
        isOpen={isMistakeBankOpen}
        onClose={() => setIsMistakeBankOpen(false)}
        onNavigateToLesson={(id) => openLesson(id)}
      />
    </div>
  );
}
