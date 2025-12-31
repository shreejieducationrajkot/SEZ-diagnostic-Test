import React from 'react';
import { Question } from '../../types';
import { Check } from 'lucide-react';

interface Props {
  question: Question;
  currentAnswer: string | null;
  onAnswerChange: (ans: string) => void;
  isSubmitting?: boolean;
}

export const TapSelectView: React.FC<Props> = ({ question, currentAnswer, onAnswerChange, isSubmitting }) => {
  // Safe default
  const options = question.options || [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 w-full max-w-3xl mx-auto">
      {options.map((opt) => {
        const isSelected = currentAnswer === opt.id;
        
        return (
          <button
            key={opt.id}
            onClick={() => !isSubmitting && onAnswerChange(opt.id)}
            disabled={isSubmitting}
            className={`
              relative p-6 rounded-2xl border-2 text-left transition-all duration-200 flex items-center gap-4 group
              ${isSelected 
                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-md ring-2 ring-blue-500/20' 
                : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-sm'
              }
            `}
          >
            {/* Circle Indicator */}
            <div className={`
              w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors flex-shrink-0
              ${isSelected 
                ? 'bg-blue-500 border-blue-500 text-white' 
                : 'border-slate-300 dark:border-slate-600 text-transparent group-hover:border-blue-400'
              }
            `}>
              <Check size={16} strokeWidth={4} />
            </div>

            {/* Option Text */}
            <div className="flex-1">
               <span className={`text-lg font-bold ${isSelected ? 'text-blue-700 dark:text-blue-300' : 'text-slate-700 dark:text-slate-200'}`}>
                 {opt.text}
               </span>
            </div>
          </button>
        );
      })}
    </div>
  );
};