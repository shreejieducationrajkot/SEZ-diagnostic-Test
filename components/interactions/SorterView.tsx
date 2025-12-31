
import React, { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Question } from '../../types';

const useDragDrop = (onDrop: (itemId: string, bucketId: string) => void) => {
  const [dragItem, setDragItem] = useState<any>(null);
  const dragRef = useRef<any>(null);

  const handlePointerDown = (e: React.PointerEvent, item: any) => {
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    
    dragRef.current = { 
        id: item.id, 
        text: item.text,
        startX: e.clientX, 
        startY: e.clientY,
        width: rect.width, 
        height: rect.height,
        offsetX: e.clientX - rect.left, 
        offsetY: e.clientY - rect.top,
        isDragging: false
    };
    
    // We initiate listening but don't show drag overlay until moved
    window.addEventListener('pointermove', onPointerMove, { passive: false });
    window.addEventListener('pointerup', onPointerUp, { passive: false });
  };

  const onPointerMove = (e: PointerEvent) => {
    if (!dragRef.current) return;
    e.preventDefault();

    const dx = e.clientX - dragRef.current.startX;
    const dy = e.clientY - dragRef.current.startY;
    const dist = Math.hypot(dx, dy);

    // Threshold to start dragging (prevents accidental drags on clicks)
    if (!dragRef.current.isDragging && dist > 5) {
        dragRef.current.isDragging = true;
        // Now we enable the overlay
        setDragItem({
            id: dragRef.current.id,
            text: dragRef.current.text,
            x: e.clientX,
            y: e.clientY,
            width: dragRef.current.width,
            height: dragRef.current.height,
            offsetX: dragRef.current.offsetX,
            offsetY: dragRef.current.offsetY
        });
    }

    if (dragRef.current.isDragging) {
        setDragItem((prev: any) => prev ? { ...prev, x: e.clientX, y: e.clientY } : null);
    }
  };

  const onPointerUp = (e: PointerEvent) => {
    if (!dragRef.current) return;
    
    if (dragRef.current.isDragging) {
        const elements = document.elementsFromPoint(e.clientX, e.clientY);
        const dropZone = elements.find(el => el.getAttribute('data-drop-zone') === 'sorter-bucket');
        
        if (dropZone) {
          const bucketId = dropZone.getAttribute('data-bucket-id');
          if (bucketId) onDrop(dragRef.current.id, bucketId);
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
  currentAnswer: any;
  onAnswerChange: (ans: any) => void;
  isSubmitting?: boolean;
}

export const SorterView: React.FC<Props> = ({ question, currentAnswer, onAnswerChange, isSubmitting }) => {
  const data = question.interactiveData || {};
  
  // Robustly find options
  const options = question.options 
               || data.options 
               || data.items 
               || [];

  const buckets = data.categories || [];
  const assignments = currentAnswer || {};

  const handleAssign = (itemId: string, bucketId: string) => {
    if (isSubmitting) return;
    onAnswerChange({ ...assignments, [itemId]: bucketId });
  };

  const { handlePointerDown, dragItem } = useDragDrop(handleAssign);
  const unassigned = options.filter((o: any) => !assignments[o.id]);

  if (buckets.length === 0) return <div className="text-red-500">Error: No Categories defined.</div>;
  if (options.length === 0) return <div className="text-red-500">Error: No Items found to sort.</div>;

  return (
    <div className="flex flex-col gap-6 mt-6 w-full select-none touch-none">
      
      {/* SOURCE POOL */}
      <div className="min-h-[120px] p-6 bg-slate-100 dark:bg-slate-900/50 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 flex flex-wrap gap-4 justify-center items-center relative transition-colors">
         
         {unassigned.length === 0 && (
             <div className="text-slate-400 font-medium italic text-center w-full">
                 Great! All items are sorted.
             </div>
         )}
         
         {unassigned.map((item: any) => (
             <div
               key={item.id}
               onPointerDown={(e) => handlePointerDown(e, item)}
               className={`
                 px-6 py-4 bg-white dark:bg-slate-800 shadow-md rounded-xl font-bold border-2 border-slate-200 dark:border-slate-600 
                 text-slate-800 dark:text-slate-100 cursor-grab active:cursor-grabbing hover:border-blue-400 hover:-translate-y-1 transition-all
                 ${dragItem?.id === item.id ? 'opacity-0' : 'opacity-100'}
               `}
               style={{ touchAction: 'none' }} 
             >
               {item.text || item.label || item.id}
             </div>
         ))}
      </div>

      <div className="text-center text-xs text-slate-400 font-bold uppercase tracking-widest">
          Drag items to correct box
      </div>

      {/* BUCKETS */}
      <div className="grid grid-cols-2 gap-4 md:gap-8">
         {buckets.map((bucket: any) => (
             <div 
                key={bucket.id}
                data-drop-zone="sorter-bucket"
                data-bucket-id={bucket.id}
                className={`
                    flex flex-col h-full bg-blue-50 dark:bg-slate-800/80 rounded-2xl border-2 transition-all overflow-hidden
                    ${dragItem ? 'border-blue-400 bg-blue-100/50 scale-[1.02]' : 'border-blue-200 dark:border-slate-600'}
                `}
             >
                 <div className="bg-blue-100 dark:bg-slate-700 p-4 text-center font-black uppercase text-sm text-blue-900 dark:text-blue-100 pointer-events-none border-b border-blue-200 dark:border-slate-600">
                     {bucket.label}
                 </div>
                 
                 <div className="p-4 flex flex-col gap-2 min-h-[150px] pointer-events-none">
                     {options.filter((o: any) => assignments[o.id] === bucket.id).map((o: any) => (
                         <div key={o.id} className="w-full px-4 py-3 bg-white dark:bg-slate-900 rounded-lg text-sm font-bold border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 flex justify-between items-center shadow-sm pointer-events-auto animate-in zoom-in">
                             <span>{o.text || o.label || o.id}</span>
                             <button 
                                onClick={() => handleAssign(o.id, "")} 
                                className="p-1 hover:bg-red-100 text-slate-400 hover:text-red-500 rounded transition-colors"
                                title="Remove"
                             >
                                ×
                             </button>
                         </div>
                     ))}
                 </div>
             </div>
         ))}
      </div>

      {/* DRAG OVERLAY PORTAL */}
      {dragItem && createPortal(
        <div 
          className="fixed z-[9999] px-6 py-4 bg-blue-600 text-white shadow-2xl rounded-xl font-bold text-lg pointer-events-none border-2 border-white/20"
          style={{
            left: dragItem.x - dragItem.offsetX,
            top: dragItem.y - dragItem.offsetY,
            width: dragItem.width,
            height: dragItem.height,
            transform: 'rotate(-3deg) scale(1.05)',
            boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
          }}
        >
          {dragItem.text}
        </div>,
        document.body
      )}
    </div>
  );
};
