import React from 'react';
import { Question } from '../../types';

interface Props {
  question: Question;
  currentAnswer: string[];
  onAnswerChange: (ans: string[]) => void;
}

export const WordSelectView: React.FC<Props> = ({ question, currentAnswer = [], onAnswerChange }) => {
  const handleWordClick = (word: string) => {
    const cleanWord = word.replace(/[.,!?]/g, '').toLowerCase();
    const prev = currentAnswer || [];
    
    // Toggle selection
    if (prev.includes(cleanWord)) {
      onAnswerChange(prev.filter(w => w !== cleanWord));
    } else {
      onAnswerChange([...prev, cleanWord]);
    }
  };

  const sentence = question.questionMeta?.wordSelectSentence || question.questionText || question.text || "";

  return (
    <div className="mt-8 p-6 bg-slate-100 dark:bg-slate-800 rounded-xl text-2xl md:text-3xl font-medium leading-relaxed text-center">
      {sentence.split(' ').map((word, i) => {
        const cleanWord = word.replace(/[.,!?]/g, '').toLowerCase();
        const isSelected = (currentAnswer || []).includes(cleanWord);
        return (
          <button 
            key={i} 
            onClick={() => handleWordClick(word)} 
            className={`px-2 py-1 rounded-md transition-all duration-200 ${isSelected ? 'bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-100' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'}`}
          >
            {word}
          </button>
        );
      })}
    </div>
  );
};