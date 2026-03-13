import { useState } from 'react';
import { alphabetNotes, dialectFeatures, uniqueWords } from '../data/alphabets';

const TABS = ['Overview', 'Features', 'Unique Words'] as const;
type Tab = typeof TABS[number];

export function AlphabetChart() {
  const [activeTab, setActiveTab] = useState<Tab>('Overview');
  const [expandedDialect, setExpandedDialect] = useState<string | null>(null);

  const DIALECT_COLORS: Record<string, string> = {
    'Tagalog / Filipino': 'text-brand-300 bg-brand-500/15 border-brand-500/30',
    'Ilocano': 'text-teal-300 bg-teal-500/15 border-teal-500/30',
    'Kapampangan': 'text-orange-300 bg-orange-500/15 border-orange-500/30',
    'Bisaya / Cebuano': 'text-emerald-300 bg-emerald-500/15 border-emerald-500/30',
    'Chabacano': 'text-red-300 bg-red-500/15 border-red-500/30',
    'Ilonggo / Hiligaynon': 'text-violet-300 bg-violet-500/15 border-violet-500/30',
    'Bicolano': 'text-amber-300 bg-amber-500/15 border-amber-500/30',
  };

  const uniqueDialects = ['Ilocano', 'Kapampangan', 'Bisaya', 'Chabacano', 'Ilonggo', 'Bicolano'];
  const dialectFeatureColors: Record<string, string> = {
    'Ilocano': 'text-teal-300 bg-teal-500/15 border-teal-500/30',
    'Kapampangan': 'text-orange-300 bg-orange-500/15 border-orange-500/30',
    'Bisaya': 'text-emerald-300 bg-emerald-500/15 border-emerald-500/30',
    'Chabacano': 'text-red-300 bg-red-500/15 border-red-500/30',
    'Ilonggo': 'text-violet-300 bg-violet-500/15 border-violet-500/30',
    'Bicolano': 'text-amber-300 bg-amber-500/15 border-amber-500/30',
  };

  return (
    <div className="flex-1 animated-bg">
      <div className="max-w-2xl mx-auto px-4 py-5 space-y-5">

        {/* Intro */}
        <div className="glass rounded-2xl p-4 space-y-2">
          <p className="text-text-secondary text-sm leading-relaxed">
            Philippine languages all use the <strong className="text-text-primary">Latin script</strong> today, though several had their own pre-colonial writing systems. Each dialect has unique phonemes, letter counts, and distinct vocabulary.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex bg-surface-800 rounded-2xl p-1 gap-1">
          {TABS.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 px-3 rounded-xl text-xs font-semibold transition-smooth ${
                activeTab === tab
                  ? 'bg-brand-500 text-white shadow-glow'
                  : 'text-text-muted hover:text-text-secondary'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab: Overview */}
        {activeTab === 'Overview' && (
          <div className="space-y-3 animate-slide-up">
            {alphabetNotes.map(note => {
              const colorClass = DIALECT_COLORS[note.dialect] ?? 'text-brand-300 bg-brand-500/15 border-brand-500/30';
              const isExpanded = expandedDialect === note.dialect;
              return (
                <div key={note.dialect} className="rounded-2xl overflow-hidden border border-white/8 bg-surface-800">
                  <button
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-surface-700 transition-smooth"
                    onClick={() => setExpandedDialect(isExpanded ? null : note.dialect)}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className={`text-xs font-bold px-2 py-1 rounded-lg border flex-shrink-0 ${colorClass}`}>
                        {note.totalLetters}
                      </span>
                      <div className="min-w-0">
                        <p className="font-semibold text-text-primary text-sm truncate">{note.dialect}</p>
                        <p className="text-text-muted text-xs">{note.baseScript}</p>
                      </div>
                    </div>
                    <svg
                      className={`w-4 h-4 text-text-muted flex-shrink-0 transition-smooth ${isExpanded ? 'rotate-180' : ''}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isExpanded && (
                    <div className="px-4 pb-4 space-y-3 border-t border-white/5 pt-3 animate-slide-up">
                      <p className="text-text-secondary text-xs leading-relaxed">{note.specialNotes}</p>
                      {note.uniqueLetters.length > 0 && (
                        <div>
                          <p className="text-text-muted text-xs mb-1.5">Unique letters:</p>
                          <div className="flex flex-wrap gap-1.5">
                            {note.uniqueLetters.map(l => (
                              <span key={l} className="px-2 py-0.5 rounded-lg bg-gold-500/15 border border-gold-500/30 text-gold-400 text-sm font-bold">{l}</span>
                            ))}
                          </div>
                        </div>
                      )}
                      {note.missingLetters.length > 0 && (
                        <div>
                          <p className="text-text-muted text-xs mb-1.5">Not natively used:</p>
                          <div className="flex flex-wrap gap-1">
                            {note.missingLetters.map(l => (
                              <span key={l} className="px-2 py-0.5 rounded-lg bg-surface-700 border border-white/5 text-text-muted text-xs">{l}</span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Tab: Features */}
        {activeTab === 'Features' && (
          <div className="space-y-3 animate-slide-up">
            {uniqueDialects.map(dialect => {
              const features = dialectFeatures.filter(f => f.dialect === dialect);
              const colorClass = dialectFeatureColors[dialect] ?? '';
              return (
                <div key={dialect} className="rounded-2xl bg-surface-800 border border-white/8 overflow-hidden">
                  <div className={`px-4 py-3 border-b border-white/5`}>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-lg border ${colorClass}`}>{dialect}</span>
                  </div>
                  <div className="divide-y divide-white/5">
                    {features.map((f, i) => (
                      <div key={i} className="px-4 py-3 space-y-1.5">
                        <div className="flex items-start justify-between gap-3">
                          <p className="text-text-primary text-sm font-semibold">{f.feature}</p>
                        </div>
                        <p className="text-text-muted text-xs leading-relaxed">{f.description}</p>
                        <div className="flex flex-wrap gap-2 mt-1">
                          <div className="flex items-center gap-1.5 text-xs">
                            <span className="text-text-muted">e.g.:</span>
                            <code className="px-1.5 py-0.5 rounded bg-surface-700 text-text-secondary font-mono">{f.example}</code>
                          </div>
                          <div className="flex items-center gap-1.5 text-xs">
                            <span className="text-text-muted">Tagalog:</span>
                            <code className="px-1.5 py-0.5 rounded bg-brand-500/15 text-brand-300 font-mono">{f.tagalogEquiv}</code>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab: Unique Words */}
        {activeTab === 'Unique Words' && (
          <div className="space-y-3 animate-slide-up">
            <p className="text-text-muted text-xs px-1">
              Words unique to each dialect that don't have direct Tagalog equivalents or differ significantly
            </p>
            {uniqueDialects.map(dialect => {
              const words = uniqueWords.filter(w => w.dialect === dialect);
              const colorClass = dialectFeatureColors[dialect] ?? '';
              return (
                <div key={dialect} className="rounded-2xl bg-surface-800 border border-white/8 overflow-hidden">
                  <div className="px-4 py-3 border-b border-white/5 flex items-center gap-2">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-lg border ${colorClass}`}>{dialect}</span>
                    <span className="text-text-muted text-xs">{words.length} words</span>
                  </div>
                  <div className="divide-y divide-white/5">
                    {words.map((w, i) => (
                      <div key={i} className="px-4 py-3 flex items-start justify-between gap-3">
                        <div>
                          <p className="font-semibold text-text-primary text-sm">{w.dialectWord}</p>
                          <p className="text-text-muted text-xs">{w.meaning}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-text-muted">Tagalog</p>
                          <p className="text-brand-300 text-sm font-medium">{w.tagalog}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="pb-4" />
      </div>
    </div>
  );
}
