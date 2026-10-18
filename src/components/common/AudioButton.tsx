import React, { useState } from 'react';
import { Volume2 } from 'lucide-react';
import { audioEngine } from '../../services/audioEngine';
import { getSavedSpeechRate, saveSpeechRate, SpeechRate } from '../../utils/speech';

interface AudioButtonProps {
  text: string;
  size?: 'sm' | 'md' | 'lg';
  rate?: SpeechRate;
  showSpeedToggle?: boolean;
  className?: string;
  label?: string;
  lang?: 'en' | 'tr' | 'auto';
}

export const AudioButton: React.FC<AudioButtonProps> = ({
  text,
  size = 'md',
  rate,
  showSpeedToggle = false,
  className = '',
  label,
  lang = 'auto',
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentRate, setCurrentRate] = useState<SpeechRate>(rate ?? getSavedSpeechRate());

  const handleTogglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isPlaying) {
      audioEngine.stop();
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      audioEngine.speakSingle(text, {
        lang,
        rate: currentRate,
        onEnd: () => setIsPlaying(false),
      });
    }
  };

  const cycleSpeed = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextRate: SpeechRate = currentRate === 0.8 ? 1.0 : currentRate === 1.0 ? 1.2 : 0.8;
    setCurrentRate(nextRate);
    saveSpeechRate(nextRate);
    if (isPlaying) {
      audioEngine.speakSingle(text, {
        lang,
        rate: nextRate,
        onEnd: () => setIsPlaying(false),
      });
    }
  };

  const sizeClasses = {
    sm: 'p-1.5 text-xs rounded-lg',
    md: 'p-2 text-xs sm:text-sm rounded-xl',
    lg: 'px-3 py-2 text-sm rounded-xl',
  };

  const iconSizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  return (
    <div className={`inline-flex items-center gap-1.5 ${className}`}>
      <button
        onClick={handleTogglePlay}
        className={`inline-flex items-center gap-1.5 font-bold transition-all cursor-pointer ${sizeClasses[size]} ${
          isPlaying
            ? 'bg-indigo-600 text-white shadow-xs ring-2 ring-indigo-400/40'
            : 'bg-indigo-50/90 text-indigo-700 hover:bg-indigo-100/90 active:scale-95 border border-indigo-200/60'
        }`}
        title={isPlaying ? 'Durdur' : 'Sesli Telaffuz Dinle (Natural Bilingual TTS)'}
      >
        <Volume2 className={`${iconSizes[size]} ${isPlaying ? 'animate-pulse' : ''}`} />
        {label && <span className="font-semibold">{label}</span>}
      </button>

      {showSpeedToggle && (
        <button
          onClick={cycleSpeed}
          className="text-[10px] font-mono font-bold px-1.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-600 border border-slate-200/80 transition-colors cursor-pointer"
          title="Konuşma Hızını Değiştir (0.8x / 1.0x / 1.2x)"
        >
          {currentRate}x
        </button>
      )}
    </div>
  );
};
