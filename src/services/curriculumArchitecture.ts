/**
 * LinguAAI V6.0 — Master Curriculum Architecture & Learning Sequence Engine
 * FAZ 1: Complete 488-Lesson Inventory, Pedagogical Classification & Dependency Graph
 */

import { CEFRLevel } from '../types/lesson';
import { 
  CurriculumLessonDef, 
  LessonCategoryType, 
  CurriculumValidationStatus 
} from '../types/curriculum';

/**
 * Pedagogical Lesson Classifier
 * Maps a lesson's title, module, and level to a standard CEFR lesson category
 */
export function classifyLessonType(title: string, moduleName: string, level: CEFRLevel): LessonCategoryType {
  const lowerTitle = title.toLowerCase();
  const lowerModule = moduleName.toLowerCase();

  // 1. Review and Integration / Assessment
  if (
    lowerTitle.includes('entegrasyon') ||
    lowerTitle.includes('değerlendirme') ||
    lowerTitle.includes('sınav') ||
    lowerTitle.includes('yeterlilik') ||
    lowerTitle.includes('sertifikasyon') ||
    lowerTitle.includes('sentez') ||
    lowerTitle.includes('seviye sonu') ||
    lowerTitle.includes('final')
  ) {
    return 'Review and Integration';
  }

  // 2. Pronunciation / Phonetics / Speech mechanics
  if (
    lowerTitle.includes('alfabe') ||
    lowerTitle.includes('spelling') ||
    lowerTitle.includes('telaffuz') ||
    lowerTitle.includes('fonetik') ||
    lowerTitle.includes('intonation') ||
    lowerTitle.includes('vurgu') ||
    lowerTitle.includes('ulama') ||
    lowerTitle.includes('linking') ||
    lowerTitle.includes('sesletim')
  ) {
    return 'Pronunciation';
  }

  // 3. Functional English / Real-world Communication
  if (
    lowerTitle.includes('tanışma') ||
    lowerTitle.includes('nezaket') ||
    lowerTitle.includes('sipariş') ||
    lowerTitle.includes('yol tarifi') ||
    lowerTitle.includes('restoran') ||
    lowerTitle.includes('havaalanı') ||
    lowerTitle.includes('otel') ||
    lowerTitle.includes('seyahat') ||
    lowerTitle.includes('müzakere') ||
    lowerTitle.includes('e-posta') ||
    lowerTitle.includes('telefon') ||
    lowerTitle.includes('sosyal plan') ||
    lowerTitle.includes('görüşme') ||
    lowerTitle.includes('iletişim yönergeleri') ||
    lowerTitle.includes('diplomasi')
  ) {
    return 'Functional English';
  }

  // 4. Listening
  if (
    lowerTitle.includes('dinleme') ||
    lowerTitle.includes('listening') ||
    lowerTitle.includes('işitsel') ||
    lowerTitle.includes('podcast') ||
    lowerTitle.includes('anons') ||
    lowerTitle.includes('kulak verme')
  ) {
    return 'Listening';
  }

  // 5. Speaking & Oral Fluency
  if (
    lowerTitle.includes('konuşma') ||
    lowerTitle.includes('speaking') ||
    lowerTitle.includes('hitabet') ||
    lowerTitle.includes('sunum') ||
    lowerTitle.includes('diyalekt') ||
    lowerTitle.includes('spontane') ||
    lowerTitle.includes('tartışma') ||
    lowerTitle.includes('fikir savunma') ||
    lowerTitle.includes('mülakat becerileri')
  ) {
    return 'Speaking';
  }

  // 6. Reading & Discourse Analysis
  if (
    lowerTitle.includes('okuma') ||
    lowerTitle.includes('reading') ||
    lowerTitle.includes('metin analizi') ||
    lowerTitle.includes('makale') ||
    lowerTitle.includes('çıkarım') ||
    lowerTitle.includes('eleştirel okuma') ||
    lowerTitle.includes('paragraf analizi')
  ) {
    return 'Reading';
  }

  // 7. Writing & Composition
  if (
    lowerTitle.includes('yazma') ||
    lowerTitle.includes('writing') ||
    lowerTitle.includes('kompozisyon') ||
    lowerTitle.includes('paragraf yazımı') ||
    lowerTitle.includes('makale kurgusu') ||
    lowerTitle.includes('resmi mektup') ||
    lowerTitle.includes('raporlama')
  ) {
    return 'Writing';
  }

  // 8. Vocabulary & Lexical Expansion
  if (
    lowerTitle.includes('sayılar') ||
    lowerTitle.includes('ülkeler') ||
    lowerTitle.includes('milliyetler') ||
    lowerTitle.includes('meslekler') ||
    lowerTitle.includes('renkler') ||
    lowerTitle.includes('yiyecek') ||
    lowerTitle.includes('içecek') ||
    lowerTitle.includes('duygular') ||
    lowerTitle.includes('hava durumu') ||
    lowerTitle.includes('kıyafet') ||
    lowerTitle.includes('hobiler') ||
    lowerTitle.includes('spor') ||
    lowerTitle.includes('günlük sabah rutini fiilleri') ||
    lowerTitle.includes('phrasal verb') ||
    lowerTitle.includes('deyim') ||
    lowerTitle.includes('kollokasyon') ||
    lowerTitle.includes('eşdizim') ||
    lowerTitle.includes('terminoloji') ||
    lowerTitle.includes('söz varlığı') ||
    lowerTitle.includes('kelime') ||
    lowerTitle.includes('zarfları') ||
    lowerTitle.includes('sıfatları') ||
    lowerModule.includes('kelime') ||
    lowerModule.includes('söz varlığı')
  ) {
    return 'Vocabulary';
  }

  // Default: Grammar (Dilbilgisi ve Cümle Yapısı)
  return 'Grammar';
}

/**
 * Extracts target syntactic structures and grammatical formulas
 */
export function deriveTargetStructures(title: string, level: CEFRLevel): string[] {
  const lower = title.toLowerCase();

  if (lower.includes('to be')) {
    return [
      'Subject + am / is / are + [Noun / Adjective / Place]',
      'Subject + am not / isn\'t / aren\'t + [Complement]',
      'Am / Is / Are + Subject + [Complement]?'
    ];
  }
  if (lower.includes('present simple') || lower.includes('geniş zaman')) {
    return [
      'Subject (I/You/We/They) + V1 (+ s/es for He/She/It)',
      'Subject + don\'t / doesn\'t + V1',
      'Do / Does + Subject + V1?'
    ];
  }
  if (lower.includes('past simple') || lower.includes('geçmiş zaman')) {
    return [
      'Subject + V2 (-ed / irregular form)',
      'Subject + didn\'t + V1',
      'Did + Subject + V1?'
    ];
  }
  if (lower.includes('present continuous') || lower.includes('şimdiki zaman')) {
    return [
      'Subject + am / is / are + V-ing',
      'Subject + am not / isn\'t / aren\'t + V-ing',
      'Am / Is / Are + Subject + V-ing?'
    ];
  }
  if (lower.includes('past continuous')) {
    return [
      'Subject + was / were + V-ing',
      'Subject + wasn\'t / weren\'t + V-ing',
      'While / When + Past Continuous + Past Simple'
    ];
  }
  if (lower.includes('present perfect')) {
    return [
      'Subject + have / has + V3 (Past Participle)',
      'Subject + haven\'t / hasn\'t + V3',
      'Have / Has + Subject + V3 (+ ever / yet / already / since / for)?'
    ];
  }
  if (lower.includes('future') || lower.includes('going to') || lower.includes('will')) {
    return [
      'Subject + am/is/are + going to + V1 (Prior Intent / Evidence)',
      'Subject + will + V1 (Instant Decision / Prediction)'
    ];
  }
  if (lower.includes('comparative') || lower.includes('superlative')) {
    return [
      'Noun A + is + Adj-er / more Adj + than + Noun B',
      'Noun + is + the Adj-est / the most Adj + in / of [Group]'
    ];
  }
  if (lower.includes('there is') || lower.includes('there are')) {
    return [
      'There is + Singular / Uncountable Noun',
      'There are + Plural Nouns',
      'Is there / Are there + any + Noun?'
    ];
  }
  if (lower.includes('first conditional') || lower.includes('1. tip koşul')) {
    return ['If + Present Simple, Subject + will / can + V1'];
  }
  if (lower.includes('second conditional') || lower.includes('2. tip koşul')) {
    return ['If + Past Simple, Subject + would / could + V1'];
  }
  if (lower.includes('third conditional') || lower.includes('3. tip koşul')) {
    return ['If + Past Perfect (had V3), Subject + would have + V3'];
  }
  if (lower.includes('mixed conditional')) {
    return ['If + Past Perfect (had V3), Subject + would + V1 (Past cause, present result)'];
  }
  if (lower.includes('passive') || lower.includes('edilgen')) {
    return ['Subject + Be (appropriate tense) + V3 (Past Participle) (+ by Agent)'];
  }
  if (lower.includes('causative') || lower.includes('ettirgen')) {
    return [
      'Subject + have / get + Object + V3 (Done by someone)',
      'Subject + have someone do / get someone to do'
    ];
  }
  if (lower.includes('reported speech') || lower.includes('dolaylı anlatım')) {
    return ['Speaker + said (that) + Backshifted Tense / told + Person + to V1'];
  }
  if (lower.includes('relative clause')) {
    return [
      'Antecedent + who / which / that + Defining Clause',
      'Antecedent, who / which + Non-defining Clause,'
    ];
  }
  if (lower.includes('inversion') || lower.includes('devrik')) {
    return ['Negative Adverbial (Seldom / Rarely / Not only) + Auxiliary + Subject + Main Verb'];
  }
  if (lower.includes('subjunctive')) {
    return ['Subject + recommend / demand / insist + that + Subject + (should) + Bare Verb'];
  }
  if (lower.includes('cleft sentence')) {
    return ['It + is/was + Emphasized Element + that/who...', 'What + Clause + is/was + Focus'];
  }

  // Level-specific syntactic defaults
  switch (level) {
    case 'A1':
      return ['Subject + Verb + Object / Complement', 'Subject + Auxiliary + Verb'];
    case 'A2':
      return ['Compound sentences with and / but / because / so', 'Time clauses with when / after / before'];
    case 'B1':
      return ['Complex sentences with dependent adverbial & relative clauses', 'Modal verb structures'];
    case 'B2':
      return ['Subordinate discourse connectors', 'Participial and reduced clause constructions'];
    case 'C1':
      return ['Nominalized structures', 'Syntactic fronting and rhetorical balance'];
    case 'C2':
      return ['Idiomatic syntactic inversions', 'Pragmatic nuance and stylistic framing'];
  }
}

/**
 * Derives target lexical items and collocations based on title, level, and category
 */
export function deriveTargetVocabulary(title: string, level: CEFRLevel): string[] {
  const lower = title.toLowerCase();

  if (lower.includes('tanışma')) {
    return ['introduce', 'pleasure', 'originally', 'meet', 'first name', 'surname', 'greet'];
  }
  if (lower.includes('alfabe')) {
    return ['spell', 'alphabet', 'vowel', 'consonant', 'capital letter', 'lowercase'];
  }
  if (lower.includes('sayılar')) {
    return ['number', 'digit', 'phone number', 'age', 'quantity', 'count', 'total'];
  }
  if (lower.includes('meslekler')) {
    return ['occupation', 'career', 'engineer', 'physician', 'manager', 'designer', 'colleague'];
  }
  if (lower.includes('günlük') || lower.includes('rutin')) {
    return ['wake up', 'commute', 'prepare', 'schedule', 'routine', 'frequently', 'habitually'];
  }
  if (lower.includes('restoran') || lower.includes('yiyecek')) {
    return ['beverage', 'appetizer', 'main course', 'bill', 'receipt', 'recommendation', 'dietary'];
  }
  if (lower.includes('seyahat') || lower.includes('ulaşım')) {
    return ['destination', 'itinerary', 'boarding pass', 'delay', 'transit', 'departure', 'platform'];
  }
  if (lower.includes('iş') || lower.includes('mülakat') || lower.includes('özgeçmiş')) {
    return ['expertise', 'responsibility', 'accomplishment', 'deadline', 'objective', 'candidate'];
  }
  if (lower.includes('müzakere') || lower.includes('e-posta')) {
    return ['regarding', 'furthermore', 'proposal', 'consensus', 'compromise', 'formality', 'cordially'];
  }
  if (lower.includes('argüman') || lower.includes('akademik')) {
    return ['substantiate', 'perspective', 'consequently', 'hypothesize', 'empirically', 'paradigm'];
  }
  if (lower.includes('üslup') || lower.includes('retorik')) {
    return ['nuance', 'connotation', 'understatement', 'eloquence', 'discourse', 'articulate'];
  }

  // Level-specific core vocabulary bundles
  switch (level) {
    case 'A1':
      return ['basic', 'common', 'everyday', 'person', 'place', 'activity'];
    case 'A2':
      return ['experience', 'describe', 'difference', 'frequently', 'instruction', 'social'];
    case 'B1':
      return ['opinion', 'advantage', 'consequence', 'opportunity', 'challenge', 'effective'];
    case 'B2':
      return ['significant', 'alternative', 'comprehensive', 'negotiate', 'demonstrate', 'evaluate'];
    case 'C1':
      return ['sophisticated', 'metaphorical', 'implication', 'ambiguity', 'framework', 'dialectical'];
    case 'C2':
      return ['rhetorical', 'philosophical', 'subtlety', 'parlance', 'veracity', 'mastery'];
  }
}

/**
 * Derives skills trained for this lesson
 */
export function deriveSkills(type: LessonCategoryType): ('grammar' | 'vocabulary' | 'listening' | 'reading' | 'writing' | 'speaking' | 'pronunciation')[] {
  switch (type) {
    case 'Grammar':
      return ['grammar', 'reading', 'writing'];
    case 'Vocabulary':
      return ['vocabulary', 'reading', 'speaking'];
    case 'Functional English':
      return ['speaking', 'listening', 'vocabulary'];
    case 'Listening':
      return ['listening', 'vocabulary', 'speaking'];
    case 'Speaking':
      return ['speaking', 'pronunciation', 'vocabulary'];
    case 'Reading':
      return ['reading', 'vocabulary', 'grammar'];
    case 'Writing':
      return ['writing', 'grammar', 'vocabulary'];
    case 'Pronunciation':
      return ['pronunciation', 'speaking', 'listening'];
    case 'Review and Integration':
      return ['grammar', 'vocabulary', 'reading', 'writing', 'speaking', 'listening'];
  }
}

/**
 * Pedagogical Dependency Graph Builder
 * Computes logical, non-cyclical prerequisites and successor links
 * Mathematically guaranteed DAG: all prerequisites of ID n are strictly < n.
 */
export function derivePrerequisitesAndNext(id: number, maxId: number = 488): {
  prerequisiteLessonIds: number[];
  nextLessonIds: number[];
} {
  if (id === 1) {
    return {
      prerequisiteLessonIds: [],
      nextLessonIds: [2],
    };
  }

  const prereqs: number[] = [];

  // Core immediate sequential predecessor
  prereqs.push(id - 1);

  // Modular anchor relationships (e.g., module integration lessons connect back to foundational module milestones)
  if (id % 10 === 0 && id - 9 >= 1) {
    // End-of-module integration lesson links back to module start
    const moduleStart = id - 9;
    if (!prereqs.includes(moduleStart)) prereqs.push(moduleStart);
  }

  // Cross-level milestone prerequisites
  if (id === 81) {
    // A2 start connects to A1 core (Present Simple & To Be)
    if (!prereqs.includes(11)) prereqs.push(11); // To Be
    if (!prereqs.includes(21)) prereqs.push(21); // Present Simple
  } else if (id === 171) {
    // B1 start (Present Perfect) connects to Past Simple
    if (!prereqs.includes(81)) prereqs.push(81);
  } else if (id === 271) {
    // B2 start (Third Conditional) connects to Conditionals 1 & 2
    if (!prereqs.includes(211)) prereqs.push(211);
  } else if (id === 371) {
    // C1 start (Subjunctive) connects to Modals and Advanced Discourse
    if (!prereqs.includes(331)) prereqs.push(331);
  } else if (id === 451) {
    // C2 start connects to C1 Rhetoric
    if (!prereqs.includes(421)) prereqs.push(421);
  }

  // Sort and deduplicate prerequisites
  const sortedPrereqs = Array.from(new Set(prereqs)).sort((a, b) => a - b);

  // Next lesson links
  const nextIds: number[] = [];
  if (id < maxId) {
    nextIds.push(id + 1);
  }

  return {
    prerequisiteLessonIds: sortedPrereqs,
    nextLessonIds: nextIds,
  };
}

/**
 * Computes full mathematical and pedagogical audit metrics for FAZ 1 delivery
 */
export function getCurriculumInventoryAudit(allLessons: CurriculumLessonDef[]) {
  const totalLessons = allLessons.length;

  const levelCounts: Record<CEFRLevel, number> = { A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0 };
  const typeCounts: Record<LessonCategoryType, number> = {
    'Grammar': 0,
    'Vocabulary': 0,
    'Functional English': 0,
    'Listening': 0,
    'Speaking': 0,
    'Reading': 0,
    'Writing': 0,
    'Pronunciation': 0,
    'Review and Integration': 0,
  };
  const statusCounts: Record<CurriculumValidationStatus, number> = {
    'content_reviewed': 0,
    'auto_verified': 0,
    'inventoried': 0,
    'remediated': 0,
    'unverified': 0,
  };

  // Cycle check on the dependency graph
  const adj = new Map<number, number[]>();
  let hasCycles = false;
  let cyclePath: number[] = [];

  allLessons.forEach((l) => {
    levelCounts[l.level] = (levelCounts[l.level] || 0) + 1;
    if (l.lessonType) typeCounts[l.lessonType] = (typeCounts[l.lessonType] || 0) + 1;
    if (l.validationStatus) statusCounts[l.validationStatus] = (statusCounts[l.validationStatus] || 0) + 1;
    adj.set(l.id, l.prerequisiteLessonIds || []);
  });

  const visited = new Set<number>();
  const inStack = new Set<number>();

  function dfs(curr: number, path: number[]): boolean {
    visited.add(curr);
    inStack.add(curr);

    const neighbours = adj.get(curr) || [];
    for (const n of neighbours) {
      if (!visited.has(n)) {
        if (dfs(n, [...path, n])) return true;
      } else if (inStack.has(n)) {
        hasCycles = true;
        cyclePath = [...path, n];
        return true;
      }
    }

    inStack.delete(curr);
    return false;
  }

  for (const l of allLessons) {
    if (!visited.has(l.id)) {
      if (dfs(l.id, [l.id])) break;
    }
  }

  return {
    totalLessons,
    totalModules: 49,
    levelCounts,
    typeCounts,
    statusCounts,
    dagIntegrity: {
      isAcyclic: !hasCycles,
      cyclePath,
    },
    sampleLessons: [
      allLessons[0], // ID 1
      allLessons[10], // ID 11
      allLessons[80], // ID 81
      allLessons[170], // ID 171
      allLessons[270], // ID 271
      allLessons[370], // ID 371
      allLessons[450], // ID 451
      allLessons[487], // ID 488
    ],
  };
}
