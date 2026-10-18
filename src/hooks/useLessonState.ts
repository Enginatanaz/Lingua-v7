import { useState, useEffect, useCallback, useMemo } from 'react';
import { CEFRLevel, LessonProgressState } from '../types/lesson';
import { LessonDisplayStatus } from '../types/curriculum';
import { getLessonById, LESSON_STEPS } from '../data/lessonsData';
import { getFullCurriculumLessons, CURRICULUM_MODULES } from '../data/curriculumData';
import { audioEngine } from '../services/audioEngine';
import { 
  getActiveStudentProfile, 
  saveStudentProfile, 
  switchProfilePreset, 
  subscribeToStudentMemory,
  recordSkillPerformance,
  updateWordMastery,
  getActiveProfilePresetKey
} from '../services/studentMemoryEngine';
import { getAdaptiveLessonSupplement } from '../services/adaptiveLessonEngine';
import { StudentProfile, AdaptiveLessonSupplement } from '../types/adaptive';

const STORAGE_KEY = 'linguaai_v6_progress';
const NOTES_PREFIX = 'linguaai_note_lesson_';
const UNLOCK_MODE_KEY = 'linguaai_v6_unlock_mode';

interface StoredAppData {
  completedLessonIds: number[];
  totalXp: number;
  streakDays: number;
  lastActiveLessonId: number;
}

const defaultAppData: StoredAppData = {
  completedLessonIds: [],
  totalXp: 180,
  streakDays: 4,
  lastActiveLessonId: 1,
};

export function useLessonState(initialLessonId: number = 1) {
  // Navigation view: 'main_menu' vs 'lesson'
  const [activeView, setActiveView] = useState<'main_menu' | 'lesson'>('main_menu');
  const [selectedLevel, setSelectedLevel] = useState<CEFRLevel>('A1');
  const [unlockAllMode, setUnlockAllMode] = useState<boolean>(false);

  // Student Profile & Adaptive State
  const [studentProfile, setStudentProfile] = useState<StudentProfile>(getActiveStudentProfile());
  const [activePresetKey, setActivePresetKey] = useState<string>(getActiveProfilePresetKey());

  // Lesson states
  const [currentLessonId, setCurrentLessonId] = useState<number>(initialLessonId);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([0]);
  const [exerciseAnswers, setExerciseAnswers] = useState<Record<string, { userAnswer: string; isCorrect: boolean }>>({});
  const [sentenceBuilderCompleted, setSentenceBuilderCompleted] = useState<boolean>(false);
  const [studentNotes, setStudentNotes] = useState<string>('');
  const [appProgress, setAppProgress] = useState<StoredAppData>(defaultAppData);

  // Subscribe to student memory updates
  useEffect(() => {
    const unsubscribe = subscribeToStudentMemory(() => {
      setStudentProfile(getActiveStudentProfile());
      setActivePresetKey(getActiveProfilePresetKey());
    });
    return unsubscribe;
  }, []);

  // Load app data from local storage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setAppProgress(parsed);
        if (parsed.lastActiveLessonId && parsed.lastActiveLessonId >= 1) {
          setCurrentLessonId(parsed.lastActiveLessonId);
        }
      }

      const storedUnlock = localStorage.getItem(UNLOCK_MODE_KEY);
      if (storedUnlock === 'true') {
        setUnlockAllMode(true);
      }
    } catch (e) {
      console.warn('Could not load stored progress:', e);
    }
  }, []);

  // Toggle unlock all mode (for exploratory teacher/student access)
  const toggleUnlockAllMode = useCallback(() => {
    setUnlockAllMode((prev) => {
      const next = !prev;
      try {
        localStorage.setItem(UNLOCK_MODE_KEY, String(next));
      } catch (e) {
        console.warn(e);
      }
      return next;
    });
  }, []);

  // Switch student profile preset (e.g. A1 Emre, B1 Selin, C1 Can)
  const selectProfilePreset = useCallback((preset: 'a1_beginner' | 'b1_intermediate' | 'c1_advanced') => {
    const updated = switchProfilePreset(preset);
    setStudentProfile(updated);
    setActivePresetKey(preset);
  }, []);

  // Load notes for active lesson
  useEffect(() => {
    try {
      const savedNote = localStorage.getItem(`${NOTES_PREFIX}${currentLessonId}`);
      setStudentNotes(savedNote || '');
    } catch (e) {
      console.warn('Could not load student notes:', e);
    }
  }, [currentLessonId]);

  // Save notes
  const saveStudentNotes = useCallback((noteText: string) => {
    setStudentNotes(noteText);
    try {
      localStorage.setItem(`${NOTES_PREFIX}${currentLessonId}`, noteText);
    } catch (e) {
      console.warn('Could not save note:', e);
    }
  }, [currentLessonId]);

  // Current lesson data
  const currentLesson = useMemo(() => {
    return getLessonById(currentLessonId);
  }, [currentLessonId]);

  // Adaptive Supplement for current lesson
  const adaptiveSupplement: AdaptiveLessonSupplement = useMemo(() => {
    return getAdaptiveLessonSupplement(currentLesson, studentProfile);
  }, [currentLesson, studentProfile]);

  // Open a lesson directly from Main Menu or Curriculum
  const openLesson = useCallback((lessonId: number) => {
    audioEngine.stop();
    setCurrentLessonId(lessonId);
    setCurrentStepIndex(0);
    setCompletedSteps([0]);
    setExerciseAnswers({});
    setSentenceBuilderCompleted(false);
    setActiveView('lesson');

    setAppProgress((prev) => {
      const next = { ...prev, lastActiveLessonId: lessonId };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch (err) {
        console.warn(err);
      }
      return next;
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Back to Main Menu
  const backToMainMenu = useCallback(() => {
    audioEngine.stop();
    setActiveView('main_menu');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Switch to another lesson while staying in lesson view
  const changeLesson = useCallback((newLessonId: number) => {
    audioEngine.stop();
    setCurrentLessonId(newLessonId);
    setCurrentStepIndex(0);
    setCompletedSteps([0]);
    setExerciseAnswers({});
    setSentenceBuilderCompleted(false);

    setAppProgress((prev) => {
      const next = { ...prev, lastActiveLessonId: newLessonId };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch (err) {
        console.warn(err);
      }
      return next;
    });
  }, []);

  // Step navigation
  const goToStep = useCallback((stepIndex: number) => {
    if (stepIndex >= 0 && stepIndex < LESSON_STEPS.length) {
      audioEngine.stop();
      setCurrentStepIndex(stepIndex);
      setCompletedSteps((prev) => {
        if (!prev.includes(stepIndex)) {
          return [...prev, stepIndex];
        }
        return prev;
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const nextStep = useCallback(() => {
    if (currentStepIndex < LESSON_STEPS.length - 1) {
      goToStep(currentStepIndex + 1);
    }
  }, [currentStepIndex, goToStep]);

  const prevStep = useCallback(() => {
    if (currentStepIndex > 0) {
      goToStep(currentStepIndex - 1);
    }
  }, [currentStepIndex, goToStep]);

  // Answer an exercise (or reset when answer is empty string)
  const recordExerciseAnswer = useCallback((exerciseId: string, answer: string, isCorrect: boolean) => {
    setExerciseAnswers((prev) => {
      if (answer === '') {
        const next = { ...prev };
        delete next[exerciseId];
        return next;
      }
      return {
        ...prev,
        [exerciseId]: { userAnswer: answer, isCorrect },
      };
    });

    if (answer !== '') {
      // Record skill metrics
      recordSkillPerformance('grammar', isCorrect, { topic: currentLesson.title });
    }
  }, [currentLesson.title]);

  // Complete lesson
  const completeCurrentLesson = useCallback(() => {
    setAppProgress((prev) => {
      const alreadyCompleted = prev.completedLessonIds.includes(currentLessonId);
      const newCompleted = alreadyCompleted ? prev.completedLessonIds : [...prev.completedLessonIds, currentLessonId];
      const addedXp = alreadyCompleted ? 0 : currentLesson.xpReward;
      const next = {
        ...prev,
        completedLessonIds: newCompleted,
        totalXp: prev.totalXp + addedXp,
      };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch (err) {
        console.warn(err);
      }
      return next;
    });
  }, [currentLessonId, currentLesson.xpReward]);

  const isLessonCompleted = appProgress.completedLessonIds.includes(currentLessonId);

  // Lesson status helper for Main Menu display
  const getLessonStatus = useCallback((lessonId: number): LessonDisplayStatus => {
    if (appProgress.completedLessonIds.includes(lessonId)) {
      return 'completed';
    }
    if (currentLessonId === lessonId && activeView === 'lesson') {
      return 'in_progress';
    }
    if (unlockAllMode) {
      return 'next';
    }

    // Sequential progression:
    // Lesson 1 is always unlocked.
    if (lessonId === 1) {
      return appProgress.completedLessonIds.includes(1) ? 'completed' : 'next';
    }

    // If previous lesson is completed, this one is next
    if (appProgress.completedLessonIds.includes(lessonId - 1)) {
      return 'next';
    }

    return 'locked';
  }, [appProgress.completedLessonIds, currentLessonId, activeView, unlockAllMode]);

  // Level progress percentage helper
  const getLevelStats = useCallback((level: CEFRLevel) => {
    const all = getFullCurriculumLessons();
    const levelLessons = all.filter((l) => l.level === level);
    const completedCount = levelLessons.filter((l) => appProgress.completedLessonIds.includes(l.id)).length;
    const totalCount = levelLessons.length;
    const percent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
    
    // Level is unlocked if it's A1, or previous level is at least 60% completed or unlockAllMode is on
    let isUnlocked = true;
    if (!unlockAllMode) {
      if (level === 'A2') {
        const a1 = all.filter(l => l.level === 'A1');
        const c = a1.filter(l => appProgress.completedLessonIds.includes(l.id)).length;
        isUnlocked = c >= 1;
      } else if (level === 'B1') {
        const a2 = all.filter(l => l.level === 'A2');
        const c = a2.filter(l => appProgress.completedLessonIds.includes(l.id)).length;
        isUnlocked = c >= 1;
      } else if (level === 'B2') {
        const b1 = all.filter(l => l.level === 'B1');
        const c = b1.filter(l => appProgress.completedLessonIds.includes(l.id)).length;
        isUnlocked = c >= 1;
      } else if (level === 'C1') {
        const b2 = all.filter(l => l.level === 'B2');
        const c = b2.filter(l => appProgress.completedLessonIds.includes(l.id)).length;
        isUnlocked = c >= 1;
      } else if (level === 'C2') {
        const c1 = all.filter(l => l.level === 'C1');
        const c = c1.filter(l => appProgress.completedLessonIds.includes(l.id)).length;
        isUnlocked = c >= 1;
      }
    }

    return {
      totalCount,
      completedCount,
      percent,
      isUnlocked,
      isCompleted: completedCount > 0 && completedCount === totalCount,
    };
  }, [appProgress.completedLessonIds, unlockAllMode]);

  return {
    activeView,
    setActiveView,
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
    currentStep: LESSON_STEPS[currentStepIndex],
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
  };
}
