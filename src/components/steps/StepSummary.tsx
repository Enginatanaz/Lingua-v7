import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Award, 
  Sparkles, 
  ArrowRight, 
  RotateCcw, 
  BookOpen, 
  Check, 
  Flame,
  Share2,
  Brain
} from 'lucide-react';
import { LessonData } from '../../types/lesson';
import { getSRSStats } from '../../services/srsEngine';

interface StepSummaryProps {
  lesson: LessonData;
  isCompleted: boolean;
  onCompleteLesson: () => void;
  onNextLesson: () => void;
  onRestartLesson: () => void;
  onOpenMistakeBank?: () => void;
}

export const StepSummary: React.FC<StepSummaryProps> = ({
  lesson,
  isCompleted,
  onCompleteLesson,
  onNextLesson,
  onRestartLesson,
  onOpenMistakeBank,
}) => {
  const [justCompleted, setJustCompleted] = useState(false);
  const srsStats = getSRSStats();

  const handleFinish = () => {
    onCompleteLesson();
    setJustCompleted(true);
  };

  return (
    <div className="space-y-6 animate-fadeIn max-w-4xl mx-auto">
      {/* Celebration Header */}
      <div className="rounded-2xl bg-gradient-to-br from-indigo-900 via-indigo-800 to-emerald-900 text-white p-6 sm:p-8 shadow-md relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-56 h-56 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 border border-emerald-300/30 text-xs font-bold mb-4">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Tebrikler! Ders Sonu Aşaması</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
            {lesson.title} Başarıyla Tamamlandı!
          </h2>

          <p className="text-indigo-100 text-sm sm:text-base leading-relaxed mb-6 font-normal">
            Bu derste kritik kuralları incelediniz, telaffuzları dinlediniz ve interaktif pratikleri eksiksiz geçtiniz.
          </p>

          {/* XP & Rewards Banner */}
          <div className="inline-flex items-center gap-4 p-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-amber-300" />
              <div>
                <span className="text-[11px] text-slate-300 block">Kazanılan Ödül</span>
                <span className="text-base font-extrabold text-amber-300">+{lesson.xpReward} XP</span>
              </div>
            </div>

            <div className="h-8 w-px bg-white/20" />

            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5 text-amber-400" />
              <div>
                <span className="text-[11px] text-slate-300 block">Çalışma Serisi</span>
                <span className="text-base font-extrabold text-white">+1 Gün</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SRS MistakeBank Status Callout */}
      {srsStats.totalMistakes > 0 && (
        <div className="bg-amber-50/70 border border-amber-200/90 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xs">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-2xs">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                Aralıklı Tekrar Kuyruğu (Spaced Repetition)
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                Hata Bankanızda <strong>{srsStats.dueCount}</strong> adet tekrar bekleyen soru bulunuyor. Hafızayı tazelemek için pratik yapabilirsiniz.
              </p>
            </div>
          </div>

          {onOpenMistakeBank && (
            <button
              onClick={onOpenMistakeBank}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs sm:text-sm shadow-xs transition-colors cursor-pointer shrink-0"
            >
              <span>Hataları İncele</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      )}

      {/* Summary Takeaways Checklist */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-100 pb-4 mb-5">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
            <span className="w-2.5 h-6 bg-indigo-600 rounded-full inline-block" />
            Dersin Ana Kazanımları ve Özet Notları
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Gerektiğinde geriye dönüp hatırlayabilmeniz için ders özeti
          </p>
        </div>

        <div className="space-y-3">
          {lesson.summaryTakeaways.map((takeaway, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
              <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                ✓
              </div>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                {takeaway}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Completion & Next Lesson Action Toolbar */}
      <div className="p-5 bg-white rounded-2xl border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          onClick={onRestartLesson}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-xs sm:text-sm hover:bg-slate-50 transition-colors cursor-pointer"
        >
          <RotateCcw className="w-4 h-4 text-slate-500" />
          <span>Bu Dersi Yeniden İncele</span>
        </button>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          {!isCompleted && !justCompleted ? (
            <button
              onClick={handleFinish}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700 active:scale-98 transition-all shadow-sm hover:shadow-md cursor-pointer"
            >
              <Check className="w-4 h-4" />
              <span>Dersi Tamamla & XP Kazan</span>
            </button>
          ) : (
            <button
              onClick={onNextLesson}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 text-white font-bold text-sm hover:bg-indigo-700 active:scale-98 transition-all shadow-sm hover:shadow-md cursor-pointer"
            >
              <span>Sonraki Derse Geç</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
