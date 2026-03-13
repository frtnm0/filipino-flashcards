import type { View } from '../types';

interface HeaderProps {
  view: View;
  onBack: () => void;
}

const viewTitles: Record<View, string> = {
  menu: 'Dyalekto',
  alphabet: 'Alpabeto',
  flashcard: 'Flashcards',
};

export function Header({ view, onBack }: HeaderProps) {
  return (
    <header className="glass sticky top-0 z-50 border-b border-white/5">
      <div className="max-w-4xl mx-auto px-4 h-14 flex items-center gap-3">
        {view !== 'menu' && (
          <button
            onClick={onBack}
            className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 transition-smooth active:scale-95"
            aria-label="Back to main menu"
          >
            <svg className="w-5 h-5 text-brand-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {view === 'menu' && (
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-500 to-accent-600 flex items-center justify-center text-sm">
              🇵🇭
            </div>
          </div>
        )}

        <div className="flex-1 min-w-0">
          <h1
            className={`font-display font-bold truncate ${
              view === 'menu'
                ? 'text-xl gradient-text'
                : 'text-base text-text-primary'
            }`}
          >
            {viewTitles[view]}
          </h1>
          {view === 'menu' && (
            <p className="text-xs text-text-muted leading-none mt-0.5">
              Filipino Dialect Flashcards
            </p>
          )}
        </div>

        {view === 'menu' && (
          <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/5 border border-white/10">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-slow" />
            <span className="text-xs text-text-muted font-medium">6 Dialects</span>
          </div>
        )}
      </div>
    </header>
  );
}
