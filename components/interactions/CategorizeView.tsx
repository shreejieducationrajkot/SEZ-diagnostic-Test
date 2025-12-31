import React, { useState, useEffect } from 'react';
import { Question, QuestionOption } from '../../types';

interface Props {
  question: Question;
  theme: any;
  onAnswerChange: (ans: any) => void;
}

export const CategorizeView: React.FC<Props> = ({ question, theme, onAnswerChange }) => {
  const [categorizedItems, setCategorizedItems] = useState<{ [itemId: string]: string | null }>({});
  const [draggedItem, setDraggedItem] = useState<QuestionOption | null>(null);

  useEffect(() => {
    const initialItems: { [itemId: string]: string | null } = {};
    question.options?.forEach(opt => initialItems[opt.id] = null);
    setCategorizedItems(initialItems);
    onAnswerChange(initialItems);
  }, [question]);

  const handleDragStart = (e: React.DragEvent, opt: QuestionOption) => {
    setDraggedItem(opt);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleCategorizeDrop = (e: React.DragEvent, categoryId: string) => {
    e.preventDefault();
    if (draggedItem) {
      const newItems = { ...categorizedItems, [draggedItem.id]: categoryId };
      setCategorizedItems(newItems);
      onAnswerChange(newItems);
      setDraggedItem(null);
    }
  };

  return (
    <div className="mt-8 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {question.categories?.map(cat => (
          <div key={cat.id} onDrop={(e) => handleCategorizeDrop(e, cat.id)} onDragOver={(e) => e.preventDefault()} className={`${theme.categorizeBucketStyle}`}>
            <h4 className="font-bold text-center text-emerald-700 dark:text-emerald-300 mb-3 uppercase tracking-wider">{cat.label}</h4>
            <div className="space-y-2 min-h-[50px]">
              {question.options?.filter(opt => categorizedItems[opt.id] === cat.id).map(item => (
                <div key={item.id} className={`${theme.categorizeItemStyle} bg-emerald-100 dark:bg-emerald-800 border-emerald-300 dark:border-emerald-700 font-semibold`}>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-4 bg-slate-100 dark:bg-slate-800 rounded-xl min-h-[60px]">
        <p className="text-center text-sm font-bold text-slate-500 mb-3">DRAG FROM HERE</p>
        <div className="flex flex-wrap justify-center gap-3">
            {question.options?.filter(opt => !categorizedItems[opt.id]).map(opt => (
            <button key={opt.id} draggable onDragStart={(e) => handleDragStart(e, opt)} className={`${theme.categorizeItemStyle} cursor-grab active:cursor-grabbing font-bold`}>
                {opt.text}
            </button>
            ))}
        </div>
      </div>
    </div>
  );
};