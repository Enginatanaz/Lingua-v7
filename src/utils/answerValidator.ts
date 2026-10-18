/**
 * Robust Answer Normalization and Validation Engine
 * Handles capitalization, benign punctuation, multiple spaces,
 * common English contractions, and valid alternative answer variants.
 */

export interface ValidationResult {
  isCorrect: boolean;
  confidence: 'high' | 'medium';
  normalizedUser: string;
  normalizedCorrect: string;
  matchedAlternative?: string;
  feedbackCategory?: 'perfect' | 'contraction-variant' | 'minor-typo' | 'incorrect';
}

// Common English contractions and their expanded forms
const CONTRACTION_MAP: Record<string, string> = {
  "i'm": "i am",
  "you're": "you are",
  "he's": "he is",
  "she's": "she is",
  "it's": "it is",
  "we're": "we are",
  "they're": "they are",
  "don't": "do not",
  "doesn't": "does not",
  "didn't": "did not",
  "can't": "cannot",
  "cannot": "can not",
  "won't": "will not",
  "isn't": "is not",
  "aren't": "are not",
  "wasn't": "was not",
  "weren't": "were not",
  "haven't": "have not",
  "hasn't": "has not",
  "hadn't": "had not",
  "wouldn't": "would not",
  "shouldn't": "should not",
  "couldn't": "could not",
  "let's": "let us",
  "that's": "that is",
  "there's": "there is",
  "what's": "what is",
  "where's": "where is",
  "who's": "who is",
};

/**
 * Standardize text: lowercases, trims, normalizes curly quotes, removes benign trailing punctuation
 */
export function normalizeSentence(str: string): string {
  if (!str) return '';
  return str
    .toLowerCase()
    .replace(/[‘’`]/g, "'") // curly quotes to single quote
    .replace(/[“”"]/g, '') // quotes
    .replace(/[.,!?;:]+$/g, '') // strip trailing sentence punctuation
    .replace(/\s+/g, ' ') // condense whitespace
    .trim();
}

/**
 * Expands contractions to standard words for flexible comparison
 */
export function expandContractions(text: string): string {
  let normalized = normalizeSentence(text);
  for (const [contraction, expanded] of Object.entries(CONTRACTION_MAP)) {
    // Word boundary or surrounded by space
    const regex = new RegExp(`\\b${contraction}\\b`, 'gi');
    normalized = normalized.replace(regex, expanded);
  }
  return normalized;
}

/**
 * Extracts alternative acceptable answers from answer key (e.g. "don't / do not", "I am | I'm")
 */
export function getAcceptableAnswers(correctAnswer: string): string[] {
  if (!correctAnswer) return [];
  // Split on / or | or " or "
  const rawParts = correctAnswer.split(/\s*[\/|]\s*|\s+or\s+/i);
  const answers: string[] = [];

  for (const part of rawParts) {
    const trimmed = part.trim();
    if (trimmed) {
      answers.push(trimmed);
      // If part has contractions, also include expanded
      const expanded = expandContractions(trimmed);
      if (expanded !== normalizeSentence(trimmed)) {
        answers.push(expanded);
      }
    }
  }

  // Also include original
  answers.push(correctAnswer.trim());
  return Array.from(new Set(answers));
}

/**
 * Validates a user answer against the target correct answer
 */
export function validateStudentAnswer(
  userAnswer: string,
  correctAnswer: string
): ValidationResult {
  const normUser = normalizeSentence(userAnswer);
  const normCorrect = normalizeSentence(correctAnswer);

  if (!normUser) {
    return {
      isCorrect: false,
      confidence: 'high',
      normalizedUser: normUser,
      normalizedCorrect: normCorrect,
      feedbackCategory: 'incorrect',
    };
  }

  // 1. Direct match
  if (normUser === normCorrect) {
    return {
      isCorrect: true,
      confidence: 'high',
      normalizedUser: normUser,
      normalizedCorrect: normCorrect,
      feedbackCategory: 'perfect',
    };
  }

  // 2. Contraction match (e.g. user typed "I am" and answer is "I'm")
  const expandedUser = expandContractions(normUser);
  const expandedCorrect = expandContractions(normCorrect);
  if (expandedUser === expandedCorrect) {
    return {
      isCorrect: true,
      confidence: 'high',
      normalizedUser: normUser,
      normalizedCorrect: normCorrect,
      matchedAlternative: correctAnswer,
      feedbackCategory: 'contraction-variant',
    };
  }

  // 3. Alternatives in answer key (e.g. "bought / purchased")
  const alternatives = getAcceptableAnswers(correctAnswer);
  for (const alt of alternatives) {
    const normAlt = normalizeSentence(alt);
    if (normUser === normAlt || expandedUser === expandContractions(normAlt)) {
      return {
        isCorrect: true,
        confidence: 'high',
        normalizedUser: normUser,
        normalizedCorrect: normCorrect,
        matchedAlternative: alt,
        feedbackCategory: 'perfect',
      };
    }
  }

  // 4. Minor typo / edit distance check for single-word answers (length >= 4 and edit distance 1)
  if (
    !normUser.includes(' ') &&
    !normCorrect.includes(' ') &&
    normCorrect.length >= 4 &&
    levenshteinDistance(normUser, normCorrect) === 1
  ) {
    return {
      isCorrect: true,
      confidence: 'medium',
      normalizedUser: normUser,
      normalizedCorrect: normCorrect,
      feedbackCategory: 'minor-typo',
    };
  }

  return {
    isCorrect: false,
    confidence: 'high',
    normalizedUser: normUser,
    normalizedCorrect: normCorrect,
    feedbackCategory: 'incorrect',
  };
}

/**
 * Calculates Levenshtein Distance for minor typo detection
 */
function levenshteinDistance(a: string, b: string): number {
  const matrix: number[][] = [];
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1,     // insertion
          matrix[i - 1][j] + 1      // deletion
        );
      }
    }
  }
  return matrix[b.length][a.length];
}
