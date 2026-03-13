import type { AlphabetEntry } from '../types';

// Philippine Alphabet reference
// The modern Filipino alphabet (2013) has 28 letters: A B C D E F G H I J K L M N Ng O P Q R S T U V W X Y Z
// Dialects may have additional or different letters/sounds

export interface AlphabetDialectData {
  letter: string;
  ilocano: string;
  kapampangan: string;
  bisaya: string;
  chabacano: string;
  ilonggo: string;
  bicolano: string;
  tagalog: string;
  notes?: string;
}

export const alphabetData: AlphabetDialectData[] = [
  { letter: 'A', tagalog: 'A', ilocano: 'A', kapampangan: 'A', bisaya: 'A', chabacano: 'A', ilonggo: 'A', bicolano: 'A' },
  { letter: 'B', tagalog: 'B', ilocano: 'B', kapampangan: 'B', bisaya: 'B', chabacano: 'B', ilonggo: 'B', bicolano: 'B' },
  { letter: 'C', tagalog: 'C', ilocano: 'C', kapampangan: 'C', bisaya: 'C', chabacano: 'C', ilonggo: 'C', bicolano: 'C', notes: 'Used in loanwords' },
  { letter: 'D', tagalog: 'D', ilocano: 'D', kapampangan: 'D', bisaya: 'D', chabacano: 'D', ilonggo: 'D', bicolano: 'D' },
  { letter: 'E', tagalog: 'E', ilocano: 'E', kapampangan: 'E', bisaya: 'E', chabacano: 'E', ilonggo: 'E', bicolano: 'E' },
  { letter: 'F', tagalog: 'F', ilocano: 'F', kapampangan: 'F', bisaya: 'F', chabacano: 'F', ilonggo: 'F', bicolano: 'F', notes: 'Foreign loanwords' },
  { letter: 'G', tagalog: 'G', ilocano: 'G', kapampangan: 'G', bisaya: 'G', chabacano: 'G', ilonggo: 'G', bicolano: 'G' },
  { letter: 'H', tagalog: 'H', ilocano: 'H', kapampangan: 'H', bisaya: 'H', chabacano: 'H', ilonggo: 'H', bicolano: 'H' },
  { letter: 'I', tagalog: 'I', ilocano: 'I', kapampangan: 'I', bisaya: 'I', chabacano: 'I', ilonggo: 'I', bicolano: 'I' },
  { letter: 'J', tagalog: 'J', ilocano: 'J', kapampangan: 'J', bisaya: 'J', chabacano: 'J', ilonggo: 'J', bicolano: 'J', notes: 'Loanword usage' },
  { letter: 'K', tagalog: 'K', ilocano: 'K', kapampangan: 'K', bisaya: 'K', chabacano: 'K', ilonggo: 'K', bicolano: 'K' },
  { letter: 'L', tagalog: 'L', ilocano: 'L', kapampangan: 'L', bisaya: 'L', chabacano: 'L', ilonggo: 'L', bicolano: 'L' },
  { letter: 'M', tagalog: 'M', ilocano: 'M', kapampangan: 'M', bisaya: 'M', chabacano: 'M', ilonggo: 'M', bicolano: 'M' },
  { letter: 'N', tagalog: 'N', ilocano: 'N', kapampangan: 'N', bisaya: 'N', chabacano: 'N', ilonggo: 'N', bicolano: 'N' },
  { letter: 'Ng', tagalog: 'Ng', ilocano: 'Ng', kapampangan: 'Ng', bisaya: 'Ng', chabacano: 'Ng', ilonggo: 'Ng', bicolano: 'Ng', notes: 'Unique digraph in Philippine languages' },
  { letter: 'O', tagalog: 'O', ilocano: 'O', kapampangan: 'O', bisaya: 'O', chabacano: 'O', ilonggo: 'O', bicolano: 'O' },
  { letter: 'P', tagalog: 'P', ilocano: 'P', kapampangan: 'P', bisaya: 'P', chabacano: 'P', ilonggo: 'P', bicolano: 'P' },
  { letter: 'Q', tagalog: 'Q', ilocano: 'Q', kapampangan: 'Q', bisaya: 'Q', chabacano: 'Q', ilonggo: 'Q', bicolano: 'Q', notes: 'Rare, in loanwords' },
  { letter: 'R', tagalog: 'R', ilocano: 'R', kapampangan: 'R', bisaya: 'R', chabacano: 'R', ilonggo: 'R', bicolano: 'R' },
  { letter: 'S', tagalog: 'S', ilocano: 'S', kapampangan: 'S', bisaya: 'S', chabacano: 'S', ilonggo: 'S', bicolano: 'S' },
  { letter: 'T', tagalog: 'T', ilocano: 'T', kapampangan: 'T', bisaya: 'T', chabacano: 'T', ilonggo: 'T', bicolano: 'T' },
  { letter: 'U', tagalog: 'U', ilocano: 'U', kapampangan: 'U', bisaya: 'U', chabacano: 'U', ilonggo: 'U', bicolano: 'U' },
  { letter: 'V', tagalog: 'V', ilocano: 'V', kapampangan: 'V', bisaya: 'V', chabacano: 'V', ilonggo: 'V', bicolano: 'V', notes: 'Spanish loanwords' },
  { letter: 'W', tagalog: 'W', ilocano: 'W', kapampangan: 'W', bisaya: 'W', chabacano: 'W', ilonggo: 'W', bicolano: 'W' },
  { letter: 'X', tagalog: 'X', ilocano: 'X', kapampangan: 'X', bisaya: 'X', chabacano: 'X', ilonggo: 'X', bicolano: 'X', notes: 'Rare, scientific/foreign' },
  { letter: 'Y', tagalog: 'Y', ilocano: 'Y', kapampangan: 'Y', bisaya: 'Y', chabacano: 'Y', ilonggo: 'Y', bicolano: 'Y' },
  { letter: 'Z', tagalog: 'Z', ilocano: 'Z', kapampangan: 'Z', bisaya: 'Z', chabacano: 'Z', ilonggo: 'Z', bicolano: 'Z', notes: 'Loanwords' },
];

// Special vowel/phoneme patterns unique to each dialect
export interface DialectFeature {
  dialect: string;
  feature: string;
  description: string;
  example: string;
  tagalogEquiv: string;
}

export const dialectFeatures: DialectFeature[] = [
  { dialect: 'Ilocano', feature: 'Glottal stop', description: 'Represented with a dash or apostrophe between repeated vowels', example: "iti, nga, kenka", tagalogEquiv: 'ang, ng, sa' },
  { dialect: 'Ilocano', feature: 'Long vowels', description: 'Doubled vowels indicate length (e.g., balay)', example: 'balaay', tagalogEquiv: 'bahay' },
  { dialect: 'Kapampangan', feature: 'Final -u', description: 'Tagalog -o often becomes -u at word end', example: 'tau, balu', tagalogEquiv: 'tao, bago' },
  { dialect: 'Kapampangan', feature: 'I- prefix', description: 'Object focus marker', example: 'ing, king', tagalogEquiv: 'ang, sa' },
  { dialect: 'Bisaya', feature: 'Reduplication', description: 'Emphasis via repeated syllable', example: 'bag-o, gab-i', tagalogEquiv: 'bago, gabi' },
  { dialect: 'Bisaya', feature: 'Final -on/-an', description: 'Noun/verb focus suffixes common in Cebuano', example: 'buhaton, sulaton', tagalogEquiv: 'gagawin, isusulat' },
  { dialect: 'Chabacano', feature: 'Spanish base', description: 'Core vocabulary is Spanish-derived', example: 'casa, agua, gente', tagalogEquiv: 'bahay, tubig, tao' },
  { dialect: 'Chabacano', feature: 'Article system', description: 'Uses Spanish-derived articles', example: 'el, la, los', tagalogEquiv: 'ang' },
  { dialect: 'Ilonggo', feature: 'Ko/kita pronouns', description: 'Distinct pronoun system', example: 'ko (I), kamo (you pl)', tagalogEquiv: 'ako, kayo' },
  { dialect: 'Ilonggo', feature: '-on verbs', description: 'Goal-focus verbs end in -on', example: 'kuhaon, himoon', tagalogEquiv: 'kuhanin, gawin' },
  { dialect: 'Bicolano', feature: 'Harong/Balay', description: 'Unique vocabulary distinct from Tagalog', example: 'harong, saen', tagalogEquiv: 'bahay, saan' },
  { dialect: 'Bicolano', feature: '-on/-an focus', description: 'Similar to Bisaya focus marking', example: 'gibuhon, sabton', tagalogEquiv: 'gagawin, mauunawaan' },
];

export interface UniqueWord {
  dialect: string;
  dialectWord: string;
  tagalog: string;
  meaning: string;
}

export const uniqueWords: UniqueWord[] = [
  { dialect: 'Ilocano', dialectWord: 'Naimbag', tagalog: 'Mabuti/Maganda', meaning: 'Good/Beautiful' },
  { dialect: 'Ilocano', dialectWord: 'Agyamanak', tagalog: 'Salamat', meaning: 'Thank you' },
  { dialect: 'Ilocano', dialectWord: 'Gayyem', tagalog: 'Kaibigan', meaning: 'Friend' },
  { dialect: 'Ilocano', dialectWord: 'Rabii', tagalog: 'Gabi', meaning: 'Night' },
  { dialect: 'Ilocano', dialectWord: 'Bigat', tagalog: 'Umaga', meaning: 'Morning' },
  { dialect: 'Kapampangan', dialectWord: 'Makanyan', tagalog: 'Ganyan', meaning: 'Like that' },
  { dialect: 'Kapampangan', dialectWord: 'Meging', tagalog: 'Naging', meaning: 'Became' },
  { dialect: 'Kapampangan', dialectWord: 'Ibpa', tagalog: 'Ama/Tatay', meaning: 'Father' },
  { dialect: 'Kapampangan', dialectWord: 'Ima', tagalog: 'Ina/Nanay', meaning: 'Mother' },
  { dialect: 'Bisaya', dialectWord: 'Dili', tagalog: 'Hindi', meaning: 'No/Not' },
  { dialect: 'Bisaya', dialectWord: 'Karon', tagalog: 'Ngayon', meaning: 'Now' },
  { dialect: 'Bisaya', dialectWord: 'Nindot', tagalog: 'Maganda', meaning: 'Beautiful' },
  { dialect: 'Bisaya', dialectWord: 'Higala', tagalog: 'Kaibigan', meaning: 'Friend' },
  { dialect: 'Chabacano', dialectWord: 'Cosa', tagalog: 'Ano', meaning: 'What' },
  { dialect: 'Chabacano', dialectWord: 'Maga', tagalog: 'Mga', meaning: 'Plural marker' },
  { dialect: 'Chabacano', dialectWord: 'Ta', tagalog: 'Nag-/Naka-', meaning: 'Progressive marker' },
  { dialect: 'Ilonggo', dialectWord: 'Palangga', tagalog: 'Mahal', meaning: 'Love/Dear' },
  { dialect: 'Ilonggo', dialectWord: 'Diin', tagalog: 'Saan', meaning: 'Where' },
  { dialect: 'Ilonggo', dialectWord: 'Maayo', tagalog: 'Mabuti', meaning: 'Good/Fine' },
  { dialect: 'Ilonggo', dialectWord: 'Abyan', tagalog: 'Kaibigan', meaning: 'Friend' },
  { dialect: 'Bicolano', dialectWord: 'Harong', tagalog: 'Bahay', meaning: 'House' },
  { dialect: 'Bicolano', dialectWord: 'Saen', tagalog: 'Saan', meaning: 'Where' },
  { dialect: 'Bicolano', dialectWord: 'Marhay', tagalog: 'Mabuti', meaning: 'Good/Fine' },
  { dialect: 'Bicolano', dialectWord: 'Namumutan', tagalog: 'Mahal', meaning: 'Love' },
];

// For the alphabet chart, showing unique/notable letters per dialect
export interface AlphabetNote {
  dialect: string;
  totalLetters: number;
  baseScript: string;
  uniqueLetters: string[];
  missingLetters: string[];
  specialNotes: string;
}

export const alphabetNotes: AlphabetNote[] = [
  {
    dialect: 'Tagalog / Filipino',
    totalLetters: 28,
    baseScript: 'Latin',
    uniqueLetters: ['Ng', 'Ñ'],
    missingLetters: [],
    specialNotes: 'Standard Filipino alphabet. 28 letters including "Ng" as a single letter.'
  },
  {
    dialect: 'Ilocano',
    totalLetters: 16,
    baseScript: 'Latin (formerly Kur-itan)',
    uniqueLetters: ['ng'],
    missingLetters: ['C', 'F', 'J', 'Q', 'V', 'X', 'Z'],
    specialNotes: 'Native Ilocano uses 16 letters. Has unique vowel length distinctions. Originally written in Kur-itan script.'
  },
  {
    dialect: 'Kapampangan',
    totalLetters: 21,
    baseScript: 'Latin (formerly Kulitan)',
    uniqueLetters: ['ng'],
    missingLetters: ['C', 'F', 'J', 'Q', 'V', 'X', 'Z'],
    specialNotes: 'Originally written in Kulitan script (right-to-left). Final vowels often shift from -o to -u.'
  },
  {
    dialect: 'Bisaya / Cebuano',
    totalLetters: 20,
    baseScript: 'Latin (formerly Badlit)',
    uniqueLetters: ['ng'],
    missingLetters: ['C', 'F', 'J', 'Q', 'V', 'X', 'Z'],
    specialNotes: 'Bisaya includes Cebuano, Hiligaynon subgroups. Uses glottal stops written with hyphen (e.g., bag-o).'
  },
  {
    dialect: 'Chabacano',
    totalLetters: 27,
    baseScript: 'Latin',
    uniqueLetters: ['ñ'],
    missingLetters: [],
    specialNotes: 'Spanish Creole—the only Spanish-based creole in Asia. Closest to standard Romance alphabet.'
  },
  {
    dialect: 'Ilonggo / Hiligaynon',
    totalLetters: 20,
    baseScript: 'Latin (formerly Kinaray-a script)',
    uniqueLetters: ['ng'],
    missingLetters: ['C', 'F', 'J', 'Q', 'V', 'X', 'Z'],
    specialNotes: 'Spoken in Western Visayas. Related to Bisaya but distinct vocabulary and grammar.'
  },
  {
    dialect: 'Bicolano',
    totalLetters: 20,
    baseScript: 'Latin',
    uniqueLetters: ['ng'],
    missingLetters: ['C', 'F', 'J', 'Q', 'V', 'X', 'Z'],
    specialNotes: 'Spoken in Bicol Region. Multiple sub-variants (Naga Bicolano, Legazpi, etc.).'
  },
];

export { type AlphabetEntry };
