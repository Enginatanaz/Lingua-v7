/**
 * Web Speech API helper for native text-to-speech pronunciation
 * Supports dynamic speed rates: 0.8x (learner), 1.0x (normal), 1.2x (fluent)
 */

export type SpeechRate = 0.8 | 1.0 | 1.2;

const SPEECH_RATE_KEY = 'linguaai_v6_speech_rate';

export function getSavedSpeechRate(): SpeechRate {
  if (typeof window === 'undefined') return 0.8;
  try {
    const saved = localStorage.getItem(SPEECH_RATE_KEY);
    if (saved === '0.8' || saved === '1.0' || saved === '1.2') {
      return parseFloat(saved) as SpeechRate;
    }
  } catch (e) {
    console.warn(e);
  }
  return 0.8;
}

export function saveSpeechRate(rate: SpeechRate): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(SPEECH_RATE_KEY, String(rate));
  } catch (e) {
    console.warn(e);
  }
}

let activeUtterance: SpeechSynthesisUtterance | null = null;
let currentOnEndCallback: (() => void) | null = null;

export function playPronunciation(
  text: string,
  options: {
    rate?: number;
    pitch?: number;
    onStart?: () => void;
    onEnd?: () => void;
  } = {}
): boolean {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return false;
  }

  try {
    // If there's an ongoing utterance, cleanly finish it
    stopPronunciation();

    const cleanText = text.replace(/[*_#`[\]()]/g, '').trim();
    if (!cleanText) return false;

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'en-US';
    
    // Choose rate: options.rate > saved preference > 0.8 default
    const preferredRate = options.rate ?? getSavedSpeechRate();
    utterance.rate = preferredRate;
    utterance.pitch = options.pitch || 1.0;

    // Pick best English voice
    const voices = window.speechSynthesis.getVoices();
    const enVoice =
      voices.find((v) => v.lang === 'en-US' && v.name.includes('Natural')) ||
      voices.find((v) => v.lang === 'en-US') ||
      voices.find((v) => v.lang.startsWith('en-US')) ||
      voices.find((v) => v.lang.startsWith('en'));

    if (enVoice) {
      utterance.voice = enVoice;
    }

    currentOnEndCallback = options.onEnd || null;

    utterance.onstart = () => {
      if (options.onStart) options.onStart();
    };

    utterance.onend = () => {
      activeUtterance = null;
      if (currentOnEndCallback) {
        currentOnEndCallback();
        currentOnEndCallback = null;
      }
    };

    utterance.onerror = (e) => {
      console.warn('SpeechSynthesis error:', e);
      activeUtterance = null;
      if (currentOnEndCallback) {
        currentOnEndCallback();
        currentOnEndCallback = null;
      }
    };

    activeUtterance = utterance;
    window.speechSynthesis.speak(utterance);
    return true;
  } catch (err) {
    console.warn('Speech synthesis error:', err);
    if (options.onEnd) options.onEnd();
    return false;
  }
}

export function stopPronunciation(): void {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    if (currentOnEndCallback) {
      currentOnEndCallback();
      currentOnEndCallback = null;
    }
    activeUtterance = null;
  }
}

export function isSpeechSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}
