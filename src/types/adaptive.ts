import { CEFRLevel, ExerciseItem, LessonSkillType } from './lesson';

export type WordMasteryState = 
  | 'unseen'
  | 'encountered'
  | 'recognized'
  | 'recalled'
  | 'mastered'
  | 'needs_review';

export interface WordLearningRecord {
  id: string;
  word: string;
  meaningTr: string;
  level: CEFRLevel;
  status: WordMasteryState;
  phonetic?: string;
  partOfSpeech?: string;
  exampleSentence?: string;
  encounterCount: number;
  correctRecallCount: number;
  mistakeCount: number;
  lastTestedDate: number;
  nextReviewDate: number;
  intervalDays: number;
  easeFactor: number;
  associatedLessonId: number;
  associatedLessonCode: string;
}

export type ErrorCategory = 
  | 'grammatical'
  | 'lexical'
  | 'structural'
  | 'spelling_phonological'
  | 'pragmatic_nuance';

export interface ErrorDiagnosis {
  category: ErrorCategory;
  categoryLabelTr: string;
  identifiedMistake: string;
  rootCauseTr: string;
  correctAlternative: string;
  ruleSnippetTr: string;
  remedialExercise: ExerciseItem;
}

export interface StudentSkillStats {
  listening: {
    score: number; // 0-100
    testedCount: number;
    speedPreference: 0.8 | 1.0;
  };
  reading: {
    score: number;
    testedCount: number;
    comprehensionRate: number;
  };
  writing: {
    score: number;
    testedCount: number;
    accuracyRate: number;
  };
  speaking: {
    score: number;
    testedCount: number;
    pronunciationScore: number;
    weakPhonemes: string[];
    strongPhonemes: string[];
  };
  grammar: {
    score: number;
    testedCount: number;
  };
  vocabulary: {
    score: number;
    testedCount: number;
    totalWordsTracked: number;
    masteredWordsCount: number;
  };
}

export type ScaffoldingLevel = 'heavy' | 'moderate' | 'light';

export interface StudentProfile {
  id: string;
  name: string;
  avatar: string;
  targetLevel: CEFRLevel;
  currentLevel: CEFRLevel;
  scaffoldingLevel: ScaffoldingLevel;
  strengths: string[];
  strugglingTopics: string[];
  recentErrors: {
    topic: string;
    category: ErrorCategory;
    timestamp: number;
  }[];
  skills: StudentSkillStats;
  consecutiveCorrectCount: number;
  consecutiveMistakeCount: number;
}

export interface ScaffoldCallout {
  triggerTopic: string;
  titleTr: string;
  guidanceTr: string;
  quickExample: string;
  reassuranceTr: string;
}

export interface PersonalizedTeacherNote {
  greeting: string;
  contextWhy: string;
  scaffoldAdvice: string;
  focusTip: string;
}

export interface InterleavedRetrievalSet {
  titleTr: string;
  badgeTr: string;
  descriptionTr: string;
  questions: ExerciseItem[];
}

export interface AdaptiveLessonSupplement {
  studentProfile: StudentProfile;
  personalizedTeacherNote: PersonalizedTeacherNote;
  scaffoldingLevel: ScaffoldingLevel;
  scaffoldCallouts: ScaffoldCallout[];
  interleavedReview?: InterleavedRetrievalSet;
  adaptedExercises: ExerciseItem[];
  listeningSupport: {
    preListeningPromptTr: string;
    keyVocabularyFocus: string[];
    suggestedSpeed: 0.8 | 1.0;
  };
  readingSupport?: {
    scanningPromptTr: string;
    deepComprehensionTipTr: string;
  };
  speakingSupport?: {
    targetPhonemes: string[];
    stressBreakdown: { word: string; stressedSyllable: string; phonetic: string }[];
  };
}
