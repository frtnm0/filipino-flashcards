import type { DatasetType } from '../types';

const DIALECT_COLORS: Record<string, string> = {
  Ilocano: 'from-teal-500/20 to-teal-600/10 border-teal-500/30 text-teal-300',
  Kapampangan: 'from-orange-500/20 to-orange-600/10 border-orange-500/30 text-orange-300',
  Bisaya: 'from-emerald-500/20 to-emerald-600/10 border-emerald-500/30 text-emerald-300',
  Chabacano: 'from-red-500/20 to-red-600/10 border-red-500/30 text-red-300',
  Ilonggo: 'from-violet-500/20 to-violet-600/10 border-violet-500/30 text-violet-300',
  Bicolano: 'from-amber-500/20 to-amber-600/10 border-amber-500/30 text-amber-300',
};

interface FlashcardOptionProps {
  type: DatasetType;
  count: number;
  onClick: () => void;
}

function FlashcardOption({ type, count, onClick }: FlashcardOptionProps) {
  const isWords = type === 'words';
  return (
    <button
      onClick={onClick}
      className="group relative flex flex-col items-start gap-3 p-5 rounded-2xl bg-surface-800 border border-white/8 hover:border-brand-500/40 hover:bg-surface-700 transition-smooth active:scale-[0.98] text-left overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${isWords ? 'bg-brand-500/20' : 'bg-accent-500/20'}`}>
        {isWords ? '📝' : '💬'}
      </div>
      <div>
        <h3 className="text-text-primary font-semibold font-display">
          {isWords ? 'Common Words' : 'Common Phrases'}
        </h3>
        <p className="text-text-muted text-sm mt-0.5">
          {isWords ? 'Core vocabulary — nouns, verbs, adjectives' : 'Everyday expressions & sentences'}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-brand-500/15 text-brand-300 border border-brand-500/25">
          {count} cards
        </span>
        <span className="text-xs text-text-muted">All 6 dialects</span>
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted group-hover:text-brand-400 transition-smooth">
        <svg className="w-5 h-5 group-hover:translate-x-1 transition-smooth" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </button>
  );
}

interface MainMenuProps {
  onSelectDataset: (type: DatasetType) => void;
  onViewAlphabet: () => void;
  wordCount: number;
  phraseCount: number;
}

const DIALECTS = ['Ilocano', 'Kapampangan', 'Bisaya', 'Chabacano', 'Ilonggo', 'Bicolano'];
const DIALECT_REGIONS: Record<string, string> = {
  Ilocano: 'Ilocos Region',
  Kapampangan: 'Central Luzon',
  Bisaya: 'Visayas / Mindanao',
  Chabacano: 'Zamboanga',
  Ilonggo: 'Western Visayas',
  Bicolano: 'Bicol Region',
};

export function MainMenu({ onSelectDataset, onViewAlphabet, wordCount, phraseCount }: MainMenuProps) {
  return (
    <div className="flex-1 animated-bg">
      <div className="max-w-2xl mx-auto px-4 py-6 space-y-8">

        {/* Hero */}
        <div className="text-center space-y-3 pt-2">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/15 border border-brand-500/25 text-brand-300 text-xs font-medium">
            <span>🇵🇭</span> Tagalog to 6 Philippine Dialects
          </div>
          <h2 className="font-display text-3xl font-bold text-text-primary leading-tight">
            Matuto ng<br />
            <span className="gradient-text">Pilipinong Diyalekto</span>
          </h2>
          <p className="text-text-muted text-sm max-w-xs mx-auto">
            Learn Ilocano, Kapampangan, Bisaya, Chabacano, Ilonggo, and Bicolano from Tagalog
          </p>
        </div>

        {/* Dialect pills */}
        <div className="flex flex-wrap gap-2 justify-center">
          {DIALECTS.map((d) => (
            <div
              key={d}
              className={`flex flex-col items-center px-3 py-2 rounded-xl border bg-gradient-to-b text-xs font-medium ${DIALECT_COLORS[d]}`}
            >
              <span className="font-semibold">{d}</span>
              <span className="opacity-70 text-[10px]">{DIALECT_REGIONS[d]}</span>
            </div>
          ))}
        </div>

        {/* Section 1: Alphabet */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-gold-500/20 flex items-center justify-center text-sm">①</div>
            <h2 className="font-display text-lg font-bold text-text-primary">Alpabeto / Alphabet</h2>
          </div>
          <p className="text-text-muted text-sm pl-8">
            Reference guide for letters in each dialect, special characters, and writing systems
          </p>
          <button
            onClick={onViewAlphabet}
            className="group w-full flex items-center gap-4 p-5 rounded-2xl bg-surface-800 border border-white/8 hover:border-gold-500/40 hover:bg-surface-700 transition-smooth active:scale-[0.98] text-left overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
            <div className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center text-2xl flex-shrink-0">
              🔤
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-text-primary font-semibold font-display">Dialect Alphabet Guide</h3>
              <p className="text-text-muted text-sm mt-0.5">Compare letters, special characters & writing systems</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gold-500/15 text-gold-400 border border-gold-500/25">
                  6 dialects
                </span>
                <span className="text-xs text-text-muted">+ feature notes</span>
              </div>
            </div>
            <svg className="w-5 h-5 text-text-muted group-hover:text-gold-400 group-hover:translate-x-1 transition-smooth flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </section>

        {/* Section 2: Flashcards */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-brand-500/20 flex items-center justify-center text-sm">②</div>
            <h2 className="font-display text-lg font-bold text-text-primary">Flashcards</h2>
          </div>
          <p className="text-text-muted text-sm pl-8">
            Tap a card to flip it and see translations across all 6 dialects
          </p>
          <div className="grid gap-3">
            <FlashcardOption type="words" count={wordCount} onClick={() => onSelectDataset('words')} />
            <FlashcardOption type="phrases" count={phraseCount} onClick={() => onSelectDataset('phrases')} />
          </div>
        </section>

        {/* Footer note */}
        <div className="text-center pb-4">
          <p className="text-text-muted text-xs">
            Tap any flashcard to reveal all dialect translations 🌏
          </p>
        </div>

      </div>
    </div>
  );
}
