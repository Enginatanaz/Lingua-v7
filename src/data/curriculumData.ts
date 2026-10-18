// LinguAAI V6.0 — Authoritative CEFR A1–C2 Full Curriculum Database (488 Lessons)
// Generated for complete pedagogical integrity and seamless system integration
import { CEFRLevel } from '../types/lesson';
import { LevelInfo, ModuleDef, CurriculumLessonDef, CurriculumValidationStatus } from '../types/curriculum';
import {
  classifyLessonType,
  deriveTargetStructures,
  deriveTargetVocabulary,
  deriveSkills,
  derivePrerequisitesAndNext,
} from '../services/curriculumArchitecture';

export const CEFR_LEVELS_INFO: Record<CEFRLevel, LevelInfo> = {
  A1: {
    id: 'A1',
    name: 'Beginner',
    titleTr: 'A1 — Başlangıç Seviyesi',
    tagline: 'Temel İletişim ve Günlük Hayat Temelleri',
    description: 'Kendini ve başkalarını tanıtabilme, temel gereksinimleri karşılamaya yönelik somut günlük ifadeleri ve çok basit cümleleri anlama ve kullanabilme becerisi.',
    overallGoal: 'Basit soru-cevaplarla temel ihtiyaçları ifade edebilmek ve günlük rutini anlatabilmek.',
    learningObjectives: [
      'Kendini, mesleğini, yaşını ve milliyetini tanıtabilme',
      'Temel durum ve varlık bildirimlerini (To Be, There is/are) doğru kullanabilme',
      'Günlük rutinleri ve alışkanlıkları Present Simple ile ifade edebilme',
      'Saatleri, günleri, temel sayıları ve yönleri sorup söyleyebilme',
      'Temel ihtiyaçları (sipariş, alışveriş, adres) ifade edebilme'
    ],
    assessmentTitle: 'A1 Seviye Sonu Yeterlilik Sınavı',
    assessmentDescription: 'Temel gramer doğruluğu, günlük diyalog anlama ve 500 temel kelime bilgisini ölçen 30 soruluk interaktif yeterlilik değerlendirmesi.',
    colorScheme: {
      bg: 'bg-emerald-50',
      text: 'text-emerald-700',
      border: 'border-emerald-200',
      badgeBg: 'bg-emerald-600',
      gradient: 'from-emerald-600 to-teal-700',
      accent: '#059669'
    }
  },
  A2: {
    id: 'A2',
    name: 'Elementary',
    titleTr: 'A2 — Temel Seviye',
    tagline: 'Geçmiş Deneyimler ve Sosyal Etkileşim',
    description: 'En çok kullanılan alanlarla ilgili basit cümleleri ve sık kullanılan ifadeleri anlayabilme (ör. çok temel kişisel ve ailevi bilgiler, alışveriş, yerel coğrafya, iş).',
    overallGoal: 'Geçmişte yaşanan olayları, geleceğe dair basit planları ve karşılaştırmaları akıcı bir şekilde aktarabilmek.',
    learningObjectives: [
      'Geçmiş olayları (Past Simple & Past Continuous) düzenli/düzensiz fiillerle anlatabilme',
      'Gelecek planlarını ve tahminleri (Going to vs Will) ayırt edebilme',
      'Sıfatların karşılaştırma ve üstünlük derecelerini (Comparative & Superlative) kullanabilme',
      'Zorunluluk, izin ve tavsiye bildiren temel modalları (Must, Have to, Should) uygulayabilme',
      'Kişisel deneyimleri (Present Perfect temelleri) zaman belirtmeksizin paylaşabilme'
    ],
    assessmentTitle: 'A2 Seviye Sonu Yeterlilik Sınavı',
    assessmentDescription: 'Zamanlar arası geçişler, geçmiş anlatımı ve seyahat senaryoları üzerine kurgulanmış kapsamlı değerlendirme.',
    colorScheme: {
      bg: 'bg-teal-50',
      text: 'text-teal-700',
      border: 'border-teal-200',
      badgeBg: 'bg-teal-600',
      gradient: 'from-teal-600 to-cyan-700',
      accent: '#0d9488'
    }
  },
  B1: {
    id: 'B1',
    name: 'Intermediate',
    titleTr: 'B1 — Orta Seviye (Eşik Seviyesi)',
    tagline: 'Bağımsız İletişim ve Fikir Belirtme',
    description: 'İş, okul ve boş zaman gibi tanıdık konularda standart dilin ana noktalarını anlayabilme. Hedef dilin konuşulduğu bölgede seyahat ederken ortaya çıkabilecek durumların çoğunda iletişim kurabilme.',
    overallGoal: 'Fikirleri gerekçelendirebilmek, soyut ve somut olayları birbirine bağlayarak akıcı paragraflar oluşturabilmek.',
    learningObjectives: [
      'Present Perfect ve Past Simple arasındaki ince zaman ve anlam farklarını hatasız uygulayabilme',
      'Gelecek ve şu anki varsayımsal durumları Conditionals (Type 1 & 2) ile ifade edebilme',
      'Bağlaçlar ve ilgi cümlecikleri (Relative Clauses) ile zengin birleşik cümleler kurabilme',
      'Başkalarının sözlerini (Reported Speech) kurallara uygun biçimde aktarabilme',
      'İş ortamında nezaket kalıplarını ve profesyonel görüş bildirme yapılarını kullanabilme'
    ],
    assessmentTitle: 'B1 Seviye Sonu Bağımsız Kullanıcı Sınavı',
    assessmentDescription: 'B1 bağımsız dil kullanıcısı standardında, fikir savunma ve olay akışı kurgulama testi.',
    colorScheme: {
      bg: 'bg-sky-50',
      text: 'text-sky-700',
      border: 'border-sky-200',
      badgeBg: 'bg-sky-600',
      gradient: 'from-sky-600 to-blue-700',
      accent: '#0284c7'
    }
  },
  B2: {
    id: 'B2',
    name: 'Upper Intermediate',
    titleTr: 'B2 — İleri Orta Seviye',
    tagline: 'Akıcı Tartışma ve Profesyonel İletişim',
    description: 'Somut ve soyut konuları içeren karmaşık metinlerin ana fikrini anlayabilme. Ana dili İngilizce olanlarla karşılıklı zorlanmadan doğal ve akıcı bir şekilde iletişim kurabilme.',
    overallGoal: 'Çeşitli konularda açık, ayrıntılı metinler üretebilmek ve güncel bir konunun olumlu ve olumsuz yönlerini tartışabilmek.',
    learningObjectives: [
      'Edilgen çatı (Passive Voice) ve ettirgen yapıları (Causatives) akademik ve profesyonel dilde ustalıkla kullanabilme',
      'Karmaşık şart cümlelerini (Third & Mixed Conditionals) ve pişmanlıkları (Wish clauses) ifade edebilme',
      'Modal fiillerle geçmişe dönük çıkarım ve tahminler (Must have, Can\'t have, Should have) yapabilme',
      'Akademik bağlaçlar ve söylem belirteçleri ile tutarlı ve mantıklı argümanlar geliştirebilme',
      'İş mülakatları, müzakereler ve resmi e-posta diplomasisinde uygun tonu tutturabilme'
    ],
    assessmentTitle: 'B2 Seviye Sonu Profesyonel Yeterlilik Sınavı',
    assessmentDescription: 'Uluslararası standartlarda (IELTS 6.0-6.5 / TOEFL 80+) akademik ve profesyonel tartışma yeterlilik simülasyonu.',
    colorScheme: {
      bg: 'bg-indigo-50',
      text: 'text-indigo-700',
      border: 'border-indigo-200',
      badgeBg: 'bg-indigo-600',
      gradient: 'from-indigo-600 to-violet-700',
      accent: '#4f46e5'
    }
  },
  C1: {
    id: 'C1',
    name: 'Advanced',
    titleTr: 'C1 — İleri Seviye',
    tagline: 'Akademik Yetkinlik ve Stratejik Söylem',
    description: 'Uzun, zorlu metinleri ve örtük anlamları kavrayabilme. Dili sosyal, akademik ve mesleki amaçlar için esnek ve etkili bir şekilde kullanabilme.',
    overallGoal: 'Karmaşık konularda iyi yapılandırılmış, ayrıntılı metinler üretebilmek ve kurumsal/akademik müzakereleri yönetebilmek.',
    learningObjectives: [
      'İstek kipi (Subjunctive Mood) ve devrik cümleler (Inversion) ile güçlü vurgular yapabilme',
      'Vurgu yapıları (Cleft Sentences) ve fronting ile söylemi stratejik olarak yönetebilme',
      'Akademik yumuşatma (Hedging) ve mesafeli tavır ile bilimsel argüman geliştirebilme',
      'Üst düzey sunumlar ve hitabet araçlarını (Tricolon, Anaphora) ustalıkla kullanabilme',
      'Kültürlerarası pragmatik incelikleri ve ima mekanizmalarını çözebilme'
    ],
    assessmentTitle: 'C1 İleri Seviye Yeterlilik Değerlendirmesi',
    assessmentDescription: 'İleri düzey retorik, karmaşık metin analizi ve yüksek seviyeli müzakere becerilerini ölçen değerlendirme.',
    colorScheme: {
      bg: 'bg-purple-50',
      text: 'text-purple-700',
      border: 'border-purple-200',
      badgeBg: 'bg-purple-600',
      gradient: 'from-purple-600 to-fuchsia-700',
      accent: '#9333ea'
    }
  },
  C2: {
    id: 'C2',
    name: 'Proficiency',
    titleTr: 'C2 — Ustalık Seviyesi',
    tagline: 'Anadili Düzeyinde Hakimiyet ve Üslup Kontrolü',
    description: 'Duyduğu ve okuduğu hemen hemen her şeyi kolaylıkla anlayabilme. Farklı sözlü ve yazılı kaynaklardan gelen bilgileri özetleyebilme, argümanları tutarlı bir sunumla yeniden yapılandırabilme.',
    overallGoal: 'En karmaşık durumlarda bile kendisini son derece akıcı, net ve ince anlam farklarını (nuance) belirterek ifade edebilmek.',
    learningObjectives: [
      'İroni, hiciv, edebi sanatlar ve kültürel alt metinleri anında çözümleyebilme',
      'Her türlü profesyonel, hukuki, felsefi ve bilimsel jargona anında adapte olabilme',
      'Doğal İngilizceye özgü yerel deyimsel söylem inceliklerini ve retorik araçları yönetebilme',
      'Zorlayıcı tartışmalarda ve kriz iletişiminde spontane, kusursuz ve ikna edici söz ustalığı sergileyebilme',
      'Metinlerdeki belirsizlikleri (Ambiguity) deşifre edip üslup çeşitliliğini anadili gibi kullanabilme'
    ],
    assessmentTitle: 'C2 Ustalık (Mastery) Nihai Yeterlilik Değerlendirmesi',
    assessmentDescription: 'En üst düzey bilişsel dil becerilerini ve tam teşekküllü söylem ustalığını belgeleyen nihai değerlendirme.',
    colorScheme: {
      bg: 'bg-amber-50',
      text: 'text-amber-700',
      border: 'border-amber-200',
      badgeBg: 'bg-amber-600',
      gradient: 'from-amber-600 to-orange-700',
      accent: '#d97706'
    }
  }
};

// 49 Modules across A1–C2 grouping all 488 lessons
export const CURRICULUM_MODULES: ModuleDef[] = [
  {
    "id": "mod-a1-1",
    "level": "A1",
    "title": "Tanışma, Alfabe ve Temel İletişim",
    "description": "Selamlaşma, kendini tanıtma, alfabe, sayılar ve kişisel bilgiler.",
    "order": 1,
    "iconName": "UserCheck",
    "lessonIds": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ]
  },
  {
    "id": "mod-a1-2",
    "level": "A1",
    "title": "Durum Cümleleri ve Varlık Bildirimi",
    "description": "To Be fiilinin tüm çekimleri, There is / There are ve konum edatları.",
    "order": 2,
    "iconName": "Building",
    "lessonIds": [
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20
    ]
  },
  {
    "id": "mod-a1-3",
    "level": "A1",
    "title": "Geniş Zaman ve Günlük Rutinler",
    "description": "Present Simple kuralları, günlük aktiviteler ve sıklık zarfları.",
    "order": 3,
    "iconName": "Clock",
    "lessonIds": [
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30
    ]
  },
  {
    "id": "mod-a1-4",
    "level": "A1",
    "title": "Nesneler, Sahiplik ve Niteleme",
    "description": "İşaret sıfatları (this/that), çoğul isimler ve iyelik sıfatları.",
    "order": 4,
    "iconName": "Package",
    "lessonIds": [
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40
    ]
  },
  {
    "id": "mod-a1-5",
    "level": "A1",
    "title": "Soru Sorma Becerileri ve Bilgi Edinme",
    "description": "WH- soru kelimeleri (Who, Where, When, Why, What) ve soru kalıpları.",
    "order": 5,
    "iconName": "HelpCircle",
    "lessonIds": [
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      50
    ]
  },
  {
    "id": "mod-a1-6",
    "level": "A1",
    "title": "Yetenekler ve İzin: Can & Can't",
    "description": "Fiziksel yetenekler, rica etme ve temel izin isteme ifadeleri.",
    "order": 6,
    "iconName": "Zap",
    "lessonIds": [
      51,
      52,
      53,
      54,
      55,
      56,
      57,
      58,
      59,
      60
    ]
  },
  {
    "id": "mod-a1-7",
    "level": "A1",
    "title": "Şimdiki Zaman: Present Continuous",
    "description": "Şu anda yapılan eylemleri anlatma ve fiil sonuna -ing ekleme kuralları.",
    "order": 7,
    "iconName": "PlayCircle",
    "lessonIds": [
      61,
      62,
      63,
      64,
      65,
      66,
      67,
      68,
      69,
      70
    ]
  },
  {
    "id": "mod-a1-8",
    "level": "A1",
    "title": "Yiyecek, İçecek ve Miktar Belirteçleri",
    "description": "Sayılabilen/sayılamayan isimler, Some/Any, Much/Many ve sipariş verme.",
    "order": 8,
    "iconName": "Coffee",
    "lessonIds": [
      71,
      72,
      73,
      74,
      75,
      76,
      77,
      78,
      79,
      80
    ]
  },
  {
    "id": "mod-a2-1",
    "level": "A2",
    "title": "Geçmiş Zaman: Düzenli ve Düzensiz Fiiller",
    "description": "Past Simple temelleri, -ed takısı telaffuzu ve sık kullanılan düzensiz fiiller.",
    "order": 1,
    "iconName": "History",
    "lessonIds": [
      81,
      82,
      83,
      84,
      85,
      86,
      87,
      88,
      89,
      90
    ]
  },
  {
    "id": "mod-a2-2",
    "level": "A2",
    "title": "Geçmişte Süregelen Olaylar & Zaman Bağlaçları",
    "description": "Was/Were + V-ing yapısı ve When/While bağlaçları ile olayları bağlama.",
    "order": 2,
    "iconName": "Film",
    "lessonIds": [
      91,
      92,
      93,
      94,
      95,
      96,
      97,
      98,
      99,
      100
    ]
  },
  {
    "id": "mod-a2-3",
    "level": "A2",
    "title": "Karşılaştırmalar ve Üstünlük: Comparative & Superlative",
    "description": "Sıfat dereceleri, as...as eşitlik kalıbı ve üstünlük anlatımı.",
    "order": 3,
    "iconName": "Scale",
    "lessonIds": [
      101,
      102,
      103,
      104,
      105,
      106,
      107,
      108,
      109,
      110
    ]
  },
  {
    "id": "mod-a2-4",
    "level": "A2",
    "title": "Gelecek Planları ve Tahminler: Going to vs Will",
    "description": "Planlanmış kararlar (Going to) ile anlık kararlar ve tahminler (Will).",
    "order": 4,
    "iconName": "Compass",
    "lessonIds": [
      111,
      112,
      113,
      114,
      115,
      116,
      117,
      118,
      119,
      120
    ]
  },
  {
    "id": "mod-a2-5",
    "level": "A2",
    "title": "Zorunluluk, Tavsiye ve Kurallar: Have to, Must, Should",
    "description": "Kişisel/yasal zorunluluklar, yasaklar ve tavsiye cümleleri.",
    "order": 5,
    "iconName": "AlertCircle",
    "lessonIds": [
      121,
      122,
      123,
      124,
      125,
      126,
      127,
      128,
      129,
      130
    ]
  },
  {
    "id": "mod-a2-6",
    "level": "A2",
    "title": "Deneyimler ve Yaşam Olayları: Present Perfect Temelleri",
    "description": "Have/Has + V3, Ever/Never kalıpları ve geçmiş tecrübeleri paylaşma.",
    "order": 6,
    "iconName": "Award",
    "lessonIds": [
      131,
      132,
      133,
      134,
      135,
      136,
      137,
      138,
      139,
      140
    ]
  },
  {
    "id": "mod-a2-7",
    "level": "A2",
    "title": "Seyahat, Ulaşım ve Yol Tarifi İletişimi",
    "description": "Havalimanı, otel rezervasyonu, yol sorma ve toplu taşıma iletişimi.",
    "order": 7,
    "iconName": "MapPin",
    "lessonIds": [
      141,
      142,
      143,
      144,
      145,
      146,
      147,
      148,
      149,
      150
    ]
  },
  {
    "id": "mod-a2-8",
    "level": "A2",
    "title": "Sosyal Planlar, Restoran ve Günlük Görüşmeler",
    "description": "Davet etme, kabul etme, mazeret bildirme ve sosyalleşme diyalogları.",
    "order": 8,
    "iconName": "Smile",
    "lessonIds": [
      151,
      152,
      153,
      154,
      155,
      156,
      157,
      158,
      159,
      160
    ]
  },
  {
    "id": "mod-a2-9",
    "level": "A2",
    "title": "A2 İletişimsel Entegrasyon ve Seviye Değerlendirmesi",
    "description": "Zamanlar arası geçiş, hikaye anlatımı ve A2 seviye bitirme sınavı.",
    "order": 9,
    "iconName": "CheckCircle2",
    "lessonIds": [
      161,
      162,
      163,
      164,
      165,
      166,
      167,
      168,
      169,
      170
    ]
  },
  {
    "id": "mod-b1-1",
    "level": "B1",
    "title": "Zamanlar Arası Geçiş: Present Perfect vs Past Simple",
    "description": "Zaman odaklılık ile sonuç odaklılık arasındaki derin dilbilgisel köprü.",
    "order": 1,
    "iconName": "GitCommit",
    "lessonIds": [
      171,
      172,
      173,
      174,
      175,
      176,
      177,
      178,
      179,
      180
    ]
  },
  {
    "id": "mod-b1-2",
    "level": "B1",
    "title": "Süreç ve Etki: Present Perfect Continuous & For/Since",
    "description": "Geçmişte başlayıp hala süren eylemler, Since & For kullanımı ve yorgunluk/etki bildirimleri.",
    "order": 2,
    "iconName": "Hourglass",
    "lessonIds": [
      181,
      182,
      183,
      184,
      185,
      186,
      187,
      188,
      189,
      190
    ]
  },
  {
    "id": "mod-b1-3",
    "level": "B1",
    "title": "Eski Alışkanlıklar ve Geçmiş Haller: Used to & Would",
    "description": "Artık yapılmayan geçmiş eylemleri ve çocukluk anılarını ifade etme.",
    "order": 3,
    "iconName": "BookmarkCheck",
    "lessonIds": [
      191,
      192,
      193,
      194,
      195,
      196,
      197,
      198,
      199,
      200
    ]
  },
  {
    "id": "mod-b1-4",
    "level": "B1",
    "title": "Tanımlayıcı İlgi Cümlecikleri: Defining Relative Clauses",
    "description": "Who, Which, That, Whose ve Where ile cümleleri akıcı biçimde birbirine bağlama.",
    "order": 4,
    "iconName": "Link",
    "lessonIds": [
      201,
      202,
      203,
      204,
      205,
      206,
      207,
      208,
      209,
      210
    ]
  },
  {
    "id": "mod-b1-5",
    "level": "B1",
    "title": "Koşul Cümleleri: First & Second Conditionals",
    "description": "Gelecekteki gerçekçi olasılıklar ile şu andaki varsayımsal hayaller.",
    "order": 5,
    "iconName": "GitBranch",
    "lessonIds": [
      211,
      212,
      213,
      214,
      215,
      216,
      217,
      218,
      219,
      220
    ]
  },
  {
    "id": "mod-b1-6",
    "level": "B1",
    "title": "Dolaylı Anlatım: Reported Speech & Indirect Questions",
    "description": "Başkalarının söylediklerini doğru zaman kaydırmalarıyla aktarma (He said that...).",
    "order": 6,
    "iconName": "MessageSquare",
    "lessonIds": [
      221,
      222,
      223,
      224,
      225,
      226,
      227,
      228,
      229,
      230
    ]
  },
  {
    "id": "mod-b1-7",
    "level": "B1",
    "title": "Edilgen Çatı Temelleri: Passive Voice Essentials",
    "description": "Eylemi yapanın değil, eylemden etkilenenin ön planda olduğu cümle yapıları.",
    "order": 7,
    "iconName": "Shield",
    "lessonIds": [
      231,
      232,
      233,
      234,
      235,
      236,
      237,
      238,
      239,
      240
    ]
  },
  {
    "id": "mod-b1-8",
    "level": "B1",
    "title": "Modal Fiillerle İhtimal ve Çıkarım: May, Might, Could",
    "description": "Olasılık dereceleri, spekülasyon ve kibar öneri kalıpları.",
    "order": 8,
    "iconName": "Eye",
    "lessonIds": [
      241,
      242,
      243,
      244,
      245,
      246,
      247,
      248,
      249,
      250
    ]
  },
  {
    "id": "mod-b1-9",
    "level": "B1",
    "title": "İş Dünyası Temelleri, Özgeçmiş ve Mülakat Becerileri",
    "description": "Özgeçmiş anlatımı, toplantı terimleri ve profesyonel görüş bildirme.",
    "order": 9,
    "iconName": "Briefcase",
    "lessonIds": [
      251,
      252,
      253,
      254,
      255,
      256,
      257,
      258,
      259,
      260
    ]
  },
  {
    "id": "mod-b1-10",
    "level": "B1",
    "title": "B1 Bağımsız İletişim, Fikir Savunma ve Tartışma",
    "description": "Argüman geliştirme, karşıt görüş sunma ve B1 bitirme değerlendirmesi.",
    "order": 10,
    "iconName": "Target",
    "lessonIds": [
      261,
      262,
      263,
      264,
      265,
      266,
      267,
      268,
      269,
      270
    ]
  },
  {
    "id": "mod-b2-1",
    "level": "B2",
    "title": "İleri Koşul Yapıları: Third & Mixed Conditionals",
    "description": "Geçmişteki kaçırılmış fırsatlar ve geçmişin bugüne yansıyan karma koşulları.",
    "order": 1,
    "iconName": "Share2",
    "lessonIds": [
      271,
      272,
      273,
      274,
      275,
      276,
      277,
      278,
      279,
      280
    ]
  },
  {
    "id": "mod-b2-2",
    "level": "B2",
    "title": "Ettirgen Yapılar ve İleri Edilgen: Causatives & Advanced Passive",
    "description": "Have/Get something done kalıbı ve kurumsal raporlama pasifleri (It is said that...).",
    "order": 2,
    "iconName": "Layers",
    "lessonIds": [
      281,
      282,
      283,
      284,
      285,
      286,
      287,
      288,
      289,
      290
    ]
  },
  {
    "id": "mod-b2-3",
    "level": "B2",
    "title": "Geçmişe Dair Modallar: Modal Deductions (Must have, Can't have)",
    "description": "Must have, Can't have, Might have ve Should have ile kanıt bazlı çıkarım yapma.",
    "order": 3,
    "iconName": "Eye",
    "lessonIds": [
      291,
      292,
      293,
      294,
      295,
      296,
      297,
      298,
      299,
      300
    ]
  },
  {
    "id": "mod-b2-4",
    "level": "B2",
    "title": "Keşkeler ve Varsayımlar: Wish & Hypothetical Meaning",
    "description": "I wish / If only kalıpları, regret bildirimleri ve Would rather kullanımı.",
    "order": 4,
    "iconName": "Heart",
    "lessonIds": [
      301,
      302,
      303,
      304,
      305,
      306,
      307,
      308,
      309,
      310
    ]
  },
  {
    "id": "mod-b2-5",
    "level": "B2",
    "title": "Non-defining Relative Clauses & Participle Clauses",
    "description": "Having done, Being informed gibi yapılarla cümleleri zarifçe sadeleştirme.",
    "order": 5,
    "iconName": "Scissors",
    "lessonIds": [
      311,
      312,
      313,
      314,
      315,
      316,
      317,
      318,
      319,
      320
    ]
  },
  {
    "id": "mod-b2-6",
    "level": "B2",
    "title": "Devrik Cümle Yapısı (Inversion) ve Vurgu Stratejileri",
    "description": "Seldom, Rarely, Under no circumstances gibi devrik cümle yapıları.",
    "order": 6,
    "iconName": "Zap",
    "lessonIds": [
      321,
      322,
      323,
      324,
      325,
      326,
      327,
      328,
      329,
      330
    ]
  },
  {
    "id": "mod-b2-7",
    "level": "B2",
    "title": "Akademik ve Profesyonel Bağlaçlar: Cohesion & Discourse",
    "description": "However, Furthermore, Consequently, In spite of ile akıcı metin inşası.",
    "order": 7,
    "iconName": "BookOpen",
    "lessonIds": [
      331,
      332,
      333,
      334,
      335,
      336,
      337,
      338,
      339,
      340
    ]
  },
  {
    "id": "mod-b2-8",
    "level": "B2",
    "title": "Resmi E-posta Diplomasisi ve Müzakere Becerileri",
    "description": "İtirazları diplomatik dille karşılama, uzlaşma ve profesyonel yazışma adabı.",
    "order": 8,
    "iconName": "Mail",
    "lessonIds": [
      341,
      342,
      343,
      344,
      345,
      346,
      347,
      348,
      349,
      350
    ]
  },
  {
    "id": "mod-b2-9",
    "level": "B2",
    "title": "İş Hayatında Deyimsel İfadeler ve Phrasal Verbs",
    "description": "Strateji, finans, ekip yönetimi ve problem çözmede sık kullanılan deyimler.",
    "order": 9,
    "iconName": "TrendingUp",
    "lessonIds": [
      351,
      352,
      353,
      354,
      355,
      356,
      357,
      358,
      359,
      360
    ]
  },
  {
    "id": "mod-b2-10",
    "level": "B2",
    "title": "B2 Akıcı Tartışma, Medya Analizi ve Seviye Sentezi",
    "description": "Karmaşık güncel konuları tartışma, raporlama ve B2 yeterlilik sınavı.",
    "order": 10,
    "iconName": "Award",
    "lessonIds": [
      361,
      362,
      363,
      364,
      365,
      366,
      367,
      368,
      369,
      370
    ]
  },
  {
    "id": "mod-c1-1",
    "level": "C1",
    "title": "İstek Kipi ve Resmi Dil: Subjunctive Mood",
    "description": "It is essential that he be present... gibi resmi ve hukuki dil kuralları.",
    "order": 1,
    "iconName": "PenTool",
    "lessonIds": [
      371,
      372,
      373,
      374,
      375,
      376,
      377,
      378,
      379,
      380
    ]
  },
  {
    "id": "mod-c1-2",
    "level": "C1",
    "title": "Odak ve Vurgu Yapıları: Cleft Sentences & Fronting",
    "description": "What I really need is..., It was John who... ile mesajın can alıcı noktasını öne çıkarma.",
    "order": 2,
    "iconName": "Maximize2",
    "lessonIds": [
      381,
      382,
      383,
      384,
      385,
      386,
      387,
      388,
      389,
      390
    ]
  },
  {
    "id": "mod-c1-3",
    "level": "C1",
    "title": "Akademik Mesafelenme ve Yumuşatma: Hedging & Stance",
    "description": "Arguably, It could be claimed that... ile iddiaları bilimsel temele oturtma ve yumuşatma.",
    "order": 3,
    "iconName": "Feather",
    "lessonIds": [
      391,
      392,
      393,
      394,
      395,
      396,
      397,
      398,
      399,
      400
    ]
  },
  {
    "id": "mod-c1-4",
    "level": "C1",
    "title": "İleri Deyimsel Söylem, Kollokasyonlar ve Metaforlar",
    "description": "Kavramsal metaforlar ve anadili konuşucularına özgü yüksek seviyeli kelime çiftleri.",
    "order": 4,
    "iconName": "Cpu",
    "lessonIds": [
      401,
      402,
      403,
      404,
      405,
      406,
      407,
      408,
      409,
      410
    ]
  },
  {
    "id": "mod-c1-5",
    "level": "C1",
    "title": "Karmaşık Argüman Sentezi ve Eleştirel Değerlendirme",
    "description": "Farklı tezleri bir araya getirme, zayıf noktaları tespit etme ve entelektüel eleştiri.",
    "order": 5,
    "iconName": "Sliders",
    "lessonIds": [
      411,
      412,
      413,
      414,
      415,
      416,
      417,
      418,
      419,
      420
    ]
  },
  {
    "id": "mod-c1-6",
    "level": "C1",
    "title": "Yüksek Etkili Sunumlar, İkna ve Retorik Stratejiler",
    "description": "Üçleme (Tricolon), anafordik tekrar ve kitleyi harekete geçiren hitabet dili.",
    "order": 6,
    "iconName": "Mic",
    "lessonIds": [
      421,
      422,
      423,
      424,
      425,
      426,
      427,
      428,
      429,
      430
    ]
  },
  {
    "id": "mod-c1-7",
    "level": "C1",
    "title": "Kültürlerarası Pragmatik, İma ve Alt Metin Yönetimi",
    "description": "Doğrudan olmayan imalar, kurumsal politika dili ve sessiz uzlaşmalar.",
    "order": 7,
    "iconName": "Globe",
    "lessonIds": [
      431,
      432,
      433,
      434,
      435,
      436,
      437,
      438,
      439,
      440
    ]
  },
  {
    "id": "mod-c1-8",
    "level": "C1",
    "title": "C1 İleri Düzey Yeterlilik ve Söylem Bütünlüğü",
    "description": "C1 seviyesinin akademik, profesyonel ve söylemsel nihai yeterlilik değerlendirmesi.",
    "order": 8,
    "iconName": "Sparkles",
    "lessonIds": [
      441,
      442,
      443,
      444,
      445,
      446,
      447,
      448,
      449,
      450
    ]
  },
  {
    "id": "mod-c2-1",
    "level": "C2",
    "title": "Üslup Çeşitliliği, Ton Kontrolü ve Edebi Dil Hakimiyeti",
    "description": "Metin türüne göre (akademik, bürokratik, lirik, hiciv) tonu kusursuz değiştirebilme.",
    "order": 1,
    "iconName": "Award",
    "lessonIds": [
      451,
      452,
      453,
      454,
      455,
      456,
      457,
      458,
      459,
      460
    ]
  },
  {
    "id": "mod-c2-2",
    "level": "C2",
    "title": "İroni, Hiciv, Kültürel Mizah ve Understatement",
    "description": "Understatement (durumu hafifletme), kuru mizah ve ironik söylem çözümleme.",
    "order": 2,
    "iconName": "Laugh",
    "lessonIds": [
      461,
      462,
      463,
      464,
      465,
      466,
      467,
      468,
      469,
      470
    ]
  },
  {
    "id": "mod-c2-3",
    "level": "C2",
    "title": "Hukuk, Finans ve Felsefi Terminoloji ve Argüman Açmazları",
    "description": "Latin kökenli hukuki terimler, felsefi açmazlar ve teknik kesinlik dili.",
    "order": 3,
    "iconName": "CheckSquare",
    "lessonIds": [
      471,
      472,
      473,
      474,
      475,
      476,
      477,
      478,
      479,
      480
    ]
  },
  {
    "id": "mod-c2-4",
    "level": "C2",
    "title": "C2 Spontane Düşünce Akışı, Hitabet ve Ustalık Sentezi",
    "description": "Kusursuz akıcılık, düşünceyle eşzamanlı söz üretimi ve doğal ifade bütünlüğü.",
    "order": 4,
    "iconName": "Flame",
    "lessonIds": [
      481,
      482,
      483,
      484,
      485,
      486,
      487,
      488
    ]
  }
];

// Complete 488-Lesson Syllabus Database
export const CURRICULUM_LESSONS: CurriculumLessonDef[] = [
  {
    "id": 1,
    "code": "A1-01",
    "level": "A1",
    "moduleId": "mod-a1-1",
    "moduleName": "Tanışma, Alfabe ve Temel İletişim",
    "title": "Tanışma İfadeleri ve Kendini Tanıtma",
    "description": "A1 seviyesinde Tanışma İfadeleri ve Kendini Tanıtma konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Tanışma İfadeleri ve Kendini Tanıtma konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 1,
    "estimatedDuration": 12,
    "prerequisites": [],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Tanışma İfadeleri ve Kendini Tanıtma konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 2,
    "code": "A1-02",
    "level": "A1",
    "moduleId": "mod-a1-1",
    "moduleName": "Tanışma, Alfabe ve Temel İletişim",
    "title": "İngilizce Alfabe ve Harf Kodlama (Spelling)",
    "description": "A1 seviyesinde İngilizce Alfabe ve Harf Kodlama (Spelling) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "İngilizce Alfabe ve Harf Kodlama (Spelling) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 2,
    "estimatedDuration": 12,
    "prerequisites": [
      1
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "İngilizce Alfabe ve Harf Kodlama (Spelling) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 3,
    "code": "A1-03",
    "level": "A1",
    "moduleId": "mod-a1-1",
    "moduleName": "Tanışma, Alfabe ve Temel İletişim",
    "title": "Sayılar (1-100), Yaş ve Telefon Numarası",
    "description": "A1 seviyesinde Sayılar (1-100), Yaş ve Telefon Numarası konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Sayılar (1-100), Yaş ve Telefon Numarası konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 3,
    "estimatedDuration": 12,
    "prerequisites": [
      2
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Sayılar (1-100), Yaş ve Telefon Numarası konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 4,
    "code": "A1-04",
    "level": "A1",
    "moduleId": "mod-a1-1",
    "moduleName": "Tanışma, Alfabe ve Temel İletişim",
    "title": "Kişi Zamirleri (Subject Pronouns: I, You, He, She, It, We, They)",
    "description": "A1 seviyesinde Kişi Zamirleri (Subject Pronouns: I, You, He, She, It, We, They) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Kişi Zamirleri (Subject Pronouns: I, You, He, She, It, We, They) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 4,
    "estimatedDuration": 12,
    "prerequisites": [
      3
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Kişi Zamirleri (Subject Pronouns: I, You, He, She, It, We, They) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 5,
    "code": "A1-05",
    "level": "A1",
    "moduleId": "mod-a1-1",
    "moduleName": "Tanışma, Alfabe ve Temel İletişim",
    "title": "Ülkeler, Milliyetler ve Diller",
    "description": "A1 seviyesinde Ülkeler, Milliyetler ve Diller konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Ülkeler, Milliyetler ve Diller konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 5,
    "estimatedDuration": 12,
    "prerequisites": [
      4
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Ülkeler, Milliyetler ve Diller konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 6,
    "code": "A1-06",
    "level": "A1",
    "moduleId": "mod-a1-1",
    "moduleName": "Tanışma, Alfabe ve Temel İletişim",
    "title": "Meslekler ve Günlük Çalışma Alanları",
    "description": "A1 seviyesinde Meslekler ve Günlük Çalışma Alanları konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Meslekler ve Günlük Çalışma Alanları konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 6,
    "estimatedDuration": 12,
    "prerequisites": [
      5
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Meslekler ve Günlük Çalışma Alanları konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 7,
    "code": "A1-07",
    "level": "A1",
    "moduleId": "mod-a1-1",
    "moduleName": "Tanışma, Alfabe ve Temel İletişim",
    "title": "Günler, Aylar, Mevsimler ve Tarihler",
    "description": "A1 seviyesinde Günler, Aylar, Mevsimler ve Tarihler konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Günler, Aylar, Mevsimler ve Tarihler konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 7,
    "estimatedDuration": 12,
    "prerequisites": [
      6
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Günler, Aylar, Mevsimler ve Tarihler konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 8,
    "code": "A1-08",
    "level": "A1",
    "moduleId": "mod-a1-1",
    "moduleName": "Tanışma, Alfabe ve Temel İletişim",
    "title": "Saatler ve Zaman İfadeleri (What time is it?)",
    "description": "A1 seviyesinde Saatler ve Zaman İfadeleri (What time is it?) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Saatler ve Zaman İfadeleri (What time is it?) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 8,
    "estimatedDuration": 12,
    "prerequisites": [
      7
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Saatler ve Zaman İfadeleri (What time is it?) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 9,
    "code": "A1-09",
    "level": "A1",
    "moduleId": "mod-a1-1",
    "moduleName": "Tanışma, Alfabe ve Temel İletişim",
    "title": "Sınıf ve Günlük İletişim Yönergeleri (Imperatives)",
    "description": "A1 seviyesinde Sınıf ve Günlük İletişim Yönergeleri (Imperatives) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Sınıf ve Günlük İletişim Yönergeleri (Imperatives) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 9,
    "estimatedDuration": 12,
    "prerequisites": [
      8
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Sınıf ve Günlük İletişim Yönergeleri (Imperatives) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 10,
    "code": "A1-10",
    "level": "A1",
    "moduleId": "mod-a1-1",
    "moduleName": "Tanışma, Alfabe ve Temel İletişim",
    "title": "Temel Nezaket Kuralları ve Sosyal Formüller",
    "description": "A1 seviyesinde Temel Nezaket Kuralları ve Sosyal Formüller konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Temel Nezaket Kuralları ve Sosyal Formüller konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 10,
    "estimatedDuration": 12,
    "prerequisites": [
      9
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Temel Nezaket Kuralları ve Sosyal Formüller konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 11,
    "code": "A1-01",
    "level": "A1",
    "moduleId": "mod-a1-2",
    "moduleName": "Durum Cümleleri ve Varlık Bildirimi",
    "title": "To Be (Am / Is / Are) — Olmak Fiili ve Temel Tanımlamalar",
    "description": "A1 seviyesinde To Be (Am / Is / Are) — Olmak Fiili ve Temel Tanımlamalar konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "To Be (Am / Is / Are) — Olmak Fiili ve Temel Tanımlamalar konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 11,
    "estimatedDuration": 12,
    "prerequisites": [
      10
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "To Be (Am / Is / Are) — Olmak Fiili ve Temel Tanımlamalar konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 12,
    "code": "A1-02",
    "level": "A1",
    "moduleId": "mod-a1-2",
    "moduleName": "Durum Cümleleri ve Varlık Bildirimi",
    "title": "To Be: Olumsuz Cümleler ve Kısaltmalar (isn't, aren't)",
    "description": "A1 seviyesinde To Be: Olumsuz Cümleler ve Kısaltmalar (isn't, aren't) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "To Be: Olumsuz Cümleler ve Kısaltmalar (isn't, aren't) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 12,
    "estimatedDuration": 12,
    "prerequisites": [
      11
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "To Be: Olumsuz Cümleler ve Kısaltmalar (isn't, aren't) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 13,
    "code": "A1-03",
    "level": "A1",
    "moduleId": "mod-a1-2",
    "moduleName": "Durum Cümleleri ve Varlık Bildirimi",
    "title": "To Be: Soru Cümleleri ve Kısa Cevaplar",
    "description": "A1 seviyesinde To Be: Soru Cümleleri ve Kısa Cevaplar konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "To Be: Soru Cümleleri ve Kısa Cevaplar konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 13,
    "estimatedDuration": 12,
    "prerequisites": [
      12
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "To Be: Soru Cümleleri ve Kısa Cevaplar konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 14,
    "code": "A1-04",
    "level": "A1",
    "moduleId": "mod-a1-2",
    "moduleName": "Durum Cümleleri ve Varlık Bildirimi",
    "title": "There is & There are — Varlık Bildirimi",
    "description": "A1 seviyesinde There is & There are — Varlık Bildirimi konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "There is & There are — Varlık Bildirimi konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 14,
    "estimatedDuration": 12,
    "prerequisites": [
      13
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "There is & There are — Varlık Bildirimi konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 15,
    "code": "A1-05",
    "level": "A1",
    "moduleId": "mod-a1-2",
    "moduleName": "Durum Cümleleri ve Varlık Bildirimi",
    "title": "There is / are: Olumsuz ve Soru Halleri (Is there? / Are there?)",
    "description": "A1 seviyesinde There is / are: Olumsuz ve Soru Halleri (Is there? / Are there?) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "There is / are: Olumsuz ve Soru Halleri (Is there? / Are there?) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 15,
    "estimatedDuration": 12,
    "prerequisites": [
      14
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "There is / are: Olumsuz ve Soru Halleri (Is there? / Are there?) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 16,
    "code": "A1-06",
    "level": "A1",
    "moduleId": "mod-a1-2",
    "moduleName": "Durum Cümleleri ve Varlık Bildirimi",
    "title": "Temel Konum Edatları: In, On, Under, Next to, Behind",
    "description": "A1 seviyesinde Temel Konum Edatları: In, On, Under, Next to, Behind konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Temel Konum Edatları: In, On, Under, Next to, Behind konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 16,
    "estimatedDuration": 12,
    "prerequisites": [
      15
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Temel Konum Edatları: In, On, Under, Next to, Behind konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 17,
    "code": "A1-07",
    "level": "A1",
    "moduleId": "mod-a1-2",
    "moduleName": "Durum Cümleleri ve Varlık Bildirimi",
    "title": "Renkler ve Temel Niteleme Sıfatları",
    "description": "A1 seviyesinde Renkler ve Temel Niteleme Sıfatları konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Renkler ve Temel Niteleme Sıfatları konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 17,
    "estimatedDuration": 12,
    "prerequisites": [
      16
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Renkler ve Temel Niteleme Sıfatları konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 18,
    "code": "A1-08",
    "level": "A1",
    "moduleId": "mod-a1-2",
    "moduleName": "Durum Cümleleri ve Varlık Bildirimi",
    "title": "Duygular ve Fiziksel Durumlar (Happy, Tired, Hungry)",
    "description": "A1 seviyesinde Duygular ve Fiziksel Durumlar (Happy, Tired, Hungry) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Duygular ve Fiziksel Durumlar (Happy, Tired, Hungry) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 18,
    "estimatedDuration": 12,
    "prerequisites": [
      17
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Duygular ve Fiziksel Durumlar (Happy, Tired, Hungry) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 19,
    "code": "A1-09",
    "level": "A1",
    "moduleId": "mod-a1-2",
    "moduleName": "Durum Cümleleri ve Varlık Bildirimi",
    "title": "Hava Durumu ve Sıcaklık İfadeleri",
    "description": "A1 seviyesinde Hava Durumu ve Sıcaklık İfadeleri konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Hava Durumu ve Sıcaklık İfadeleri konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 19,
    "estimatedDuration": 12,
    "prerequisites": [
      18
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Hava Durumu ve Sıcaklık İfadeleri konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 20,
    "code": "A1-10",
    "level": "A1",
    "moduleId": "mod-a1-2",
    "moduleName": "Durum Cümleleri ve Varlık Bildirimi",
    "title": "A1 Modül 2 Entegrasyonu: Evim ve Odamı Tasvir Etme",
    "description": "A1 seviyesinde A1 Modül 2 Entegrasyonu: Evim ve Odamı Tasvir Etme konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "A1 Modül 2 Entegrasyonu: Evim ve Odamı Tasvir Etme konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 20,
    "estimatedDuration": 12,
    "prerequisites": [
      19
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "A1 Modül 2 Entegrasyonu: Evim ve Odamı Tasvir Etme konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 21,
    "code": "A1-01",
    "level": "A1",
    "moduleId": "mod-a1-3",
    "moduleName": "Geniş Zaman ve Günlük Rutinler",
    "title": "Geniş Zaman (Present Simple): Olumlu Cümleler",
    "description": "A1 seviyesinde Geniş Zaman (Present Simple): Olumlu Cümleler konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Geniş Zaman (Present Simple): Olumlu Cümleler konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 21,
    "estimatedDuration": 12,
    "prerequisites": [
      20
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Geniş Zaman (Present Simple): Olumlu Cümleler konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 22,
    "code": "A1-02",
    "level": "A1",
    "moduleId": "mod-a1-3",
    "moduleName": "Geniş Zaman ve Günlük Rutinler",
    "title": "Present Simple: 3. Tekil Şahıs -s/-es/-ies Takısı Kuralları",
    "description": "A1 seviyesinde Present Simple: 3. Tekil Şahıs -s/-es/-ies Takısı Kuralları konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Present Simple: 3. Tekil Şahıs -s/-es/-ies Takısı Kuralları konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 22,
    "estimatedDuration": 12,
    "prerequisites": [
      21
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Present Simple: 3. Tekil Şahıs -s/-es/-ies Takısı Kuralları konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 23,
    "code": "A1-03",
    "level": "A1",
    "moduleId": "mod-a1-3",
    "moduleName": "Geniş Zaman ve Günlük Rutinler",
    "title": "Present Simple: Olumsuz Cümleler (Don't / Doesn't)",
    "description": "A1 seviyesinde Present Simple: Olumsuz Cümleler (Don't / Doesn't) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Present Simple: Olumsuz Cümleler (Don't / Doesn't) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 23,
    "estimatedDuration": 12,
    "prerequisites": [
      22
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Present Simple: Olumsuz Cümleler (Don't / Doesn't) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 24,
    "code": "A1-04",
    "level": "A1",
    "moduleId": "mod-a1-3",
    "moduleName": "Geniş Zaman ve Günlük Rutinler",
    "title": "Present Simple: Soru Cümleleri (Do / Does) ve Kısa Cevaplar",
    "description": "A1 seviyesinde Present Simple: Soru Cümleleri (Do / Does) ve Kısa Cevaplar konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Present Simple: Soru Cümleleri (Do / Does) ve Kısa Cevaplar konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 24,
    "estimatedDuration": 12,
    "prerequisites": [
      23
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Present Simple: Soru Cümleleri (Do / Does) ve Kısa Cevaplar konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 25,
    "code": "A1-05",
    "level": "A1",
    "moduleId": "mod-a1-3",
    "moduleName": "Geniş Zaman ve Günlük Rutinler",
    "title": "Sıklık Zarfları: Always, Usually, Often, Sometimes, Never",
    "description": "A1 seviyesinde Sıklık Zarfları: Always, Usually, Often, Sometimes, Never konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Sıklık Zarfları: Always, Usually, Often, Sometimes, Never konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 25,
    "estimatedDuration": 12,
    "prerequisites": [
      24
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Sıklık Zarfları: Always, Usually, Often, Sometimes, Never konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 26,
    "code": "A1-06",
    "level": "A1",
    "moduleId": "mod-a1-3",
    "moduleName": "Geniş Zaman ve Günlük Rutinler",
    "title": "Günlük Sabah Rutini Fiilleri",
    "description": "A1 seviyesinde Günlük Sabah Rutini Fiilleri konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Günlük Sabah Rutini Fiilleri konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 26,
    "estimatedDuration": 12,
    "prerequisites": [
      25
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Günlük Sabah Rutini Fiilleri konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 27,
    "code": "A1-07",
    "level": "A1",
    "moduleId": "mod-a1-3",
    "moduleName": "Geniş Zaman ve Günlük Rutinler",
    "title": "İş, Okul ve Akşam Rutinleri",
    "description": "A1 seviyesinde İş, Okul ve Akşam Rutinleri konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "İş, Okul ve Akşam Rutinleri konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 27,
    "estimatedDuration": 12,
    "prerequisites": [
      26
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "İş, Okul ve Akşam Rutinleri konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 28,
    "code": "A1-08",
    "level": "A1",
    "moduleId": "mod-a1-3",
    "moduleName": "Geniş Zaman ve Günlük Rutinler",
    "title": "Zaman Edatları: At, On, In Kullanım Matrisi",
    "description": "A1 seviyesinde Zaman Edatları: At, On, In Kullanım Matrisi konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Zaman Edatları: At, On, In Kullanım Matrisi konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 28,
    "estimatedDuration": 12,
    "prerequisites": [
      27
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Zaman Edatları: At, On, In Kullanım Matrisi konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 29,
    "code": "A1-09",
    "level": "A1",
    "moduleId": "mod-a1-3",
    "moduleName": "Geniş Zaman ve Günlük Rutinler",
    "title": "Boş Zaman Aktiviteleri ve Hobiler (Like / Love + V-ing)",
    "description": "A1 seviyesinde Boş Zaman Aktiviteleri ve Hobiler (Like / Love + V-ing) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Boş Zaman Aktiviteleri ve Hobiler (Like / Love + V-ing) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 29,
    "estimatedDuration": 12,
    "prerequisites": [
      28
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Boş Zaman Aktiviteleri ve Hobiler (Like / Love + V-ing) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 30,
    "code": "A1-10",
    "level": "A1",
    "moduleId": "mod-a1-3",
    "moduleName": "Geniş Zaman ve Günlük Rutinler",
    "title": "A1 Modül 3 Entegrasyonu: Bir Günümü Baştan Sona Anlatma",
    "description": "A1 seviyesinde A1 Modül 3 Entegrasyonu: Bir Günümü Baştan Sona Anlatma konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "A1 Modül 3 Entegrasyonu: Bir Günümü Baştan Sona Anlatma konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 30,
    "estimatedDuration": 12,
    "prerequisites": [
      29
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "A1 Modül 3 Entegrasyonu: Bir Günümü Baştan Sona Anlatma konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 31,
    "code": "A1-01",
    "level": "A1",
    "moduleId": "mod-a1-4",
    "moduleName": "Nesneler, Sahiplik ve Niteleme",
    "title": "İşaret Sıfatları: This & That (Yakın ve Uzak Tekiller)",
    "description": "A1 seviyesinde İşaret Sıfatları: This & That (Yakın ve Uzak Tekiller) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "İşaret Sıfatları: This & That (Yakın ve Uzak Tekiller) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 31,
    "estimatedDuration": 12,
    "prerequisites": [
      30
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "İşaret Sıfatları: This & That (Yakın ve Uzak Tekiller) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 32,
    "code": "A1-02",
    "level": "A1",
    "moduleId": "mod-a1-4",
    "moduleName": "Nesneler, Sahiplik ve Niteleme",
    "title": "İşaret Sıfatları: These & Those (Yakın ve Uzak Çoğullar)",
    "description": "A1 seviyesinde İşaret Sıfatları: These & Those (Yakın ve Uzak Çoğullar) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "İşaret Sıfatları: These & Those (Yakın ve Uzak Çoğullar) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 32,
    "estimatedDuration": 12,
    "prerequisites": [
      31
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "İşaret Sıfatları: These & Those (Yakın ve Uzak Çoğullar) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 33,
    "code": "A1-03",
    "level": "A1",
    "moduleId": "mod-a1-4",
    "moduleName": "Nesneler, Sahiplik ve Niteleme",
    "title": "Düzenli Çoğul İsimler (-s, -es, -ies) ve Yazım Kuralları",
    "description": "A1 seviyesinde Düzenli Çoğul İsimler (-s, -es, -ies) ve Yazım Kuralları konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Düzenli Çoğul İsimler (-s, -es, -ies) ve Yazım Kuralları konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 33,
    "estimatedDuration": 12,
    "prerequisites": [
      32
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Düzenli Çoğul İsimler (-s, -es, -ies) ve Yazım Kuralları konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 34,
    "code": "A1-04",
    "level": "A1",
    "moduleId": "mod-a1-4",
    "moduleName": "Nesneler, Sahiplik ve Niteleme",
    "title": "Düzensiz Çoğul İsimler (Men, women, children, people)",
    "description": "A1 seviyesinde Düzensiz Çoğul İsimler (Men, women, children, people) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Düzensiz Çoğul İsimler (Men, women, children, people) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 34,
    "estimatedDuration": 12,
    "prerequisites": [
      33
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Düzensiz Çoğul İsimler (Men, women, children, people) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 35,
    "code": "A1-05",
    "level": "A1",
    "moduleId": "mod-a1-4",
    "moduleName": "Nesneler, Sahiplik ve Niteleme",
    "title": "İyelik Sıfatları: My, Your, His, Her, Its, Our, Their",
    "description": "A1 seviyesinde İyelik Sıfatları: My, Your, His, Her, Its, Our, Their konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "İyelik Sıfatları: My, Your, His, Her, Its, Our, Their konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 35,
    "estimatedDuration": 12,
    "prerequisites": [
      34
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "İyelik Sıfatları: My, Your, His, Her, Its, Our, Their konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 36,
    "code": "A1-06",
    "level": "A1",
    "moduleId": "mod-a1-4",
    "moduleName": "Nesneler, Sahiplik ve Niteleme",
    "title": "Sahiplik Kesme İşareti: Apostrophe 's (Tom's Car)",
    "description": "A1 seviyesinde Sahiplik Kesme İşareti: Apostrophe 's (Tom's Car) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Sahiplik Kesme İşareti: Apostrophe 's (Tom's Car) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 36,
    "estimatedDuration": 12,
    "prerequisites": [
      35
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Sahiplik Kesme İşareti: Apostrophe 's (Tom's Car) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 37,
    "code": "A1-07",
    "level": "A1",
    "moduleId": "mod-a1-4",
    "moduleName": "Nesneler, Sahiplik ve Niteleme",
    "title": "Have got / Has got ile Sahiplik Bildirimi",
    "description": "A1 seviyesinde Have got / Has got ile Sahiplik Bildirimi konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Have got / Has got ile Sahiplik Bildirimi konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 37,
    "estimatedDuration": 12,
    "prerequisites": [
      36
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Have got / Has got ile Sahiplik Bildirimi konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 38,
    "code": "A1-08",
    "level": "A1",
    "moduleId": "mod-a1-4",
    "moduleName": "Nesneler, Sahiplik ve Niteleme",
    "title": "Have / Has ile Sahiplik Bildirimi (Do you have...?)",
    "description": "A1 seviyesinde Have / Has ile Sahiplik Bildirimi (Do you have...?) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Have / Has ile Sahiplik Bildirimi (Do you have...?) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 38,
    "estimatedDuration": 12,
    "prerequisites": [
      37
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Have / Has ile Sahiplik Bildirimi (Do you have...?) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 39,
    "code": "A1-09",
    "level": "A1",
    "moduleId": "mod-a1-4",
    "moduleName": "Nesneler, Sahiplik ve Niteleme",
    "title": "Aile Bireyleri ve Akrabalık İfadeleri",
    "description": "A1 seviyesinde Aile Bireyleri ve Akrabalık İfadeleri konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Aile Bireyleri ve Akrabalık İfadeleri konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 39,
    "estimatedDuration": 12,
    "prerequisites": [
      38
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Aile Bireyleri ve Akrabalık İfadeleri konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 40,
    "code": "A1-10",
    "level": "A1",
    "moduleId": "mod-a1-4",
    "moduleName": "Nesneler, Sahiplik ve Niteleme",
    "title": "A1 Modül 4 Entegrasyonu: Kişisel Eşyalar ve Aile Tanıtımı",
    "description": "A1 seviyesinde A1 Modül 4 Entegrasyonu: Kişisel Eşyalar ve Aile Tanıtımı konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "A1 Modül 4 Entegrasyonu: Kişisel Eşyalar ve Aile Tanıtımı konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 40,
    "estimatedDuration": 12,
    "prerequisites": [
      39
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "A1 Modül 4 Entegrasyonu: Kişisel Eşyalar ve Aile Tanıtımı konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 41,
    "code": "A1-01",
    "level": "A1",
    "moduleId": "mod-a1-5",
    "moduleName": "Soru Sorma Becerileri ve Bilgi Edinme",
    "title": "WH- Soruları: What (Ne / Hangi) Kullanımı",
    "description": "A1 seviyesinde WH- Soruları: What (Ne / Hangi) Kullanımı konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "WH- Soruları: What (Ne / Hangi) Kullanımı konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 41,
    "estimatedDuration": 12,
    "prerequisites": [
      40
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "WH- Soruları: What (Ne / Hangi) Kullanımı konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 42,
    "code": "A1-02",
    "level": "A1",
    "moduleId": "mod-a1-5",
    "moduleName": "Soru Sorma Becerileri ve Bilgi Edinme",
    "title": "WH- Soruları: Where (Nerede / Nereye) ile Konum Sorma",
    "description": "A1 seviyesinde WH- Soruları: Where (Nerede / Nereye) ile Konum Sorma konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "WH- Soruları: Where (Nerede / Nereye) ile Konum Sorma konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 42,
    "estimatedDuration": 12,
    "prerequisites": [
      41
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "WH- Soruları: Where (Nerede / Nereye) ile Konum Sorma konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 43,
    "code": "A1-03",
    "level": "A1",
    "moduleId": "mod-a1-5",
    "moduleName": "Soru Sorma Becerileri ve Bilgi Edinme",
    "title": "WH- Soruları: Who (Kim) ve Whose (Kimin) Kullanımı",
    "description": "A1 seviyesinde WH- Soruları: Who (Kim) ve Whose (Kimin) Kullanımı konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "WH- Soruları: Who (Kim) ve Whose (Kimin) Kullanımı konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 43,
    "estimatedDuration": 12,
    "prerequisites": [
      42
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "WH- Soruları: Who (Kim) ve Whose (Kimin) Kullanımı konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 44,
    "code": "A1-04",
    "level": "A1",
    "moduleId": "mod-a1-5",
    "moduleName": "Soru Sorma Becerileri ve Bilgi Edinme",
    "title": "WH- Soruları: When (Ne Zaman) ve What Time (Saat Kaçta)",
    "description": "A1 seviyesinde WH- Soruları: When (Ne Zaman) ve What Time (Saat Kaçta) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "WH- Soruları: When (Ne Zaman) ve What Time (Saat Kaçta) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 44,
    "estimatedDuration": 12,
    "prerequisites": [
      43
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "WH- Soruları: When (Ne Zaman) ve What Time (Saat Kaçta) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 45,
    "code": "A1-05",
    "level": "A1",
    "moduleId": "mod-a1-5",
    "moduleName": "Soru Sorma Becerileri ve Bilgi Edinme",
    "title": "WH- Soruları: Why (Neden) ve Because ile Sebep Bildirme",
    "description": "A1 seviyesinde WH- Soruları: Why (Neden) ve Because ile Sebep Bildirme konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "WH- Soruları: Why (Neden) ve Because ile Sebep Bildirme konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 45,
    "estimatedDuration": 12,
    "prerequisites": [
      44
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "WH- Soruları: Why (Neden) ve Because ile Sebep Bildirme konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 46,
    "code": "A1-06",
    "level": "A1",
    "moduleId": "mod-a1-5",
    "moduleName": "Soru Sorma Becerileri ve Bilgi Edinme",
    "title": "WH- Soruları: How (Nasıl) ve Durum Sorma",
    "description": "A1 seviyesinde WH- Soruları: How (Nasıl) ve Durum Sorma konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "WH- Soruları: How (Nasıl) ve Durum Sorma konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 46,
    "estimatedDuration": 12,
    "prerequisites": [
      45
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "WH- Soruları: How (Nasıl) ve Durum Sorma konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 47,
    "code": "A1-07",
    "level": "A1",
    "moduleId": "mod-a1-5",
    "moduleName": "Soru Sorma Becerileri ve Bilgi Edinme",
    "title": "How Often ile Eylem Sıklığı Sorma",
    "description": "A1 seviyesinde How Often ile Eylem Sıklığı Sorma konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "How Often ile Eylem Sıklığı Sorma konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 47,
    "estimatedDuration": 12,
    "prerequisites": [
      46
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "How Often ile Eylem Sıklığı Sorma konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 48,
    "code": "A1-08",
    "level": "A1",
    "moduleId": "mod-a1-5",
    "moduleName": "Soru Sorma Becerileri ve Bilgi Edinme",
    "title": "How Many ile Sayılabilen Nesne Sayısı Sorma",
    "description": "A1 seviyesinde How Many ile Sayılabilen Nesne Sayısı Sorma konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "How Many ile Sayılabilen Nesne Sayısı Sorma konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 48,
    "estimatedDuration": 12,
    "prerequisites": [
      47
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "How Many ile Sayılabilen Nesne Sayısı Sorma konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 49,
    "code": "A1-09",
    "level": "A1",
    "moduleId": "mod-a1-5",
    "moduleName": "Soru Sorma Becerileri ve Bilgi Edinme",
    "title": "How Much ile Fiyat ve Sayılamayan Miktar Sorma",
    "description": "A1 seviyesinde How Much ile Fiyat ve Sayılamayan Miktar Sorma konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "How Much ile Fiyat ve Sayılamayan Miktar Sorma konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 49,
    "estimatedDuration": 12,
    "prerequisites": [
      48
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "How Much ile Fiyat ve Sayılamayan Miktar Sorma konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 50,
    "code": "A1-10",
    "level": "A1",
    "moduleId": "mod-a1-5",
    "moduleName": "Soru Sorma Becerileri ve Bilgi Edinme",
    "title": "A1 Modül 5 Entegrasyonu: Tanınmış Biriyle Röportaj Yapma",
    "description": "A1 seviyesinde A1 Modül 5 Entegrasyonu: Tanınmış Biriyle Röportaj Yapma konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "A1 Modül 5 Entegrasyonu: Tanınmış Biriyle Röportaj Yapma konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 50,
    "estimatedDuration": 12,
    "prerequisites": [
      49
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "A1 Modül 5 Entegrasyonu: Tanınmış Biriyle Röportaj Yapma konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 51,
    "code": "A1-01",
    "level": "A1",
    "moduleId": "mod-a1-6",
    "moduleName": "Yetenekler ve İzin: Can & Can't",
    "title": "Yetenek Bildirme: Can ile Olumlu Cümleler",
    "description": "A1 seviyesinde Yetenek Bildirme: Can ile Olumlu Cümleler konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Yetenek Bildirme: Can ile Olumlu Cümleler konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 51,
    "estimatedDuration": 12,
    "prerequisites": [
      50
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Yetenek Bildirme: Can ile Olumlu Cümleler konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 52,
    "code": "A1-02",
    "level": "A1",
    "moduleId": "mod-a1-6",
    "moduleName": "Yetenekler ve İzin: Can & Can't",
    "title": "Yetersizlik Bildirme: Can't ile Olumsuz Cümleler",
    "description": "A1 seviyesinde Yetersizlik Bildirme: Can't ile Olumsuz Cümleler konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Yetersizlik Bildirme: Can't ile Olumsuz Cümleler konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 52,
    "estimatedDuration": 12,
    "prerequisites": [
      51
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Yetersizlik Bildirme: Can't ile Olumsuz Cümleler konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 53,
    "code": "A1-03",
    "level": "A1",
    "moduleId": "mod-a1-6",
    "moduleName": "Yetenekler ve İzin: Can & Can't",
    "title": "Yetenek Sorma: Can you...? ve Kısa Cevaplar",
    "description": "A1 seviyesinde Yetenek Sorma: Can you...? ve Kısa Cevaplar konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Yetenek Sorma: Can you...? ve Kısa Cevaplar konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 53,
    "estimatedDuration": 12,
    "prerequisites": [
      52
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Yetenek Sorma: Can you...? ve Kısa Cevaplar konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 54,
    "code": "A1-04",
    "level": "A1",
    "moduleId": "mod-a1-6",
    "moduleName": "Yetenekler ve İzin: Can & Can't",
    "title": "İzin İsteme: Can I...? ve May I...? Nezaket Kalıpları",
    "description": "A1 seviyesinde İzin İsteme: Can I...? ve May I...? Nezaket Kalıpları konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "İzin İsteme: Can I...? ve May I...? Nezaket Kalıpları konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 54,
    "estimatedDuration": 12,
    "prerequisites": [
      53
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "İzin İsteme: Can I...? ve May I...? Nezaket Kalıpları konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 55,
    "code": "A1-05",
    "level": "A1",
    "moduleId": "mod-a1-6",
    "moduleName": "Yetenekler ve İzin: Can & Can't",
    "title": "Rica Etme: Can you help me? / Could you please...?",
    "description": "A1 seviyesinde Rica Etme: Can you help me? / Could you please...? konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Rica Etme: Can you help me? / Could you please...? konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 55,
    "estimatedDuration": 12,
    "prerequisites": [
      54
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Rica Etme: Can you help me? / Could you please...? konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 56,
    "code": "A1-06",
    "level": "A1",
    "moduleId": "mod-a1-6",
    "moduleName": "Yetenekler ve İzin: Can & Can't",
    "title": "Duyusal Algı Fiilleriyle Can Kullanımı (See, Hear, Smell)",
    "description": "A1 seviyesinde Duyusal Algı Fiilleriyle Can Kullanımı (See, Hear, Smell) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Duyusal Algı Fiilleriyle Can Kullanımı (See, Hear, Smell) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 56,
    "estimatedDuration": 12,
    "prerequisites": [
      55
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Duyusal Algı Fiilleriyle Can Kullanımı (See, Hear, Smell) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 57,
    "code": "A1-07",
    "level": "A1",
    "moduleId": "mod-a1-6",
    "moduleName": "Yetenekler ve İzin: Can & Can't",
    "title": "Sporlar ve Aktiviteler: Play, Go, Do Kullanım Matrisi",
    "description": "A1 seviyesinde Sporlar ve Aktiviteler: Play, Go, Do Kullanım Matrisi konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Sporlar ve Aktiviteler: Play, Go, Do Kullanım Matrisi konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 57,
    "estimatedDuration": 12,
    "prerequisites": [
      56
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Sporlar ve Aktiviteler: Play, Go, Do Kullanım Matrisi konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 58,
    "code": "A1-08",
    "level": "A1",
    "moduleId": "mod-a1-6",
    "moduleName": "Yetenekler ve İzin: Can & Can't",
    "title": "Müzik Aletleri ve Beceriler (play the piano)",
    "description": "A1 seviyesinde Müzik Aletleri ve Beceriler (play the piano) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Müzik Aletleri ve Beceriler (play the piano) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 58,
    "estimatedDuration": 12,
    "prerequisites": [
      57
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Müzik Aletleri ve Beceriler (play the piano) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 59,
    "code": "A1-09",
    "level": "A1",
    "moduleId": "mod-a1-6",
    "moduleName": "Yetenekler ve İzin: Can & Can't",
    "title": "Becerileri Derecelendirme (Very well, Quite well, A little bit)",
    "description": "A1 seviyesinde Becerileri Derecelendirme (Very well, Quite well, A little bit) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Becerileri Derecelendirme (Very well, Quite well, A little bit) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 59,
    "estimatedDuration": 12,
    "prerequisites": [
      58
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Becerileri Derecelendirme (Very well, Quite well, A little bit) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 60,
    "code": "A1-10",
    "level": "A1",
    "moduleId": "mod-a1-6",
    "moduleName": "Yetenekler ve İzin: Can & Can't",
    "title": "A1 Modül 6 Entegrasyonu: İş İlanı Başvurusunda Becerileri Sunma",
    "description": "A1 seviyesinde A1 Modül 6 Entegrasyonu: İş İlanı Başvurusunda Becerileri Sunma konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "A1 Modül 6 Entegrasyonu: İş İlanı Başvurusunda Becerileri Sunma konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 60,
    "estimatedDuration": 12,
    "prerequisites": [
      59
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "A1 Modül 6 Entegrasyonu: İş İlanı Başvurusunda Becerileri Sunma konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 61,
    "code": "A1-01",
    "level": "A1",
    "moduleId": "mod-a1-7",
    "moduleName": "Şimdiki Zaman: Present Continuous",
    "title": "Şimdiki Zaman (Present Continuous): Formülü ve Mantığı",
    "description": "A1 seviyesinde Şimdiki Zaman (Present Continuous): Formülü ve Mantığı konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Şimdiki Zaman (Present Continuous): Formülü ve Mantığı konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 61,
    "estimatedDuration": 12,
    "prerequisites": [
      60
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Şimdiki Zaman (Present Continuous): Formülü ve Mantığı konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 62,
    "code": "A1-02",
    "level": "A1",
    "moduleId": "mod-a1-7",
    "moduleName": "Şimdiki Zaman: Present Continuous",
    "title": "Fiil Sonuna -ing Ekleme Kuralları ve İmla Değişimleri",
    "description": "A1 seviyesinde Fiil Sonuna -ing Ekleme Kuralları ve İmla Değişimleri konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Fiil Sonuna -ing Ekleme Kuralları ve İmla Değişimleri konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 62,
    "estimatedDuration": 12,
    "prerequisites": [
      61
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Fiil Sonuna -ing Ekleme Kuralları ve İmla Değişimleri konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 63,
    "code": "A1-03",
    "level": "A1",
    "moduleId": "mod-a1-7",
    "moduleName": "Şimdiki Zaman: Present Continuous",
    "title": "Şimdiki Zaman: Olumsuz Cümleler (am not, isn't, aren't)",
    "description": "A1 seviyesinde Şimdiki Zaman: Olumsuz Cümleler (am not, isn't, aren't) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Şimdiki Zaman: Olumsuz Cümleler (am not, isn't, aren't) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 63,
    "estimatedDuration": 12,
    "prerequisites": [
      62
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Şimdiki Zaman: Olumsuz Cümleler (am not, isn't, aren't) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 64,
    "code": "A1-04",
    "level": "A1",
    "moduleId": "mod-a1-7",
    "moduleName": "Şimdiki Zaman: Present Continuous",
    "title": "Şimdiki Zaman: Soru Cümleleri ve Kısa Cevaplar",
    "description": "A1 seviyesinde Şimdiki Zaman: Soru Cümleleri ve Kısa Cevaplar konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Şimdiki Zaman: Soru Cümleleri ve Kısa Cevaplar konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 64,
    "estimatedDuration": 12,
    "prerequisites": [
      63
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Şimdiki Zaman: Soru Cümleleri ve Kısa Cevaplar konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 65,
    "code": "A1-05",
    "level": "A1",
    "moduleId": "mod-a1-7",
    "moduleName": "Şimdiki Zaman: Present Continuous",
    "title": "Şimdiki Zaman Zaman Belirteçleri: Now, At the moment, Right now",
    "description": "A1 seviyesinde Şimdiki Zaman Zaman Belirteçleri: Now, At the moment, Right now konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Şimdiki Zaman Zaman Belirteçleri: Now, At the moment, Right now konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 65,
    "estimatedDuration": 12,
    "prerequisites": [
      64
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Şimdiki Zaman Zaman Belirteçleri: Now, At the moment, Right now konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 66,
    "code": "A1-06",
    "level": "A1",
    "moduleId": "mod-a1-7",
    "moduleName": "Şimdiki Zaman: Present Continuous",
    "title": "Geniş Zaman vs Şimdiki Zaman Karşılaştırması",
    "description": "A1 seviyesinde Geniş Zaman vs Şimdiki Zaman Karşılaştırması konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Geniş Zaman vs Şimdiki Zaman Karşılaştırması konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 66,
    "estimatedDuration": 12,
    "prerequisites": [
      65
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Geniş Zaman vs Şimdiki Zaman Karşılaştırması konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 67,
    "code": "A1-07",
    "level": "A1",
    "moduleId": "mod-a1-7",
    "moduleName": "Şimdiki Zaman: Present Continuous",
    "title": "Durum Bildiren Fiiller (Stative Verbs) Neden -ing Almaz?",
    "description": "A1 seviyesinde Durum Bildiren Fiiller (Stative Verbs) Neden -ing Almaz? konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Durum Bildiren Fiiller (Stative Verbs) Neden -ing Almaz? konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 67,
    "estimatedDuration": 12,
    "prerequisites": [
      66
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Durum Bildiren Fiiller (Stative Verbs) Neden -ing Almaz? konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 68,
    "code": "A1-08",
    "level": "A1",
    "moduleId": "mod-a1-7",
    "moduleName": "Şimdiki Zaman: Present Continuous",
    "title": "Fotoğraf ve Görsel Tasviri Yapma",
    "description": "A1 seviyesinde Fotoğraf ve Görsel Tasviri Yapma konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Fotoğraf ve Görsel Tasviri Yapma konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 68,
    "estimatedDuration": 12,
    "prerequisites": [
      67
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Fotoğraf ve Görsel Tasviri Yapma konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 69,
    "code": "A1-09",
    "level": "A1",
    "moduleId": "mod-a1-7",
    "moduleName": "Şimdiki Zaman: Present Continuous",
    "title": "Telefon Görüşmesi Kalıpları ve Anlık Durumlar",
    "description": "A1 seviyesinde Telefon Görüşmesi Kalıpları ve Anlık Durumlar konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Telefon Görüşmesi Kalıpları ve Anlık Durumlar konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 69,
    "estimatedDuration": 12,
    "prerequisites": [
      68
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Telefon Görüşmesi Kalıpları ve Anlık Durumlar konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 70,
    "code": "A1-10",
    "level": "A1",
    "moduleId": "mod-a1-7",
    "moduleName": "Şimdiki Zaman: Present Continuous",
    "title": "A1 Modül 7 Entegrasyonu: Canlı Olay Akışını Aktarma",
    "description": "A1 seviyesinde A1 Modül 7 Entegrasyonu: Canlı Olay Akışını Aktarma konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "A1 Modül 7 Entegrasyonu: Canlı Olay Akışını Aktarma konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 70,
    "estimatedDuration": 12,
    "prerequisites": [
      69
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "A1 Modül 7 Entegrasyonu: Canlı Olay Akışını Aktarma konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 71,
    "code": "A1-01",
    "level": "A1",
    "moduleId": "mod-a1-8",
    "moduleName": "Yiyecek, İçecek ve Miktar Belirteçleri",
    "title": "Sayılabilen (Countable) ve Sayılamayan (Uncountable) İsimler",
    "description": "A1 seviyesinde Sayılabilen (Countable) ve Sayılamayan (Uncountable) İsimler konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Sayılabilen (Countable) ve Sayılamayan (Uncountable) İsimler konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 71,
    "estimatedDuration": 12,
    "prerequisites": [
      70
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Sayılabilen (Countable) ve Sayılamayan (Uncountable) İsimler konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 72,
    "code": "A1-02",
    "level": "A1",
    "moduleId": "mod-a1-8",
    "moduleName": "Yiyecek, İçecek ve Miktar Belirteçleri",
    "title": "A / An Belirteçleri ve İsimlerle Kullanımı",
    "description": "A1 seviyesinde A / An Belirteçleri ve İsimlerle Kullanımı konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "A / An Belirteçleri ve İsimlerle Kullanımı konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 72,
    "estimatedDuration": 12,
    "prerequisites": [
      71
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "A / An Belirteçleri ve İsimlerle Kullanımı konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 73,
    "code": "A1-03",
    "level": "A1",
    "moduleId": "mod-a1-8",
    "moduleName": "Yiyecek, İçecek ve Miktar Belirteçleri",
    "title": "Some ve Any Kullanım Farkları (Olumlu, Olumsuz, Soru)",
    "description": "A1 seviyesinde Some ve Any Kullanım Farkları (Olumlu, Olumsuz, Soru) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Some ve Any Kullanım Farkları (Olumlu, Olumsuz, Soru) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 73,
    "estimatedDuration": 12,
    "prerequisites": [
      72
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Some ve Any Kullanım Farkları (Olumlu, Olumsuz, Soru) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 74,
    "code": "A1-04",
    "level": "A1",
    "moduleId": "mod-a1-8",
    "moduleName": "Yiyecek, İçecek ve Miktar Belirteçleri",
    "title": "Much, Many ve A lot of ile Miktar Bildirimi",
    "description": "A1 seviyesinde Much, Many ve A lot of ile Miktar Bildirimi konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Much, Many ve A lot of ile Miktar Bildirimi konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 74,
    "estimatedDuration": 12,
    "prerequisites": [
      73
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Much, Many ve A lot of ile Miktar Bildirimi konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 75,
    "code": "A1-05",
    "level": "A1",
    "moduleId": "mod-a1-8",
    "moduleName": "Yiyecek, İçecek ve Miktar Belirteçleri",
    "title": "A few (Birkaç) ve A little (Biraz) Kullanımı",
    "description": "A1 seviyesinde A few (Birkaç) ve A little (Biraz) Kullanımı konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "A few (Birkaç) ve A little (Biraz) Kullanımı konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 75,
    "estimatedDuration": 12,
    "prerequisites": [
      74
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "A few (Birkaç) ve A little (Biraz) Kullanımı konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 76,
    "code": "A1-06",
    "level": "A1",
    "moduleId": "mod-a1-8",
    "moduleName": "Yiyecek, İçecek ve Miktar Belirteçleri",
    "title": "Restoranda Sipariş Verme Kalıpları (I would like...)",
    "description": "A1 seviyesinde Restoranda Sipariş Verme Kalıpları (I would like...) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Restoranda Sipariş Verme Kalıpları (I would like...) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 76,
    "estimatedDuration": 12,
    "prerequisites": [
      75
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Restoranda Sipariş Verme Kalıpları (I would like...) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 77,
    "code": "A1-07",
    "level": "A1",
    "moduleId": "mod-a1-8",
    "moduleName": "Yiyecek, İçecek ve Miktar Belirteçleri",
    "title": "Markette ve Mağazada Alışveriş Diyalogları",
    "description": "A1 seviyesinde Markette ve Mağazada Alışveriş Diyalogları konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Markette ve Mağazada Alışveriş Diyalogları konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 77,
    "estimatedDuration": 12,
    "prerequisites": [
      76
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Markette ve Mağazada Alışveriş Diyalogları konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 78,
    "code": "A1-08",
    "level": "A1",
    "moduleId": "mod-a1-8",
    "moduleName": "Yiyecek, İçecek ve Miktar Belirteçleri",
    "title": "Giysiler, Bedenler ve Renk Uyumları",
    "description": "A1 seviyesinde Giysiler, Bedenler ve Renk Uyumları konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Giysiler, Bedenler ve Renk Uyumları konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 78,
    "estimatedDuration": 12,
    "prerequisites": [
      77
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Giysiler, Bedenler ve Renk Uyumları konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 79,
    "code": "A1-09",
    "level": "A1",
    "moduleId": "mod-a1-8",
    "moduleName": "Yiyecek, İçecek ve Miktar Belirteçleri",
    "title": "Öneri Kalıpları: Let's..., Shall we...?, How about...?",
    "description": "A1 seviyesinde Öneri Kalıpları: Let's..., Shall we...?, How about...? konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Öneri Kalıpları: Let's..., Shall we...?, How about...? konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 79,
    "estimatedDuration": 12,
    "prerequisites": [
      78
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Öneri Kalıpları: Let's..., Shall we...?, How about...? konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 80,
    "code": "A1-10",
    "level": "A1",
    "moduleId": "mod-a1-8",
    "moduleName": "Yiyecek, İçecek ve Miktar Belirteçleri",
    "title": "A1 Seviye Sonu Entegrasyonu ve Yeterlilik Değerlendirmesi",
    "description": "A1 seviyesinde A1 Seviye Sonu Entegrasyonu ve Yeterlilik Değerlendirmesi konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "A1 Seviye Sonu Entegrasyonu ve Yeterlilik Değerlendirmesi konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 80,
    "estimatedDuration": 12,
    "prerequisites": [
      79
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "A1 Seviye Sonu Entegrasyonu ve Yeterlilik Değerlendirmesi konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 50
  },
  {
    "id": 81,
    "code": "A2-01",
    "level": "A2",
    "moduleId": "mod-a2-1",
    "moduleName": "Geçmiş Zaman: Düzenli ve Düzensiz Fiiller",
    "title": "Geçmiş Zamanın Temel Mantığı ve Did Yardımcı Fiili",
    "description": "A2 seviyesinde Geçmiş Zamanın Temel Mantığı ve Did Yardımcı Fiili konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Geçmiş Zamanın Temel Mantığı ve Did Yardımcı Fiili konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 81,
    "estimatedDuration": 15,
    "prerequisites": [
      80
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Geçmiş Zamanın Temel Mantığı ve Did Yardımcı Fiili konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 82,
    "code": "A2-02",
    "level": "A2",
    "moduleId": "mod-a2-1",
    "moduleName": "Geçmiş Zaman: Düzenli ve Düzensiz Fiiller",
    "title": "Düzenli Fiiller: -ed Takısı ve İmla Kuralları",
    "description": "A2 seviyesinde Düzenli Fiiller: -ed Takısı ve İmla Kuralları konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Düzenli Fiiller: -ed Takısı ve İmla Kuralları konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 82,
    "estimatedDuration": 15,
    "prerequisites": [
      81
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Düzenli Fiiller: -ed Takısı ve İmla Kuralları konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 83,
    "code": "A2-03",
    "level": "A2",
    "moduleId": "mod-a2-1",
    "moduleName": "Geçmiş Zaman: Düzenli ve Düzensiz Fiiller",
    "title": "-ed Takısının 3 Farklı Fonetik Telaffuzu (/t/, /d/, /ɪd/)",
    "description": "A2 seviyesinde -ed Takısının 3 Farklı Fonetik Telaffuzu (/t/, /d/, /ɪd/) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "-ed Takısının 3 Farklı Fonetik Telaffuzu (/t/, /d/, /ɪd/) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 83,
    "estimatedDuration": 15,
    "prerequisites": [
      82
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "-ed Takısının 3 Farklı Fonetik Telaffuzu (/t/, /d/, /ɪd/) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 84,
    "code": "A2-04",
    "level": "A2",
    "moduleId": "mod-a2-1",
    "moduleName": "Geçmiş Zaman: Düzenli ve Düzensiz Fiiller",
    "title": "En Sık Kullanılan 50 Düzensiz Fiil (Go, Buy, See, Have, Do)",
    "description": "A2 seviyesinde En Sık Kullanılan 50 Düzensiz Fiil (Go, Buy, See, Have, Do) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "En Sık Kullanılan 50 Düzensiz Fiil (Go, Buy, See, Have, Do) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 84,
    "estimatedDuration": 15,
    "prerequisites": [
      83
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "En Sık Kullanılan 50 Düzensiz Fiil (Go, Buy, See, Have, Do) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 85,
    "code": "A2-05",
    "level": "A2",
    "moduleId": "mod-a2-1",
    "moduleName": "Geçmiş Zaman: Düzenli ve Düzensiz Fiiller",
    "title": "Geçmiş Zaman: Olumsuz Cümleler (Didn't + Yalın Fiil)",
    "description": "A2 seviyesinde Geçmiş Zaman: Olumsuz Cümleler (Didn't + Yalın Fiil) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Geçmiş Zaman: Olumsuz Cümleler (Didn't + Yalın Fiil) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 85,
    "estimatedDuration": 15,
    "prerequisites": [
      84
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Geçmiş Zaman: Olumsuz Cümleler (Didn't + Yalın Fiil) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 86,
    "code": "A2-06",
    "level": "A2",
    "moduleId": "mod-a2-1",
    "moduleName": "Geçmiş Zaman: Düzenli ve Düzensiz Fiiller",
    "title": "Geçmiş Zaman: Soru Cümleleri (Did you...?) ve Kısa Cevaplar",
    "description": "A2 seviyesinde Geçmiş Zaman: Soru Cümleleri (Did you...?) ve Kısa Cevaplar konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Geçmiş Zaman: Soru Cümleleri (Did you...?) ve Kısa Cevaplar konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 86,
    "estimatedDuration": 15,
    "prerequisites": [
      85
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Geçmiş Zaman: Soru Cümleleri (Did you...?) ve Kısa Cevaplar konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 87,
    "code": "A2-07",
    "level": "A2",
    "moduleId": "mod-a2-1",
    "moduleName": "Geçmiş Zaman: Düzenli ve Düzensiz Fiiller",
    "title": "Geçmiş Zaman Zaman Belirteçleri (Yesterday, Last week, 2 days ago)",
    "description": "A2 seviyesinde Geçmiş Zaman Zaman Belirteçleri (Yesterday, Last week, 2 days ago) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Geçmiş Zaman Zaman Belirteçleri (Yesterday, Last week, 2 days ago) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 87,
    "estimatedDuration": 15,
    "prerequisites": [
      86
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Geçmiş Zaman Zaman Belirteçleri (Yesterday, Last week, 2 days ago) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 88,
    "code": "A2-08",
    "level": "A2",
    "moduleId": "mod-a2-1",
    "moduleName": "Geçmiş Zaman: Düzenli ve Düzensiz Fiiller",
    "title": "To Be Fiilinin Geçmiş Hali: Was & Were Kullanımı",
    "description": "A2 seviyesinde To Be Fiilinin Geçmiş Hali: Was & Were Kullanımı konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "To Be Fiilinin Geçmiş Hali: Was & Were Kullanımı konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 88,
    "estimatedDuration": 15,
    "prerequisites": [
      87
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "To Be Fiilinin Geçmiş Hali: Was & Were Kullanımı konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 89,
    "code": "A2-09",
    "level": "A2",
    "moduleId": "mod-a2-1",
    "moduleName": "Geçmiş Zaman: Düzenli ve Düzensiz Fiiller",
    "title": "Was & Were: Olumsuz ve Soru Cümleleri",
    "description": "A2 seviyesinde Was & Were: Olumsuz ve Soru Cümleleri konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Was & Were: Olumsuz ve Soru Cümleleri konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 89,
    "estimatedDuration": 15,
    "prerequisites": [
      88
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Was & Were: Olumsuz ve Soru Cümleleri konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 90,
    "code": "A2-10",
    "level": "A2",
    "moduleId": "mod-a2-1",
    "moduleName": "Geçmiş Zaman: Düzenli ve Düzensiz Fiiller",
    "title": "A2 Modül 1 Entegrasyonu: Unutulmaz Bir Tatil Gününü Anlatma",
    "description": "A2 seviyesinde A2 Modül 1 Entegrasyonu: Unutulmaz Bir Tatil Gününü Anlatma konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "A2 Modül 1 Entegrasyonu: Unutulmaz Bir Tatil Gününü Anlatma konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 90,
    "estimatedDuration": 15,
    "prerequisites": [
      89
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "A2 Modül 1 Entegrasyonu: Unutulmaz Bir Tatil Gününü Anlatma konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 91,
    "code": "A2-01",
    "level": "A2",
    "moduleId": "mod-a2-2",
    "moduleName": "Geçmişte Süregelen Olaylar & Zaman Bağlaçları",
    "title": "Sürekli Geçmiş Zaman (Past Continuous): Was/Were + V-ing",
    "description": "A2 seviyesinde Sürekli Geçmiş Zaman (Past Continuous): Was/Were + V-ing konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Sürekli Geçmiş Zaman (Past Continuous): Was/Were + V-ing konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 91,
    "estimatedDuration": 15,
    "prerequisites": [
      90
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Sürekli Geçmiş Zaman (Past Continuous): Was/Were + V-ing konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 92,
    "code": "A2-02",
    "level": "A2",
    "moduleId": "mod-a2-2",
    "moduleName": "Geçmişte Süregelen Olaylar & Zaman Bağlaçları",
    "title": "Past Continuous: Olumsuz ve Soru Formları",
    "description": "A2 seviyesinde Past Continuous: Olumsuz ve Soru Formları konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Past Continuous: Olumsuz ve Soru Formları konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 92,
    "estimatedDuration": 15,
    "prerequisites": [
      91
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Past Continuous: Olumsuz ve Soru Formları konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 93,
    "code": "A2-03",
    "level": "A2",
    "moduleId": "mod-a2-2",
    "moduleName": "Geçmişte Süregelen Olaylar & Zaman Bağlaçları",
    "title": "Geçmiş Zaman vs Past Continuous Karşılaştırması",
    "description": "A2 seviyesinde Geçmiş Zaman vs Past Continuous Karşılaştırması konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Geçmiş Zaman vs Past Continuous Karşılaştırması konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 93,
    "estimatedDuration": 15,
    "prerequisites": [
      92
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Geçmiş Zaman vs Past Continuous Karşılaştırması konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 94,
    "code": "A2-04",
    "level": "A2",
    "moduleId": "mod-a2-2",
    "moduleName": "Geçmişte Süregelen Olaylar & Zaman Bağlaçları",
    "title": "Zaman Bağlacı: When ile Anlık Olayın Bölünmesi",
    "description": "A2 seviyesinde Zaman Bağlacı: When ile Anlık Olayın Bölünmesi konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Zaman Bağlacı: When ile Anlık Olayın Bölünmesi konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 94,
    "estimatedDuration": 15,
    "prerequisites": [
      93
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Zaman Bağlacı: When ile Anlık Olayın Bölünmesi konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 95,
    "code": "A2-05",
    "level": "A2",
    "moduleId": "mod-a2-2",
    "moduleName": "Geçmişte Süregelen Olaylar & Zaman Bağlaçları",
    "title": "Zaman Bağlacı: While ile Eşzamanlı Süregelen Olaylar",
    "description": "A2 seviyesinde Zaman Bağlacı: While ile Eşzamanlı Süregelen Olaylar konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Zaman Bağlacı: While ile Eşzamanlı Süregelen Olaylar konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 95,
    "estimatedDuration": 15,
    "prerequisites": [
      94
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Zaman Bağlacı: While ile Eşzamanlı Süregelen Olaylar konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 96,
    "code": "A2-06",
    "level": "A2",
    "moduleId": "mod-a2-2",
    "moduleName": "Geçmişte Süregelen Olaylar & Zaman Bağlaçları",
    "title": "Bir Hikaye Başlatma ve Arka Plan Tasviri Kurma",
    "description": "A2 seviyesinde Bir Hikaye Başlatma ve Arka Plan Tasviri Kurma konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Bir Hikaye Başlatma ve Arka Plan Tasviri Kurma konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 96,
    "estimatedDuration": 15,
    "prerequisites": [
      95
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Bir Hikaye Başlatma ve Arka Plan Tasviri Kurma konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 97,
    "code": "A2-07",
    "level": "A2",
    "moduleId": "mod-a2-2",
    "moduleName": "Geçmişte Süregelen Olaylar & Zaman Bağlaçları",
    "title": "Kaza, Acil Durum ve Beklenmedik Olayları Anlatma",
    "description": "A2 seviyesinde Kaza, Acil Durum ve Beklenmedik Olayları Anlatma konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Kaza, Acil Durum ve Beklenmedik Olayları Anlatma konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 97,
    "estimatedDuration": 15,
    "prerequisites": [
      96
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Kaza, Acil Durum ve Beklenmedik Olayları Anlatma konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 98,
    "code": "A2-08",
    "level": "A2",
    "moduleId": "mod-a2-2",
    "moduleName": "Geçmişte Süregelen Olaylar & Zaman Bağlaçları",
    "title": "Geçmişte Eşzamanlı İki Eylem (While I was cooking, he was reading)",
    "description": "A2 seviyesinde Geçmişte Eşzamanlı İki Eylem (While I was cooking, he was reading) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Geçmişte Eşzamanlı İki Eylem (While I was cooking, he was reading) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 98,
    "estimatedDuration": 15,
    "prerequisites": [
      97
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Geçmişte Eşzamanlı İki Eylem (While I was cooking, he was reading) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 99,
    "code": "A2-09",
    "level": "A2",
    "moduleId": "mod-a2-2",
    "moduleName": "Geçmişte Süregelen Olaylar & Zaman Bağlaçları",
    "title": "Zaman Çizelgesi ve Kronolojik Olay Akışı",
    "description": "A2 seviyesinde Zaman Çizelgesi ve Kronolojik Olay Akışı konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Zaman Çizelgesi ve Kronolojik Olay Akışı konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 99,
    "estimatedDuration": 15,
    "prerequisites": [
      98
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Zaman Çizelgesi ve Kronolojik Olay Akışı konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 100,
    "code": "A2-10",
    "level": "A2",
    "moduleId": "mod-a2-2",
    "moduleName": "Geçmişte Süregelen Olaylar & Zaman Bağlaçları",
    "title": "A2 Modül 2 Entegrasyonu: Gizemli Bir Olayın İfadesini Verme",
    "description": "A2 seviyesinde A2 Modül 2 Entegrasyonu: Gizemli Bir Olayın İfadesini Verme konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "A2 Modül 2 Entegrasyonu: Gizemli Bir Olayın İfadesini Verme konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 100,
    "estimatedDuration": 15,
    "prerequisites": [
      99
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "A2 Modül 2 Entegrasyonu: Gizemli Bir Olayın İfadesini Verme konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 101,
    "code": "A2-01",
    "level": "A2",
    "moduleId": "mod-a2-3",
    "moduleName": "Karşılaştırmalar ve Üstünlük: Comparative & Superlative",
    "title": "Sıfatların Karşılaştırma Hali (Comparative Adjectives): -er Takısı",
    "description": "A2 seviyesinde Sıfatların Karşılaştırma Hali (Comparative Adjectives): -er Takısı konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Sıfatların Karşılaştırma Hali (Comparative Adjectives): -er Takısı konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 101,
    "estimatedDuration": 15,
    "prerequisites": [
      100
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Sıfatların Karşılaştırma Hali (Comparative Adjectives): -er Takısı konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 102,
    "code": "A2-02",
    "level": "A2",
    "moduleId": "mod-a2-3",
    "moduleName": "Karşılaştırmalar ve Üstünlük: Comparative & Superlative",
    "title": "Uzun Sıfatlarla Karşılaştırma: More + Adjective + Than",
    "description": "A2 seviyesinde Uzun Sıfatlarla Karşılaştırma: More + Adjective + Than konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Uzun Sıfatlarla Karşılaştırma: More + Adjective + Than konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 102,
    "estimatedDuration": 15,
    "prerequisites": [
      101
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Uzun Sıfatlarla Karşılaştırma: More + Adjective + Than konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 103,
    "code": "A2-03",
    "level": "A2",
    "moduleId": "mod-a2-3",
    "moduleName": "Karşılaştırmalar ve Üstünlük: Comparative & Superlative",
    "title": "Düzensiz Karşılaştırma Sıfatları (Good->Better, Bad->Worse, Far->Further)",
    "description": "A2 seviyesinde Düzensiz Karşılaştırma Sıfatları (Good->Better, Bad->Worse, Far->Further) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Düzensiz Karşılaştırma Sıfatları (Good->Better, Bad->Worse, Far->Further) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 103,
    "estimatedDuration": 15,
    "prerequisites": [
      102
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Düzensiz Karşılaştırma Sıfatları (Good->Better, Bad->Worse, Far->Further) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 104,
    "code": "A2-04",
    "level": "A2",
    "moduleId": "mod-a2-3",
    "moduleName": "Karşılaştırmalar ve Üstünlük: Comparative & Superlative",
    "title": "Eşitlik ve Benzerlik: As... As Kalıbı",
    "description": "A2 seviyesinde Eşitlik ve Benzerlik: As... As Kalıbı konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Eşitlik ve Benzerlik: As... As Kalıbı konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 104,
    "estimatedDuration": 15,
    "prerequisites": [
      103
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Eşitlik ve Benzerlik: As... As Kalıbı konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 105,
    "code": "A2-05",
    "level": "A2",
    "moduleId": "mod-a2-3",
    "moduleName": "Karşılaştırmalar ve Üstünlük: Comparative & Superlative",
    "title": "Eşitsizlik Bildirme: Not as... as Kalıbı",
    "description": "A2 seviyesinde Eşitsizlik Bildirme: Not as... as Kalıbı konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Eşitsizlik Bildirme: Not as... as Kalıbı konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 105,
    "estimatedDuration": 15,
    "prerequisites": [
      104
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Eşitsizlik Bildirme: Not as... as Kalıbı konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 106,
    "code": "A2-06",
    "level": "A2",
    "moduleId": "mod-a2-3",
    "moduleName": "Karşılaştırmalar ve Üstünlük: Comparative & Superlative",
    "title": "Sıfatların Üstünlük Hali (Superlative Adjectives): The -est Takısı",
    "description": "A2 seviyesinde Sıfatların Üstünlük Hali (Superlative Adjectives): The -est Takısı konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Sıfatların Üstünlük Hali (Superlative Adjectives): The -est Takısı konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 106,
    "estimatedDuration": 15,
    "prerequisites": [
      105
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Sıfatların Üstünlük Hali (Superlative Adjectives): The -est Takısı konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 107,
    "code": "A2-07",
    "level": "A2",
    "moduleId": "mod-a2-3",
    "moduleName": "Karşılaştırmalar ve Üstünlük: Comparative & Superlative",
    "title": "Uzun Sıfatlarla Üstünlük: The Most + Adjective",
    "description": "A2 seviyesinde Uzun Sıfatlarla Üstünlük: The Most + Adjective konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Uzun Sıfatlarla Üstünlük: The Most + Adjective konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 107,
    "estimatedDuration": 15,
    "prerequisites": [
      106
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Uzun Sıfatlarla Üstünlük: The Most + Adjective konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 108,
    "code": "A2-08",
    "level": "A2",
    "moduleId": "mod-a2-3",
    "moduleName": "Karşılaştırmalar ve Üstünlük: Comparative & Superlative",
    "title": "Düzensiz Üstünlük Sıfatları (The Best, The Worst, The Furthest)",
    "description": "A2 seviyesinde Düzensiz Üstünlük Sıfatları (The Best, The Worst, The Furthest) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Düzensiz Üstünlük Sıfatları (The Best, The Worst, The Furthest) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 108,
    "estimatedDuration": 15,
    "prerequisites": [
      107
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Düzensiz Üstünlük Sıfatları (The Best, The Worst, The Furthest) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 109,
    "code": "A2-09",
    "level": "A2",
    "moduleId": "mod-a2-3",
    "moduleName": "Karşılaştırmalar ve Üstünlük: Comparative & Superlative",
    "title": "Şehirleri, Ürünleri ve İnsanları Kıyaslama",
    "description": "A2 seviyesinde Şehirleri, Ürünleri ve İnsanları Kıyaslama konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Şehirleri, Ürünleri ve İnsanları Kıyaslama konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 109,
    "estimatedDuration": 15,
    "prerequisites": [
      108
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Şehirleri, Ürünleri ve İnsanları Kıyaslama konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 110,
    "code": "A2-10",
    "level": "A2",
    "moduleId": "mod-a2-3",
    "moduleName": "Karşılaştırmalar ve Üstünlük: Comparative & Superlative",
    "title": "A2 Modül 3 Entegrasyonu: İki Şehir Arasında Karar Verme Raporu",
    "description": "A2 seviyesinde A2 Modül 3 Entegrasyonu: İki Şehir Arasında Karar Verme Raporu konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "A2 Modül 3 Entegrasyonu: İki Şehir Arasında Karar Verme Raporu konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 110,
    "estimatedDuration": 15,
    "prerequisites": [
      109
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "A2 Modül 3 Entegrasyonu: İki Şehir Arasında Karar Verme Raporu konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 111,
    "code": "A2-01",
    "level": "A2",
    "moduleId": "mod-a2-4",
    "moduleName": "Gelecek Planları ve Tahminler: Going to vs Will",
    "title": "Be Going To ile Önceden Planlanmış Gelecek",
    "description": "A2 seviyesinde Be Going To ile Önceden Planlanmış Gelecek konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Be Going To ile Önceden Planlanmış Gelecek konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 111,
    "estimatedDuration": 15,
    "prerequisites": [
      110
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Be Going To ile Önceden Planlanmış Gelecek konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 112,
    "code": "A2-02",
    "level": "A2",
    "moduleId": "mod-a2-4",
    "moduleName": "Gelecek Planları ve Tahminler: Going to vs Will",
    "title": "Be Going To: Kanıta Dayalı Gelecek Tahmini (Look at the clouds!)",
    "description": "A2 seviyesinde Be Going To: Kanıta Dayalı Gelecek Tahmini (Look at the clouds!) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Be Going To: Kanıta Dayalı Gelecek Tahmini (Look at the clouds!) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 112,
    "estimatedDuration": 15,
    "prerequisites": [
      111
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Be Going To: Kanıta Dayalı Gelecek Tahmini (Look at the clouds!) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 113,
    "code": "A2-03",
    "level": "A2",
    "moduleId": "mod-a2-4",
    "moduleName": "Gelecek Planları ve Tahminler: Going to vs Will",
    "title": "Will ile Anlık Kararlar ve Spontane Teklifler",
    "description": "A2 seviyesinde Will ile Anlık Kararlar ve Spontane Teklifler konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Will ile Anlık Kararlar ve Spontane Teklifler konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 113,
    "estimatedDuration": 15,
    "prerequisites": [
      112
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Will ile Anlık Kararlar ve Spontane Teklifler konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 114,
    "code": "A2-04",
    "level": "A2",
    "moduleId": "mod-a2-4",
    "moduleName": "Gelecek Planları ve Tahminler: Going to vs Will",
    "title": "Will ile Kişisel Tahminler ve İnançlar (I think it will...)",
    "description": "A2 seviyesinde Will ile Kişisel Tahminler ve İnançlar (I think it will...) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Will ile Kişisel Tahminler ve İnançlar (I think it will...) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 114,
    "estimatedDuration": 15,
    "prerequisites": [
      113
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Will ile Kişisel Tahminler ve İnançlar (I think it will...) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 115,
    "code": "A2-05",
    "level": "A2",
    "moduleId": "mod-a2-4",
    "moduleName": "Gelecek Planları ve Tahminler: Going to vs Will",
    "title": "Going To vs Will Karşılaştırmalı Kullanım Analizi",
    "description": "A2 seviyesinde Going To vs Will Karşılaştırmalı Kullanım Analizi konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Going To vs Will Karşılaştırmalı Kullanım Analizi konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 115,
    "estimatedDuration": 15,
    "prerequisites": [
      114
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Going To vs Will Karşılaştırmalı Kullanım Analizi konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 116,
    "code": "A2-06",
    "level": "A2",
    "moduleId": "mod-a2-4",
    "moduleName": "Gelecek Planları ve Tahminler: Going to vs Will",
    "title": "Gelecek Zaman Zarfları: Tomorrow, Next week, In 2030",
    "description": "A2 seviyesinde Gelecek Zaman Zarfları: Tomorrow, Next week, In 2030 konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Gelecek Zaman Zarfları: Tomorrow, Next week, In 2030 konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 116,
    "estimatedDuration": 15,
    "prerequisites": [
      115
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Gelecek Zaman Zarfları: Tomorrow, Next week, In 2030 konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 117,
    "code": "A2-07",
    "level": "A2",
    "moduleId": "mod-a2-4",
    "moduleName": "Gelecek Planları ve Tahminler: Going to vs Will",
    "title": "Şimdiki Zaman ile Gelecek Planı Bildirme (Arrangements)",
    "description": "A2 seviyesinde Şimdiki Zaman ile Gelecek Planı Bildirme (Arrangements) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Şimdiki Zaman ile Gelecek Planı Bildirme (Arrangements) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 117,
    "estimatedDuration": 15,
    "prerequisites": [
      116
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Şimdiki Zaman ile Gelecek Planı Bildirme (Arrangements) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 118,
    "code": "A2-08",
    "level": "A2",
    "moduleId": "mod-a2-4",
    "moduleName": "Gelecek Planları ve Tahminler: Going to vs Will",
    "title": "Söz Verme ve Kararlılık Bildirme: I will definitely...",
    "description": "A2 seviyesinde Söz Verme ve Kararlılık Bildirme: I will definitely... konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Söz Verme ve Kararlılık Bildirme: I will definitely... konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 118,
    "estimatedDuration": 15,
    "prerequisites": [
      117
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Söz Verme ve Kararlılık Bildirme: I will definitely... konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 119,
    "code": "A2-09",
    "level": "A2",
    "moduleId": "mod-a2-4",
    "moduleName": "Gelecek Planları ve Tahminler: Going to vs Will",
    "title": "Gelecek Zaman Soru Kalıpları: What will you do?",
    "description": "A2 seviyesinde Gelecek Zaman Soru Kalıpları: What will you do? konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Gelecek Zaman Soru Kalıpları: What will you do? konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 119,
    "estimatedDuration": 15,
    "prerequisites": [
      118
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Gelecek Zaman Soru Kalıpları: What will you do? konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 120,
    "code": "A2-10",
    "level": "A2",
    "moduleId": "mod-a2-4",
    "moduleName": "Gelecek Planları ve Tahminler: Going to vs Will",
    "title": "A2 Modül 4 Entegrasyonu: 5 Yıllık Gelecek Planı Sunumu",
    "description": "A2 seviyesinde A2 Modül 4 Entegrasyonu: 5 Yıllık Gelecek Planı Sunumu konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "A2 Modül 4 Entegrasyonu: 5 Yıllık Gelecek Planı Sunumu konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 120,
    "estimatedDuration": 15,
    "prerequisites": [
      119
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "A2 Modül 4 Entegrasyonu: 5 Yıllık Gelecek Planı Sunumu konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 121,
    "code": "A2-01",
    "level": "A2",
    "moduleId": "mod-a2-5",
    "moduleName": "Zorunluluk, Tavsiye ve Kurallar: Have to, Must, Should",
    "title": "Dışsal Zorunluluk: Have to & Has to",
    "description": "A2 seviyesinde Dışsal Zorunluluk: Have to & Has to konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Dışsal Zorunluluk: Have to & Has to konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 121,
    "estimatedDuration": 15,
    "prerequisites": [
      120
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Dışsal Zorunluluk: Have to & Has to konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 122,
    "code": "A2-02",
    "level": "A2",
    "moduleId": "mod-a2-5",
    "moduleName": "Zorunluluk, Tavsiye ve Kurallar: Have to, Must, Should",
    "title": "Zorunluluk Yokluğu: Don't have to / Doesn't have to",
    "description": "A2 seviyesinde Zorunluluk Yokluğu: Don't have to / Doesn't have to konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Zorunluluk Yokluğu: Don't have to / Doesn't have to konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 122,
    "estimatedDuration": 15,
    "prerequisites": [
      121
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Zorunluluk Yokluğu: Don't have to / Doesn't have to konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 123,
    "code": "A2-03",
    "level": "A2",
    "moduleId": "mod-a2-5",
    "moduleName": "Zorunluluk, Tavsiye ve Kurallar: Have to, Must, Should",
    "title": "İçsel Zorunluluk ve Yasal Kurallar: Must",
    "description": "A2 seviyesinde İçsel Zorunluluk ve Yasal Kurallar: Must konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "İçsel Zorunluluk ve Yasal Kurallar: Must konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 123,
    "estimatedDuration": 15,
    "prerequisites": [
      122
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "İçsel Zorunluluk ve Yasal Kurallar: Must konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 124,
    "code": "A2-04",
    "level": "A2",
    "moduleId": "mod-a2-5",
    "moduleName": "Zorunluluk, Tavsiye ve Kurallar: Have to, Must, Should",
    "title": "Kesin Yasaklar: Must not (Mustn't) Kullanımı",
    "description": "A2 seviyesinde Kesin Yasaklar: Must not (Mustn't) Kullanımı konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Kesin Yasaklar: Must not (Mustn't) Kullanımı konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 124,
    "estimatedDuration": 15,
    "prerequisites": [
      123
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Kesin Yasaklar: Must not (Mustn't) Kullanımı konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 125,
    "code": "A2-05",
    "level": "A2",
    "moduleId": "mod-a2-5",
    "moduleName": "Zorunluluk, Tavsiye ve Kurallar: Have to, Must, Should",
    "title": "Tavsiye ve Öneri Verme: Should & Shouldn't",
    "description": "A2 seviyesinde Tavsiye ve Öneri Verme: Should & Shouldn't konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Tavsiye ve Öneri Verme: Should & Shouldn't konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 125,
    "estimatedDuration": 15,
    "prerequisites": [
      124
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Tavsiye ve Öneri Verme: Should & Shouldn't konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 126,
    "code": "A2-06",
    "level": "A2",
    "moduleId": "mod-a2-5",
    "moduleName": "Zorunluluk, Tavsiye ve Kurallar: Have to, Must, Should",
    "title": "Alternatif Tavsiye Kalıbı: Ought to ve Why don't you...?",
    "description": "A2 seviyesinde Alternatif Tavsiye Kalıbı: Ought to ve Why don't you...? konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Alternatif Tavsiye Kalıbı: Ought to ve Why don't you...? konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 126,
    "estimatedDuration": 15,
    "prerequisites": [
      125
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Alternatif Tavsiye Kalıbı: Ought to ve Why don't you...? konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 127,
    "code": "A2-07",
    "level": "A2",
    "moduleId": "mod-a2-5",
    "moduleName": "Zorunluluk, Tavsiye ve Kurallar: Have to, Must, Should",
    "title": "Sağlık Sorunları ve Doktordan Tavsiye Alma",
    "description": "A2 seviyesinde Sağlık Sorunları ve Doktordan Tavsiye Alma konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Sağlık Sorunları ve Doktordan Tavsiye Alma konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 127,
    "estimatedDuration": 15,
    "prerequisites": [
      126
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Sağlık Sorunları ve Doktordan Tavsiye Alma konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 128,
    "code": "A2-08",
    "level": "A2",
    "moduleId": "mod-a2-5",
    "moduleName": "Zorunluluk, Tavsiye ve Kurallar: Have to, Must, Should",
    "title": "Trafik, Okul ve İşyeri Kurallarını İfade Etme",
    "description": "A2 seviyesinde Trafik, Okul ve İşyeri Kurallarını İfade Etme konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Trafik, Okul ve İşyeri Kurallarını İfade Etme konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 128,
    "estimatedDuration": 15,
    "prerequisites": [
      127
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Trafik, Okul ve İşyeri Kurallarını İfade Etme konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 129,
    "code": "A2-09",
    "level": "A2",
    "moduleId": "mod-a2-5",
    "moduleName": "Zorunluluk, Tavsiye ve Kurallar: Have to, Must, Should",
    "title": "Zorunluluk ve İhtiyaç: Need to & Don't need to",
    "description": "A2 seviyesinde Zorunluluk ve İhtiyaç: Need to & Don't need to konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Zorunluluk ve İhtiyaç: Need to & Don't need to konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 129,
    "estimatedDuration": 15,
    "prerequisites": [
      128
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Zorunluluk ve İhtiyaç: Need to & Don't need to konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 130,
    "code": "A2-10",
    "level": "A2",
    "moduleId": "mod-a2-5",
    "moduleName": "Zorunluluk, Tavsiye ve Kurallar: Have to, Must, Should",
    "title": "A2 Modül 5 Entegrasyonu: Yeni Bir Ofis İçin Kural Kılavuzu Hazırlama",
    "description": "A2 seviyesinde A2 Modül 5 Entegrasyonu: Yeni Bir Ofis İçin Kural Kılavuzu Hazırlama konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "A2 Modül 5 Entegrasyonu: Yeni Bir Ofis İçin Kural Kılavuzu Hazırlama konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 130,
    "estimatedDuration": 15,
    "prerequisites": [
      129
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "A2 Modül 5 Entegrasyonu: Yeni Bir Ofis İçin Kural Kılavuzu Hazırlama konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 131,
    "code": "A2-01",
    "level": "A2",
    "moduleId": "mod-a2-6",
    "moduleName": "Deneyimler ve Yaşam Olayları: Present Perfect Temelleri",
    "title": "Present Perfect Tense Mantığı: Have/Has + V3",
    "description": "A2 seviyesinde Present Perfect Tense Mantığı: Have/Has + V3 konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Present Perfect Tense Mantığı: Have/Has + V3 konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 131,
    "estimatedDuration": 15,
    "prerequisites": [
      130
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Present Perfect Tense Mantığı: Have/Has + V3 konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 132,
    "code": "A2-02",
    "level": "A2",
    "moduleId": "mod-a2-6",
    "moduleName": "Deneyimler ve Yaşam Olayları: Present Perfect Temelleri",
    "title": "Düzenli ve Düzensiz Fiillerin 3. Halleri (Past Participles)",
    "description": "A2 seviyesinde Düzenli ve Düzensiz Fiillerin 3. Halleri (Past Participles) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Düzenli ve Düzensiz Fiillerin 3. Halleri (Past Participles) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 132,
    "estimatedDuration": 15,
    "prerequisites": [
      131
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Düzenli ve Düzensiz Fiillerin 3. Halleri (Past Participles) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 133,
    "code": "A2-03",
    "level": "A2",
    "moduleId": "mod-a2-6",
    "moduleName": "Deneyimler ve Yaşam Olayları: Present Perfect Temelleri",
    "title": "Hayat Deneyimleri Sorma: Have you ever...?",
    "description": "A2 seviyesinde Hayat Deneyimleri Sorma: Have you ever...? konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Hayat Deneyimleri Sorma: Have you ever...? konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 133,
    "estimatedDuration": 15,
    "prerequisites": [
      132
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Hayat Deneyimleri Sorma: Have you ever...? konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 134,
    "code": "A2-04",
    "level": "A2",
    "moduleId": "mod-a2-6",
    "moduleName": "Deneyimler ve Yaşam Olayları: Present Perfect Temelleri",
    "title": "Hiç Yapılmamış Eylemler: I have never...",
    "description": "A2 seviyesinde Hiç Yapılmamış Eylemler: I have never... konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Hiç Yapılmamış Eylemler: I have never... konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 134,
    "estimatedDuration": 15,
    "prerequisites": [
      133
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Hiç Yapılmamış Eylemler: I have never... konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 135,
    "code": "A2-05",
    "level": "A2",
    "moduleId": "mod-a2-6",
    "moduleName": "Deneyimler ve Yaşam Olayları: Present Perfect Temelleri",
    "title": "Tamamlanmış Eylemler: Just (Az önce) Kullanımı",
    "description": "A2 seviyesinde Tamamlanmış Eylemler: Just (Az önce) Kullanımı konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Tamamlanmış Eylemler: Just (Az önce) Kullanımı konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 135,
    "estimatedDuration": 15,
    "prerequisites": [
      134
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Tamamlanmış Eylemler: Just (Az önce) Kullanımı konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 136,
    "code": "A2-06",
    "level": "A2",
    "moduleId": "mod-a2-6",
    "moduleName": "Deneyimler ve Yaşam Olayları: Present Perfect Temelleri",
    "title": "Beklenenden Erken Eylemler: Already Kullanımı",
    "description": "A2 seviyesinde Beklenenden Erken Eylemler: Already Kullanımı konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Beklenenden Erken Eylemler: Already Kullanımı konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 136,
    "estimatedDuration": 15,
    "prerequisites": [
      135
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Beklenenden Erken Eylemler: Already Kullanımı konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 137,
    "code": "A2-07",
    "level": "A2",
    "moduleId": "mod-a2-6",
    "moduleName": "Deneyimler ve Yaşam Olayları: Present Perfect Temelleri",
    "title": "Henüz Gerçekleşmemiş Eylemler: Yet (Olumsuz ve Soru)",
    "description": "A2 seviyesinde Henüz Gerçekleşmemiş Eylemler: Yet (Olumsuz ve Soru) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Henüz Gerçekleşmemiş Eylemler: Yet (Olumsuz ve Soru) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 137,
    "estimatedDuration": 15,
    "prerequisites": [
      136
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Henüz Gerçekleşmemiş Eylemler: Yet (Olumsuz ve Soru) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 138,
    "code": "A2-08",
    "level": "A2",
    "moduleId": "mod-a2-6",
    "moduleName": "Deneyimler ve Yaşam Olayları: Present Perfect Temelleri",
    "title": "Been to (Gidip gelmiş) vs Gone to (Halen orada) Ayrımı",
    "description": "A2 seviyesinde Been to (Gidip gelmiş) vs Gone to (Halen orada) Ayrımı konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Been to (Gidip gelmiş) vs Gone to (Halen orada) Ayrımı konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 138,
    "estimatedDuration": 15,
    "prerequisites": [
      137
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Been to (Gidip gelmiş) vs Gone to (Halen orada) Ayrımı konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 139,
    "code": "A2-09",
    "level": "A2",
    "moduleId": "mod-a2-6",
    "moduleName": "Deneyimler ve Yaşam Olayları: Present Perfect Temelleri",
    "title": "How Many Times...? ile Tecrübe Sayısı Sorma",
    "description": "A2 seviyesinde How Many Times...? ile Tecrübe Sayısı Sorma konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "How Many Times...? ile Tecrübe Sayısı Sorma konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 139,
    "estimatedDuration": 15,
    "prerequisites": [
      138
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "How Many Times...? ile Tecrübe Sayısı Sorma konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 140,
    "code": "A2-10",
    "level": "A2",
    "moduleId": "mod-a2-6",
    "moduleName": "Deneyimler ve Yaşam Olayları: Present Perfect Temelleri",
    "title": "A2 Modül 6 Entegrasyonu: Yaşam Deneyimleri ve Seyahat Portfolyosu",
    "description": "A2 seviyesinde A2 Modül 6 Entegrasyonu: Yaşam Deneyimleri ve Seyahat Portfolyosu konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "A2 Modül 6 Entegrasyonu: Yaşam Deneyimleri ve Seyahat Portfolyosu konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 140,
    "estimatedDuration": 15,
    "prerequisites": [
      139
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "A2 Modül 6 Entegrasyonu: Yaşam Deneyimleri ve Seyahat Portfolyosu konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 141,
    "code": "A2-01",
    "level": "A2",
    "moduleId": "mod-a2-7",
    "moduleName": "Seyahat, Ulaşım ve Yol Tarifi İletişimi",
    "title": "Havalimanında Check-in ve Güvenlik Diyalogları",
    "description": "A2 seviyesinde Havalimanında Check-in ve Güvenlik Diyalogları konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Havalimanında Check-in ve Güvenlik Diyalogları konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 141,
    "estimatedDuration": 15,
    "prerequisites": [
      140
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Havalimanında Check-in ve Güvenlik Diyalogları konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 142,
    "code": "A2-02",
    "level": "A2",
    "moduleId": "mod-a2-7",
    "moduleName": "Seyahat, Ulaşım ve Yol Tarifi İletişimi",
    "title": "Tren, Metro ve Otobüs Bileti Alma",
    "description": "A2 seviyesinde Tren, Metro ve Otobüs Bileti Alma konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Tren, Metro ve Otobüs Bileti Alma konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 142,
    "estimatedDuration": 15,
    "prerequisites": [
      141
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Tren, Metro ve Otobüs Bileti Alma konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 143,
    "code": "A2-03",
    "level": "A2",
    "moduleId": "mod-a2-7",
    "moduleName": "Seyahat, Ulaşım ve Yol Tarifi İletişimi",
    "title": "Otelde Rezervasyon Yapma ve Oda Sorunları Bildirme",
    "description": "A2 seviyesinde Otelde Rezervasyon Yapma ve Oda Sorunları Bildirme konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Otelde Rezervasyon Yapma ve Oda Sorunları Bildirme konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 143,
    "estimatedDuration": 15,
    "prerequisites": [
      142
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Otelde Rezervasyon Yapma ve Oda Sorunları Bildirme konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 144,
    "code": "A2-04",
    "level": "A2",
    "moduleId": "mod-a2-7",
    "moduleName": "Seyahat, Ulaşım ve Yol Tarifi İletişimi",
    "title": "Yol ve Yön Sorma: Excuse me, how can I get to...?",
    "description": "A2 seviyesinde Yol ve Yön Sorma: Excuse me, how can I get to...? konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Yol ve Yön Sorma: Excuse me, how can I get to...? konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 144,
    "estimatedDuration": 15,
    "prerequisites": [
      143
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Yol ve Yön Sorma: Excuse me, how can I get to...? konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 145,
    "code": "A2-05",
    "level": "A2",
    "moduleId": "mod-a2-7",
    "moduleName": "Seyahat, Ulaşım ve Yol Tarifi İletişimi",
    "title": "Yön Bildirme İfadeleri: Turn left, go straight, cross the street",
    "description": "A2 seviyesinde Yön Bildirme İfadeleri: Turn left, go straight, cross the street konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Yön Bildirme İfadeleri: Turn left, go straight, cross the street konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 145,
    "estimatedDuration": 15,
    "prerequisites": [
      144
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Yön Bildirme İfadeleri: Turn left, go straight, cross the street konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 146,
    "code": "A2-06",
    "level": "A2",
    "moduleId": "mod-a2-7",
    "moduleName": "Seyahat, Ulaşım ve Yol Tarifi İletişimi",
    "title": "Şehir İçi Ulaşım Araçları ve Biniş Edatları (Get on/off, get in/out)",
    "description": "A2 seviyesinde Şehir İçi Ulaşım Araçları ve Biniş Edatları (Get on/off, get in/out) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Şehir İçi Ulaşım Araçları ve Biniş Edatları (Get on/off, get in/out) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 146,
    "estimatedDuration": 15,
    "prerequisites": [
      145
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Şehir İçi Ulaşım Araçları ve Biniş Edatları (Get on/off, get in/out) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 147,
    "code": "A2-07",
    "level": "A2",
    "moduleId": "mod-a2-7",
    "moduleName": "Seyahat, Ulaşım ve Yol Tarifi İletişimi",
    "title": "Kayıp Eşya Bildirme ve Eşya Tarifi",
    "description": "A2 seviyesinde Kayıp Eşya Bildirme ve Eşya Tarifi konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Kayıp Eşya Bildirme ve Eşya Tarifi konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 147,
    "estimatedDuration": 15,
    "prerequisites": [
      146
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Kayıp Eşya Bildirme ve Eşya Tarifi konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 148,
    "code": "A2-08",
    "level": "A2",
    "moduleId": "mod-a2-7",
    "moduleName": "Seyahat, Ulaşım ve Yol Tarifi İletişimi",
    "title": "Turistik Bilgi Merkezinde Soru Sorma",
    "description": "A2 seviyesinde Turistik Bilgi Merkezinde Soru Sorma konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Turistik Bilgi Merkezinde Soru Sorma konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 148,
    "estimatedDuration": 15,
    "prerequisites": [
      147
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Turistik Bilgi Merkezinde Soru Sorma konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 149,
    "code": "A2-09",
    "level": "A2",
    "moduleId": "mod-a2-7",
    "moduleName": "Seyahat, Ulaşım ve Yol Tarifi İletişimi",
    "title": "Döviz Bozdurma ve ATM Kullanımı",
    "description": "A2 seviyesinde Döviz Bozdurma ve ATM Kullanımı konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Döviz Bozdurma ve ATM Kullanımı konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 149,
    "estimatedDuration": 15,
    "prerequisites": [
      148
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Döviz Bozdurma ve ATM Kullanımı konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 150,
    "code": "A2-10",
    "level": "A2",
    "moduleId": "mod-a2-7",
    "moduleName": "Seyahat, Ulaşım ve Yol Tarifi İletişimi",
    "title": "A2 Modül 7 Entegrasyonu: Yurt Dışı Seyahat Simülasyonu",
    "description": "A2 seviyesinde A2 Modül 7 Entegrasyonu: Yurt Dışı Seyahat Simülasyonu konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "A2 Modül 7 Entegrasyonu: Yurt Dışı Seyahat Simülasyonu konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 150,
    "estimatedDuration": 15,
    "prerequisites": [
      149
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "A2 Modül 7 Entegrasyonu: Yurt Dışı Seyahat Simülasyonu konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 151,
    "code": "A2-01",
    "level": "A2",
    "moduleId": "mod-a2-8",
    "moduleName": "Sosyal Planlar, Restoran ve Günlük Görüşmeler",
    "title": "Too (Aşırı) Kullanımı ve Olumsuzluk Vurgusu (too hot, too expensive)",
    "description": "A2 seviyesinde Too (Aşırı) Kullanımı ve Olumsuzluk Vurgusu (too hot, too expensive) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Too (Aşırı) Kullanımı ve Olumsuzluk Vurgusu (too hot, too expensive) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 151,
    "estimatedDuration": 15,
    "prerequisites": [
      150
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Too (Aşırı) Kullanımı ve Olumsuzluk Vurgusu (too hot, too expensive) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 152,
    "code": "A2-02",
    "level": "A2",
    "moduleId": "mod-a2-8",
    "moduleName": "Sosyal Planlar, Restoran ve Günlük Görüşmeler",
    "title": "Enough (Yeterli) Kullanımı: Sıfat Sonrası ve İsim Öncesi",
    "description": "A2 seviyesinde Enough (Yeterli) Kullanımı: Sıfat Sonrası ve İsim Öncesi konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Enough (Yeterli) Kullanımı: Sıfat Sonrası ve İsim Öncesi konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 152,
    "estimatedDuration": 15,
    "prerequisites": [
      151
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Enough (Yeterli) Kullanımı: Sıfat Sonrası ve İsim Öncesi konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 153,
    "code": "A2-03",
    "level": "A2",
    "moduleId": "mod-a2-8",
    "moduleName": "Sosyal Planlar, Restoran ve Günlük Görüşmeler",
    "title": "Too many vs Too much Ayrımı",
    "description": "A2 seviyesinde Too many vs Too much Ayrımı konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Too many vs Too much Ayrımı konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 153,
    "estimatedDuration": 15,
    "prerequisites": [
      152
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Too many vs Too much Ayrımı konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 154,
    "code": "A2-04",
    "level": "A2",
    "moduleId": "mod-a2-8",
    "moduleName": "Sosyal Planlar, Restoran ve Günlük Görüşmeler",
    "title": "Belgisiz Zamirler: Someone, Anyone, No one, Everyone",
    "description": "A2 seviyesinde Belgisiz Zamirler: Someone, Anyone, No one, Everyone konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Belgisiz Zamirler: Someone, Anyone, No one, Everyone konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 154,
    "estimatedDuration": 15,
    "prerequisites": [
      153
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Belgisiz Zamirler: Someone, Anyone, No one, Everyone konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 155,
    "code": "A2-05",
    "level": "A2",
    "moduleId": "mod-a2-8",
    "moduleName": "Sosyal Planlar, Restoran ve Günlük Görüşmeler",
    "title": "Cansız Belgisiz Zamirler: Something, Anything, Nothing, Everything",
    "description": "A2 seviyesinde Cansız Belgisiz Zamirler: Something, Anything, Nothing, Everything konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Cansız Belgisiz Zamirler: Something, Anything, Nothing, Everything konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 155,
    "estimatedDuration": 15,
    "prerequisites": [
      154
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Cansız Belgisiz Zamirler: Something, Anything, Nothing, Everything konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 156,
    "code": "A2-06",
    "level": "A2",
    "moduleId": "mod-a2-8",
    "moduleName": "Sosyal Planlar, Restoran ve Günlük Görüşmeler",
    "title": "Mekansal Belgisiz Zamirler: Somewhere, Anywhere, Nowhere",
    "description": "A2 seviyesinde Mekansal Belgisiz Zamirler: Somewhere, Anywhere, Nowhere konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Mekansal Belgisiz Zamirler: Somewhere, Anywhere, Nowhere konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 156,
    "estimatedDuration": 15,
    "prerequisites": [
      155
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Mekansal Belgisiz Zamirler: Somewhere, Anywhere, Nowhere konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 157,
    "code": "A2-07",
    "level": "A2",
    "moduleId": "mod-a2-8",
    "moduleName": "Sosyal Planlar, Restoran ve Günlük Görüşmeler",
    "title": "Nesne Zamirleri (Object Pronouns: Me, Him, Her, Us, Them)",
    "description": "A2 seviyesinde Nesne Zamirleri (Object Pronouns: Me, Him, Her, Us, Them) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Nesne Zamirleri (Object Pronouns: Me, Him, Her, Us, Them) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 157,
    "estimatedDuration": 15,
    "prerequisites": [
      156
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Nesne Zamirleri (Object Pronouns: Me, Him, Her, Us, Them) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 158,
    "code": "A2-08",
    "level": "A2",
    "moduleId": "mod-a2-8",
    "moduleName": "Sosyal Planlar, Restoran ve Günlük Görüşmeler",
    "title": "Dönüşlü Zamirler (Reflexive Pronouns: Myself, Yourself, Himself)",
    "description": "A2 seviyesinde Dönüşlü Zamirler (Reflexive Pronouns: Myself, Yourself, Himself) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Dönüşlü Zamirler (Reflexive Pronouns: Myself, Yourself, Himself) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 158,
    "estimatedDuration": 15,
    "prerequisites": [
      157
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Dönüşlü Zamirler (Reflexive Pronouns: Myself, Yourself, Himself) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 159,
    "code": "A2-09",
    "level": "A2",
    "moduleId": "mod-a2-8",
    "moduleName": "Sosyal Planlar, Restoran ve Günlük Görüşmeler",
    "title": "Karşılıklı Zamir: Each other Kullanımı",
    "description": "A2 seviyesinde Karşılıklı Zamir: Each other Kullanımı konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Karşılıklı Zamir: Each other Kullanımı konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 159,
    "estimatedDuration": 15,
    "prerequisites": [
      158
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Karşılıklı Zamir: Each other Kullanımı konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 160,
    "code": "A2-10",
    "level": "A2",
    "moduleId": "mod-a2-8",
    "moduleName": "Sosyal Planlar, Restoran ve Günlük Görüşmeler",
    "title": "A2 Modül 8 Entegrasyonu: Günlük Hayat Sorunlarını Çözme",
    "description": "A2 seviyesinde A2 Modül 8 Entegrasyonu: Günlük Hayat Sorunlarını Çözme konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "A2 Modül 8 Entegrasyonu: Günlük Hayat Sorunlarını Çözme konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 160,
    "estimatedDuration": 15,
    "prerequisites": [
      159
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "A2 Modül 8 Entegrasyonu: Günlük Hayat Sorunlarını Çözme konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 161,
    "code": "A2-01",
    "level": "A2",
    "moduleId": "mod-a2-9",
    "moduleName": "A2 İletişimsel Entegrasyon ve Seviye Değerlendirmesi",
    "title": "A2 Kapsamlı Gramer Sentezi: Tüm Zamanların Karşılaştırması",
    "description": "A2 seviyesinde A2 Kapsamlı Gramer Sentezi: Tüm Zamanların Karşılaştırması konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "A2 Kapsamlı Gramer Sentezi: Tüm Zamanların Karşılaştırması konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 161,
    "estimatedDuration": 15,
    "prerequisites": [
      160
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "A2 Kapsamlı Gramer Sentezi: Tüm Zamanların Karşılaştırması konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 162,
    "code": "A2-02",
    "level": "A2",
    "moduleId": "mod-a2-9",
    "moduleName": "A2 İletişimsel Entegrasyon ve Seviye Değerlendirmesi",
    "title": "Hikaye Anlatımında Zaman ve Bağlaç Akıcılığı",
    "description": "A2 seviyesinde Hikaye Anlatımında Zaman ve Bağlaç Akıcılığı konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Hikaye Anlatımında Zaman ve Bağlaç Akıcılığı konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 162,
    "estimatedDuration": 15,
    "prerequisites": [
      161
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Hikaye Anlatımında Zaman ve Bağlaç Akıcılığı konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 163,
    "code": "A2-03",
    "level": "A2",
    "moduleId": "mod-a2-9",
    "moduleName": "A2 İletişimsel Entegrasyon ve Seviye Değerlendirmesi",
    "title": "E-posta Yazma: Sosyal Davet ve Teşekkür Mektubu",
    "description": "A2 seviyesinde E-posta Yazma: Sosyal Davet ve Teşekkür Mektubu konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "E-posta Yazma: Sosyal Davet ve Teşekkür Mektubu konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 163,
    "estimatedDuration": 15,
    "prerequisites": [
      162
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "E-posta Yazma: Sosyal Davet ve Teşekkür Mektubu konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 164,
    "code": "A2-04",
    "level": "A2",
    "moduleId": "mod-a2-9",
    "moduleName": "A2 İletişimsel Entegrasyon ve Seviye Değerlendirmesi",
    "title": "Telefon Görüşmesinde Mesaj Bırakma ve Randevu Alma",
    "description": "A2 seviyesinde Telefon Görüşmesinde Mesaj Bırakma ve Randevu Alma konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Telefon Görüşmesinde Mesaj Bırakma ve Randevu Alma konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 164,
    "estimatedDuration": 15,
    "prerequisites": [
      163
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Telefon Görüşmesinde Mesaj Bırakma ve Randevu Alma konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 165,
    "code": "A2-05",
    "level": "A2",
    "moduleId": "mod-a2-9",
    "moduleName": "A2 İletişimsel Entegrasyon ve Seviye Değerlendirmesi",
    "title": "Dinleme ve Anlama: Radyo Duyurusu ve Hava Raporu",
    "description": "A2 seviyesinde Dinleme ve Anlama: Radyo Duyurusu ve Hava Raporu konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Dinleme ve Anlama: Radyo Duyurusu ve Hava Raporu konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 165,
    "estimatedDuration": 15,
    "prerequisites": [
      164
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Dinleme ve Anlama: Radyo Duyurusu ve Hava Raporu konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 166,
    "code": "A2-06",
    "level": "A2",
    "moduleId": "mod-a2-9",
    "moduleName": "A2 İletişimsel Entegrasyon ve Seviye Değerlendirmesi",
    "title": "Okuma ve Anlama: Blog Yazısı ve Seyahat Rehberi",
    "description": "A2 seviyesinde Okuma ve Anlama: Blog Yazısı ve Seyahat Rehberi konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Okuma ve Anlama: Blog Yazısı ve Seyahat Rehberi konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 166,
    "estimatedDuration": 15,
    "prerequisites": [
      165
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Okuma ve Anlama: Blog Yazısı ve Seyahat Rehberi konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 167,
    "code": "A2-07",
    "level": "A2",
    "moduleId": "mod-a2-9",
    "moduleName": "A2 İletişimsel Entegrasyon ve Seviye Değerlendirmesi",
    "title": "Konuşma Akıcılığı: Güncel Bir Olay Hakkında Fikir Belirtme",
    "description": "A2 seviyesinde Konuşma Akıcılığı: Güncel Bir Olay Hakkında Fikir Belirtme konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Konuşma Akıcılığı: Güncel Bir Olay Hakkında Fikir Belirtme konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 167,
    "estimatedDuration": 15,
    "prerequisites": [
      166
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Konuşma Akıcılığı: Güncel Bir Olay Hakkında Fikir Belirtme konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 168,
    "code": "A2-08",
    "level": "A2",
    "moduleId": "mod-a2-9",
    "moduleName": "A2 İletişimsel Entegrasyon ve Seviye Değerlendirmesi",
    "title": "Sözlük Kullanımı ve Yeni Kelime Öğrenme Stratejileri",
    "description": "A2 seviyesinde Sözlük Kullanımı ve Yeni Kelime Öğrenme Stratejileri konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Sözlük Kullanımı ve Yeni Kelime Öğrenme Stratejileri konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 168,
    "estimatedDuration": 15,
    "prerequisites": [
      167
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Sözlük Kullanımı ve Yeni Kelime Öğrenme Stratejileri konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 169,
    "code": "A2-09",
    "level": "A2",
    "moduleId": "mod-a2-9",
    "moduleName": "A2 İletişimsel Entegrasyon ve Seviye Değerlendirmesi",
    "title": "A2 Seviye Sonu Pratik Deneme Testi",
    "description": "A2 seviyesinde A2 Seviye Sonu Pratik Deneme Testi konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "A2 Seviye Sonu Pratik Deneme Testi konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 169,
    "estimatedDuration": 15,
    "prerequisites": [
      168
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "A2 Seviye Sonu Pratik Deneme Testi konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 170,
    "code": "A2-10",
    "level": "A2",
    "moduleId": "mod-a2-9",
    "moduleName": "A2 İletişimsel Entegrasyon ve Seviye Değerlendirmesi",
    "title": "A2 Seviye Sonu Yeterlilik Değerlendirmesi ve Sertifikasyon",
    "description": "A2 seviyesinde A2 Seviye Sonu Yeterlilik Değerlendirmesi ve Sertifikasyon konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "A2 Seviye Sonu Yeterlilik Değerlendirmesi ve Sertifikasyon konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 170,
    "estimatedDuration": 15,
    "prerequisites": [
      169
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "A2 Seviye Sonu Yeterlilik Değerlendirmesi ve Sertifikasyon konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 60
  },
  {
    "id": 171,
    "code": "B1-01",
    "level": "B1",
    "moduleId": "mod-b1-1",
    "moduleName": "Zamanlar Arası Geçiş: Present Perfect vs Past Simple",
    "title": "Present Perfect vs Past Simple: Zaman Vurgusu Karşılaştırması",
    "description": "B1 seviyesinde Present Perfect vs Past Simple: Zaman Vurgusu Karşılaştırması konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Present Perfect vs Past Simple: Zaman Vurgusu Karşılaştırması konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 171,
    "estimatedDuration": 18,
    "prerequisites": [
      170
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Present Perfect vs Past Simple: Zaman Vurgusu Karşılaştırması konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 172,
    "code": "B1-02",
    "level": "B1",
    "moduleId": "mod-b1-1",
    "moduleName": "Zamanlar Arası Geçiş: Present Perfect vs Past Simple",
    "title": "Belirli Zaman Zarfları (Yesterday, in 2018) Neden Present Perfect Almaz?",
    "description": "B1 seviyesinde Belirli Zaman Zarfları (Yesterday, in 2018) Neden Present Perfect Almaz? konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Belirli Zaman Zarfları (Yesterday, in 2018) Neden Present Perfect Almaz? konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 172,
    "estimatedDuration": 18,
    "prerequisites": [
      171
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Belirli Zaman Zarfları (Yesterday, in 2018) Neden Present Perfect Almaz? konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 173,
    "code": "B1-03",
    "level": "B1",
    "moduleId": "mod-b1-1",
    "moduleName": "Zamanlar Arası Geçiş: Present Perfect vs Past Simple",
    "title": "Tamamlanmamış Zaman Dilimleri: Today, This week, This year",
    "description": "B1 seviyesinde Tamamlanmamış Zaman Dilimleri: Today, This week, This year konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Tamamlanmamış Zaman Dilimleri: Today, This week, This year konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 173,
    "estimatedDuration": 18,
    "prerequisites": [
      172
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Tamamlanmamış Zaman Dilimleri: Today, This week, This year konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 174,
    "code": "B1-04",
    "level": "B1",
    "moduleId": "mod-b1-1",
    "moduleName": "Zamanlar Arası Geçiş: Present Perfect vs Past Simple",
    "title": "Hayat Deneyimi vs Spesifik Olay Detayı Sorma Zinciri",
    "description": "B1 seviyesinde Hayat Deneyimi vs Spesifik Olay Detayı Sorma Zinciri konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Hayat Deneyimi vs Spesifik Olay Detayı Sorma Zinciri konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 174,
    "estimatedDuration": 18,
    "prerequisites": [
      173
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Hayat Deneyimi vs Spesifik Olay Detayı Sorma Zinciri konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 175,
    "code": "B1-05",
    "level": "B1",
    "moduleId": "mod-b1-1",
    "moduleName": "Zamanlar Arası Geçiş: Present Perfect vs Past Simple",
    "title": "İş Görüşmelerinde Geçmiş Deneyimleri ve Başarıları Aktarma",
    "description": "B1 seviyesinde İş Görüşmelerinde Geçmiş Deneyimleri ve Başarıları Aktarma konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "İş Görüşmelerinde Geçmiş Deneyimleri ve Başarıları Aktarma konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 175,
    "estimatedDuration": 18,
    "prerequisites": [
      174
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "İş Görüşmelerinde Geçmiş Deneyimleri ve Başarıları Aktarma konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 176,
    "code": "B1-06",
    "level": "B1",
    "moduleId": "mod-b1-1",
    "moduleName": "Zamanlar Arası Geçiş: Present Perfect vs Past Simple",
    "title": "Geçmişten Bugüne Değişen Durumları Karşılaştırma",
    "description": "B1 seviyesinde Geçmişten Bugüne Değişen Durumları Karşılaştırma konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Geçmişten Bugüne Değişen Durumları Karşılaştırma konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 176,
    "estimatedDuration": 18,
    "prerequisites": [
      175
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Geçmişten Bugüne Değişen Durumları Karşılaştırma konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 177,
    "code": "B1-07",
    "level": "B1",
    "moduleId": "mod-b1-1",
    "moduleName": "Zamanlar Arası Geçiş: Present Perfect vs Past Simple",
    "title": "Haber ve Son Dakika Gelişmelerini Aktarma",
    "description": "B1 seviyesinde Haber ve Son Dakika Gelişmelerini Aktarma konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Haber ve Son Dakika Gelişmelerini Aktarma konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 177,
    "estimatedDuration": 18,
    "prerequisites": [
      176
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Haber ve Son Dakika Gelişmelerini Aktarma konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 178,
    "code": "B1-08",
    "level": "B1",
    "moduleId": "mod-b1-1",
    "moduleName": "Zamanlar Arası Geçiş: Present Perfect vs Past Simple",
    "title": "Zaman Karışıklıklarında Sık Yapılan Türk Öğrenci Hataları",
    "description": "B1 seviyesinde Zaman Karışıklıklarında Sık Yapılan Türk Öğrenci Hataları konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Zaman Karışıklıklarında Sık Yapılan Türk Öğrenci Hataları konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 178,
    "estimatedDuration": 18,
    "prerequisites": [
      177
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Zaman Karışıklıklarında Sık Yapılan Türk Öğrenci Hataları konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 179,
    "code": "B1-09",
    "level": "B1",
    "moduleId": "mod-b1-1",
    "moduleName": "Zamanlar Arası Geçiş: Present Perfect vs Past Simple",
    "title": "Present Perfect ile İki Cümleyi Bağlama (Since bağlacı)",
    "description": "B1 seviyesinde Present Perfect ile İki Cümleyi Bağlama (Since bağlacı) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Present Perfect ile İki Cümleyi Bağlama (Since bağlacı) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 179,
    "estimatedDuration": 18,
    "prerequisites": [
      178
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Present Perfect ile İki Cümleyi Bağlama (Since bağlacı) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 180,
    "code": "B1-10",
    "level": "B1",
    "moduleId": "mod-b1-1",
    "moduleName": "Zamanlar Arası Geçiş: Present Perfect vs Past Simple",
    "title": "B1 Modül 1 Entegrasyonu: Kişisel Gelişim ve Başarı Hikayesi",
    "description": "B1 seviyesinde B1 Modül 1 Entegrasyonu: Kişisel Gelişim ve Başarı Hikayesi konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "B1 Modül 1 Entegrasyonu: Kişisel Gelişim ve Başarı Hikayesi konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 180,
    "estimatedDuration": 18,
    "prerequisites": [
      179
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "B1 Modül 1 Entegrasyonu: Kişisel Gelişim ve Başarı Hikayesi konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 181,
    "code": "B1-01",
    "level": "B1",
    "moduleId": "mod-b1-2",
    "moduleName": "Süreç ve Etki: Present Perfect Continuous & For/Since",
    "title": "Present Perfect Continuous Mantığı: Have/Has been + V-ing",
    "description": "B1 seviyesinde Present Perfect Continuous Mantığı: Have/Has been + V-ing konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Present Perfect Continuous Mantığı: Have/Has been + V-ing konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 181,
    "estimatedDuration": 18,
    "prerequisites": [
      180
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Present Perfect Continuous Mantığı: Have/Has been + V-ing konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 182,
    "code": "B1-02",
    "level": "B1",
    "moduleId": "mod-b1-2",
    "moduleName": "Süreç ve Etki: Present Perfect Continuous & For/Since",
    "title": "Eylemin Başlangıç Noktası (Since) vs Geçen Süre (For)",
    "description": "B1 seviyesinde Eylemin Başlangıç Noktası (Since) vs Geçen Süre (For) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Eylemin Başlangıç Noktası (Since) vs Geçen Süre (For) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 182,
    "estimatedDuration": 18,
    "prerequisites": [
      181
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Eylemin Başlangıç Noktası (Since) vs Geçen Süre (For) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 183,
    "code": "B1-03",
    "level": "B1",
    "moduleId": "mod-b1-2",
    "moduleName": "Süreç ve Etki: Present Perfect Continuous & For/Since",
    "title": "How long have you been...? ile Süreç Sorma",
    "description": "B1 seviyesinde How long have you been...? ile Süreç Sorma konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "How long have you been...? ile Süreç Sorma konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 183,
    "estimatedDuration": 18,
    "prerequisites": [
      182
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "How long have you been...? ile Süreç Sorma konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 184,
    "code": "B1-04",
    "level": "B1",
    "moduleId": "mod-b1-2",
    "moduleName": "Süreç ve Etki: Present Perfect Continuous & For/Since",
    "title": "Present Perfect Simple vs Continuous: Sonuç mu Süreç mi?",
    "description": "B1 seviyesinde Present Perfect Simple vs Continuous: Sonuç mu Süreç mi? konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Present Perfect Simple vs Continuous: Sonuç mu Süreç mi? konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 184,
    "estimatedDuration": 18,
    "prerequisites": [
      183
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Present Perfect Simple vs Continuous: Sonuç mu Süreç mi? konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 185,
    "code": "B1-05",
    "level": "B1",
    "moduleId": "mod-b1-2",
    "moduleName": "Süreç ve Etki: Present Perfect Continuous & For/Since",
    "title": "Gözle Görülür Fiziksel Etkiler (Why are your hands dirty?)",
    "description": "B1 seviyesinde Gözle Görülür Fiziksel Etkiler (Why are your hands dirty?) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Gözle Görülür Fiziksel Etkiler (Why are your hands dirty?) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 185,
    "estimatedDuration": 18,
    "prerequisites": [
      184
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Gözle Görülür Fiziksel Etkiler (Why are your hands dirty?) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 186,
    "code": "B1-06",
    "level": "B1",
    "moduleId": "mod-b1-2",
    "moduleName": "Süreç ve Etki: Present Perfect Continuous & For/Since",
    "title": "Süregelen Alışkanlıklar ve Geçici Durumlar",
    "description": "B1 seviyesinde Süregelen Alışkanlıklar ve Geçici Durumlar konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Süregelen Alışkanlıklar ve Geçici Durumlar konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 186,
    "estimatedDuration": 18,
    "prerequisites": [
      185
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Süregelen Alışkanlıklar ve Geçici Durumlar konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 187,
    "code": "B1-07",
    "level": "B1",
    "moduleId": "mod-b1-2",
    "moduleName": "Süreç ve Etki: Present Perfect Continuous & For/Since",
    "title": "Stative Fiillerin Continuous Biçiminde Kullanılamaması Kuralı",
    "description": "B1 seviyesinde Stative Fiillerin Continuous Biçiminde Kullanılamaması Kuralı konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Stative Fiillerin Continuous Biçiminde Kullanılamaması Kuralı konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 187,
    "estimatedDuration": 18,
    "prerequisites": [
      186
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Stative Fiillerin Continuous Biçiminde Kullanılamaması Kuralı konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 188,
    "code": "B1-08",
    "level": "B1",
    "moduleId": "mod-b1-2",
    "moduleName": "Süreç ve Etki: Present Perfect Continuous & For/Since",
    "title": "All day, all morning, recently gibi Süreç Belirteçleri",
    "description": "B1 seviyesinde All day, all morning, recently gibi Süreç Belirteçleri konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "All day, all morning, recently gibi Süreç Belirteçleri konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 188,
    "estimatedDuration": 18,
    "prerequisites": [
      187
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "All day, all morning, recently gibi Süreç Belirteçleri konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 189,
    "code": "B1-09",
    "level": "B1",
    "moduleId": "mod-b1-2",
    "moduleName": "Süreç ve Etki: Present Perfect Continuous & For/Since",
    "title": "İş Hayatında Proje İlerlemesi ve Süreç Raporlama",
    "description": "B1 seviyesinde İş Hayatında Proje İlerlemesi ve Süreç Raporlama konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "İş Hayatında Proje İlerlemesi ve Süreç Raporlama konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 189,
    "estimatedDuration": 18,
    "prerequisites": [
      188
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "İş Hayatında Proje İlerlemesi ve Süreç Raporlama konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 190,
    "code": "B1-10",
    "level": "B1",
    "moduleId": "mod-b1-2",
    "moduleName": "Süreç ve Etki: Present Perfect Continuous & For/Since",
    "title": "B1 Modül 2 Entegrasyonu: Devam Eden Projelerin Durum Bildirimi",
    "description": "B1 seviyesinde B1 Modül 2 Entegrasyonu: Devam Eden Projelerin Durum Bildirimi konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "B1 Modül 2 Entegrasyonu: Devam Eden Projelerin Durum Bildirimi konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 190,
    "estimatedDuration": 18,
    "prerequisites": [
      189
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "B1 Modül 2 Entegrasyonu: Devam Eden Projelerin Durum Bildirimi konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 191,
    "code": "B1-01",
    "level": "B1",
    "moduleId": "mod-b1-3",
    "moduleName": "Eski Alışkanlıklar ve Geçmiş Haller: Used to & Would",
    "title": "Used to Yapısı: Geçmişteki Alışkanlıklar ve Haller",
    "description": "B1 seviyesinde Used to Yapısı: Geçmişteki Alışkanlıklar ve Haller konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Used to Yapısı: Geçmişteki Alışkanlıklar ve Haller konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 191,
    "estimatedDuration": 18,
    "prerequisites": [
      190
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Used to Yapısı: Geçmişteki Alışkanlıklar ve Haller konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 192,
    "code": "B1-02",
    "level": "B1",
    "moduleId": "mod-b1-3",
    "moduleName": "Eski Alışkanlıklar ve Geçmiş Haller: Used to & Would",
    "title": "Used to: Olumsuz (Didn't use to) ve Soru (Did you use to...?) Halleri",
    "description": "B1 seviyesinde Used to: Olumsuz (Didn't use to) ve Soru (Did you use to...?) Halleri konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Used to: Olumsuz (Didn't use to) ve Soru (Did you use to...?) Halleri konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 192,
    "estimatedDuration": 18,
    "prerequisites": [
      191
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Used to: Olumsuz (Didn't use to) ve Soru (Did you use to...?) Halleri konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 193,
    "code": "B1-03",
    "level": "B1",
    "moduleId": "mod-b1-3",
    "moduleName": "Eski Alışkanlıklar ve Geçmiş Haller: Used to & Would",
    "title": "Would ile Geçmişte Tekrarlanan Eylemleri Nostaljik Anlatma",
    "description": "B1 seviyesinde Would ile Geçmişte Tekrarlanan Eylemleri Nostaljik Anlatma konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Would ile Geçmişte Tekrarlanan Eylemleri Nostaljik Anlatma konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 193,
    "estimatedDuration": 18,
    "prerequisites": [
      192
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Would ile Geçmişte Tekrarlanan Eylemleri Nostaljik Anlatma konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 194,
    "code": "B1-04",
    "level": "B1",
    "moduleId": "mod-b1-3",
    "moduleName": "Eski Alışkanlıklar ve Geçmiş Haller: Used to & Would",
    "title": "Used to vs Would: Durum Fiillerinde (be, live, have) Fark",
    "description": "B1 seviyesinde Used to vs Would: Durum Fiillerinde (be, live, have) Fark konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Used to vs Would: Durum Fiillerinde (be, live, have) Fark konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 194,
    "estimatedDuration": 18,
    "prerequisites": [
      193
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Used to vs Would: Durum Fiillerinde (be, live, have) Fark konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 195,
    "code": "B1-05",
    "level": "B1",
    "moduleId": "mod-b1-3",
    "moduleName": "Eski Alışkanlıklar ve Geçmiş Haller: Used to & Would",
    "title": "Used to vs Be used to (Alışkın olmak) Karışıklığını Çözme",
    "description": "B1 seviyesinde Used to vs Be used to (Alışkın olmak) Karışıklığını Çözme konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Used to vs Be used to (Alışkın olmak) Karışıklığını Çözme konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 195,
    "estimatedDuration": 18,
    "prerequisites": [
      194
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Used to vs Be used to (Alışkın olmak) Karışıklığını Çözme konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 196,
    "code": "B1-06",
    "level": "B1",
    "moduleId": "mod-b1-3",
    "moduleName": "Eski Alışkanlıklar ve Geçmiş Haller: Used to & Would",
    "title": "Get used to (Alışmak) ile Uyum Sürecini İfade Etme",
    "description": "B1 seviyesinde Get used to (Alışmak) ile Uyum Sürecini İfade Etme konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Get used to (Alışmak) ile Uyum Sürecini İfade Etme konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 196,
    "estimatedDuration": 18,
    "prerequisites": [
      195
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Get used to (Alışmak) ile Uyum Sürecini İfade Etme konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 197,
    "code": "B1-07",
    "level": "B1",
    "moduleId": "mod-b1-3",
    "moduleName": "Eski Alışkanlıklar ve Geçmiş Haller: Used to & Would",
    "title": "Çocukluk Anıları ve Eski Yaşam Tarzını Tasvir Etme",
    "description": "B1 seviyesinde Çocukluk Anıları ve Eski Yaşam Tarzını Tasvir Etme konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Çocukluk Anıları ve Eski Yaşam Tarzını Tasvir Etme konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 197,
    "estimatedDuration": 18,
    "prerequisites": [
      196
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Çocukluk Anıları ve Eski Yaşam Tarzını Tasvir Etme konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 198,
    "code": "B1-08",
    "level": "B1",
    "moduleId": "mod-b1-3",
    "moduleName": "Eski Alışkanlıklar ve Geçmiş Haller: Used to & Would",
    "title": "Teknolojinin Değiştirdiği Alışkanlıkları Karşılaştırma",
    "description": "B1 seviyesinde Teknolojinin Değiştirdiği Alışkanlıkları Karşılaştırma konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Teknolojinin Değiştirdiği Alışkanlıkları Karşılaştırma konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 198,
    "estimatedDuration": 18,
    "prerequisites": [
      197
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Teknolojinin Değiştirdiği Alışkanlıkları Karşılaştırma konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 199,
    "code": "B1-09",
    "level": "B1",
    "moduleId": "mod-b1-3",
    "moduleName": "Eski Alışkanlıklar ve Geçmiş Haller: Used to & Would",
    "title": "Geçmiş Yaşam ile Şimdiki Yaşam Arasında Kontrast Kurma",
    "description": "B1 seviyesinde Geçmiş Yaşam ile Şimdiki Yaşam Arasında Kontrast Kurma konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Geçmiş Yaşam ile Şimdiki Yaşam Arasında Kontrast Kurma konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 199,
    "estimatedDuration": 18,
    "prerequisites": [
      198
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Geçmiş Yaşam ile Şimdiki Yaşam Arasında Kontrast Kurma konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 200,
    "code": "B1-10",
    "level": "B1",
    "moduleId": "mod-b1-3",
    "moduleName": "Eski Alışkanlıklar ve Geçmiş Haller: Used to & Would",
    "title": "B1 Modül 3 Entegrasyonu: Nostaljik Röportaj ve Kuşak Çatışması",
    "description": "B1 seviyesinde B1 Modül 3 Entegrasyonu: Nostaljik Röportaj ve Kuşak Çatışması konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "B1 Modül 3 Entegrasyonu: Nostaljik Röportaj ve Kuşak Çatışması konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 200,
    "estimatedDuration": 18,
    "prerequisites": [
      199
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "B1 Modül 3 Entegrasyonu: Nostaljik Röportaj ve Kuşak Çatışması konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 201,
    "code": "B1-01",
    "level": "B1",
    "moduleId": "mod-b1-4",
    "moduleName": "Tanımlayıcı İlgi Cümlecikleri: Defining Relative Clauses",
    "title": "Relative Clauses Temel Mantığı: İki Cümleyi Tekilleştirme",
    "description": "B1 seviyesinde Relative Clauses Temel Mantığı: İki Cümleyi Tekilleştirme konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Relative Clauses Temel Mantığı: İki Cümleyi Tekilleştirme konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 201,
    "estimatedDuration": 18,
    "prerequisites": [
      200
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Relative Clauses Temel Mantığı: İki Cümleyi Tekilleştirme konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 202,
    "code": "B1-02",
    "level": "B1",
    "moduleId": "mod-b1-4",
    "moduleName": "Tanımlayıcı İlgi Cümlecikleri: Defining Relative Clauses",
    "title": "İnsanlar İçin İlgi Zamiri: Who ve That Kullanımı",
    "description": "B1 seviyesinde İnsanlar İçin İlgi Zamiri: Who ve That Kullanımı konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "İnsanlar İçin İlgi Zamiri: Who ve That Kullanımı konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 202,
    "estimatedDuration": 18,
    "prerequisites": [
      201
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "İnsanlar İçin İlgi Zamiri: Who ve That Kullanımı konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 203,
    "code": "B1-03",
    "level": "B1",
    "moduleId": "mod-b1-4",
    "moduleName": "Tanımlayıcı İlgi Cümlecikleri: Defining Relative Clauses",
    "title": "Nesneler ve Hayvanlar İçin: Which ve That Kullanımı",
    "description": "B1 seviyesinde Nesneler ve Hayvanlar İçin: Which ve That Kullanımı konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Nesneler ve Hayvanlar İçin: Which ve That Kullanımı konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 203,
    "estimatedDuration": 18,
    "prerequisites": [
      202
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Nesneler ve Hayvanlar İçin: Which ve That Kullanımı konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 204,
    "code": "B1-04",
    "level": "B1",
    "moduleId": "mod-b1-4",
    "moduleName": "Tanımlayıcı İlgi Cümlecikleri: Defining Relative Clauses",
    "title": "Aitlik ve Sahiplik Bildiren İlgi Zamiri: Whose (Whose car was stolen)",
    "description": "B1 seviyesinde Aitlik ve Sahiplik Bildiren İlgi Zamiri: Whose (Whose car was stolen) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Aitlik ve Sahiplik Bildiren İlgi Zamiri: Whose (Whose car was stolen) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 204,
    "estimatedDuration": 18,
    "prerequisites": [
      203
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Aitlik ve Sahiplik Bildiren İlgi Zamiri: Whose (Whose car was stolen) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 205,
    "code": "B1-05",
    "level": "B1",
    "moduleId": "mod-b1-4",
    "moduleName": "Tanımlayıcı İlgi Cümlecikleri: Defining Relative Clauses",
    "title": "Mekan ve Zaman Bildiren İlgi Zamirleri: Where ve When",
    "description": "B1 seviyesinde Mekan ve Zaman Bildiren İlgi Zamirleri: Where ve When konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Mekan ve Zaman Bildiren İlgi Zamirleri: Where ve When konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 205,
    "estimatedDuration": 18,
    "prerequisites": [
      204
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Mekan ve Zaman Bildiren İlgi Zamirleri: Where ve When konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 206,
    "code": "B1-06",
    "level": "B1",
    "moduleId": "mod-b1-4",
    "moduleName": "Tanımlayıcı İlgi Cümlecikleri: Defining Relative Clauses",
    "title": "İlgi Zamirinin Cümleden Düşürülmesi (Omitting the relative pronoun)",
    "description": "B1 seviyesinde İlgi Zamirinin Cümleden Düşürülmesi (Omitting the relative pronoun) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "İlgi Zamirinin Cümleden Düşürülmesi (Omitting the relative pronoun) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 206,
    "estimatedDuration": 18,
    "prerequisites": [
      205
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "İlgi Zamirinin Cümleden Düşürülmesi (Omitting the relative pronoun) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 207,
    "code": "B1-07",
    "level": "B1",
    "moduleId": "mod-b1-4",
    "moduleName": "Tanımlayıcı İlgi Cümlecikleri: Defining Relative Clauses",
    "title": "Tanımlayıcı Cümlelerde Virgül Kullanılmama Kuralı",
    "description": "B1 seviyesinde Tanımlayıcı Cümlelerde Virgül Kullanılmama Kuralı konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Tanımlayıcı Cümlelerde Virgül Kullanılmama Kuralı konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 207,
    "estimatedDuration": 18,
    "prerequisites": [
      206
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Tanımlayıcı Cümlelerde Virgül Kullanılmama Kuralı konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 208,
    "code": "B1-08",
    "level": "B1",
    "moduleId": "mod-b1-4",
    "moduleName": "Tanımlayıcı İlgi Cümlecikleri: Defining Relative Clauses",
    "title": "İş Tanımları ve Mesleki Gereksinimleri Niteleme",
    "description": "B1 seviyesinde İş Tanımları ve Mesleki Gereksinimleri Niteleme konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "İş Tanımları ve Mesleki Gereksinimleri Niteleme konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 208,
    "estimatedDuration": 18,
    "prerequisites": [
      207
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "İş Tanımları ve Mesleki Gereksinimleri Niteleme konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 209,
    "code": "B1-09",
    "level": "B1",
    "moduleId": "mod-b1-4",
    "moduleName": "Tanımlayıcı İlgi Cümlecikleri: Defining Relative Clauses",
    "title": "Teknik Terimleri ve Kavramları Tanımlama Pratiği",
    "description": "B1 seviyesinde Teknik Terimleri ve Kavramları Tanımlama Pratiği konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Teknik Terimleri ve Kavramları Tanımlama Pratiği konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 209,
    "estimatedDuration": 18,
    "prerequisites": [
      208
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Teknik Terimleri ve Kavramları Tanımlama Pratiği konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 210,
    "code": "B1-10",
    "level": "B1",
    "moduleId": "mod-b1-4",
    "moduleName": "Tanımlayıcı İlgi Cümlecikleri: Defining Relative Clauses",
    "title": "B1 Modül 4 Entegrasyonu: Şirket Departmanları ve Görev Dağılımı Tanıtımı",
    "description": "B1 seviyesinde B1 Modül 4 Entegrasyonu: Şirket Departmanları ve Görev Dağılımı Tanıtımı konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "B1 Modül 4 Entegrasyonu: Şirket Departmanları ve Görev Dağılımı Tanıtımı konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 210,
    "estimatedDuration": 18,
    "prerequisites": [
      209
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "B1 Modül 4 Entegrasyonu: Şirket Departmanları ve Görev Dağılımı Tanıtımı konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 211,
    "code": "B1-01",
    "level": "B1",
    "moduleId": "mod-b1-5",
    "moduleName": "Koşul Cümleleri: First & Second Conditionals",
    "title": "Zero Conditional: Doğa Yasaları ve Genel Gerçekler (If + Present, Present)",
    "description": "B1 seviyesinde Zero Conditional: Doğa Yasaları ve Genel Gerçekler (If + Present, Present) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Zero Conditional: Doğa Yasaları ve Genel Gerçekler (If + Present, Present) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 211,
    "estimatedDuration": 18,
    "prerequisites": [
      210
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Zero Conditional: Doğa Yasaları ve Genel Gerçekler (If + Present, Present) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 212,
    "code": "B1-02",
    "level": "B1",
    "moduleId": "mod-b1-5",
    "moduleName": "Koşul Cümleleri: First & Second Conditionals",
    "title": "First Conditional: Gelecekteki Gerçek Olasılıklar (If + Present, Will)",
    "description": "B1 seviyesinde First Conditional: Gelecekteki Gerçek Olasılıklar (If + Present, Will) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "First Conditional: Gelecekteki Gerçek Olasılıklar (If + Present, Will) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 212,
    "estimatedDuration": 18,
    "prerequisites": [
      211
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "First Conditional: Gelecekteki Gerçek Olasılıklar (If + Present, Will) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 213,
    "code": "B1-03",
    "level": "B1",
    "moduleId": "mod-b1-5",
    "moduleName": "Koşul Cümleleri: First & Second Conditionals",
    "title": "First Conditional: Unless (If not) Bağlacı ile Olumsuz Koşul",
    "description": "B1 seviyesinde First Conditional: Unless (If not) Bağlacı ile Olumsuz Koşul konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "First Conditional: Unless (If not) Bağlacı ile Olumsuz Koşul konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 213,
    "estimatedDuration": 18,
    "prerequisites": [
      212
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "First Conditional: Unless (If not) Bağlacı ile Olumsuz Koşul konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 214,
    "code": "B1-04",
    "level": "B1",
    "moduleId": "mod-b1-5",
    "moduleName": "Koşul Cümleleri: First & Second Conditionals",
    "title": "First Conditional: Modallarla Zenginleştirme (If you can, you should...)",
    "description": "B1 seviyesinde First Conditional: Modallarla Zenginleştirme (If you can, you should...) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "First Conditional: Modallarla Zenginleştirme (If you can, you should...) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 214,
    "estimatedDuration": 18,
    "prerequisites": [
      213
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "First Conditional: Modallarla Zenginleştirme (If you can, you should...) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 215,
    "code": "B1-05",
    "level": "B1",
    "moduleId": "mod-b1-5",
    "moduleName": "Koşul Cümleleri: First & Second Conditionals",
    "title": "Second Conditional: Şu Andaki Hayali / İmkansız Durumlar (If + Past, Would)",
    "description": "B1 seviyesinde Second Conditional: Şu Andaki Hayali / İmkansız Durumlar (If + Past, Would) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Second Conditional: Şu Andaki Hayali / İmkansız Durumlar (If + Past, Would) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 215,
    "estimatedDuration": 18,
    "prerequisites": [
      214
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Second Conditional: Şu Andaki Hayali / İmkansız Durumlar (If + Past, Would) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 216,
    "code": "B1-06",
    "level": "B1",
    "moduleId": "mod-b1-5",
    "moduleName": "Koşul Cümleleri: First & Second Conditionals",
    "title": "If I were you... ile Tavsiye Verme Sanatı",
    "description": "B1 seviyesinde If I were you... ile Tavsiye Verme Sanatı konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "If I were you... ile Tavsiye Verme Sanatı konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 216,
    "estimatedDuration": 18,
    "prerequisites": [
      215
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "If I were you... ile Tavsiye Verme Sanatı konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 217,
    "code": "B1-07",
    "level": "B1",
    "moduleId": "mod-b1-5",
    "moduleName": "Koşul Cümleleri: First & Second Conditionals",
    "title": "First vs Second Conditional: Gerçeklik Algısı Farkı",
    "description": "B1 seviyesinde First vs Second Conditional: Gerçeklik Algısı Farkı konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "First vs Second Conditional: Gerçeklik Algısı Farkı konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 217,
    "estimatedDuration": 18,
    "prerequisites": [
      216
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "First vs Second Conditional: Gerçeklik Algısı Farkı konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 218,
    "code": "B1-08",
    "level": "B1",
    "moduleId": "mod-b1-5",
    "moduleName": "Koşul Cümleleri: First & Second Conditionals",
    "title": "Pazarlık ve Şart Bildirme Diyalogları (If you order 100 units, we will...)",
    "description": "B1 seviyesinde Pazarlık ve Şart Bildirme Diyalogları (If you order 100 units, we will...) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Pazarlık ve Şart Bildirme Diyalogları (If you order 100 units, we will...) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 218,
    "estimatedDuration": 18,
    "prerequisites": [
      217
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Pazarlık ve Şart Bildirme Diyalogları (If you order 100 units, we will...) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 219,
    "code": "B1-09",
    "level": "B1",
    "moduleId": "mod-b1-5",
    "moduleName": "Koşul Cümleleri: First & Second Conditionals",
    "title": "Hayali Senaryolar ve Varsayımsal Karar Alma",
    "description": "B1 seviyesinde Hayali Senaryolar ve Varsayımsal Karar Alma konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Hayali Senaryolar ve Varsayımsal Karar Alma konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 219,
    "estimatedDuration": 18,
    "prerequisites": [
      218
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Hayali Senaryolar ve Varsayımsal Karar Alma konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 220,
    "code": "B1-10",
    "level": "B1",
    "moduleId": "mod-b1-5",
    "moduleName": "Koşul Cümleleri: First & Second Conditionals",
    "title": "B1 Modül 5 Entegrasyonu: İş Teklifi Müzakeresi ve Şart Belirleme",
    "description": "B1 seviyesinde B1 Modül 5 Entegrasyonu: İş Teklifi Müzakeresi ve Şart Belirleme konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "B1 Modül 5 Entegrasyonu: İş Teklifi Müzakeresi ve Şart Belirleme konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 220,
    "estimatedDuration": 18,
    "prerequisites": [
      219
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "B1 Modül 5 Entegrasyonu: İş Teklifi Müzakeresi ve Şart Belirleme konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 221,
    "code": "B1-01",
    "level": "B1",
    "moduleId": "mod-b1-6",
    "moduleName": "Dolaylı Anlatım: Reported Speech & Indirect Questions",
    "title": "Doğrudan ve Dolaylı Anlatım Arasındaki Mantık",
    "description": "B1 seviyesinde Doğrudan ve Dolaylı Anlatım Arasındaki Mantık konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Doğrudan ve Dolaylı Anlatım Arasındaki Mantık konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 221,
    "estimatedDuration": 18,
    "prerequisites": [
      220
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Doğrudan ve Dolaylı Anlatım Arasındaki Mantık konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 222,
    "code": "B1-02",
    "level": "B1",
    "moduleId": "mod-b1-6",
    "moduleName": "Dolaylı Anlatım: Reported Speech & Indirect Questions",
    "title": "Say vs Tell Kullanım Farkları (tell someone, say that)",
    "description": "B1 seviyesinde Say vs Tell Kullanım Farkları (tell someone, say that) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Say vs Tell Kullanım Farkları (tell someone, say that) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 222,
    "estimatedDuration": 18,
    "prerequisites": [
      221
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Say vs Tell Kullanım Farkları (tell someone, say that) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 223,
    "code": "B1-03",
    "level": "B1",
    "moduleId": "mod-b1-6",
    "moduleName": "Dolaylı Anlatım: Reported Speech & Indirect Questions",
    "title": "Zaman Kaydırma (Tense Backshift) Kuralları (Present -> Past)",
    "description": "B1 seviyesinde Zaman Kaydırma (Tense Backshift) Kuralları (Present -> Past) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Zaman Kaydırma (Tense Backshift) Kuralları (Present -> Past) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 223,
    "estimatedDuration": 18,
    "prerequisites": [
      222
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Zaman Kaydırma (Tense Backshift) Kuralları (Present -> Past) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 224,
    "code": "B1-04",
    "level": "B1",
    "moduleId": "mod-b1-6",
    "moduleName": "Dolaylı Anlatım: Reported Speech & Indirect Questions",
    "title": "Modal Fiillerin Dolaylı Anlatıma Uyarlanması (can -> could, will -> would)",
    "description": "B1 seviyesinde Modal Fiillerin Dolaylı Anlatıma Uyarlanması (can -> could, will -> would) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Modal Fiillerin Dolaylı Anlatıma Uyarlanması (can -> could, will -> would) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 224,
    "estimatedDuration": 18,
    "prerequisites": [
      223
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Modal Fiillerin Dolaylı Anlatıma Uyarlanması (can -> could, will -> would) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 225,
    "code": "B1-05",
    "level": "B1",
    "moduleId": "mod-b1-6",
    "moduleName": "Dolaylı Anlatım: Reported Speech & Indirect Questions",
    "title": "Zaman ve Mekan Zarflarının Değişimi (here -> there, now -> then)",
    "description": "B1 seviyesinde Zaman ve Mekan Zarflarının Değişimi (here -> there, now -> then) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Zaman ve Mekan Zarflarının Değişimi (here -> there, now -> then) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 225,
    "estimatedDuration": 18,
    "prerequisites": [
      224
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Zaman ve Mekan Zarflarının Değişimi (here -> there, now -> then) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 226,
    "code": "B1-06",
    "level": "B1",
    "moduleId": "mod-b1-6",
    "moduleName": "Dolaylı Anlatım: Reported Speech & Indirect Questions",
    "title": "Dolaylı Sorular: Yes/No Sorularını If / Whether ile Aktarma",
    "description": "B1 seviyesinde Dolaylı Sorular: Yes/No Sorularını If / Whether ile Aktarma konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Dolaylı Sorular: Yes/No Sorularını If / Whether ile Aktarma konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 226,
    "estimatedDuration": 18,
    "prerequisites": [
      225
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Dolaylı Sorular: Yes/No Sorularını If / Whether ile Aktarma konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 227,
    "code": "B1-07",
    "level": "B1",
    "moduleId": "mod-b1-6",
    "moduleName": "Dolaylı Anlatım: Reported Speech & Indirect Questions",
    "title": "Dolaylı Sorular: WH- Sorularını Aktarma ve Düz Cümle Dizilimi",
    "description": "B1 seviyesinde Dolaylı Sorular: WH- Sorularını Aktarma ve Düz Cümle Dizilimi konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Dolaylı Sorular: WH- Sorularını Aktarma ve Düz Cümle Dizilimi konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 227,
    "estimatedDuration": 18,
    "prerequisites": [
      226
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Dolaylı Sorular: WH- Sorularını Aktarma ve Düz Cümle Dizilimi konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 228,
    "code": "B1-08",
    "level": "B1",
    "moduleId": "mod-b1-6",
    "moduleName": "Dolaylı Anlatım: Reported Speech & Indirect Questions",
    "title": "Emir ve İstek Cümlelerini Aktarma (He told me to wait)",
    "description": "B1 seviyesinde Emir ve İstek Cümlelerini Aktarma (He told me to wait) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Emir ve İstek Cümlelerini Aktarma (He told me to wait) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 228,
    "estimatedDuration": 18,
    "prerequisites": [
      227
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Emir ve İstek Cümlelerini Aktarma (He told me to wait) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 229,
    "code": "B1-09",
    "level": "B1",
    "moduleId": "mod-b1-6",
    "moduleName": "Dolaylı Anlatım: Reported Speech & Indirect Questions",
    "title": "Toplantı Kararlarını ve Mesajları Ekibe Aktarma",
    "description": "B1 seviyesinde Toplantı Kararlarını ve Mesajları Ekibe Aktarma konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Toplantı Kararlarını ve Mesajları Ekibe Aktarma konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 229,
    "estimatedDuration": 18,
    "prerequisites": [
      228
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Toplantı Kararlarını ve Mesajları Ekibe Aktarma konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 230,
    "code": "B1-10",
    "level": "B1",
    "moduleId": "mod-b1-6",
    "moduleName": "Dolaylı Anlatım: Reported Speech & Indirect Questions",
    "title": "B1 Modül 6 Entegrasyonu: Yönetim Kurulu Kararlarını Özetleme Raporu",
    "description": "B1 seviyesinde B1 Modül 6 Entegrasyonu: Yönetim Kurulu Kararlarını Özetleme Raporu konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "B1 Modül 6 Entegrasyonu: Yönetim Kurulu Kararlarını Özetleme Raporu konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 230,
    "estimatedDuration": 18,
    "prerequisites": [
      229
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "B1 Modül 6 Entegrasyonu: Yönetim Kurulu Kararlarını Özetleme Raporu konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 231,
    "code": "B1-01",
    "level": "B1",
    "moduleId": "mod-b1-7",
    "moduleName": "Edilgen Çatı Temelleri: Passive Voice Essentials",
    "title": "Edilgen Çatının Temel Mantığı: Be + V3 (Past Participle)",
    "description": "B1 seviyesinde Edilgen Çatının Temel Mantığı: Be + V3 (Past Participle) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Edilgen Çatının Temel Mantığı: Be + V3 (Past Participle) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 231,
    "estimatedDuration": 18,
    "prerequisites": [
      230
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Edilgen Çatının Temel Mantığı: Be + V3 (Past Participle) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 232,
    "code": "B1-02",
    "level": "B1",
    "moduleId": "mod-b1-7",
    "moduleName": "Edilgen Çatı Temelleri: Passive Voice Essentials",
    "title": "Geniş Zaman Pasif: Am / Is / Are + V3 (The report is written)",
    "description": "B1 seviyesinde Geniş Zaman Pasif: Am / Is / Are + V3 (The report is written) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Geniş Zaman Pasif: Am / Is / Are + V3 (The report is written) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 232,
    "estimatedDuration": 18,
    "prerequisites": [
      231
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Geniş Zaman Pasif: Am / Is / Are + V3 (The report is written) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 233,
    "code": "B1-03",
    "level": "B1",
    "moduleId": "mod-b1-7",
    "moduleName": "Edilgen Çatı Temelleri: Passive Voice Essentials",
    "title": "Geçmiş Zaman Pasif: Was / Were + V3 (The car was repaired)",
    "description": "B1 seviyesinde Geçmiş Zaman Pasif: Was / Were + V3 (The car was repaired) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Geçmiş Zaman Pasif: Was / Were + V3 (The car was repaired) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 233,
    "estimatedDuration": 18,
    "prerequisites": [
      232
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Geçmiş Zaman Pasif: Was / Were + V3 (The car was repaired) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 234,
    "code": "B1-04",
    "level": "B1",
    "moduleId": "mod-b1-7",
    "moduleName": "Edilgen Çatı Temelleri: Passive Voice Essentials",
    "title": "Eylemi Yapanı Vurgulama: By + Agent Kullanımı",
    "description": "B1 seviyesinde Eylemi Yapanı Vurgulama: By + Agent Kullanımı konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Eylemi Yapanı Vurgulama: By + Agent Kullanımı konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 234,
    "estimatedDuration": 18,
    "prerequisites": [
      233
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Eylemi Yapanı Vurgulama: By + Agent Kullanımı konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 235,
    "code": "B1-05",
    "level": "B1",
    "moduleId": "mod-b1-7",
    "moduleName": "Edilgen Çatı Temelleri: Passive Voice Essentials",
    "title": "Eylemi Yapanın Bilinmediği veya Önemsiz Olduğu Durumlar",
    "description": "B1 seviyesinde Eylemi Yapanın Bilinmediği veya Önemsiz Olduğu Durumlar konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Eylemi Yapanın Bilinmediği veya Önemsiz Olduğu Durumlar konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 235,
    "estimatedDuration": 18,
    "prerequisites": [
      234
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Eylemi Yapanın Bilinmediği veya Önemsiz Olduğu Durumlar konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 236,
    "code": "B1-06",
    "level": "B1",
    "moduleId": "mod-b1-7",
    "moduleName": "Edilgen Çatı Temelleri: Passive Voice Essentials",
    "title": "Gelecek Zaman Pasif: Will be + V3",
    "description": "B1 seviyesinde Gelecek Zaman Pasif: Will be + V3 konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Gelecek Zaman Pasif: Will be + V3 konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 236,
    "estimatedDuration": 18,
    "prerequisites": [
      235
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Gelecek Zaman Pasif: Will be + V3 konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 237,
    "code": "B1-07",
    "level": "B1",
    "moduleId": "mod-b1-7",
    "moduleName": "Edilgen Çatı Temelleri: Passive Voice Essentials",
    "title": "Modal Fiillerle Pasif: Must be done, Should be checked",
    "description": "B1 seviyesinde Modal Fiillerle Pasif: Must be done, Should be checked konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Modal Fiillerle Pasif: Must be done, Should be checked konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 237,
    "estimatedDuration": 18,
    "prerequisites": [
      236
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Modal Fiillerle Pasif: Must be done, Should be checked konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 238,
    "code": "B1-08",
    "level": "B1",
    "moduleId": "mod-b1-7",
    "moduleName": "Edilgen Çatı Temelleri: Passive Voice Essentials",
    "title": "Süreçler ve Üretim Aşamalarını Pasif Cümlelerle Anlatma",
    "description": "B1 seviyesinde Süreçler ve Üretim Aşamalarını Pasif Cümlelerle Anlatma konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Süreçler ve Üretim Aşamalarını Pasif Cümlelerle Anlatma konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 238,
    "estimatedDuration": 18,
    "prerequisites": [
      237
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Süreçler ve Üretim Aşamalarını Pasif Cümlelerle Anlatma konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 239,
    "code": "B1-09",
    "level": "B1",
    "moduleId": "mod-b1-7",
    "moduleName": "Edilgen Çatı Temelleri: Passive Voice Essentials",
    "title": "Haber Bülteni ve Resmi Rapor Dili",
    "description": "B1 seviyesinde Haber Bülteni ve Resmi Rapor Dili konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Haber Bülteni ve Resmi Rapor Dili konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 239,
    "estimatedDuration": 18,
    "prerequisites": [
      238
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Haber Bülteni ve Resmi Rapor Dili konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 240,
    "code": "B1-10",
    "level": "B1",
    "moduleId": "mod-b1-7",
    "moduleName": "Edilgen Çatı Temelleri: Passive Voice Essentials",
    "title": "B1 Modül 7 Entegrasyonu: Fabrika Üretim Hattı ve Süreç Raporu",
    "description": "B1 seviyesinde B1 Modül 7 Entegrasyonu: Fabrika Üretim Hattı ve Süreç Raporu konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "B1 Modül 7 Entegrasyonu: Fabrika Üretim Hattı ve Süreç Raporu konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 240,
    "estimatedDuration": 18,
    "prerequisites": [
      239
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "B1 Modül 7 Entegrasyonu: Fabrika Üretim Hattı ve Süreç Raporu konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 241,
    "code": "B1-01",
    "level": "B1",
    "moduleId": "mod-b1-8",
    "moduleName": "Modal Fiillerle İhtimal ve Çıkarım: May, Might, Could",
    "title": "Gelecekteki ve Şimdiki Olasılık: May & Might",
    "description": "B1 seviyesinde Gelecekteki ve Şimdiki Olasılık: May & Might konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Gelecekteki ve Şimdiki Olasılık: May & Might konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 241,
    "estimatedDuration": 18,
    "prerequisites": [
      240
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Gelecekteki ve Şimdiki Olasılık: May & Might konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 242,
    "code": "B1-02",
    "level": "B1",
    "moduleId": "mod-b1-8",
    "moduleName": "Modal Fiillerle İhtimal ve Çıkarım: May, Might, Could",
    "title": "Could ile Zayıf İhtimal Bildirme",
    "description": "B1 seviyesinde Could ile Zayıf İhtimal Bildirme konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Could ile Zayıf İhtimal Bildirme konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 242,
    "estimatedDuration": 18,
    "prerequisites": [
      241
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Could ile Zayıf İhtimal Bildirme konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 243,
    "code": "B1-03",
    "level": "B1",
    "moduleId": "mod-b1-8",
    "moduleName": "Modal Fiillerle İhtimal ve Çıkarım: May, Might, Could",
    "title": "Olasılık Dereceleri: Will (Kesin) > May (Muhtemel) > Might (Zayıf)",
    "description": "B1 seviyesinde Olasılık Dereceleri: Will (Kesin) > May (Muhtemel) > Might (Zayıf) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Olasılık Dereceleri: Will (Kesin) > May (Muhtemel) > Might (Zayıf) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 243,
    "estimatedDuration": 18,
    "prerequisites": [
      242
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Olasılık Dereceleri: Will (Kesin) > May (Muhtemel) > Might (Zayıf) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 244,
    "code": "B1-04",
    "level": "B1",
    "moduleId": "mod-b1-8",
    "moduleName": "Modal Fiillerle İhtimal ve Çıkarım: May, Might, Could",
    "title": "Kibar Rica ve İzin İsteme: May I...? ve Could you...?",
    "description": "B1 seviyesinde Kibar Rica ve İzin İsteme: May I...? ve Could you...? konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Kibar Rica ve İzin İsteme: May I...? ve Could you...? konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 244,
    "estimatedDuration": 18,
    "prerequisites": [
      243
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Kibar Rica ve İzin İsteme: May I...? ve Could you...? konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 245,
    "code": "B1-05",
    "level": "B1",
    "moduleId": "mod-b1-8",
    "moduleName": "Modal Fiillerle İhtimal ve Çıkarım: May, Might, Could",
    "title": "Alternatif Çözümler Üretme: We could try another method",
    "description": "B1 seviyesinde Alternatif Çözümler Üretme: We could try another method konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Alternatif Çözümler Üretme: We could try another method konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 245,
    "estimatedDuration": 18,
    "prerequisites": [
      244
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Alternatif Çözümler Üretme: We could try another method konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 246,
    "code": "B1-06",
    "level": "B1",
    "moduleId": "mod-b1-8",
    "moduleName": "Modal Fiillerle İhtimal ve Çıkarım: May, Might, Could",
    "title": "Hava Tahmini ve Bilimsel İhtimal Değerlendirmeleri",
    "description": "B1 seviyesinde Hava Tahmini ve Bilimsel İhtimal Değerlendirmeleri konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Hava Tahmini ve Bilimsel İhtimal Değerlendirmeleri konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 246,
    "estimatedDuration": 18,
    "prerequisites": [
      245
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Hava Tahmini ve Bilimsel İhtimal Değerlendirmeleri konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 247,
    "code": "B1-07",
    "level": "B1",
    "moduleId": "mod-b1-8",
    "moduleName": "Modal Fiillerle İhtimal ve Çıkarım: May, Might, Could",
    "title": "Risk Analizi ve İhtimal Senaryoları",
    "description": "B1 seviyesinde Risk Analizi ve İhtimal Senaryoları konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Risk Analizi ve İhtimal Senaryoları konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 247,
    "estimatedDuration": 18,
    "prerequisites": [
      246
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Risk Analizi ve İhtimal Senaryoları konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 248,
    "code": "B1-08",
    "level": "B1",
    "moduleId": "mod-b1-8",
    "moduleName": "Modal Fiillerle İhtimal ve Çıkarım: May, Might, Could",
    "title": "Olasılık Bildiren Zarflar: Probably, Definitely, Perhaps",
    "description": "B1 seviyesinde Olasılık Bildiren Zarflar: Probably, Definitely, Perhaps konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Olasılık Bildiren Zarflar: Probably, Definitely, Perhaps konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 248,
    "estimatedDuration": 18,
    "prerequisites": [
      247
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Olasılık Bildiren Zarflar: Probably, Definitely, Perhaps konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 249,
    "code": "B1-09",
    "level": "B1",
    "moduleId": "mod-b1-8",
    "moduleName": "Modal Fiillerle İhtimal ve Çıkarım: May, Might, Could",
    "title": "İş Hayatında Belirsizlikleri Diplomatik Dille İfade Etme",
    "description": "B1 seviyesinde İş Hayatında Belirsizlikleri Diplomatik Dille İfade Etme konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "İş Hayatında Belirsizlikleri Diplomatik Dille İfade Etme konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 249,
    "estimatedDuration": 18,
    "prerequisites": [
      248
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "İş Hayatında Belirsizlikleri Diplomatik Dille İfade Etme konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 250,
    "code": "B1-10",
    "level": "B1",
    "moduleId": "mod-b1-8",
    "moduleName": "Modal Fiillerle İhtimal ve Çıkarım: May, Might, Could",
    "title": "B1 Modül 8 Entegrasyonu: Yeni Bir Girişim İçin Risk Analizi Sunumu",
    "description": "B1 seviyesinde B1 Modül 8 Entegrasyonu: Yeni Bir Girişim İçin Risk Analizi Sunumu konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "B1 Modül 8 Entegrasyonu: Yeni Bir Girişim İçin Risk Analizi Sunumu konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 250,
    "estimatedDuration": 18,
    "prerequisites": [
      249
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "B1 Modül 8 Entegrasyonu: Yeni Bir Girişim İçin Risk Analizi Sunumu konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 251,
    "code": "B1-01",
    "level": "B1",
    "moduleId": "mod-b1-9",
    "moduleName": "İş Dünyası Temelleri, Özgeçmiş ve Mülakat Becerileri",
    "title": "İş İngilizcesi Temel Terimleri ve Departmanlar",
    "description": "B1 seviyesinde İş İngilizcesi Temel Terimleri ve Departmanlar konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "İş İngilizcesi Temel Terimleri ve Departmanlar konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 251,
    "estimatedDuration": 18,
    "prerequisites": [
      250
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "İş İngilizcesi Temel Terimleri ve Departmanlar konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 252,
    "code": "B1-02",
    "level": "B1",
    "moduleId": "mod-b1-9",
    "moduleName": "İş Dünyası Temelleri, Özgeçmiş ve Mülakat Becerileri",
    "title": "İş Görüşmesi: Güçlü ve Zayıf Yönleri İfade Etme",
    "description": "B1 seviyesinde İş Görüşmesi: Güçlü ve Zayıf Yönleri İfade Etme konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "İş Görüşmesi: Güçlü ve Zayıf Yönleri İfade Etme konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 252,
    "estimatedDuration": 18,
    "prerequisites": [
      251
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "İş Görüşmesi: Güçlü ve Zayıf Yönleri İfade Etme konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 253,
    "code": "B1-03",
    "level": "B1",
    "moduleId": "mod-b1-9",
    "moduleName": "İş Dünyası Temelleri, Özgeçmiş ve Mülakat Becerileri",
    "title": "İş Görüşmesi: Önceki Deneyimleri STAR Tekniği ile Aktarma",
    "description": "B1 seviyesinde İş Görüşmesi: Önceki Deneyimleri STAR Tekniği ile Aktarma konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "İş Görüşmesi: Önceki Deneyimleri STAR Tekniği ile Aktarma konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 253,
    "estimatedDuration": 18,
    "prerequisites": [
      252
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "İş Görüşmesi: Önceki Deneyimleri STAR Tekniği ile Aktarma konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 254,
    "code": "B1-04",
    "level": "B1",
    "moduleId": "mod-b1-9",
    "moduleName": "İş Dünyası Temelleri, Özgeçmiş ve Mülakat Becerileri",
    "title": "Toplantıda Söz Alma ve Fikir Belirtme Kalıpları",
    "description": "B1 seviyesinde Toplantıda Söz Alma ve Fikir Belirtme Kalıpları konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Toplantıda Söz Alma ve Fikir Belirtme Kalıpları konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 254,
    "estimatedDuration": 18,
    "prerequisites": [
      253
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Toplantıda Söz Alma ve Fikir Belirtme Kalıpları konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 255,
    "code": "B1-05",
    "level": "B1",
    "moduleId": "mod-b1-9",
    "moduleName": "İş Dünyası Temelleri, Özgeçmiş ve Mülakat Becerileri",
    "title": "Kibarca İtiraz Etme ve Alternatif Görüş Sunma",
    "description": "B1 seviyesinde Kibarca İtiraz Etme ve Alternatif Görüş Sunma konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Kibarca İtiraz Etme ve Alternatif Görüş Sunma konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 255,
    "estimatedDuration": 18,
    "prerequisites": [
      254
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Kibarca İtiraz Etme ve Alternatif Görüş Sunma konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 256,
    "code": "B1-06",
    "level": "B1",
    "moduleId": "mod-b1-9",
    "moduleName": "İş Dünyası Temelleri, Özgeçmiş ve Mülakat Becerileri",
    "title": "Profesyonel E-posta Giriş ve Kapanış Standartları",
    "description": "B1 seviyesinde Profesyonel E-posta Giriş ve Kapanış Standartları konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Profesyonel E-posta Giriş ve Kapanış Standartları konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 256,
    "estimatedDuration": 18,
    "prerequisites": [
      255
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Profesyonel E-posta Giriş ve Kapanış Standartları konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 257,
    "code": "B1-07",
    "level": "B1",
    "moduleId": "mod-b1-9",
    "moduleName": "İş Dünyası Temelleri, Özgeçmiş ve Mülakat Becerileri",
    "title": "Bilgi Talep Etme ve Ek Dosya Gönderme İfadeleri",
    "description": "B1 seviyesinde Bilgi Talep Etme ve Ek Dosya Gönderme İfadeleri konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Bilgi Talep Etme ve Ek Dosya Gönderme İfadeleri konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 257,
    "estimatedDuration": 18,
    "prerequisites": [
      256
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Bilgi Talep Etme ve Ek Dosya Gönderme İfadeleri konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 258,
    "code": "B1-08",
    "level": "B1",
    "moduleId": "mod-b1-9",
    "moduleName": "İş Dünyası Temelleri, Özgeçmiş ve Mülakat Becerileri",
    "title": "Toplantı Gündemi Belirleme ve Not Tutma",
    "description": "B1 seviyesinde Toplantı Gündemi Belirleme ve Not Tutma konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Toplantı Gündemi Belirleme ve Not Tutma konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 258,
    "estimatedDuration": 18,
    "prerequisites": [
      257
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Toplantı Gündemi Belirleme ve Not Tutma konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 259,
    "code": "B1-09",
    "level": "B1",
    "moduleId": "mod-b1-9",
    "moduleName": "İş Dünyası Temelleri, Özgeçmiş ve Mülakat Becerileri",
    "title": "Networking ve Profesyonel Sosyalleşme Diyalogları",
    "description": "B1 seviyesinde Networking ve Profesyonel Sosyalleşme Diyalogları konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Networking ve Profesyonel Sosyalleşme Diyalogları konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 259,
    "estimatedDuration": 18,
    "prerequisites": [
      258
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Networking ve Profesyonel Sosyalleşme Diyalogları konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 260,
    "code": "B1-10",
    "level": "B1",
    "moduleId": "mod-b1-9",
    "moduleName": "İş Dünyası Temelleri, Özgeçmiş ve Mülakat Becerileri",
    "title": "B1 Modül 9 Entegrasyonu: İş Mülakatı Simülasyonu ve CV Değerlendirmesi",
    "description": "B1 seviyesinde B1 Modül 9 Entegrasyonu: İş Mülakatı Simülasyonu ve CV Değerlendirmesi konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "B1 Modül 9 Entegrasyonu: İş Mülakatı Simülasyonu ve CV Değerlendirmesi konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 260,
    "estimatedDuration": 18,
    "prerequisites": [
      259
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "B1 Modül 9 Entegrasyonu: İş Mülakatı Simülasyonu ve CV Değerlendirmesi konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 261,
    "code": "B1-01",
    "level": "B1",
    "moduleId": "mod-b1-10",
    "moduleName": "B1 Bağımsız İletişim, Fikir Savunma ve Tartışma",
    "title": "Fikir Belirtme Zarfları: In my opinion, From my perspective",
    "description": "B1 seviyesinde Fikir Belirtme Zarfları: In my opinion, From my perspective konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Fikir Belirtme Zarfları: In my opinion, From my perspective konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 261,
    "estimatedDuration": 18,
    "prerequisites": [
      260
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Fikir Belirtme Zarfları: In my opinion, From my perspective konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 262,
    "code": "B1-02",
    "level": "B1",
    "moduleId": "mod-b1-10",
    "moduleName": "B1 Bağımsız İletişim, Fikir Savunma ve Tartışma",
    "title": "Argümanları Sıralama: Firstly, Secondly, Furthermore, In conclusion",
    "description": "B1 seviyesinde Argümanları Sıralama: Firstly, Secondly, Furthermore, In conclusion konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Argümanları Sıralama: Firstly, Secondly, Furthermore, In conclusion konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 262,
    "estimatedDuration": 18,
    "prerequisites": [
      261
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Argümanları Sıralama: Firstly, Secondly, Furthermore, In conclusion konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 263,
    "code": "B1-03",
    "level": "B1",
    "moduleId": "mod-b1-10",
    "moduleName": "B1 Bağımsız İletişim, Fikir Savunma ve Tartışma",
    "title": "Neden ve Sonuç Bildirme: Due to, Because of, Therefore",
    "description": "B1 seviyesinde Neden ve Sonuç Bildirme: Due to, Because of, Therefore konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Neden ve Sonuç Bildirme: Due to, Because of, Therefore konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 263,
    "estimatedDuration": 18,
    "prerequisites": [
      262
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Neden ve Sonuç Bildirme: Due to, Because of, Therefore konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 264,
    "code": "B1-04",
    "level": "B1",
    "moduleId": "mod-b1-10",
    "moduleName": "B1 Bağımsız İletişim, Fikir Savunma ve Tartışma",
    "title": "Zıtlık Bildiren Bağlaçlar: Although, Even though, However, Despite",
    "description": "B1 seviyesinde Zıtlık Bildiren Bağlaçlar: Although, Even though, However, Despite konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Zıtlık Bildiren Bağlaçlar: Although, Even though, However, Despite konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 264,
    "estimatedDuration": 18,
    "prerequisites": [
      263
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Zıtlık Bildiren Bağlaçlar: Although, Even though, However, Despite konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 265,
    "code": "B1-05",
    "level": "B1",
    "moduleId": "mod-b1-10",
    "moduleName": "B1 Bağımsız İletişim, Fikir Savunma ve Tartışma",
    "title": "Bir Tartışmayı Yönetme ve Karşı Argümanı Çürütme",
    "description": "B1 seviyesinde Bir Tartışmayı Yönetme ve Karşı Argümanı Çürütme konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Bir Tartışmayı Yönetme ve Karşı Argümanı Çürütme konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 265,
    "estimatedDuration": 18,
    "prerequisites": [
      264
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Bir Tartışmayı Yönetme ve Karşı Argümanı Çürütme konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 266,
    "code": "B1-06",
    "level": "B1",
    "moduleId": "mod-b1-10",
    "moduleName": "B1 Bağımsız İletişim, Fikir Savunma ve Tartışma",
    "title": "Grafik ve Trend Yorumlama Temelleri (increase, decrease, remain stable)",
    "description": "B1 seviyesinde Grafik ve Trend Yorumlama Temelleri (increase, decrease, remain stable) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Grafik ve Trend Yorumlama Temelleri (increase, decrease, remain stable) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 266,
    "estimatedDuration": 18,
    "prerequisites": [
      265
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Grafik ve Trend Yorumlama Temelleri (increase, decrease, remain stable) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 267,
    "code": "B1-07",
    "level": "B1",
    "moduleId": "mod-b1-10",
    "moduleName": "B1 Bağımsız İletişim, Fikir Savunma ve Tartışma",
    "title": "Güncel Sosyal Konularda Münazara Yürütme",
    "description": "B1 seviyesinde Güncel Sosyal Konularda Münazara Yürütme konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Güncel Sosyal Konularda Münazara Yürütme konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 267,
    "estimatedDuration": 18,
    "prerequisites": [
      266
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Güncel Sosyal Konularda Münazara Yürütme konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 268,
    "code": "B1-08",
    "level": "B1",
    "moduleId": "mod-b1-10",
    "moduleName": "B1 Bağımsız İletişim, Fikir Savunma ve Tartışma",
    "title": "Akademik ve Genel B1 Okuma Metni Analizi",
    "description": "B1 seviyesinde Akademik ve Genel B1 Okuma Metni Analizi konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Akademik ve Genel B1 Okuma Metni Analizi konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 268,
    "estimatedDuration": 18,
    "prerequisites": [
      267
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Akademik ve Genel B1 Okuma Metni Analizi konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 269,
    "code": "B1-09",
    "level": "B1",
    "moduleId": "mod-b1-10",
    "moduleName": "B1 Bağımsız İletişim, Fikir Savunma ve Tartışma",
    "title": "B1 Seviye Sonu Kapsamlı Pratik Denemesi",
    "description": "B1 seviyesinde B1 Seviye Sonu Kapsamlı Pratik Denemesi konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "B1 Seviye Sonu Kapsamlı Pratik Denemesi konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 269,
    "estimatedDuration": 18,
    "prerequisites": [
      268
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "B1 Seviye Sonu Kapsamlı Pratik Denemesi konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 270,
    "code": "B1-10",
    "level": "B1",
    "moduleId": "mod-b1-10",
    "moduleName": "B1 Bağımsız İletişim, Fikir Savunma ve Tartışma",
    "title": "B1 Bağımsız Kullanıcı Seviye Sonu Yeterlilik Sınavı",
    "description": "B1 seviyesinde B1 Bağımsız Kullanıcı Seviye Sonu Yeterlilik Sınavı konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "B1 Bağımsız Kullanıcı Seviye Sonu Yeterlilik Sınavı konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 270,
    "estimatedDuration": 18,
    "prerequisites": [
      269
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "B1 Bağımsız Kullanıcı Seviye Sonu Yeterlilik Sınavı konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 70
  },
  {
    "id": 271,
    "code": "B2-01",
    "level": "B2",
    "moduleId": "mod-b2-1",
    "moduleName": "İleri Koşul Yapıları: Third & Mixed Conditionals",
    "title": "Third Conditional: Geçmişteki Kaçırılmış Durumlar (If + Had V3, Would have V3)",
    "description": "B2 seviyesinde Third Conditional: Geçmişteki Kaçırılmış Durumlar (If + Had V3, Would have V3) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Third Conditional: Geçmişteki Kaçırılmış Durumlar (If + Had V3, Would have V3) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 271,
    "estimatedDuration": 20,
    "prerequisites": [
      270
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Third Conditional: Geçmişteki Kaçırılmış Durumlar (If + Had V3, Would have V3) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 272,
    "code": "B2-02",
    "level": "B2",
    "moduleId": "mod-b2-1",
    "moduleName": "İleri Koşul Yapıları: Third & Mixed Conditionals",
    "title": "Third Conditional ile Pişmanlık ve Eleştiri İfade Etme",
    "description": "B2 seviyesinde Third Conditional ile Pişmanlık ve Eleştiri İfade Etme konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Third Conditional ile Pişmanlık ve Eleştiri İfade Etme konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 272,
    "estimatedDuration": 20,
    "prerequisites": [
      271
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Third Conditional ile Pişmanlık ve Eleştiri İfade Etme konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 273,
    "code": "B2-03",
    "level": "B2",
    "moduleId": "mod-b2-1",
    "moduleName": "İleri Koşul Yapıları: Third & Mixed Conditionals",
    "title": "Could have & Might have ile Alternatif Geçmiş Sonuçları",
    "description": "B2 seviyesinde Could have & Might have ile Alternatif Geçmiş Sonuçları konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Could have & Might have ile Alternatif Geçmiş Sonuçları konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 273,
    "estimatedDuration": 20,
    "prerequisites": [
      272
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Could have & Might have ile Alternatif Geçmiş Sonuçları konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 274,
    "code": "B2-04",
    "level": "B2",
    "moduleId": "mod-b2-1",
    "moduleName": "İleri Koşul Yapıları: Third & Mixed Conditionals",
    "title": "Mixed Conditionals Tip 1: Geçmişteki Olayın Bugüne Etkisi",
    "description": "B2 seviyesinde Mixed Conditionals Tip 1: Geçmişteki Olayın Bugüne Etkisi konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Mixed Conditionals Tip 1: Geçmişteki Olayın Bugüne Etkisi konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 274,
    "estimatedDuration": 20,
    "prerequisites": [
      273
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Mixed Conditionals Tip 1: Geçmişteki Olayın Bugüne Etkisi konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 275,
    "code": "B2-05",
    "level": "B2",
    "moduleId": "mod-b2-1",
    "moduleName": "İleri Koşul Yapıları: Third & Mixed Conditionals",
    "title": "Mixed Conditionals Tip 2: Genel Kişisel Özelliğin Geçmişe Etkisi",
    "description": "B2 seviyesinde Mixed Conditionals Tip 2: Genel Kişisel Özelliğin Geçmişe Etkisi konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Mixed Conditionals Tip 2: Genel Kişisel Özelliğin Geçmişe Etkisi konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 275,
    "estimatedDuration": 20,
    "prerequisites": [
      274
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Mixed Conditionals Tip 2: Genel Kişisel Özelliğin Geçmişe Etkisi konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 276,
    "code": "B2-06",
    "level": "B2",
    "moduleId": "mod-b2-1",
    "moduleName": "İleri Koşul Yapıları: Third & Mixed Conditionals",
    "title": "If Yerine Geçen Alternatif Bağlaçlar: Provided that, As long as",
    "description": "B2 seviyesinde If Yerine Geçen Alternatif Bağlaçlar: Provided that, As long as konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "If Yerine Geçen Alternatif Bağlaçlar: Provided that, As long as konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 276,
    "estimatedDuration": 20,
    "prerequisites": [
      275
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "If Yerine Geçen Alternatif Bağlaçlar: Provided that, As long as konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 277,
    "code": "B2-07",
    "level": "B2",
    "moduleId": "mod-b2-1",
    "moduleName": "İleri Koşul Yapıları: Third & Mixed Conditionals",
    "title": "Supposing that ve Assuming that ile Varsayım Üretme",
    "description": "B2 seviyesinde Supposing that ve Assuming that ile Varsayım Üretme konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Supposing that ve Assuming that ile Varsayım Üretme konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 277,
    "estimatedDuration": 20,
    "prerequisites": [
      276
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Supposing that ve Assuming that ile Varsayım Üretme konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 278,
    "code": "B2-08",
    "level": "B2",
    "moduleId": "mod-b2-1",
    "moduleName": "İleri Koşul Yapıları: Third & Mixed Conditionals",
    "title": "In case vs If Ayrımı ve Önlem Bildirme",
    "description": "B2 seviyesinde In case vs If Ayrımı ve Önlem Bildirme konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "In case vs If Ayrımı ve Önlem Bildirme konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 278,
    "estimatedDuration": 20,
    "prerequisites": [
      277
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "In case vs If Ayrımı ve Önlem Bildirme konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 279,
    "code": "B2-09",
    "level": "B2",
    "moduleId": "mod-b2-1",
    "moduleName": "İleri Koşul Yapıları: Third & Mixed Conditionals",
    "title": "Tarihsel Olayları Karşı-Olgusal (Counter-factual) Analiz Etme",
    "description": "B2 seviyesinde Tarihsel Olayları Karşı-Olgusal (Counter-factual) Analiz Etme konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Tarihsel Olayları Karşı-Olgusal (Counter-factual) Analiz Etme konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 279,
    "estimatedDuration": 20,
    "prerequisites": [
      278
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Tarihsel Olayları Karşı-Olgusal (Counter-factual) Analiz Etme konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 280,
    "code": "B2-10",
    "level": "B2",
    "moduleId": "mod-b2-1",
    "moduleName": "İleri Koşul Yapıları: Third & Mixed Conditionals",
    "title": "B2 Modül 1 Entegrasyonu: Şirket Krizinin Karşı-Olgusal Vaka Analizi",
    "description": "B2 seviyesinde B2 Modül 1 Entegrasyonu: Şirket Krizinin Karşı-Olgusal Vaka Analizi konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "B2 Modül 1 Entegrasyonu: Şirket Krizinin Karşı-Olgusal Vaka Analizi konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 280,
    "estimatedDuration": 20,
    "prerequisites": [
      279
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "B2 Modül 1 Entegrasyonu: Şirket Krizinin Karşı-Olgusal Vaka Analizi konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 281,
    "code": "B2-01",
    "level": "B2",
    "moduleId": "mod-b2-2",
    "moduleName": "Ettirgen Yapılar ve İleri Edilgen: Causatives & Advanced Passive",
    "title": "Ettirgen Yapı (Causative): Have / Get something done Formülü",
    "description": "B2 seviyesinde Ettirgen Yapı (Causative): Have / Get something done Formülü konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Ettirgen Yapı (Causative): Have / Get something done Formülü konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 281,
    "estimatedDuration": 20,
    "prerequisites": [
      280
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Ettirgen Yapı (Causative): Have / Get something done Formülü konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 282,
    "code": "B2-02",
    "level": "B2",
    "moduleId": "mod-b2-2",
    "moduleName": "Ettirgen Yapılar ve İleri Edilgen: Causatives & Advanced Passive",
    "title": "Make someone do something (Zorlamak / Sağlamak)",
    "description": "B2 seviyesinde Make someone do something (Zorlamak / Sağlamak) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Make someone do something (Zorlamak / Sağlamak) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 282,
    "estimatedDuration": 20,
    "prerequisites": [
      281
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Make someone do something (Zorlamak / Sağlamak) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 283,
    "code": "B2-03",
    "level": "B2",
    "moduleId": "mod-b2-2",
    "moduleName": "Ettirgen Yapılar ve İleri Edilgen: Causatives & Advanced Passive",
    "title": "Let someone do something (İzin vermek)",
    "description": "B2 seviyesinde Let someone do something (İzin vermek) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Let someone do something (İzin vermek) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 283,
    "estimatedDuration": 20,
    "prerequisites": [
      282
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Let someone do something (İzin vermek) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 284,
    "code": "B2-04",
    "level": "B2",
    "moduleId": "mod-b2-2",
    "moduleName": "Ettirgen Yapılar ve İleri Edilgen: Causatives & Advanced Passive",
    "title": "Help someone (to) do something (Desteklemek)",
    "description": "B2 seviyesinde Help someone (to) do something (Desteklemek) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Help someone (to) do something (Desteklemek) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 284,
    "estimatedDuration": 20,
    "prerequisites": [
      283
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Help someone (to) do something (Desteklemek) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 285,
    "code": "B2-05",
    "level": "B2",
    "moduleId": "mod-b2-2",
    "moduleName": "Ettirgen Yapılar ve İleri Edilgen: Causatives & Advanced Passive",
    "title": "Get someone to do something (İkna ederek yaptırmak)",
    "description": "B2 seviyesinde Get someone to do something (İkna ederek yaptırmak) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Get someone to do something (İkna ederek yaptırmak) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 285,
    "estimatedDuration": 20,
    "prerequisites": [
      284
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Get someone to do something (İkna ederek yaptırmak) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 286,
    "code": "B2-06",
    "level": "B2",
    "moduleId": "mod-b2-2",
    "moduleName": "Ettirgen Yapılar ve İleri Edilgen: Causatives & Advanced Passive",
    "title": "Kişisel Olmayan Edilgen: It is said / believed / reported that...",
    "description": "B2 seviyesinde Kişisel Olmayan Edilgen: It is said / believed / reported that... konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Kişisel Olmayan Edilgen: It is said / believed / reported that... konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 286,
    "estimatedDuration": 20,
    "prerequisites": [
      285
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Kişisel Olmayan Edilgen: It is said / believed / reported that... konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 287,
    "code": "B2-07",
    "level": "B2",
    "moduleId": "mod-b2-2",
    "moduleName": "Ettirgen Yapılar ve İleri Edilgen: Causatives & Advanced Passive",
    "title": "He is thought to be... / She is alleged to have stolen... Yapıları",
    "description": "B2 seviyesinde He is thought to be... / She is alleged to have stolen... Yapıları konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "He is thought to be... / She is alleged to have stolen... Yapıları konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 287,
    "estimatedDuration": 20,
    "prerequisites": [
      286
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "He is thought to be... / She is alleged to have stolen... Yapıları konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 288,
    "code": "B2-08",
    "level": "B2",
    "moduleId": "mod-b2-2",
    "moduleName": "Ettirgen Yapılar ve İleri Edilgen: Causatives & Advanced Passive",
    "title": "İki Nesneli Fiillerin Edilgen Dönüşümü (Give, Send, Offer)",
    "description": "B2 seviyesinde İki Nesneli Fiillerin Edilgen Dönüşümü (Give, Send, Offer) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "İki Nesneli Fiillerin Edilgen Dönüşümü (Give, Send, Offer) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 288,
    "estimatedDuration": 20,
    "prerequisites": [
      287
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "İki Nesneli Fiillerin Edilgen Dönüşümü (Give, Send, Offer) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 289,
    "code": "B2-09",
    "level": "B2",
    "moduleId": "mod-b2-2",
    "moduleName": "Ettirgen Yapılar ve İleri Edilgen: Causatives & Advanced Passive",
    "title": "Akademik ve Resmi Metinlerde Edilgen Üslup Tercihleri",
    "description": "B2 seviyesinde Akademik ve Resmi Metinlerde Edilgen Üslup Tercihleri konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Akademik ve Resmi Metinlerde Edilgen Üslup Tercihleri konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 289,
    "estimatedDuration": 20,
    "prerequisites": [
      288
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Akademik ve Resmi Metinlerde Edilgen Üslup Tercihleri konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 290,
    "code": "B2-10",
    "level": "B2",
    "moduleId": "mod-b2-2",
    "moduleName": "Ettirgen Yapılar ve İleri Edilgen: Causatives & Advanced Passive",
    "title": "B2 Modül 2 Entegrasyonu: Kurumsal Denetim Raporu Hazırlama",
    "description": "B2 seviyesinde B2 Modül 2 Entegrasyonu: Kurumsal Denetim Raporu Hazırlama konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "B2 Modül 2 Entegrasyonu: Kurumsal Denetim Raporu Hazırlama konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 290,
    "estimatedDuration": 20,
    "prerequisites": [
      289
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "B2 Modül 2 Entegrasyonu: Kurumsal Denetim Raporu Hazırlama konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 291,
    "code": "B2-01",
    "level": "B2",
    "moduleId": "mod-b2-3",
    "moduleName": "Geçmişe Dair Modallar: Modal Deductions (Must have, Can't have)",
    "title": "Must have + V3: Geçmişe Dair Yüksek Kesinlikte Çıkarım (Kesinlikle öyleydi)",
    "description": "B2 seviyesinde Must have + V3: Geçmişe Dair Yüksek Kesinlikte Çıkarım (Kesinlikle öyleydi) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Must have + V3: Geçmişe Dair Yüksek Kesinlikte Çıkarım (Kesinlikle öyleydi) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 291,
    "estimatedDuration": 20,
    "prerequisites": [
      290
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Must have + V3: Geçmişe Dair Yüksek Kesinlikte Çıkarım (Kesinlikle öyleydi) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 292,
    "code": "B2-02",
    "level": "B2",
    "moduleId": "mod-b2-3",
    "moduleName": "Geçmişe Dair Modallar: Modal Deductions (Must have, Can't have)",
    "title": "Can't have / Couldn't have + V3: İmkansızlık Bildirimi (Olamazdı)",
    "description": "B2 seviyesinde Can't have / Couldn't have + V3: İmkansızlık Bildirimi (Olamazdı) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Can't have / Couldn't have + V3: İmkansızlık Bildirimi (Olamazdı) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 292,
    "estimatedDuration": 20,
    "prerequisites": [
      291
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Can't have / Couldn't have + V3: İmkansızlık Bildirimi (Olamazdı) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 293,
    "code": "B2-03",
    "level": "B2",
    "moduleId": "mod-b2-3",
    "moduleName": "Geçmişe Dair Modallar: Modal Deductions (Must have, Can't have)",
    "title": "Might have / May have + V3: Geçmiş Olasılık (Olmuş olabilir)",
    "description": "B2 seviyesinde Might have / May have + V3: Geçmiş Olasılık (Olmuş olabilir) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Might have / May have + V3: Geçmiş Olasılık (Olmuş olabilir) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 293,
    "estimatedDuration": 20,
    "prerequisites": [
      292
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Might have / May have + V3: Geçmiş Olasılık (Olmuş olabilir) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 294,
    "code": "B2-04",
    "level": "B2",
    "moduleId": "mod-b2-3",
    "moduleName": "Geçmişe Dair Modallar: Modal Deductions (Must have, Can't have)",
    "title": "Should have + V3: Yapılması Gerekip Yapılmamış Olaylar (Eleştiri & Pişmanlık)",
    "description": "B2 seviyesinde Should have + V3: Yapılması Gerekip Yapılmamış Olaylar (Eleştiri & Pişmanlık) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Should have + V3: Yapılması Gerekip Yapılmamış Olaylar (Eleştiri & Pişmanlık) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 294,
    "estimatedDuration": 20,
    "prerequisites": [
      293
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Should have + V3: Yapılması Gerekip Yapılmamış Olaylar (Eleştiri & Pişmanlık) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 295,
    "code": "B2-05",
    "level": "B2",
    "moduleId": "mod-b2-3",
    "moduleName": "Geçmişe Dair Modallar: Modal Deductions (Must have, Can't have)",
    "title": "Shouldn't have + V3: Yapılmaması Gerekip Yapılmış Hatalar",
    "description": "B2 seviyesinde Shouldn't have + V3: Yapılmaması Gerekip Yapılmış Hatalar konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Shouldn't have + V3: Yapılmaması Gerekip Yapılmış Hatalar konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 295,
    "estimatedDuration": 20,
    "prerequisites": [
      294
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Shouldn't have + V3: Yapılmaması Gerekip Yapılmış Hatalar konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 296,
    "code": "B2-06",
    "level": "B2",
    "moduleId": "mod-b2-3",
    "moduleName": "Geçmişe Dair Modallar: Modal Deductions (Must have, Can't have)",
    "title": "Needn't have done (Gereksiz yere yapıldı) vs Didn't need to do (Yapmaya gerek yoktu)",
    "description": "B2 seviyesinde Needn't have done (Gereksiz yere yapıldı) vs Didn't need to do (Yapmaya gerek yoktu) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Needn't have done (Gereksiz yere yapıldı) vs Didn't need to do (Yapmaya gerek yoktu) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 296,
    "estimatedDuration": 20,
    "prerequisites": [
      295
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Needn't have done (Gereksiz yere yapıldı) vs Didn't need to do (Yapmaya gerek yoktu) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 297,
    "code": "B2-07",
    "level": "B2",
    "moduleId": "mod-b2-3",
    "moduleName": "Geçmişe Dair Modallar: Modal Deductions (Must have, Can't have)",
    "title": "Dedektiflik ve Olay Yeri Kanıt Analizi Simülasyonu",
    "description": "B2 seviyesinde Dedektiflik ve Olay Yeri Kanıt Analizi Simülasyonu konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Dedektiflik ve Olay Yeri Kanıt Analizi Simülasyonu konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 297,
    "estimatedDuration": 20,
    "prerequisites": [
      296
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Dedektiflik ve Olay Yeri Kanıt Analizi Simülasyonu konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 298,
    "code": "B2-08",
    "level": "B2",
    "moduleId": "mod-b2-3",
    "moduleName": "Geçmişe Dair Modallar: Modal Deductions (Must have, Can't have)",
    "title": "Finansal Hataları ve Yatırım Sapmalarını Eleştirme",
    "description": "B2 seviyesinde Finansal Hataları ve Yatırım Sapmalarını Eleştirme konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Finansal Hataları ve Yatırım Sapmalarını Eleştirme konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 298,
    "estimatedDuration": 20,
    "prerequisites": [
      297
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Finansal Hataları ve Yatırım Sapmalarını Eleştirme konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 299,
    "code": "B2-09",
    "level": "B2",
    "moduleId": "mod-b2-3",
    "moduleName": "Geçmişe Dair Modallar: Modal Deductions (Must have, Can't have)",
    "title": "Mahkeme ve Soruşturma İfadelerinde Modal Analiz",
    "description": "B2 seviyesinde Mahkeme ve Soruşturma İfadelerinde Modal Analiz konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Mahkeme ve Soruşturma İfadelerinde Modal Analiz konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 299,
    "estimatedDuration": 20,
    "prerequisites": [
      298
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Mahkeme ve Soruşturma İfadelerinde Modal Analiz konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 300,
    "code": "B2-10",
    "level": "B2",
    "moduleId": "mod-b2-3",
    "moduleName": "Geçmişe Dair Modallar: Modal Deductions (Must have, Can't have)",
    "title": "B2 Modül 3 Entegrasyonu: Havacılık Kazası Soruşturma Raporu",
    "description": "B2 seviyesinde B2 Modül 3 Entegrasyonu: Havacılık Kazası Soruşturma Raporu konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "B2 Modül 3 Entegrasyonu: Havacılık Kazası Soruşturma Raporu konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 300,
    "estimatedDuration": 20,
    "prerequisites": [
      299
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "B2 Modül 3 Entegrasyonu: Havacılık Kazası Soruşturma Raporu konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 301,
    "code": "B2-01",
    "level": "B2",
    "moduleId": "mod-b2-4",
    "moduleName": "Keşkeler ve Varsayımlar: Wish & Hypothetical Meaning",
    "title": "I wish / If only + Past Simple: Şu Ana Dair Keşkeler (Gerçekte öyle değil)",
    "description": "B2 seviyesinde I wish / If only + Past Simple: Şu Ana Dair Keşkeler (Gerçekte öyle değil) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "I wish / If only + Past Simple: Şu Ana Dair Keşkeler (Gerçekte öyle değil) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 301,
    "estimatedDuration": 20,
    "prerequisites": [
      300
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "I wish / If only + Past Simple: Şu Ana Dair Keşkeler (Gerçekte öyle değil) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 302,
    "code": "B2-02",
    "level": "B2",
    "moduleId": "mod-b2-4",
    "moduleName": "Keşkeler ve Varsayımlar: Wish & Hypothetical Meaning",
    "title": "I wish / If only + Past Perfect: Geçmişe Dair Pişmanlıklar (Keşke yapsaydım)",
    "description": "B2 seviyesinde I wish / If only + Past Perfect: Geçmişe Dair Pişmanlıklar (Keşke yapsaydım) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "I wish / If only + Past Perfect: Geçmişe Dair Pişmanlıklar (Keşke yapsaydım) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 302,
    "estimatedDuration": 20,
    "prerequisites": [
      301
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "I wish / If only + Past Perfect: Geçmişe Dair Pişmanlıklar (Keşke yapsaydım) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 303,
    "code": "B2-03",
    "level": "B2",
    "moduleId": "mod-b2-4",
    "moduleName": "Keşkeler ve Varsayımlar: Wish & Hypothetical Meaning",
    "title": "I wish + Would: Başkasının Davranışından Rahatsızlık ve Şikayet",
    "description": "B2 seviyesinde I wish + Would: Başkasının Davranışından Rahatsızlık ve Şikayet konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "I wish + Would: Başkasının Davranışından Rahatsızlık ve Şikayet konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 303,
    "estimatedDuration": 20,
    "prerequisites": [
      302
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "I wish + Would: Başkasının Davranışından Rahatsızlık ve Şikayet konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 304,
    "code": "B2-04",
    "level": "B2",
    "moduleId": "mod-b2-4",
    "moduleName": "Keşkeler ve Varsayımlar: Wish & Hypothetical Meaning",
    "title": "Would rather / Would sooner ile Tercih Bildirme (I'd rather stay)",
    "description": "B2 seviyesinde Would rather / Would sooner ile Tercih Bildirme (I'd rather stay) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Would rather / Would sooner ile Tercih Bildirme (I'd rather stay) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 304,
    "estimatedDuration": 20,
    "prerequisites": [
      303
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Would rather / Would sooner ile Tercih Bildirme (I'd rather stay) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 305,
    "code": "B2-05",
    "level": "B2",
    "moduleId": "mod-b2-4",
    "moduleName": "Keşkeler ve Varsayımlar: Wish & Hypothetical Meaning",
    "title": "Would rather someone did something (Başkası yapsın tercihi)",
    "description": "B2 seviyesinde Would rather someone did something (Başkası yapsın tercihi) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Would rather someone did something (Başkası yapsın tercihi) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 305,
    "estimatedDuration": 20,
    "prerequisites": [
      304
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Would rather someone did something (Başkası yapsın tercihi) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 306,
    "code": "B2-06",
    "level": "B2",
    "moduleId": "mod-b2-4",
    "moduleName": "Keşkeler ve Varsayımlar: Wish & Hypothetical Meaning",
    "title": "It is high time / It is about time + Past Simple (Vakti geldi de geçiyor)",
    "description": "B2 seviyesinde It is high time / It is about time + Past Simple (Vakti geldi de geçiyor) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "It is high time / It is about time + Past Simple (Vakti geldi de geçiyor) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 306,
    "estimatedDuration": 20,
    "prerequisites": [
      305
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "It is high time / It is about time + Past Simple (Vakti geldi de geçiyor) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 307,
    "code": "B2-07",
    "level": "B2",
    "moduleId": "mod-b2-4",
    "moduleName": "Keşkeler ve Varsayımlar: Wish & Hypothetical Meaning",
    "title": "As if / As though ile Benzetme ve Varsayım (He talks as if he were the boss)",
    "description": "B2 seviyesinde As if / As though ile Benzetme ve Varsayım (He talks as if he were the boss) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "As if / As though ile Benzetme ve Varsayım (He talks as if he were the boss) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 307,
    "estimatedDuration": 20,
    "prerequisites": [
      306
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "As if / As though ile Benzetme ve Varsayım (He talks as if he were the boss) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 308,
    "code": "B2-08",
    "level": "B2",
    "moduleId": "mod-b2-4",
    "moduleName": "Keşkeler ve Varsayımlar: Wish & Hypothetical Meaning",
    "title": "Kişisel Hayat Kararlarını ve Alternatif Kariyer Yollarını Değerlendirme",
    "description": "B2 seviyesinde Kişisel Hayat Kararlarını ve Alternatif Kariyer Yollarını Değerlendirme konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Kişisel Hayat Kararlarını ve Alternatif Kariyer Yollarını Değerlendirme konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 308,
    "estimatedDuration": 20,
    "prerequisites": [
      307
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Kişisel Hayat Kararlarını ve Alternatif Kariyer Yollarını Değerlendirme konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 309,
    "code": "B2-09",
    "level": "B2",
    "moduleId": "mod-b2-4",
    "moduleName": "Keşkeler ve Varsayımlar: Wish & Hypothetical Meaning",
    "title": "Dramatik Diyaloglarda Duygusal Yansıtma",
    "description": "B2 seviyesinde Dramatik Diyaloglarda Duygusal Yansıtma konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Dramatik Diyaloglarda Duygusal Yansıtma konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 309,
    "estimatedDuration": 20,
    "prerequisites": [
      308
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Dramatik Diyaloglarda Duygusal Yansıtma konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 310,
    "code": "B2-10",
    "level": "B2",
    "moduleId": "mod-b2-4",
    "moduleName": "Keşkeler ve Varsayımlar: Wish & Hypothetical Meaning",
    "title": "B2 Modül 4 Entegrasyonu: Stratejik Dönüm Noktaları Öz Değerlendirmesi",
    "description": "B2 seviyesinde B2 Modül 4 Entegrasyonu: Stratejik Dönüm Noktaları Öz Değerlendirmesi konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "B2 Modül 4 Entegrasyonu: Stratejik Dönüm Noktaları Öz Değerlendirmesi konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 310,
    "estimatedDuration": 20,
    "prerequisites": [
      309
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "B2 Modül 4 Entegrasyonu: Stratejik Dönüm Noktaları Öz Değerlendirmesi konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 311,
    "code": "B2-01",
    "level": "B2",
    "moduleId": "mod-b2-5",
    "moduleName": "Non-defining Relative Clauses & Participle Clauses",
    "title": "Non-defining Relative Clauses: Ekstra Bilgi ve İki Virgül Arası Kullanım",
    "description": "B2 seviyesinde Non-defining Relative Clauses: Ekstra Bilgi ve İki Virgül Arası Kullanım konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Non-defining Relative Clauses: Ekstra Bilgi ve İki Virgül Arası Kullanım konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 311,
    "estimatedDuration": 20,
    "prerequisites": [
      310
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Non-defining Relative Clauses: Ekstra Bilgi ve İki Virgül Arası Kullanım konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 312,
    "code": "B2-02",
    "level": "B2",
    "moduleId": "mod-b2-5",
    "moduleName": "Non-defining Relative Clauses & Participle Clauses",
    "title": "Which ile Bütün Bir Cümleye Atıfta Bulunma (...which surprised everyone)",
    "description": "B2 seviyesinde Which ile Bütün Bir Cümleye Atıfta Bulunma (...which surprised everyone) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Which ile Bütün Bir Cümleye Atıfta Bulunma (...which surprised everyone) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 312,
    "estimatedDuration": 20,
    "prerequisites": [
      311
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Which ile Bütün Bir Cümleye Atıfta Bulunma (...which surprised everyone) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 313,
    "code": "B2-03",
    "level": "B2",
    "moduleId": "mod-b2-5",
    "moduleName": "Non-defining Relative Clauses & Participle Clauses",
    "title": "Miktar Belirteçleriyle İlgi Cümlecikleri (None of whom, both of which)",
    "description": "B2 seviyesinde Miktar Belirteçleriyle İlgi Cümlecikleri (None of whom, both of which) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Miktar Belirteçleriyle İlgi Cümlecikleri (None of whom, both of which) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 313,
    "estimatedDuration": 20,
    "prerequisites": [
      312
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Miktar Belirteçleriyle İlgi Cümlecikleri (None of whom, both of which) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 314,
    "code": "B2-04",
    "level": "B2",
    "moduleId": "mod-b2-5",
    "moduleName": "Non-defining Relative Clauses & Participle Clauses",
    "title": "Participle Clauses Giriş: Şimdiki Zaman Kısaltması (Watching TV, he heard...)",
    "description": "B2 seviyesinde Participle Clauses Giriş: Şimdiki Zaman Kısaltması (Watching TV, he heard...) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Participle Clauses Giriş: Şimdiki Zaman Kısaltması (Watching TV, he heard...) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 314,
    "estimatedDuration": 20,
    "prerequisites": [
      313
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Participle Clauses Giriş: Şimdiki Zaman Kısaltması (Watching TV, he heard...) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 315,
    "code": "B2-05",
    "level": "B2",
    "moduleId": "mod-b2-5",
    "moduleName": "Non-defining Relative Clauses & Participle Clauses",
    "title": "Past Participle Kısaltması: Edilgen Yapıları Sadeleştirme (Damaged by fire...)",
    "description": "B2 seviyesinde Past Participle Kısaltması: Edilgen Yapıları Sadeleştirme (Damaged by fire...) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Past Participle Kısaltması: Edilgen Yapıları Sadeleştirme (Damaged by fire...) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 315,
    "estimatedDuration": 20,
    "prerequisites": [
      314
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Past Participle Kısaltması: Edilgen Yapıları Sadeleştirme (Damaged by fire...) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 316,
    "code": "B2-06",
    "level": "B2",
    "moduleId": "mod-b2-5",
    "moduleName": "Non-defining Relative Clauses & Participle Clauses",
    "title": "Perfect Participle: Önce Biten Eylemler (Having finished the report...)",
    "description": "B2 seviyesinde Perfect Participle: Önce Biten Eylemler (Having finished the report...) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Perfect Participle: Önce Biten Eylemler (Having finished the report...) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 316,
    "estimatedDuration": 20,
    "prerequisites": [
      315
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Perfect Participle: Önce Biten Eylemler (Having finished the report...) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 317,
    "code": "B2-07",
    "level": "B2",
    "moduleId": "mod-b2-5",
    "moduleName": "Non-defining Relative Clauses & Participle Clauses",
    "title": "Sebep Bildiren Kısaltmalar: Being busy, he couldn't attend",
    "description": "B2 seviyesinde Sebep Bildiren Kısaltmalar: Being busy, he couldn't attend konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Sebep Bildiren Kısaltmalar: Being busy, he couldn't attend konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 317,
    "estimatedDuration": 20,
    "prerequisites": [
      316
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Sebep Bildiren Kısaltmalar: Being busy, he couldn't attend konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 318,
    "code": "B2-08",
    "level": "B2",
    "moduleId": "mod-b2-5",
    "moduleName": "Non-defining Relative Clauses & Participle Clauses",
    "title": "Zaman Bildiren Kısaltmalar: On arriving at the airport...",
    "description": "B2 seviyesinde Zaman Bildiren Kısaltmalar: On arriving at the airport... konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Zaman Bildiren Kısaltmalar: On arriving at the airport... konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 318,
    "estimatedDuration": 20,
    "prerequisites": [
      317
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Zaman Bildiren Kısaltmalar: On arriving at the airport... konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 319,
    "code": "B2-09",
    "level": "B2",
    "moduleId": "mod-b2-5",
    "moduleName": "Non-defining Relative Clauses & Participle Clauses",
    "title": "Haber Yazımı ve Gazetecilik Dilinde Participle Ustalığı",
    "description": "B2 seviyesinde Haber Yazımı ve Gazetecilik Dilinde Participle Ustalığı konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Haber Yazımı ve Gazetecilik Dilinde Participle Ustalığı konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 319,
    "estimatedDuration": 20,
    "prerequisites": [
      318
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Haber Yazımı ve Gazetecilik Dilinde Participle Ustalığı konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 320,
    "code": "B2-10",
    "level": "B2",
    "moduleId": "mod-b2-5",
    "moduleName": "Non-defining Relative Clauses & Participle Clauses",
    "title": "B2 Modül 5 Entegrasyonu: Araştırmacı Gazetecilik Makalesi Yazımı",
    "description": "B2 seviyesinde B2 Modül 5 Entegrasyonu: Araştırmacı Gazetecilik Makalesi Yazımı konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "B2 Modül 5 Entegrasyonu: Araştırmacı Gazetecilik Makalesi Yazımı konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 320,
    "estimatedDuration": 20,
    "prerequisites": [
      319
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "B2 Modül 5 Entegrasyonu: Araştırmacı Gazetecilik Makalesi Yazımı konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 321,
    "code": "B2-01",
    "level": "B2",
    "moduleId": "mod-b2-6",
    "moduleName": "Devrik Cümle Yapısı (Inversion) ve Vurgu Stratejileri",
    "title": "Devrik Cümle Mantığı: Vurgu İçin Yardımcı Fiili Özne Önüne Alma",
    "description": "B2 seviyesinde Devrik Cümle Mantığı: Vurgu İçin Yardımcı Fiili Özne Önüne Alma konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Devrik Cümle Mantığı: Vurgu İçin Yardımcı Fiili Özne Önüne Alma konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 321,
    "estimatedDuration": 20,
    "prerequisites": [
      320
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Devrik Cümle Mantığı: Vurgu İçin Yardımcı Fiili Özne Önüne Alma konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 322,
    "code": "B2-02",
    "level": "B2",
    "moduleId": "mod-b2-6",
    "moduleName": "Devrik Cümle Yapısı (Inversion) ve Vurgu Stratejileri",
    "title": "Olumsuz Zaman Zarflarıyla Devriklik: Seldom, Rarely, Never before",
    "description": "B2 seviyesinde Olumsuz Zaman Zarflarıyla Devriklik: Seldom, Rarely, Never before konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Olumsuz Zaman Zarflarıyla Devriklik: Seldom, Rarely, Never before konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 322,
    "estimatedDuration": 20,
    "prerequisites": [
      321
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Olumsuz Zaman Zarflarıyla Devriklik: Seldom, Rarely, Never before konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 323,
    "code": "B2-03",
    "level": "B2",
    "moduleId": "mod-b2-6",
    "moduleName": "Devrik Cümle Yapısı (Inversion) ve Vurgu Stratejileri",
    "title": "Zaman Sınırı Bildiren Devriklik: Hardly... when, Scarcely... when",
    "description": "B2 seviyesinde Zaman Sınırı Bildiren Devriklik: Hardly... when, Scarcely... when konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Zaman Sınırı Bildiren Devriklik: Hardly... when, Scarcely... when konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 323,
    "estimatedDuration": 20,
    "prerequisites": [
      322
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Zaman Sınırı Bildiren Devriklik: Hardly... when, Scarcely... when konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 324,
    "code": "B2-04",
    "level": "B2",
    "moduleId": "mod-b2-6",
    "moduleName": "Devrik Cümle Yapısı (Inversion) ve Vurgu Stratejileri",
    "title": "No Sooner... Than Kalıbı ile Hızlı Olay Akışı",
    "description": "B2 seviyesinde No Sooner... Than Kalıbı ile Hızlı Olay Akışı konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "No Sooner... Than Kalıbı ile Hızlı Olay Akışı konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 324,
    "estimatedDuration": 20,
    "prerequisites": [
      323
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "No Sooner... Than Kalıbı ile Hızlı Olay Akışı konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 325,
    "code": "B2-05",
    "level": "B2",
    "moduleId": "mod-b2-6",
    "moduleName": "Devrik Cümle Yapısı (Inversion) ve Vurgu Stratejileri",
    "title": "Kısıtlama Zarfları: Only then, Only by working hard, Only after",
    "description": "B2 seviyesinde Kısıtlama Zarfları: Only then, Only by working hard, Only after konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Kısıtlama Zarfları: Only then, Only by working hard, Only after konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 325,
    "estimatedDuration": 20,
    "prerequisites": [
      324
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Kısıtlama Zarfları: Only then, Only by working hard, Only after konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 326,
    "code": "B2-06",
    "level": "B2",
    "moduleId": "mod-b2-6",
    "moduleName": "Devrik Cümle Yapısı (Inversion) ve Vurgu Stratejileri",
    "title": "Yasak ve Kural Devrikliği: Under no circumstances, On no account",
    "description": "B2 seviyesinde Yasak ve Kural Devrikliği: Under no circumstances, On no account konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Yasak ve Kural Devrikliği: Under no circumstances, On no account konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 326,
    "estimatedDuration": 20,
    "prerequisites": [
      325
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Yasak ve Kural Devrikliği: Under no circumstances, On no account konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 327,
    "code": "B2-07",
    "level": "B2",
    "moduleId": "mod-b2-6",
    "moduleName": "Devrik Cümle Yapısı (Inversion) ve Vurgu Stratejileri",
    "title": "Not only... but also ile İkili Vurgu Devrikliği",
    "description": "B2 seviyesinde Not only... but also ile İkili Vurgu Devrikliği konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Not only... but also ile İkili Vurgu Devrikliği konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 327,
    "estimatedDuration": 20,
    "prerequisites": [
      326
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Not only... but also ile İkili Vurgu Devrikliği konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 328,
    "code": "B2-08",
    "level": "B2",
    "moduleId": "mod-b2-6",
    "moduleName": "Devrik Cümle Yapısı (Inversion) ve Vurgu Stratejileri",
    "title": "Little did they know... ile Beklenmedik Olay Vurgusu",
    "description": "B2 seviyesinde Little did they know... ile Beklenmedik Olay Vurgusu konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Little did they know... ile Beklenmedik Olay Vurgusu konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 328,
    "estimatedDuration": 20,
    "prerequisites": [
      327
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Little did they know... ile Beklenmedik Olay Vurgusu konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 329,
    "code": "B2-09",
    "level": "B2",
    "moduleId": "mod-b2-6",
    "moduleName": "Devrik Cümle Yapısı (Inversion) ve Vurgu Stratejileri",
    "title": "Siyasi Hitabet ve Edebi Metinlerde Devrik Cümle Gücü",
    "description": "B2 seviyesinde Siyasi Hitabet ve Edebi Metinlerde Devrik Cümle Gücü konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Siyasi Hitabet ve Edebi Metinlerde Devrik Cümle Gücü konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 329,
    "estimatedDuration": 20,
    "prerequisites": [
      328
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Siyasi Hitabet ve Edebi Metinlerde Devrik Cümle Gücü konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 330,
    "code": "B2-10",
    "level": "B2",
    "moduleId": "mod-b2-6",
    "moduleName": "Devrik Cümle Yapısı (Inversion) ve Vurgu Stratejileri",
    "title": "B2 Modül 6 Entegrasyonu: Etkileyici Bir Vizyon Konuşması Metni",
    "description": "B2 seviyesinde B2 Modül 6 Entegrasyonu: Etkileyici Bir Vizyon Konuşması Metni konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "B2 Modül 6 Entegrasyonu: Etkileyici Bir Vizyon Konuşması Metni konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 330,
    "estimatedDuration": 20,
    "prerequisites": [
      329
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "B2 Modül 6 Entegrasyonu: Etkileyici Bir Vizyon Konuşması Metni konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 331,
    "code": "B2-01",
    "level": "B2",
    "moduleId": "mod-b2-7",
    "moduleName": "Akademik ve Profesyonel Bağlaçlar: Cohesion & Discourse",
    "title": "Metin Bağlayıcılığı (Cohesion): Bağlaç Aileleri ve Fonksiyonları",
    "description": "B2 seviyesinde Metin Bağlayıcılığı (Cohesion): Bağlaç Aileleri ve Fonksiyonları konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Metin Bağlayıcılığı (Cohesion): Bağlaç Aileleri ve Fonksiyonları konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 331,
    "estimatedDuration": 20,
    "prerequisites": [
      330
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Metin Bağlayıcılığı (Cohesion): Bağlaç Aileleri ve Fonksiyonları konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 332,
    "code": "B2-02",
    "level": "B2",
    "moduleId": "mod-b2-7",
    "moduleName": "Akademik ve Profesyonel Bağlaçlar: Cohesion & Discourse",
    "title": "Zıtlık ve Tezat: However, Nevertheless, On the contrary, Yet",
    "description": "B2 seviyesinde Zıtlık ve Tezat: However, Nevertheless, On the contrary, Yet konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Zıtlık ve Tezat: However, Nevertheless, On the contrary, Yet konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 332,
    "estimatedDuration": 20,
    "prerequisites": [
      331
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Zıtlık ve Tezat: However, Nevertheless, On the contrary, Yet konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 333,
    "code": "B2-03",
    "level": "B2",
    "moduleId": "mod-b2-7",
    "moduleName": "Akademik ve Profesyonel Bağlaçlar: Cohesion & Discourse",
    "title": "Ödün Verme (Concession): In spite of, Despite, Notwithstanding, Albeit",
    "description": "B2 seviyesinde Ödün Verme (Concession): In spite of, Despite, Notwithstanding, Albeit konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Ödün Verme (Concession): In spite of, Despite, Notwithstanding, Albeit konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 333,
    "estimatedDuration": 20,
    "prerequisites": [
      332
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Ödün Verme (Concession): In spite of, Despite, Notwithstanding, Albeit konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 334,
    "code": "B2-04",
    "level": "B2",
    "moduleId": "mod-b2-7",
    "moduleName": "Akademik ve Profesyonel Bağlaçlar: Cohesion & Discourse",
    "title": "Sebep ve Sonuç: Consequently, Therefore, As a result, Owing to",
    "description": "B2 seviyesinde Sebep ve Sonuç: Consequently, Therefore, As a result, Owing to konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Sebep ve Sonuç: Consequently, Therefore, As a result, Owing to konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 334,
    "estimatedDuration": 20,
    "prerequisites": [
      333
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Sebep ve Sonuç: Consequently, Therefore, As a result, Owing to konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 335,
    "code": "B2-05",
    "level": "B2",
    "moduleId": "mod-b2-7",
    "moduleName": "Akademik ve Profesyonel Bağlaçlar: Cohesion & Discourse",
    "title": "Ek Bilgi Sunma: Furthermore, Moreover, In addition, Not to mention",
    "description": "B2 seviyesinde Ek Bilgi Sunma: Furthermore, Moreover, In addition, Not to mention konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Ek Bilgi Sunma: Furthermore, Moreover, In addition, Not to mention konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 335,
    "estimatedDuration": 20,
    "prerequisites": [
      334
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Ek Bilgi Sunma: Furthermore, Moreover, In addition, Not to mention konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 336,
    "code": "B2-06",
    "level": "B2",
    "moduleId": "mod-b2-7",
    "moduleName": "Akademik ve Profesyonel Bağlaçlar: Cohesion & Discourse",
    "title": "Örnekleme ve Açıklama: For instance, Namely, That is to say",
    "description": "B2 seviyesinde Örnekleme ve Açıklama: For instance, Namely, That is to say konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Örnekleme ve Açıklama: For instance, Namely, That is to say konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 336,
    "estimatedDuration": 20,
    "prerequisites": [
      335
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Örnekleme ve Açıklama: For instance, Namely, That is to say konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 337,
    "code": "B2-07",
    "level": "B2",
    "moduleId": "mod-b2-7",
    "moduleName": "Akademik ve Profesyonel Bağlaçlar: Cohesion & Discourse",
    "title": "Şart ve İstisna: Unless, Otherwise, Provided that, Except for",
    "description": "B2 seviyesinde Şart ve İstisna: Unless, Otherwise, Provided that, Except for konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Şart ve İstisna: Unless, Otherwise, Provided that, Except for konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 337,
    "estimatedDuration": 20,
    "prerequisites": [
      336
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Şart ve İstisna: Unless, Otherwise, Provided that, Except for konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 338,
    "code": "B2-08",
    "level": "B2",
    "moduleId": "mod-b2-7",
    "moduleName": "Akademik ve Profesyonel Bağlaçlar: Cohesion & Discourse",
    "title": "Paragraf İçi Geçiş Cümleleri Kurma Ustalığı",
    "description": "B2 seviyesinde Paragraf İçi Geçiş Cümleleri Kurma Ustalığı konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Paragraf İçi Geçiş Cümleleri Kurma Ustalığı konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 338,
    "estimatedDuration": 20,
    "prerequisites": [
      337
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Paragraf İçi Geçiş Cümleleri Kurma Ustalığı konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 339,
    "code": "B2-09",
    "level": "B2",
    "moduleId": "mod-b2-7",
    "moduleName": "Akademik ve Profesyonel Bağlaçlar: Cohesion & Discourse",
    "title": "IELTS / TOEFL Standartlarında Essay Bağlayıcılığı",
    "description": "B2 seviyesinde IELTS / TOEFL Standartlarında Essay Bağlayıcılığı konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "IELTS / TOEFL Standartlarında Essay Bağlayıcılığı konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 339,
    "estimatedDuration": 20,
    "prerequisites": [
      338
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "IELTS / TOEFL Standartlarında Essay Bağlayıcılığı konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 340,
    "code": "B2-10",
    "level": "B2",
    "moduleId": "mod-b2-7",
    "moduleName": "Akademik ve Profesyonel Bağlaçlar: Cohesion & Discourse",
    "title": "B2 Modül 7 Entegrasyonu: Akademik Tez-Antitez Makalesi Oluşturma",
    "description": "B2 seviyesinde B2 Modül 7 Entegrasyonu: Akademik Tez-Antitez Makalesi Oluşturma konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "B2 Modül 7 Entegrasyonu: Akademik Tez-Antitez Makalesi Oluşturma konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 340,
    "estimatedDuration": 20,
    "prerequisites": [
      339
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "B2 Modül 7 Entegrasyonu: Akademik Tez-Antitez Makalesi Oluşturma konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 341,
    "code": "B2-01",
    "level": "B2",
    "moduleId": "mod-b2-8",
    "moduleName": "Resmi E-posta Diplomasisi ve Müzakere Becerileri",
    "title": "Diplomatik İngilizce: Doğrudan İfadeleri Yumuşatma (Softening Language)",
    "description": "B2 seviyesinde Diplomatik İngilizce: Doğrudan İfadeleri Yumuşatma (Softening Language) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Diplomatik İngilizce: Doğrudan İfadeleri Yumuşatma (Softening Language) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 341,
    "estimatedDuration": 20,
    "prerequisites": [
      340
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Diplomatik İngilizce: Doğrudan İfadeleri Yumuşatma (Softening Language) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 342,
    "code": "B2-02",
    "level": "B2",
    "moduleId": "mod-b2-8",
    "moduleName": "Resmi E-posta Diplomasisi ve Müzakere Becerileri",
    "title": "Eleştiriyi Pozitif Çerçeveleme: It seems there is a slight discrepancy",
    "description": "B2 seviyesinde Eleştiriyi Pozitif Çerçeveleme: It seems there is a slight discrepancy konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Eleştiriyi Pozitif Çerçeveleme: It seems there is a slight discrepancy konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 342,
    "estimatedDuration": 20,
    "prerequisites": [
      341
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Eleştiriyi Pozitif Çerçeveleme: It seems there is a slight discrepancy konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 343,
    "code": "B2-03",
    "level": "B2",
    "moduleId": "mod-b2-8",
    "moduleName": "Resmi E-posta Diplomasisi ve Müzakere Becerileri",
    "title": "İtiraz ve Anlaşmazlık Yönetimi: I see your point; however...",
    "description": "B2 seviyesinde İtiraz ve Anlaşmazlık Yönetimi: I see your point; however... konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "İtiraz ve Anlaşmazlık Yönetimi: I see your point; however... konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 343,
    "estimatedDuration": 20,
    "prerequisites": [
      342
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "İtiraz ve Anlaşmazlık Yönetimi: I see your point; however... konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 344,
    "code": "B2-04",
    "level": "B2",
    "moduleId": "mod-b2-8",
    "moduleName": "Resmi E-posta Diplomasisi ve Müzakere Becerileri",
    "title": "Taviz Verme ve Şart Koşma: We would be willing to... on the condition that",
    "description": "B2 seviyesinde Taviz Verme ve Şart Koşma: We would be willing to... on the condition that konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Taviz Verme ve Şart Koşma: We would be willing to... on the condition that konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 344,
    "estimatedDuration": 20,
    "prerequisites": [
      343
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Taviz Verme ve Şart Koşma: We would be willing to... on the condition that konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 345,
    "code": "B2-05",
    "level": "B2",
    "moduleId": "mod-b2-8",
    "moduleName": "Resmi E-posta Diplomasisi ve Müzakere Becerileri",
    "title": "Diplomatik E-posta: Fiyat Artışı ve Gecikme Bildirimi",
    "description": "B2 seviyesinde Diplomatik E-posta: Fiyat Artışı ve Gecikme Bildirimi konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Diplomatik E-posta: Fiyat Artışı ve Gecikme Bildirimi konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 345,
    "estimatedDuration": 20,
    "prerequisites": [
      344
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Diplomatik E-posta: Fiyat Artışı ve Gecikme Bildirimi konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 346,
    "code": "B2-06",
    "level": "B2",
    "moduleId": "mod-b2-8",
    "moduleName": "Resmi E-posta Diplomasisi ve Müzakere Becerileri",
    "title": "Diplomatik E-posta: Müşteri Şikayetini Çözme ve Özür Dileme",
    "description": "B2 seviyesinde Diplomatik E-posta: Müşteri Şikayetini Çözme ve Özür Dileme konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Diplomatik E-posta: Müşteri Şikayetini Çözme ve Özür Dileme konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 346,
    "estimatedDuration": 20,
    "prerequisites": [
      345
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Diplomatik E-posta: Müşteri Şikayetini Çözme ve Özür Dileme konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 347,
    "code": "B2-07",
    "level": "B2",
    "moduleId": "mod-b2-8",
    "moduleName": "Resmi E-posta Diplomasisi ve Müzakere Becerileri",
    "title": "Uluslararası Sözleşme ve Teklif Mektubu Dili",
    "description": "B2 seviyesinde Uluslararası Sözleşme ve Teklif Mektubu Dili konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Uluslararası Sözleşme ve Teklif Mektubu Dili konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 347,
    "estimatedDuration": 20,
    "prerequisites": [
      346
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Uluslararası Sözleşme ve Teklif Mektubu Dili konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 348,
    "code": "B2-08",
    "level": "B2",
    "moduleId": "mod-b2-8",
    "moduleName": "Resmi E-posta Diplomasisi ve Müzakere Becerileri",
    "title": "Sanal Toplantılarda Moderasyon ve Söz Hakkı Verme",
    "description": "B2 seviyesinde Sanal Toplantılarda Moderasyon ve Söz Hakkı Verme konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Sanal Toplantılarda Moderasyon ve Söz Hakkı Verme konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 348,
    "estimatedDuration": 20,
    "prerequisites": [
      347
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Sanal Toplantılarda Moderasyon ve Söz Hakkı Verme konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 349,
    "code": "B2-09",
    "level": "B2",
    "moduleId": "mod-b2-8",
    "moduleName": "Resmi E-posta Diplomasisi ve Müzakere Becerileri",
    "title": "Zorlu Müzakerelerde Çıkmazları Aşma Stratejileri",
    "description": "B2 seviyesinde Zorlu Müzakerelerde Çıkmazları Aşma Stratejileri konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Zorlu Müzakerelerde Çıkmazları Aşma Stratejileri konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 349,
    "estimatedDuration": 20,
    "prerequisites": [
      348
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Zorlu Müzakerelerde Çıkmazları Aşma Stratejileri konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 350,
    "code": "B2-10",
    "level": "B2",
    "moduleId": "mod-b2-8",
    "moduleName": "Resmi E-posta Diplomasisi ve Müzakere Becerileri",
    "title": "B2 Modül 8 Entegrasyonu: Uluslararası Tedarikçi Müzakeresi Simülasyonu",
    "description": "B2 seviyesinde B2 Modül 8 Entegrasyonu: Uluslararası Tedarikçi Müzakeresi Simülasyonu konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "B2 Modül 8 Entegrasyonu: Uluslararası Tedarikçi Müzakeresi Simülasyonu konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 350,
    "estimatedDuration": 20,
    "prerequisites": [
      349
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "B2 Modül 8 Entegrasyonu: Uluslararası Tedarikçi Müzakeresi Simülasyonu konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 351,
    "code": "B2-01",
    "level": "B2",
    "moduleId": "mod-b2-9",
    "moduleName": "İş Hayatında Deyimsel İfadeler ve Phrasal Verbs",
    "title": "İş Hayatında Sık Kullanılan Deyimler (Think outside the box, Touch base)",
    "description": "B2 seviyesinde İş Hayatında Sık Kullanılan Deyimler (Think outside the box, Touch base) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "İş Hayatında Sık Kullanılan Deyimler (Think outside the box, Touch base) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 351,
    "estimatedDuration": 20,
    "prerequisites": [
      350
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "İş Hayatında Sık Kullanılan Deyimler (Think outside the box, Touch base) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 352,
    "code": "B2-02",
    "level": "B2",
    "moduleId": "mod-b2-9",
    "moduleName": "İş Hayatında Deyimsel İfadeler ve Phrasal Verbs",
    "title": "Strateji ve Hedef Deyimleri (Back to the drawing board, Hit the nail)",
    "description": "B2 seviyesinde Strateji ve Hedef Deyimleri (Back to the drawing board, Hit the nail) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Strateji ve Hedef Deyimleri (Back to the drawing board, Hit the nail) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 352,
    "estimatedDuration": 20,
    "prerequisites": [
      351
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Strateji ve Hedef Deyimleri (Back to the drawing board, Hit the nail) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 353,
    "code": "B2-03",
    "level": "B2",
    "moduleId": "mod-b2-9",
    "moduleName": "İş Hayatında Deyimsel İfadeler ve Phrasal Verbs",
    "title": "Finans ve Bütçe Deyimleri (Cut corners, Ballpark figure, In the red)",
    "description": "B2 seviyesinde Finans ve Bütçe Deyimleri (Cut corners, Ballpark figure, In the red) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Finans ve Bütçe Deyimleri (Cut corners, Ballpark figure, In the red) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 353,
    "estimatedDuration": 20,
    "prerequisites": [
      352
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Finans ve Bütçe Deyimleri (Cut corners, Ballpark figure, In the red) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 354,
    "code": "B2-04",
    "level": "B2",
    "moduleId": "mod-b2-9",
    "moduleName": "İş Hayatında Deyimsel İfadeler ve Phrasal Verbs",
    "title": "Üçlü Phrasal Verbs (Come up with, Put up with, Look forward to)",
    "description": "B2 seviyesinde Üçlü Phrasal Verbs (Come up with, Put up with, Look forward to) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Üçlü Phrasal Verbs (Come up with, Put up with, Look forward to) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 354,
    "estimatedDuration": 20,
    "prerequisites": [
      353
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Üçlü Phrasal Verbs (Come up with, Put up with, Look forward to) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 355,
    "code": "B2-05",
    "level": "B2",
    "moduleId": "mod-b2-9",
    "moduleName": "İş Hayatında Deyimsel İfadeler ve Phrasal Verbs",
    "title": "İş Yönetimi Phrasal Verbs (Phase out, Scale up, Step down)",
    "description": "B2 seviyesinde İş Yönetimi Phrasal Verbs (Phase out, Scale up, Step down) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "İş Yönetimi Phrasal Verbs (Phase out, Scale up, Step down) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 355,
    "estimatedDuration": 20,
    "prerequisites": [
      354
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "İş Yönetimi Phrasal Verbs (Phase out, Scale up, Step down) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 356,
    "code": "B2-06",
    "level": "B2",
    "moduleId": "mod-b2-9",
    "moduleName": "İş Hayatında Deyimsel İfadeler ve Phrasal Verbs",
    "title": "Toplantı Phrasal Verbs (Call off, Put off, Bring up, Wrap up)",
    "description": "B2 seviyesinde Toplantı Phrasal Verbs (Call off, Put off, Bring up, Wrap up) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Toplantı Phrasal Verbs (Call off, Put off, Bring up, Wrap up) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 356,
    "estimatedDuration": 20,
    "prerequisites": [
      355
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Toplantı Phrasal Verbs (Call off, Put off, Bring up, Wrap up) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 357,
    "code": "B2-07",
    "level": "B2",
    "moduleId": "mod-b2-9",
    "moduleName": "İş Hayatında Deyimsel İfadeler ve Phrasal Verbs",
    "title": "Deyimsel İfadelerin Aşırı Kullanımından Kaçınma ve Uygun Doz",
    "description": "B2 seviyesinde Deyimsel İfadelerin Aşırı Kullanımından Kaçınma ve Uygun Doz konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Deyimsel İfadelerin Aşırı Kullanımından Kaçınma ve Uygun Doz konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 357,
    "estimatedDuration": 20,
    "prerequisites": [
      356
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Deyimsel İfadelerin Aşırı Kullanımından Kaçınma ve Uygun Doz konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 358,
    "code": "B2-08",
    "level": "B2",
    "moduleId": "mod-b2-9",
    "moduleName": "İş Hayatında Deyimsel İfadeler ve Phrasal Verbs",
    "title": "Kültürel Bağlamda Deyimlerin Yorumlanması",
    "description": "B2 seviyesinde Kültürel Bağlamda Deyimlerin Yorumlanması konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Kültürel Bağlamda Deyimlerin Yorumlanması konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 358,
    "estimatedDuration": 20,
    "prerequisites": [
      357
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Kültürel Bağlamda Deyimlerin Yorumlanması konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 359,
    "code": "B2-09",
    "level": "B2",
    "moduleId": "mod-b2-9",
    "moduleName": "İş Hayatında Deyimsel İfadeler ve Phrasal Verbs",
    "title": "İngiliz ve Amerikan İş Jargonları Karşılaştırması",
    "description": "B2 seviyesinde İngiliz ve Amerikan İş Jargonları Karşılaştırması konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "İngiliz ve Amerikan İş Jargonları Karşılaştırması konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 359,
    "estimatedDuration": 20,
    "prerequisites": [
      358
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "İngiliz ve Amerikan İş Jargonları Karşılaştırması konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 360,
    "code": "B2-10",
    "level": "B2",
    "moduleId": "mod-b2-9",
    "moduleName": "İş Hayatında Deyimsel İfadeler ve Phrasal Verbs",
    "title": "B2 Modül 9 Entegrasyonu: Stratejik Yönetim Toplantısı Dinleme ve Analiz",
    "description": "B2 seviyesinde B2 Modül 9 Entegrasyonu: Stratejik Yönetim Toplantısı Dinleme ve Analiz konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "B2 Modül 9 Entegrasyonu: Stratejik Yönetim Toplantısı Dinleme ve Analiz konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 360,
    "estimatedDuration": 20,
    "prerequisites": [
      359
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "B2 Modül 9 Entegrasyonu: Stratejik Yönetim Toplantısı Dinleme ve Analiz konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 361,
    "code": "B2-01",
    "level": "B2",
    "moduleId": "mod-b2-10",
    "moduleName": "B2 Akıcı Tartışma, Medya Analizi ve Seviye Sentezi",
    "title": "Medya Okuryazarlığı: Manşet Dili ve Kısaltmalar",
    "description": "B2 seviyesinde Medya Okuryazarlığı: Manşet Dili ve Kısaltmalar konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Medya Okuryazarlığı: Manşet Dili ve Kısaltmalar konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 361,
    "estimatedDuration": 20,
    "prerequisites": [
      360
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Medya Okuryazarlığı: Manşet Dili ve Kısaltmalar konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 362,
    "code": "B2-02",
    "level": "B2",
    "moduleId": "mod-b2-10",
    "moduleName": "B2 Akıcı Tartışma, Medya Analizi ve Seviye Sentezi",
    "title": "Sahte Haber ve Manipülatif Söylemleri Deşifre Etme",
    "description": "B2 seviyesinde Sahte Haber ve Manipülatif Söylemleri Deşifre Etme konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Sahte Haber ve Manipülatif Söylemleri Deşifre Etme konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 362,
    "estimatedDuration": 20,
    "prerequisites": [
      361
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Sahte Haber ve Manipülatif Söylemleri Deşifre Etme konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 363,
    "code": "B2-03",
    "level": "B2",
    "moduleId": "mod-b2-10",
    "moduleName": "B2 Akıcı Tartışma, Medya Analizi ve Seviye Sentezi",
    "title": "Belgesel ve Podcast İncelemesi: İnce Detayları Yakalama",
    "description": "B2 seviyesinde Belgesel ve Podcast İncelemesi: İnce Detayları Yakalama konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Belgesel ve Podcast İncelemesi: İnce Detayları Yakalama konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 363,
    "estimatedDuration": 20,
    "prerequisites": [
      362
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Belgesel ve Podcast İncelemesi: İnce Detayları Yakalama konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 364,
    "code": "B2-04",
    "level": "B2",
    "moduleId": "mod-b2-10",
    "moduleName": "B2 Akıcı Tartışma, Medya Analizi ve Seviye Sentezi",
    "title": "Spontane Tartışma Becerileri: Düşünürken Zaman Kazanma Kalıpları",
    "description": "B2 seviyesinde Spontane Tartışma Becerileri: Düşünürken Zaman Kazanma Kalıpları konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Spontane Tartışma Becerileri: Düşünürken Zaman Kazanma Kalıpları konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 364,
    "estimatedDuration": 20,
    "prerequisites": [
      363
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Spontane Tartışma Becerileri: Düşünürken Zaman Kazanma Kalıpları konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 365,
    "code": "B2-05",
    "level": "B2",
    "moduleId": "mod-b2-10",
    "moduleName": "B2 Akıcı Tartışma, Medya Analizi ve Seviye Sentezi",
    "title": "Karmaşık Verileri ve İstatistiki Raporları Özetleme",
    "description": "B2 seviyesinde Karmaşık Verileri ve İstatistiki Raporları Özetleme konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Karmaşık Verileri ve İstatistiki Raporları Özetleme konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 365,
    "estimatedDuration": 20,
    "prerequisites": [
      364
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Karmaşık Verileri ve İstatistiki Raporları Özetleme konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 366,
    "code": "B2-06",
    "level": "B2",
    "moduleId": "mod-b2-10",
    "moduleName": "B2 Akıcı Tartışma, Medya Analizi ve Seviye Sentezi",
    "title": "Akademik Sunum Yapma ve Dinleyici Sorularını Yanıtlama",
    "description": "B2 seviyesinde Akademik Sunum Yapma ve Dinleyici Sorularını Yanıtlama konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Akademik Sunum Yapma ve Dinleyici Sorularını Yanıtlama konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 366,
    "estimatedDuration": 20,
    "prerequisites": [
      365
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Akademik Sunum Yapma ve Dinleyici Sorularını Yanıtlama konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 367,
    "code": "B2-07",
    "level": "B2",
    "moduleId": "mod-b2-10",
    "moduleName": "B2 Akıcı Tartışma, Medya Analizi ve Seviye Sentezi",
    "title": "Yazılı Anlatım: Kapsamlı Vaka İncelemesi (Case Study)",
    "description": "B2 seviyesinde Yazılı Anlatım: Kapsamlı Vaka İncelemesi (Case Study) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Yazılı Anlatım: Kapsamlı Vaka İncelemesi (Case Study) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 367,
    "estimatedDuration": 20,
    "prerequisites": [
      366
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Yazılı Anlatım: Kapsamlı Vaka İncelemesi (Case Study) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 368,
    "code": "B2-08",
    "level": "B2",
    "moduleId": "mod-b2-10",
    "moduleName": "B2 Akıcı Tartışma, Medya Analizi ve Seviye Sentezi",
    "title": "B2 Seviyesi Dilbilgisi ve Kelime Bütünlüğü Kontrolü",
    "description": "B2 seviyesinde B2 Seviyesi Dilbilgisi ve Kelime Bütünlüğü Kontrolü konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "B2 Seviyesi Dilbilgisi ve Kelime Bütünlüğü Kontrolü konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 368,
    "estimatedDuration": 20,
    "prerequisites": [
      367
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "B2 Seviyesi Dilbilgisi ve Kelime Bütünlüğü Kontrolü konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 369,
    "code": "B2-09",
    "level": "B2",
    "moduleId": "mod-b2-10",
    "moduleName": "B2 Akıcı Tartışma, Medya Analizi ve Seviye Sentezi",
    "title": "B2 Seviye Sonu Pratik Deneme Sınavı",
    "description": "B2 seviyesinde B2 Seviye Sonu Pratik Deneme Sınavı konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "B2 Seviye Sonu Pratik Deneme Sınavı konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 369,
    "estimatedDuration": 20,
    "prerequisites": [
      368
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "B2 Seviye Sonu Pratik Deneme Sınavı konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 370,
    "code": "B2-10",
    "level": "B2",
    "moduleId": "mod-b2-10",
    "moduleName": "B2 Akıcı Tartışma, Medya Analizi ve Seviye Sentezi",
    "title": "B2 Upper Intermediate Seviye Sonu Yeterlilik Değerlendirmesi",
    "description": "B2 seviyesinde B2 Upper Intermediate Seviye Sonu Yeterlilik Değerlendirmesi konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "B2 Upper Intermediate Seviye Sonu Yeterlilik Değerlendirmesi konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 370,
    "estimatedDuration": 20,
    "prerequisites": [
      369
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "B2 Upper Intermediate Seviye Sonu Yeterlilik Değerlendirmesi konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 80
  },
  {
    "id": 371,
    "code": "C1-01",
    "level": "C1",
    "moduleId": "mod-c1-1",
    "moduleName": "İstek Kipi ve Resmi Dil: Subjunctive Mood",
    "title": "Subjunctive Mood (Dilek Kipi) Mantığı: Yalın Fiil Zorunluluğu",
    "description": "C1 seviyesinde Subjunctive Mood (Dilek Kipi) Mantığı: Yalın Fiil Zorunluluğu konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Subjunctive Mood (Dilek Kipi) Mantığı: Yalın Fiil Zorunluluğu konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 371,
    "estimatedDuration": 22,
    "prerequisites": [
      370
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Subjunctive Mood (Dilek Kipi) Mantığı: Yalın Fiil Zorunluluğu konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 372,
    "code": "C1-02",
    "level": "C1",
    "moduleId": "mod-c1-1",
    "moduleName": "İstek Kipi ve Resmi Dil: Subjunctive Mood",
    "title": "Resmi Öneri ve Talep Fiilleri: Demand, Insist, Recommend, Propose",
    "description": "C1 seviyesinde Resmi Öneri ve Talep Fiilleri: Demand, Insist, Recommend, Propose konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Resmi Öneri ve Talep Fiilleri: Demand, Insist, Recommend, Propose konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 372,
    "estimatedDuration": 22,
    "prerequisites": [
      371
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Resmi Öneri ve Talep Fiilleri: Demand, Insist, Recommend, Propose konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 373,
    "code": "C1-03",
    "level": "C1",
    "moduleId": "mod-c1-1",
    "moduleName": "İstek Kipi ve Resmi Dil: Subjunctive Mood",
    "title": "Zorunluluk ve Önem Bildiren Sıfatlar: Crucial, Essential, Imperative, Vital",
    "description": "C1 seviyesinde Zorunluluk ve Önem Bildiren Sıfatlar: Crucial, Essential, Imperative, Vital konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Zorunluluk ve Önem Bildiren Sıfatlar: Crucial, Essential, Imperative, Vital konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 373,
    "estimatedDuration": 22,
    "prerequisites": [
      372
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Zorunluluk ve Önem Bildiren Sıfatlar: Crucial, Essential, Imperative, Vital konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 374,
    "code": "C1-04",
    "level": "C1",
    "moduleId": "mod-c1-1",
    "moduleName": "İstek Kipi ve Resmi Dil: Subjunctive Mood",
    "title": "Subjunctive Cümlelerde Olumsuzluk: ...that he NOT enter the building",
    "description": "C1 seviyesinde Subjunctive Cümlelerde Olumsuzluk: ...that he NOT enter the building konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Subjunctive Cümlelerde Olumsuzluk: ...that he NOT enter the building konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 374,
    "estimatedDuration": 22,
    "prerequisites": [
      373
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Subjunctive Cümlelerde Olumsuzluk: ...that he NOT enter the building konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 375,
    "code": "C1-05",
    "level": "C1",
    "moduleId": "mod-c1-1",
    "moduleName": "İstek Kipi ve Resmi Dil: Subjunctive Mood",
    "title": "Pasif Subjunctive: ...that the document BE approved immediately",
    "description": "C1 seviyesinde Pasif Subjunctive: ...that the document BE approved immediately konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Pasif Subjunctive: ...that the document BE approved immediately konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 375,
    "estimatedDuration": 22,
    "prerequisites": [
      374
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Pasif Subjunctive: ...that the document BE approved immediately konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 376,
    "code": "C1-06",
    "level": "C1",
    "moduleId": "mod-c1-1",
    "moduleName": "İstek Kipi ve Resmi Dil: Subjunctive Mood",
    "title": "Şart Cümlelerinde Subjunctive Kalıntısı: Were it not for...",
    "description": "C1 seviyesinde Şart Cümlelerinde Subjunctive Kalıntısı: Were it not for... konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Şart Cümlelerinde Subjunctive Kalıntısı: Were it not for... konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 376,
    "estimatedDuration": 22,
    "prerequisites": [
      375
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Şart Cümlelerinde Subjunctive Kalıntısı: Were it not for... konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 377,
    "code": "C1-07",
    "level": "C1",
    "moduleId": "mod-c1-1",
    "moduleName": "İstek Kipi ve Resmi Dil: Subjunctive Mood",
    "title": "Kalıplaşmış Subjunctive İfadeleri: So be it, God save the King, Come what may",
    "description": "C1 seviyesinde Kalıplaşmış Subjunctive İfadeleri: So be it, God save the King, Come what may konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Kalıplaşmış Subjunctive İfadeleri: So be it, God save the King, Come what may konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 377,
    "estimatedDuration": 22,
    "prerequisites": [
      376
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Kalıplaşmış Subjunctive İfadeleri: So be it, God save the King, Come what may konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 378,
    "code": "C1-08",
    "level": "C1",
    "moduleId": "mod-c1-1",
    "moduleName": "İstek Kipi ve Resmi Dil: Subjunctive Mood",
    "title": "Hukuki Metinlerde ve Sözleşmelerde Subjunctive Kullanımı",
    "description": "C1 seviyesinde Hukuki Metinlerde ve Sözleşmelerde Subjunctive Kullanımı konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Hukuki Metinlerde ve Sözleşmelerde Subjunctive Kullanımı konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 378,
    "estimatedDuration": 22,
    "prerequisites": [
      377
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Hukuki Metinlerde ve Sözleşmelerde Subjunctive Kullanımı konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 379,
    "code": "C1-09",
    "level": "C1",
    "moduleId": "mod-c1-1",
    "moduleName": "İstek Kipi ve Resmi Dil: Subjunctive Mood",
    "title": "Diplomatik Notalar ve Hükümet Protokolü Dili",
    "description": "C1 seviyesinde Diplomatik Notalar ve Hükümet Protokolü Dili konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Diplomatik Notalar ve Hükümet Protokolü Dili konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 379,
    "estimatedDuration": 22,
    "prerequisites": [
      378
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Diplomatik Notalar ve Hükümet Protokolü Dili konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 380,
    "code": "C1-10",
    "level": "C1",
    "moduleId": "mod-c1-1",
    "moduleName": "İstek Kipi ve Resmi Dil: Subjunctive Mood",
    "title": "C1 Modül 1 Entegrasyonu: Birleşmiş Milletler Karar Tasarısı Hazırlama",
    "description": "C1 seviyesinde C1 Modül 1 Entegrasyonu: Birleşmiş Milletler Karar Tasarısı Hazırlama konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "C1 Modül 1 Entegrasyonu: Birleşmiş Milletler Karar Tasarısı Hazırlama konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 380,
    "estimatedDuration": 22,
    "prerequisites": [
      379
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "C1 Modül 1 Entegrasyonu: Birleşmiş Milletler Karar Tasarısı Hazırlama konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 381,
    "code": "C1-01",
    "level": "C1",
    "moduleId": "mod-c1-2",
    "moduleName": "Odak ve Vurgu Yapıları: Cleft Sentences & Fronting",
    "title": "Cleft Sentences (Bölünmüş Cümleler) Mantığı ve İletişimsel Hedefi",
    "description": "C1 seviyesinde Cleft Sentences (Bölünmüş Cümleler) Mantığı ve İletişimsel Hedefi konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Cleft Sentences (Bölünmüş Cümleler) Mantığı ve İletişimsel Hedefi konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 381,
    "estimatedDuration": 22,
    "prerequisites": [
      380
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Cleft Sentences (Bölünmüş Cümleler) Mantığı ve İletişimsel Hedefi konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 382,
    "code": "C1-02",
    "level": "C1",
    "moduleId": "mod-c1-2",
    "moduleName": "Odak ve Vurgu Yapıları: Cleft Sentences & Fronting",
    "title": "It-Cleft Sentences: It was Sarah who discovered the security flaw",
    "description": "C1 seviyesinde It-Cleft Sentences: It was Sarah who discovered the security flaw konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "It-Cleft Sentences: It was Sarah who discovered the security flaw konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 382,
    "estimatedDuration": 22,
    "prerequisites": [
      381
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "It-Cleft Sentences: It was Sarah who discovered the security flaw konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 383,
    "code": "C1-03",
    "level": "C1",
    "moduleId": "mod-c1-2",
    "moduleName": "Odak ve Vurgu Yapıları: Cleft Sentences & Fronting",
    "title": "Wh- Cleft (Pseudo-cleft): What we must focus on is sustainability",
    "description": "C1 seviyesinde Wh- Cleft (Pseudo-cleft): What we must focus on is sustainability konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Wh- Cleft (Pseudo-cleft): What we must focus on is sustainability konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 383,
    "estimatedDuration": 22,
    "prerequisites": [
      382
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Wh- Cleft (Pseudo-cleft): What we must focus on is sustainability konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 384,
    "code": "C1-04",
    "level": "C1",
    "moduleId": "mod-c1-2",
    "moduleName": "Odak ve Vurgu Yapıları: Cleft Sentences & Fronting",
    "title": "All Clefts: All I wanted was a straightforward answer",
    "description": "C1 seviyesinde All Clefts: All I wanted was a straightforward answer konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "All Clefts: All I wanted was a straightforward answer konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 384,
    "estimatedDuration": 22,
    "prerequisites": [
      383
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "All Clefts: All I wanted was a straightforward answer konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 385,
    "code": "C1-05",
    "level": "C1",
    "moduleId": "mod-c1-2",
    "moduleName": "Odak ve Vurgu Yapıları: Cleft Sentences & Fronting",
    "title": "The Thing / The Reason Clefts: The reason why we pivoted is obvious",
    "description": "C1 seviyesinde The Thing / The Reason Clefts: The reason why we pivoted is obvious konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "The Thing / The Reason Clefts: The reason why we pivoted is obvious konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 385,
    "estimatedDuration": 22,
    "prerequisites": [
      384
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "The Thing / The Reason Clefts: The reason why we pivoted is obvious konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 386,
    "code": "C1-06",
    "level": "C1",
    "moduleId": "mod-c1-2",
    "moduleName": "Odak ve Vurgu Yapıları: Cleft Sentences & Fronting",
    "title": "Fronting (Öne Alma): Sıfat veya Belirteci Cümle Başına Taşıma (Talented she was...)",
    "description": "C1 seviyesinde Fronting (Öne Alma): Sıfat veya Belirteci Cümle Başına Taşıma (Talented she was...) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Fronting (Öne Alma): Sıfat veya Belirteci Cümle Başına Taşıma (Talented she was...) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 386,
    "estimatedDuration": 22,
    "prerequisites": [
      385
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Fronting (Öne Alma): Sıfat veya Belirteci Cümle Başına Taşıma (Talented she was...) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 387,
    "code": "C1-07",
    "level": "C1",
    "moduleId": "mod-c1-2",
    "moduleName": "Odak ve Vurgu Yapıları: Cleft Sentences & Fronting",
    "title": "Yer Belirteçlerinin Öne Alınması ve Tam Devriklik (On the hill stood a castle)",
    "description": "C1 seviyesinde Yer Belirteçlerinin Öne Alınması ve Tam Devriklik (On the hill stood a castle) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Yer Belirteçlerinin Öne Alınması ve Tam Devriklik (On the hill stood a castle) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 387,
    "estimatedDuration": 22,
    "prerequisites": [
      386
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Yer Belirteçlerinin Öne Alınması ve Tam Devriklik (On the hill stood a castle) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 388,
    "code": "C1-08",
    "level": "C1",
    "moduleId": "mod-c1-2",
    "moduleName": "Odak ve Vurgu Yapıları: Cleft Sentences & Fronting",
    "title": "Argümanda Zıtlık Yaratmak İçin Cleft Kullanımı",
    "description": "C1 seviyesinde Argümanda Zıtlık Yaratmak İçin Cleft Kullanımı konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Argümanda Zıtlık Yaratmak İçin Cleft Kullanımı konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 388,
    "estimatedDuration": 22,
    "prerequisites": [
      387
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Argümanda Zıtlık Yaratmak İçin Cleft Kullanımı konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 389,
    "code": "C1-09",
    "level": "C1",
    "moduleId": "mod-c1-2",
    "moduleName": "Odak ve Vurgu Yapıları: Cleft Sentences & Fronting",
    "title": "Etkileyici Açılış Paragrafları Yazmada Vurgu Ustalığı",
    "description": "C1 seviyesinde Etkileyici Açılış Paragrafları Yazmada Vurgu Ustalığı konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Etkileyici Açılış Paragrafları Yazmada Vurgu Ustalığı konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 389,
    "estimatedDuration": 22,
    "prerequisites": [
      388
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Etkileyici Açılış Paragrafları Yazmada Vurgu Ustalığı konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 390,
    "code": "C1-10",
    "level": "C1",
    "moduleId": "mod-c1-2",
    "moduleName": "Odak ve Vurgu Yapıları: Cleft Sentences & Fronting",
    "title": "C1 Modül 2 Entegrasyonu: Üst Düzey Yönetici Açılış Konuşması Metni",
    "description": "C1 seviyesinde C1 Modül 2 Entegrasyonu: Üst Düzey Yönetici Açılış Konuşması Metni konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "C1 Modül 2 Entegrasyonu: Üst Düzey Yönetici Açılış Konuşması Metni konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 390,
    "estimatedDuration": 22,
    "prerequisites": [
      389
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "C1 Modül 2 Entegrasyonu: Üst Düzey Yönetici Açılış Konuşması Metni konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 391,
    "code": "C1-01",
    "level": "C1",
    "moduleId": "mod-c1-3",
    "moduleName": "Akademik Mesafelenme ve Yumuşatma: Hedging & Stance",
    "title": "Hedging (Önlem / Mesafelenme) Kavramı ve Bilimsel Dildeki Önemi",
    "description": "C1 seviyesinde Hedging (Önlem / Mesafelenme) Kavramı ve Bilimsel Dildeki Önemi konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Hedging (Önlem / Mesafelenme) Kavramı ve Bilimsel Dildeki Önemi konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 391,
    "estimatedDuration": 22,
    "prerequisites": [
      390
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Hedging (Önlem / Mesafelenme) Kavramı ve Bilimsel Dildeki Önemi konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 392,
    "code": "C1-02",
    "level": "C1",
    "moduleId": "mod-c1-3",
    "moduleName": "Akademik Mesafelenme ve Yumuşatma: Hedging & Stance",
    "title": "İhtiyat Bildiren Fiiller: Tend to, Appear to, Seem to, Suggest that",
    "description": "C1 seviyesinde İhtiyat Bildiren Fiiller: Tend to, Appear to, Seem to, Suggest that konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "İhtiyat Bildiren Fiiller: Tend to, Appear to, Seem to, Suggest that konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 392,
    "estimatedDuration": 22,
    "prerequisites": [
      391
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "İhtiyat Bildiren Fiiller: Tend to, Appear to, Seem to, Suggest that konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 393,
    "code": "C1-03",
    "level": "C1",
    "moduleId": "mod-c1-3",
    "moduleName": "Akademik Mesafelenme ve Yumuşatma: Hedging & Stance",
    "title": "Olasılık Zarfları ile Yumuşatma: Arguably, Conceivably, Plausibly",
    "description": "C1 seviyesinde Olasılık Zarfları ile Yumuşatma: Arguably, Conceivably, Plausibly konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Olasılık Zarfları ile Yumuşatma: Arguably, Conceivably, Plausibly konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 393,
    "estimatedDuration": 22,
    "prerequisites": [
      392
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Olasılık Zarfları ile Yumuşatma: Arguably, Conceivably, Plausibly konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 394,
    "code": "C1-04",
    "level": "C1",
    "moduleId": "mod-c1-3",
    "moduleName": "Akademik Mesafelenme ve Yumuşatma: Hedging & Stance",
    "title": "Yazarın Duruşu (Authorial Stance): Tarafsızlık vs Güçlü İddia",
    "description": "C1 seviyesinde Yazarın Duruşu (Authorial Stance): Tarafsızlık vs Güçlü İddia konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Yazarın Duruşu (Authorial Stance): Tarafsızlık vs Güçlü İddia konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 394,
    "estimatedDuration": 22,
    "prerequisites": [
      393
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Yazarın Duruşu (Authorial Stance): Tarafsızlık vs Güçlü İddia konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 395,
    "code": "C1-05",
    "level": "C1",
    "moduleId": "mod-c1-3",
    "moduleName": "Akademik Mesafelenme ve Yumuşatma: Hedging & Stance",
    "title": "Genellemelerden Kaçınma ve İstisnalara Alan Bırakma",
    "description": "C1 seviyesinde Genellemelerden Kaçınma ve İstisnalara Alan Bırakma konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Genellemelerden Kaçınma ve İstisnalara Alan Bırakma konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 395,
    "estimatedDuration": 22,
    "prerequisites": [
      394
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Genellemelerden Kaçınma ve İstisnalara Alan Bırakma konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 396,
    "code": "C1-06",
    "level": "C1",
    "moduleId": "mod-c1-3",
    "moduleName": "Akademik Mesafelenme ve Yumuşatma: Hedging & Stance",
    "title": "Eleştiriyi Akademik Dilde Yumuşatma (While insightful, this study lacks...)",
    "description": "C1 seviyesinde Eleştiriyi Akademik Dilde Yumuşatma (While insightful, this study lacks...) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Eleştiriyi Akademik Dilde Yumuşatma (While insightful, this study lacks...) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 396,
    "estimatedDuration": 22,
    "prerequisites": [
      395
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Eleştiriyi Akademik Dilde Yumuşatma (While insightful, this study lacks...) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 397,
    "code": "C1-07",
    "level": "C1",
    "moduleId": "mod-c1-3",
    "moduleName": "Akademik Mesafelenme ve Yumuşatma: Hedging & Stance",
    "title": "Metin İçi Alıntı ve Referans Verme Stratejileri",
    "description": "C1 seviyesinde Metin İçi Alıntı ve Referans Verme Stratejileri konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Metin İçi Alıntı ve Referans Verme Stratejileri konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 397,
    "estimatedDuration": 22,
    "prerequisites": [
      396
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Metin İçi Alıntı ve Referans Verme Stratejileri konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 398,
    "code": "C1-08",
    "level": "C1",
    "moduleId": "mod-c1-3",
    "moduleName": "Akademik Mesafelenme ve Yumuşatma: Hedging & Stance",
    "title": "Hakemli Dergi Makalelerinde Tartışma Bölümü Yazımı",
    "description": "C1 seviyesinde Hakemli Dergi Makalelerinde Tartışma Bölümü Yazımı konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Hakemli Dergi Makalelerinde Tartışma Bölümü Yazımı konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 398,
    "estimatedDuration": 22,
    "prerequisites": [
      397
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Hakemli Dergi Makalelerinde Tartışma Bölümü Yazımı konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 399,
    "code": "C1-09",
    "level": "C1",
    "moduleId": "mod-c1-3",
    "moduleName": "Akademik Mesafelenme ve Yumuşatma: Hedging & Stance",
    "title": "Biyomedikal ve Sosyal Bilimler Makalelerindeki Hedging Örnekleri",
    "description": "C1 seviyesinde Biyomedikal ve Sosyal Bilimler Makalelerindeki Hedging Örnekleri konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Biyomedikal ve Sosyal Bilimler Makalelerindeki Hedging Örnekleri konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 399,
    "estimatedDuration": 22,
    "prerequisites": [
      398
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Biyomedikal ve Sosyal Bilimler Makalelerindeki Hedging Örnekleri konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 400,
    "code": "C1-10",
    "level": "C1",
    "moduleId": "mod-c1-3",
    "moduleName": "Akademik Mesafelenme ve Yumuşatma: Hedging & Stance",
    "title": "C1 Modül 3 Entegrasyonu: Akademik Makale Hakem Raporu ve Eleştiri",
    "description": "C1 seviyesinde C1 Modül 3 Entegrasyonu: Akademik Makale Hakem Raporu ve Eleştiri konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "C1 Modül 3 Entegrasyonu: Akademik Makale Hakem Raporu ve Eleştiri konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 400,
    "estimatedDuration": 22,
    "prerequisites": [
      399
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "C1 Modül 3 Entegrasyonu: Akademik Makale Hakem Raporu ve Eleştiri konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 401,
    "code": "C1-01",
    "level": "C1",
    "moduleId": "mod-c1-4",
    "moduleName": "İleri Deyimsel Söylem, Kollokasyonlar ve Metaforlar",
    "title": "Kavramsal Metaforlar: Zaman paradır, Argüman savaştır modelleri",
    "description": "C1 seviyesinde Kavramsal Metaforlar: Zaman paradır, Argüman savaştır modelleri konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Kavramsal Metaforlar: Zaman paradır, Argüman savaştır modelleri konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 401,
    "estimatedDuration": 22,
    "prerequisites": [
      400
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Kavramsal Metaforlar: Zaman paradır, Argüman savaştır modelleri konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 402,
    "code": "C1-02",
    "level": "C1",
    "moduleId": "mod-c1-4",
    "moduleName": "İleri Deyimsel Söylem, Kollokasyonlar ve Metaforlar",
    "title": "Akademik ve Resmi İkili Kollokasyonlar (Adverb + Adjective: Bitterly disappointed)",
    "description": "C1 seviyesinde Akademik ve Resmi İkili Kollokasyonlar (Adverb + Adjective: Bitterly disappointed) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Akademik ve Resmi İkili Kollokasyonlar (Adverb + Adjective: Bitterly disappointed) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 402,
    "estimatedDuration": 22,
    "prerequisites": [
      401
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Akademik ve Resmi İkili Kollokasyonlar (Adverb + Adjective: Bitterly disappointed) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 403,
    "code": "C1-03",
    "level": "C1",
    "moduleId": "mod-c1-4",
    "moduleName": "İleri Deyimsel Söylem, Kollokasyonlar ve Metaforlar",
    "title": "Fiil + İsim Kollokasyonları (Cast doubt on, Shed light on, Pave the way)",
    "description": "C1 seviyesinde Fiil + İsim Kollokasyonları (Cast doubt on, Shed light on, Pave the way) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Fiil + İsim Kollokasyonları (Cast doubt on, Shed light on, Pave the way) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 403,
    "estimatedDuration": 22,
    "prerequisites": [
      402
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Fiil + İsim Kollokasyonları (Cast doubt on, Shed light on, Pave the way) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 404,
    "code": "C1-04",
    "level": "C1",
    "moduleId": "mod-c1-4",
    "moduleName": "İleri Deyimsel Söylem, Kollokasyonlar ve Metaforlar",
    "title": "İnce Anlam Nüansları Olan Sıfatlar (Perceptive, Astute, Discerning, Insightful)",
    "description": "C1 seviyesinde İnce Anlam Nüansları Olan Sıfatlar (Perceptive, Astute, Discerning, Insightful) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "İnce Anlam Nüansları Olan Sıfatlar (Perceptive, Astute, Discerning, Insightful) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 404,
    "estimatedDuration": 22,
    "prerequisites": [
      403
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "İnce Anlam Nüansları Olan Sıfatlar (Perceptive, Astute, Discerning, Insightful) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 405,
    "code": "C1-05",
    "level": "C1",
    "moduleId": "mod-c1-4",
    "moduleName": "İleri Deyimsel Söylem, Kollokasyonlar ve Metaforlar",
    "title": "Binominal ve Trinominal Kalıplar (Pick and choose, Touch and go, By and large)",
    "description": "C1 seviyesinde Binominal ve Trinominal Kalıplar (Pick and choose, Touch and go, By and large) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Binominal ve Trinominal Kalıplar (Pick and choose, Touch and go, By and large) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 405,
    "estimatedDuration": 22,
    "prerequisites": [
      404
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Binominal ve Trinominal Kalıplar (Pick and choose, Touch and go, By and large) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 406,
    "code": "C1-06",
    "level": "C1",
    "moduleId": "mod-c1-4",
    "moduleName": "İleri Deyimsel Söylem, Kollokasyonlar ve Metaforlar",
    "title": "Metaforik Deyimlerin Kökenleri ve Modern Kullanımları",
    "description": "C1 seviyesinde Metaforik Deyimlerin Kökenleri ve Modern Kullanımları konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Metaforik Deyimlerin Kökenleri ve Modern Kullanımları konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 406,
    "estimatedDuration": 22,
    "prerequisites": [
      405
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Metaforik Deyimlerin Kökenleri ve Modern Kullanımları konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 407,
    "code": "C1-07",
    "level": "C1",
    "moduleId": "mod-c1-4",
    "moduleName": "İleri Deyimsel Söylem, Kollokasyonlar ve Metaforlar",
    "title": "Edebi Alıntılar ve Kültürel Göndermeler (Allusions)",
    "description": "C1 seviyesinde Edebi Alıntılar ve Kültürel Göndermeler (Allusions) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Edebi Alıntılar ve Kültürel Göndermeler (Allusions) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 407,
    "estimatedDuration": 22,
    "prerequisites": [
      406
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Edebi Alıntılar ve Kültürel Göndermeler (Allusions) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 408,
    "code": "C1-08",
    "level": "C1",
    "moduleId": "mod-c1-4",
    "moduleName": "İleri Deyimsel Söylem, Kollokasyonlar ve Metaforlar",
    "title": "Kollokasyon Hatalarını ve Doğal Olmayan İfadeleri Düzeltme",
    "description": "C1 seviyesinde Kollokasyon Hatalarını ve Doğal Olmayan İfadeleri Düzeltme konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Kollokasyon Hatalarını ve Doğal Olmayan İfadeleri Düzeltme konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 408,
    "estimatedDuration": 22,
    "prerequisites": [
      407
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Kollokasyon Hatalarını ve Doğal Olmayan İfadeleri Düzeltme konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 409,
    "code": "C1-09",
    "level": "C1",
    "moduleId": "mod-c1-4",
    "moduleName": "İleri Deyimsel Söylem, Kollokasyonlar ve Metaforlar",
    "title": "Retorik Figürler: Antitez ve Paralelizm",
    "description": "C1 seviyesinde Retorik Figürler: Antitez ve Paralelizm konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Retorik Figürler: Antitez ve Paralelizm konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 409,
    "estimatedDuration": 22,
    "prerequisites": [
      408
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Retorik Figürler: Antitez ve Paralelizm konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 410,
    "code": "C1-10",
    "level": "C1",
    "moduleId": "mod-c1-4",
    "moduleName": "İleri Deyimsel Söylem, Kollokasyonlar ve Metaforlar",
    "title": "C1 Modül 4 Entegrasyonu: Edebi ve Felsefi Deneme Yazımı",
    "description": "C1 seviyesinde C1 Modül 4 Entegrasyonu: Edebi ve Felsefi Deneme Yazımı konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "C1 Modül 4 Entegrasyonu: Edebi ve Felsefi Deneme Yazımı konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 410,
    "estimatedDuration": 22,
    "prerequisites": [
      409
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "C1 Modül 4 Entegrasyonu: Edebi ve Felsefi Deneme Yazımı konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 411,
    "code": "C1-01",
    "level": "C1",
    "moduleId": "mod-c1-5",
    "moduleName": "Karmaşık Argüman Sentezi ve Eleştirel Değerlendirme",
    "title": "Eleştirel Düşünce (Critical Thinking) ve Metin Analizi Metodolojisi",
    "description": "C1 seviyesinde Eleştirel Düşünce (Critical Thinking) ve Metin Analizi Metodolojisi konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Eleştirel Düşünce (Critical Thinking) ve Metin Analizi Metodolojisi konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 411,
    "estimatedDuration": 22,
    "prerequisites": [
      410
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Eleştirel Düşünce (Critical Thinking) ve Metin Analizi Metodolojisi konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 412,
    "code": "C1-02",
    "level": "C1",
    "moduleId": "mod-c1-5",
    "moduleName": "Karmaşık Argüman Sentezi ve Eleştirel Değerlendirme",
    "title": "Mantık Hatalarını (Logical Fallacies) İngilizcede Tespit Etme",
    "description": "C1 seviyesinde Mantık Hatalarını (Logical Fallacies) İngilizcede Tespit Etme konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Mantık Hatalarını (Logical Fallacies) İngilizcede Tespit Etme konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 412,
    "estimatedDuration": 22,
    "prerequisites": [
      411
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Mantık Hatalarını (Logical Fallacies) İngilizcede Tespit Etme konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 413,
    "code": "C1-03",
    "level": "C1",
    "moduleId": "mod-c1-5",
    "moduleName": "Karmaşık Argüman Sentezi ve Eleştirel Değerlendirme",
    "title": "Ad Hominem, Straw Man ve Slippery Slope Argümanlarını Çürütme",
    "description": "C1 seviyesinde Ad Hominem, Straw Man ve Slippery Slope Argümanlarını Çürütme konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Ad Hominem, Straw Man ve Slippery Slope Argümanlarını Çürütme konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 413,
    "estimatedDuration": 22,
    "prerequisites": [
      412
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Ad Hominem, Straw Man ve Slippery Slope Argümanlarını Çürütme konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 414,
    "code": "C1-04",
    "level": "C1",
    "moduleId": "mod-c1-5",
    "moduleName": "Karmaşık Argüman Sentezi ve Eleştirel Değerlendirme",
    "title": "Çok Boyutlu Problemleri Katmanlarına Ayırma",
    "description": "C1 seviyesinde Çok Boyutlu Problemleri Katmanlarına Ayırma konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Çok Boyutlu Problemleri Katmanlarına Ayırma konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 414,
    "estimatedDuration": 22,
    "prerequisites": [
      413
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Çok Boyutlu Problemleri Katmanlarına Ayırma konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 415,
    "code": "C1-05",
    "level": "C1",
    "moduleId": "mod-c1-5",
    "moduleName": "Karmaşık Argüman Sentezi ve Eleştirel Değerlendirme",
    "title": "Farklı Disiplinlerden Bilgileri Sentezleme",
    "description": "C1 seviyesinde Farklı Disiplinlerden Bilgileri Sentezleme konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Farklı Disiplinlerden Bilgileri Sentezleme konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 415,
    "estimatedDuration": 22,
    "prerequisites": [
      414
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Farklı Disiplinlerden Bilgileri Sentezleme konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 416,
    "code": "C1-06",
    "level": "C1",
    "moduleId": "mod-c1-5",
    "moduleName": "Karmaşık Argüman Sentezi ve Eleştirel Değerlendirme",
    "title": "Karşıt Fikirleri Çarpıştırma ve Üst Sentez (Dialectical Synthesis)",
    "description": "C1 seviyesinde Karşıt Fikirleri Çarpıştırma ve Üst Sentez (Dialectical Synthesis) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Karşıt Fikirleri Çarpıştırma ve Üst Sentez (Dialectical Synthesis) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 416,
    "estimatedDuration": 22,
    "prerequisites": [
      415
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Karşıt Fikirleri Çarpıştırma ve Üst Sentez (Dialectical Synthesis) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 417,
    "code": "C1-07",
    "level": "C1",
    "moduleId": "mod-c1-5",
    "moduleName": "Karmaşık Argüman Sentezi ve Eleştirel Değerlendirme",
    "title": "Raporlama: Karmaşık Politika Belgelerini Özetleme",
    "description": "C1 seviyesinde Raporlama: Karmaşık Politika Belgelerini Özetleme konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Raporlama: Karmaşık Politika Belgelerini Özetleme konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 417,
    "estimatedDuration": 22,
    "prerequisites": [
      416
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Raporlama: Karmaşık Politika Belgelerini Özetleme konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 418,
    "code": "C1-08",
    "level": "C1",
    "moduleId": "mod-c1-5",
    "moduleName": "Karmaşık Argüman Sentezi ve Eleştirel Değerlendirme",
    "title": "Entelektüel Münazara Stratejileri ve Saygılı İtiraz",
    "description": "C1 seviyesinde Entelektüel Münazara Stratejileri ve Saygılı İtiraz konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Entelektüel Münazara Stratejileri ve Saygılı İtiraz konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 418,
    "estimatedDuration": 22,
    "prerequisites": [
      417
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Entelektüel Münazara Stratejileri ve Saygılı İtiraz konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 419,
    "code": "C1-09",
    "level": "C1",
    "moduleId": "mod-c1-5",
    "moduleName": "Karmaşık Argüman Sentezi ve Eleştirel Değerlendirme",
    "title": "Stratejik Düşünce Kuruluşu (Think-Tank) Analiz Raporu",
    "description": "C1 seviyesinde Stratejik Düşünce Kuruluşu (Think-Tank) Analiz Raporu konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Stratejik Düşünce Kuruluşu (Think-Tank) Analiz Raporu konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 419,
    "estimatedDuration": 22,
    "prerequisites": [
      418
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Stratejik Düşünce Kuruluşu (Think-Tank) Analiz Raporu konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 420,
    "code": "C1-10",
    "level": "C1",
    "moduleId": "mod-c1-5",
    "moduleName": "Karmaşık Argüman Sentezi ve Eleştirel Değerlendirme",
    "title": "C1 Modül 5 Entegrasyonu: Küresel Enerji Krizi Politika Brifingi",
    "description": "C1 seviyesinde C1 Modül 5 Entegrasyonu: Küresel Enerji Krizi Politika Brifingi konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "C1 Modül 5 Entegrasyonu: Küresel Enerji Krizi Politika Brifingi konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 420,
    "estimatedDuration": 22,
    "prerequisites": [
      419
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "C1 Modül 5 Entegrasyonu: Küresel Enerji Krizi Politika Brifingi konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 421,
    "code": "C1-01",
    "level": "C1",
    "moduleId": "mod-c1-6",
    "moduleName": "Yüksek Etkili Sunumlar, İkna ve Retorik Stratejiler",
    "title": "Klasik Retoriğin Üç Sacayağı: Ethos (Karakter), Pathos (Duygu), Logos (Mantık)",
    "description": "C1 seviyesinde Klasik Retoriğin Üç Sacayağı: Ethos (Karakter), Pathos (Duygu), Logos (Mantık) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Klasik Retoriğin Üç Sacayağı: Ethos (Karakter), Pathos (Duygu), Logos (Mantık) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 421,
    "estimatedDuration": 22,
    "prerequisites": [
      420
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Klasik Retoriğin Üç Sacayağı: Ethos (Karakter), Pathos (Duygu), Logos (Mantık) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 422,
    "code": "C1-02",
    "level": "C1",
    "moduleId": "mod-c1-6",
    "moduleName": "Yüksek Etkili Sunumlar, İkna ve Retorik Stratejiler",
    "title": "Üçleme Kuralı (The Rule of Three / Tricolon) ile Akılda Kalıcılık",
    "description": "C1 seviyesinde Üçleme Kuralı (The Rule of Three / Tricolon) ile Akılda Kalıcılık konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Üçleme Kuralı (The Rule of Three / Tricolon) ile Akılda Kalıcılık konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 422,
    "estimatedDuration": 22,
    "prerequisites": [
      421
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Üçleme Kuralı (The Rule of Three / Tricolon) ile Akılda Kalıcılık konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 423,
    "code": "C1-03",
    "level": "C1",
    "moduleId": "mod-c1-6",
    "moduleName": "Yüksek Etkili Sunumlar, İkna ve Retorik Stratejiler",
    "title": "Anaforik Tekrar (Anaphora) ile Duygusal Coşku Yaratma",
    "description": "C1 seviyesinde Anaforik Tekrar (Anaphora) ile Duygusal Coşku Yaratma konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Anaforik Tekrar (Anaphora) ile Duygusal Coşku Yaratma konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 423,
    "estimatedDuration": 22,
    "prerequisites": [
      422
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Anaforik Tekrar (Anaphora) ile Duygusal Coşku Yaratma konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 424,
    "code": "C1-04",
    "level": "C1",
    "moduleId": "mod-c1-6",
    "moduleName": "Yüksek Etkili Sunumlar, İkna ve Retorik Stratejiler",
    "title": "Retorik Sorular (Rhetorical Questions) ile Dinleyiciyi Düşündürme",
    "description": "C1 seviyesinde Retorik Sorular (Rhetorical Questions) ile Dinleyiciyi Düşündürme konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Retorik Sorular (Rhetorical Questions) ile Dinleyiciyi Düşündürme konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 424,
    "estimatedDuration": 22,
    "prerequisites": [
      423
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Retorik Sorular (Rhetorical Questions) ile Dinleyiciyi Düşündürme konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 425,
    "code": "C1-05",
    "level": "C1",
    "moduleId": "mod-c1-6",
    "moduleName": "Yüksek Etkili Sunumlar, İkna ve Retorik Stratejiler",
    "title": "Antitez (Antithesis): Zıt Kavramları Yan Yana Koyarak Parlatma",
    "description": "C1 seviyesinde Antitez (Antithesis): Zıt Kavramları Yan Yana Koyarak Parlatma konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Antitez (Antithesis): Zıt Kavramları Yan Yana Koyarak Parlatma konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 425,
    "estimatedDuration": 22,
    "prerequisites": [
      424
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Antitez (Antithesis): Zıt Kavramları Yan Yana Koyarak Parlatma konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 426,
    "code": "C1-06",
    "level": "C1",
    "moduleId": "mod-c1-6",
    "moduleName": "Yüksek Etkili Sunumlar, İkna ve Retorik Stratejiler",
    "title": "Zorlu Soru-Cevap (Q&A) Oturumlarını Ustalıkla Yönetme",
    "description": "C1 seviyesinde Zorlu Soru-Cevap (Q&A) Oturumlarını Ustalıkla Yönetme konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Zorlu Soru-Cevap (Q&A) Oturumlarını Ustalıkla Yönetme konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 426,
    "estimatedDuration": 22,
    "prerequisites": [
      425
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Zorlu Soru-Cevap (Q&A) Oturumlarını Ustalıkla Yönetme konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 427,
    "code": "C1-07",
    "level": "C1",
    "moduleId": "mod-c1-6",
    "moduleName": "Yüksek Etkili Sunumlar, İkna ve Retorik Stratejiler",
    "title": "Düşmanca Soruları Savuşturma ve Kendi Mesajına Köprü Kurma (Bridging)",
    "description": "C1 seviyesinde Düşmanca Soruları Savuşturma ve Kendi Mesajına Köprü Kurma (Bridging) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Düşmanca Soruları Savuşturma ve Kendi Mesajına Köprü Kurma (Bridging) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 427,
    "estimatedDuration": 22,
    "prerequisites": [
      426
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Düşmanca Soruları Savuşturma ve Kendi Mesajına Köprü Kurma (Bridging) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 428,
    "code": "C1-08",
    "level": "C1",
    "moduleId": "mod-c1-6",
    "moduleName": "Yüksek Etkili Sunumlar, İkna ve Retorik Stratejiler",
    "title": "Beden Dili, Vurgu ve Ses Perdesi Yönetimi",
    "description": "C1 seviyesinde Beden Dili, Vurgu ve Ses Perdesi Yönetimi konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Beden Dili, Vurgu ve Ses Perdesi Yönetimi konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 428,
    "estimatedDuration": 22,
    "prerequisites": [
      427
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Beden Dili, Vurgu ve Ses Perdesi Yönetimi konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 429,
    "code": "C1-09",
    "level": "C1",
    "moduleId": "mod-c1-6",
    "moduleName": "Yüksek Etkili Sunumlar, İkna ve Retorik Stratejiler",
    "title": "TED Konuşmaları Analizi ve Hitabet İncelemesi",
    "description": "C1 seviyesinde TED Konuşmaları Analizi ve Hitabet İncelemesi konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "TED Konuşmaları Analizi ve Hitabet İncelemesi konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 429,
    "estimatedDuration": 22,
    "prerequisites": [
      428
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "TED Konuşmaları Analizi ve Hitabet İncelemesi konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 430,
    "code": "C1-10",
    "level": "C1",
    "moduleId": "mod-c1-6",
    "moduleName": "Yüksek Etkili Sunumlar, İkna ve Retorik Stratejiler",
    "title": "C1 Modül 6 Entegrasyonu: Yatırımcı Karşısında Girişim Sunumu (Pitching)",
    "description": "C1 seviyesinde C1 Modül 6 Entegrasyonu: Yatırımcı Karşısında Girişim Sunumu (Pitching) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "C1 Modül 6 Entegrasyonu: Yatırımcı Karşısında Girişim Sunumu (Pitching) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 430,
    "estimatedDuration": 22,
    "prerequisites": [
      429
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "C1 Modül 6 Entegrasyonu: Yatırımcı Karşısında Girişim Sunumu (Pitching) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 431,
    "code": "C1-01",
    "level": "C1",
    "moduleId": "mod-c1-7",
    "moduleName": "Kültürlerarası Pragmatik, İma ve Alt Metin Yönetimi",
    "title": "Pragmatik Yetkinlik: Söylenen Söz ile Kastedilen Anlam Arasındaki Boşluk",
    "description": "C1 seviyesinde Pragmatik Yetkinlik: Söylenen Söz ile Kastedilen Anlam Arasındaki Boşluk konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Pragmatik Yetkinlik: Söylenen Söz ile Kastedilen Anlam Arasındaki Boşluk konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 431,
    "estimatedDuration": 22,
    "prerequisites": [
      430
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Pragmatik Yetkinlik: Söylenen Söz ile Kastedilen Anlam Arasındaki Boşluk konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 432,
    "code": "C1-02",
    "level": "C1",
    "moduleId": "mod-c1-7",
    "moduleName": "Kültürlerarası Pragmatik, İma ve Alt Metin Yönetimi",
    "title": "Grice'ın Konuşma İlkeleri (İşbirliği İlkesi ve İhlaller)",
    "description": "C1 seviyesinde Grice'ın Konuşma İlkeleri (İşbirliği İlkesi ve İhlaller) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Grice'ın Konuşma İlkeleri (İşbirliği İlkesi ve İhlaller) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 432,
    "estimatedDuration": 22,
    "prerequisites": [
      431
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Grice'ın Konuşma İlkeleri (İşbirliği İlkesi ve İhlaller) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 433,
    "code": "C1-03",
    "level": "C1",
    "moduleId": "mod-c1-7",
    "moduleName": "Kültürlerarası Pragmatik, İma ve Alt Metin Yönetimi",
    "title": "İma (Conversational Implicature) ve Satır Aralarını Okuma",
    "description": "C1 seviyesinde İma (Conversational Implicature) ve Satır Aralarını Okuma konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "İma (Conversational Implicature) ve Satır Aralarını Okuma konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 433,
    "estimatedDuration": 22,
    "prerequisites": [
      432
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "İma (Conversational Implicature) ve Satır Aralarını Okuma konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 434,
    "code": "C1-04",
    "level": "C1",
    "moduleId": "mod-c1-7",
    "moduleName": "Kültürlerarası Pragmatik, İma ve Alt Metin Yönetimi",
    "title": "İngiliz İletişim Kodları: Understatement ve Aşırı Nezaket",
    "description": "C1 seviyesinde İngiliz İletişim Kodları: Understatement ve Aşırı Nezaket konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "İngiliz İletişim Kodları: Understatement ve Aşırı Nezaket konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 434,
    "estimatedDuration": 22,
    "prerequisites": [
      433
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "İngiliz İletişim Kodları: Understatement ve Aşırı Nezaket konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 435,
    "code": "C1-05",
    "level": "C1",
    "moduleId": "mod-c1-7",
    "moduleName": "Kültürlerarası Pragmatik, İma ve Alt Metin Yönetimi",
    "title": "Yüksek Bağlamlı (High-Context) vs Düşük Bağlamlı Kültürler",
    "description": "C1 seviyesinde Yüksek Bağlamlı (High-Context) vs Düşük Bağlamlı Kültürler konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Yüksek Bağlamlı (High-Context) vs Düşük Bağlamlı Kültürler konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 435,
    "estimatedDuration": 22,
    "prerequisites": [
      434
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Yüksek Bağlamlı (High-Context) vs Düşük Bağlamlı Kültürler konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 436,
    "code": "C1-06",
    "level": "C1",
    "moduleId": "mod-c1-7",
    "moduleName": "Kültürlerarası Pragmatik, İma ve Alt Metin Yönetimi",
    "title": "Kurumsal Politika Dili: Kırmadan Hayır Deme Sanatı",
    "description": "C1 seviyesinde Kurumsal Politika Dili: Kırmadan Hayır Deme Sanatı konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Kurumsal Politika Dili: Kırmadan Hayır Deme Sanatı konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 436,
    "estimatedDuration": 22,
    "prerequisites": [
      435
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Kurumsal Politika Dili: Kırmadan Hayır Deme Sanatı konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 437,
    "code": "C1-07",
    "level": "C1",
    "moduleId": "mod-c1-7",
    "moduleName": "Kültürlerarası Pragmatik, İma ve Alt Metin Yönetimi",
    "title": "Kriz İletişimi ve Hasar Kontrolü Açıklamaları",
    "description": "C1 seviyesinde Kriz İletişimi ve Hasar Kontrolü Açıklamaları konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Kriz İletişimi ve Hasar Kontrolü Açıklamaları konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 437,
    "estimatedDuration": 22,
    "prerequisites": [
      436
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Kriz İletişimi ve Hasar Kontrolü Açıklamaları konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 438,
    "code": "C1-08",
    "level": "C1",
    "moduleId": "mod-c1-7",
    "moduleName": "Kültürlerarası Pragmatik, İma ve Alt Metin Yönetimi",
    "title": "Kültürlerarası E-posta İletişiminde Yanlış Anlaşılmaları Önleme",
    "description": "C1 seviyesinde Kültürlerarası E-posta İletişiminde Yanlış Anlaşılmaları Önleme konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Kültürlerarası E-posta İletişiminde Yanlış Anlaşılmaları Önleme konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 438,
    "estimatedDuration": 22,
    "prerequisites": [
      437
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Kültürlerarası E-posta İletişiminde Yanlış Anlaşılmaları Önleme konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 439,
    "code": "C1-09",
    "level": "C1",
    "moduleId": "mod-c1-7",
    "moduleName": "Kültürlerarası Pragmatik, İma ve Alt Metin Yönetimi",
    "title": "Geri Bildirim Verme Ustalığı (The Constructive Feedback Sandwich)",
    "description": "C1 seviyesinde Geri Bildirim Verme Ustalığı (The Constructive Feedback Sandwich) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Geri Bildirim Verme Ustalığı (The Constructive Feedback Sandwich) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 439,
    "estimatedDuration": 22,
    "prerequisites": [
      438
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Geri Bildirim Verme Ustalığı (The Constructive Feedback Sandwich) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 440,
    "code": "C1-10",
    "level": "C1",
    "moduleId": "mod-c1-7",
    "moduleName": "Kültürlerarası Pragmatik, İma ve Alt Metin Yönetimi",
    "title": "C1 Modül 7 Entegrasyonu: Çok Uluslu Ekipte Kültürel Kriz Çözümü",
    "description": "C1 seviyesinde C1 Modül 7 Entegrasyonu: Çok Uluslu Ekipte Kültürel Kriz Çözümü konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "C1 Modül 7 Entegrasyonu: Çok Uluslu Ekipte Kültürel Kriz Çözümü konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 440,
    "estimatedDuration": 22,
    "prerequisites": [
      439
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "C1 Modül 7 Entegrasyonu: Çok Uluslu Ekipte Kültürel Kriz Çözümü konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 441,
    "code": "C1-01",
    "level": "C1",
    "moduleId": "mod-c1-8",
    "moduleName": "C1 İleri Düzey Yeterlilik ve Söylem Bütünlüğü",
    "title": "C1 Düzeyinde Spontane ve Kusursuz İfade Akışı",
    "description": "C1 seviyesinde C1 Düzeyinde Spontane ve Kusursuz İfade Akışı konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "C1 Düzeyinde Spontane ve Kusursuz İfade Akışı konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 441,
    "estimatedDuration": 22,
    "prerequisites": [
      440
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "C1 Düzeyinde Spontane ve Kusursuz İfade Akışı konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 442,
    "code": "C1-02",
    "level": "C1",
    "moduleId": "mod-c1-8",
    "moduleName": "C1 İleri Düzey Yeterlilik ve Söylem Bütünlüğü",
    "title": "Karmaşık Felsefi ve Bilimsel Metinleri Anında Anlama",
    "description": "C1 seviyesinde Karmaşık Felsefi ve Bilimsel Metinleri Anında Anlama konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Karmaşık Felsefi ve Bilimsel Metinleri Anında Anlama konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 442,
    "estimatedDuration": 22,
    "prerequisites": [
      441
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Karmaşık Felsefi ve Bilimsel Metinleri Anında Anlama konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 443,
    "code": "C1-03",
    "level": "C1",
    "moduleId": "mod-c1-8",
    "moduleName": "C1 İleri Düzey Yeterlilik ve Söylem Bütünlüğü",
    "title": "Yazılı Anlatımda Ton ve Register Değişimi Ustalığı",
    "description": "C1 seviyesinde Yazılı Anlatımda Ton ve Register Değişimi Ustalığı konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Yazılı Anlatımda Ton ve Register Değişimi Ustalığı konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 443,
    "estimatedDuration": 22,
    "prerequisites": [
      442
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Yazılı Anlatımda Ton ve Register Değişimi Ustalığı konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 444,
    "code": "C1-04",
    "level": "C1",
    "moduleId": "mod-c1-8",
    "moduleName": "C1 İleri Düzey Yeterlilik ve Söylem Bütünlüğü",
    "title": "Zengin Kelime Haznesi ve Nadir Kullanılan Gramer Yapıları Denetimi",
    "description": "C1 seviyesinde Zengin Kelime Haznesi ve Nadir Kullanılan Gramer Yapıları Denetimi konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Zengin Kelime Haznesi ve Nadir Kullanılan Gramer Yapıları Denetimi konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 444,
    "estimatedDuration": 22,
    "prerequisites": [
      443
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Zengin Kelime Haznesi ve Nadir Kullanılan Gramer Yapıları Denetimi konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 445,
    "code": "C1-05",
    "level": "C1",
    "moduleId": "mod-c1-8",
    "moduleName": "C1 İleri Düzey Yeterlilik ve Söylem Bütünlüğü",
    "title": "Akademik Makale Özetleme ve Eleştirel Şerh Düşme",
    "description": "C1 seviyesinde Akademik Makale Özetleme ve Eleştirel Şerh Düşme konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Akademik Makale Özetleme ve Eleştirel Şerh Düşme konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 445,
    "estimatedDuration": 22,
    "prerequisites": [
      444
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Akademik Makale Özetleme ve Eleştirel Şerh Düşme konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 446,
    "code": "C1-06",
    "level": "C1",
    "moduleId": "mod-c1-8",
    "moduleName": "C1 İleri Düzey Yeterlilik ve Söylem Bütünlüğü",
    "title": "Hukuki ve Resmi Metinlerdeki İkircikli Yapıları Çözümleme",
    "description": "C1 seviyesinde Hukuki ve Resmi Metinlerdeki İkircikli Yapıları Çözümleme konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Hukuki ve Resmi Metinlerdeki İkircikli Yapıları Çözümleme konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 446,
    "estimatedDuration": 22,
    "prerequisites": [
      445
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Hukuki ve Resmi Metinlerdeki İkircikli Yapıları Çözümleme konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 447,
    "code": "C1-07",
    "level": "C1",
    "moduleId": "mod-c1-8",
    "moduleName": "C1 İleri Düzey Yeterlilik ve Söylem Bütünlüğü",
    "title": "C1 Sözlü İletişim ve Müzakere Canlı Simülasyonu",
    "description": "C1 seviyesinde C1 Sözlü İletişim ve Müzakere Canlı Simülasyonu konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "C1 Sözlü İletişim ve Müzakere Canlı Simülasyonu konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 447,
    "estimatedDuration": 22,
    "prerequisites": [
      446
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "C1 Sözlü İletişim ve Müzakere Canlı Simülasyonu konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 448,
    "code": "C1-08",
    "level": "C1",
    "moduleId": "mod-c1-8",
    "moduleName": "C1 İleri Düzey Yeterlilik ve Söylem Bütünlüğü",
    "title": "C1 Seviye Sonu Kapsamlı Pratik Deneme Sınavı",
    "description": "C1 seviyesinde C1 Seviye Sonu Kapsamlı Pratik Deneme Sınavı konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "C1 Seviye Sonu Kapsamlı Pratik Deneme Sınavı konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 448,
    "estimatedDuration": 22,
    "prerequisites": [
      447
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "C1 Seviye Sonu Kapsamlı Pratik Deneme Sınavı konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 449,
    "code": "C1-09",
    "level": "C1",
    "moduleId": "mod-c1-8",
    "moduleName": "C1 İleri Düzey Yeterlilik ve Söylem Bütünlüğü",
    "title": "C1 Advanced Yeterlilik Değerlendirmesi: Bölüm 1 (Yazma & Dil Mantığı)",
    "description": "C1 seviyesinde C1 Advanced Yeterlilik Değerlendirmesi: Bölüm 1 (Yazma & Dil Mantığı) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "C1 Advanced Yeterlilik Değerlendirmesi: Bölüm 1 (Yazma & Dil Mantığı) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 449,
    "estimatedDuration": 22,
    "prerequisites": [
      448
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "C1 Advanced Yeterlilik Değerlendirmesi: Bölüm 1 (Yazma & Dil Mantığı) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 450,
    "code": "C1-10",
    "level": "C1",
    "moduleId": "mod-c1-8",
    "moduleName": "C1 İleri Düzey Yeterlilik ve Söylem Bütünlüğü",
    "title": "C1 Advanced Yeterlilik Değerlendirmesi: Bölüm 2 (Sözlü & Stratejik Sentez)",
    "description": "C1 seviyesinde C1 Advanced Yeterlilik Değerlendirmesi: Bölüm 2 (Sözlü & Stratejik Sentez) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "C1 Advanced Yeterlilik Değerlendirmesi: Bölüm 2 (Sözlü & Stratejik Sentez) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 450,
    "estimatedDuration": 22,
    "prerequisites": [
      449
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "C1 Advanced Yeterlilik Değerlendirmesi: Bölüm 2 (Sözlü & Stratejik Sentez) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 90
  },
  {
    "id": 451,
    "code": "C2-01",
    "level": "C2",
    "moduleId": "mod-c2-1",
    "moduleName": "Üslup Çeşitliliği, Ton Kontrolü ve Edebi Dil Hakimiyeti",
    "title": "Üslup Değişimi (Stylistic Shift): Aynı Olayı 4 Farklı Tonda Anlatma",
    "description": "C2 seviyesinde Üslup Değişimi (Stylistic Shift): Aynı Olayı 4 Farklı Tonda Anlatma konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Üslup Değişimi (Stylistic Shift): Aynı Olayı 4 Farklı Tonda Anlatma konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 451,
    "estimatedDuration": 25,
    "prerequisites": [
      450
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Üslup Değişimi (Stylistic Shift): Aynı Olayı 4 Farklı Tonda Anlatma konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 100
  },
  {
    "id": 452,
    "code": "C2-02",
    "level": "C2",
    "moduleId": "mod-c2-1",
    "moduleName": "Üslup Çeşitliliği, Ton Kontrolü ve Edebi Dil Hakimiyeti",
    "title": "Arkaik ve Edebi Gramer Yapıları (Lest he forget, Inverted conditionals)",
    "description": "C2 seviyesinde Arkaik ve Edebi Gramer Yapıları (Lest he forget, Inverted conditionals) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Arkaik ve Edebi Gramer Yapıları (Lest he forget, Inverted conditionals) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 452,
    "estimatedDuration": 25,
    "prerequisites": [
      451
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Arkaik ve Edebi Gramer Yapıları (Lest he forget, Inverted conditionals) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 100
  },
  {
    "id": 453,
    "code": "C2-03",
    "level": "C2",
    "moduleId": "mod-c2-1",
    "moduleName": "Üslup Çeşitliliği, Ton Kontrolü ve Edebi Dil Hakimiyeti",
    "title": "Sentaktik Esneklik: Cümle Ritimleri ve Uzunluk Kontrolü",
    "description": "C2 seviyesinde Sentaktik Esneklik: Cümle Ritimleri ve Uzunluk Kontrolü konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Sentaktik Esneklik: Cümle Ritimleri ve Uzunluk Kontrolü konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 453,
    "estimatedDuration": 25,
    "prerequisites": [
      452
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Sentaktik Esneklik: Cümle Ritimleri ve Uzunluk Kontrolü konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 100
  },
  {
    "id": 454,
    "code": "C2-04",
    "level": "C2",
    "moduleId": "mod-c2-1",
    "moduleName": "Üslup Çeşitliliği, Ton Kontrolü ve Edebi Dil Hakimiyeti",
    "title": "Edebi Düzyazı İncelemesi: Virginia Woolf, James Joyce, George Orwell",
    "description": "C2 seviyesinde Edebi Düzyazı İncelemesi: Virginia Woolf, James Joyce, George Orwell konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Edebi Düzyazı İncelemesi: Virginia Woolf, James Joyce, George Orwell konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 454,
    "estimatedDuration": 25,
    "prerequisites": [
      453
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Edebi Düzyazı İncelemesi: Virginia Woolf, James Joyce, George Orwell konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 100
  },
  {
    "id": 455,
    "code": "C2-05",
    "level": "C2",
    "moduleId": "mod-c2-1",
    "moduleName": "Üslup Çeşitliliği, Ton Kontrolü ve Edebi Dil Hakimiyeti",
    "title": "Zengin Duyusal Tasvirler ve Sinestezi (Sesleri görmek, renkleri duymak)",
    "description": "C2 seviyesinde Zengin Duyusal Tasvirler ve Sinestezi (Sesleri görmek, renkleri duymak) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Zengin Duyusal Tasvirler ve Sinestezi (Sesleri görmek, renkleri duymak) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 455,
    "estimatedDuration": 25,
    "prerequisites": [
      454
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Zengin Duyusal Tasvirler ve Sinestezi (Sesleri görmek, renkleri duymak) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 100
  },
  {
    "id": 456,
    "code": "C2-06",
    "level": "C2",
    "moduleId": "mod-c2-1",
    "moduleName": "Üslup Çeşitliliği, Ton Kontrolü ve Edebi Dil Hakimiyeti",
    "title": "Aforizma ve Özdeyiş Üretme Sanatı",
    "description": "C2 seviyesinde Aforizma ve Özdeyiş Üretme Sanatı konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Aforizma ve Özdeyiş Üretme Sanatı konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 456,
    "estimatedDuration": 25,
    "prerequisites": [
      455
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Aforizma ve Özdeyiş Üretme Sanatı konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 100
  },
  {
    "id": 457,
    "code": "C2-07",
    "level": "C2",
    "moduleId": "mod-c2-1",
    "moduleName": "Üslup Çeşitliliği, Ton Kontrolü ve Edebi Dil Hakimiyeti",
    "title": "İnce Duygusal Nüansları İfade Eden Nadir Kelimeler (Saudade, Melancholy, Epiphany)",
    "description": "C2 seviyesinde İnce Duygusal Nüansları İfade Eden Nadir Kelimeler (Saudade, Melancholy, Epiphany) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "İnce Duygusal Nüansları İfade Eden Nadir Kelimeler (Saudade, Melancholy, Epiphany) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 457,
    "estimatedDuration": 25,
    "prerequisites": [
      456
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "İnce Duygusal Nüansları İfade Eden Nadir Kelimeler (Saudade, Melancholy, Epiphany) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 100
  },
  {
    "id": 458,
    "code": "C2-08",
    "level": "C2",
    "moduleId": "mod-c2-1",
    "moduleName": "Üslup Çeşitliliği, Ton Kontrolü ve Edebi Dil Hakimiyeti",
    "title": "Şiirsel Ölçü ve Ritim Bilinci (Iambic pentameter, Aliterasyon)",
    "description": "C2 seviyesinde Şiirsel Ölçü ve Ritim Bilinci (Iambic pentameter, Aliterasyon) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Şiirsel Ölçü ve Ritim Bilinci (Iambic pentameter, Aliterasyon) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 458,
    "estimatedDuration": 25,
    "prerequisites": [
      457
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Şiirsel Ölçü ve Ritim Bilinci (Iambic pentameter, Aliterasyon) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 100
  },
  {
    "id": 459,
    "code": "C2-09",
    "level": "C2",
    "moduleId": "mod-c2-1",
    "moduleName": "Üslup Çeşitliliği, Ton Kontrolü ve Edebi Dil Hakimiyeti",
    "title": "Çağdaş Edebi Eleştiri ve Üslup İncelemesi",
    "description": "C2 seviyesinde Çağdaş Edebi Eleştiri ve Üslup İncelemesi konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Çağdaş Edebi Eleştiri ve Üslup İncelemesi konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 459,
    "estimatedDuration": 25,
    "prerequisites": [
      458
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Çağdaş Edebi Eleştiri ve Üslup İncelemesi konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 100
  },
  {
    "id": 460,
    "code": "C2-10",
    "level": "C2",
    "moduleId": "mod-c2-1",
    "moduleName": "Üslup Çeşitliliği, Ton Kontrolü ve Edebi Dil Hakimiyeti",
    "title": "C2 Modül 1 Entegrasyonu: Edebi Manifesto Kaleme Alma",
    "description": "C2 seviyesinde C2 Modül 1 Entegrasyonu: Edebi Manifesto Kaleme Alma konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "C2 Modül 1 Entegrasyonu: Edebi Manifesto Kaleme Alma konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 460,
    "estimatedDuration": 25,
    "prerequisites": [
      459
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "C2 Modül 1 Entegrasyonu: Edebi Manifesto Kaleme Alma konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 100
  },
  {
    "id": 461,
    "code": "C2-01",
    "level": "C2",
    "moduleId": "mod-c2-2",
    "moduleName": "İroni, Hiciv, Kültürel Mizah ve Understatement",
    "title": "İroni Çeşitleri: Sözel İroni, Durumsal İroni ve Dramatik İroni",
    "description": "C2 seviyesinde İroni Çeşitleri: Sözel İroni, Durumsal İroni ve Dramatik İroni konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "İroni Çeşitleri: Sözel İroni, Durumsal İroni ve Dramatik İroni konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 461,
    "estimatedDuration": 25,
    "prerequisites": [
      460
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "İroni Çeşitleri: Sözel İroni, Durumsal İroni ve Dramatik İroni konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 100
  },
  {
    "id": 462,
    "code": "C2-02",
    "level": "C2",
    "moduleId": "mod-c2-2",
    "moduleName": "İroni, Hiciv, Kültürel Mizah ve Understatement",
    "title": "İngiliz Understatement Kültürü: 'A bit of a nuisance' (Büyük felaket)",
    "description": "C2 seviyesinde İngiliz Understatement Kültürü: 'A bit of a nuisance' (Büyük felaket) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "İngiliz Understatement Kültürü: 'A bit of a nuisance' (Büyük felaket) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 462,
    "estimatedDuration": 25,
    "prerequisites": [
      461
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "İngiliz Understatement Kültürü: 'A bit of a nuisance' (Büyük felaket) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 100
  },
  {
    "id": 463,
    "code": "C2-03",
    "level": "C2",
    "moduleId": "mod-c2-2",
    "moduleName": "İroni, Hiciv, Kültürel Mizah ve Understatement",
    "title": "Sarkazm ve Övgü Kılığına Girmiş Yerme (Backhanded compliments)",
    "description": "C2 seviyesinde Sarkazm ve Övgü Kılığına Girmiş Yerme (Backhanded compliments) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Sarkazm ve Övgü Kılığına Girmiş Yerme (Backhanded compliments) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 463,
    "estimatedDuration": 25,
    "prerequisites": [
      462
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Sarkazm ve Övgü Kılığına Girmiş Yerme (Backhanded compliments) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 100
  },
  {
    "id": 464,
    "code": "C2-04",
    "level": "C2",
    "moduleId": "mod-c2-2",
    "moduleName": "İroni, Hiciv, Kültürel Mizah ve Understatement",
    "title": "Hiciv (Satire) Geleneği: Jonathan Swift'ten Modern Politik Mizaha",
    "description": "C2 seviyesinde Hiciv (Satire) Geleneği: Jonathan Swift'ten Modern Politik Mizaha konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Hiciv (Satire) Geleneği: Jonathan Swift'ten Modern Politik Mizaha konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 464,
    "estimatedDuration": 25,
    "prerequisites": [
      463
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Hiciv (Satire) Geleneği: Jonathan Swift'ten Modern Politik Mizaha konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 100
  },
  {
    "id": 465,
    "code": "C2-05",
    "level": "C2",
    "moduleId": "mod-c2-2",
    "moduleName": "İroni, Hiciv, Kültürel Mizah ve Understatement",
    "title": "Kuru Mizah (Deadpan / Dry Humour) Dinamikleri",
    "description": "C2 seviyesinde Kuru Mizah (Deadpan / Dry Humour) Dinamikleri konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Kuru Mizah (Deadpan / Dry Humour) Dinamikleri konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 465,
    "estimatedDuration": 25,
    "prerequisites": [
      464
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Kuru Mizah (Deadpan / Dry Humour) Dinamikleri konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 100
  },
  {
    "id": 466,
    "code": "C2-06",
    "level": "C2",
    "moduleId": "mod-c2-2",
    "moduleName": "İroni, Hiciv, Kültürel Mizah ve Understatement",
    "title": "Kültürel Tabular ve Mizahın Sınırları",
    "description": "C2 seviyesinde Kültürel Tabular ve Mizahın Sınırları konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Kültürel Tabular ve Mizahın Sınırları konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 466,
    "estimatedDuration": 25,
    "prerequisites": [
      465
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Kültürel Tabular ve Mizahın Sınırları konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 100
  },
  {
    "id": 467,
    "code": "C2-07",
    "level": "C2",
    "moduleId": "mod-c2-2",
    "moduleName": "İroni, Hiciv, Kültürel Mizah ve Understatement",
    "title": "Metinlerdeki İronik Çelişkileri ve Parodileri Yakalama",
    "description": "C2 seviyesinde Metinlerdeki İronik Çelişkileri ve Parodileri Yakalama konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Metinlerdeki İronik Çelişkileri ve Parodileri Yakalama konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 467,
    "estimatedDuration": 25,
    "prerequisites": [
      466
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Metinlerdeki İronik Çelişkileri ve Parodileri Yakalama konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 100
  },
  {
    "id": 468,
    "code": "C2-08",
    "level": "C2",
    "moduleId": "mod-c2-2",
    "moduleName": "İroni, Hiciv, Kültürel Mizah ve Understatement",
    "title": "Zekice Cevap Verme (Repartee) ve Nüktedanlık Sanatı",
    "description": "C2 seviyesinde Zekice Cevap Verme (Repartee) ve Nüktedanlık Sanatı konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Zekice Cevap Verme (Repartee) ve Nüktedanlık Sanatı konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 468,
    "estimatedDuration": 25,
    "prerequisites": [
      467
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Zekice Cevap Verme (Repartee) ve Nüktedanlık Sanatı konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 100
  },
  {
    "id": 469,
    "code": "C2-09",
    "level": "C2",
    "moduleId": "mod-c2-2",
    "moduleName": "İroni, Hiciv, Kültürel Mizah ve Understatement",
    "title": "Politik Karikatür ve İğneleyici Köşe Yazısı Analizi",
    "description": "C2 seviyesinde Politik Karikatür ve İğneleyici Köşe Yazısı Analizi konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Politik Karikatür ve İğneleyici Köşe Yazısı Analizi konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 469,
    "estimatedDuration": 25,
    "prerequisites": [
      468
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Politik Karikatür ve İğneleyici Köşe Yazısı Analizi konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 100
  },
  {
    "id": 470,
    "code": "C2-10",
    "level": "C2",
    "moduleId": "mod-c2-2",
    "moduleName": "İroni, Hiciv, Kültürel Mizah ve Understatement",
    "title": "C2 Modül 2 Entegrasyonu: Kurumsal Yaşamı Hicveden Bir Deneme Yazımı",
    "description": "C2 seviyesinde C2 Modül 2 Entegrasyonu: Kurumsal Yaşamı Hicveden Bir Deneme Yazımı konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "C2 Modül 2 Entegrasyonu: Kurumsal Yaşamı Hicveden Bir Deneme Yazımı konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 470,
    "estimatedDuration": 25,
    "prerequisites": [
      469
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "C2 Modül 2 Entegrasyonu: Kurumsal Yaşamı Hicveden Bir Deneme Yazımı konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 100
  },
  {
    "id": 471,
    "code": "C2-01",
    "level": "C2",
    "moduleId": "mod-c2-3",
    "moduleName": "Hukuk, Finans ve Felsefi Terminoloji ve Argüman Açmazları",
    "title": "Anglo-Sakson Hukuk Sistemi ve Temel Hukuki Latince (Pro bono, De facto)",
    "description": "C2 seviyesinde Anglo-Sakson Hukuk Sistemi ve Temel Hukuki Latince (Pro bono, De facto) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Anglo-Sakson Hukuk Sistemi ve Temel Hukuki Latince (Pro bono, De facto) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 471,
    "estimatedDuration": 25,
    "prerequisites": [
      470
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Anglo-Sakson Hukuk Sistemi ve Temel Hukuki Latince (Pro bono, De facto) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 100
  },
  {
    "id": 472,
    "code": "C2-02",
    "level": "C2",
    "moduleId": "mod-c2-3",
    "moduleName": "Hukuk, Finans ve Felsefi Terminoloji ve Argüman Açmazları",
    "title": "Sözleşme Hukuku: Yükümlülükler, Tazminatlar ve Mücbir Sebep (Force Majeure)",
    "description": "C2 seviyesinde Sözleşme Hukuku: Yükümlülükler, Tazminatlar ve Mücbir Sebep (Force Majeure) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Sözleşme Hukuku: Yükümlülükler, Tazminatlar ve Mücbir Sebep (Force Majeure) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 472,
    "estimatedDuration": 25,
    "prerequisites": [
      471
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Sözleşme Hukuku: Yükümlülükler, Tazminatlar ve Mücbir Sebep (Force Majeure) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 100
  },
  {
    "id": 473,
    "code": "C2-03",
    "level": "C2",
    "moduleId": "mod-c2-3",
    "moduleName": "Hukuk, Finans ve Felsefi Terminoloji ve Argüman Açmazları",
    "title": "Finansal Enstrümanlar ve Makroekonomik Açmazlar Jargonu",
    "description": "C2 seviyesinde Finansal Enstrümanlar ve Makroekonomik Açmazlar Jargonu konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Finansal Enstrümanlar ve Makroekonomik Açmazlar Jargonu konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 473,
    "estimatedDuration": 25,
    "prerequisites": [
      472
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Finansal Enstrümanlar ve Makroekonomik Açmazlar Jargonu konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 100
  },
  {
    "id": 474,
    "code": "C2-04",
    "level": "C2",
    "moduleId": "mod-c2-3",
    "moduleName": "Hukuk, Finans ve Felsefi Terminoloji ve Argüman Açmazları",
    "title": "Felsefi Mantık ve Paradokslar (Zeno, Russell, Schrödinger)",
    "description": "C2 seviyesinde Felsefi Mantık ve Paradokslar (Zeno, Russell, Schrödinger) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Felsefi Mantık ve Paradokslar (Zeno, Russell, Schrödinger) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 474,
    "estimatedDuration": 25,
    "prerequisites": [
      473
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Felsefi Mantık ve Paradokslar (Zeno, Russell, Schrödinger) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 100
  },
  {
    "id": 475,
    "code": "C2-05",
    "level": "C2",
    "moduleId": "mod-c2-3",
    "moduleName": "Hukuk, Finans ve Felsefi Terminoloji ve Argüman Açmazları",
    "title": "Etik İkilemler ve Trolley Problemi Üzerine Argümantasyon",
    "description": "C2 seviyesinde Etik İkilemler ve Trolley Problemi Üzerine Argümantasyon konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Etik İkilemler ve Trolley Problemi Üzerine Argümantasyon konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 475,
    "estimatedDuration": 25,
    "prerequisites": [
      474
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Etik İkilemler ve Trolley Problemi Üzerine Argümantasyon konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 100
  },
  {
    "id": 476,
    "code": "C2-06",
    "level": "C2",
    "moduleId": "mod-c2-3",
    "moduleName": "Hukuk, Finans ve Felsefi Terminoloji ve Argüman Açmazları",
    "title": "Teknik ve Hukuki Metinlerde Sıfır Belirsizlik (Absolute Precision)",
    "description": "C2 seviyesinde Teknik ve Hukuki Metinlerde Sıfır Belirsizlik (Absolute Precision) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Teknik ve Hukuki Metinlerde Sıfır Belirsizlik (Absolute Precision) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 476,
    "estimatedDuration": 25,
    "prerequisites": [
      475
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Teknik ve Hukuki Metinlerde Sıfır Belirsizlik (Absolute Precision) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 100
  },
  {
    "id": 477,
    "code": "C2-07",
    "level": "C2",
    "moduleId": "mod-c2-3",
    "moduleName": "Hukuk, Finans ve Felsefi Terminoloji ve Argüman Açmazları",
    "title": "Arabuluculuk ve Yüksek Tansiyonlu Uyuşmazlık Çözümü",
    "description": "C2 seviyesinde Arabuluculuk ve Yüksek Tansiyonlu Uyuşmazlık Çözümü konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Arabuluculuk ve Yüksek Tansiyonlu Uyuşmazlık Çözümü konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 477,
    "estimatedDuration": 25,
    "prerequisites": [
      476
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Arabuluculuk ve Yüksek Tansiyonlu Uyuşmazlık Çözümü konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 100
  },
  {
    "id": 478,
    "code": "C2-08",
    "level": "C2",
    "moduleId": "mod-c2-3",
    "moduleName": "Hukuk, Finans ve Felsefi Terminoloji ve Argüman Açmazları",
    "title": "Yapay Zeka ve Gelecek Etiği Üzerine Hukuki Felsefi Tartışma",
    "description": "C2 seviyesinde Yapay Zeka ve Gelecek Etiği Üzerine Hukuki Felsefi Tartışma konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Yapay Zeka ve Gelecek Etiği Üzerine Hukuki Felsefi Tartışma konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 478,
    "estimatedDuration": 25,
    "prerequisites": [
      477
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Yapay Zeka ve Gelecek Etiği Üzerine Hukuki Felsefi Tartışma konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 100
  },
  {
    "id": 479,
    "code": "C2-09",
    "level": "C2",
    "moduleId": "mod-c2-3",
    "moduleName": "Hukuk, Finans ve Felsefi Terminoloji ve Argüman Açmazları",
    "title": "Anayasal Yorumlama İlkeleri ve Doktrin Analizi",
    "description": "C2 seviyesinde Anayasal Yorumlama İlkeleri ve Doktrin Analizi konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Anayasal Yorumlama İlkeleri ve Doktrin Analizi konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 479,
    "estimatedDuration": 25,
    "prerequisites": [
      478
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Anayasal Yorumlama İlkeleri ve Doktrin Analizi konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 100
  },
  {
    "id": 480,
    "code": "C2-10",
    "level": "C2",
    "moduleId": "mod-c2-3",
    "moduleName": "Hukuk, Finans ve Felsefi Terminoloji ve Argüman Açmazları",
    "title": "C2 Modül 3 Entegrasyonu: Uluslararası Tahkim Mahkemesi Savunma Metni",
    "description": "C2 seviyesinde C2 Modül 3 Entegrasyonu: Uluslararası Tahkim Mahkemesi Savunma Metni konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "C2 Modül 3 Entegrasyonu: Uluslararası Tahkim Mahkemesi Savunma Metni konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 480,
    "estimatedDuration": 25,
    "prerequisites": [
      479
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "C2 Modül 3 Entegrasyonu: Uluslararası Tahkim Mahkemesi Savunma Metni konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 100
  },
  {
    "id": 481,
    "code": "C2-01",
    "level": "C2",
    "moduleId": "mod-c2-4",
    "moduleName": "C2 Spontane Düşünce Akışı, Hitabet ve Ustalık Sentezi",
    "title": "Simültane Düşünce Akışı: Düşünce ile Eşzamanlı İngilizce Konuşma",
    "description": "C2 seviyesinde Simültane Düşünce Akışı: Düşünce ile Eşzamanlı İngilizce Konuşma konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Simültane Düşünce Akışı: Düşünce ile Eşzamanlı İngilizce Konuşma konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 481,
    "estimatedDuration": 25,
    "prerequisites": [
      480
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Simültane Düşünce Akışı: Düşünce ile Eşzamanlı İngilizce Konuşma konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 100
  },
  {
    "id": 482,
    "code": "C2-02",
    "level": "C2",
    "moduleId": "mod-c2-4",
    "moduleName": "C2 Spontane Düşünce Akışı, Hitabet ve Ustalık Sentezi",
    "title": "Spontane Hitabet: Hazırlıksız Konularda Kusursuz Konuşma Sanatı",
    "description": "C2 seviyesinde Spontane Hitabet: Hazırlıksız Konularda Kusursuz Konuşma Sanatı konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Spontane Hitabet: Hazırlıksız Konularda Kusursuz Konuşma Sanatı konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 482,
    "estimatedDuration": 25,
    "prerequisites": [
      481
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Spontane Hitabet: Hazırlıksız Konularda Kusursuz Konuşma Sanatı konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 100
  },
  {
    "id": 483,
    "code": "C2-03",
    "level": "C2",
    "moduleId": "mod-c2-4",
    "moduleName": "C2 Spontane Düşünce Akışı, Hitabet ve Ustalık Sentezi",
    "title": "Zorlu Kriz Röportajı: Baskı Altında Soğukkanlı Söz Ustalığı",
    "description": "C2 seviyesinde Zorlu Kriz Röportajı: Baskı Altında Soğukkanlı Söz Ustalığı konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Zorlu Kriz Röportajı: Baskı Altında Soğukkanlı Söz Ustalığı konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 483,
    "estimatedDuration": 25,
    "prerequisites": [
      482
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Zorlu Kriz Röportajı: Baskı Altında Soğukkanlı Söz Ustalığı konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 100
  },
  {
    "id": 484,
    "code": "C2-04",
    "level": "C2",
    "moduleId": "mod-c2-4",
    "moduleName": "C2 Spontane Düşünce Akışı, Hitabet ve Ustalık Sentezi",
    "title": "Anadili Konuşucularının Bile Şaşırdığı İleri Düzey Kelime Dağarcığı",
    "description": "C2 seviyesinde Anadili Konuşucularının Bile Şaşırdığı İleri Düzey Kelime Dağarcığı konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Anadili Konuşucularının Bile Şaşırdığı İleri Düzey Kelime Dağarcığı konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 484,
    "estimatedDuration": 25,
    "prerequisites": [
      483
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Anadili Konuşucularının Bile Şaşırdığı İleri Düzey Kelime Dağarcığı konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 100
  },
  {
    "id": 485,
    "code": "C2-05",
    "level": "C2",
    "moduleId": "mod-c2-4",
    "moduleName": "C2 Spontane Düşünce Akışı, Hitabet ve Ustalık Sentezi",
    "title": "İngiliz ve Amerikan Edebi Mirasının Karşılaştırmalı Sentezi",
    "description": "C2 seviyesinde İngiliz ve Amerikan Edebi Mirasının Karşılaştırmalı Sentezi konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "İngiliz ve Amerikan Edebi Mirasının Karşılaştırmalı Sentezi konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 485,
    "estimatedDuration": 25,
    "prerequisites": [
      484
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "İngiliz ve Amerikan Edebi Mirasının Karşılaştırmalı Sentezi konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 100
  },
  {
    "id": 486,
    "code": "C2-06",
    "level": "C2",
    "moduleId": "mod-c2-4",
    "moduleName": "C2 Spontane Düşünce Akışı, Hitabet ve Ustalık Sentezi",
    "title": "C2 Ustalık Düzeyinde Çeviri ve Yorumlama Sanatı (Subtle Translation)",
    "description": "C2 seviyesinde C2 Ustalık Düzeyinde Çeviri ve Yorumlama Sanatı (Subtle Translation) konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "C2 Ustalık Düzeyinde Çeviri ve Yorumlama Sanatı (Subtle Translation) konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 486,
    "estimatedDuration": 25,
    "prerequisites": [
      485
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "C2 Ustalık Düzeyinde Çeviri ve Yorumlama Sanatı (Subtle Translation) konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 100
  },
  {
    "id": 487,
    "code": "C2-07",
    "level": "C2",
    "moduleId": "mod-c2-4",
    "moduleName": "C2 Spontane Düşünce Akışı, Hitabet ve Ustalık Sentezi",
    "title": "Hitabet Zirvesi: Tarihe Geçen Liderlik Konuşması Simülasyonu",
    "description": "C2 seviyesinde Hitabet Zirvesi: Tarihe Geçen Liderlik Konuşması Simülasyonu konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "Hitabet Zirvesi: Tarihe Geçen Liderlik Konuşması Simülasyonu konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 487,
    "estimatedDuration": 25,
    "prerequisites": [
      486
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "Hitabet Zirvesi: Tarihe Geçen Liderlik Konuşması Simülasyonu konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 100
  },
  {
    "id": 488,
    "code": "C2-08",
    "level": "C2",
    "moduleId": "mod-c2-4",
    "moduleName": "C2 Spontane Düşünce Akışı, Hitabet ve Ustalık Sentezi",
    "title": "C2 Ustalık (Mastery) Nihai Yeterlilik Değerlendirmesi ve Başarı Belgesi",
    "description": "C2 seviyesinde C2 Ustalık (Mastery) Nihai Yeterlilik Değerlendirmesi ve Başarı Belgesi konusunun pedagojik kural ve iletişim kalıplarını kavramaya yönelik kapsamlı ders.",
    "learningObjectives": [
      "C2 Ustalık (Mastery) Nihai Yeterlilik Değerlendirmesi ve Başarı Belgesi konusuna ait temel dil mantığını ve kullanım reflekslerini edinmek",
      "Gerçek yaşam senaryolarında yapıyı hatasız ve akıcı biçimde uygulayabilmek",
      "Hedef seviyede interaktif alıştırmalar ve cümle kurucu ile refleks geliştirmek"
    ],
    "order": 488,
    "estimatedDuration": 25,
    "prerequisites": [
      487
    ],
    "activities": [
      "grammar",
      "vocabulary",
      "listening",
      "reading",
      "exercises"
    ],
    "assessmentCriteria": "C2 Ustalık (Mastery) Nihai Yeterlilik Değerlendirmesi ve Başarı Belgesi konusuna ait anlama ve pratik testinde en az %80 başarı.",
    "xpReward": 100
  }
];

// Authoritative getter returning all 488 enriched curriculum lessons
let cachedEnrichedLessons: CurriculumLessonDef[] | null = null;

export function getFullCurriculumLessons(): CurriculumLessonDef[] {
  if (cachedEnrichedLessons) return cachedEnrichedLessons;

  cachedEnrichedLessons = CURRICULUM_LESSONS.map((rawLesson) => {
    const lessonType = classifyLessonType(rawLesson.title, rawLesson.moduleName, rawLesson.level);
    const targetStructures = deriveTargetStructures(rawLesson.title, rawLesson.level);
    const targetVocabulary = deriveTargetVocabulary(rawLesson.title, rawLesson.level);
    const skills = deriveSkills(lessonType);
    const { prerequisiteLessonIds, nextLessonIds } = derivePrerequisitesAndNext(rawLesson.id);

    const cleanTitle = rawLesson.title.replace(/[—–-].*$/, '').trim();
    const learningObjectives = [
      `${rawLesson.level} seviyesinde '${cleanTitle}' konusuna ait temel yapıları, hedef kelimeleri ve dil kullanım reflekslerini hatasız uygulayabilmek.`,
      `Hedef dilbilgisi kalıplarını (${targetStructures[0] || 'standart söz dizimi'}) gerçek yaşam senaryolarında doğru telaffuzla kullanabilmek.`,
      `İnteraktif anlama kontrolü, cümle kurucu ve alıştırmalarda en az %80 başarı sergileyebilmek.`
    ];

    return {
      ...rawLesson,
      subtopic: rawLesson.moduleName,
      lessonType,
      learningObjectives,
      targetStructures,
      targetVocabulary,
      skills,
      prerequisites: prerequisiteLessonIds,
      prerequisiteLessonIds,
      nextLessonIds,
      validationStatus: (rawLesson.id === 1 || rawLesson.id === 2 ? 'content_reviewed' : 'auto_verified') as CurriculumValidationStatus,
    };
  });

  return cachedEnrichedLessons;
}
