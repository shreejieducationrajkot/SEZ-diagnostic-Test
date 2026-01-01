
import React, { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Question } from '../../types';

const useDragDrop = (onDrop: (item: string) => void) => {
  const [dragItem, setDragItem] = useState<any>(null);
  const dragRef = useRef<any>(null);

  const handlePointerDown = (e: React.PointerEvent, item: string) => {
    // Only drag on left click or touch
    if (e.button !== 0 && e.type === 'pointerdown') return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    dragRef.current = { id: item, startX: e.clientX, startY: e.clientY };
    
    setDragItem({
      id: item, text: item,
      x: e.clientX, y: e.clientY,
      width: rect.width, height: rect.height,
      offsetX: e.clientX - rect.left, offsetY: e.clientY - rect.top
    });
    
    window.addEventListener('pointermove', onPointerMove, { passive: false });
    window.addEventListener('pointerup', onPointerUp, { passive: false });
  };

  const onPointerMove = (e: PointerEvent) => {
    if (!dragRef.current) return;
    e.preventDefault();
    setDragItem((prev: any) => prev ? { ...prev, x: e.clientX, y: e.clientY } : null);
  };

  const onPointerUp = (e: PointerEvent) => {
    if (!dragRef.current) return;
    
    // Check if movement happened (Drag vs Click)
    const dist = Math.hypot(e.clientX - dragRef.current.startX, e.clientY - dragRef.current.startY);
    
    // If moved more than 5px, treat as drag
    if (dist > 5) {
        const elements = document.elementsFromPoint(e.clientX, e.clientY);
        const dropZone = elements.find(el => el.getAttribute('data-drop-zone') === 'reorder-answer');
        if (dropZone && dragItem) {
            onDrop(dragItem.id);
        }
    }

    setDragItem(null);
    dragRef.current = null;
    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerup', onPointerUp);
  };

  return { handlePointerDown, dragItem };
};

interface Props {
  question: Question;
  currentAnswer: string[] | null;
  onAnswerChange: (ans: string[]) => void;
  isSubmitting?: boolean;
}

export const ReorderView: React.FC<Props> = ({ question, currentAnswer, onAnswerChange, isSubmitting }) => {
  // Check for items in options OR interactiveData.items
  const dataItems = question.interactiveData?.items || question.options || [];
  
  const sequence = currentAnswer || [];
  const pool = dataItems.filter((item: string) => !sequence.includes(item));

  const handleAdd = (item: string) => {
    if (isSubmitting) return;
    onAnswerChange([...sequence, item]);
  };

  const handleRemove = (item: string) => {
    if (isSubmitting) return;
    onAnswerChange(sequence.filter(i => i !== item));
  };

  const { handlePointerDown, dragItem } = useDragDrop(handleAdd);

  if (dataItems.length === 0) return <div className="text-red-500">Error: No items to arrange</div>;

  return (
    <div className="flex flex-col gap-6 mt-6 w-full max-w-2xl mx-auto select-none touch-none">
      
      {/* ANSWER ZONE */}
      <div 
        data-drop-zone="reorder-answer"
        className={`
            min-h-[120px] rounded-2xl p-4 flex flex-wrap gap-3 items-center justify-center transition-colors border-2 border-dashed
            bg-blue-50 dark:bg-slate-800 
            border-blue-200 dark:border-slate-700
            ${dragItem ? 'bg-blue-100 dark:bg-slate-700 border-blue-400 dark:border-blue-500' : ''}
        `}
      >
        {sequence.length === 0 && !dragItem && (
            <div className="text-blue-300 dark:text-slate-500 font-bold uppercase text-xs">Tap below To Arrange</div>
        )}
        
        {sequence.map((item, idx) => (
          <button 
            key={`seq-${idx}`} 
            onClick={() => handleRemove(item)}
            className="px-6 py-3 bg-white dark:bg-slate-900 text-slate-800 dark:text-white shadow-md rounded-xl font-bold border-b-4 border-blue-500 dark:border-blue-600 animate-in zoom-in hover:-translate-y-0.5 transition-transform"
          >
            {item}
          </button>
        ))}
      </div>

      {/* POOL */}
      <div className="flex flex-wrap justify-center gap-3">
        {pool.map((item, idx) => {
          const isHidden = dragItem?.id === item;
          return (
            <button 
              key={`pool-${idx}`}
              onPointerDown={(e) => handlePointerDown(e, item)}
              onClick={() => handleAdd(item)} // Simple Click Fallback
              className={`
                px-6 py-4 rounded-xl font-semibold shadow-sm active:scale-95 transition-transform border-2
                bg-white dark:bg-slate-800 
                border-slate-200 dark:border-slate-700
                text-slate-700 dark:text-slate-200
                hover:border-blue-300 dark:hover:border-slate-500
                ${isHidden ? 'opacity-0' : 'opacity-100'}
              `}
              style={{ touchAction: 'none' }}
            >
              {item}
            </button>
          );
        })}
      </div>

      {/* DRAG OVERLAY */}
      {dragItem && createPortal(
        <div 
          className="fixed z-[9999] px-6 py-4 bg-blue-600 text-white shadow-2xl rounded-xl font-bold text-lg pointer-events-none border-2 border-white/20"
          style={{
            left: dragItem.x - dragItem.offsetX,
            top: dragItem.y - dragItem.offsetY,
            width: dragItem.width,
            height: dragItem.height,
            transform: 'scale(1.05) rotate(-2deg)',
          }}
        >
          {dragItem.text}
        </div>,
        document.body
      )}
    </div>
  );
};
