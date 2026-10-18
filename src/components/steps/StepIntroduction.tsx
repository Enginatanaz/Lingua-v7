import React from 'react';
import { 
  Sparkles, 
  Target, 
  Clock, 
  Award, 
  BookOpen, 
  ArrowRight,
  CheckCircle,
  Lightbulb
} from 'lucide-react';
import { LessonData } from '../../types/lesson';

interface StepIntroductionProps {
  lesson: LessonData;
  onStartLecture: () => void;
}

export const StepIntroduction: React.FC<StepIntroductionProps> = ({
  lesson,
  onStartLecture,
}) => {
  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Hero Welcome Card */}
      <div className="rounded-2xl bg-gradient-to-br from-indigo-900 via-indigo-800 to-slate-900 text-white p-6 sm:p-8 shadow-md relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-indigo-200 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Ders Başlangıcı & Hazırlık</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-3 leading-snug">
            {lesson.title}
          </h2>

          <p className="text-indigo-100 text-sm sm:text-base leading-relaxed mb-6 font-normal">
            {lesson.teacherLecture.introduction}
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-3 p-3 rounded-xl bg-white/5 border border-white/10 text-center">
            <div className="flex flex-col items-center justify-center p-2">
              <span className="flex items-center gap-1 text-slate-300 text-xs font-medium">
                <Clock className="w-3.5 h-3.5 text-indigo-300" /> Süre
              </span>
              <span className="font-bold text-sm text-white mt-0.5">~{lesson.estimatedMinutes} dk</span>
            </div>

            <div className="flex flex-col items-center justify-center p-2 border-x border-white/10">
              <span className="flex items-center gap-1 text-slate-300 text-xs font-medium">
                <Award className="w-3.5 h-3.5 text-amber-300" /> Ödül
              </span>
              <span className="font-bold text-sm text-amber-300 mt-0.5">+{lesson.xpReward} XP</span>
            </div>

            <div className="flex flex-col items-center justify-center p-2">
              <span className="flex items-center gap-1 text-slate-300 text-xs font-medium">
                <Target className="w-3.5 h-3.5 text-emerald-300" /> Seviye
              </span>
              <span className="font-bold text-sm text-white mt-0.5">{lesson.level}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Objectives Checklist */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
            <Target className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-base">Bu Derste Neler Kazanacaksınız?</h3>
            <p className="text-xs text-slate-500">Dersi tamamladığınızda sahip olacağınız beceriler</p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
            <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
            <div className="text-sm text-slate-800">
              <span className="font-semibold text-slate-900">Temel Amaç: </span>
              {lesson.learningObjective}
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
            <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
            <div className="text-sm text-slate-800">
              <span className="font-semibold text-slate-900">Kavram Mantığı: </span>
              {lesson.teacherLecture.coreConcept.title} konusunun arkasındaki dil mantığını kavramak ve Türkçeden doğrudan çeviri tuzaklarından kurtulmak.
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
            <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
            <div className="text-sm text-slate-800">
              <span className="font-semibold text-slate-900">Uygulama & Konuşma: </span>
              {lesson.examples.length} model cümle ve {lesson.exercises.length} alıştırma ile öğrenilen yapıyı otomatik refleks haline getirmek.
            </div>
          </div>
        </div>
      </div>

      {/* Teacher's Preparation Note */}
      <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-5 flex items-start gap-3.5">
        <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <h4 className="font-bold text-amber-900 text-sm">Öğretmen Tavsiyesi</h4>
          <p className="text-xs sm:text-sm text-amber-800 mt-1 leading-relaxed">
            Ders anlatımını acele etmeden, formülleri ve örnekleri sesli okuyarak inceleyin. Örnek cümlelerdeki ses butonuna tıklayarak telaffuzları dinleyin ve ardından kendi cümlenizi kurmaya geçin.
          </p>
        </div>
      </div>

      {/* Action CTA */}
      <div className="pt-2 flex justify-end">
        <button
          onClick={onStartLecture}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 text-white font-bold text-sm hover:bg-indigo-700 active:scale-98 transition-all shadow-sm hover:shadow-md cursor-pointer"
        >
          <span>Öğretmen Anlatımına Başla</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
