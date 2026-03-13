import { useState, useCallback } from 'react';
import type { LanguageData, FlashcardMode, DatasetType } from '../types';
import { Flashcard } from './Flashcard';

interface FlashcardViewProps {
  data: LanguageData[];
  type: DatasetType;
}

function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function FlashcardView({ data, type }: FlashcardViewProps) {
  const [mode, setMode] = useState<FlashcardMode>('sequential');
  const [index, setIndex] = useState(0);
  const [randomOrder, setRandomOrder] = useState<number[]>(() =>
    shuffleArray([...Array(data.length).keys()])
  );

  const currentIndex = mode === 'sequential' ? index : randomOrder[index];
  const currentCard = data[currentIndex];

  const handleNext = useCallback(() => {
    setIndex(prev => {
      if (prev < data.length - 1) return prev + 1;
      // Reshuffle on wrap-around in random mode
      if (mode === 'random') setRandomOrder(shuffleArray([...Array(data.length).keys()]));
      return 0;
    });
  }, [data.length, mode]);

  const handlePrev = useCallback(() => {
    setIndex(prev => (prev > 0 ? prev - 1 : data.length - 1));
  }, [data.length]);

  const handleToggleMode = useCallback(() => {
    setMode(prev => {
      if (prev === 'sequential') {
        setRandomOrder(shuffleArray([...Array(data.length).keys()]));
        setIndex(0);
        return 'random';
      }
      setIndex(0);
      return 'sequential';
    });
  }, [data.length]);

  const label = type === 'words' ? 'Common Words' : 'Common Phrases';
  const emoji = type === 'words' ? '📝' : '💬';

  return (
    <div className="flex-1 animated-bg">
      <div className="max-w-2xl mx-auto px-4 py-5 flex flex-col gap-5">
        {/* Dataset label */}
        <div className="flex items-center gap-2">
          <span className="text-lg">{emoji}</span>
          <span className="font-display font-semibold text-text-secondary text-sm">{label}</span>
          {mode === 'random' && (
            <span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-accent-500/20 border border-accent-500/30 text-accent-400">
              🔀 Shuffle On
            </span>
          )}
        </div>

        <Flashcard
          card={currentCard}
          cardIndex={index}
          total={data.length}
          mode={mode}
          onNext={handleNext}
          onPrev={handlePrev}
          onToggleMode={handleToggleMode}
        />

        {/* Swipe hint */}
        <p className="text-center text-text-muted text-xs">
          Tap card to flip • Use buttons to navigate
        </p>
      </div>
    </div>
  );
}
