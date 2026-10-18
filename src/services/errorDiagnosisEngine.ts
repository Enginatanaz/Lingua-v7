import { ExerciseItem, CEFRLevel, LessonSkillType } from '../types/lesson';
import { ErrorCategory, ErrorDiagnosis } from '../types/adaptive';

interface DiagnoseParams {
  userWrongAnswer: string;
  correctAnswer: string;
  prompt: string;
  sentence?: string;
  level: CEFRLevel;
  skillType?: LessonSkillType;
  topic?: string;
}

export function diagnoseStudentError(params: DiagnoseParams): ErrorDiagnosis {
  const { userWrongAnswer, correctAnswer, prompt, sentence, level } = params;
  const userLower = (userWrongAnswer || '').trim().toLowerCase();
  const correctLower = (correctAnswer || '').trim().toLowerCase();
  const context = `${prompt} ${sentence || ''}`.toLowerCase();

  // 1. Structural / Word Order Detection
  const isWordOrderIssue = 
    (userLower.split(' ').length > 1 && 
     userLower.split(' ').sort().join(' ') === correctLower.split(' ').sort().join(' ')) ||
    context.includes('kelime sırası') ||
    context.includes('word order') ||
    context.includes('devrik') ||
    context.includes('inversion') ||
    (userLower.includes('not') && correctLower.includes("n't")) ||
    /\b(where|when|why|how|what)\s+(you|he|she|they|we)\b/.test(userLower);

  // 2. Lexical / Collocation Detection
  const isLexicalCollocation = 
    context.includes('collocation') ||
    context.includes('eşdizim') ||
    context.includes('kelime seçimi') ||
    (userLower.includes('make') && correctLower.includes('do')) ||
    (userLower.includes('do') && correctLower.includes('make')) ||
    (userLower.includes('say') && correctLower.includes('tell')) ||
    (userLower.includes('tell') && correctLower.includes('say')) ||
    (userLower.includes('hear') && correctLower.includes('listen')) ||
    (userLower.includes('borrow') && correctLower.includes('lend'));

  // 3. Spelling / Phonological Detection
  const editDistance = levenshtein(userLower, correctLower);
  const isSpellingOrTypo = editDistance <= 2 && userLower.length > 3 && !userLower.includes(' ');

  // 4. Pragmatic / Nuance Detection
  const isPragmatic = 
    level === 'C1' || level === 'C2' ||
    context.includes('üslup') ||
    context.includes('register') ||
    context.includes('formal') ||
    context.includes('informal') ||
    context.includes('nuance') ||
    context.includes('nezaket');

  let category: ErrorCategory = 'grammatical';
  let categoryLabelTr = 'Dil Bilgisi & Zaman Uyumu';
  let rootCauseTr = '';
  let ruleSnippetTr = '';

  if (isSpellingOrTypo) {
    category = 'spelling_phonological';
    categoryLabelTr = 'Yazım & Fonetik Farklılık';
    rootCauseTr = `Cevabınız hedeflenen kelimeye çok yakın ancak harf veya ses diziliminde küçük bir fark var: "${userWrongAnswer}" yerine "${correctAnswer}".`;
    ruleSnippetTr = `Yazım Kuralı: İngilizcede benzer sesletilen harf gruplarına (örneğin çift sessizler veya sessiz harf düşmeleri) dikkat edilmelidir.`;
  } else if (isWordOrderIssue) {
    category = 'structural';
    categoryLabelTr = 'Cümle Yapısı & Sözcük Dizimi';
    rootCauseTr = `İngilizcede temel cümle dizilimi S-V-O (Özne-Yüklem-Nesne) sırasını takip eder. Soruda kullanılan sözcük sırası ("${userWrongAnswer}") bu sentaktik kuralı ihlal etti.`;
    ruleSnippetTr = `Sözcük Dizimi Kuralı: Soru ve devrik yapılarda yardımcı fiil özneden önce gelirken, düz cümlelerde özne doğrudan eylem veya durum bildiren yardımcı fiille bağlanır.`;
  } else if (isLexicalCollocation) {
    category = 'lexical';
    categoryLabelTr = 'Sözcük Seçimi & Eşdizim (Collocation)';
    rootCauseTr = `Seçilen sözcük ("${userWrongAnswer}") Türkçe mantıkla doğru görünse de, İngilizcede bu bağlamda doğal kabul edilen eşdizim "${correctAnswer}" biçimidir.`;
    ruleSnippetTr = `Eşdizim Kuralı: Bazı fiiller belirli isimlerle kalıplaşmıştır (örneğin: "make a mistake", "do homework", "tell a story").`;
  } else if (isPragmatic) {
    category = 'pragmatic_nuance';
    categoryLabelTr = 'Bağlamsal Üslup & Söylem Nüansı';
    rootCauseTr = `Verdiğiniz ifade ("${userWrongAnswer}") anlamca anlaşılabilir olsa da, bu bağlamın resmiyetine veya aranan ince üslup tonuna "${correctAnswer}" daha uygundur.`;
    ruleSnippetTr = `Söylem Kuralı: İleri seviye iletişimde yalnızca gramer doğruluğu yetmez; bağlamın resmiyeti, nezaket derecesi ve ifade tonu belirleyicidir.`;
  } else {
    // Grammatical
    category = 'grammatical';
    categoryLabelTr = 'Dil Bilgisi & Çekim Kuralı';
    rootCauseTr = `Cümlenin zamanı, kişi zamiri veya fiil çekimi ("${userWrongAnswer}") hedef yapının kuralına uymadı. Doğru çekim: "${correctAnswer}".`;
    ruleSnippetTr = `Gramer Kuralı: İngilizcede eylemin zamanı (tense) ve özne-yüklem uyumu (subject-verb agreement) her zaman titizlikle korunmalıdır.`;
  }

  // Create an immediate targeted Remedial Drill
  const remedialExercise: ExerciseItem = generateRemedialDrill(
    category,
    correctAnswer,
    prompt,
    sentence,
    level
  );

  return {
    category,
    categoryLabelTr,
    identifiedMistake: `Verilen cevap: "${userWrongAnswer}"`,
    rootCauseTr,
    correctAlternative: correctAnswer,
    ruleSnippetTr,
    remedialExercise,
  };
}

function generateRemedialDrill(
  category: ErrorCategory,
  correctAnswer: string,
  originalPrompt: string,
  originalSentence: string | undefined,
  level: CEFRLevel
): ExerciseItem {
  const drillId = `remedial-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`;

  // Generate a parallel remedial question
  if (category === 'grammatical') {
    return {
      id: drillId,
      type: 'multiple-choice',
      prompt: `[Telafi Alıştırması] Benzer yapıyı pekiştirelim: Boşluğa en uygun çekimi seçin.`,
      sentence: originalSentence 
        ? originalSentence.replace(new RegExp(escapeRegExp(correctAnswer), 'i'), '___')
        : `Lütfen doğru yapıyı seçin: "___"`,
      options: shuffle([
        correctAnswer,
        generateDistractor(correctAnswer, 'tense'),
        generateDistractor(correctAnswer, 'agreement'),
      ]),
      correctAnswer: correctAnswer,
      hint: `İpucu: Cümlenin zaman zarfına ve özne uyumuna dikkat edin.`,
      explanation: `Harika! "${correctAnswer}" kullanarak kuralı doğru şekilde uyguladınız ve hatayı telafi ettiniz.`,
    };
  }

  if (category === 'lexical') {
    return {
      id: drillId,
      type: 'multiple-choice',
      prompt: `[Eşdizim Telafisi] Bu bağlamda doğal olan doğru kelimeyi seçin:`,
      sentence: originalSentence || `The best expression here is: ___`,
      options: shuffle([
        correctAnswer,
        generateDistractor(correctAnswer, 'lexical'),
        generateDistractor(correctAnswer, 'false_friend'),
      ]),
      correctAnswer: correctAnswer,
      hint: `İpucu: İngilizcede bu fiille birlikte hangi isim veya edat kullanılır?`,
      explanation: `Tebrikler! Doğru eşdizimi ("${correctAnswer}") seçerek zihinsel kalıbı pekiştirdiniz.`,
    };
  }

  if (category === 'structural') {
    return {
      id: drillId,
      type: 'multiple-choice',
      prompt: `[Sözcük Dizimi Telafisi] Cümle öğelerini doğru sıraya koyan seçeneği bulun:`,
      sentence: originalSentence || `Doğru cümle sırasını seçin.`,
      options: shuffle([
        correctAnswer,
        `Not ${correctAnswer}`,
        `Did ${correctAnswer}`,
      ]),
      correctAnswer: correctAnswer,
      hint: `İpucu: Özne, yardımcı fiil ve ana eylem sırasına odaklanın.`,
      explanation: `Doğru! Cümle öğelerini kusursuz sıralayarak yapıyı başarıyla tamamladınız.`,
    };
  }

  // Default fallback remedial
  return {
    id: drillId,
    type: 'multiple-choice',
    prompt: `[Hızlı Telafi] Kuralı uygulayarak doğru cevabı onaylayın:`,
    sentence: `Seçim: ___`,
    options: shuffle([
      correctAnswer,
      `Unrelated Option`,
      `Incorrect form`,
    ]),
    correctAnswer: correctAnswer,
    hint: `Kuralı hatırlayın ve doğru alternatifi işaretleyin.`,
    explanation: `Başarılı! Kuralı pekiştirdiniz.`,
  };
}

function generateDistractor(target: string, type: string): string {
  const clean = target.trim();
  if (type === 'tense') {
    if (clean.endsWith('ed')) return clean.replace(/ed$/, 'ing');
    if (clean.endsWith('ing')) return clean.replace(/ing$/, 'ed');
    if (clean === 'is') return 'are';
    if (clean === 'are') return 'is';
    if (clean === 'am') return 'are';
    if (clean === 'was') return 'were';
    if (clean === 'were') return 'was';
    if (clean === 'have') return 'has';
    if (clean === 'has') return 'have';
    return `${clean}s`;
  }
  if (type === 'agreement') {
    if (clean.endsWith('s')) return clean.slice(0, -1);
    return `${clean}ed`;
  }
  return `non-${clean}`;
}

function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function levenshtein(a: string, b: string): number {
  const matrix: number[][] = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1)
        );
      }
    }
  }
  return matrix[b.length][a.length];
}

function escapeRegExp(string: string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
