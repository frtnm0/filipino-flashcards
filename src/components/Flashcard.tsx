import { useState, useCallback } from 'react';
import type { LanguageData, FlashcardMode } from '../types';

const DIALECT_ORDER = ['ilocano', 'kapampangan', 'bisaya', 'chabacano', 'ilonggo', 'bicolano'] as const;

const DIALECT_LABELS: Record<string, string> = {
  tagalog: 'Tagalog',
  ilocano: 'Ilocano',
  kapampangan: 'Kapampangan',
  bisaya: 'Bisaya',
  chabacano: 'Chabacano',
  ilonggo: 'Ilonggo',
  bicolano: 'Bicolano',
};

const DIALECT_BADGE_CLASS: Record<string, string> = {
  ilocano: 'badge-ilocano',
  kapampangan: 'badge-kapampangan',
  bisaya: 'badge-bisaya',
  chabacano: 'badge-chabacano',
  ilonggo: 'badge-ilonggo',
  bicolano: 'badge-bicolano',
};

interface FlashcardProps {
  card: LanguageData;
  cardIndex: number;
  total: number;
  mode: FlashcardMode;
  onNext: () => void;
  onPrev: () => void;
  onToggleMode: () => void;
}

export function Flashcard({ card, cardIndex, total, mode, onNext, onPrev, onToggleMode }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = useCallback(() => {
    setIsFlipped(prev => !prev);
  }, []);

  const handleNext = useCallback(() => {
    setIsFlipped(false);
    setTimeout(onNext, 150);
  }, [onNext]);

  const handlePrev = useCallback(() => {
    setIsFlipped(false);
    setTimeout(onPrev, 150);
  }, [onPrev]);

  return (
    <div className="flex flex-col items-center gap-5 w-full animate-fade-in">
      {/* Mode toggle + counter row */}
      <div className="w-full flex items-center justify-between">
        {/* Mode toggle */}
        <button
          onClick={onToggleMode}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-white/10 text-xs font-medium hover:border-brand-500/40 transition-smooth"
        >
          {mode === 'sequential' ? (
            <>
              <svg className="w-3.5 h-3.5 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18" />
              </svg>
              <span className="text-text-secondary">Sequential</span>
            </>
          ) : (
            <>
              <svg className="w-3.5 h-3.5 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span className="text-accent-400">Random</span>
            </>
          )}
        </button>

        {/* Counter */}
        <div className="flex items-center gap-2 text-sm">
          <span className="font-semibold text-text-primary font-display">{cardIndex + 1}</span>
          <span className="text-text-muted">/</span>
          <span className="text-text-muted">{total}</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full h-1 bg-surface-600 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-brand-500 to-accent-500 rounded-full transition-all duration-300"
          style={{ width: `${((cardIndex + 1) / total) * 100}%` }}
        />
      </div>

      {/* Flip card */}
      <div
        className="flip-card w-full cursor-pointer select-none"
        style={{ height: '400px' }}
        onClick={handleFlip}
        role="button"
        tabIndex={0}
        aria-label={isFlipped ? 'Showing translations, tap to flip back' : 'Tap to see translations'}
        onKeyDown={(e) => e.key === 'Enter' || e.key === ' ' ? handleFlip() : undefined}
      >
        <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
          {/* Front - Tagalog word */}
          <div className="flip-card-front bg-gradient-to-br from-surface-700 to-surface-800 border border-white/8 flex flex-col items-center justify-center gap-4 p-8">
            <div className="absolute top-4 left-4">
              <span className="text-xs font-medium px-2 py-1 rounded-full badge-tagalog border">Tagalog</span>
            </div>
            <div className="absolute top-4 right-4 text-text-muted text-xs">
              Tap to flip →
            </div>
            <div className="text-center space-y-3">
              <p className="font-display font-bold text-5xl text-text-primary leading-tight">
                {card.tagalog}
              </p>
              <p className="text-text-muted text-sm">
                Tap to see in all 6 dialects
              </p>
            </div>
            {/* Decorative */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-500/5 to-transparent pointer-events-none" />
            <div className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full bg-brand-500/5 pointer-events-none" />
          </div>

          {/* Back - all dialects */}
          <div className="flip-card-back bg-gradient-to-br from-surface-700 to-surface-800 border border-brand-500/20 overflow-y-auto">
            <div className="p-5 space-y-2">
              <div className="text-center mb-4">
                <p className="font-display font-bold text-2xl text-text-primary">{card.tagalog}</p>
                <p className="text-xs text-text-muted">Tagalog → All Dialects</p>
              </div>
              <div className="grid grid-cols-1 gap-2">
                {DIALECT_ORDER.map((dialect) => (
                  <div
                    key={dialect}
                    className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-surface-900/60 border border-white/5"
                  >
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${DIALECT_BADGE_CLASS[dialect]}`}>
                      {DIALECT_LABELS[dialect]}
                    </span>
                    <span className="font-semibold text-text-primary text-right">
                      {card[dialect]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-4 w-full">
        <button
          onClick={handlePrev}
          disabled={mode === 'random'}
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-surface-700 border border-white/8 text-text-secondary font-medium transition-smooth hover:bg-surface-600 hover:border-white/15 active:scale-[0.98] disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Prev
        </button>

        <button
          onClick={handleFlip}
          className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500 to-accent-600 flex items-center justify-center shadow-glow transition-smooth hover:scale-105 active:scale-95 flex-shrink-0"
          aria-label="Flip card"
        >
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>

        <button
          onClick={handleNext}
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-brand-500/20 border border-brand-500/30 text-brand-300 font-medium transition-smooth hover:bg-brand-500/30 hover:border-brand-500/50 active:scale-[0.98]"
        >
          Next
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
