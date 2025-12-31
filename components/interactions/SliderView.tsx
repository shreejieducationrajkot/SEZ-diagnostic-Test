import React from 'react';
import { Question } from '../../types';

interface Props {
  question: Question;
  currentAnswer: number;
  onAnswerChange: (ans: number) => void;
  isSubmitting?: boolean;
}

export const SliderView: React.FC<Props> = ({ question, currentAnswer, onAnswerChange, isSubmitting }) => {
  // Use meta/interactiveData for config, or default to 0-100
  const config = question.interactiveData?.config || {};
  const min = config.min ?? 0;
  const max = config.max ?? 100;
  const step = config.step ?? 1;
  const label = config.label || '';
  
  // Initialize if null
  const value = currentAnswer ?? min;

  return (
    <div className="w-full px-4 mt-8 max-w-xl mx-auto">
      <div className="text-center text-5xl font-black text-brand-600 dark:text-brand-400 mb-8 font-mono">
        {value} <span className="text-2xl text-slate-500">{label}</span>
      </div>
      
      <input 
        type="range" 
        min={min} 
        max={max} 
        step={step} 
        value={value}
        onChange={(e) => onAnswerChange(Number(e.target.value))} 
        disabled={isSubmitting}
        className="w-full h-4 bg-slate-300 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-500"
      />
      
      <div className="flex justify-between text-slate-500 dark:text-slate-400 font-bold mt-2 text-sm">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
};