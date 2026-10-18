/**
 * Natural Bilingual Studio Audio & Pedagogical Narration Engine (LinguAAI)
 * 
 * FAZ 4-2 FIXES:
 * 1. Single & Consistent Voice Provider: Eliminates random degradation to robotic voices mid-lecture.
 * 2. Cohesive Pedagogical Chaptering: Replaces 25 fragmented sentences with 5 fluent, contextual chapters
 *    to preserve natural human breath, continuous prosody, and minimize network roundtrips.
 * 3. Robust Session Lifecycle & Abort Control: Prevents race conditions, stale audio collisions, and
 *    unwanted autoplay when switching lessons or scrub-jumping.
 * 4. Transparent, Strict Error Handling: Automatic 1x retry on transient failures; if unrecoverable,
 *    pauses cleanly with an explicit 'error' state rather than silently defaulting to low-quality browser synthesis.
 * 5. Sequential Non-Blocking Prefetch: Background preloading of the subsequent chapter occurs ONLY after
 *    the active audio is safely playing, eliminating API concurrency bottlenecks.
 */

import { TeacherLectureData, LectureBreakdownStep, CommonMistakeItem, CEFRLevel } from '../types/lesson';
import { SpeechRate, getSavedSpeechRate, saveSpeechRate } from '../utils/speech';

export type LanguageCode = 'en' | 'tr';
export type AudioPlaybackState = 'idle' | 'loading' | 'buffering' | 'playing' | 'paused' | 'waiting_next' | 'completed' | 'error';
export type TeacherPersona = 'warm' | 'focused' | 'dynamic';
export type AudioEngineMode = 'neural' | 'browser';

export interface AudioSegment {
  id: string;
  section: string;
  text: string;
  cleanSpeechText: string;
  lang: LanguageCode;
  label?: string;
  teacherNote?: string;
  sourceContext?: string;
}

export interface TeacherPersonaConfig {
  id: TeacherPersona;
  name: string;
  tagline: string;
  geminiVoice: string;
  speechStyle: string;
  pitch: number;
  pauseBetweenSegmentsMs: number;
  personaVibe: string;
}

export const TEACHER_PERSONAS: Record<TeacherPersona, TeacherPersonaConfig> = {
  warm: {
    id: 'warm',
    name: 'Sıcak & Samimi Öğretmen (Kore)',
    tagline: 'Sanki karşında birebir oturan, sakin, cesaretlendirici ve anlaşılır öğretmen sesi',
    geminiVoice: 'Kore',
    speechStyle: 'Sakin, samimi, güven veren ve cesaretlendirici bir öğretmen gibi doğal konuşma tonu',
    pitch: 1.0,
    pauseBetweenSegmentsMs: 350,
    personaVibe: 'Şefkatli, destekleyici ve tane tane açıklayan eğitmen',
  },
  focused: {
    id: 'focused',
    name: 'Metodik & Net Öğretmen (Fenrir)',
    tagline: 'Kavramın mantığına, kurallarına ve analitik netliğe odaklanan berrak anlatım',
    geminiVoice: 'Fenrir',
    speechStyle: 'Metodik, net, kuralların mantığını açıklayan profesyonel bir eğitmen tonu',
    pitch: 0.98,
    pauseBetweenSegmentsMs: 300,
    personaVibe: 'Sistematik, analitik ve kural mantığını derinlemesine kavratan hoca',
  },
  dynamic: {
    id: 'dynamic',
    name: 'Pratik Konuşma Koçu (Puck)',
    tagline: 'Canlı, ritmik ve günlük hayatta akıcı konuşmaya odaklanan dinamik ton',
    geminiVoice: 'Puck',
    speechStyle: 'Canlı, ritmik ve günlük konuşmaya odaklanan pratik bir İngilizce koçu tonu',
    pitch: 1.04,
    pauseBetweenSegmentsMs: 250,
    personaVibe: 'Enerjik, motive edici ve sokak İngilizcesi reflekslerini aşılayan koç',
  },
};

class NaturalBilingualAudioEngine {
  private segments: AudioSegment[] = [];
  private currentSegmentIndex: number = -1;
  private playbackState: AudioPlaybackState = 'idle';
  private rate: SpeechRate = 0.8;
  private activePersona: TeacherPersona = 'warm';
  private engineMode: AudioEngineMode = 'neural';
  private isNeuralOperational: boolean = true;
  private lastErrorMessage: string | null = null;

  // Active Playback Session Token to prevent stale requests from overtaking playback
  private activeSessionId: number = 0;
  private activeAbortController: AbortController | null = null;
  private prefetchAbortController: AbortController | null = null;

  // Primary HTML5 Audio Element for Studio Neural Playback
  private audioElement: HTMLAudioElement | null = null;
  private audioCache = new Map<string, string>(); // Cache Key -> Base64 WAV
  private inFlightClientRequests = new Map<string, Promise<string>>();
  private segmentTransitionTimeout: any = null;

  // Web Speech Fallback utterance (used ONLY if explicitly chosen by user in settings)
  private activeUtterance: SpeechSynthesisUtterance | null = null;
  private singleUtterance: SpeechSynthesisUtterance | null = null;
  private singleAudioElement: HTMLAudioElement | null = null;
  private singleAbortController: AbortController | null = null;

  private selectedEnVoiceURI: string | null = null;
  private selectedTrVoiceURI: string | null = null;

  // State Subscriptions
  private stateListeners: Array<(state: AudioPlaybackState, errorMsg?: string | null) => void> = [];
  private segmentListeners: Array<(index: number, segment: AudioSegment | null) => void> = [];
  private progressListeners: Array<(current: number, total: number) => void> = [];
  private engineModeListeners: Array<(mode: AudioEngineMode, isNeural: boolean) => void> = [];

  constructor() {
    this.rate = getSavedSpeechRate();

    if (typeof window !== 'undefined') {
      this.initAudioElement();

      if ('speechSynthesis' in window) {
        window.speechSynthesis.onvoiceschanged = () => {
          // Voice cache updated
        };
      }
    }
  }

  private initAudioElement() {
    if (this.audioElement) {
      this.audioElement.pause();
      this.audioElement.src = '';
    }

    this.audioElement = new Audio();
    this.audioElement.preload = 'auto';

    this.audioElement.addEventListener('ended', () => {
      this.handleSegmentEnded();
    });
  }

  // --- Subscriptions ---
  public subscribeState(listener: (state: AudioPlaybackState, errorMsg?: string | null) => void): () => void {
    this.stateListeners.push(listener);
    listener(this.playbackState, this.lastErrorMessage);
    return () => {
      this.stateListeners = this.stateListeners.filter((l) => l !== listener);
    };
  }

  public subscribeSegment(listener: (index: number, segment: AudioSegment | null) => void): () => void {
    this.segmentListeners.push(listener);
    const curr = this.currentSegmentIndex >= 0 ? this.segments[this.currentSegmentIndex] : null;
    listener(this.currentSegmentIndex, curr);
    return () => {
      this.segmentListeners = this.segmentListeners.filter((l) => l !== listener);
    };
  }

  public subscribeProgress(listener: (current: number, total: number) => void): () => void {
    this.progressListeners.push(listener);
    listener(this.currentSegmentIndex + 1, this.segments.length);
    return () => {
      this.progressListeners = this.progressListeners.filter((l) => l !== listener);
    };
  }

  public subscribeEngineMode(listener: (mode: AudioEngineMode, isNeural: boolean) => void): () => void {
    this.engineModeListeners.push(listener);
    listener(this.engineMode, this.isNeuralOperational && this.engineMode === 'neural');
    return () => {
      this.engineModeListeners = this.engineModeListeners.filter((l) => l !== listener);
    };
  }

  private notifyState(state: AudioPlaybackState, errorMsg: string | null = null) {
    this.playbackState = state;
    this.lastErrorMessage = errorMsg;
    this.stateListeners.forEach((l) => l(state, errorMsg));
  }

  private notifySegment(index: number) {
    this.currentSegmentIndex = index;
    const seg = index >= 0 && index < this.segments.length ? this.segments[index] : null;
    this.segmentListeners.forEach((l) => l(index, seg));
    this.progressListeners.forEach((l) => l(index >= 0 ? index + 1 : 0, this.segments.length));
  }

  private notifyEngineMode() {
    this.engineModeListeners.forEach((l) =>
      l(this.engineMode, this.isNeuralOperational && this.engineMode === 'neural')
    );
  }

  // --- Configuration ---
  public setRate(rate: SpeechRate) {
    this.rate = rate;
    saveSpeechRate(rate);

    if (this.audioElement) {
      this.audioElement.playbackRate = rate;
    }

    if (this.singleAudioElement) {
      this.singleAudioElement.playbackRate = rate;
    }
  }

  public getRate(): SpeechRate {
    return this.rate;
  }

  public setPersona(persona: TeacherPersona) {
    this.activePersona = persona;
  }

  public getPersona(): TeacherPersona {
    return this.activePersona;
  }

  public setEngineMode(mode: AudioEngineMode) {
    this.engineMode = mode;
    this.notifyEngineMode();
  }

  public getEngineMode(): AudioEngineMode {
    return this.engineMode;
  }

  public isNeuralActive(): boolean {
    return this.engineMode === 'neural' && this.isNeuralOperational;
  }

  public getState(): AudioPlaybackState {
    return this.playbackState;
  }

  public getLastErrorMessage(): string | null {
    return this.lastErrorMessage;
  }

  public getCurrentIndex(): number {
    return this.currentSegmentIndex;
  }

  public getSegments(): AudioSegment[] {
    return this.segments;
  }

  public getAvailableVoices(): { enVoices: SpeechSynthesisVoice[]; trVoices: SpeechSynthesisVoice[] } {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return { enVoices: [], trVoices: [] };
    }
    const all = window.speechSynthesis.getVoices();
    const enVoices = all.filter((v) => v.lang.startsWith('en'));
    const trVoices = all.filter((v) => v.lang.startsWith('tr'));
    return { enVoices, trVoices };
  }

  public setVoicePreferences(enVoiceURI?: string, trVoiceURI?: string) {
    if (enVoiceURI) this.selectedEnVoiceURI = enVoiceURI;
    if (trVoiceURI) this.selectedTrVoiceURI = trVoiceURI;
  }

  // --- Language Detection & Text Sanitization ---
  public detectLanguage(text: string): LanguageCode {
    const clean = text.trim();
    if (!clean) return 'tr';

    const turkishCharRegex = /[çğıöşüÇĞİÖŞÜ]/;
    if (turkishCharRegex.test(clean)) return 'tr';

    const turkishMarkerRegex =
      /\b(ve|veya|için|ile|bir|bu|şu|o|ama|fakat|çünkü|nasıl|neden|burada|şurada|demek|kural|örnek|doğru|yanlış|yani|böyle|gibi|kadar|olarak|şeklinde|dikkat|şimdi|önemli|çevirisi)\b/i;
    if (turkishMarkerRegex.test(clean)) return 'tr';

    const englishMarkerRegex =
      /\b(the|is|are|was|were|have|has|had|will|would|can|could|should|do|does|did|not|and|or|in|on|at|to|for|with|from|you|we|they|he|she|it|that|this|which|where|when|there|their)\b/i;
    if (englishMarkerRegex.test(clean)) return 'en';

    return 'en';
  }

  public sanitizeTextForTTS(text: string): string {
    return text
      .replace(/[*_#`[\]()]/g, '')
      .replace(/https?:\/\/\S+/g, '')
      .replace(/\s*→\s*/g, ', yani ')
      .replace(/\s*->\s*/g, ', yani ')
      .replace(/\s*\|\s*/g, '. ')
      .replace(/\s*\+\s*/g, ' ve ')
      .replace(/\s*=\s*/g, ' eşittir ')
      .replace(/[—–]/g, ', ')
      .replace(/["']/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  // --- Cohesive Pedagogical Chapter Builder ---
  /**
   * Constructs 5 coherent, fluid pedagogical chapters instead of 25 chopped fragments.
   * Gives natural human breath, continuous prosody, and completely avoids robotic interruptions.
   */
  public buildTeacherNarration(
    lecture: TeacherLectureData,
    personaType: TeacherPersona = this.activePersona,
    lessonMeta?: { title: string; level: CEFRLevel; moduleName: string; learningObjective?: string }
  ): AudioSegment[] {
    this.stop();
    const chapters: AudioSegment[] = [];

    const persona = TEACHER_PERSONAS[personaType];
    const skillType = lecture.skillType || 'grammar';
    const level = lessonMeta?.level || 'A1';
    const rawTitle = lessonMeta?.title || lecture.coreConcept.title;
    const cleanTitle = rawTitle.replace(/[—–-].*$/, '').trim();

    // 1. DYNAMIC OPENING HOOK (Context-specific)
    let openingHook = '';
    if (skillType === 'grammar') {
      if (level === 'A1' || level === 'A2') {
        openingHook =
          personaType === 'warm'
            ? `Sevgili öğrencim, bugün İngilizcede konuşurken en çok rahat edeceğin temel taşlardan birine, '${cleanTitle}' konusuna odaklanıyoruz. Türkçeden farklı olan mantığını kavradığında cümlelerin kendiliğinden akacak.`
            : personaType === 'dynamic'
            ? `Selam! Bugün günlük diyaloglarda seni takılmaktan kurtaracak '${cleanTitle}' kalıbının pratik püf noktalarını yakalıyoruz. Hazırsan başlayalım!`
            : `'${cleanTitle}' dersine hoş geldiniz. Bu derste dilbilgisinin yapısal mekanizmasını ve özne-yüklem uyumunun temellerini inceliyoruz.`;
      } else if (level === 'B1' || level === 'B2') {
        openingHook =
          personaType === 'warm'
            ? `Orta seviyede bağımsız ve özgüvenli İngilizce konuşmanın anahtarı, '${cleanTitle}' gibi yapıları düşünmeden refleks olarak kullanabilmektir. Gel, birlikte mantığını çözelim.`
            : personaType === 'dynamic'
            ? `İş görüşmelerinde ve akıcı tartışmalarda fark yaratan '${cleanTitle}' dinamiklerini masaya yatırıyoruz. Kalıpları pratikleştirelim!`
            : `'${cleanTitle}' modülünde, cümlenin anlamsal derinliğini ve profesyonel dildeki kullanım kurallarını adım adım analiz ediyoruz.`;
      } else {
        openingHook =
          personaType === 'warm'
            ? `İleri düzey İngilizce ustalığında '${cleanTitle}' konusunun getirdiği zarafet ve retorik güç paha biçilmezdir. Anadili konuşucusunun zihinsel inceliklerine iniyoruz.`
            : personaType === 'dynamic'
            ? `C seviyesinde söz ustalığı için '${cleanTitle}' yapısını en sofistike detaylarıyla çözümlüyoruz. Hadi başlayalım!`
            : `'${cleanTitle}' dersinde, ileri düzey söz dizimsel hiyerarşiyi ve akademik metin diplomasisini ele alıyoruz.`;
      }
    } else if (skillType === 'vocabulary') {
      openingHook =
        personaType === 'warm'
          ? `Kelimeleri tek tek ezberlemek yerine, anadili konuşucularının '${cleanTitle}' konusundaki doğal eşdizimlerini ve çağrışımlarını birlikte keşfedeceğiz.`
          : personaType === 'dynamic'
          ? `Bugün '${cleanTitle}' kelime dağarcığını hafızana kazıyoruz. Hazır kalıplarla hemen cümleye dökeceksin!`
          : `'${cleanTitle}' kelime dersinde, kavramsal alanları, semantik nüansları ve resmiyet düzeylerini inceliyoruz.`;
    } else if (skillType === 'pronunciation') {
      openingHook =
        personaType === 'warm'
          ? `Telaffuz çalışırken acele etmiyoruz. '${cleanTitle}' seslerini çıkarırken ağız ve dil konumumuza dikkat ederek berrak bir telaffuz yakalayacağız.`
          : personaType === 'dynamic'
          ? `Bugün aksanını ve akıcılığını bir üst seviyeye taşıyacak '${cleanTitle}' seslerini çalışıyoruz. Benimle birlikte tekrar et!`
          : `'${cleanTitle}' sesbilim analizinde, akustik özellikleri, vurgu ve ulama kurallarını inceliyoruz.`;
    } else {
      openingHook =
        personaType === 'warm'
          ? `Gerçek bir iletişim ortamında '${cleanTitle}' anında tereddüt etmeden, doğal ve rahat hissetmeni sağlayacak stratejileri adım adım uygulayacağız.`
          : personaType === 'dynamic'
          ? `Konuşurken anında aklına gelecek pratik cümle refleksleri kazanıyoruz. Konumuz: '${cleanTitle}'!`
          : `'${cleanTitle}' modülünde, iletişimsel stratejileri ve ifade kalıplarını ele alıyoruz.`;
    }

    // --- CHAPTER 1: Giriş, Kazanım ve Dil Mantığı ---
    const chapter1Parts = [
      openingHook,
      lecture.introduction ? lecture.introduction : '',
      lecture.concreteCompetency
        ? `Bu dersi tamamladığında kazanacağın hedef beceri tam olarak şudur: ${lecture.concreteCompetency}.`
        : '',
      `Şimdi kuralı ezbere sokmak yerine, bir anadili konuşucusunun zihninde bu yapının neden var olduğuna bakalım. ${lecture.coreConcept.explanation}`,
    ].filter(Boolean);

    const chapter1Text = chapter1Parts.join(' ');
    chapters.push({
      id: 'ch-1',
      section: 'Bölüm 1: Giriş & Kavramın Mantığı',
      text: chapter1Text,
      cleanSpeechText: this.sanitizeTextForTTS(chapter1Text),
      lang: 'tr',
      label: 'Kavramsal Temel',
      teacherNote: 'Öğretmeniniz konunun önemini, hedefini ve zihinsel mantığını açıklıyor.',
    });

    // --- CHAPTER 2: Temel Kural & Model Örnek Analizi ---
    const mainRule = lecture.ruleCards && lecture.ruleCards.length > 0 ? lecture.ruleCards[0] : null;
    const chapter2Parts: string[] = [];

    if (mainRule) {
      chapter2Parts.push(`Temel kuralımız şöyle özetlenir: ${mainRule.ruleTitle}. ${mainRule.explanation}`);
      if (mainRule.formula) {
        chapter2Parts.push(`Formülümüz şöyledir: "${mainRule.formula}".`);
      }
      if (mainRule.exampleSnippet) {
        chapter2Parts.push(
          `Bu kuralın cümle içindeki doğal yansımasını dinleyelim: "${mainRule.exampleSnippet}". Burada yapının nasıl yerli yerine oturduğuna dikkat edin.`
        );
      }
    } else {
      chapter2Parts.push(`Bu konuyu uygularken cümlenin temel söz dizimi hiyerarşisine sadık kalmalıyız.`);
    }

    const chapter2Text = chapter2Parts.join(' ');
    chapters.push({
      id: 'ch-2',
      section: 'Bölüm 2: Temel Kural & Model Cümle',
      text: chapter2Text,
      cleanSpeechText: this.sanitizeTextForTTS(chapter2Text),
      lang: 'tr',
      label: 'Kural ve Formül',
      teacherNote: 'Hedef formülün İngilizce telaffuzu ve cümle içi analizi.',
    });

    // --- CHAPTER 3: Adım Adım Pedagojik Uygulama ---
    const chapter3Parts: string[] = [];
    if (lecture.breakdownSteps && lecture.breakdownSteps.length > 0) {
      lecture.breakdownSteps.forEach((step: LectureBreakdownStep, idx: number) => {
        const stepTransition =
          idx === 0
            ? `Öncelikle yapının omurgasını oluşturan ilk aşamaya bakalım: ${step.title}. ${step.content}`
            : idx === 1
            ? `Buradan bir adım öteye geçip ikinci önemli noktaya odaklanalım: ${step.title}. ${step.content}`
            : `Şimdi de uygulamada en çok işimize yarayacak üçüncü aşamayı görelim: ${step.title}. ${step.content}`;

        chapter3Parts.push(stepTransition);
        if (step.keyPhrase) {
          chapter3Parts.push(`Örneğin şu ifadeye kulak verin: "${step.keyPhrase}".`);
        }
        if (step.rationale) {
          chapter3Parts.push(`Bunun gerekçesi: ${step.rationale}.`);
        }
      });
    } else {
      chapter3Parts.push(`Adım adım ilerlerken kelimeleri tek tek değil, kalıp olarak zihne yerleştirmeliyiz.`);
    }

    const chapter3Text = chapter3Parts.join(' ');
    chapters.push({
      id: 'ch-3',
      section: 'Bölüm 3: Adım Adım Analiz',
      text: chapter3Text,
      cleanSpeechText: this.sanitizeTextForTTS(chapter3Text),
      lang: 'tr',
      label: 'Pedagojik Çözümleme',
      teacherNote: 'Aşama aşama kuralın derinleşmesi ve hedef ifadeler.',
    });

    // --- CHAPTER 4: Gerçek Yaşam Senaryosu & Doğal Diyalog ---
    const chapter4Parts: string[] = [];
    if (lecture.realWorldContext?.scenarioTitle || lecture.realWorldContext?.description) {
      const scenarioText = lecture.realWorldContext.description || lecture.realWorldContext.scenarioTitle;
      chapter4Parts.push(`Şimdi bunu soyut bir kural olmaktan çıkarıp gerçek bir yaşam senaryosunda görelim. Senaryomuz: ${scenarioText}. Kulak verelim:`);

      if (lecture.realWorldContext.dialogue && lecture.realWorldContext.dialogue.length > 0) {
        lecture.realWorldContext.dialogue.forEach((turn) => {
          const speaker = turn.speaker || 'Konuşmacı';
          chapter4Parts.push(`${speaker} şöyle diyor: "${turn.textEn}". Yani Türkçesiyle: "${turn.textTr}".`);
        });
      }
    } else {
      chapter4Parts.push(`Gerçek iletişim senaryolarında doğru tonlama ve kendinden emin telaffuz en kritik unsurdur.`);
    }

    const chapter4Text = chapter4Parts.join(' ');
    chapters.push({
      id: 'ch-4',
      section: 'Bölüm 4: Gerçek Hayat Diyaloğu',
      text: chapter4Text,
      cleanSpeechText: this.sanitizeTextForTTS(chapter4Text),
      lang: 'tr',
      label: 'Senaryo & Diyalog',
      teacherNote: 'Gerçek hayatta çift dilli kullanım ve konuşma bağlamı.',
    });

    // --- CHAPTER 5: Yaygın Hatalar & İnteraktif Alıştırma Daveti ---
    const chapter5Parts: string[] = [];
    if (lecture.commonMistakes && lecture.commonMistakes.length > 0) {
      chapter5Parts.push(`Şimdi çok kritik bir uyarı! Türk öğrencilerin en sık düştüğü hatalara bakalım:`);
      lecture.commonMistakes.slice(0, 2).forEach((mistake: CommonMistakeItem) => {
        chapter5Parts.push(
          `Sakın şöyle demeyin: "${mistake.wrongExample}". Bunun yerine her zaman doğrusunu kullanın: "${mistake.correctExample}". Çünkü: ${mistake.rootCause}. ${
            mistake.memoryTip ? `Aklınızda kalsın diye ipucumuz: ${mistake.memoryTip}` : ''
          }`
        );
      });
    }

    const closingInvitation =
      personaType === 'warm'
        ? `Gördüğün gibi konu son derece mantıklı ve berrak! Şimdi sıra sende: Aşağıdaki hızlı kavrama sorusunu çözerek öğrendiklerini hemen pekiştir. Harika gidiyorsun!`
        : personaType === 'dynamic'
        ? `Kalıbı kaptın! Şimdi aşağıdaki interaktif soruda refleksini test etme zamanı. Hadi göster kendini!`
        : `Kavramsal analizi tamamladık. Şimdi aşağıdaki kavrama sorusuyla konuyu bağımsız olarak uygulayınız.`;

    chapter5Parts.push(closingInvitation);

    const chapter5Text = chapter5Parts.join(' ');
    chapters.push({
      id: 'ch-5',
      section: 'Bölüm 5: Tuzaklar & Alıştırma Daveti',
      text: chapter5Text,
      cleanSpeechText: this.sanitizeTextForTTS(chapter5Text),
      lang: 'tr',
      label: 'Tuzaklar & Alıştırma',
      teacherNote: 'Hatalardan kaçınma taktikleri ve interaktif pekiştirme.',
    });

    this.segments = chapters;
    this.notifySegment(-1);
    return chapters;
  }

  private getClientCacheKey(cleanText: string, voice: string, lang: string, style: string): string {
    return `gemini|${cleanText.trim()}|${voice}|${lang || 'auto'}|${style || 'default'}`;
  }

  // --- Resilient Sequential Playback Engine ---
  public play(startIndex: number = 0) {
    if (this.segments.length === 0) return;

    if (this.playbackState === 'paused' && this.currentSegmentIndex === startIndex) {
      this.resume();
      return;
    }

    this.stop();
    this.playSegmentAtIndex(startIndex, { fromTransition: false });
  }

  public pause() {
    if (this.segmentTransitionTimeout) {
      clearTimeout(this.segmentTransitionTimeout);
      this.segmentTransitionTimeout = null;
    }

    if (this.engineMode === 'neural' && this.audioElement) {
      this.audioElement.pause();
    } else if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.pause();
    }
    this.notifyState('paused');
  }

  public resume() {
    if (this.playbackState === 'paused') {
      if (this.currentSegmentIndex < 0 && this.segments.length > 0) {
        this.play(0);
        return;
      }

      if (this.engineMode === 'neural' && this.audioElement) {
        if (this.audioElement.src && this.audioElement.currentTime < (this.audioElement.duration || Infinity)) {
          this.audioElement.play().catch((err) => {
            console.warn('Resume audio element error:', err);
            this.notifyState('error', 'Ses oynatılamadı. Lütfen tekrar deneyin.');
          });
          this.notifyState('playing');
        } else {
          // If paused before buffer arrived or after track ended, play segment index
          this.playSegmentAtIndex(this.currentSegmentIndex, { fromTransition: false });
        }
      } else if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.resume();
        this.notifyState('playing');
      }
    }
  }

  public stop() {
    if (this.segmentTransitionTimeout) {
      clearTimeout(this.segmentTransitionTimeout);
      this.segmentTransitionTimeout = null;
    }

    // Invalidate any in-flight playback sessions
    this.activeSessionId++;

    if (this.activeAbortController) {
      this.activeAbortController.abort();
      this.activeAbortController = null;
    }

    if (this.prefetchAbortController) {
      this.prefetchAbortController.abort();
      this.prefetchAbortController = null;
    }

    if (this.singleAbortController) {
      this.singleAbortController.abort();
      this.singleAbortController = null;
    }

    if (this.audioElement) {
      this.audioElement.pause();
      this.audioElement.currentTime = 0;
      this.audioElement.src = '';
    }

    if (this.singleAudioElement) {
      this.singleAudioElement.pause();
      this.singleAudioElement.currentTime = 0;
      this.singleAudioElement.src = '';
    }

    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }

    this.activeUtterance = null;
    this.singleUtterance = null;
    this.notifyState('idle');
  }

  public retryCurrent() {
    if (this.currentSegmentIndex >= 0 && this.currentSegmentIndex < this.segments.length) {
      this.playSegmentAtIndex(this.currentSegmentIndex, { fromTransition: false });
    } else {
      this.play(0);
    }
  }

  public jumpToSegment(index: number) {
    if (index >= 0 && index < this.segments.length) {
      this.stop();
      this.playSegmentAtIndex(index, { fromTransition: false });
    }
  }

  /**
   * Unified, deduplicated client-side audio fetch with automatic retry.
   * If an identical request is already in-flight, it returns the shared promise.
   */
  private async fetchAudioBase64(
    cleanText: string,
    personaConfig: TeacherPersonaConfig,
    lang: LanguageCode,
    signal?: AbortSignal
  ): Promise<string> {
    const cacheKey = this.getClientCacheKey(cleanText, personaConfig.geminiVoice, lang, personaConfig.speechStyle);

    // 1. In-memory client cache
    const cached = this.audioCache.get(cacheKey);
    if (cached) return cached;

    // 2. In-flight request deduplication
    if (this.inFlightClientRequests.has(cacheKey)) {
      return this.inFlightClientRequests.get(cacheKey)!;
    }

    // 3. Initiate fetch with safe retry
    const fetchPromise = (async (): Promise<string> => {
      let lastErr: any = null;

      for (let attempt = 1; attempt <= 3; attempt++) {
        try {
          const response = await fetch('/api/tts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              text: cleanText,
              persona: this.activePersona,
              voiceName: personaConfig.geminiVoice,
              style: personaConfig.speechStyle,
              lang,
            }),
            signal,
          });

          if (!response.ok) {
            const errData = await response.json().catch(() => ({}));
            const errMsg = errData.error || `TTS sunucusu hata kodu döndürdü (${response.status})`;
            throw new Error(errMsg);
          }

          const data = await response.json();
          if (!data.audioBase64 || typeof data.audioBase64 !== 'string' || data.audioBase64.length < 50) {
            throw new Error('TTS sunucusu boş ses verisi döndürdü');
          }

          // Cache only valid audio
          this.audioCache.set(cacheKey, data.audioBase64);
          return data.audioBase64;
        } catch (err: any) {
          lastErr = err;
          if (err.name === 'AbortError') throw err;
          console.warn(`[audioEngine] TTS Denemesi ${attempt}/3 uyarısı:`, err?.message);
          if (attempt < 3) {
            await new Promise((r) => setTimeout(r, attempt * 600));
          }
        }
      }

      throw lastErr || new Error('TTS ses sentezi başarısız oldu');
    })();

    this.inFlightClientRequests.set(cacheKey, fetchPromise);

    try {
      return await fetchPromise;
    } finally {
      this.inFlightClientRequests.delete(cacheKey);
    }
  }

  private async playSegmentAtIndex(index: number, options: { fromTransition?: boolean } = {}) {
    if (index < 0 || index >= this.segments.length) {
      this.notifyState('completed');
      this.notifySegment(-1);
      return;
    }

    if (this.segmentTransitionTimeout) {
      clearTimeout(this.segmentTransitionTimeout);
      this.segmentTransitionTimeout = null;
    }

    // Invalidate previous session only on user-initiated jump or start
    if (!options.fromTransition) {
      this.activeSessionId++;
      if (this.activeAbortController) {
        this.activeAbortController.abort();
      }
    }
    const currentSession = this.activeSessionId;
    this.activeAbortController = new AbortController();

    const seg = this.segments[index];
    this.notifySegment(index);

    if (this.engineMode === 'neural') {
      await this.playViaNeuralTTS(seg, index, currentSession);
    } else {
      this.playViaWebSpeech(seg, index, currentSession);
    }
  }

  private async playViaNeuralTTS(seg: AudioSegment, index: number, sessionId: number) {
    const personaConfig = TEACHER_PERSONAS[this.activePersona];
    const textToSpeak = seg.cleanSpeechText || this.sanitizeTextForTTS(seg.text);

    if (!textToSpeak) {
      this.playSegmentAtIndex(index + 1, { fromTransition: true });
      return;
    }

    const cacheKey = this.getClientCacheKey(textToSpeak, personaConfig.geminiVoice, seg.lang, personaConfig.speechStyle);
    const isCached = this.audioCache.has(cacheKey);

    if (!isCached) {
      this.notifyState('buffering');
    }

    let audioBase64: string | null = null;
    try {
      audioBase64 = await this.fetchAudioBase64(
        textToSpeak,
        personaConfig,
        seg.lang,
        this.activeAbortController?.signal
      );
    } catch (err: any) {
      if (err.name === 'AbortError') return;
      console.error('All Neural TTS attempts failed for chapter:', err);
      if (sessionId === this.activeSessionId) {
        // Do NOT silently fall back to robotic voice! Controlled error presentation with retry
        this.notifyState(
          'error',
          'Öğretmen ses bağlantısı sağlanamadı. Lütfen "Tekrar Dene" butonuna basın.'
        );
      }
      return;
    }

    // Session validation: If session or segment changed in the meantime
    if (sessionId !== this.activeSessionId || this.currentSegmentIndex !== index) {
      return;
    }

    // Pause Guard: If user paused during download, do NOT auto-play!
    if (this.playbackState === 'paused' || this.playbackState === 'idle') {
      if (this.audioElement) {
        this.audioElement.src = `data:audio/wav;base64,${audioBase64}`;
        this.audioElement.playbackRate = this.rate;
      }
      return;
    }

    try {
      if (!this.audioElement) {
        this.initAudioElement();
      }

      this.audioElement!.src = `data:audio/wav;base64,${audioBase64}`;
      this.audioElement!.playbackRate = this.rate;

      await this.audioElement!.play();

      if (sessionId === this.activeSessionId && this.getState() !== 'paused') {
        this.notifyState('playing');

        // Immediately begin prefetching next chapter in the background
        if (index + 1 < this.segments.length) {
          this.prefetchChapter(this.segments[index + 1]);
        }
      }
    } catch (playError: any) {
      if (sessionId === this.activeSessionId) {
        if (this.getState() === 'paused') return;
        console.error('Playback error on audio element:', playError);
        this.notifyState('error', 'Ses oynatılamadı. Tekrar deneyiniz.');
      }
    }
  }

  private async prefetchChapter(seg: AudioSegment) {
    if (this.engineMode !== 'neural') return;
    const personaConfig = TEACHER_PERSONAS[this.activePersona];
    const textToSpeak = seg.cleanSpeechText || this.sanitizeTextForTTS(seg.text);
    if (!textToSpeak) return;

    const cacheKey = this.getClientCacheKey(textToSpeak, personaConfig.geminiVoice, seg.lang, personaConfig.speechStyle);
    if (this.audioCache.has(cacheKey)) return;

    if (this.prefetchAbortController) {
      this.prefetchAbortController.abort();
    }
    this.prefetchAbortController = new AbortController();

    try {
      await this.fetchAudioBase64(
        textToSpeak,
        personaConfig,
        seg.lang,
        this.prefetchAbortController.signal
      );
    } catch (e) {
      // Prefetch error is silent; actual playback will retry if needed
    }
  }

  private playViaWebSpeech(seg: AudioSegment, index: number, sessionId: number) {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      this.notifyState('idle');
      return;
    }

    const cleanText = seg.cleanSpeechText || this.sanitizeTextForTTS(seg.text);
    if (!cleanText) {
      this.playSegmentAtIndex(index + 1, { fromTransition: true });
      return;
    }

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = this.rate;

    const personaConfig = TEACHER_PERSONAS[this.activePersona];
    utterance.pitch = personaConfig.pitch;

    const voices = window.speechSynthesis.getVoices();

    if (seg.lang === 'tr') {
      utterance.lang = 'tr-TR';
      const selected = this.selectedTrVoiceURI
        ? voices.find((v) => v.voiceURI === this.selectedTrVoiceURI)
        : null;
      const trVoice =
        selected ||
        voices.find(
          (v) =>
            v.lang.startsWith('tr') &&
            (v.name.includes('Natural') ||
              v.name.includes('Google') ||
              v.name.includes('Yelda') ||
              v.name.includes('Cem'))
        ) ||
        voices.find((v) => v.lang.startsWith('tr'));

      if (trVoice) utterance.voice = trVoice;
    } else {
      utterance.lang = 'en-US';
      const selected = this.selectedEnVoiceURI
        ? voices.find((v) => v.voiceURI === this.selectedEnVoiceURI)
        : null;
      const enVoice =
        selected ||
        voices.find(
          (v) =>
            v.lang.startsWith('en') &&
            (v.name.includes('Natural') ||
              v.name.includes('Google') ||
              v.name.includes('Samantha') ||
              v.name.includes('David') ||
              v.name.includes('Jenny') ||
              v.name.includes('Aria'))
        ) ||
        voices.find((v) => v.lang.startsWith('en'));

      if (enVoice) utterance.voice = enVoice;
    }

    utterance.onend = () => {
      if (sessionId === this.activeSessionId) {
        this.activeUtterance = null;
        this.handleSegmentEnded();
      }
    };

    utterance.onerror = (e) => {
      console.warn('Web Speech segment error:', e);
      if (sessionId === this.activeSessionId) {
        this.activeUtterance = null;
        this.handleSegmentEnded();
      }
    };

    this.activeUtterance = utterance;
    this.notifyState('playing');
    window.speechSynthesis.speak(utterance);
  }

  private handleSegmentEnded() {
    if (this.playbackState !== 'playing') return;

    const nextIdx = this.currentSegmentIndex + 1;
    if (nextIdx >= this.segments.length) {
      // All chapters completed!
      this.notifyState('completed');
      this.notifySegment(-1);
      return;
    }

    const personaConfig = TEACHER_PERSONAS[this.activePersona];
    const nextSeg = this.segments[nextIdx];
    const textToSpeak = nextSeg.cleanSpeechText || this.sanitizeTextForTTS(nextSeg.text);
    const cacheKey = this.getClientCacheKey(textToSpeak, personaConfig.geminiVoice, nextSeg.lang, personaConfig.speechStyle);
    const isNextReady = this.audioCache.has(cacheKey);

    if (!isNextReady) {
      this.notifyState('waiting_next');
    }

    this.segmentTransitionTimeout = setTimeout(() => {
      this.segmentTransitionTimeout = null;
      if (this.playbackState === 'playing' || this.playbackState === 'waiting_next') {
        this.playSegmentAtIndex(nextIdx, { fromTransition: true });
      }
    }, personaConfig.pauseBetweenSegmentsMs);
  }

  // --- Standalone Single Utterance (Audio Buttons) ---
  public async speakSingle(
    text: string,
    options: {
      lang?: LanguageCode | 'auto';
      rate?: SpeechRate;
      onStart?: () => void;
      onEnd?: () => void;
    } = {}
  ): Promise<boolean> {
    if (typeof window === 'undefined') return false;

    try {
      this.stop(); // Stop ongoing teacher lecture so audio doesn't overlap

      const cleanText = this.sanitizeTextForTTS(text);
      if (!cleanText) {
        if (options.onEnd) options.onEnd();
        return false;
      }

      const detectedLang =
        options.lang && options.lang !== 'auto' ? options.lang : this.detectLanguage(cleanText);

      // Attempt Neural Audio with active teacher voice
      if (this.engineMode === 'neural') {
        const personaConfig = TEACHER_PERSONAS[this.activePersona];

        if (this.singleAbortController) {
          this.singleAbortController.abort();
        }
        this.singleAbortController = new AbortController();

        let audioBase64: string | null = null;
        try {
          audioBase64 = await this.fetchAudioBase64(
            cleanText,
            personaConfig,
            detectedLang,
            this.singleAbortController.signal
          );
        } catch (e: any) {
          console.warn('[audioEngine] Single neural speech failed:', e?.message);
          // Do NOT silently drop to robotic voice on failure
          if (options.onEnd) options.onEnd();
          return false;
        }

        if (audioBase64) {
          if (!this.singleAudioElement) {
            this.singleAudioElement = new Audio();
          }

          this.singleAudioElement.src = `data:audio/wav;base64,${audioBase64}`;
          this.singleAudioElement.playbackRate = options.rate || this.rate;

          if (options.onStart) options.onStart();

          this.singleAudioElement.onended = () => {
            if (options.onEnd) options.onEnd();
          };

          this.singleAudioElement.onerror = () => {
            if (options.onEnd) options.onEnd();
          };

          await this.singleAudioElement.play();
          return true;
        }
      }

      // Explicit browser mode ONLY if explicitly configured by user
      if (this.engineMode === 'browser') {
        return this.fallbackSingleToWebSpeech(cleanText, detectedLang, options);
      }

      if (options.onEnd) options.onEnd();
      return false;
    } catch (err) {
      console.warn('Single speech error:', err);
      if (options.onEnd) options.onEnd();
      return false;
    }
  }

  private fallbackSingleToWebSpeech(
    cleanText: string,
    detectedLang: LanguageCode,
    options: { rate?: SpeechRate; onStart?: () => void; onEnd?: () => void }
  ): boolean {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      if (options.onEnd) options.onEnd();
      return false;
    }

    if (this.singleUtterance) {
      window.speechSynthesis.cancel();
      this.singleUtterance = null;
    }

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = options.rate || this.rate;
    utterance.pitch = 1.0;

    const voices = window.speechSynthesis.getVoices();
    if (detectedLang === 'tr') {
      utterance.lang = 'tr-TR';
      const trVoice =
        (this.selectedTrVoiceURI && voices.find((v) => v.voiceURI === this.selectedTrVoiceURI)) ||
        voices.find(
          (v) => v.lang.startsWith('tr') && (v.name.includes('Natural') || v.name.includes('Google'))
        ) ||
        voices.find((v) => v.lang.startsWith('tr'));
      if (trVoice) utterance.voice = trVoice;
    } else {
      utterance.lang = 'en-US';
      const enVoice =
        (this.selectedEnVoiceURI && voices.find((v) => v.voiceURI === this.selectedEnVoiceURI)) ||
        voices.find(
          (v) =>
            v.lang.startsWith('en') &&
            (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha'))
        ) ||
        voices.find((v) => v.lang.startsWith('en'));
      if (enVoice) utterance.voice = enVoice;
    }

    utterance.onstart = () => {
      if (options.onStart) options.onStart();
    };

    utterance.onend = () => {
      this.singleUtterance = null;
      if (options.onEnd) options.onEnd();
    };

    utterance.onerror = () => {
      this.singleUtterance = null;
      if (options.onEnd) options.onEnd();
    };

    this.singleUtterance = utterance;
    window.speechSynthesis.speak(utterance);
    return true;
  }
}

export const audioEngine = new NaturalBilingualAudioEngine();
