import React, { useState } from 'react';
import { Question, QuestionOption } from '../../types';

interface Props {
  question: Question;
  currentAnswer: QuestionOption | null;
  onAnswerChange: (ans: QuestionOption | null) => void;
}

export const DragToSlotsView: React.FC<Props> = ({ question, currentAnswer, onAnswerChange }) => {
  const [draggedItem, setDraggedItem] = useState<QuestionOption | null>(null);

  const handleDragStart = (e: React.DragEvent, opt: QuestionOption) => {
    setDraggedItem(opt);
    e.dataTransfer.effectAllowed = 'move';
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (draggedItem) {
      onAnswerChange(draggedItem);
      setDraggedItem(null);
    }
  };

  const parts = question.questionText.split('___');

  return (
    <div className="mt-8 text-center">
      <div onDrop={handleDrop} onDragOver={(e) => e.preventDefault()} className="inline-flex items-center justify-center text-3xl font-bold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 p-4 rounded-xl min-h-[80px] min-w-[200px] border-2 border-dashed border-slate-300 dark:border-slate-600">
        <span>{parts[0]}</span>
        <div className="inline-block w-20 h-16 bg-white dark:bg-slate-700 rounded-lg shadow-inner mx-2">
          {currentAnswer && <span className="flex items-center justify-center h-full text-blue-600 dark:text-blue-300">{currentAnswer.text}</span>}
        </div>
        <span>{parts[1]}</span>
      </div>
      <div className="mt-6 flex justify-center gap-4">
        {question.options?.filter(opt => opt.id !== currentAnswer?.id).map(opt => (
          <button key={opt.id} draggable onDragStart={(e) => handleDragStart(e, opt)} className="px-6 py-4 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 rounded-lg shadow-md cursor-grab active:cursor-grabbing text-2xl font-bold">
            {opt.text}
          </button>
        ))}
      </div>
    </div>
  );
};