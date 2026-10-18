import { CEFRLevel } from './lesson';

export type MistakeStatus = 'due' | 'reviewed' | 'mastered' | 'resolved';

export type MistakeErrorCategory = 
  | 'grammatical'
  | 'lexical'
  | 'structural'
  | 'spelling_phonological'
  | 'pragmatic_nuance';

export interface MistakeRecord {
  id: string;
  lessonId: number;
  lessonTitle: string;
  lessonCode: string;
  level: CEFRLevel;
  exerciseId: string;
  prompt: string;
  sentence?: string;
  userWrongAnswer: string;
  correctAnswer: string;
  explanation: string;
  ruleSnippet?: string;
  timestamp: number;
  reviewCount: number;
  status: MistakeStatus;
  nextReviewDate: number;
  intervalDays: number;
  easeFactor: number;
  
  // FAZ 2 Intelligent Diagnostic Extensions
  errorCategory?: MistakeErrorCategory;
  diagnosis?: string;
  remedialQuestion?: {
    id: string;
    prompt: string;
    sentence?: string;
    options?: string[];
    correctAnswer: string;
    explanation: string;
  };
  resolvedAt?: number;
}

export interface SRSStats {
  totalMistakes: number;
  dueCount: number;
  reviewedCount: number;
  masteredCount: number;
  resolvedCount: number;
}
