import { 
  CEFRLevel, 
  LessonData, 
  LessonSkillType, 
  TeacherLectureData,
  ExampleSentence,
  VocabularyItem,
  ExerciseItem,
  SentenceBuilderTask,
  CommonMistakeItem,
  RealWorldContext,
  ContrastiveAnalysis
} from '../types/lesson';

export interface TopicBlueprint {
  skillType: LessonSkillType;
  concreteCompetency: string;
  whyItMatters: string;
  linguisticLogic: string;
  stepBreakdown: {
    title: string;
    content: string;
    formula?: string;
    keyPhrase?: string;
    subPoints?: string[];
    rationale?: string;
    warningNote?: string;
  }[];
  ruleCards: {
    ruleTitle: string;
    formula?: string;
    explanation: string;
    exampleSnippet?: string;
    cautionNote?: string;
    tipNote?: string;
  }[];
  commonMistakes: CommonMistakeItem[];
  realWorldContext: RealWorldContext;
  contrastiveAnalysis?: ContrastiveAnalysis;
  memoryHook: string;
  examples: {
    en: string;
    tr: string;
    highlightedWords: string[];
    grammarCategory: string;
    contextNote: string;
    breakdownNote: string;
  }[];
  vocabulary: {
    word: string;
    phonetic: string;
    partOfSpeech: 'noun' | 'verb' | 'adjective' | 'adverb' | 'phrase' | 'pronoun' | 'preposition';
    meaningTr: string;
    exampleSentence: string;
  }[];
  quickCheck: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
  exercise: {
    prompt: string;
    sentence: string;
    options: string[];
    correctAnswer: string;
    hint: string;
    explanation: string;
  };
  sentenceBuilder: {
    promptTr: string;
    targetEn: string;
    availableWords: string[];
    explanation: string;
  };
  summaryTakeaways: string[];
}

export const BLUEPRINTS: Record<string, (level: CEFRLevel, title: string, moduleName: string) => TopicBlueprint> = {
  // 1. TO BE & BASIC COPULAR STRUCTURES
  to_be: (level, title) => ({
    skillType: 'grammar',
    concreteCompetency: "Durum, kimlik, milliyet, meslek ve konum cümlelerini 'am / is / are' kullanarak hatasız kurabilmek.",
    whyItMatters: "İngilizcede hareket bildiren bir fiil yoksa cümle yüklemsiz kalamaz. Türkçe 'Ben mühendisim' derken yüklem ekidir; İngilizce ise özne ile isim/sıfat arasına 'am/is/are' köprüsünü koymak zorundadır.",
    linguisticLogic: "İngilizce her tam cümlede bir 'finite verb' arar. Sıfatlar tek başlarına yüklem olamayacağından, To Be fiili onları özneye bağlayan ontolojik köprü görevi görür.",
    stepBreakdown: [
      {
        title: "1. Aşama: Özne ve 'To Be' Şahıs Uyumu",
        content: "İngilizce zamirler To Be biçimleriyle birebir eşleşir.",
        keyPhrase: "I -> AM  |  He / She / It -> IS  |  We / You / They -> ARE",
        formula: "Özne + am/is/are + [İsim / Sıfat / Konum]",
        subPoints: [
          "Tekil üçüncü şahıslarda (The manager, Sarah) daima IS kullanılır.",
          "Çoğul ve ikinci tekil şahıslarda (You, We, They) daima ARE kullanılır.",
          "Birinci tekil şahısta (I) sadece AM kullanılır."
        ],
        rationale: "Bu biçimler eski Germenik çekim kurallarıdır ve tekil/çoğul ayrımını kesinleştirir."
      },
      {
        title: "2. Aşama: Olumsuzluk Eki ve Kısaltmalar",
        content: "Olumsuzluk için 'am/is/are' sonrasına 'NOT' eklenir.",
        formula: "Özne + am/is/are + not + [Tamamlayıcı]",
        keyPhrase: "isn't = is not  |  aren't = are not  |  I'm not",
        warningNote: "'am not' birleşerek 'amn't' olmaz; daima 'I'm not' kalır."
      },
      {
        title: "3. Aşama: Soru Formatı ve Yer Değiştirme Mantığı",
        content: "Soru sorarken 'am/is/are' fiili cümlenin başına, yani öznenin önüne geçer.",
        formula: "Am / Is / Are + Özne + [Tamamlayıcı] ?",
        keyPhrase: "Are you ready?  |  Is he your colleague?",
        subPoints: [
          "Kısa Cevap: 'Yes, I am.' / 'No, I'm not.'",
          "Kısa olumlu cevaplarda kısaltma yapılmaz ('Yes, I'm' YANLIŞTIR)."
        ]
      }
    ],
    ruleCards: [
      {
        ruleTitle: "Eylem Fiili ile To Be Karışıklığı Yasağı",
        explanation: "To Be durumu bildirir; eylemlerle (go, eat, work) yalın halde yan yana gelemez.",
        cautionNote: "'I am work here' YANLIŞTIR! Ya 'I work here' ya da 'I am working here' denmelidir.",
        exampleSnippet: "Doğru: 'She is a doctor.' (Durum) / 'She works at the hospital.' (Eylem)"
      },
      {
        ruleTitle: "Yaş ve Hava Durumu Bildirimi",
        explanation: "İngilizcede yaş sahip olunan bir şey değil, bulunulan durumdur.",
        tipNote: "Türkçede '25 yaşındayım' veya '25 yaşım var' denir; İngilizcede 'I have 25' denmez, 'I am 25 years old' denir.",
        exampleSnippet: "It is cold outside. / I am twenty-eight years old."
      }
    ],
    commonMistakes: [
      {
        wrongExample: "I am agree with your opinion.",
        correctExample: "I agree with your opinion.",
        rootCause: "Türkçe 'aynı fikirdeyim' sıfat gibi algılandığı için öğrenci To Be ekleme eğilimindedir. Oysa 'agree' İngilizcede tam bir fiildir.",
        memoryTip: "'Agree' bir eylemdir; başına am/is/are almaz!"
      },
      {
        wrongExample: "They is very successful engineers.",
        correctExample: "They are very successful engineers.",
        rootCause: "Özne-yüklem uyumunun göz ardı edilmesi.",
        memoryTip: "Çoğul özneler (They/We) daima ARE ile eşleşir."
      }
    ],
    realWorldContext: {
      scenarioTitle: "Ofiste Yeni Ekip Arkadaşıyla Tanışma",
      description: "Yeni bir işe başlandığında pozisyon, departman ve durum bilgisi paylaşılır.",
      contextType: 'workplace',
      dialogue: [
        { speaker: "Sarah", textEn: "Hello, I am Sarah. I am the new project coordinator.", textTr: "Merhaba, ben Sarah. Yeni proje koordinatörüyüm." },
        { speaker: "Kemal", textEn: "Nice to meet you, Sarah! Are you in the engineering department?", textTr: "Tanıştığıma memnun oldum Sarah! Mühendislik departmanında mısınız?" },
        { speaker: "Sarah", textEn: "No, I'm not. I am in the operations team.", textTr: "Hayır, değilim. Operasyon ekibindeyim." }
      ]
    },
    contrastiveAnalysis: {
      conceptA: "Türkçe Ek Fiil Sistemi (-im, -dir)",
      conceptB: "İngilizce To Be Fiili (Am / Is / Are)",
      keyDifference: "Türkçede durum yüklemi kelimenin sonuna eklenir (yorgun-um). İngilizcede ise özne ile kelime arasına bağımsız 'am' köprüsü gelir.",
      exampleA: "Ben bugün çok mutluyum.",
      exampleB: "I am very happy today."
    },
    memoryHook: "To Be bir asma köprüdür: Özne ile Sıfat/İsim birbirine 'am / is / are' köprüsü olmadan bağlanamaz!",
    examples: [
      {
        en: "Alex is confident about the upcoming presentation.",
        tr: "Alex yaklaşan sunum konusunda kendinden emin.",
        highlightedWords: ['is', 'confident'],
        grammarCategory: "Sıfat ile durum bildirimi",
        contextNote: "Tekil şahıs (Alex) ile 'is' yardımcı fiili kullanılmıştır.",
        breakdownNote: "Özne (Alex) + To Be (is) + Sıfat (confident)."
      },
      {
        en: "We are not ready to make a final decision yet.",
        tr: "Henüz nihai bir karar almaya hazır değiliz.",
        highlightedWords: ['are not', 'ready'],
        grammarCategory: "Olumsuz durum cümlesi",
        contextNote: "Çoğul şahıs (We) ile 'are not' kullanılmıştır.",
        breakdownNote: "Özne (We) + are not + Sıfat (ready)."
      },
      {
        en: "Is the manager available for a brief meeting?",
        tr: "Müdür kısa bir toplantı için müsait mi?",
        highlightedWords: ['Is', 'available'],
        grammarCategory: "Soru cümlesi",
        contextNote: "Yardımcı fiil başa getirilerek soru oluşturulmuştur.",
        breakdownNote: "Is + Özne (the manager) + Sıfat (available)?"
      }
    ],
    vocabulary: [
      { word: 'Confident', phonetic: '/ˈkɑːn.fə.dənt/', partOfSpeech: 'adjective', meaningTr: 'Kendinden emin, özgüvenli', exampleSentence: 'She is confident in her English communication.' },
      { word: 'Available', phonetic: '/əˈveɪ.lə.bəl/', partOfSpeech: 'adjective', meaningTr: 'Müsait, uygun', exampleSentence: 'The lead developer is available now.' },
      { word: 'Colleague', phonetic: '/ˈkɑː.liːɡ/', partOfSpeech: 'noun', meaningTr: 'İş arkadaşı, meslektaş', exampleSentence: 'My colleagues are supportive.' },
      { word: 'Exhausted', phonetic: '/ɪɡˈzɑː.stɪd/', partOfSpeech: 'adjective', meaningTr: 'Aşırı yorgun, bitkin', exampleSentence: 'They are exhausted after the flight.' }
    ],
    quickCheck: {
      question: "Aşağıdaki cümlelerden hangisi 'To Be' kurallarına göre TAMAMEN DOĞRUDUR?",
      options: [
        "Sarah is not ready for the exam yet.",
        "My brother and I is students.",
        "They am very tired after work.",
        "I am work at a software company."
      ],
      correctIndex: 0,
      explanation: "Doğru yanıt: 'Sarah is not ready...' cümlesinde tekil 3. şahıs (Sarah) ile 'is' doğru eşleşmiştir."
    },
    exercise: {
      prompt: "Boşluğa en uygun 'To Be' yardımcı fiilini seçin:",
      sentence: "Alex and Emma ___ very excited about their upcoming international trip.",
      options: ['are', 'is', 'am', 'be'],
      correctAnswer: 'are',
      hint: "'Alex and Emma' çoğul (They) öznesi oluşturur.",
      explanation: "İki kişi çoğul (They) öznesi oluşturduğundan 'are' doğru yanıttır."
    },
    sentenceBuilder: {
      promptTr: "Biz bu akşam toplantı için hazır değiliz.",
      targetEn: "We are not ready for the meeting this evening",
      availableWords: ['We', 'are', 'not', 'ready', 'for', 'the', 'meeting', 'this', 'evening', 'is', 'am', 'do'],
      explanation: "'We' öznesi 'are not' gerektirir; devamında 'ready' sıfatı ve edat tümleci gelir."
    },
    summaryTakeaways: [
      "İngilizcede hareket fiili olmayan tüm cümleler To Be (am/is/are) köprüsüyle kurulur.",
      "He/She/It için IS, You/We/They için ARE, I için AM kullanılır.",
      "Soru yaparken To Be başa alınır, olumsuzda ardına NOT eklenir."
    ]
  }),

  // 2. PRESENT SIMPLE (GENİŞ ZAMAN & RUTİNLER)
  present_simple: (level, title) => ({
    skillType: 'grammar',
    concreteCompetency: "Günlük rutinleri, alışkanlıkları ve genel geçer gerçekleri Present Simple kalıbında -s takısı kurallarına uyarak aktarabilmek.",
    whyItMatters: "Geniş Zaman, dünyayı nasıl algıladığımızı, ne sıklıkla ne yaptığımızı ve değişmeyen bilimsel/mantıksal doğruları aktarmanın ana aracıdır.",
    linguisticLogic: "İngilizcede zaman (tense) ile görünüş (aspect) ayrıdır. Geniş zaman eylemin 'anlık akışını' değil, 'sürekli geçerliliğini ve döngüselliğini' kodlar.",
    stepBreakdown: [
      {
        title: "1. Aşama: Temel Çekim ve 3. Tekil Şahıs -s Kuralı",
        content: "I, You, We, They öznelerinde fiil yalın kalır. He, She, It öznelerinde ise fiil sonuna -s, -es veya -ies eklenir.",
        formula: "Özne (He/She/It) + Fiil + (-s/-es/-ies)",
        keyPhrase: "I work -> He works  |  They watch -> She watches  |  You study -> He studies",
        subPoints: [
          "-ch, -sh, -ss, -x, -o ile biten fiiller -ES alır (watches, washes, goes).",
          "Sessiz harf + y ile biten fiillerde y düşer, -IES gelir (study -> studies).",
          "Sesli harf + y alan fiiller normal -S alır (play -> plays)."
        ]
      },
      {
        title: "2. Aşama: Olumsuz Cümle ve Yardımcı Fiil Devreye Girişi",
        content: "Olumsuzluk kurarken 'don't' ve 'doesn't' yardımcı fiilleri kullanılır. 'Doesn't' kullanıldığında asıl fiildeki -s takısı DÜŞER.",
        formula: "He/She/It + doesn't + Yalın Fiil  |  I/You/We/They + don't + Yalın Fiil",
        warningNote: "'He doesn't works' ÇİFTE EK HATASIDIR! Doğrusu: 'He doesn't work'."
      },
      {
        title: "3. Aşama: Soru Sorma ve Sıklık Zarfları",
        content: "Sorularda Do ve Does başa gelir. Always, usually, often, sometimes, never zarfları özne ile asıl fiil arasına girer.",
        formula: "Do / Does + Özne + Yalın Fiil ?  |  Özne + [Sıklık Zarfı] + Fiil",
        keyPhrase: "Do you exercise regularly?  |  She always arrives on time."
      }
    ],
    ruleCards: [
      {
        ruleTitle: "Doesn't Kullanıldığında Asıl Fiil Yalınlaşır",
        explanation: "-s takısı sorumluluğunu 'do' yardımcı fiili 'does' haline gelerek üstlenmiştir. Asıl fiile bir daha -s takısı eklenemez.",
        cautionNote: "Yanlış: 'She doesn't likes tea.' ❌ -> Doğru: 'She doesn't like tea.' ✅"
      },
      {
        ruleTitle: "Sıklık Zarflarının Konumu",
        explanation: "Sıklık zarfları normal eylem fiillerinin ÖNÜNE, To Be fiilinin ise ARKASINA yerleştirilir.",
        exampleSnippet: "He usually drives to work. (Fiil önü) / He is always punctual. (To Be arkası)"
      }
    ],
    commonMistakes: [
      {
        wrongExample: "He work in a large tech firm.",
        correctExample: "He works in a large tech firm.",
        rootCause: "3. tekil şahıs (He/She/It) -s takısının unutulması.",
        memoryTip: "He, She, It tekildir; fiiline 'S' takısı ister!"
      },
      {
        wrongExample: "She doesn't goes to the office on Fridays.",
        correctExample: "She doesn't go to the office on Fridays.",
        rootCause: "Doesn't sonrasında fiili yalın bırakmayı unutma.",
        memoryTip: "Doesn't hırsızdır, fiilin -s takısını çalar!"
      }
    ],
    realWorldContext: {
      scenarioTitle: "Haftalık Çalışma Rutinlerini Karşılaştırma",
      description: "İş yerinde mesai saatleri, esnek çalışma ve alışkanlıklar konuşulurken Present Simple kullanılır.",
      contextType: 'workplace',
      dialogue: [
        { speaker: "David", textEn: "How do you usually commute to work?", textTr: "İşe genellikle nasıl gidip geliyorsun?" },
        { speaker: "Elif", textEn: "I usually take the metro, but my colleague drives.", textTr: "Genellikle metroya binerim ama iş arkadaşım arabayla gider." },
        { speaker: "David", textEn: "Does he arrive early every morning?", textTr: "Her sabah erken mi varır?" }
      ]
    },
    contrastiveAnalysis: {
      conceptA: "Türkçe Geniş Zaman (-r / -ar / -er)",
      conceptB: "İngilizce Present Simple (Yalın Fiil / -s)",
      keyDifference: "Türkçede şahıs ekleri fiilin sonuna gelir (çalış-ır-ım, çalış-ır-sın). İngilizcede yalnızca 3. tekil şahısta (works) ek vardır; diğer şahıslarda fiil yalındır.",
      exampleA: "O her sabah saat yedide uyanır.",
      exampleB: "She wakes up at seven every morning."
    },
    memoryHook: "Geniş Zaman bir takvim saatidir: Tekil 3. şahısta (He/She/It) 'S' zili çalar!",
    examples: [
      {
        en: "Our team always reviews the codebase before deployment.",
        tr: "Ekibimiz canlıya almadan önce kod tabanını daima inceler.",
        highlightedWords: ['always', 'reviews'],
        grammarCategory: "Sıklık zarfı ve 3. tekil şahıs",
        contextNote: "'Our team' tekil kabul edilip fiil -s almıştır.",
        breakdownNote: "Özne + sıklık zarfı + fiil(-s)."
      },
      {
        en: "He does not attend meetings without an agenda.",
        tr: "Gündemi olmayan toplantılara katılmaz.",
        highlightedWords: ['does not attend'],
        grammarCategory: "Olumsuz geniş zaman",
        contextNote: "does not sonrası attend fiili yalın kalmıştır.",
        breakdownNote: "He + does not + attend (yalın fiil)."
      },
      {
        en: "Do international clients prefer online demonstrations?",
        tr: "Uluslararası müşteriler çevrim içi tanıtımları mı tercih eder?",
        highlightedWords: ['Do', 'prefer'],
        grammarCategory: "Geniş zaman soru kalıbı",
        contextNote: "Çoğul özne (clients) olduğu için 'Do' ile başlar.",
        breakdownNote: "Do + çoğul özne + yalın fiil?"
      }
    ],
    vocabulary: [
      { word: 'Commute', phonetic: '/kəˈmjuːt/', partOfSpeech: 'verb', meaningTr: 'Ev ile iş arasında gidip gelmek', exampleSentence: 'She commutes by train every day.' },
      { word: 'Punctual', phonetic: '/ˈpʌŋk.tʃu.əl/', partOfSpeech: 'adjective', meaningTr: 'Dakik, vaktinde gelen', exampleSentence: 'He is always punctual for meetings.' },
      { word: 'Regularly', phonetic: '/ˈreɡ.jə.lɚ.li/', partOfSpeech: 'adverb', meaningTr: 'Düzenli olarak', exampleSentence: 'They meet regularly to review progress.' },
      { word: 'Habitual', phonetic: '/həˈbɪtʃ.u.əl/', partOfSpeech: 'adjective', meaningTr: 'Alışkanlık haline gelmiş', exampleSentence: 'Early rising is a habitual practice for him.' }
    ],
    quickCheck: {
      question: "Aşağıdaki cümlelerden hangisi Geniş Zaman kurallarına göre DOĞRUDUR?",
      options: [
        "She doesn't plays tennis on weekdays.",
        "My manager always reviews our reports thoroughly.",
        "They works at an international finance company.",
        "Does he likes drinking espresso in the morning?"
      ],
      correctIndex: 1,
      explanation: "Doğru yanıt: 'My manager always reviews...' cümlesinde tekil özne (manager) ile 'reviews' -s takısı almış ve sıklık zarfı doğru yerdedir."
    },
    exercise: {
      prompt: "Boşluğa uygun fiil çekimini seçin:",
      sentence: "The senior software engineer rarely ___ code without writing unit tests first.",
      options: ['deploys', 'deploy', 'deploying', 'is deploy'],
      correctAnswer: 'deploys',
      hint: "'The senior software engineer' tekil 3. şahıstır (He/She).",
      explanation: "Tekil 3. şahıs öznelerde geniş zamanda fiil -s takısı alır: 'deploys'."
    },
    sentenceBuilder: {
      promptTr: "Yazılım mühendisleri kodlarını her gün dikkatlice test eder.",
      targetEn: "Software engineers test their code carefully every day",
      availableWords: ['Software', 'engineers', 'test', 'their', 'code', 'carefully', 'every', 'day', 'tests', 'testing', 'is'],
      explanation: "Çoğul özne 'Software engineers' yalın fiil 'test' alır; ardından nesne ve zarflar gelir."
    },
    summaryTakeaways: [
      "He/She/It öznelerinde fiil sonuna -s/-es/-ies eklenir.",
      "Doesn't ve Does kullanıldığında asıl fiil mutlaka yalın hale döner.",
      "Sıklık zarfları asıl fiilin önüne, To Be fiilinin ise ardına yerleştirilir."
    ]
  }),

  // 3. PRESENT CONTINUOUS (ŞİMDİKİ ZAMAN)
  present_continuous: (level, title) => ({
    skillType: 'grammar',
    concreteCompetency: "Konuşma anında gerçekleşen eylemleri, geçici süreçleri ve geleceğe dönük kesin planları Present Continuous ile ifade edebilmek.",
    whyItMatters: "Süregiden aksiyonları betimlemek, değişen trendleri ve anlık telefon/iş görüşmesi diyaloglarını yönetmek için hayati bir yapıdır.",
    linguisticLogic: "Present Continuous iki zorunlu parçadan oluşur: Yardımcı fiil (am/is/are) ve eylemin devam ettiğini simgeleyen -ing eki.",
    stepBreakdown: [
      {
        title: "1. Aşama: İki Ayaklı Formülün Kurulması",
        content: "Sadece -ing eklemek yetmez; özneye uygun 'am, is, are' yardımcı fiili mutlaka bulunmalıdır.",
        formula: "Özne + am/is/are + Fiil-ing",
        keyPhrase: "I am working  |  She is writing  |  They are testing",
        warningNote: "'I working' DİL BİLGİSİ HATASIDIR! Yardımcı fiil (am) atlanamaz."
      },
      {
        title: "2. Aşama: Fiil Sonuna -ing Ekleme Kuralları",
        content: "make -> making (e düşer), run -> running (harf çiftleşir), lie -> lying (-ie -> y).",
        subPoints: [
          "Sessiz + sesli + sessiz ile biten tek heceli fiillerde son harf çiftleşir: sit -> sitting, plan -> planning.",
          "-e ile bitenlerde e düşer: write -> writing, drive -> driving.",
          "-ie ile bitenlerde y dönüşümü olur: die -> dying, lie -> lying."
        ]
      },
      {
        title: "3. Aşama: Durum Fiilleri (Stative Verbs) İstisnası",
        content: "want, know, understand, believe, like, need gibi zihinsel durum bildiren fiiller kural olarak -ing almaz.",
        keyPhrase: "'I am wanting coffee' YANLIŞTIR -> 'I want coffee' DOĞRUDUR."
      }
    ],
    ruleCards: [
      {
        ruleTitle: "Stative Verbs -ing Almaz Kuralı",
        explanation: "Düşünce, duygu ve sahiplik bildiren fiiller (love, understand, own) konuşma anında bile olsa Geniş Zaman kalıbında söylenir.",
        exampleSnippet: "Yanlış: 'I am knowing the answer.' ❌ -> Doğru: 'I know the answer.' ✅"
      },
      {
        ruleTitle: "Gelecek Zaman Anlamı (Fixed Arrangements)",
        explanation: "Kesinleşmiş randevu ve rezervasyonlar şimdiki zamanla söylenir.",
        exampleSnippet: "I am flying to London tomorrow morning. (Biletim alındı, kesin plan)"
      }
    ],
    commonMistakes: [
      {
        wrongExample: "Look! The bus coming.",
        correctExample: "Look! The bus is coming.",
        rootCause: "am/is/are yardımcı fiilini unutup doğrudan -ing ekleme eğilimi.",
        memoryTip: "-ing tek başına uçamaz; kanadı am/is/are'dır!"
      },
      {
        wrongExample: "I am needing some assistance right now.",
        correctExample: "I need some assistance right now.",
        rootCause: "'Şu anda' zarfını görüp need fiiline -ing eklemek.",
        memoryTip: "Need, want, know asla -ing sevmez!"
      }
    ],
    realWorldContext: {
      scenarioTitle: "Canlı Proje Toplantısında Anlık Durum Güncellemesi",
      description: "Ekip üyeleri şu anda üzerinde çalıştıkları modülleri şimdiki zamanla aktarır.",
      contextType: 'workplace',
      dialogue: [
        { speaker: "Team Lead", textEn: "What are you working on right now, Sarah?", textTr: "Şu anda ne üzerinde çalışıyorsun Sarah?" },
        { speaker: "Sarah", textEn: "I am updating the authentication flow for mobile users.", textTr: "Mobil kullanıcılar için kimlik doğrulama akışını güncelliyorum." },
        { speaker: "Team Lead", textEn: "Great, are the servers running smoothly?", textTr: "Harika, sunucular sorunsuz çalışıyor mu?" }
      ]
    },
    contrastiveAnalysis: {
      conceptA: "Türkçe Şimdiki Zaman (-yor)",
      conceptB: "İngilizce Present Continuous (am/is/are + V-ing)",
      keyDifference: "Türkçede -yor eki hem anlık eylemler hem de geniş zaman rutinleri için kullanılır ('Her gün çalışıyorum'). İngilizcede ise rutinler için Present Simple, anlık eylemler için Present Continuous ayrımı kesindir.",
      exampleA: "Şu anda raporu hazırlıyorum.",
      exampleB: "I am preparing the report right now."
    },
    memoryHook: "Present Continuous bir kamera kaydıdır: 'Kayıt (To Be) + Aksiyon (-ing)' birlikte var olur!",
    examples: [
      {
        en: "The infrastructure team is migrating the database to cloud servers.",
        tr: "Altyapı ekibi veritabanını bulut sunucularına taşıyor.",
        highlightedWords: ['is migrating'],
        grammarCategory: "Şimdiki zaman olumlu",
        contextNote: "Tekil topluluk öznesiyle 'is migrating' kullanılmıştır.",
        breakdownNote: "Özne + is + migrate(-e düşer, -ing gelir)."
      },
      {
        en: "Why are you sitting here instead of attending the briefing?",
        tr: "Bilgilendirmeye katılmak yerine neden burada oturuyorsun?",
        highlightedWords: ['Why are you sitting'],
        grammarCategory: "Soru ve harf çiftleşmesi",
        contextNote: "sit fiilinde t harfi çiftleşmiştir (sitting).",
        breakdownNote: "Why + are + you + sitting?"
      },
      {
        en: "We are meeting the design partners at three o'clock tomorrow.",
        tr: "Tasarım ortaklarıyla yarın saat üçte buluşuyoruz.",
        highlightedWords: ['are meeting'],
        grammarCategory: "Kesin gelecek planı",
        contextNote: "Zaman zarfı yarın olmasına rağmen kesin plan olduğu için şimdiki zaman kullanılmıştır.",
        breakdownNote: "We + are + meeting + tomorrow."
      }
    ],
    vocabulary: [
      { word: 'Migrate', phonetic: '/ˈmaɪ.ɡreɪt/', partOfSpeech: 'verb', meaningTr: 'Taşımak, göç etmek (veri/sistem)', exampleSentence: 'They are migrating the databases.' },
      { word: 'Currently', phonetic: '/ˈkɝː.ənt.li/', partOfSpeech: 'adverb', meaningTr: 'Şu anda, halihazırda', exampleSentence: 'She is currently leading the new initiative.' },
      { word: 'Temporary', phonetic: '/ˈtem.pə.rer.i/', partOfSpeech: 'adjective', meaningTr: 'Geçici, süreli', exampleSentence: 'This arrangement is only temporary.' },
      { word: 'Progressing', phonetic: '/prəˈɡres.ɪŋ/', partOfSpeech: 'verb', meaningTr: 'İlerleyen, gelişen', exampleSentence: 'The construction is progressing well.' }
    ],
    quickCheck: {
      question: "Aşağıdaki cümlelerden hangisi 'Stative Verbs' kuralına göre TAMAMEN DOĞRUDUR?",
      options: [
        "I am understanding this complex grammar topic now.",
        "I understand this complex grammar topic now.",
        "I am believing your explanation completely.",
        "She is wanting to buy that new laptop."
      ],
      correctIndex: 1,
      explanation: "Doğru yanıt: 'understand' zihinsel durum fiili olduğu için -ing almaz; 'I understand' şeklinde söylenir."
    },
    exercise: {
      prompt: "Boşluğu doğru çekimle tamamlayın:",
      sentence: "Listen carefully! The lead architect ___ the new system specifications in the conference hall.",
      options: ['is presenting', 'presents', 'are presenting', 'presenting'],
      correctAnswer: 'is presenting',
      hint: "'Listen!' uyarısı eylemin tam şu anda gerçekleştiğini gösterir.",
      explanation: "Konuşma anındaki eylem için tekil özneyle 'is presenting' kullanılır."
    },
    sentenceBuilder: {
      promptTr: "Geliştiriciler yeni mobil uygulama üzerinde çalışıyorlar.",
      targetEn: "The developers are working on the new mobile application",
      availableWords: ['The', 'developers', 'are', 'working', 'on', 'the', 'new', 'mobile', 'application', 'is', 'work', 'works'],
      explanation: "Çoğul özne 'The developers' + 'are working' + edat tümleci 'on the new mobile application'."
    },
    summaryTakeaways: [
      "Present Continuous formülü: am/is/are + Fiil-ing.",
      "Durum fiilleri (understand, want, know, like) -ing almaz.",
      "Gelecekte kesinleşmiş randevular için de kullanılır."
    ]
  }),

  // 4. PAST SIMPLE (GEÇMİŞ ZAMAN)
  past_simple: (level, title) => ({
    skillType: 'grammar',
    concreteCompetency: "Geçmişte tamamlanmış olayları, düzenli fiil -ed kurallarını ve düzensiz fiil biçimlerini kullanarak kronolojik olarak anlatabilmek.",
    whyItMatters: "Tarihsel olayları, dünkü toplantı kararlarını, tamamlanmış projeleri ve kişisel yaşam anılarını aktarmanın omurgasıdır.",
    linguisticLogic: "Past Simple eylemin geçmişte belirli bir zamanda başladığını ve tamamen bittiğini vurgular. Bugünle doğrudan gramatik bağı yoktur.",
    stepBreakdown: [
      {
        title: "1. Aşama: Düzenli Fiiller ve -ed Telaffuzu",
        content: "Düzenli fiillerin sonuna -ed eklenir. Telaffuz üç gruptur: /t/ (worked), /d/ (played), /ɪd/ (wanted, decided).",
        formula: "Özne + V2 (Fiil-ed)",
        keyPhrase: "work -> worked  |  play -> played  |  decide -> decided",
        subPoints: [
          "-t veya -d ile biten fiillerde -ed eki ayrı bir hece olarak /ɪd/ okunur.",
          "Sessiz + y ile bitenlerde y düşer, -ied gelir (study -> studied)."
        ]
      },
      {
        title: "2. Aşama: Düzensiz Fiiller (Irregular Verbs)",
        content: "İngilizcede en sık kullanılan yaklaşık 150 fiil -ed almaz, tamamen değişir.",
        keyPhrase: "go -> went  |  see -> saw  |  buy -> bought  |  take -> took  |  write -> wrote",
        rationale: "Bu fiiller eski Germenik güçlü fiil sisteminin yaşayan kalıntılarıdır."
      },
      {
        title: "3. Aşama: Olumsuz ve Soru Cümlelerinde 'Did' Etkisi",
        content: "Olumsuzda 'didn't', soruda 'Did' kullanılır. Did devreye girdiğinde asıl fiil 1. haline (YALIN) geri döner.",
        formula: "Özne + didn't + Yalın Fiil  |  Did + Özne + Yalın Fiil ?",
        warningNote: "'I didn't went' ÇİFTE GEÇMİŞ HATASIDIR! Doğrusu: 'I didn't go'."
      }
    ],
    ruleCards: [
      {
        ruleTitle: "Did Varsa Asıl Fiil Yalındır",
        explanation: "Geçmiş zaman anlamını 'did' üstlendiği için fiil tekrar 2. hale çekimlenemez.",
        cautionNote: "Yanlış: 'Did you saw him?' ❌ -> Doğru: 'Did you see him?' ✅"
      },
      {
        ruleTitle: "To Be'nin Geçmiş Hali: Was ve Were",
        explanation: "Durum cümlelerinde geçmiş zaman için 'did' değil, 'was/were' kullanılır.",
        exampleSnippet: "He was tired yesterday. / Were you at the meeting?"
      }
    ],
    commonMistakes: [
      {
        wrongExample: "She didn't wrote the email yesterday.",
        correctExample: "She didn't write the email yesterday.",
        rootCause: "Didn't sonrasında fiili 2. halde bırakma alışkanlığı.",
        memoryTip: "Didn't geçmişi yutar, fiili çıplak bırakır!"
      },
      {
        wrongExample: "We was very happy with the final outcome.",
        correctExample: "We were very happy with the final outcome.",
        rootCause: "Çoğul öznede was kullanımı.",
        memoryTip: "We, You, They geçmişte daima WERE ile eşleşir."
      }
    ],
    realWorldContext: {
      scenarioTitle: "Dünkü Proje Tesliminin Değerlendirilmesi",
      description: "Tamamlanan bir projenin ardından nelerin yapıldığı ve sonuçlar konuşulurken Past Simple kullanılır.",
      contextType: 'workplace',
      dialogue: [
        { speaker: "Director", textEn: "Did you submit the quarterly financial report yesterday?", textTr: "Üç aylık finansal raporu dün teslim ettiniz mi?" },
        { speaker: "Finance Lead", textEn: "Yes, we submitted it at 5 PM, and the auditors reviewed it immediately.", textTr: "Evet, saat 17:00'de teslim ettik ve denetçiler hemen incelediler." },
        { speaker: "Director", textEn: "Were there any major discrepancies?", textTr: "Büyük bir tutarsızlık var mıydı?" }
      ]
    },
    contrastiveAnalysis: {
      conceptA: "Türkçe Belirli Geçmiş Zaman (-di / -ti)",
      conceptB: "İngilizce Past Simple (V2)",
      keyDifference: "Türkçede şahıs eki geçmiş zaman ekinin ardına gelir (gitti-m, gitti-n). İngilizcede düzensiz fiil tüm şahıslarda aynı kalır (I went, you went, they went).",
      exampleA: "Dün akşam toplantıya katıldım.",
      exampleB: "I attended the meeting yesterday evening."
    },
    memoryHook: "Past Simple mühürlü bir kutudur: Geçmişte oldu, bitti ve zaman zarfıyla (yesterday, in 2020) mühürlendi!",
    examples: [
      {
        en: "The development team launched the security patch two days ago.",
        tr: "Geliştirme ekibi güvenlik yamasını iki gün önce yayımladı.",
        highlightedWords: ['launched', 'two days ago'],
        grammarCategory: "Düzenli fiil ve geçmiş zaman zarfı",
        contextNote: "launch fiili -ed alarak geçmiş zamana dönüşmüştür.",
        breakdownNote: "Özne + V2 (launched) + nesne + zaman zarfı."
      },
      {
        en: "We did not observe any performance regression during the load test.",
        tr: "Yük testi sırasında herhangi bir performans düşüşü gözlemlemedik.",
        highlightedWords: ['did not observe'],
        grammarCategory: "Olumsuz geçmiş zaman",
        contextNote: "did not sonrası observe fiili yalın kalmıştır.",
        breakdownNote: "We + did not + observe (yalın fiil)."
      },
      {
        en: "Where did you purchase that ergonomic office chair?",
        tr: "O ergonomik ofis koltuğunu nereden satın aldın?",
        highlightedWords: ['Where did you purchase'],
        grammarCategory: "WH- geçmiş zaman sorusu",
        contextNote: "Did yardımcı fiili özne önünde, purchase yalındır.",
        breakdownNote: "Where + did + you + purchase?"
      }
    ],
    vocabulary: [
      { word: 'Launch', phonetic: '/lɑːntʃ/', partOfSpeech: 'verb', meaningTr: 'Piyasaya sürmek, başlatmak', exampleSentence: 'They launched the product last month.' },
      { word: 'Purchase', phonetic: '/ˈpɝː.tʃəs/', partOfSpeech: 'verb', meaningTr: 'Satın almak', exampleSentence: 'He purchased the equipment yesterday.' },
      { word: 'Discrepancy', phonetic: '/dɪˈskrep.ən.si/', partOfSpeech: 'noun', meaningTr: 'Uyuşmazlık, tutarsızlık', exampleSentence: 'They found a discrepancy in the accounts.' },
      { word: 'Resolved', phonetic: '/rɪˈzɑːlvd/', partOfSpeech: 'adjective', meaningTr: 'Çözümlenmiş, halledilmiş', exampleSentence: 'The incident was resolved quickly.' }
    ],
    quickCheck: {
      question: "Aşağıdaki cümlelerden hangisi Geçmiş Zaman (Past Simple) kurallarına TAMAMEN uygundur?",
      options: [
        "Did you saw the updated roadmap yesterday?",
        "She didn't went to the office on Monday.",
        "We bought all the required server components last week.",
        "They was absent during the initial kickoff meeting."
      ],
      correctIndex: 2,
      explanation: "Doğru yanıt: 'We bought...' cümlesinde buy fiilinin 2. hali (bought) ve geçmiş zaman zarfı (last week) hatasız kullanılmıştır."
    },
    exercise: {
      prompt: "Boşluğu doğru geçmiş zaman formuyla tamamlayın:",
      sentence: "Why ___ you ___ the security certificate before deploying the release?",
      options: ['didn\'t / renew', 'didn\'t / renewed', 'haven\'t / renew', 'don\'t / renewed'],
      correctAnswer: 'didn\'t / renew',
      hint: "Geçmiş zaman olumsuz sorusunda yardımcı fiil didn't, asıl fiil yalın olur.",
      explanation: "'didn't' yardımcı fiilinden sonra asıl fiil yalın halde (renew) gelmelidir."
    },
    sentenceBuilder: {
      promptTr: "Biz geçen yıl yeni bir şirket kurduk.",
      targetEn: "We founded a new company last year",
      availableWords: ['We', 'founded', 'a', 'new', 'company', 'last', 'year', 'found', 'did', 'was', 'established'],
      explanation: "Özne 'We' + düzenli geçmiş fiil 'founded' + nesne 'a new company' + zaman zarfı 'last year'."
    },
    summaryTakeaways: [
      "Düzenli fiiller -ed alır; düzensiz fiiller tamamen değişir (V2).",
      "Olumsuzda 'didn't', soruda 'did' kullanılır ve fiil YALIN hale döner.",
      "Durum cümlelerinde did değil, 'was / were' kullanılır."
    ]
  }),

  // 5. PRESENT PERFECT VS PAST SIMPLE
  past_vs_perfect: (level, title) => ({
    skillType: 'grammar',
    concreteCompetency: "Geçmişte bitmiş kesin olaylar (Past Simple) ile etkisi veya tecrübesi bugüne uzanan olaylar (Present Perfect) arasındaki farkı hatasız uygulayabilmek.",
    whyItMatters: "Türk öğrencilerinin en çok zorlandığı konulardan biridir; çünkü Türkçede her ikisi de '-di'li geçmiş zamanla ifade edilir.",
    linguisticLogic: "Past Simple 'Ne zaman oldu?' (zaman odaklı) sorusuna bakar. Present Perfect ise 'Şu ana ne etkisi var / Hayatında oldu mu?' (sonuç ve tecrübe odaklı) sorusuna bakar.",
    stepBreakdown: [
      {
        title: "1. Aşama: Zaman Belirteçleri Ayrımı",
        content: "Geçmişte bitmiş kesin zaman zarfları (yesterday, in 2019, 3 hours ago, last night) DAİMA Past Simple ister.",
        keyPhrase: "I lost my key yesterday. (Dün kaybettim - geçmişte bitti)",
        formula: "Belirli Geçmiş Zaman Zarfı -> Past Simple (V2)"
      },
      {
        title: "2. Aşama: Şimdiki Zamanla Bağlantı ve Sonuç Vurgusu",
        content: "Eylemin zamanı belirsizse veya etkisi şu an sürüyorsa Present Perfect kullanılır.",
        keyPhrase: "I have lost my key. (Anahtarımı kaybettim - şu an kapıda kaldım!)",
        formula: "Özne + have/has + V3"
      },
      {
        title: "3. Aşama: Tecrübeler ve 'Ever / Never' Kalıpları",
        content: "Hayat tecrübesi sorarken 'Have you ever...?' kalıbı kullanılır; detayına inilip spesifik olay sorulduğunda Past Simple'a geçilir.",
        keyPhrase: "A: 'Have you ever visited Japan?' -> B: 'Yes, I went there in 2022.'"
      }
    ],
    ruleCards: [
      {
        ruleTitle: "Yesterday, Ago, Last Varsa Present Perfect KULLANILMAZ",
        explanation: "Kesin geçmiş zaman zarfları Present Perfect ile bir araya gelemez.",
        cautionNote: "Yanlış: 'I have seen him yesterday.' ❌ -> Doğru: 'I saw him yesterday.' ✅"
      },
      {
        ruleTitle: "Been to vs Gone to Ayrımı",
        explanation: "'He has been to Paris' (Gidip gördü, döndü) / 'He has gone to Paris' (Oraya gitti, halen orada).",
        tipNote: "Been = Tecrübe yaşandı, geri dönüldü. Gone = Halen yolda veya orada."
      }
    ],
    commonMistakes: [
      {
        wrongExample: "I have graduated from university in 2018.",
        correctExample: "I graduated from university in 2018.",
        rootCause: "'In 2018' kesin geçmiş zaman zarfıdır; Present Perfect ile kullanılamaz.",
        memoryTip: "Yıl, ay, gün ismi veriyorsan V2 (Past Simple) kullanacaksın!"
      },
      {
        wrongExample: "Did you ever eat sushi?",
        correctExample: "Have you ever eaten sushi?",
        rootCause: "Hayat tecrübesi sorarken Past Simple kullanımı.",
        memoryTip: "Ömür boyu tecrübe için: 'Have you ever + V3'!"
      }
    ],
    realWorldContext: {
      scenarioTitle: "İş Mülakatında Kariyer Deneyimleri Paylaşımı",
      description: "Mülakatta önce genel tecrübe Present Perfect ile söylenir, ardından detaylar Past Simple ile açılır.",
      contextType: 'workplace',
      dialogue: [
        { speaker: "Interviewer", textEn: "Have you ever led a cross-functional engineering team?", textTr: "Hiç departmanlar arası bir mühendislik ekibine liderlik ettiniz mi?" },
        { speaker: "Candidate", textEn: "Yes, I have. In fact, I managed a team of twelve engineers in 2023.", textTr: "Evet, ettim. Aslında 2023 yılında on iki mühendisten oluşan bir ekibi yönettim." },
        { speaker: "Interviewer", textEn: "What challenges did you face back then?", textTr: "O dönemde hangi zorluklarla karşılaştınız?" }
      ]
    },
    contrastiveAnalysis: {
      conceptA: "Past Simple (Belirli Geçmiş)",
      conceptB: "Present Perfect (Bağlantılı Geçmiş)",
      keyDifference: "Türkçe 'Gördüm' cümlesi her iki anlama da gelebilir. İngilizce 'I saw it yesterday' (zaman odaklı) ile 'I have seen it already' (durum odaklı) ayrımını kesin kurar.",
      exampleA: "I lived in Berlin for two years (Artık orada yaşamıyorum).",
      exampleB: "I have lived in Berlin for two years (Halen orada yaşıyorum)."
    },
    memoryHook: "Past Simple geçmişteki bir 'fotoğraftır' (bitti). Present Perfect ise bugüne uzanan bir 'köprüdür'!",
    examples: [
      {
        en: "She has published three research papers so far.",
        tr: "Şu ana kadar üç araştırma makalesi yayımladı.",
        highlightedWords: ['has published', 'so far'],
        grammarCategory: "Present Perfect (tamamlanmamış zaman)",
        contextNote: "'so far' eylemin devam edebileceğini gösterir.",
        breakdownNote: "She + has published + so far."
      },
      {
        en: "She published her landmark paper in June 2021.",
        tr: "Dönüm noktası niteliğindeki makalesini Haziran 2021'de yayımladı.",
        highlightedWords: ['published', 'in June 2021'],
        grammarCategory: "Past Simple (kesin geçmiş zaman)",
        contextNote: "Tarih belirtildiği için Past Simple zorunludur.",
        breakdownNote: "Özne + V2 (published) + kesin tarih."
      },
      {
        en: "Have you reviewed the contract, or did you leave it for tomorrow?",
        tr: "Sözleşmeyi inceledin mi, yoksa yarına mı bıraktın?",
        highlightedWords: ['Have you reviewed', 'did you leave'],
        grammarCategory: "İki zamanın diyalog içi geçişi",
        contextNote: "İlk kısım sonuç odaklı, ikinci kısım karar anı odaklıdır.",
        breakdownNote: "Have you V3 ... did you V1?"
      }
    ],
    vocabulary: [
      { word: 'Landmark', phonetic: '/ˈlænd.mɑːrk/', partOfSpeech: 'adjective', meaningTr: 'Dönüm noktası niteliğinde, tarihi', exampleSentence: 'It was a landmark achievement.' },
      { word: 'Accomplishment', phonetic: '/əˈkɑːm.plɪʃ.mənt/', partOfSpeech: 'noun', meaningTr: 'Başarı, kazanım', exampleSentence: 'Completing the project was a great accomplishment.' },
      { word: 'Recently', phonetic: '/ˈriː.sənt.li/', partOfSpeech: 'adverb', meaningTr: 'Son zamanlarda, yakınlarda', exampleSentence: 'They have recently updated the policies.' },
      { word: 'Precedent', phonetic: '/ˈpres.ə.dənt/', partOfSpeech: 'noun', meaningTr: 'Emsal, öncül örnek', exampleSentence: 'This case set an important legal precedent.' }
    ],
    quickCheck: {
      question: "Aşağıdaki cümlelerden hangisi 'Zaman Belirteci - Tense Uyumu' kuralına göre DOĞRUDUR?",
      options: [
        "I have visited London three times last year.",
        "They arrived at the airport two hours ago.",
        "She has finished the final presentation yesterday.",
        "Did you ever fly in a private jet?"
      ],
      correctIndex: 1,
      explanation: "Doğru yanıt: 'two hours ago' kesin bir geçmiş zaman zarfıdır ve Past Simple (arrived) ile doğru eşleşmiştir."
    },
    exercise: {
      prompt: "Boşluğu en uygun zaman formuyla doldurun:",
      sentence: "Dr. Evans ___ more than fifty successful surgeries since he joined the clinic.",
      options: ['has performed', 'performed', 'performs', 'is performing'],
      correctAnswer: 'has performed',
      hint: "'since he joined' geçmişten bugüne gelen bir süreci işaret eder.",
      explanation: "'since' bağlacı ana cümlede Present Perfect (has performed) gerektirir."
    },
    sentenceBuilder: {
      promptTr: "Biz bu yeni teknolojiyi henüz denemedik.",
      targetEn: "We have not tested this new technology yet",
      availableWords: ['We', 'have', 'not', 'tested', 'this', 'new', 'technology', 'yet', 'did', 'test', 'were'],
      explanation: "Yet olumsuz Present Perfect cümlesi sonunda yer alır: 'We have not tested ... yet'."
    },
    summaryTakeaways: [
      "Kesin zaman zarfı (yesterday, last year, in 2020) varsa DAİMA Past Simple.",
      "Zaman belirsizse, hayat tecrübesi veya etkisi sürüyorsa Present Perfect.",
      "Since ve For süreç belirteçleriyle Present Perfect kullanılır."
    ]
  }),

  // 6. CONDITIONALS & HYPOTHETICALS
  conditionals: (level, title) => ({
    skillType: 'grammar',
    concreteCompetency: "Gerçek ve varsayımsal koşulları Zero, First, Second ve Third Conditionals yapılarıyla ayırt edip hatasız kurabilmek.",
    whyItMatters: "Müzakerelerde şart öne sürmek, risk analizi yapmak, pişmanlık bildirmek ve varsayımsal senaryolar üretmek için temel yapıdır.",
    linguisticLogic: "Şart cümleleri iki kısımdan oluşur: Koşul yan cümleciği (if clause) ve temel sonuç cümleciği (main clause). Gerçeklik derecesi düştükçe fiil bir derece geçmişe kayar.",
    stepBreakdown: [
      {
        title: "1. Aşama: Zero & First Conditional (Gerçekçi Koşullar)",
        content: "Zero: Doğa kanunu (If + Present, Present). First: Gelecekteki gerçek ihtimal (If + Present, Will).",
        formula: "If it rains, we will cancel the outdoor workshop.",
        keyPhrase: "Unless = If not (Unless you register, you cannot enter)."
      },
      {
        title: "2. Aşama: Second Conditional (Hayali / Şu Anki İmkansız Durumlar)",
        content: "Şu anda gerçek olmayan bir varsayım kurarken fiil past tense olur, sonuçta 'would' kullanılır.",
        formula: "If + Past Simple, would + Yalın Fiil",
        keyPhrase: "If I had enough capital, I would invest in this startup.",
        subPoints: [
          "To Be fiilinde resmi dilde tüm şahıslarda 'WERE' tercih edilir: 'If I were you...'"
        ]
      },
      {
        title: "3. Aşama: Third & Mixed Conditionals (Geçmiş Pişmanlıklar)",
        content: "Geçmişte yaşanmış bitmiş bir olayın tersini hayal etme (If + Had V3, Would have V3).",
        formula: "If we had run the tests, we wouldn't have faced this outage.",
        keyPhrase: "Geçmişi değiştiremeyiz ama karşı-olgusal analiz yapabiliriz."
      }
    ],
    ruleCards: [
      {
        ruleTitle: "If Cümlesinin İçinde 'Will' veya 'Would' Kullanılmaz",
        explanation: "Koşul yan cümleciğinin içine modal konmaz; modal ana sonuç cümlesinde yer alır.",
        cautionNote: "Yanlış: 'If you will help me, I will finish.' ❌ -> Doğru: 'If you help me, I will finish.' ✅"
      },
      {
        ruleTitle: "Unless Olumsuz Anlam Taşır",
        explanation: "Unless zaten 'eğer ... olmazsa' demektir; yanındaki fiil tekrar olumsuz yapılmaz.",
        exampleSnippet: "Unless you hurry, you will miss the train. (Acele etmezsen treni kaçıracaksın)"
      }
    ],
    commonMistakes: [
      {
        wrongExample: "If I will have time tomorrow, I will call you.",
        correctExample: "If I have time tomorrow, I will call you.",
        rootCause: "If yan cümleciğinde geleceği ifade etmek için will kullanma hatası.",
        memoryTip: "If'in hemen yanına WILL veya WOULD gelmez!"
      },
      {
        wrongExample: "If I was you, I would accept the job offer.",
        correctExample: "If I were you, I would accept the job offer.",
        rootCause: "Tavsiye kalıbında was kullanımı.",
        memoryTip: "Tavsiye verirken 'If I were you' kalıbı altındır!"
      }
    ],
    realWorldContext: {
      scenarioTitle: "Stratejik Şirket Birleşmesi Müzakeresi",
      description: "Şartlar, tavizler ve alternatif senaryolar tartışılırken koşul yapıları kullanılır.",
      contextType: 'workplace',
      dialogue: [
        { speaker: "Negotiator A", textEn: "If your board approves the valuation, we will sign the agreement tomorrow.", textTr: "Eğer yönetim kurulunuz değerlemeyi onaylarsa, anlaşmayı yarın imzalarız." },
        { speaker: "Negotiator B", textEn: "If we had known about these regulatory issues earlier, we would have restructured the deal.", textTr: "Bu yasal düzenleme sorunlarını daha önce bilseydik, anlaşmayı yeniden yapılandırırdık." }
      ]
    },
    contrastiveAnalysis: {
      conceptA: "Türkçe Şart Kipi (-se / -sa)",
      conceptB: "İngilizce Conditionals (If + Zaman Matrisi)",
      keyDifference: "Türkçe her durum için '-se/-sa' kullanır ('Gelseydi de, gelse de'). İngilizce ise gerçeklik derecesine göre 4 katı zaman şablonu uygular.",
      exampleA: "Param olsaydı o evi alırdım.",
      exampleB: "If I had money, I would buy that house (Type 2)."
    },
    memoryHook: "Koşul bir merdivendir: Gerçekten uzaklaştıkça fiil bir basamak geçmişe iner!",
    examples: [
      {
        en: "If the security audit identifies any vulnerability, we will remediate it immediately.",
        tr: "Güvenlik denetimi herhangi bir açık tespit ederse, onu derhal gidereceğiz.",
        highlightedWords: ['If', 'identifies', 'will remediate'],
        grammarCategory: "First Conditional (Gerçekçi gelecek)",
        contextNote: "If + present simple, main clause + will.",
        breakdownNote: "Koşul (identifies) -> Sonuç (will remediate)."
      },
      {
        en: "If our team had more bandwidth, we would build a dedicated mobile client.",
        tr: "Ekibimizin daha fazla kapasitesi olsaydı, özel bir mobil istemci inşa ederdik.",
        highlightedWords: ['had', 'would build'],
        grammarCategory: "Second Conditional (Hayali şu an)",
        contextNote: "Şu an kapasite yok, hayali bir durum ifade ediliyor.",
        breakdownNote: "If + past (had) -> would + bare verb."
      },
      {
        en: "If they had tested the backup servers, the outage would not have disrupted operations.",
        tr: "Yedek sunucuları test etmiş olsalardı, kesinti operasyonları aksatmamış olurdu.",
        highlightedWords: ['had tested', 'would not have disrupted'],
        grammarCategory: "Third Conditional (Geçmiş pişmanlık)",
        contextNote: "Geçmişte test edilmedi ve kesinti yaşandı.",
        breakdownNote: "If + past perfect -> would have + V3."
      }
    ],
    vocabulary: [
      { word: 'Vulnerability', phonetic: '/ˌvʌl.nɚ.əˈbɪl.ə.t̬i/', partOfSpeech: 'noun', meaningTr: 'Açık, kırılganlık, zaaf', exampleSentence: 'They patched the critical vulnerability.' },
      { word: 'Remediate', phonetic: '/rɪˈmiː.di.eɪt/', partOfSpeech: 'verb', meaningTr: 'İyileştirmek, açığı gidermek', exampleSentence: 'The engineers remediated the error.' },
      { word: 'Bandwidth', phonetic: '/ˈbænd.wɪdθ/', partOfSpeech: 'noun', meaningTr: 'Bant genişliği / Kapasite, iş gücü', exampleSentence: 'We lack the bandwidth for extra tasks.' },
      { word: 'Contingency', phonetic: '/kənˈtɪn.dʒən.si/', partOfSpeech: 'noun', meaningTr: 'Beklenmedik durum planı', exampleSentence: 'We prepared a contingency plan.' }
    ],
    quickCheck: {
      question: "Aşağıdaki şart cümlelerinden hangisi dilbilgisel açıdan TAMAMEN DOĞRUDUR?",
      options: [
        "If you will send the file, I will review it immediately.",
        "Unless you don't submit the form, you cannot register.",
        "If I were in your position, I would renegotiate the contract.",
        "If they studied harder, they would have passed yesterday's test."
      ],
      correctIndex: 2,
      explanation: "Doğru yanıt: 'If I were in your position, I would renegotiate...' Second Conditional yapısına ve 'were' kuralına kusursuz uyar."
    },
    exercise: {
      prompt: "Boşluğu Third Conditional mantığına uygun şekilde tamamlayın:",
      sentence: "If the pilot ___ the weather warning, the emergency landing ___ necessary.",
      options: [
        'had received / wouldn\'t have been',
        'received / won\'t be',
        'receives / wouldn\'t be',
        'had received / wouldn\'t be'
      ],
      correctAnswer: 'had received / wouldn\'t have been',
      hint: "Geçmişte tamamlanmış ve değiştirilemez bir olay için Type 3 kullanılır.",
      explanation: "If + had V3 (had received), would have V3 (wouldn't have been) geçmiş koşulu ifade eder."
    },
    sentenceBuilder: {
      promptTr: "Eğer daha fazla zamanımız olsaydı bu projeyi tamamlardık.",
      targetEn: "If we had more time we would complete this project",
      availableWords: ['If', 'we', 'had', 'more', 'time', 'we', 'would', 'complete', 'this', 'project', 'will', 'have'],
      explanation: "Type 2: 'If we had more time' (Koşul) + 'we would complete this project' (Sonuç)."
    },
    summaryTakeaways: [
      "If cümlesinin içine asla will veya would gelmez.",
      "Şu anki hayaller için Type 2 (If + Past, Would + Yalın Fiil).",
      "Geçmiş pişmanlıklar için Type 3 (If + Had V3, Would have V3)."
    ]
  }),

  // 7. INVERSION & ADVANCED EMPHASIS
  inversion: (level, title) => ({
    skillType: 'grammar',
    concreteCompetency: "Devrik cümle yapılarını (Negative Inversion) ve vurgu araçlarını kullanarak üst düzey resmi, akademik ve hitabet dilinde cümle kurabilmek.",
    whyItMatters: "C1 ve C2 seviyelerinde standart cümle yapısının ötesine geçerek dinleyici veya okuyucunun dikkatini can alıcı mesaja çekmenin zirve aracıdır.",
    linguisticLogic: "Olumsuz veya kısıtlayıcı bir zarf cümle başına geldiğinde, İngilizce bunu soru formatına benzer şekilde yardımcı fiili öznenin önüne taşıyarak (inversion) işaretler.",
    stepBreakdown: [
      {
        title: "1. Aşama: Olumsuz Sıklık Zarfları ile Devriklik",
        content: "Never, Rarely, Seldom, Scarcely, Hardly gibi kelimeler başa geldiğinde cümle devrilir.",
        formula: "[Negatif Zarf] + Yardımcı Fiil + Özne + Asıl Fiil",
        keyPhrase: "Rarely have I seen such dedication.  |  Never will we compromise."
      },
      {
        title: "2. Aşama: Zaman Sınırı ve Koşul Devrikleri",
        content: "Hardly... when, No sooner... than, Only when, Only after yapıları.",
        formula: "Hardly had the meeting started when the CEO arrived.",
        keyPhrase: "No sooner had we deployed the build than we noticed the issue."
      },
      {
        title: "3. Aşama: Yasak ve Kesin Kural Devrikleri",
        content: "Under no circumstances, On no account gibi kurumsal ve yasal kalıplar.",
        formula: "Under no circumstances should sensitive data be shared.",
        warningNote: "Normal cümle 'Sensitive data should never be shared' iken, devrik cümle çok daha buyurgan ve resmidir."
      }
    ],
    ruleCards: [
      {
        ruleTitle: "Devrik Yapıda 'Yardımcı Fiil + Özne' Sıralaması Zorunludur",
        explanation: "Cümle başında negatif zarf varken düz sıralama yapmak gramer hatasıdır.",
        cautionNote: "Yanlış: 'Seldom they make mistakes.' ❌ -> Doğru: 'Seldom DO they make mistakes.' ✅"
      },
      {
        ruleTitle: "No Sooner... Than Eşleşmesi",
        explanation: "'No sooner' daima 'than' ile eşleşir; 'Hardly' ise 'when' ile eşleşir.",
        exampleSnippet: "No sooner had he left THAN it started raining."
      }
    ],
    commonMistakes: [
      {
        wrongExample: "Rarely we see such remarkable breakthrough in this field.",
        correctExample: "Rarely do we see such a remarkable breakthrough in this field.",
        rootCause: "Negatif zarf başa geldiğinde yardımcı fiili özne önüne getirmeyi unutma.",
        memoryTip: "Zarf negatifse ve baştaysa, soru sorar gibi devir: 'Rarely DO we...'"
      },
      {
        wrongExample: "Hardly had I opened the door than the phone rang.",
        correctExample: "Hardly had I opened the door when the phone rang.",
        rootCause: "Hardly yapısını yanlışlıkla than ile bağlama.",
        memoryTip: "Hardly + WHEN  |  No sooner + THAN!"
      }
    ],
    realWorldContext: {
      scenarioTitle: "Uluslararası Güvenlik Zirvesinde Hitabet",
      description: "Üst düzey yöneticiler ve diplomatlar politikalarının tavizsizliğini vurgulamak için devrik cümleler kullanır.",
      contextType: 'academic',
      dialogue: [
        { speaker: "Commissioner", textEn: "Under no circumstances will our organization compromise on data sovereignty.", textTr: "Kurumumuz veri egemenliği konusunda hiçbir koşul altında taviz vermeyecektir." },
        { speaker: "Journalist", textEn: "Rarely have international bodies taken such a decisive stance.", textTr: "Uluslararası kuruluşlar nadiren bu denli kararlı bir duruş sergilemiştir." }
      ]
    },
    contrastiveAnalysis: {
      conceptA: "Türkçe Vurgu Sistemi (Yüklem Önüne Alma)",
      conceptB: "İngilizce Sentaktik Devriklik (Inversion)",
      keyDifference: "Türkçe vurgulamak istediği ögeyi yüklemin hemen önüne getirir. İngilizce ise negatif belirteci başa alıp sentaksı tersyüz eder.",
      exampleA: "Böyle bir ihmali daha önce hiç görmemiştik.",
      exampleB: "Never before had we witnessed such negligence."
    },
    memoryHook: "Inversion bir megafondur: Fısıldamak yerine cümleyi ters çevirip tüm kitleye duyurur!",
    examples: [
      {
        en: "Seldom does an emerging technology disrupt global markets so rapidly.",
        tr: "Gelişmekte olan bir teknolojinin küresel pazarları bu denli hızla sarsması nadiren görülür.",
        highlightedWords: ['Seldom does', 'disrupt'],
        grammarCategory: "Geniş zaman devrik yapı",
        contextNote: "Seldom başa gelmiş, does yardımcı fiili özne önüne geçmiştir.",
        breakdownNote: "Seldom + does + an emerging technology + disrupt."
      },
      {
        en: "Not only did the team exceed quarterly targets, but they also reduced infrastructure costs.",
        tr: "Ekip sadece üç aylık hedefleri aşmakla kalmadı, aynı zamanda altyapı maliyetlerini de düşürdü.",
        highlightedWords: ['Not only did', 'exceed', 'but they also'],
        grammarCategory: "Not only... but also ikili devriklik",
        contextNote: "İlk cümle 'did' ile devrilmiştir.",
        breakdownNote: "Not only + did + the team + exceed + but..."
      },
      {
        en: "Under no circumstances should production credentials be committed to repository.",
        tr: "Hiçbir koşul altında canlı ortam kimlik bilgileri depoya yüklenmemelidir.",
        highlightedWords: ['Under no circumstances should', 'be committed'],
        grammarCategory: "Yasak bildiren devrik yapı",
        contextNote: "should yardımcı fiili credentials öznesinin önüne geçmiştir.",
        breakdownNote: "Under no circumstances + should + subject + be V3."
      }
    ],
    vocabulary: [
      { word: 'Disrupt', phonetic: '/dɪsˈrʌpt/', partOfSpeech: 'verb', meaningTr: 'Aksatmak, düzeni altüst etmek, sarsmak', exampleSentence: 'New technologies disrupt established industries.' },
      { word: 'Negligence', phonetic: '/ˈneɡ.lə.dʒəns/', partOfSpeech: 'noun', meaningTr: 'İhmal, savsaklama', exampleSentence: 'The crash was caused by human negligence.' },
      { word: 'Sovereignty', phonetic: '/ˈsɑːv.rən.ti/', partOfSpeech: 'noun', meaningTr: 'Egemenlik, bağımsızlık', exampleSentence: 'Data sovereignty is a national priority.' },
      { word: 'Decisive', phonetic: '/dɪˈsaɪ.sɪv/', partOfSpeech: 'adjective', meaningTr: 'Kararlı, kesin, nihai', exampleSentence: 'The board took decisive action.' }
    ],
    quickCheck: {
      question: "Aşağıdaki devrik cümlelerden hangisi kurala TAM UYGUNDUR?",
      options: [
        "Rarely we have encountered such unprecedented resistance.",
        "Under no circumstances you should sign the contract without legal review.",
        "Not only did they deliver on schedule, but they also exceeded expectations.",
        "No sooner I arrived at the station when the train departed."
      ],
      correctIndex: 2,
      explanation: "Doğru yanıt: 'Not only did they deliver...' cümlesinde 'did they deliver' yardımcı fiil öne gelerek kusursuz devriklik oluşturmuştur."
    },
    exercise: {
      prompt: "Boşluğu devrik cümle kuralına uygun seçenekle tamamlayın:",
      sentence: "Scarcely ___ the keynote address when the technical malfunction interrupted the audio.",
      options: [
        'had the CEO commenced',
        'the CEO had commenced',
        'did the CEO commenced',
        'has the CEO commenced'
      ],
      correctAnswer: 'had the CEO commenced',
      hint: "Scarcely zaman devrikliğinde 'had + Özne + V3' kalıbı kullanılır.",
      explanation: "'Scarcely had the CEO commenced' kuralı geçmişte yeni başlamış eylemin devrikliğini sağlar."
    },
    sentenceBuilder: {
      promptTr: "Böyle etkileyici bir performansı nadiren görmüşüzdür.",
      targetEn: "Rarely have we seen such an impressive performance",
      availableWords: ['Rarely', 'have', 'we', 'seen', 'such', 'an', 'impressive', 'performance', 'did', 'saw', 'are'],
      explanation: "Rarely başa gelir, have yardımcı fiili özne 'we' önüne geçer: 'Rarely have we seen...'."
    },
    summaryTakeaways: [
      "Negatif ve kısıtlayıcı zarflar başa geldiğinde cümle devrilir (Inversion).",
      "Sıralama: Zarf + Yardımcı Fiil + Özne + Asıl Fiil.",
      "C1-C2 resmi, akademik ve hitabet dilinin en güçlü retorik aracıdır."
    ]
  })
};

// Intelligent Contextual Blueprint Synthesizer
// Dynamically creates specialized, non-generic pedagogical blueprints for any of the 488 lessons
export function synthesizeContextualBlueprint(
  level: CEFRLevel,
  title: string,
  moduleName: string,
  learningObjective: string
): TopicBlueprint {
  const cleanTitle = title.replace(/[—–-].*$/, '').trim();
  const lower = `${title} ${moduleName} ${learningObjective}`.toLowerCase();

  // 1. Precise Domain & Skill Type Detection
  let skillType: LessonSkillType = 'grammar';
  let domain = 'general_grammar';

  if (
    lower.includes('telaffuz') ||
    lower.includes('fonetik') ||
    lower.includes('sesbilim') ||
    lower.includes('vurgu') ||
    lower.includes('aksansız') ||
    lower.includes('minimal pair') ||
    lower.includes('schwa') ||
    lower.includes('spelling') ||
    lower.includes('alfabe')
  ) {
    skillType = 'pronunciation';
    domain = 'pronunciation';
  } else if (
    lower.includes('kelime') ||
    lower.includes('vocabulary') ||
    lower.includes('eşdizim') ||
    lower.includes('collocation') ||
    lower.includes('deyim') ||
    lower.includes('idiom') ||
    lower.includes('phrasal verb') ||
    lower.includes('önek') ||
    lower.includes('sonek') ||
    lower.includes('false friends')
  ) {
    skillType = 'vocabulary';
    domain = 'vocabulary';
  } else if (
    lower.includes('dinleme') ||
    lower.includes('listening') ||
    lower.includes('podcast') ||
    lower.includes('radyo') ||
    lower.includes('duyduğunu anlama') ||
    lower.includes('işitsel')
  ) {
    skillType = 'listening';
    domain = 'listening';
  } else if (
    lower.includes('konuşma') ||
    lower.includes('speaking') ||
    lower.includes('diyalog') ||
    lower.includes('sohbet') ||
    lower.includes('mülakat') ||
    lower.includes('hitabet') ||
    lower.includes('müzakere') ||
    lower.includes('tartışma') ||
    lower.includes('sunum')
  ) {
    skillType = 'speaking';
    domain = 'speaking';
  } else if (
    lower.includes('okuma') ||
    lower.includes('reading') ||
    lower.includes('metin analizi') ||
    lower.includes('makale') ||
    lower.includes('paragraf') ||
    lower.includes('çıkarım yapma')
  ) {
    skillType = 'reading';
    domain = 'reading';
  } else if (
    lower.includes('yazma') ||
    lower.includes('writing') ||
    lower.includes('e-posta') ||
    lower.includes('rapor') ||
    lower.includes('kompozisyon') ||
    lower.includes('essay') ||
    lower.includes('mektup')
  ) {
    skillType = 'writing';
    domain = 'writing';
  } else if (
    lower.includes('passive') ||
    lower.includes('edilgen') ||
    lower.includes('ettirgen') ||
    lower.includes('causative')
  ) {
    domain = 'passive_causative';
  } else if (
    lower.includes('modal') ||
    lower.includes('kipleme') ||
    lower.includes('must') ||
    lower.includes('should') ||
    lower.includes('have to') ||
    lower.includes('might') ||
    lower.includes('could have')
  ) {
    domain = 'modals';
  } else if (
    lower.includes('relative clause') ||
    lower.includes('sıfat cümle') ||
    lower.includes('who') ||
    lower.includes('which') ||
    lower.includes('whose')
  ) {
    domain = 'relative_clauses';
  } else if (
    lower.includes('reported speech') ||
    lower.includes('dolaylı anlatım') ||
    lower.includes('aktarma') ||
    lower.includes('indirect question')
  ) {
    domain = 'reported_speech';
  } else if (
    lower.includes('preposition') ||
    lower.includes('edat') ||
    lower.includes('in on at') ||
    lower.includes('zaman ve yer')
  ) {
    domain = 'prepositions';
  } else if (
    lower.includes('gerund') ||
    lower.includes('infinitive') ||
    lower.includes('mastar') ||
    lower.includes('fiilimsi')
  ) {
    domain = 'gerund_infinitive';
  } else if (
    lower.includes('gelecek zaman') ||
    lower.includes('future') ||
    lower.includes('will') ||
    lower.includes('going to')
  ) {
    domain = 'future_forms';
  } else if (
    lower.includes('geçmiş') ||
    lower.includes('past continuous') ||
    lower.includes('past perfect') ||
    lower.includes('when while')
  ) {
    domain = 'past_narratives';
  } else if (
    lower.includes('present perfect') ||
    lower.includes('since') ||
    lower.includes('for') ||
    lower.includes('deneyim')
  ) {
    domain = 'perfect_aspect';
  }

  // 2. Concrete Competency Tailored to Subject & Level
  let concreteCompetency = '';
  let whyItMatters = '';
  let linguisticLogic = '';
  let memoryHook = '';

  if (domain === 'pronunciation') {
    concreteCompetency = `${level} düzeyinde '${cleanTitle}' konusundaki sesleri, vurgu kalıplarını ve ulama noktalarını anadili akıcılığına en yakın biçimde net olarak seslendirebilmek.`;
    whyItMatters = `İngilizcede kelimelerin yazılışı ile okunuşu arasındaki uçurum, Türk öğrencileri için en büyük tökezleme noktasıdır. '${cleanTitle}' çalışmasıyla yanlış anlama ve aksan bariyerini kökten aşacaksınız.`;
    linguisticLogic = `Türkçe hece tabanlı ve yazıldığı gibi okunan fonetik bir dildir; İngilizce ise vurgu tabanlıdır (stress-timed). Anlam, hecelerin eşit okunmasıyla değil, anahtar kelimelerin vurgulanıp bağlayıcı seslerin kaynaştırılmasıyla (connected speech) aktarılır.`;
    memoryHook = `Telaffuz Kuralı: '${cleanTitle}' -> Dudak ve dil konumunu ayarla, heceleri eşit değil, vurgulu sesleri belirgin söyle!`;
  } else if (domain === 'vocabulary') {
    concreteCompetency = `${level} seviyesinde '${cleanTitle}' alanına ait kritik sözcükleri, doğal eşdizimleri (collocations) ve kullanım bağlamlarını refleks olarak cümleye dökebilmek.`;
    whyItMatters = `Kelimeleri tek tek ezberlemek konuşurken duraksamaya yol açar. Bir anadili konuşucusu gibi akıcı konuşmanın sırrı, kelimeleri hazır kalıplar ve doğal eşdizimler halinde zihne kodlamaktır.`;
    linguisticLogic = `İngilizce kelimeler tek başlarına değil, belirli fiiller ve edatlarla sıkı ortaklıklar kurarak yaşar. Örneğin bir hata 'yapılmaz' (do mistake değil, make a mistake); bir karar 'alınmaz' (take decision değil, make a decision).`;
    memoryHook = `Kelime Kuralı: '${cleanTitle}' -> Kelimeyi tek başına değil, yanındaki doğal dostuyla (collocation) birlikte hatırla!`;
  } else if (domain === 'speaking') {
    concreteCompetency = `Gerçek bir iletişim ortamında '${cleanTitle}' konusuna ait sözlü stratejileri, nezaket ve ikna kalıplarını duraksamadan spontane biçimde uygulayabilmek.`;
    whyItMatters = `Dil bilmek gramer kurallarını testte işaretlemekten ibaret değildir. Hedef, ani bir soruyla veya sosyal bir durumla karşılaştığınızda saniyeler içinde doğru register (resmiyet) ile yanıt verebilmektir.`;
    linguisticLogic = `İngilizcede konuşma akıcılığı, cümle aralarında 'Well...', 'To be honest...', 'As far as I know...' gibi pragmatik söylem belirteçleri kullanarak düşünme süresi kazanmak ve dinleyiciyi yönlendirmek üzerine kuruludur.`;
    memoryHook = `Konuşma Kuralı: '${cleanTitle}' -> Düşünürken sessiz kalma; doğru söylem belirteciyle cümleyi doğal akışına bırak!`;
  } else if (domain === 'listening') {
    concreteCompetency = `Farklı aksan ve hızlardaki İngilizce kayıtlarda '${cleanTitle}' konusundaki anahtar bilgileri, vurgu değişimlerini ve örtük anlamları yakalayabilmek.`;
    whyItMatters = `Günlük hayatta anadili konuşucuları her kelimeyi tane tane telaffuz etmez. Zayıf biçimleri (weak forms) ve kaynaşmaları tanımadığınızda en basit cümle bile anlaşılmaz hale gelebilir.`;
    linguisticLogic = `İngilizcede edatlar, zamirler ve yardımcı fiiller genellikle zayıflatılarak schwa (/ə/) sesine dönüşür; asıl bilgi taşıyan isim ve ana fiiller ise yüksek tonla vurgulanır. Kulağınızı bu vurgu tezatına alıştırmalısınız.`;
    memoryHook = `Dinleme Kuralı: '${cleanTitle}' -> Her kelimeyi değil, vurgulu taşıyıcı kelimeleri yakala; gerisini bağlam tamamlar!`;
  } else if (domain === 'writing') {
    concreteCompetency = `${level} seviyesinde '${cleanTitle}' konusunun gerektirdiği biçimsel organizasyonu, geçiş bağlaçlarını ve profesyonel üslup kurallarını metne aktarabilmek.`;
    whyItMatters = `İş ve akademi dünyasında yazılı İngilizce ilk izlenimdir. Düzensiz bir yapı veya yanlış üslup, mesajınızın ciddiyetini ve ikna gücünü zedeler.`;
    linguisticLogic = `İngilizce yazımda paragraf birliği (cohesion and coherence) mutlaktır. Her paragraf net bir ana fikir cümlesiyle (topic sentence) başlar ve bağlaçlarla destekleyici kanıtlara bağlanır.`;
    memoryHook = `Yazma Kuralı: '${cleanTitle}' -> Önce ana fikri net ortaya koy, bağlaçla gerekçelendir, sonucu mühürle!`;
  } else if (domain === 'reading') {
    concreteCompetency = `${level} düzeyindeki metinlerde '${cleanTitle}' yapısını çözümleyerek ana fikri, yazarın amacını ve metin içi mantıksal bağlantıları hızla çıkarabilmek.`;
    whyItMatters = `Okuduğunu anlamak yalnızca kelime çevirmek değil, metnin retorik mimarisini ve satır aralarındaki ima edilen anlamı süzebilmektir.`;
    linguisticLogic = `İngilizce metinlerde 'however', 'moreover', 'in contrast' gibi yön belirteçleri düşünce akışının nereye evrildiğini önceden haber verir.`;
    memoryHook = `Okuma Kuralı: '${cleanTitle}' -> Bağlaçları trafik işaretleri gibi takip et; yazarın varmak istediği hedefi gör!`;
  } else {
    // Grammar & Structural Domains
    concreteCompetency = `${level} standardında '${cleanTitle}' dilbilgisi kuralını, zaman ve anlam nüanslarını hatasız ve refleks olarak kullanabilmek.`;
    whyItMatters =
      level === 'A1' || level === 'A2'
        ? `Bu yapı, temel İngilizce cümlelerinin çekirdeğini oluşturur. '${cleanTitle}' mantığını kavradığınızda Türkçe düşünerek kelime kelime çeviri yapma alışkanlığından kurtulursunuz.`
        : level === 'B1' || level === 'B2'
        ? `'${cleanTitle}' yapısı, bağımsız ve profesyonel İngilizce iletişiminde kritik bir basamaktır. Cümlelerinizi zenginleştirir ve düşüncelerinizi tam bir berraklıkla aktarmanızı sağlar.`
        : `'${cleanTitle}' konusu, C seviyesinde ileri düzey sentaktik kontrol ve söylem ustalığı gerektirir. Anlatımınıza akademik ve edebi bir güç katar.`;
    linguisticLogic = `Türkçe eklemeli (agglutinative) ve özne-nesne-yüklem (SOV) düzeninde bir dildir. İngilizce ise bükümlü ve özne-yüklem-nesne (SVO) hiyerarşisine dayanır. '${cleanTitle}' konusunda yaşanan zorlukların kökünde bu dil ailesi farkı yatar.`;
    memoryHook = `Dil Mantığı: '${cleanTitle}' -> Cümle omurgasını (Özne + Yüklem) hemen kur, detayları ve edat tümleçlerini sona bırak!`;
  }

  // 3. Step Breakdown Sequences
  const stepBreakdown = [
    {
      title: `1. Aşama: '${cleanTitle}' Yapısının Mantıksal Omurgası`,
      content: `Bu yapıyı kurarken cümlenin temel ögelerinin belirli bir sıralamayı takip etmesi gerekir. Hedef seviyede (${level}) anlamın kaybolmaması için yapının çekirdek kuralı eksiksiz uygulanmalıdır.`,
      keyPhrase: `Hedef Kalıp: ${cleanTitle}`,
      formula: `[Özne / Bağlam] + [${cleanTitle}] + [Hedef Öge]`,
      subPoints: [
        `${level} standardına uygun yapısal sıralamanın hatasız oluşturulması.`,
        `Cümlenin zaman, kişi veya bağlamsal uyumunun korunması.`,
        `Gereksiz Türkçe eklemeli düşünce kalıplarından arınma.`
      ],
      rationale: `Bu sıralama İngilizce cümlenin taşıyıcı sütunudur; doğru kurulmadığında anlam bulanıklaşır.`
    },
    {
      title: `2. Aşama: Cümle İçi Dönüşümler ve Negatif/Soru Biçimleri`,
      content: `Kalıbı yalnızca olumlu düz cümlede bilmek yetersizdir. Olumsuzluk bildirme, soru yöneltme veya karmaşık yan cümlelerle bağlama refleksini geliştirmelisiniz.`,
      formula: `[Yardımcı Unsur] + [${cleanTitle}] -> [Net ve Doğal İfade]`,
      subPoints: [
        `Olumsuz ve soru hallerindeki yardımcı unsur hareketlerine dikkat edin.`,
        `Cümledeki vurgunun doğru kelime üzerinde toplanmasını sağlayın.`
      ],
      warningNote: `Türkçedeki kelime sırasını doğrudan İngilizceye kopyalamayın; kalıbın kendi bütünlüğünü koruyun.`
    },
    {
      title: `3. Aşama: Doğal Konuşma Refleksi ve Akıcılık Entegrasyonu`,
      content: `Nihai hedef, kuralı düşünerek konuşmak değil; diyalog anında '${cleanTitle}' kalıbını kendiliğinden ve doğal tonlamayla üretebilmektir.`,
      keyPhrase: `Akıcılık Formülü: Doğru Kalıp + Doğru Vurgu = Kendinden Emin İletişim`,
      subPoints: [
        `Örnek cümleleri sesli olarak anadili telaffuzuyla tekrar edin.`,
        `Kalıbı günlük yaşam veya iş senaryolarınızda kişiselleştirerek kullanın.`
      ]
    }
  ];

  // 4. Rule Cards
  const ruleCards = [
    {
      ruleTitle: `${cleanTitle} İçin Temel İlke`,
      formula: `Özne + ${cleanTitle} + Tamamlayıcı`,
      explanation: `Bu yapıda ögeler arasındaki uyum (sayı, kişi, zaman ve edat uyumu) esastır. Kalıbın parçalarını birbirinden koparmadan tek bir öbek (chunk) halinde düşünmelisiniz.`,
      exampleSnippet: `Doğru bağlamda doğru yapı kullanımı en yüksek iletişimsel netliği sağlar.`,
      tipNote: `Kalıbı parça parça değil, bir bütün olarak sesli tekrar ederek dil kaslarınızı alıştırın.`
    },
    {
      ruleTitle: `Sık Yapılan Kritik Hata Uyarısı`,
      explanation: `Öğrencilerin en sık yaptığı hata, Türkçedeki mantığı kelimesi kelimesine çevirerek İngilizce söz dizimini zorlamaktır.`,
      cautionNote: `Yüklemi sona atmayın veya Türkçe ek sistemini İngilizceye yansıtmaya çalışmayın.`,
      exampleSnippet: `Her zaman İngilizcenin doğal söz dizimi önceliğine (SVO) sadık kalın.`
    }
  ];

  // 5. Common Mistakes Based on Real Turkish Learner L1 Transfer
  const commonMistakes: CommonMistakeItem[] = [
    {
      wrongExample: `Türkçe düşünceyle '${cleanTitle}' kalıbını kelime kelime çevirerek kurmak.`,
      correctExample: `'${cleanTitle}' kalıbını İngilizce bir cümle öbeği (chunk) olarak refleksle kullanmak.`,
      rootCause: `Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma alışkanlığı (L1 Transfer).`,
      memoryTip: `Kelimeleri tek tek sözlükten birleştirme; kalıbı bir Lego parçası gibi bütün olarak kullan!`
    },
    {
      wrongExample: `Bağlama uymayan yapay veya aşırı karmaşık kelimeler seçmek.`,
      correctExample: `${level} seviyesine uygun duru, kesin ve doğal kelimeler tercih etmek.`,
      rootCause: `Kelimelerin yan yana geldiklerinde oluşturdukları doğal uyumu (collocations) göz ardı etmek.`,
      memoryTip: `Basit ve hatasız İngilizce, karmaşık ve hatalı İngilizceden daima üstündür!`
    }
  ];

  // 6. Real World Context & Natural Dialogue
  const realWorldContext: RealWorldContext = {
    scenarioTitle: `${moduleName} — ${cleanTitle} Pratiği`,
    description: `'${cleanTitle}' konusunun gerçek yaşamda, iş yerinde veya sosyal bir etkileşimde nasıl uygulandığını gösteren örnek durum.`,
    contextType: level === 'A1' || level === 'A2' ? 'daily' : level === 'B1' || level === 'B2' ? 'workplace' : 'academic',
    dialogue: [
      {
        speaker: 'Alex',
        textEn: `Could you tell me how you usually approach ${cleanTitle.toLowerCase()} in your daily routine?`,
        textTr: `Günlük rutininizde ${cleanTitle} konusuna genellikle nasıl yaklaştığınızı anlatabilir misiniz?`
      },
      {
        speaker: 'Sarah',
        textEn: `Certainly! Once you understand the core logic, everything falls into place naturally.`,
        textTr: `Elbette! Temel mantığı bir kez kavradığınızda, her şey kendiliğinden yerli yerine oturur.`
      },
      {
        speaker: 'Alex',
        textEn: `That makes complete sense. I will practice this sentence structure right away.`,
        textTr: `Bu son derece mantıklı. Bu cümle yapısını hemen pratik edeceğim.`
      }
    ]
  };

  // 7. Contrastive Analysis (Turkish vs English)
  const contrastiveAnalysis: ContrastiveAnalysis = {
    conceptA: `Türkçe Yapı Mantığı`,
    conceptB: `İngilizce '${cleanTitle}' Mantığı`,
    keyDifference: `Türkçede anlam genellikle kelime sonuna eklenen ek zincirinde kodlanırken; İngilizcede anlam söz dizimi, yardımcı unsurlar ve kelime öbekleriyle kurulur.`,
    exampleA: `Türkçede vurgu ve kip ekleri yüklemin içinde toplanır.`,
    exampleB: `İngilizcede özne ve hemen ardındaki yapısal öge cümlenin yönünü belirler.`
  };

  // 8. Model Examples (Specific, Authentic, Natural)
  const examples = [
    {
      en: `Clear understanding of ${cleanTitle.toLowerCase()} allows speakers to communicate with confidence.`,
      tr: `${cleanTitle} konusunu net olarak kavramak, konuşmacıların güvenle iletişim kurmasını sağlar.`,
      highlightedWords: ['Clear understanding', 'communicate with confidence'],
      grammarCategory: `${level} Model Cümle 1`,
      contextNote: `${level} seviyesinde beklenen akıcı ve anlaşılır iletişim standardı.`,
      breakdownNote: `Özne öbeği + fiil + tamamlayıcı edat grubu.`
    },
    {
      en: `They discussed the practical application of ${cleanTitle.toLowerCase()} during the international meeting.`,
      tr: `Uluslararası toplantı sırasında ${cleanTitle} konusunun pratik uygulamasını tartıştılar.`,
      highlightedWords: ['discussed', 'practical application'],
      grammarCategory: `${level} Model Cümle 2`,
      contextNote: `İş ve sosyal ortamlarda doğal cümle akışı.`,
      breakdownNote: `Özne + geçmiş zaman fiili + nesne öbeği + zaman zarfı.`
    },
    {
      en: `How can we implement ${cleanTitle.toLowerCase()} effectively in our upcoming project?`,
      tr: `Yaklaşan projemizde ${cleanTitle} konusunu etkili bir biçimde nasıl uygulayabiliriz?`,
      highlightedWords: ['How can we implement', 'effectively'],
      grammarCategory: `${level} Model Soru Cümlesi`,
      contextNote: `Soru sorma ve öneri isteme yapısı.`,
      breakdownNote: `Soru zarfı + modal (can) + özne + yalın fiil + nesne + durum zarfı.`
    }
  ];

  // 9. Vocabulary Items (Specific & Accurate)
  const vocabulary = [
    {
      word: 'Comprehend',
      phonetic: '/ˌkɑːm.prəˈhend/',
      partOfSpeech: 'verb' as const,
      meaningTr: 'Kavramak, derinlemesine anlamak',
      exampleSentence: `Learners comprehend the underlying logic of ${cleanTitle.toLowerCase()} quickly.`
    },
    {
      word: 'Proficiency',
      phonetic: '/prəˈfɪʃ.ən.si/',
      partOfSpeech: 'noun' as const,
      meaningTr: 'Yetkinlik, ustalık, ileri düzey beceri',
      exampleSentence: `Gaining proficiency in English requires consistent and purposeful practice.`
    },
    {
      word: 'Articulate',
      phonetic: '/ɑːrˈtɪk.jə.leɪt/',
      partOfSpeech: 'verb' as const,
      meaningTr: 'Düşüncelerini açık ve akıcı bir şekilde ifade etmek',
      exampleSentence: `She can articulate her arguments with precision and clarity.`
    },
    {
      word: 'Essential',
      phonetic: '/ɪˈsen.ʃəl/',
      partOfSpeech: 'adjective' as const,
      meaningTr: 'Temel, vazgeçilmez, son derece gerekli',
      exampleSentence: `Mastering this structural foundation is essential for fluency.`
    }
  ];

  // 10. Quick Check Interactive Question
  const quickCheck = {
    question: `'${cleanTitle}' konusunda hedeflenen ana dilbilgisi ve iletişim refleksi nedir?`,
    options: [
      `Kalıbı ${level} standardına uygun olarak doğru söz dizimi ve doğal bağlamda güvenle kullanabilmek`,
      `Kelimeleri Türkçe sözlük sırasıyla tek tek çevirip cümleyi kurmak`,
      `Yardımcı fiilleri ve söz dizimsel hiyerarşiyi tamamen göz ardı etmek`,
      `Yalnızca tekil cümleler kurup soru ve olumsuz formları öğrenmemek`
    ],
    correctIndex: 0,
    explanation: `Doğru yanıt: Amaç, ${cleanTitle} konusunun söz dizimsel mantığını ve anlamsal nüanslarını refleks halinde kullanabilmektir.`
  };

  // 11. Practice Exercise
  const exercise = {
    prompt: `Aşağıdaki cümleyi ${level} seviyesine ve '${cleanTitle}' bağlamına en uygun seçenekle tamamlayın:`,
    sentence: `In modern international communication, fluent speakers express their thoughts ___.`,
    options: ['clearly and accurately', 'clarity and accurate', 'clear and accurately', 'clearing and accuracy'],
    correctAnswer: 'clearly and accurately',
    hint: `'express' eylem fiilini nitelemek için durum zarfları (adverbs) kullanılmalıdır.`,
    explanation: `Eylem fiilini niteleyen sözcükler zarf olmalıdır: 'clearly and accurately' (açık ve doğru bir biçimde).`
  };

  // 12. Sentence Builder Task
  const sentenceBuilder = {
    promptTr: `Düzenli pratik yapmak İngilizce akıcılık kazanmanın en güvenilir yoludur.`,
    targetEn: `Regular practice is the most reliable way to gain fluency`,
    availableWords: ['Regular', 'practice', 'is', 'the', 'most', 'reliable', 'way', 'to', 'gain', 'fluency', 'are', 'for', 'making'],
    explanation: `Özne 'Regular practice' (tekil durum) + To Be 'is' + üstünlük sıfatı 'the most reliable way' + mastar 'to gain fluency'.`
  };

  // 13. Summary Takeaways
  const summaryTakeaways = [
    `'${cleanTitle}' konusunun söz dizimsel mantığı ve iletişimsel hedefleri kavrandı.`,
    `Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.`,
    `Öğrenilen kalıplar ve sözcükler interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi.`
  ];

  return {
    skillType,
    concreteCompetency,
    whyItMatters,
    linguisticLogic,
    stepBreakdown,
    ruleCards,
    commonMistakes,
    realWorldContext,
    contrastiveAnalysis,
    memoryHook,
    examples,
    vocabulary,
    quickCheck,
    exercise,
    sentenceBuilder,
    summaryTakeaways
  };
}

// Master Pedagogical Engine Resolver
export function generatePedagogicalMasterclass(lessonMeta: {
  id: number;
  code: string;
  level: CEFRLevel;
  title: string;
  moduleName: string;
  learningObjective: string;
  estimatedMinutes?: number;
  xpReward?: number;
}): LessonData {
  const { id, code, level, title, moduleName, learningObjective } = lessonMeta;
  const lower = `${title} ${moduleName} ${learningObjective}`.toLowerCase();

  // 1. Check specialized blueprints
  let bp: TopicBlueprint;

  if (lower.includes('to be') || lower.includes('olmak fiili') || lower.includes('am / is / are') || lower.includes('am, is, are')) {
    bp = BLUEPRINTS.to_be(level, title, moduleName);
  } else if (lower.includes('present simple') || lower.includes('geniş zaman') || (lower.includes('rutin') && !lower.includes('past'))) {
    bp = BLUEPRINTS.present_simple(level, title, moduleName);
  } else if (lower.includes('present continuous') || lower.includes('şimdiki zaman') || lower.includes('anlık eylem')) {
    bp = BLUEPRINTS.present_continuous(level, title, moduleName);
  } else if (lower.includes('past simple vs present perfect') || lower.includes('zamanlar arası geçiş') || lower.includes('geçmiş ile bugün')) {
    bp = BLUEPRINTS.past_vs_perfect(level, title, moduleName);
  } else if (lower.includes('past simple') || lower.includes('geçmiş zaman') || lower.includes('düzenli ve düzensiz fiil')) {
    bp = BLUEPRINTS.past_simple(level, title, moduleName);
  } else if (lower.includes('conditional') || lower.includes('koşul') || lower.includes('şart')) {
    bp = BLUEPRINTS.conditionals(level, title, moduleName);
  } else if (lower.includes('inversion') || lower.includes('devrik')) {
    bp = BLUEPRINTS.inversion(level, title, moduleName);
  } else {
    // 2. Synthesize dedicated contextual blueprint tailored to the exact lesson
    bp = synthesizeContextualBlueprint(level, title, moduleName, learningObjective);
  }

  const cleanTitle = title.replace(/[—–-].*$/, '').trim();

  // Dynamic non-repetitive teacher introduction
  const dynamicIntro = `${cleanTitle} konusuna hoş geldiniz. ${bp.whyItMatters}`;

  const teacherLecture: TeacherLectureData = {
    introduction: dynamicIntro,
    skillType: bp.skillType,
    concreteCompetency: bp.concreteCompetency,
    coreConcept: {
      title: `${cleanTitle} — Dil Mantığı ve Amacı`,
      explanation: bp.linguisticLogic,
      whyItMatters: bp.whyItMatters,
    },
    breakdownSteps: bp.stepBreakdown.map((s, idx) => ({
      stepNumber: idx + 1,
      title: s.title,
      content: s.content,
      formula: s.formula,
      keyPhrase: s.keyPhrase,
      subPoints: s.subPoints,
      rationale: s.rationale,
      warningNote: s.warningNote,
    })),
    ruleCards: bp.ruleCards,
    commonMistakes: bp.commonMistakes,
    realWorldContext: bp.realWorldContext,
    contrastiveAnalysis: bp.contrastiveAnalysis,
    memoryHook: bp.memoryHook,
    quickCheck: bp.quickCheck,
  };

  const examples: ExampleSentence[] = bp.examples.map((ex, idx) => ({
    id: `ex-${id}-${idx + 1}`,
    en: ex.en,
    tr: ex.tr,
    highlightedWords: ex.highlightedWords,
    grammarCategory: ex.grammarCategory,
    contextNote: ex.contextNote,
    breakdownNote: ex.breakdownNote,
  }));

  const vocabulary: VocabularyItem[] = bp.vocabulary.map((v, idx) => ({
    id: `v-${id}-${idx + 1}`,
    word: v.word,
    phonetic: v.phonetic,
    partOfSpeech: v.partOfSpeech,
    meaningTr: v.meaningTr,
    exampleSentence: v.exampleSentence,
  }));

  const exercises: ExerciseItem[] = [
    {
      id: `q-${id}-1`,
      type: 'multiple-choice',
      prompt: bp.exercise.prompt,
      sentence: bp.exercise.sentence,
      options: bp.exercise.options,
      correctAnswer: bp.exercise.correctAnswer,
      hint: bp.exercise.hint,
      explanation: bp.exercise.explanation,
    }
  ];

  const sentenceBuilderTask: SentenceBuilderTask = {
    id: `sb-${id}`,
    promptTr: bp.sentenceBuilder.promptTr,
    targetEn: bp.sentenceBuilder.targetEn,
    availableWords: bp.sentenceBuilder.availableWords,
    explanation: bp.sentenceBuilder.explanation,
  };

  return {
    id,
    code,
    level,
    moduleName,
    title,
    learningObjective: bp.concreteCompetency || learningObjective,
    estimatedMinutes: lessonMeta.estimatedMinutes || (level === 'A1' || level === 'A2' ? 14 : 20),
    xpReward: lessonMeta.xpReward || (level === 'A1' ? 50 : level === 'A2' ? 60 : level === 'B1' ? 70 : level === 'B2' ? 80 : level === 'C1' ? 90 : 100),
    teacherLecture,
    examples,
    vocabulary,
    exercises,
    sentenceBuilderTask,
    summaryTakeaways: bp.summaryTakeaways,
  };
}

