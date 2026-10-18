import { LessonData, ExerciseItem, CEFRLevel } from '../types/lesson';
import { 
  StudentProfile, 
  AdaptiveLessonSupplement, 
  ScaffoldingLevel, 
  ScaffoldCallout, 
  PersonalizedTeacherNote,
  InterleavedRetrievalSet 
} from '../types/adaptive';
import { getActiveStudentProfile, registerLessonVocabulary } from './studentMemoryEngine';
import { getAllMistakes } from './srsEngine';

export function getAdaptiveLessonSupplement(lesson: LessonData, customProfile?: StudentProfile): AdaptiveLessonSupplement {
  const profile = customProfile || getActiveStudentProfile();
  
  // Register vocabulary from this lesson into word memory
  if (lesson.vocabulary && lesson.vocabulary.length > 0) {
    registerLessonVocabulary(
      lesson.vocabulary,
      lesson.id,
      lesson.code,
      lesson.level
    );
  }

  // 1. Personalized Teacher Note
  const personalizedTeacherNote = generatePersonalizedTeacherNote(profile, lesson);

  // 2. Scaffold Callouts based on student profile and errors
  const scaffoldCallouts = generateScaffoldCallouts(profile, lesson);

  // 3. Interleaved Retrieval (Past Mistakes & Spaced Repetition)
  const interleavedReview = generateInterleavedReview(profile, lesson);

  // 4. Adapt Exercises to current student difficulty & scaffolding
  const adaptedExercises = adaptExercises(lesson.exercises, profile.scaffoldingLevel);

  // 5. Skill Specific Supports
  const listeningSupport = {
    preListeningPromptTr: getPreListeningPrompt(lesson),
    keyVocabularyFocus: lesson.vocabulary ? lesson.vocabulary.slice(0, 3).map((v) => v.word) : [],
    suggestedSpeed: profile.skills.listening.speedPreference,
  };

  const readingSupport = {
    scanningPromptTr: `Metni okurken anahtar fiillere ve zaman bildiren ifadelere dikkat edin.`,
    deepComprehensionTipTr: `Cümlenin sadece kelime anlamına değil, eylemin konuşma anıyla kurduğu zamansal veya mantıksal köprüye odaklanın.`,
  };

  const speakingSupport = {
    targetPhonemes: profile.skills.speaking.weakPhonemes.slice(0, 2),
    stressBreakdown: (lesson.vocabulary || []).slice(0, 4).map((v) => ({
      word: v.word,
      stressedSyllable: getStressedSyllable(v.word),
      phonetic: v.phonetic || `/${v.word}/`,
    })),
  };

  return {
    studentProfile: profile,
    personalizedTeacherNote,
    scaffoldingLevel: profile.scaffoldingLevel,
    scaffoldCallouts,
    interleavedReview,
    adaptedExercises,
    listeningSupport,
    readingSupport,
    speakingSupport,
  };
}

function generatePersonalizedTeacherNote(profile: StudentProfile, lesson: LessonData): PersonalizedTeacherNote {
  const isBeginner = profile.currentLevel === 'A1' || profile.scaffoldingLevel === 'heavy';
  const isAdvanced = profile.currentLevel === 'C1' || profile.currentLevel === 'C2' || profile.scaffoldingLevel === 'light';

  let greeting = `Merhaba ${profile.name.split(' ')[0]}!`;
  let contextWhy = '';
  let scaffoldAdvice = '';
  let focusTip = '';

  if (isBeginner) {
    contextWhy = `${lesson.title} konusu İngilizce iletişiminizin temel yapı taşlarından biridir. Türkçe düşünme kalıplarından adım adım sıyrılarak somut ve günlük kullanımlarla ilerleyeceğiz.`;
    scaffoldAdvice = `Senin için her cümlenin altına Türkçe ipuçları ve kelime çözümlemeleri yerleştirdik. Acele etmeden, sesli telaffuz butonlarını dinleyerek tekrar et.`;
    focusTip = `Özellikle öznelerle fiillerin eşleşmesine ve telaffuzdaki sesletim vurgularına dikkat et.`;
  } else if (isAdvanced) {
    contextWhy = `${lesson.title} konusunda amacımız yalnızca kuralı bilmek değil; resmiyet derecesini, söylem akışını ve ana dili İngilizce olanların tercih ettiği doğal üslubu yakalamaktır.`;
    scaffoldAdvice = `Destek seviyesi en sade haline getirildi; doğrudan anlam çıkarma, devrik yapılar ve ince anlam ayrımları (nuance) üzerinde derinleşeceksin.`;
    focusTip = `Farklı bağlamlarda hangi alternatifin daha sofistike ve profesyonel durduğuna odaklan.`;
  } else {
    // Intermediate (B1 / B2)
    const hasPastError = profile.recentErrors.some(e => e.topic.includes('past') || e.topic.includes('perfect'));
    if (hasPastError) {
      contextWhy = `Önceki çalışmalarında zamanlar arası geçişte dikkat çeken noktalar oldu. ${lesson.title} dersinde bu köprüleri sağlamlaştıracak pratikler seni bekliyor.`;
    } else {
      contextWhy = `${lesson.title} konusunda hedefimiz cümlelerini daha zengin bağlaçlar, doğru eşdizimler ve akıcı bir ritimle kurabilmen.`;
    }
    scaffoldAdvice = `Dengeli destek modundasın: Temel ipuçları açık, ancak zorlandığın anlarda mikro-kural hatırlatıcıları devreye girecek.`;
    focusTip = `Cümledeki zaman ipuçlarını (yesterday, since, already vb.) ve fiil-isim eşdizimlerini gözden kaçırma.`;
  }

  return { greeting, contextWhy, scaffoldAdvice, focusTip };
}

function generateScaffoldCallouts(profile: StudentProfile, lesson: LessonData): ScaffoldCallout[] {
  const callouts: ScaffoldCallout[] = [];
  const textContext = `${lesson.title} ${lesson.learningObjective}`.toLowerCase();

  // If student struggles with specific grammar topics, add targeted reassurance & micro-scaffold
  if (profile.strugglingTopics.some(t => t.toLowerCase().includes('to be') || t.toLowerCase().includes('am / is / are'))) {
    callouts.push({
      triggerTopic: 'To Be Şahıs Uyumu',
      titleTr: 'Mikro Destek: Özne & To Be Uyumu',
      guidanceTr: 'Unutma: I -> am, tekil özneler (He/She/It/The cat) -> is, çoğullar ve You -> are alır.',
      quickExample: 'Sarah IS ready. / They ARE here.',
      reassuranceTr: 'Tek bir hata seviyeni etkilemez; bu küçük kuralı hatırlaman yeterli!'
    });
  }

  if (profile.strugglingTopics.some(t => t.toLowerCase().includes('past') || t.toLowerCase().includes('perfect'))) {
    callouts.push({
      triggerTopic: 'Past Simple vs Present Perfect',
      titleTr: 'Mikro Destek: Zaman Köprüsü',
      guidanceTr: 'Geçmişte net bir zaman ("yesterday", "in 2020", "last week") varsa Past Simple (V2); etkisi şimdi süren veya zamanı belirtilmeyen deneyimlerde Present Perfect (have/has + V3) kullanılır.',
      quickExample: 'I SAW him yesterday. vs I HAVE SEEN this movie before.',
      reassuranceTr: 'Bu iki zaman arasındaki farkı kavradığında B1 seviyesindeki akıcılığın iki katına çıkacaktır.'
    });
  }

  return callouts;
}

function generateInterleavedReview(profile: StudentProfile, lesson: LessonData): InterleavedRetrievalSet | undefined {
  const allMistakes = getAllMistakes();
  const dueMistakes = allMistakes.filter(
    (m) => m.status === 'due' && m.lessonId !== lesson.id
  );

  if (dueMistakes.length === 0) {
    // Generate a foundational check from earlier lesson if student has completed lessons
    return {
      titleTr: 'Hafıza Yoklama & Isınma (Interleaved Retrieval)',
      badgeTr: 'Aralıklı Tekrar',
      descriptionTr: 'Önceki derslerden seçilen bu hızlı alıştırma, zihnindeki dil yollarını taze tutar.',
      questions: [
        {
          id: `review-${lesson.id}-1`,
          type: 'multiple-choice',
          prompt: 'Önceki konuları hatırlayalım: Hangisi geçmişte belirli bir zaman diliminde tamamlanmış eylemi gösterir?',
          sentence: 'She ___ the report two hours ago.',
          options: ['finished', 'has finished', 'is finishing'],
          correctAnswer: 'finished',
          hint: '"two hours ago" belirli bir geçmiş zaman noktasıdır.',
          explanation: 'Tebrikler! Belirli zaman noktalarında Past Simple ("finished") kullanılır.'
        }
      ]
    };
  }

  // Use real due mistake from MistakeBank
  const target = dueMistakes[0];
  return {
    titleTr: 'Hafıza Yoklama: Önceki Dersteki Pürüzü Giderelim',
    badgeTr: 'Akıllı Telafi & Tekrar',
    descriptionTr: `"${target.lessonTitle}" dersinde kaydedilen yapıyı hatırlayalım ve neural hafızayı tazeleyelim:`,
    questions: [
      {
        id: `review-mistake-${target.id}`,
        type: 'multiple-choice',
        prompt: target.prompt,
        sentence: target.sentence || '___',
        options: target.remedialQuestion?.options || [
          target.correctAnswer,
          target.userWrongAnswer,
          'Neither'
        ],
        correctAnswer: target.correctAnswer,
        hint: target.ruleSnippet || 'Kuralı hatırla ve dikkatlice seç.',
        explanation: target.explanation || `Doğru cevap: ${target.correctAnswer}`
      }
    ]
  };
}

function adaptExercises(exercises: ExerciseItem[], scaffoldingLevel: ScaffoldingLevel): ExerciseItem[] {
  return exercises.map((ex) => {
    if (scaffoldingLevel === 'heavy') {
      // Heavy scaffolding: ensure rich hints and structured options
      return {
        ...ex,
        hint: ex.hint || `İpucu: Cümledeki zaman kelimesine veya özne uyumuna dikkat edin.`,
      };
    } else if (scaffoldingLevel === 'light') {
      // Light scaffolding: minimal initial hints, encouraging independent synthesis
      return {
        ...ex,
        hint: undefined, // hides hint until user explicitly requests
      };
    }
    return ex;
  });
}

function getPreListeningPrompt(lesson: LessonData): string {
  const title = lesson.title.toLowerCase();
  if (title.includes('tanışma') || title.includes('greeting')) {
    return 'Ön Dinleme Odağı: Konuşmacıların birbirlerine hangi resmiyet derecesiyle hitap ettiğine dikkat edin.';
  }
  if (title.includes('zaman') || title.includes('tense')) {
    return 'Ön Dinleme Odağı: Konuşmacının olayın geçmişte mi yoksa şu an mı gerçekleştiğini hangi yardımcı fiille belirttiğine odaklanın.';
  }
  return 'Ön Dinleme Odağı: Cümledeki ana vurgu kelimesine ve tonlamanın cümlenin sonundaki yükselişine/düşüşüne kulak verin.';
}

function getStressedSyllable(word: string): string {
  if (word.length <= 4) return word.toUpperCase();
  // Simple heuristic for display
  return word.slice(0, Math.ceil(word.length / 2)).toUpperCase() + word.slice(Math.ceil(word.length / 2));
}
