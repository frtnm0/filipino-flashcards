import { useState, useCallback } from 'react';
import type { View, DatasetType } from './types';
import { Header } from './components/Header';
import { MainMenu } from './components/MainMenu';
import { FlashcardView } from './components/FlashcardView';
import { AlphabetChart } from './components/AlphabetChart';
import { commonWords } from './data/commonWords';
import { commonPhrases } from './data/commonPhrases';

export default function App() {
  const [view, setView] = useState<View>('menu');
  const [datasetType, setDatasetType] = useState<DatasetType>('words');

  const handleSelectDataset = useCallback((type: DatasetType) => {
    setDatasetType(type);
    setView('flashcard');
  }, []);

  const handleViewAlphabet = useCallback(() => {
    setView('alphabet');
  }, []);

  const handleBack = useCallback(() => {
    setView('menu');
  }, []);

  const currentData = datasetType === 'words' ? commonWords : commonPhrases;

  return (
    <div className="min-h-screen flex flex-col">
      <Header view={view} onBack={handleBack} />

      <main className="flex-1 flex flex-col">
        {view === 'menu' && (
          <MainMenu
            onSelectDataset={handleSelectDataset}
            onViewAlphabet={handleViewAlphabet}
            wordCount={commonWords.length}
            phraseCount={commonPhrases.length}
          />
        )}
        {view === 'alphabet' && <AlphabetChart />}
        {view === 'flashcard' && (
          <FlashcardView
            key={datasetType}
            data={currentData}
            type={datasetType}
          />
        )}
      </main>
    </div>
  );
}
