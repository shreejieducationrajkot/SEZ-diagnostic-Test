
import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Question } from '../../types';

// Helper hook for handling drag and drop logic
const useDragDrop = (onDrop: (itemId: string, bucketId: string) => void) => {
  const [dragItem, setDragItem] = useState<any>(null);
  const dragRef = useRef<any>(null);

  const handlePointerDown = (e: React.PointerEvent, item: any) => {
    // Prevent default browser behaviors (like text selection or scrolling)
    e.preventDefault();
    e.stopPropagation();

    const element = e.currentTarget as HTMLElement;
    const rect = element.getBoundingClientRect();
    
    // Store initial drag state in ref (mutable, no re-renders)
    dragRef.current = { 
        id: item.id, 
        text: item.text || item.label || item.id,
        startX: e.clientX, 
        startY: e.clientY,
        width: rect.width, 
        height: rect.height,
        offsetX: e.clientX - rect.left, 
        offsetY: e.clientY - rect.top,
        isDragging: false
    };
    
    // Add global event listeners to track movement outside the element
    window.addEventListener('pointermove', onPointerMove, { passive: false });
    window.addEventListener('pointerup', onPointerUp, { passive: false });
  };

  const onPointerMove = (e: PointerEvent) => {
    if (!dragRef.current) return;
    e.preventDefault();

    const dx = e.clientX - dragRef.current.startX;
    const dy = e.clientY - dragRef.current.startY;
    const dist = Math.hypot(dx, dy);

    // Only start "dragging" visually if moved more than 5 pixels (prevents accidental drags on taps)
    if (!dragRef.current.isDragging && dist > 5) {
        dragRef.current.isDragging = true;
        // Trigger state update to render the drag portal
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

    // Update position if already dragging
    if (dragRef.current.isDragging) {
        setDragItem((prev: any) => prev ? { ...prev, x: e.clientX, y: e.clientY } : null);
    }
  };

  const onPointerUp = (e: PointerEvent) => {
    if (!dragRef.current) return;
    
    // If we were dragging, check for drop zones
    if (dragRef.current.isDragging) {
        // Find elements under the cursor
        const elements = document.elementsFromPoint(e.clientX, e.clientY);
        // Look for our specific drop zone attribute
        const dropZone = elements.find(el => el.getAttribute('data-drop-zone') === 'sorter-bucket');
        
        if (dropZone) {
          const bucketId = dropZone.getAttribute('data-bucket-id');
          if (bucketId) onDrop(dragRef.current.id, bucketId);
        }
    }
    
    // Cleanup
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
  
  // Robustly find options from various possible data locations
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
  
  // Filter items that haven't been assigned to a bucket yet
  const unassigned = options.filter((o: any) => !assignments[o.id]);

  if (buckets.length === 0) return <div className="text-red-500 font-bold p-4 border border-red-200 bg-red-50 rounded-lg">Error: No Categories defined in question data.</div>;
  if (options.length === 0) return <div className="text-red-500 font-bold p-4 border border-red-200 bg-red-50 rounded-lg">Error: No Items found to sort.</div>;

  return (
    <div className="flex flex-col gap-8 mt-6 w-full select-none touch-none">
      
      {/* SOURCE POOL */}
      <div className="min-h-[140px] p-6 bg-slate-100 dark:bg-slate-950/50 rounded-3xl border-2 border-dashed border-slate-300 dark:border-slate-700 flex flex-wrap gap-4 justify-center items-center relative transition-colors">
         
         {unassigned.length === 0 && !dragItem && (
             <div className="text-slate-400 font-bold text-sm italic text-center w-full animate-pulse">
                 All items sorted! Check your answer.
             </div>
         )}
         
         {unassigned.map((item: any) => (
             <div
               key={item.id}
               onPointerDown={(e) => handlePointerDown(e, item)}
               className={`
                 px-6 py-4 rounded-2xl font-black border-2 shadow-sm
                 bg-white dark:bg-slate-800 
                 border-slate-200 dark:border-slate-600 
                 text-slate-800 dark:text-white 
                 cursor-grab active:cursor-grabbing hover:-translate-y-1 transition-all z-10
                 hover:border-blue-400 dark:hover:border-blue-500
                 ${dragItem?.id === item.id ? 'opacity-0' : 'opacity-100'}
               `}
               style={{ touchAction: 'none' }} // Critical for touch devices
             >
               {item.text || item.label || item.id}
             </div>
         ))}
      </div>

      <div className="text-center text-xs text-slate-400 font-bold uppercase tracking-widest flex items-center justify-center gap-2">
          <span>👇 Drag items into the correct box 👇</span>
      </div>

      {/* BUCKETS */}
      <div className="grid grid-cols-2 gap-4 md:gap-8">
         {buckets.map((bucket: any) => (
             <div 
                key={bucket.id}
                data-drop-zone="sorter-bucket"
                data-bucket-id={bucket.id}
                className={`
                    flex flex-col h-full rounded-3xl border-2 transition-all overflow-hidden min-h-[200px]
                    ${dragItem ? 'scale-[1.02] shadow-xl' : ''}
                    bg-blue-50 dark:bg-slate-800
                    border-blue-200 dark:border-slate-700
                `}
             >
                 {/* Bucket Header */}
                 <div className="bg-blue-100 dark:bg-slate-700 p-4 text-center font-black uppercase text-sm md:text-base text-blue-900 dark:text-blue-100 pointer-events-none border-b border-blue-200 dark:border-slate-600">
                     {bucket.label}
                 </div>
                 
                 {/* Bucket Content */}
                 <div className="p-4 flex flex-col gap-2 flex-1 pointer-events-none">
                     {options.filter((o: any) => assignments[o.id] === bucket.id).map((o: any) => (
                         <div key={o.id} className="w-full px-4 py-3 bg-white dark:bg-slate-900 rounded-xl text-sm font-bold border border-slate-200 dark:border-slate-600 text-slate-800 dark:text-white flex justify-between items-center shadow-sm pointer-events-auto animate-in zoom-in slide-in-from-bottom-2">
                             <span>{o.text || o.label || o.id}</span>
                             <button 
                                onClick={() => handleAssign(o.id, "")} 
                                className="p-1.5 hover:bg-red-100 dark:hover:bg-red-900/30 text-slate-400 hover:text-red-500 rounded-lg transition-colors"
                                title="Remove"
                             >
                                ✕
                             </button>
                         </div>
                     ))}
                 </div>
             </div>
         ))}
      </div>

      {/* DRAG OVERLAY PORTAL (The Ghost Image) */}
      {dragItem && createPortal(
        <div 
          className="fixed z-[9999] px-6 py-4 bg-blue-600 text-white shadow-2xl rounded-2xl font-bold text-lg pointer-events-none border-4 border-white/30"
          style={{
            left: dragItem.x - dragItem.offsetX,
            top: dragItem.y - dragItem.offsetY,
            width: dragItem.width,
            height: dragItem.height,
            transform: 'rotate(-3deg) scale(1.05)',
            boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.3)'
          }}
        >
          {dragItem.text}
        </div>,
        document.body
      )}
    </div>
  );
};
