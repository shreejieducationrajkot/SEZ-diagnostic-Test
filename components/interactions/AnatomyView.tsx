import React, { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Question } from '../../types';
import { CheckCircle2 } from 'lucide-react';

// --- 1. ROBUST DRAG HOOK ---
const useDragDrop = (onDrop: (itemId: string, x: number, y: number) => void) => {
  const [dragItem, setDragItem] = useState<any>(null);
  const dragRef = useRef<any>(null);

  const handlePointerDown = (e: React.PointerEvent, item: any) => {
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    dragRef.current = { id: item.id };
    setDragItem({
      id: item.id, text: item.label,
      x: e.clientX, y: e.clientY,
      width: rect.width, height: rect.height,
      offsetX: e.clientX - rect.left, offsetY: e.clientY - rect.top
    });
    
    // Attach global listeners
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
    
    // Check if dropped inside the Image Container
    const elements = document.elementsFromPoint(e.clientX, e.clientY);
    const dropZone = elements.find(el => el.getAttribute('data-drop-zone') === 'anatomy-image');

    if (dropZone && dragItem) {
        const rect = dropZone.getBoundingClientRect();
        // Calculate percentage position so it works on any screen size
        const dropX = ((e.clientX - rect.left) / rect.width) * 100;
        const dropY = ((e.clientY - rect.top) / rect.height) * 100;
        onDrop(dragItem.id, dropX, dropY);
    }

    setDragItem(null);
    dragRef.current = null;
    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerup', onPointerUp);
  };

  return { handlePointerDown, dragItem };
};

// --- 2. MAIN COMPONENT ---
interface Props {
  question: Question;
  currentAnswer: string[] | null;
  onAnswerChange: (ans: string[]) => void;
  isSubmitting?: boolean;
  grade?: number; // Added grade prop for maturity logic
}

export const AnatomyView: React.FC<Props> = ({ question, currentAnswer, onAnswerChange, isSubmitting, grade = 0 }) => {
  const items = question.interactiveData?.items || [];
  
  // Safety: Ensure currentAnswer is always an array
  const placedIds = Array.isArray(currentAnswer) ? currentAnswer : [];
  
  // Grade Maturity Check
  const isAdvanced = grade >= 9;

  const handleDrop = (itemId: string, x: number, y: number) => {
    if (isSubmitting) return;
    // Add to list if not already there
    if (!placedIds.includes(itemId)) {
        onAnswerChange([...placedIds, itemId]);
    }
  };
  
  const { handlePointerDown, dragItem } = useDragDrop(handleDrop);

  return (
    <div className="flex flex-col md:flex-row gap-6 w-full mt-6 select-none touch-none">
      
      {/* 3. IMAGE ZONE (The Diagram) */}
      <div 
        data-drop-zone="anatomy-image"
        className={`
          relative flex-1 min-h-[350px] flex items-center justify-center overflow-hidden transition-all
          ${isAdvanced 
            ? 'bg-white border-2 border-slate-900 rounded-sm shadow-sm' // Senior: Sharp, Technical
            : 'bg-slate-100 border-4 border-slate-300 rounded-3xl'      // Junior: Soft, Playful
          }
        `}
      >
          {/* Senior Mode: Grid Background */}
          {isAdvanced && (
            <div className="absolute inset-0 opacity-10 pointer-events-none" 
                 style={{ 
                   backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', 
                   backgroundSize: '20px 20px' 
                 }} 
            />
          )}

          {/* Placeholder or Actual Image */}
          <div className="opacity-20 pointer-events-none select-none text-center">
             

[Image of Human Body Outline]

             {/* <img src={question.interactiveData?.imageUrl} alt="Diagram" /> */}
          </div>

          {/* Target Zones (Hints) */}
          {items.map((item: any) => (
              <div 
                key={`target-${item.id}`}
                className={`absolute w-6 h-6 -ml-3 -mt-3 rounded-full border border-dashed flex items-center justify-center
                   ${isAdvanced ? 'border-slate-800 bg-slate-200/50' : 'border-blue-400 bg-blue-100/50'}
                `}
                style={{ left: `${item.x}%`, top: `${item.y}%` }}
              >
                <div className="w-1 h-1 bg-current rounded-full opacity-50"></div>
              </div>
          ))}

          {/* Placed Labels */}
          {items.map((item: any) => {
             if (!placedIds.includes(item.id)) return null;
             return (
                 <div 
                    key={`placed-${item.id}`}
                    className={`
                      absolute px-3 py-1 text-xs font-bold flex items-center gap-1 animate-in zoom-in shadow-md
                      ${isAdvanced 
                        ? 'bg-white text-slate-900 border border-slate-900 rounded-sm' // Senior Style
                        : 'bg-white text-green-600 border-2 border-green-500 rounded-full' // Junior Style
                      }
                    `}
                    style={{ left: `${item.x}%`, top: `${item.y}%`, transform: 'translate(-50%, -50%)' }}
                 >
                    {item.label} <CheckCircle2 size={12}/>
                 </div>
             );
          })}
      </div>

      {/* 4. LABELS BANK (Draggables) */}
      <div className={`w-full md:w-1/3 flex flex-col gap-3 p-4 rounded-xl ${isAdvanced ? 'bg-slate-50 border border-slate-200' : 'bg-white'}`}>
         <h4 className="font-bold text-slate-400 text-xs uppercase tracking-wider">
            {isAdvanced ? "Component List" : "Drag Labels"}
         </h4>
         
         {items.map((item: any) => {
             const isPlaced = placedIds.includes(item.id);
             const isHidden = dragItem?.id === item.id;
             return (
                 <div
                    key={item.id}
                    onPointerDown={(e) => !isPlaced && handlePointerDown(e, item)}
                    className={`
                        p-3 font-bold border-2 transition-all flex justify-between items-center select-none
                        ${isAdvanced ? 'rounded-md text-sm' : 'rounded-xl'} 
                        ${isPlaced 
                            ? 'bg-slate-100 border-transparent text-slate-300 cursor-default' 
                            : 'bg-white border-slate-200 cursor-grab active:cursor-grabbing hover:border-blue-400 shadow-sm text-slate-700'
                        }
                        ${isHidden ? 'opacity-0' : 'opacity-100'}
                    `}
                    style={{ touchAction: 'none' }}
                 >
                    {item.label}
                    {isPlaced && <CheckCircle2 size={16} className="text-green-500"/>}
                 </div>
             );
         })}
         
         {placedIds.length === items.length && items.length > 0 && (
             <div className="mt-4 text-center text-xs font-bold text-green-600 uppercase tracking-widest animate-pulse">
                Diagram Complete
             </div>
         )}
      </div>

      {/* 5. DRAG OVERLAY (Follows Finger) */}
      {dragItem && createPortal(
        <div 
          className={`
            fixed z-[9999] px-4 py-2 text-white shadow-2xl font-bold text-sm pointer-events-none
            ${isAdvanced ? 'bg-slate-800 rounded-md' : 'bg-blue-600 rounded-full'}
          `}
          style={{
            left: dragItem.x - dragItem.offsetX,
            top: dragItem.y - dragItem.offsetY,
            width: dragItem.width,
            transform: 'rotate(-2deg) scale(1.05)'
          }}
        >
          {dragItem.text}
        </div>,
        document.body
      )}
    </div>
  );
};