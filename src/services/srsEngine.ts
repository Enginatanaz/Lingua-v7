import { MistakeRecord, SRSStats, MistakeErrorCategory } from '../types/srs';
import { diagnoseStudentError } from './errorDiagnosisEngine';

const MISTAKE_BANK_STORAGE_KEY = 'linguaai_v6_mistake_bank';

type ChangeListener = () => void;
const listeners: ChangeListener[] = [];

function notifyListeners() {
  listeners.forEach((listener) => {
    try {
      listener();
    } catch (e) {
      console.warn('SRS listener error:', e);
    }
  });
}

export function subscribeToSRS(callback: ChangeListener): () => void {
  listeners.push(callback);
  return () => {
    const idx = listeners.indexOf(callback);
    if (idx !== -1) {
      listeners.splice(idx, 1);
    }
  };
}

export function getAllMistakes(): MistakeRecord[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(MISTAKE_BANK_STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    console.warn('Failed to parse MistakeBank:', e);
    return [];
  }
}

function saveMistakes(mistakes: MistakeRecord[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(MISTAKE_BANK_STORAGE_KEY, JSON.stringify(mistakes));
    notifyListeners();
  } catch (e) {
    console.warn('Failed to save MistakeBank:', e);
  }
}

export function addMistake(entry: {
  lessonId: number;
  lessonTitle: string;
  lessonCode: string;
  level: MistakeRecord['level'];
  exerciseId: string;
  prompt: string;
  sentence?: string;
  userWrongAnswer: string;
  correctAnswer: string;
  explanation: string;
  ruleSnippet?: string;
  errorCategory?: MistakeErrorCategory;
  diagnosis?: string;
}): MistakeRecord {
  const all = getAllMistakes();
  
  // Perform intelligent diagnostic analysis
  const diag = diagnoseStudentError({
    userWrongAnswer: entry.userWrongAnswer,
    correctAnswer: entry.correctAnswer,
    prompt: entry.prompt,
    sentence: entry.sentence,
    level: entry.level,
  });

  const resolvedCategory = entry.errorCategory || diag.category;
  const resolvedDiagnosis = entry.diagnosis || diag.rootCauseTr;
  const resolvedRuleSnippet = entry.ruleSnippet || diag.ruleSnippetTr;

  // Check if same exercise already recorded
  const existingIdx = all.findIndex(
    (m) => m.lessonId === entry.lessonId && m.exerciseId === entry.exerciseId
  );

  const now = Date.now();
  let returnRecord: MistakeRecord;

  if (existingIdx !== -1) {
    // Update existing mistake
    const existing = all[existingIdx];
    all[existingIdx] = {
      ...existing,
      userWrongAnswer: entry.userWrongAnswer,
      correctAnswer: entry.correctAnswer,
      explanation: entry.explanation,
      ruleSnippet: resolvedRuleSnippet,
      errorCategory: resolvedCategory,
      diagnosis: resolvedDiagnosis,
      remedialQuestion: diag.remedialExercise,
      status: 'due',
      nextReviewDate: now, // due immediately
      reviewCount: existing.reviewCount,
      timestamp: now,
    };
    returnRecord = all[existingIdx];
  } else {
    // New mistake record with full diagnosis and remedial drill
    const newRecord: MistakeRecord = {
      id: `mistake-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
      ...entry,
      ruleSnippet: resolvedRuleSnippet,
      errorCategory: resolvedCategory,
      diagnosis: resolvedDiagnosis,
      remedialQuestion: diag.remedialExercise,
      timestamp: now,
      reviewCount: 0,
      status: 'due',
      nextReviewDate: now,
      intervalDays: 1,
      easeFactor: 2.5,
    };
    all.unshift(newRecord);
    returnRecord = newRecord;
  }

  saveMistakes(all);
  return returnRecord;
}

export function recordMistakeReview(id: string, wasCorrect: boolean): void {
  const all = getAllMistakes();
  const idx = all.findIndex((m) => m.id === id);
  if (idx === -1) return;

  const current = all[idx];
  const now = Date.now();
  const oneDayMs = 24 * 60 * 60 * 1000;

  if (wasCorrect) {
    const nextInterval = Math.max(1, Math.round(current.intervalDays * current.easeFactor));
    const isMastered = current.reviewCount >= 2;

    all[idx] = {
      ...current,
      reviewCount: current.reviewCount + 1,
      status: isMastered ? 'mastered' : 'reviewed',
      intervalDays: nextInterval,
      nextReviewDate: now + nextInterval * oneDayMs,
      easeFactor: Math.min(3.0, current.easeFactor + 0.1),
    };
  } else {
    // Reset to interval 1
    all[idx] = {
      ...current,
      reviewCount: current.reviewCount + 1,
      status: 'due',
      intervalDays: 1,
      nextReviewDate: now,
      easeFactor: Math.max(1.3, current.easeFactor - 0.2),
    };
  }

  saveMistakes(all);
}

export function resolveMistake(id: string): void {
  const all = getAllMistakes();
  const idx = all.findIndex((m) => m.id === id);
  if (idx === -1) return;

  all[idx] = {
    ...all[idx],
    status: 'resolved',
    resolvedAt: Date.now(),
    nextReviewDate: Date.now() + 7 * 24 * 60 * 60 * 1000, // follow-up in 7 days
  };

  saveMistakes(all);
}

export function removeMistake(id: string): void {
  const all = getAllMistakes().filter((m) => m.id !== id);
  saveMistakes(all);
}

export function clearMasteredMistakes(): void {
  const all = getAllMistakes().filter((m) => m.status !== 'mastered' && m.status !== 'resolved');
  saveMistakes(all);
}

export function getSRSStats(): SRSStats {
  const all = getAllMistakes();
  const now = Date.now();

  const due = all.filter((m) => m.status === 'due' || (m.status === 'reviewed' && m.nextReviewDate <= now));
  const mastered = all.filter((m) => m.status === 'mastered');
  const resolved = all.filter((m) => m.status === 'resolved');
  const reviewed = all.filter((m) => m.status === 'reviewed' && m.nextReviewDate > now);

  return {
    totalMistakes: all.length,
    dueCount: due.length,
    reviewedCount: reviewed.length,
    masteredCount: mastered.length,
    resolvedCount: resolved.length,
  };
}
