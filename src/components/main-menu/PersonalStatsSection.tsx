import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  RotateCcw, 
  Target, 
  Sparkles, 
  Award, 
  BookOpen, 
  TrendingUp,
  BrainCircuit,
  ArrowRight,
  Brain,
  Headphones,
  Book,
  PenTool,
  Mic,
  BarChart3,
  Layers,
  AlertCircle
} from 'lucide-react';
import { CurriculumLessonDef } from '../../types/curriculum';
import { getFullCurriculumLessons } from '../../data/curriculumData';
import { getSRSStats } from '../../services/srsEngine';
import { 
  getActiveStudentProfile, 
  switchProfilePreset, 
  getActiveProfilePresetKey,
  getAllWordRecords,
  subscribeToStudentMemory
} from '../../services/studentMemoryEngine';
import { StudentProfile } from '../../types/adaptive';

interface PersonalStatsSectionProps {
  completedLessonIds: number[];
  onOpenLesson: (id: number) => void;
  onOpenMistakeBank?: () => void;
}

export const PersonalStatsSection: React.FC<PersonalStatsSectionProps> = ({
  completedLessonIds,
  onOpenLesson,
  onOpenMistakeBank,
}) => {
  const allCurriculum = getFullCurriculumLessons();
  const srsStats = getSRSStats();

  const [studentProfile, setStudentProfile] = useState<StudentProfile>(getActiveStudentProfile());
  const [activePreset, setActivePreset] = useState<string>(getActiveProfilePresetKey());
  const [wordRecords, setWordRecords] = useState(getAllWordRecords());

  useEffect(() => {
    const unsub = subscribeToStudentMemory(() => {
      setStudentProfile(getActiveStudentProfile());
      setActivePreset(getActiveProfilePresetKey());
      setWordRecords(getAllWordRecords());
    });
    return unsub;
  }, []);

  const handleSwitchPreset = (preset: 'a1_beginner' | 'b1_intermediate' | 'c1_advanced') => {
    const updated = switchProfilePreset(preset);
    setStudentProfile(updated);
    setActivePreset(preset);
  };

  // Completed lessons objects
  const completedLessons = allCurriculum.filter((l) => completedLessonIds.includes(l.id));

  // Word mastery breakdown
  const wordStatusCounts = {
    unseen: wordRecords.filter((w) => w.status === 'unseen').length,
    encountered: wordRecords.filter((w) => w.status === 'encountered').length,
    recognized: wordRecords.filter((w) => w.status === 'recognized').length,
    recalled: wordRecords.filter((w) => w.status === 'recalled').length,
    mastered: wordRecords.filter((w) => w.status === 'mastered').length,
    needs_review: wordRecords.filter((w) => w.status === 'needs_review').length,
  };

  // Spaced repetition review candidates
  const reviewRecommendations = completedLessons.length > 0 
    ? completedLessons.slice(0, 3)
    : [allCurriculum[0], allCurriculum[3], allCurriculum[6]].filter(Boolean);

  const nextTargetLesson = allCurriculum.find((l) => !completedLessonIds.includes(l.id)) || allCurriculum[0];

  const scaffoldText: Record<string, { label: string; color: string }> = {
    heavy: { label: 'Yoğun İskele (Heavy Scaffolding)', color: 'text-amber-700 bg-amber-50 border-amber-200' },
    moderate: { label: 'Dengeli Destek (Moderate Scaffolding)', color: 'text-indigo-700 bg-indigo-50 border-indigo-200' },
    light: { label: 'Sade / İleri (Light Scaffolding)', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-6">
      {/* Section Header & Profile Switcher */}
      <div className="border-b border-slate-100 pb-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <BrainCircuit className="w-5 h-5 text-indigo-600" />
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
              Öğrenci Hafızası & Uyarlanabilir Öğrenme Motoru
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Her öğrencinin seviyesine, kelime hafızasına ve hata geçmişine göre uyarlanan dinamik pedagoji
          </p>
        </div>

        {/* Profile Preset Switcher */}
        <div className="flex items-center gap-2 bg-slate-50 p-1.5 rounded-2xl border border-slate-200 self-start md:self-center">
          <span className="text-[11px] font-bold text-slate-500 uppercase px-2 hidden sm:inline">
            Profil Simülasyonu:
          </span>
          <button
            onClick={() => handleSwitchPreset('a1_beginner')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activePreset === 'a1_beginner'
                ? 'bg-amber-500 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            🌱 Emre (A1)
          </button>
          <button
            onClick={() => handleSwitchPreset('b1_intermediate')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activePreset === 'b1_intermediate'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            🎯 Selin (B1)
          </button>
          <button
            onClick={() => handleSwitchPreset('c1_advanced')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activePreset === 'c1_advanced'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            🚀 Can (C1)
          </button>
        </div>
      </div>

      {/* Active Profile Banner */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="text-3xl p-2 rounded-xl bg-white/10">{studentProfile.avatar}</span>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-sm sm:text-base">{studentProfile.name}</span>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-white/20 text-white">
                Mevcut: {studentProfile.currentLevel} → Hedef: {studentProfile.targetLevel}
              </span>
            </div>
            <p className="text-xs text-indigo-200 mt-0.5">
              İskele Düzeyi: <strong>{scaffoldText[studentProfile.scaffoldingLevel]?.label}</strong>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-center">
          <div className="px-3 py-1 rounded-xl bg-white/10 text-xs font-semibold">
            Üst Üste Doğru: <strong className="text-emerald-400">{studentProfile.consecutiveCorrectCount}</strong>
          </div>
          <div className="px-3 py-1 rounded-xl bg-white/10 text-xs font-semibold">
            Aktif Hatalar: <strong className="text-rose-400">{studentProfile.recentErrors.length}</strong>
          </div>
        </div>
      </div>

      {/* 4 Core Skills + Subskills Radar */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
            <BarChart3 className="w-4 h-4 text-indigo-600" />
            Öğrenci Beceri Performansı (4 Temel Beceri & Alt Beceriler)
          </h4>
          <span className="text-[11px] text-slate-400">Tek bir hata seviyeyi düşürmez, destek düzeyini ayarlar</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {/* Dinleme */}
          <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-1">
            <div className="flex items-center justify-between">
              <Headphones className="w-4 h-4 text-amber-600" />
              <span className="text-xs font-extrabold text-amber-900">{studentProfile.skills.listening.score}%</span>
            </div>
            <span className="text-xs font-bold text-slate-800 block">Dinleme</span>
            <span className="text-[10px] text-slate-500 block">Hız: {studentProfile.skills.listening.speedPreference}x</span>
          </div>

          {/* Okuma */}
          <div className="p-3.5 rounded-2xl bg-teal-50/70 border border-teal-200/80 space-y-1">
            <div className="flex items-center justify-between">
              <Book className="w-4 h-4 text-teal-600" />
              <span className="text-xs font-extrabold text-teal-900">{studentProfile.skills.reading.score}%</span>
            </div>
            <span className="text-xs font-bold text-slate-800 block">Okuma</span>
            <span className="text-[10px] text-slate-500 block">Kavrama: {studentProfile.skills.reading.comprehensionRate}%</span>
          </div>

          {/* Yazma */}
          <div className="p-3.5 rounded-2xl bg-rose-50/70 border border-rose-200/80 space-y-1">
            <div className="flex items-center justify-between">
              <PenTool className="w-4 h-4 text-rose-600" />
              <span className="text-xs font-extrabold text-rose-900">{studentProfile.skills.writing.score}%</span>
            </div>
            <span className="text-xs font-bold text-slate-800 block">Yazma</span>
            <span className="text-[10px] text-slate-500 block">Doğruluk: {studentProfile.skills.writing.accuracyRate}%</span>
          </div>

          {/* Konuşma & Telaffuz */}
          <div className="p-3.5 rounded-2xl bg-sky-50/70 border border-sky-200/80 space-y-1">
            <div className="flex items-center justify-between">
              <Mic className="w-4 h-4 text-sky-600" />
              <span className="text-xs font-extrabold text-sky-900">{studentProfile.skills.speaking.score}%</span>
            </div>
            <span className="text-xs font-bold text-slate-800 block">Konuşma</span>
            <span className="text-[10px] text-slate-500 block">Telaffuz: {studentProfile.skills.speaking.pronunciationScore}%</span>
          </div>

          {/* Gramer */}
          <div className="p-3.5 rounded-2xl bg-indigo-50/70 border border-indigo-200/80 space-y-1">
            <div className="flex items-center justify-between">
              <Layers className="w-4 h-4 text-indigo-600" />
              <span className="text-xs font-extrabold text-indigo-900">{studentProfile.skills.grammar.score}%</span>
            </div>
            <span className="text-xs font-bold text-slate-800 block">Dil Bilgisi</span>
            <span className="text-[10px] text-slate-500 block">{studentProfile.skills.grammar.testedCount} Test</span>
          </div>

          {/* Kelime Dağarcığı */}
          <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-1">
            <div className="flex items-center justify-between">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span className="text-xs font-extrabold text-emerald-900">{studentProfile.skills.vocabulary.score}%</span>
            </div>
            <span className="text-xs font-bold text-slate-800 block">Kelime Dağarcığı</span>
            <span className="text-[10px] text-slate-500 block">{studentProfile.skills.vocabulary.masteredWordsCount} Usta Kelime</span>
          </div>
        </div>

        {/* Weak & Strong Phonemes Callout */}
        {studentProfile.skills.speaking.weakPhonemes.length > 0 && (
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="font-bold text-slate-800">Geliştirilecek Sesler: </span>
              <span className="font-mono text-rose-700 font-semibold">{studentProfile.skills.speaking.weakPhonemes.join(', ')}</span>
            </div>
            <div>
              <span className="font-bold text-slate-800">Güçlü Sesler: </span>
              <span className="font-mono text-emerald-700 font-semibold">{studentProfile.skills.speaking.strongPhonemes.join(', ')}</span>
            </div>
          </div>
        )}
      </div>

      {/* Word Mastery States Breakdown (Requirement 3) */}
      <div className="space-y-3">
        <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
          <BookOpen className="w-4 h-4 text-indigo-600" />
          Kelime ve Öğrenme Durumları Dağılımı (Word Mastery Memory)
        </h4>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-center text-xs">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-[10px] text-slate-500 block font-semibold">Karşılaşılmadı</span>
            <span className="text-base font-extrabold text-slate-700">{wordStatusCounts.unseen}</span>
          </div>

          <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-200">
            <span className="text-[10px] text-amber-800 block font-semibold">Karşılaşıldı</span>
            <span className="text-base font-extrabold text-amber-700">{wordStatusCounts.encountered}</span>
          </div>

          <div className="p-3 rounded-xl bg-sky-50/60 border border-sky-200">
            <span className="text-[10px] text-sky-800 block font-semibold">Tanındı</span>
            <span className="text-base font-extrabold text-sky-700">{wordStatusCounts.recognized}</span>
          </div>

          <div className="p-3 rounded-xl bg-indigo-50/60 border border-indigo-200">
            <span className="text-[10px] text-indigo-800 block font-semibold">Hatırlandı</span>
            <span className="text-base font-extrabold text-indigo-700">{wordStatusCounts.recalled}</span>
          </div>

          <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-200">
            <span className="text-[10px] text-emerald-800 block font-semibold">Ustalık</span>
            <span className="text-base font-extrabold text-emerald-700">{wordStatusCounts.mastered}</span>
          </div>

          <div className="p-3 rounded-xl bg-rose-50/60 border border-rose-200">
            <span className="text-[10px] text-rose-800 block font-semibold">Tekrar Gerekli</span>
            <span className="text-base font-extrabold text-rose-700">{wordStatusCounts.needs_review}</span>
          </div>
        </div>
      </div>

      {/* Bottom 3 Columns: Strengths, MistakeBank/SRS, Next Target */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
        {/* 1. Güçlü Konular */}
        <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              Güçlü Alanlar
            </span>
            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
              Usta
            </span>
          </div>

          <div className="space-y-2">
            {studentProfile.strengths.map((str, idx) => (
              <div key={idx} className="p-2.5 rounded-xl bg-white border border-emerald-100 flex items-center justify-between text-xs">
                <span className="font-bold text-slate-900 block truncate">{str}</span>
                <span className="font-extrabold text-emerald-600">✓ Usta</span>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Hata Bankası & Aralıklı Tekrar */}
        <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-3 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
                <Brain className="w-4 h-4 text-amber-600" />
                Hata Bankası & Tekrar
              </span>
              <span className="text-[10px] font-bold text-amber-800 bg-amber-200/80 px-2 py-0.5 rounded-full">
                {srsStats.dueCount} Soru Bekliyor
              </span>
            </div>

            <div className="space-y-2">
              {reviewRecommendations.slice(0, 2).map((lesson) => (
                <div key={lesson.id} className="p-2 rounded-xl bg-white border border-amber-100 flex items-center justify-between gap-2 text-xs">
                  <div className="min-w-0 flex-1">
                    <span className="font-bold text-slate-900 block truncate">{lesson.title}</span>
                    <span className="text-[10px] font-medium text-slate-400 font-mono">{lesson.code} • {lesson.level}</span>
                  </div>
                  <button
                    onClick={() => onOpenLesson(lesson.id)}
                    className="px-2 py-1 rounded-lg bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold text-[10px] shrink-0 transition-colors cursor-pointer"
                  >
                    Derse Git
                  </button>
                </div>
              ))}
            </div>
          </div>

          {onOpenMistakeBank && (
            <button
              onClick={onOpenMistakeBank}
              className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs transition-colors shadow-2xs cursor-pointer mt-2"
            >
              <Brain className="w-3.5 h-3.5" />
              <span>Hata Bankasını Aç ({srsStats.totalMistakes})</span>
            </button>
          )}
        </div>

        {/* 3. Sonraki Öğrenme Hedefi */}
        <div className="p-5 rounded-2xl bg-indigo-50/60 border border-indigo-200/80 space-y-3 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-indigo-900 uppercase tracking-wider flex items-center gap-1.5">
                <Target className="w-4 h-4 text-indigo-600" />
                Sıradaki Öğrenme Hedefi
              </span>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-indigo-600 text-white font-mono">
                {nextTargetLesson.code}
              </span>
            </div>

            <h5 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1 leading-snug">
              {nextTargetLesson.title}
            </h5>

            <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
              {nextTargetLesson.learningObjectives[0] || nextTargetLesson.description}
            </p>
          </div>

          <button
            onClick={() => onOpenLesson(nextTargetLesson.id)}
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-700 transition-colors shadow-2xs cursor-pointer mt-2"
          >
            <span>Bu Hedefe Başla</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
