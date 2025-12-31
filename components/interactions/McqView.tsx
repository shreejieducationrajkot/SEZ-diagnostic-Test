import React from 'react';
import { Question } from '../../types';

interface Props {
  question: Question;
  theme: any;
  onAnswerChange: (ans: string) => void;
  currentAnswer: string | null;
}

export const McqView: React.FC<Props> = ({ question, theme, onAnswerChange, currentAnswer }) => {
  
  const renderVisualContent = (visual: string) => (
    <div className={`mb-2 text-3xl md:text-5xl ${theme.mcqIcon}`}>{visual}</div>
  );

  return (
    <div className="grid grid-cols-2 gap-4 mt-8">
      {question.options?.map((opt) => (
        <button 
          key={opt.id} 
          onClick={() => onAnswerChange(opt.id)} 
          className={`flex flex-col items-center justify-center text-center p-4 ${theme.mcqBtn} ${currentAnswer === opt.id ? theme.mcqSelected : theme.mcqDefault}`}
        >
          {opt.visual && renderVisualContent(opt.visual)}
          <span className={`${theme.mcqText}`}>{opt.text}</span>
        </button>
      ))}
    </div>
  );
};