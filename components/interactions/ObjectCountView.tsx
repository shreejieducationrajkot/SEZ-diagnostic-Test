import React from 'react';
import { Question } from '../../types';

interface Props {
  question: Question;
  currentAnswer: number[] | null;
  onAnswerChange: (ans: number[]) => void;
  isSubmitting?: boolean;
}

export const ObjectCountView: React.FC<Props> = ({ question, currentAnswer, onAnswerChange, isSubmitting }) => {
  // Safe default
  const selectedItems = currentAnswer || []; 

  const total = question.interactiveData?.total || 10;
  const visual = question.interactiveData?.visual || '🍎';
  
  const toggle = (i: number) => {
    if (isSubmitting) return;
    
    // Toggle logic remains the same: Add or Remove from list
    if (selectedItems.includes(i)) {
      onAnswerChange(selectedItems.filter(x => x !== i));
    } else {
      onAnswerChange([...selectedItems, i]);
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-8 max-w-lg mx-auto">
      {Array.from({ length: total }).map((_, i) => {
        const isSelected = selectedItems.includes(i); 
        
        // --- LOGIC REVERSED HERE ---
        // IF selected (clicked) -> Show Gray/Faded (Removed)
        // IF NOT selected      -> Show Colorful/Big (Remaining)
        
        return (
          <button 
            key={i} 
            onClick={() => toggle(i)} 
            disabled={isSubmitting}
            className={`w-16 h-16 rounded-full flex items-center justify-center text-4xl transition-all duration-300 border-2
              ${isSelected 
                ? 'scale-90 opacity-30 grayscale border-transparent' // Clicked state (Removed)
                : 'scale-110 opacity-100 bg-white dark:bg-slate-800 shadow-lg border-green-500'} // Default state (Alive)
            `}
          >
            {visual}
          </button>
        );
      })}
    </div>
  );
};