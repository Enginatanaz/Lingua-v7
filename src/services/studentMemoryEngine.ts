import { CEFRLevel } from '../types/lesson';
import { 
  WordMasteryState, 
  WordLearningRecord, 
  StudentProfile, 
  StudentSkillStats, 
  ScaffoldingLevel,
  ErrorCategory 
} from '../types/adaptive';

const STUDENT_PROFILE_STORAGE_KEY = 'linguaai_v6_student_profile';
const WORD_MEMORY_STORAGE_KEY = 'linguaai_v6_word_memory';
const ACTIVE_PROFILE_PRESET_KEY = 'linguaai_v6_profile_preset';

type ChangeListener = () => void;
const memoryListeners: ChangeListener[] = [];

function notifyMemoryListeners() {
  memoryListeners.forEach((l) => {
    try {
      l();
    } catch (e) {
      console.warn('Memory listener error:', e);
    }
  });
}

export function subscribeToStudentMemory(callback: ChangeListener): () => void {
  memoryListeners.push(callback);
  return () => {
    const idx = memoryListeners.indexOf(callback);
    if (idx !== -1) memoryListeners.splice(idx, 1);
  };
}

// Default skill stats
export const defaultSkillStats: StudentSkillStats = {
  listening: { score: 78, testedCount: 14, speedPreference: 0.8 },
  reading: { score: 85, testedCount: 18, comprehensionRate: 88 },
  writing: { score: 72, testedCount: 10, accuracyRate: 75 },
  speaking: { 
    score: 70, 
    testedCount: 12, 
    pronunciationScore: 72,
    weakPhonemes: ['/θ/ (think)', '/ð/ (this)', '/w/ vs /v/'],
    strongPhonemes: ['/m/', '/p/', '/s/'] 
  },
  grammar: { score: 80, testedCount: 22 },
  vocabulary: { score: 84, testedCount: 30, totalWordsTracked: 45, masteredWordsCount: 18 },
};

// 3 Archetypal Profiles for Verification & Diverse Learners
export const PRESET_PROFILES: Record<string, StudentProfile> = {
  a1_beginner: {
    id: 'profile-a1-emre',
    name: 'Emre (A1 Başlangıç)',
    avatar: '🌱',
    currentLevel: 'A1',
    targetLevel: 'B1',
    scaffoldingLevel: 'heavy',
    strengths: ['Temel Selamlaşma', 'Şahıs Zamirleri', 'Sayılar'],
    strugglingTopics: ['am / is / are şahıs uyumu', 'tekil/çoğul -s eki', 'soru kelimeleri'],
    recentErrors: [
      { topic: 'to_be', category: 'grammatical', timestamp: Date.now() - 3600000 },
      { topic: 'singular_plural', category: 'structural', timestamp: Date.now() - 7200000 }
    ],
    skills: {
      listening: { score: 55, testedCount: 6, speedPreference: 0.8 },
      reading: { score: 62, testedCount: 8, comprehensionRate: 65 },
      writing: { score: 50, testedCount: 5, accuracyRate: 52 },
      speaking: { 
        score: 48, 
        testedCount: 6, 
        pronunciationScore: 50,
        weakPhonemes: ['/θ/ (three)', '/æ/ (cat)'],
        strongPhonemes: ['/b/', '/d/']
      },
      grammar: { score: 58, testedCount: 10 },
      vocabulary: { score: 60, testedCount: 15, totalWordsTracked: 35, masteredWordsCount: 8 }
    },
    consecutiveCorrectCount: 0,
    consecutiveMistakeCount: 1
  },

  b1_intermediate: {
    id: 'profile-b1-selin',
    name: 'Selin (B1 Orta Düzey)',
    avatar: '🎯',
    currentLevel: 'B1',
    targetLevel: 'B2',
    scaffoldingLevel: 'moderate',
    strengths: ['Geniş Zaman Rutinleri', 'Geçmiş Zaman Hikaye Anlatımı', 'Modal Fiiller (Can/Should)'],
    strugglingTopics: ['Past Simple vs Present Perfect ayrımı', 'Make vs Do eşdizimi', 'Edat kullanımları (in/on/at)'],
    recentErrors: [
      { topic: 'past_vs_perfect', category: 'grammatical', timestamp: Date.now() - 1800000 },
      { topic: 'collocations', category: 'lexical', timestamp: Date.now() - 5400000 }
    ],
    skills: {
      listening: { score: 76, testedCount: 18, speedPreference: 1.0 },
      reading: { score: 82, testedCount: 22, comprehensionRate: 84 },
      writing: { score: 70, testedCount: 14, accuracyRate: 72 },
      speaking: { 
        score: 72, 
        testedCount: 16, 
        pronunciationScore: 74,
        weakPhonemes: ['/w/ vs /v/ (water/very)', '/ʃ/ vs /tʃ/'],
        strongPhonemes: ['/r/', '/k/']
      },
      grammar: { score: 74, testedCount: 25 },
      vocabulary: { score: 78, testedCount: 40, totalWordsTracked: 120, masteredWordsCount: 55 }
    },
    consecutiveCorrectCount: 2,
    consecutiveMistakeCount: 0
  },

  c1_advanced: {
    id: 'profile-c1-can',
    name: 'Can (C1 İleri Düzey)',
    avatar: '🚀',
    currentLevel: 'C1',
    targetLevel: 'C2',
    scaffoldingLevel: 'light',
    strengths: ['Karmaşık Cümle Yapıları', 'Akademik Metin Analizi', 'Hızlı Okuma ve Çıkarım'],
    strugglingTopics: ['Devrik Cümleler (Inversion)', 'Resmiyet ve Üslup Nüansları', 'Deyimsel İfadeler'],
    recentErrors: [
      { topic: 'inversion', category: 'structural', timestamp: Date.now() - 3600000 },
      { topic: 'register_nuance', category: 'pragmatic_nuance', timestamp: Date.now() - 10800000 }
    ],
    skills: {
      listening: { score: 92, testedCount: 30, speedPreference: 1.0 },
      reading: { score: 95, testedCount: 35, comprehensionRate: 96 },
      writing: { score: 88, testedCount: 24, accuracyRate: 90 },
      speaking: { 
        score: 89, 
        testedCount: 28, 
        pronunciationScore: 91,
        weakPhonemes: ['İntonasyon tonlaması (fall-rise)'],
        strongPhonemes: ['Tüm standart sesletimler']
      },
      grammar: { score: 90, testedCount: 40 },
      vocabulary: { score: 94, testedCount: 65, totalWordsTracked: 310, masteredWordsCount: 220 }
    },
    consecutiveCorrectCount: 4,
    consecutiveMistakeCount: 0
  }
};

export function getActiveStudentProfile(): StudentProfile {
  if (typeof window === 'undefined') return PRESET_PROFILES.b1_intermediate;
  try {
    const raw = localStorage.getItem(STUDENT_PROFILE_STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.warn('Could not parse student profile:', e);
  }
  return PRESET_PROFILES.b1_intermediate;
}

export function saveStudentProfile(profile: StudentProfile): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STUDENT_PROFILE_STORAGE_KEY, JSON.stringify(profile));
    notifyMemoryListeners();
  } catch (e) {
    console.warn('Could not save student profile:', e);
  }
}

export function switchProfilePreset(presetKey: 'a1_beginner' | 'b1_intermediate' | 'c1_advanced'): StudentProfile {
  const target = PRESET_PROFILES[presetKey] || PRESET_PROFILES.b1_intermediate;
  saveStudentProfile(target);
  if (typeof window !== 'undefined') {
    localStorage.setItem(ACTIVE_PROFILE_PRESET_KEY, presetKey);
  }
  return target;
}

export function getActiveProfilePresetKey(): string {
  if (typeof window === 'undefined') return 'b1_intermediate';
  return localStorage.getItem(ACTIVE_PROFILE_PRESET_KEY) || 'b1_intermediate';
}

// Update performance after an exercise or step
export function recordSkillPerformance(
  skill: 'listening' | 'reading' | 'writing' | 'speaking' | 'grammar' | 'vocabulary',
  isCorrect: boolean,
  metadata?: { speed?: 0.8 | 1.0; phoneme?: string; topic?: string; errorCategory?: ErrorCategory }
): void {
  const profile = getActiveStudentProfile();
  const skillStat = profile.skills[skill];
  if (!skillStat) return;

  skillStat.testedCount += 1;
  const delta = isCorrect ? 3 : -2;
  skillStat.score = Math.max(30, Math.min(100, skillStat.score + delta));

  if (isCorrect) {
    profile.consecutiveCorrectCount += 1;
    profile.consecutiveMistakeCount = 0;
    // If consecutive correct >= 3 and scaffolding is heavy, offer to lighten
    if (profile.consecutiveCorrectCount >= 4 && profile.scaffoldingLevel === 'heavy') {
      profile.scaffoldingLevel = 'moderate';
    } else if (profile.consecutiveCorrectCount >= 6 && profile.scaffoldingLevel === 'moderate') {
      profile.scaffoldingLevel = 'light';
    }
  } else {
    profile.consecutiveMistakeCount += 1;
    profile.consecutiveCorrectCount = 0;
    // Note: single mistake does NOT lower CEFR level!
    // But if struggling with consecutive mistakes, provide more scaffolding
    if (profile.consecutiveMistakeCount >= 2 && profile.scaffoldingLevel === 'light') {
      profile.scaffoldingLevel = 'moderate';
    } else if (profile.consecutiveMistakeCount >= 4 && profile.scaffoldingLevel === 'moderate') {
      profile.scaffoldingLevel = 'heavy';
    }

    if (metadata?.topic && metadata?.errorCategory) {
      profile.recentErrors.unshift({
        topic: metadata.topic,
        category: metadata.errorCategory,
        timestamp: Date.now()
      });
      if (profile.recentErrors.length > 10) profile.recentErrors.pop();
    }
  }

  saveStudentProfile(profile);
}

// -------------------------------------------------------------
// Word Mastery Memory & Spaced Repetition for Vocabulary (SRS)
// -------------------------------------------------------------

export function getAllWordRecords(): WordLearningRecord[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(WORD_MEMORY_STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    console.warn('Could not parse word memory:', e);
    return [];
  }
}

function saveWordRecords(records: WordLearningRecord[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(WORD_MEMORY_STORAGE_KEY, JSON.stringify(records));
    notifyMemoryListeners();
  } catch (e) {
    console.warn('Could not save word memory:', e);
  }
}

export function registerLessonVocabulary(
  words: { word: string; meaningTr: string; phonetic?: string; partOfSpeech?: string; exampleSentence?: string }[],
  lessonId: number,
  lessonCode: string,
  level: CEFRLevel
): void {
  const all = getAllWordRecords();
  let changed = false;

  words.forEach((w) => {
    const norm = w.word.trim().toLowerCase();
    const existing = all.find((item) => item.word.toLowerCase() === norm);
    if (!existing) {
      all.push({
        id: `word-${norm.replace(/[^a-z0-9]/g, '_')}`,
        word: w.word,
        meaningTr: w.meaningTr,
        level,
        status: 'encountered',
        phonetic: w.phonetic,
        partOfSpeech: w.partOfSpeech,
        exampleSentence: w.exampleSentence,
        encounterCount: 1,
        correctRecallCount: 0,
        mistakeCount: 0,
        lastTestedDate: Date.now(),
        nextReviewDate: Date.now() + 24 * 60 * 60 * 1000,
        intervalDays: 1,
        easeFactor: 2.5,
        associatedLessonId: lessonId,
        associatedLessonCode: lessonCode,
      });
      changed = true;
    } else {
      existing.encounterCount += 1;
      changed = true;
    }
  });

  if (changed) {
    saveWordRecords(all);
  }
}

export function updateWordMastery(
  word: string,
  action: 'recognized' | 'recalled' | 'mistake' | 'mastered'
): WordLearningRecord | null {
  const all = getAllWordRecords();
  const norm = word.trim().toLowerCase();
  const idx = all.findIndex((w) => w.word.toLowerCase() === norm);
  if (idx === -1) return null;

  const item = all[idx];
  const now = Date.now();
  const oneDay = 24 * 60 * 60 * 1000;

  if (action === 'recognized') {
    if (item.status === 'unseen' || item.status === 'encountered') {
      item.status = 'recognized';
    }
    item.encounterCount += 1;
  } else if (action === 'recalled') {
    item.correctRecallCount += 1;
    if (item.correctRecallCount >= 3 && item.intervalDays >= 4) {
      item.status = 'mastered';
    } else {
      item.status = 'recalled';
    }
    item.intervalDays = Math.max(1, Math.round(item.intervalDays * item.easeFactor));
    item.nextReviewDate = now + item.intervalDays * oneDay;
    item.lastTestedDate = now;
    item.easeFactor = Math.min(3.0, item.easeFactor + 0.1);
  } else if (action === 'mistake') {
    item.mistakeCount += 1;
    item.status = 'needs_review';
    item.intervalDays = 1;
    item.nextReviewDate = now;
    item.lastTestedDate = now;
    item.easeFactor = Math.max(1.3, item.easeFactor - 0.2);
  } else if (action === 'mastered') {
    item.status = 'mastered';
    item.intervalDays = 14;
    item.nextReviewDate = now + 14 * oneDay;
  }

  all[idx] = item;
  saveWordRecords(all);
  return item;
}

export function getDueWordsForReview(level?: CEFRLevel, maxCount = 5): WordLearningRecord[] {
  const all = getAllWordRecords();
  const now = Date.now();
  return all
    .filter((w) => {
      const matchLevel = !level || w.level === level;
      const isDue = w.status === 'needs_review' || w.nextReviewDate <= now;
      return matchLevel && isDue;
    })
    .slice(0, maxCount);
}

export function getWordStatusBadge(status: WordMasteryState): { labelTr: string; color: string; bg: string } {
  switch (status) {
    case 'unseen':
      return { labelTr: 'Yeni Kelime', color: 'text-slate-600', bg: 'bg-slate-100' };
    case 'encountered':
      return { labelTr: 'Karşılaşıldı', color: 'text-amber-700', bg: 'bg-amber-50' };
    case 'recognized':
      return { labelTr: 'Tanındı', color: 'text-sky-700', bg: 'bg-sky-50' };
    case 'recalled':
      return { labelTr: 'Doğru Hatırlandı', color: 'text-indigo-700', bg: 'bg-indigo-50' };
    case 'mastered':
      return { labelTr: 'Ustalık Kazanıldı', color: 'text-emerald-700', bg: 'bg-emerald-50' };
    case 'needs_review':
      return { labelTr: 'Tekrar Gerekli', color: 'text-rose-700', bg: 'bg-rose-50' };
  }
}
