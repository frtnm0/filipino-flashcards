export interface LanguageData {
  id: string;
  tagalog: string;
  ilocano: string;
  kapampangan: string;
  bisaya: string;
  chabacano: string;
  ilonggo: string;
  bicolano: string;
}

export type Dialect = 'tagalog' | 'ilocano' | 'kapampangan' | 'bisaya' | 'chabacano' | 'ilonggo' | 'bicolano';

export type FlashcardMode = 'sequential' | 'random';

export type DatasetType = 'words' | 'phrases';

export type View = 'menu' | 'alphabet' | 'flashcard';

export interface AlphabetEntry {
  letter: string;
  ilocano?: string;
  kapampangan?: string;
  bisaya?: string;
  chabacano?: string;
  ilonggo?: string;
  bicolano?: string;
  note?: string;
}
