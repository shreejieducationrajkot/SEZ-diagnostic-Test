import React from 'react';
import { Question } from '../../types';

interface Props {
  question: Question;
  currentAnswer: { x: number, y: number } | null;
  onAnswerChange: (ans: { x: number, y: number }) => void;
}

export const GraphInputView: React.FC<Props> = ({ question, currentAnswer, onAnswerChange }) => {
  const range = question.interactiveData?.gridRange || 5; // e.g. -5 to 5
  const gridSize = 300;
  const step = gridSize / (range * 2);

  const handleClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    // Convert pixel to grid coordinate
    const rawX = (clickX / step) - range;
    const rawY = -((clickY / step) - range); // Y is inverted in CSS

    // Snap to nearest integer
    const x = Math.round(rawX);
    const y = Math.round(rawY);

    onAnswerChange({ x, y });
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-6">
        <div className="relative bg-white dark:bg-slate-900 border-2 border-slate-300 cursor-crosshair shadow-inner"
             style={{ width: gridSize, height: gridSize }}
             onClick={handleClick}>
             
             {/* Axes */}
             <div className="absolute top-1/2 left-0 w-full h-[2px] bg-slate-800 dark:bg-slate-400"></div>
             <div className="absolute top-0 left-1/2 h-full w-[2px] bg-slate-800 dark:bg-slate-400"></div>

             {/* Grid Lines (Simple background pattern) */}
             <div className="absolute inset-0 pointer-events-none opacity-20"
                  style={{ backgroundImage: `linear-gradient(#ccc 1px, transparent 1px), linear-gradient(90deg, #ccc 1px, transparent 1px)`, backgroundSize: `${step}px ${step}px` }}>
             </div>

             {/* The Plotted Point */}
             {currentAnswer && (
                 <div className="absolute w-4 h-4 bg-red-600 rounded-full shadow-md transition-all duration-200"
                      style={{
                          left: (currentAnswer.x + range) * step - 8,
                          top: (range - currentAnswer.y) * step - 8 // Invert Y
                      }}>
                 </div>
             )}
        </div>
        
        <div className="text-xl font-mono font-bold text-slate-600 dark:text-slate-300">
            Point: {currentAnswer ? `(${currentAnswer.x}, ${currentAnswer.y})` : '(?, ?)'}
        </div>
        <div className="text-xs text-slate-400">Tap grid to plot point</div>
    </div>
  );
};