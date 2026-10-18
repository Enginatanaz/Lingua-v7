import { LessonData, LessonStepDef } from '../types/lesson';
import { LessonCategoryType } from '../types/curriculum';
import { getFullCurriculumLessons } from './curriculumData';
import { generatePedagogicalMasterclass } from '../services/pedagogicalEngine';

export const LESSON_STEPS: LessonStepDef[] = [
  {
    key: 'intro',
    stepNumber: 1,
    label: 'Derse Giriş',
    shortLabel: 'Giriş',
    description: 'Konuya genel bakış, öğrenme hedefleri ve ön hazırlık.',
  },
  {
    key: 'lecture',
    stepNumber: 2,
    label: 'Öğretmen Anlatımı',
    shortLabel: 'Anlatım',
    description: 'Kapsamlı konu anlatımı, kural mantığı ve adım adım analiz.',
  },
  {
    key: 'examples',
    stepNumber: 3,
    label: 'Örnekler & Kurallar',
    shortLabel: 'Örnekler',
    description: 'Gerçek hayattan çift dilli örnek cümleler ve sesli dinleme.',
  },
  {
    key: 'exercises',
    stepNumber: 4,
    label: 'Alıştırmalar',
    shortLabel: 'Alıştırma',
    description: 'Anında geri bildirimli çoktan seçmeli ve boşluk doldurma soruları.',
  },
  {
    key: 'sentence',
    stepNumber: 5,
    label: 'Kendi Cümleni Kur',
    shortLabel: 'Cümle Kurucu',
    description: 'Kelimeleri birleştirerek hedef İngilizce cümleyi inşa etme.',
  },
  {
    key: 'summary',
    stepNumber: 6,
    label: 'Ders Özeti & Tamamlama',
    shortLabel: 'Özet',
    description: 'Kazanım kontrolü, puan kazanımı ve ders tamamlama.',
  },
];

// Richly authored flagship lessons
const DETAILED_LESSONS: Record<number, LessonData> = {
  1: {
    id: 1,
    code: 'A1-01',
    level: 'A1',
    moduleName: 'Gramer Temelleri: Cümle Yapısı',
    title: "To Be (Am / Is / Are) — Olmak Fiili ve Temel Tanımlamalar",
    learningObjective: "İngilizce'de isim, sıfat ve konum belirten temel durum cümlelerini 'am, is, are' kullanarak hatasız kurabilmek.",
    estimatedMinutes: 12,
    xpReward: 50,
    teacherLecture: {
      introduction: "İngilizce öğrenirken karşımıza çıkan ilk ve en hayati yapı 'To Be' fiilidir. Türkçede 'Ben öğretmen-im', 'Hava soğuk-tur' gibi eklerle yaptığımız durum bildirimleri, İngilizcede ayrı bir fiil olan 'am / is / are' ile kurulur. Cümlede hareket bildiren bir eylem (koşmak, yemek, gitmek) yoksa; kim olduğumuzu, nasıl olduğumuzu veya nerede olduğumuzu anlatmak için 'To Be'ye muhtacız.",
      coreConcept: {
        title: "'To Be' Fiilinin Temel Mantığı Nedir?",
        explanation: "İngilizcede her tam cümlenin mutlak surette bir yükleme (fiile) ihtiyacı vardır. Türkçe 'Ben yorgunum' derken yüklemimiz 'yorgun' sıfatına eklenen '-um' şahıs ekidir. İngilizce ise 'I tired' diyemez; özne ile sıfat arasına bir köprü koymak zorundadır: 'I am tired'. İşte bu köprü 'To Be' fiilidir.",
        whyItMatters: "Bu fiil yalnızca A1 seviyesinde değil; ileride göreceğimiz Şimdiki Zaman (Continuous tenses), Edilgen Çatı (Passive Voice) ve Şart Cümlelerinde de temel yapı taşı olarak karşınıza çıkacaktır.",
      },
      breakdownSteps: [
        {
          stepNumber: 1,
          title: "Öznelere Göre Şahıs Eşleşmeleri",
          content: "İngilizce zamirler üç farklı 'To Be' biçimiyle eşleşir. Bu kural istisnasız ezberlenmelidir:",
          keyPhrase: "I → AM  |  He / She / It → IS  |  We / You / They → ARE",
          subPoints: [
            "Tekil şahıslarda (He, She, It veya 'My father', 'The cat') daima IS kullanılır.",
            "Çoğul şahıslarda (We, You, They veya 'Tom and Lisa') daima ARE kullanılır.",
            "Birinci tekil şahısta (I) ise sadece AM kullanılır."
          ]
        },
        {
          stepNumber: 2,
          title: "Olumsuz Cümle Oluşturma Formülü",
          content: "Olumsuzluk bildirmek için 'am, is, are' yapısının hemen ardına 'NOT' kelimesi eklenir. Günlük konuşmada genellikle kısaltmalar tercih edilir.",
          formula: "Özne + am / is / are + NOT + (İsim / Sıfat / Yer)",
          keyPhrase: "is not = isn't  |  are not = aren't  |  I am not = I'm not",
          subPoints: [
            "He is not ready → He isn't ready. (O hazır değil.)",
            "They are not at home → They aren't at home. (Onlar evde değiller.)"
          ]
        },
        {
          stepNumber: 3,
          title: "Soru Cümlesi Kurma (Yer Değiştirme Mantığı)",
          content: "Soru sormak istediğimizde Türkçedeki gibi '-mı/-mi' eki eklemek yerine, 'am / is / are' fiilini cümlenin en başına, yani öznenin önüne taşırız.",
          formula: "Am / Is / Are + Özne + (İsim / Sıfat / Yer) ?",
          keyPhrase: "You are a doctor → Are you a doctor? (Doktor musun?)",
          subPoints: [
            "Kısa Cevaplar: 'Yes, I am.' veya 'No, I'm not.'",
            "Üçüncü şahıs: 'Is she your sister?' → 'Yes, she is.' / 'No, she isn't.'"
          ]
        }
      ],
      ruleCards: [
        {
          ruleTitle: "Temel Kural: Sıfatlar ve İsimlerle Kullanım",
          formula: "Subject + am/is/are + [Adjective / Noun / Place]",
          explanation: "To Be fiilinden sonra asla yalın bir başka fiil (run, sleep, study) gelemez. Ya bir meslek/isim (a teacher), ya bir sıfat (happy, cold) ya da bir konum (in Istanbul) gelmelidir.",
          exampleSnippet: "She is an engineer. / We are very happy today. / The book is on the table.",
          tipNote: "Meslek söylerken 'a / an' belgisiz tanımlığını asla unutmayın: 'I am teacher' YANLIŞ, 'I am a teacher' DOĞRU."
        },
        {
          ruleTitle: "Sık Yapılan Kritik Hata: Fiil Karmaşası",
          explanation: "Öğrencilerin en çok yaptığı hata, eylem fiilleriyle 'am/is/are'ı aynı anda kullanmaktır.",
          cautionNote: "'I am go to school' DEMEYİN! Cümlede 'go' eylemi varsa To Be kullanılmaz: 'I go to school' (Geniş Zaman). To Be sadece durum ve kimlik anlatır.",
          exampleSnippet: "Yanlış: 'I am agree with you.' ❌  →  Doğru: 'I agree with you.' ✅"
        }
      ],
      specialCases: [
        {
          title: "Hava Durumu, Yaş ve Saat Bildirimi",
          details: "İngilizcede hava durumu, yaş ve saat daima 'It is' veya 'I am' ile ifade edilir. Türkçede '25 yaşındayım' veya 'Saat beş' deriz.",
          example: "I am 24 years old. (24 yaşındayım - 'I have 24' denmez!) / It is raining / It is 5 o'clock."
        }
      ],
      quickCheck: {
        question: "Aşağıdaki cümlelerden hangisi dilbilgisi kurallarına göre TAMAMEN DOĞRUDUR?",
        options: [
          "My brother and I is students.",
          "Sarah is not ready for the exam yet.",
          "They am very tired after work.",
          "I am work at a software company."
        ],
        correctIndex: 1,
        explanation: "'Sarah is not ready...' cümlesinde tekil 3. şahıs (Sarah) ile 'is' doğru eşleşmiş ve olumsuzluk 'not' ile düzgün kurulmuştur. 'My brother and I' çoğul (we) olduğu için 'are' gerektirir."
      }
    },
    examples: [
      {
        id: 'ex-1-1',
        en: "I am confident about the new project results.",
        tr: "Yeni proje sonuçları konusunda kendimden eminim.",
        highlightedWords: ['am', 'confident'],
        grammarCategory: 'Sıfat ile durum bildirimi',
        contextNote: "'confident' bir sıfattır, bu nedenle 'I' öznesiyle 'am' kullanılmıştır."
      },
      {
        id: 'ex-1-2',
        en: "David is not at the office right now; he is at home.",
        tr: "David şu anda ofiste değil; evde.",
        highlightedWords: ['is not', 'is'],
        grammarCategory: 'Konum bildirimi & Olumsuzluk',
        contextNote: "Mekan ve bulunma durumu bildirirken 'at the office' öncesinde 'is' yer alır."
      },
      {
        id: 'ex-1-3',
        en: "Are your colleagues ready for the annual presentation?",
        tr: "İş arkadaşların yıllık sunum için hazırlar mı?",
        highlightedWords: ['Are', 'ready'],
        grammarCategory: 'Soru cümlesi',
        contextNote: "'your colleagues' çoğul olduğu için soru 'Are' ile başlar."
      },
      {
        id: 'ex-1-4',
        en: "It is extremely important to practice speaking every single day.",
        tr: "Her gün konuşma pratiği yapmak son derece önemlidir.",
        highlightedWords: ['It is', 'important'],
        grammarCategory: 'Genel durum ve önem tespiti',
        contextNote: "Durumsal tespitlerde cansız/genel özne olarak 'It is' kalıbı kullanılır."
      }
    ],
    vocabulary: [
      {
        id: 'v-1-1',
        word: 'Confident',
        phonetic: '/ˈkɑːn.fə.dənt/',
        partOfSpeech: 'adjective',
        meaningTr: 'Kendinden emin, özgüvenli',
        exampleSentence: 'She feels confident about her English interview.'
      },
      {
        id: 'v-1-2',
        word: 'Colleague',
        phonetic: '/ˈkɑː.liːɡ/',
        partOfSpeech: 'noun',
        meaningTr: 'İş arkadaşı, meslektaş',
        exampleSentence: 'My colleagues are very supportive and helpful.'
      },
      {
        id: 'v-1-3',
        word: 'Available',
        phonetic: '/əˈveɪ.lə.bəl/',
        partOfSpeech: 'adjective',
        meaningTr: 'Müsait, uygun, erişilebilir',
        exampleSentence: 'The manager is not available at the moment.'
      },
      {
        id: 'v-1-4',
        word: 'Exhausted',
        phonetic: '/ɪɡˈzɑː.stɪd/',
        partOfSpeech: 'adjective',
        meaningTr: 'Aşırı yorgun, bitkin',
        exampleSentence: 'We are exhausted after traveling for ten hours.'
      }
    ],
    exercises: [
      {
        id: 'q-1-1',
        type: 'multiple-choice',
        prompt: "Boşluğa en uygun 'To Be' yardımcı fiilini seçin:",
        sentence: "Alex and Emma ___ very excited about their upcoming trip to London.",
        options: ['am', 'is', 'are', 'be'],
        correctAnswer: 'are',
        hint: "'Alex and Emma' iki kişi olduğu için çoğul (They) öznesi olarak düşünülmelidir.",
        explanation: "İki kişi çoğul özne (They) oluşturur; dolayısıyla 'are' doğru yanıttır."
      },
      {
        id: 'q-1-2',
        type: 'fill-blank',
        prompt: "Aşağıdaki soru cümlesini tamamlamak için uygun fiili yazın (küçük harfle):",
        sentence: "___ your father an architect or a civil engineer?",
        correctAnswer: 'is',
        hint: "'your father' tekil bir erkek şahıstır (He).",
        explanation: "'your father' üçüncü tekil şahıs (He) olduğu için soru 'Is' ile başlar."
      },
      {
        id: 'q-1-3',
        type: 'multiple-choice',
        prompt: "Aşağıdaki hatalı cümlenin düzeltilmiş hali hangisidir?",
        sentence: "'I am have 28 years old.' (Hatalı)",
        options: [
          'I am 28 years old.',
          'I have 28 years.',
          'I is 28 years old.',
          'I got 28 years old.'
        ],
        correctAnswer: 'I am 28 years old.',
        hint: "İngilizcede yaş belirtirken 'have' kullanılmaz; 'To Be' kullanılır.",
        explanation: "İngilizcede yaş sahip olunan bir şey değil, bulunulan durumdur. Bu yüzden 'I am 28 years old' denir."
      }
    ],
    sentenceBuilderTask: {
      id: 'sb-1',
      promptTr: "Biz bu akşam toplantı için hazır değiliz.",
      targetEn: "We are not ready for the meeting this evening",
      availableWords: [
        'We', 'are', 'not', 'ready', 'for', 'the', 'meeting', 'this', 'evening',
        'is', 'am', 'do'
      ],
      explanation: "'We' öznesi 'are not' gerektirir. Devamında 'ready' (hazır), ardından 'for the meeting' (toplantı için) ve zaman zarfı 'this evening' gelir."
    },
    summaryTakeaways: [
      "'To Be' durum, kimlik, meslek, yaş ve konum anlatır; hareket eylemleriyle karıştırılmamalıdır.",
      "Özne uyumu: I am | He, She, It is | We, You, They are.",
      "Olumsuzluk için 'not' eklenir (isn't, aren't); soru için fiil başa alınır.",
      "Mesleklerde tekil öznelerle 'a / an' kullanımı zorunludur (He is an engineer)."
    ]
  },

  2: {
    id: 2,
    code: 'A1-02',
    level: 'A1',
    moduleName: 'Gramer Temelleri: Zamanlar',
    title: "Present Simple — Geniş Zaman & Günlük Rutinler",
    learningObjective: "Alışkanlıkları, düzenli yapılan aktiviteleri ve genel gerçekleri Present Simple kalıbında -s takısı kurallarına dikkat ederek ifade edebilmek.",
    estimatedMinutes: 15,
    xpReward: 50,
    teacherLecture: {
      introduction: "Present Simple (Geniş Zaman), her gün tekrarladığınız rutinleri, hobilerinizi ve değişmeyen doğa kanunlarını anlatırken başvurduğunuz zamandır. 'Her sabah 7'de uyanırım', 'Güneş doğudan doğar' gibi ifadelerin tamamı bu zaman dilimiyle kurulur.",
      coreConcept: {
        title: "Present Simple Ne Zaman Kullanılır?",
        explanation: "Bir eylemin 'şu anda' yapılıyor olması gerekmez; hayatın genelinde tekrarlanan, periyodik bir alışkanlık olması yeterlidir. Türkçedeki '-r, -er, -ar' ekine karşılık gelir.",
        whyItMatters: "İş mülakatlarında 'Bize bir iş gününüzü anlatın' sorusundan arkadaş sohbetlerine kadar en çok konuştuğumuz zaman dilimidir."
      },
      breakdownSteps: [
        {
          stepNumber: 1,
          title: "Olumlu Cümle ve 3. Tekil Şahıs Kuralı (-s takısı)",
          content: "I, You, We, They öznelerinde fiil hiç değişmeden yalın haliyle kalır. Ancak He, She, It öznelerinde fiilin sonuna '-s' veya '-es' takısı gelir.",
          keyPhrase: "I work → He works  |  We live → She lives  |  They watch → He watches",
          formula: "Subject + Verb(s/es) + Object",
          subPoints: [
            "-ch, -sh, -ss, -x, -o ile biten fiillere '-es' gelir: go → goes, watch → watches.",
            "Sessiz harf + y ile bitenlerde 'y' düşer, '-ies' gelir: study → studies."
          ]
        },
        {
          stepNumber: 2,
          title: "Olumsuz Cümle ve Yardımcı Fiiller: Don't & Doesn't",
          content: "Olumsuz cümle kurarken 'Do not (don't)' veya 'Does not (doesn't)' yardımcı fiilleri devreye girer. Çok kritik: 'doesn't' geldiğinde ana fiildeki '-s' takısı düşer!",
          formula: "Subject + don't / doesn't + Verb (Yalın) + Object",
          keyPhrase: "He doesn't like coffee (He doesn't likes YANLIŞTIR!)"
        },
        {
          stepNumber: 3,
          title: "Soru Cümleleri: Do & Does",
          content: "Soru sorarken 'Do' veya 'Does' cümlenin en başına gelir. Fiil her zaman yalın halde kalır.",
          formula: "Do / Does + Subject + Verb (Yalın) ...?",
          keyPhrase: "Do you speak English?  |  Does she work on weekends?"
        }
      ],
      ruleCards: [
        {
          ruleTitle: "Altın Kural: -s Takısı Sadece Olumlu Cümlede Kalır",
          formula: "He plays tennis. (Olumlu) / He does NOT play tennis. (Olumsuz) / Does he play tennis? (Soru)",
          explanation: "'Does' veya 'doesn't' yardımcı fiili zaten bünyesinde o -s takısını barındırır. Bu yüzden ana fiile bir daha -s eklemek İngilizcede çifte kural hatası sayılır.",
          cautionNote: "'She doesn't works' yazımı en yaygın sınav ve konuşma hatasıdır."
        },
        {
          ruleTitle: "Sıklık Zarfları (Frequency Adverbs) Konumu",
          explanation: "Always, usually, often, sometimes, rarely, never gibi sıklık bildiren kelimeler ana fiilden hemen ÖNCE, 'To Be' fiilinden ise SONRA gelir.",
          exampleSnippet: "I always drink water. / She is always punctual."
        }
      ],
      quickCheck: {
        question: "Aşağıdaki cümlelerden hangisi dilbilgisel olarak DOĞRUDUR?",
        options: [
          "Mark doesn't drinks tea in the morning.",
          "Mark don't drink tea in the morning.",
          "Mark doesn't drink tea in the morning.",
          "Mark not drink tea in the morning."
        ],
        correctIndex: 2,
        explanation: "Mark (He) için 'doesn't' kullanılır ve ana fiil yalın kalır: 'doesn't drink'."
      }
    },
    examples: [
      {
        id: 'ex-2-1',
        en: "Our team conducts a stand-up meeting every morning at nine.",
        tr: "Ekibimiz her sabah dokuzda ayaküstü bir toplantı düzenler.",
        highlightedWords: ['conducts', 'every morning'],
        grammarCategory: 'Rutin eylem & 3. tekil şahıs',
        contextNote: "'Our team' tekil bir topluluk adı olduğu için 'conduct' fiili '-s' almıştır."
      },
      {
        id: 'ex-2-2',
        en: "She doesn't drive to work because the subway is faster.",
        tr: "Metro daha hızlı olduğu için işe arabayla gitmez.",
        highlightedWords: ["doesn't drive", 'because'],
        grammarCategory: 'Olumsuz geniş zaman',
        contextNote: "'doesn't' sonrasında 'drive' yalın kullanılmıştır."
      },
      {
        id: 'ex-2-3',
        en: "Do you usually check your work emails on Saturday?",
        tr: "Cumartesi günleri genellikle iş e-postalarını kontrol eder misin?",
        highlightedWords: ['Do you', 'usually', 'check'],
        grammarCategory: 'Geniş zaman soru & sıklık zarfı',
        contextNote: "'usually' sıklık zarfı 'check' fiilinden hemen önce gelmiştir."
      }
    ],
    vocabulary: [
      {
        id: 'v-2-1',
        word: 'Conduct',
        phonetic: '/kənˈdʌkt/',
        partOfSpeech: 'verb',
        meaningTr: 'Yürütmek, düzenlemek, icra etmek',
        exampleSentence: 'They conduct research on artificial intelligence.'
      },
      {
        id: 'v-2-2',
        word: 'Usually',
        phonetic: '/ˈjuː.ʒu.ə.li/',
        partOfSpeech: 'adverb',
        meaningTr: 'Genellikle, çoğunlukla',
        exampleSentence: 'I usually have lunch at noon.'
      },
      {
        id: 'v-2-3',
        word: 'Punctual',
        phonetic: '/ˈpʌŋk.tʃu.əl/',
        partOfSpeech: 'adjective',
        meaningTr: 'Dakik, vaktinde gelen',
        exampleSentence: 'He is very punctual and never arrives late.'
      }
    ],
    exercises: [
      {
        id: 'q-2-1',
        type: 'multiple-choice',
        prompt: "Boşluğu doğru fiil çekimi ile doldurun:",
        sentence: "My sister ___ software engineering at university and speaks three languages.",
        options: ['study', 'studies', 'studying', 'studys'],
        correctAnswer: 'studies',
        hint: "'study' fiilinde sessiz harf + y olduğundan 'y' düşer ve '-ies' gelir.",
        explanation: "'My sister' (She) öznesinde 'study' fiili 'studies' şeklini alır."
      },
      {
        id: 'q-2-2',
        type: 'multiple-choice',
        prompt: "Hangisi doğru bir soru cümlesidir?",
        options: [
          'Does your manager approve the budget?',
          'Do your manager approve the budget?',
          'Does your manager approves the budget?',
          'Is your manager approve the budget?'
        ],
        correctAnswer: 'Does your manager approve the budget?',
        hint: "'your manager' tekil (He/She) olduğundan 'Does' ile başlar ve fiil yalın kalır.",
        explanation: "'Does' kullanılırken fiil sonuna '-s' almaz: 'Does ... approve'."
      }
    ],
    sentenceBuilderTask: {
      id: 'sb-2',
      promptTr: "O (kadın) haftasonları nadiren televizyon izler.",
      targetEn: "She rarely watches television on weekends",
      availableWords: [
        'She', 'rarely', 'watches', 'television', 'on', 'weekends',
        'watch', 'does', 'is', 'at'
      ],
      explanation: "'She' öznesi sıklık zarfı 'rarely' ile devam eder, ardından 'watches' (-es takısıyla) ve 'on weekends' gelir."
    },
    summaryTakeaways: [
      "Present Simple alışkanlıklar, rutinler ve genel doğrular için kullanılır.",
      "He / She / It öznelerinde olumlu cümlede fiile -s/-es/-ies takısı eklenir.",
      "Olumsuzda 'don't / doesn't', soruda 'Do / Does' kullanılır ve ana fiil yalın kalır.",
      "Sıklık zarfları (always, usually, rarely) fiilden hemen önce yer alır."
    ]
  }
};

// Generates 488 structured curriculum modules across all CEFR levels
export function getAllCurriculumLessons(): {
  id: number;
  code: string;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  title: string;
  moduleName: string;
  learningObjective: string;
  estimatedMinutes: number;
  xpReward: number;
  isDetailed: boolean;
  lessonType?: LessonCategoryType;
  prerequisiteLessonIds?: number[];
}[] {
  const fullCurriculum = getFullCurriculumLessons();
  return fullCurriculum.map((l) => ({
    id: l.id,
    code: l.code,
    level: l.level,
    title: l.title,
    moduleName: l.moduleName,
    learningObjective: l.learningObjectives[0] || l.description,
    estimatedMinutes: l.estimatedDuration,
    xpReward: l.xpReward,
    isDetailed: !!DETAILED_LESSONS[l.id],
    lessonType: l.lessonType,
    prerequisiteLessonIds: l.prerequisiteLessonIds,
  }));
}

// Fetch complete lesson data by ID; if not in custom detailed dictionary, dynamically constructs full interactive pedagogical data
export function getLessonById(id: number): LessonData {
  if (DETAILED_LESSONS[id]) {
    return DETAILED_LESSONS[id];
  }

  const fullCurriculum = getFullCurriculumLessons();
  const curriculumMatch = fullCurriculum.find((l) => l.id === id);
  const fallback = fullCurriculum[0];
  const lessonDef = curriculumMatch || fallback;

  return generatePedagogicalMasterclass({
    id: lessonDef.id,
    code: lessonDef.code,
    level: lessonDef.level,
    moduleName: lessonDef.moduleName,
    title: lessonDef.title,
    learningObjective: lessonDef.learningObjectives[0] || lessonDef.description,
    estimatedMinutes: lessonDef.estimatedDuration,
    xpReward: lessonDef.xpReward,
  });
}

