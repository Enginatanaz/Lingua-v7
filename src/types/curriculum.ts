import { CEFRLevel } from './lesson';

export interface ModuleDef {
  id: string;
  level: CEFRLevel;
  title: string;
  description: string;
  order: number;
  iconName: string;
  lessonIds: number[];
}

export type LessonCategoryType = 
  | 'Grammar'
  | 'Vocabulary'
  | 'Functional English'
  | 'Listening'
  | 'Speaking'
  | 'Reading'
  | 'Writing'
  | 'Pronunciation'
  | 'Review and Integration';

export type CurriculumValidationStatus = 
  | 'inventoried'
  | 'content_reviewed'
  | 'auto_verified'
  | 'remediated'
  | 'unverified';

export interface CurriculumLessonDef {
  id: number;
  code: string;
  level: CEFRLevel;
  moduleId: string;
  moduleName: string;
  title: string;
  subtopic?: string;
  lessonType?: LessonCategoryType;
  description: string;
  learningObjectives: string[];
  targetStructures?: string[];
  targetVocabulary?: string[];
  skills?: ('grammar' | 'vocabulary' | 'listening' | 'reading' | 'writing' | 'speaking' | 'pronunciation')[];
  order: number;
  estimatedDuration: number; // minutes
  prerequisites: number[]; // previous lesson IDs (backward compatibility)
  prerequisiteLessonIds?: number[];
  nextLessonIds?: number[];
  activities: (
    | 'grammar'
    | 'vocabulary'
    | 'listening'
    | 'reading'
    | 'writing'
    | 'speaking'
    | 'ai_interaction'
    | 'exercises'
  )[];
  assessmentCriteria: string;
  xpReward: number;
  validationStatus?: CurriculumValidationStatus;
}

export interface LevelInfo {
  id: CEFRLevel;
  name: string;
  titleTr: string;
  tagline: string;
  description: string;
  overallGoal: string;
  learningObjectives: string[];
  assessmentTitle: string;
  assessmentDescription: string;
  colorScheme: {
    bg: string;
    text: string;
    border: string;
    badgeBg: string;
    gradient: string;
    accent: string;
  };
}

export type LessonDisplayStatus = 'completed' | 'in_progress' | 'next' | 'locked';
