import React, { useState } from 'react';
import { Question } from '../../types';

interface Props {
  question: Question;
  currentAnswer: number[] | null;
  onAnswerChange: (ans: number[]) => void;
  isSubmitting?: boolean;
}

export const PizzaBuilderView: React.FC<Props> = ({ question, currentAnswer, onAnswerChange, isSubmitting }) => {
  const totalSlices = question.interactiveData?.totalSlices || 4; 
  // Create array [0, 1, 2, 3...]
  const sliceIds = Array.from({ length: totalSlices }, (_, i) => i);
  
  const slicesOnPlate = currentAnswer || [];

  const toggleSlice = (id: number) => {
    if (isSubmitting) return;
    if (slicesOnPlate.includes(id)) {
        // Remove from plate
        onAnswerChange(slicesOnPlate.filter(x => x !== id));
    } else {
        // Add to plate
        onAnswerChange([...slicesOnPlate, id]);
    }
  };

  // Helper for Pie Chart Slices (CSS Conic Gradients)
  // We use CSS clip-path or rotation to make realistic slices
  const getSliceStyle = (index: number, total: number) => {
      const rotation = (360 / total) * index;
      const skew = 90 - (360 / total);
      return {
          transform: `rotate(${rotation}deg) skewY(-${skew}deg)`,
      };
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-6 w-full select-none">
      
      {/* 1. THE PAN (Source) */}
      <div className="flex flex-col items-center gap-2">
          <span className="font-bold text-slate-400 uppercase text-xs">Kitchen</span>
          <div className="w-48 h-48 rounded-full bg-slate-200 dark:bg-slate-800 border-4 border-slate-300 dark:border-slate-600 relative overflow-hidden flex items-center justify-center shadow-inner">
              {sliceIds.map(i => !slicesOnPlate.includes(i) && (
                  <button
                    key={i}
                    onClick={() => toggleSlice(i)}
                    className="absolute w-full h-full bg-orange-400 border border-orange-600 hover:bg-orange-300 transition-colors origin-center"
                    style={{
                        clipPath: totalSlices === 4 ? 'polygon(50% 50%, 100% 0, 100% 100%)' : undefined, // Simple clip for 4
                        // For generic slices we usually use complex CSS or SVG. 
                        // For simplicity in this text-based code, let's use simple buttons if complex CSS fails.
                        // Or simpler: Just round buttons in a grid for the "Kitchen"
                    }} 
                  >
                     {/* If CSS slices are too complex without external CSS, we use a grid layout fallback */}
                  </button>
              ))}
              
              {/* FALLBACK VISUAL: Simple Grid if CSS Slices are tricky */}
              <div className="absolute inset-0 flex flex-wrap content-center justify-center gap-2 p-4 pointer-events-none">
                 {sliceIds.map(i => !slicesOnPlate.includes(i) && (
                     <div key={i} className="pointer-events-auto w-10 h-10 bg-yellow-400 rounded-full border-2 border-yellow-600 flex items-center justify-center shadow-sm cursor-pointer hover:scale-110 active:scale-95 transition-transform"
                          onClick={() => toggleSlice(i)}>
                        🍕
                     </div>
                 ))}
              </div>
          </div>
      </div>

      {/* ARROW */}
      <div className="text-slate-300 dark:text-slate-600">➔</div>

      {/* 2. THE PLATE (Target) */}
      <div className="flex flex-col items-center gap-2">
          <span className="font-bold text-blue-500 uppercase text-xs">My Plate ({slicesOnPlate.length}/{totalSlices})</span>
          <div className="w-56 h-56 rounded-full bg-white dark:bg-slate-900 border-4 border-blue-200 dark:border-blue-900 relative flex items-center justify-center shadow-xl">
              
              {slicesOnPlate.length === 0 && <span className="text-slate-300 text-sm font-bold">Empty</span>}

              {/* Visualize Slices on Plate (Simple Layout) */}
              <div className="flex flex-wrap justify-center gap-1 p-6 w-40">
                  {slicesOnPlate.map(i => (
                      <button
                        key={i}
                        onClick={() => toggleSlice(i)} // Remove on click
                        className="w-12 h-12 bg-orange-100 border-2 border-orange-400 rounded-full flex items-center justify-center text-2xl shadow-md animate-in zoom-in hover:bg-red-50 hover:border-red-400 transition-colors"
                      >
                        🍕
                      </button>
                  ))}
              </div>
          </div>
      </div>

    </div>
  );
};