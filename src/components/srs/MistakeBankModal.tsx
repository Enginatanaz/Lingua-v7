import React, { useState, useEffect, useMemo } from 'react';
import { 
  X, 
  Brain, 
  RotateCcw, 
  Check, 
  AlertTriangle, 
  CheckCircle2, 
  Sparkles, 
  Calendar, 
  BookOpen, 
  Trash2,
  HelpCircle,
  ExternalLink,
  Zap,
  Tag
} from 'lucide-react';
import { MistakeRecord, MistakeErrorCategory } from '../../types/srs';
import { getAllMistakes, recordMistakeReview, removeMistake, clearMasteredMistakes, resolveMistake } from '../../services/srsEngine';
import { AudioButton } from '../common/AudioButton';
import { CEFRLevel } from '../../types/lesson';

interface MistakeBankModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToLesson: (lessonId: number) => void;
}

export const MistakeBankModal: React.FC<MistakeBankModalProps> = ({
  isOpen,
  onClose,
  onNavigateToLesson,
}) => {
  const [mistakes, setMistakes] = useState<MistakeRecord[]>([]);
  const [filterLevel, setFilterLevel] = useState<CEFRLevel | 'ALL'>('ALL');
  const [filterStatus, setFilterStatus] = useState<'ALL' | 'due' | 'mastered' | 'resolved'>('ALL');
  const [filterCategory, setFilterCategory] = useState<'ALL' | MistakeErrorCategory>('ALL');
  const [quizItem, setQuizItem] = useState<MistakeRecord | null>(null);
  const [showQuizAnswer, setShowQuizAnswer] = useState(false);
  const [activeRemedialItem, setActiveRemedialItem] = useState<MistakeRecord | null>(null);
  const [remedialSelectedOpt, setRemedialSelectedOpt] = useState<string | null>(null);

  const reloadData = () => {
    setMistakes(getAllMistakes());
  };

  useEffect(() => {
    if (isOpen) {
      reloadData();
    }
  }, [isOpen]);

  const filteredMistakes = useMemo(() => {
    return mistakes.filter((m) => {
      const matchLevel = filterLevel === 'ALL' || m.level === filterLevel;
      const matchCategory = filterCategory === 'ALL' || m.errorCategory === filterCategory;
      const matchStatus = 
        filterStatus === 'ALL' 
          ? true 
          : filterStatus === 'due' 
          ? m.status === 'due' || (m.status === 'reviewed' && m.nextReviewDate <= Date.now())
          : filterStatus === 'resolved'
          ? m.status === 'resolved'
          : m.status === 'mastered';
      return matchLevel && matchStatus && matchCategory;
    });
  }, [mistakes, filterLevel, filterStatus, filterCategory]);

  const dueCount = useMemo(() => {
    const now = Date.now();
    return mistakes.filter((m) => m.status === 'due' || (m.status === 'reviewed' && m.nextReviewDate <= now)).length;
  }, [mistakes]);

  const masteredCount = useMemo(() => {
    return mistakes.filter((m) => m.status === 'mastered').length;
  }, [mistakes]);

  const resolvedCount = useMemo(() => {
    return mistakes.filter((m) => m.status === 'resolved').length;
  }, [mistakes]);

  if (!isOpen) return null;

  const startQuiz = (item: MistakeRecord) => {
    setQuizItem(item);
    setShowQuizAnswer(false);
    setActiveRemedialItem(null);
  };

  const handleQuizResult = (wasCorrect: boolean) => {
    if (!quizItem) return;
    recordMistakeReview(quizItem.id, wasCorrect);
    reloadData();
    setShowQuizAnswer(false);
    setQuizItem(null);
  };

  const handleDelete = (id: string) => {
    removeMistake(id);
    reloadData();
  };

  const handleClearMastered = () => {
    clearMasteredMistakes();
    reloadData();
  };

  const handleSolveRemedial = (item: MistakeRecord, opt: string) => {
    setRemedialSelectedOpt(opt);
    const isCorrect = opt.trim().toLowerCase() === item.remedialQuestion?.correctAnswer.trim().toLowerCase();
    if (isCorrect) {
      resolveMistake(item.id);
      setTimeout(() => {
        reloadData();
        setActiveRemedialItem(null);
        setRemedialSelectedOpt(null);
      }, 1500);
    }
  };

  const categoryBadges: Record<string, { label: string; bg: string; text: string }> = {
    grammatical: { label: 'Dil Bilgisi', bg: 'bg-purple-100', text: 'text-purple-800' },
    lexical: { label: 'Kelime & Eşdizim', bg: 'bg-emerald-100', text: 'text-emerald-800' },
    structural: { label: 'Cümle Yapısı', bg: 'bg-indigo-100', text: 'text-indigo-800' },
    spelling_phonological: { label: 'Yazım & Fonetik', bg: 'bg-amber-100', text: 'text-amber-800' },
    pragmatic_nuance: { label: 'Bağlamsal Üslup', bg: 'bg-sky-100', text: 'text-sky-800' },
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden animate-fadeIn">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl flex flex-col max-h-[90vh] z-10 overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-200/80 bg-slate-50/90 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-xs">
              <Brain className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                  Hata Bankası & Akıllı Teşhis (MistakeBank)
                </h2>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
                  {mistakes.length} Kayıt
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Hatalar türlerine göre sınıflandırılır ve aralıklı tekrar (SM-2) ile telafi alıştırmalarına dönüştürülür
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* SRS Stats Summary Bar */}
        <div className="grid grid-cols-4 gap-2 p-3 sm:p-4 bg-amber-50/40 border-b border-amber-100/80 text-center text-xs">
          <div className="p-2 rounded-xl bg-white border border-amber-200/60">
            <span className="text-[10px] font-bold text-slate-500 uppercase block">Toplam Hata</span>
            <span className="text-base font-extrabold text-slate-800">{mistakes.length}</span>
          </div>

          <div className="p-2 rounded-xl bg-white border border-amber-200/60">
            <span className="text-[10px] font-bold text-amber-700 uppercase block">Tekrar Bekleyen</span>
            <span className="text-base font-extrabold text-amber-600">{dueCount}</span>
          </div>

          <div className="p-2 rounded-xl bg-white border border-indigo-200/60">
            <span className="text-[10px] font-bold text-indigo-700 uppercase block">Telafi Edildi</span>
            <span className="text-base font-extrabold text-indigo-600">{resolvedCount}</span>
          </div>

          <div className="p-2 rounded-xl bg-white border border-emerald-200/60">
            <span className="text-[10px] font-bold text-emerald-700 uppercase block">Ustalık (Mastered)</span>
            <span className="text-base font-extrabold text-emerald-600">{masteredCount}</span>
          </div>
        </div>

        {/* Filter controls */}
        <div className="p-4 border-b border-slate-100 bg-white space-y-2">
          {/* CEFR Level filter */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-1 overflow-x-auto scrollbar-none pb-1">
              {(['ALL', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as const).map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setFilterLevel(lvl)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    filterLevel === lvl
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {lvl === 'ALL' ? 'Tüm Seviyeler' : lvl}
                </button>
              ))}
            </div>

            {/* Status filter */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs">
              <button
                onClick={() => setFilterStatus('ALL')}
                className={`px-2 py-1 rounded-lg font-semibold transition-all cursor-pointer ${
                  filterStatus === 'ALL' ? 'bg-white shadow-xs text-slate-900' : 'text-slate-600'
                }`}
              >
                Tümü
              </button>
              <button
                onClick={() => setFilterStatus('due')}
                className={`px-2 py-1 rounded-lg font-semibold transition-all cursor-pointer ${
                  filterStatus === 'due' ? 'bg-amber-500 text-white shadow-xs' : 'text-slate-600'
                }`}
              >
                Tekrar Zamanı ({dueCount})
              </button>
              <button
                onClick={() => setFilterStatus('resolved')}
                className={`px-2 py-1 rounded-lg font-semibold transition-all cursor-pointer ${
                  filterStatus === 'resolved' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-600'
                }`}
              >
                Çözüldü ({resolvedCount})
              </button>
              <button
                onClick={() => setFilterStatus('mastered')}
                className={`px-2 py-1 rounded-lg font-semibold transition-all cursor-pointer ${
                  filterStatus === 'mastered' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-600'
                }`}
              >
                Usta ({masteredCount})
              </button>
            </div>
          </div>

          {/* Error Category Filter */}
          <div className="flex items-center gap-1.5 overflow-x-auto text-[11px] pt-1">
            <span className="text-slate-400 font-semibold uppercase text-[10px] shrink-0">Hata Türü:</span>
            <button
              onClick={() => setFilterCategory('ALL')}
              className={`px-2 py-0.5 rounded-md font-semibold transition-all cursor-pointer ${
                filterCategory === 'ALL' ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-600'
              }`}
            >
              Tümü
            </button>
            {(['grammatical', 'lexical', 'structural', 'spelling_phonological', 'pragmatic_nuance'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-2 py-0.5 rounded-md font-semibold transition-all cursor-pointer ${
                  filterCategory === cat ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {categoryBadges[cat]?.label || cat}
              </button>
            ))}
          </div>
        </div>

        {/* Modal Body / Quiz Mode or Mistakes List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {/* REMEDIAL DRILL MODAL OVERLAY */}
          {activeRemedialItem && activeRemedialItem.remedialQuestion && (
            <div className="bg-indigo-50/90 rounded-2xl border-2 border-indigo-300 p-5 shadow-md space-y-3 animate-fadeIn">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-indigo-600 text-white uppercase tracking-wider">
                  Anında Telafi Pratiği (Remedial Drill)
                </span>
                <button
                  onClick={() => setActiveRemedialItem(null)}
                  className="text-xs font-semibold text-slate-500 hover:text-slate-800"
                >
                  Kapat ✕
                </button>
              </div>

              <h4 className="text-sm font-bold text-slate-900">
                {activeRemedialItem.remedialQuestion.prompt}
              </h4>

              {activeRemedialItem.remedialQuestion.sentence && (
                <p className="text-sm font-mono p-3 bg-white rounded-xl border border-indigo-100 font-semibold text-slate-900">
                  {activeRemedialItem.remedialQuestion.sentence}
                </p>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {activeRemedialItem.remedialQuestion.options?.map((opt, oIdx) => {
                  const isSelected = remedialSelectedOpt === opt;
                  const isCorrect = opt.trim().toLowerCase() === activeRemedialItem.remedialQuestion!.correctAnswer.trim().toLowerCase();
                  return (
                    <button
                      key={oIdx}
                      onClick={() => handleSolveRemedial(activeRemedialItem, opt)}
                      className={`p-3 rounded-xl border text-xs font-bold text-left transition-all cursor-pointer ${
                        remedialSelectedOpt
                          ? isCorrect
                            ? 'bg-emerald-600 text-white border-emerald-700'
                            : isSelected
                            ? 'bg-rose-100 text-rose-800 border-rose-300'
                            : 'bg-white border-slate-200 text-slate-400'
                          : 'bg-white border-slate-200 hover:border-indigo-400 hover:bg-indigo-50 text-slate-800'
                      }`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {remedialSelectedOpt && (
                <div className="p-3 rounded-xl bg-white border border-emerald-200 text-xs text-emerald-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{activeRemedialItem.remedialQuestion.explanation} (Hata Bankasında Çözüldü Olarak İşaretlendi)</span>
                </div>
              )}
            </div>
          )}

          {/* QUIZ FLASHCARD OVERLAY */}
          {quizItem && (
            <div className="bg-gradient-to-br from-indigo-50/80 via-white to-amber-50/50 rounded-2xl border-2 border-indigo-200 p-6 shadow-sm space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-indigo-100 text-indigo-800">
                  {quizItem.level} — {quizItem.lessonCode}: {quizItem.lessonTitle}
                </span>
                <button
                  onClick={() => setQuizItem(null)}
                  className="text-xs font-semibold text-slate-500 hover:text-slate-800"
                >
                  Geri Dön ✕
                </button>
              </div>

              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Soru / Yönerge:
                </p>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  {quizItem.prompt}
                </h3>
              </div>

              {quizItem.sentence && (
                <div className="p-4 rounded-xl bg-white border border-slate-200 text-base font-semibold text-slate-800 flex items-center justify-between gap-3">
                  <span>{quizItem.sentence}</span>
                  <AudioButton text={quizItem.sentence} size="sm" showSpeedToggle />
                </div>
              )}

              {!showQuizAnswer ? (
                <div className="pt-4 flex justify-center">
                  <button
                    onClick={() => setShowQuizAnswer(true)}
                    className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-bold text-sm hover:bg-indigo-700 shadow-sm transition-all cursor-pointer"
                  >
                    Cevabı ve Teşhisi Göster
                  </button>
                </div>
              ) : (
                <div className="space-y-4 pt-2 border-t border-indigo-100 animate-fadeIn">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200">
                      <span className="text-[10px] font-bold text-rose-700 uppercase block">Önceki Yanlış Cevabınız</span>
                      <span className="text-sm font-semibold text-rose-900 line-through">{quizItem.userWrongAnswer}</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-bold text-emerald-700 uppercase block">Doğru Cevap</span>
                        <span className="text-sm font-bold text-emerald-900">{quizItem.correctAnswer}</span>
                      </div>
                      <AudioButton text={quizItem.correctAnswer} size="sm" />
                    </div>
                  </div>

                  {quizItem.diagnosis && (
                    <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-slate-800">
                      <strong className="block text-amber-900 mb-0.5">Pedagojik Hata Teşhisi:</strong>
                      {quizItem.diagnosis}
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                    <span className="text-xs text-slate-500 font-medium">Bu soruyu şimdi hatırladınız mı?</span>
                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      <button
                        onClick={() => handleQuizResult(false)}
                        className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl border border-rose-200 text-rose-700 hover:bg-rose-50 font-bold text-xs transition-colors cursor-pointer"
                      >
                        ✕ Hatırlayamadım
                      </button>
                      <button
                        onClick={() => handleQuizResult(true)}
                        className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 font-bold text-xs transition-colors shadow-xs cursor-pointer"
                      >
                        ✓ Hatırladım (+SRS İlerlemesi)
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* LIST OF RECORDED MISTAKES */}
          {filteredMistakes.length === 0 ? (
            <div className="text-center py-12 px-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-3 border border-emerald-100">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-base font-bold text-slate-800">
                Harika! Bu filtrede kayıtlı hata bulunmuyor.
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto mt-1">
                Alıştırmalarda yapacağınız hatalar teşhis edilerek otomatik olarak bu hafıza merkezinde toplanır.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredMistakes.map((item) => {
                const isDue = item.status === 'due' || (item.status === 'reviewed' && item.nextReviewDate <= Date.now());
                const isMastered = item.status === 'mastered';
                const isResolved = item.status === 'resolved';

                return (
                  <div
                    key={item.id}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                      isMastered
                        ? 'bg-emerald-50/40 border-emerald-200'
                        : isResolved
                        ? 'bg-indigo-50/40 border-indigo-200'
                        : isDue
                        ? 'bg-amber-50/50 border-amber-200 shadow-2xs'
                        : 'bg-white border-slate-200'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                          {item.level}
                        </span>
                        <span className="text-xs font-semibold text-slate-700">
                          {item.lessonCode} — {item.lessonTitle}
                        </span>
                        {item.errorCategory && categoryBadges[item.errorCategory] && (
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${categoryBadges[item.errorCategory].bg} ${categoryBadges[item.errorCategory].text}`}>
                            {categoryBadges[item.errorCategory].label}
                          </span>
                        )}
                        {isDue && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                            Tekrar Zamanı
                          </span>
                        )}
                        {isResolved && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800">
                            ✓ Telafi Edildi
                          </span>
                        )}
                        {isMastered && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                            ✓ Ustalık
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 self-end sm:self-center">
                        {item.remedialQuestion && !isResolved && (
                          <button
                            onClick={() => setActiveRemedialItem(item)}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 hover:bg-indigo-100 font-bold text-xs transition-colors cursor-pointer"
                          >
                            <Zap className="w-3 h-3 text-indigo-600" />
                            <span>Telafi Et</span>
                          </button>
                        )}

                        <button
                          onClick={() => {
                            onClose();
                            onNavigateToLesson(item.lessonId);
                          }}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-slate-600 hover:text-indigo-600 hover:bg-slate-100 text-xs font-semibold transition-colors cursor-pointer"
                          title="Bu derse git"
                        >
                          <ExternalLink className="w-3 h-3" />
                          <span>Derse Git</span>
                        </button>

                        <button
                          onClick={() => handleDelete(item.id)}
                          className="p-1 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-slate-100 transition-colors cursor-pointer"
                          title="Hata kaydını sil"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm font-semibold text-slate-800 mb-2">
                      {item.prompt}
                    </p>

                    {item.sentence && (
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm font-mono text-slate-700 mb-2 flex items-center justify-between">
                        <span>{item.sentence}</span>
                        <AudioButton text={item.sentence} size="sm" />
                      </div>
                    )}

                    {item.diagnosis && (
                      <p className="text-xs text-slate-600 bg-white/80 p-2.5 rounded-xl border border-slate-100 mb-2">
                        <strong className="text-slate-800">Teşhis: </strong>
                        {item.diagnosis}
                      </p>
                    )}

                    <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 text-xs">
                      <div className="flex items-center gap-3">
                        <span className="text-rose-700">Yanlışınız: <del className="font-semibold">{item.userWrongAnswer}</del></span>
                        <span className="text-emerald-700 font-bold">Doğrusu: {item.correctAnswer}</span>
                      </div>

                      <button
                        onClick={() => startQuiz(item)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs transition-colors shadow-2xs cursor-pointer"
                      >
                        <Brain className="w-3.5 h-3.5" />
                        <span>SRS Tekrarını Çöz</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
