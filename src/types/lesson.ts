export type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export type LessonStepKey = 
  | 'intro'        // 1. Derse Giriş
  | 'lecture'      // 2. Öğretmen Anlatımı
  | 'examples'     // 3. Örnekler & Kurallar
  | 'exercises'    // 4. Alıştırmalar
  | 'sentence'     // 5. Kendi Cümleni Oluşturma
  | 'summary';     // 6. Ders Özeti

export interface LessonStepDef {
  key: LessonStepKey;
  stepNumber: number;
  label: string;
  shortLabel: string;
  description: string;
}

export type LessonSkillType = 
  | 'grammar'
  | 'vocabulary'
  | 'pronunciation'
  | 'listening'
  | 'reading'
  | 'speaking'
  | 'writing';

export interface LectureBreakdownStep {
  stepNumber: number;
  title: string;
  content: string;
  keyPhrase?: string;
  formula?: string;
  subPoints?: string[];
  rationale?: string;
  warningNote?: string;
}

export interface LectureRuleCard {
  ruleTitle: string;
  formula?: string;
  explanation: string;
  exampleSnippet?: string;
  cautionNote?: string;
  tipNote?: string;
}

export interface CommonMistakeItem {
  wrongExample: string;
  correctExample: string;
  rootCause: string;
  memoryTip: string;
}

export interface RealWorldContext {
  scenarioTitle: string;
  description: string;
  dialogue?: { speaker?: string; textEn: string; textTr: string }[];
  contextType: 'daily' | 'workplace' | 'travel' | 'academic' | 'social';
}

export interface ContrastiveAnalysis {
  conceptA: string;
  conceptB: string;
  keyDifference: string;
  exampleA: string;
  exampleB: string;
}

export interface TeacherLectureData {
  introduction: string;
  skillType?: LessonSkillType;
  concreteCompetency?: string;
  coreConcept: {
    title: string;
    explanation: string;
    whyItMatters: string;
  };
  breakdownSteps: LectureBreakdownStep[];
  ruleCards: LectureRuleCard[];
  specialCases?: {
    title: string;
    details: string;
    example: string;
  }[];
  commonMistakes?: CommonMistakeItem[];
  realWorldContext?: RealWorldContext;
  contrastiveAnalysis?: ContrastiveAnalysis;
  memoryHook?: string;
  quickCheck: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
}

export type LectureData = TeacherLectureData;

export interface ExampleSentence {
  id: string;
  en: string;
  tr: string;
  highlightedWords: string[];
  grammarCategory?: string;
  contextNote?: string;
  breakdownNote?: string;
  alternativeForm?: { sentence: string; nuanceExplanation: string };
}

export interface VocabularyItem {
  id: string;
  word: string;
  phonetic?: string;
  partOfSpeech: 'noun' | 'verb' | 'adjective' | 'adverb' | 'phrase' | 'pronoun' | 'preposition';
  meaningTr: string;
  exampleSentence: string;
}

export interface ExerciseItem {
  id: string;
  type: 'multiple-choice' | 'fill-blank' | 'error-fix';
  prompt: string;
  sentence?: string; // with ___ for fill-in-the-blank
  options?: string[];
  correctAnswer: string;
  hint?: string;
  explanation: string;
}

export interface SentenceBuilderTask {
  id: string;
  promptTr: string;
  targetEn: string;
  availableWords: string[]; // scrambled words + potential distractor
  explanation: string;
}

export interface LessonData {
  id: number; // 1 to 488
  code: string; // e.g. "A1-01"
  level: CEFRLevel;
  moduleName: string;
  title: string;
  learningObjective: string;
  estimatedMinutes: number;
  xpReward: number;
  teacherLecture: TeacherLectureData;
  examples: ExampleSentence[];
  vocabulary: VocabularyItem[];
  exercises: ExerciseItem[];
  sentenceBuilderTask: SentenceBuilderTask;
  summaryTakeaways: string[];
}

export interface LessonProgressState {
  completed: boolean;
  score: number;
  currentStepIndex: number;
  completedSteps: number[]; // e.g. [0, 1]
  exerciseAnswers: Record<string, { userAnswer: string; isCorrect: boolean }>;
  sentenceBuilderCompleted: boolean;
  notes: string;
  lastStudiedAt: string;
}
