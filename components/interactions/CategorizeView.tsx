
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
          <div 
            key={cat.id} 
            onDrop={(e) => handleCategorizeDrop(e, cat.id)} 
            onDragOver={(e) => e.preventDefault()} 
            className={`
                p-4 min-h-[150px] rounded-2xl border-2 border-dashed transition-colors
                bg-blue-50 dark:bg-slate-800
                border-blue-200 dark:border-slate-700
            `}
          >
            <h4 className="font-bold text-center text-blue-800 dark:text-blue-200 mb-3 uppercase tracking-wider text-sm bg-blue-100 dark:bg-slate-700 py-2 rounded-lg">
                {cat.label}
            </h4>
            <div className="space-y-2">
              {question.options?.filter(opt => categorizedItems[opt.id] === cat.id).map(item => (
                <div 
                    key={item.id} 
                    className="px-4 py-2 rounded-lg border bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-600 text-slate-800 dark:text-slate-100 font-bold shadow-sm"
                >
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 p-4 bg-slate-100 dark:bg-slate-950/50 rounded-2xl min-h-[80px] border border-slate-200 dark:border-slate-700">
        <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Drag items from here</p>
        <div className="flex flex-wrap justify-center gap-3">
            {question.options?.filter(opt => !categorizedItems[opt.id]).map(opt => (
            <button 
                key={opt.id} 
                draggable 
                onDragStart={(e) => handleDragStart(e, opt)} 
                className="px-4 py-2 rounded-lg border-2 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-600 text-slate-800 dark:text-slate-100 cursor-grab active:cursor-grabbing font-bold hover:border-blue-400 transition-colors shadow-sm"
            >
                {opt.text}
            </button>
            ))}
        </div>
      </div>
    </div>
  );
};
