
import React, { useMemo } from 'react';
import { Question } from '../../types';
import { ChevronRight, RotateCcw } from 'lucide-react';

interface Props {
  question: Question;
  currentAnswer: number[] | null;
  onAnswerChange: (ans: number[]) => void;
  isSubmitting?: boolean;
}

export const PizzaBuilderView: React.FC<Props> = ({ question, currentAnswer, onAnswerChange, isSubmitting }) => {
  const totalSlices = question.interactiveData?.totalSlices || 4; 
  // Generate IDs for slices: [0, 1, 2, 3...]
  const sliceIds = useMemo(() => Array.from({ length: totalSlices }, (_, i) => i), [totalSlices]);
  
  const slicesOnPlate = currentAnswer || [];

  const handleSliceClick = (id: number, isSource: boolean) => {
    if (isSubmitting) return;
    
    if (isSource) {
        // Move from Source (Kitchen) to Plate if not already there
        if (!slicesOnPlate.includes(id)) {
            onAnswerChange([...slicesOnPlate, id].sort());
        }
    } else {
        // Move from Plate back to Kitchen (Remove)
        onAnswerChange(slicesOnPlate.filter(x => x !== id));
    }
  };

  const handleReset = () => {
      if(!isSubmitting) onAnswerChange([]);
  };

  // --- SVG MATH HELPER ---
  // Calculates the SVG path command for a pie slice
  const getSlicePath = (index: number, total: number, radius: number) => {
      const startAngle = (index * 360) / total;
      const endAngle = ((index + 1) * 360) / total;

      // Convert degrees to radians, subtract 90deg to start at 12 o'clock
      const startRad = (startAngle - 90) * (Math.PI / 180);
      const endRad = (endAngle - 90) * (Math.PI / 180);

      const x1 = 100 + radius * Math.cos(startRad);
      const y1 = 100 + radius * Math.sin(startRad);
      const x2 = 100 + radius * Math.cos(endRad);
      const y2 = 100 + radius * Math.sin(endRad);

      // SVG Path command: Move to center, Line to start, Arc to end, Close path
      return `M 100 100 L ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2} Z`;
  };

  // Render a single Pizza Pie (Source or Target)
  const renderPie = (filledSlices: number[], isSource: boolean) => {
      const radius = 95; // SVG Viewbox is 0 0 200 200
      
      return (
        <div className="relative w-48 h-48 md:w-64 md:h-64 transition-all duration-300">
            {/* The Pan/Plate Background */}
            <div className={`absolute inset-0 rounded-full border-4 shadow-xl 
                ${isSource 
                    ? 'bg-slate-200 border-slate-300 dark:bg-slate-800 dark:border-slate-600' 
                    : 'bg-white border-blue-200 dark:bg-slate-700 dark:border-slate-600'
                }`} 
            />
            
            {/* The SVG Pizza */}
            <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full drop-shadow-lg">
                {sliceIds.map((i) => {
                    const isVisible = isSource ? !slicesOnPlate.includes(i) : slicesOnPlate.includes(i);
                    const path = getSlicePath(i, totalSlices, radius);
                    
                    return (
                        <g 
                            key={i} 
                            onClick={() => isVisible && handleSliceClick(i, isSource)}
                            className={`
                                transition-all duration-300 cursor-pointer origin-center
                                ${isVisible ? 'opacity-100 hover:scale-105' : 'opacity-0 pointer-events-none'}
                            `}
                            style={{ transformBox: 'fill-box' }}
                        >
                            {/* Crust/Cheese */}
                            <path d={path} fill="#FCD34D" stroke="#D97706" strokeWidth="2" />
                            
                            {/* Crust Rim */}
                            <path d={path} fill="none" stroke="#B45309" strokeWidth="8" strokeDasharray={`0 ${2 * Math.PI * radius / totalSlices + radius} ${2 * Math.PI * radius / totalSlices}`} />

                            {/* Pepperoni Toppings (Positions depend on slice angle) */}
                            {/* We rotate a group to place pepperoni consistently for each slice */}
                            <g transform={`rotate(${(i * 360 / totalSlices) + (180 / totalSlices)}, 100, 100)`}>
                                <circle cx="100" cy="50" r="6" fill="#EF4444" opacity="0.8" />
                                <circle cx="90" cy="70" r="5" fill="#EF4444" opacity="0.8" />
                                <circle cx="110" cy="80" r="5" fill="#EF4444" opacity="0.8" />
                            </g>
                        </g>
                    );
                })}
            </svg>

            {/* Empty State Text */}
            {!isSource && filledSlices.length === 0 && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="text-slate-300 font-bold text-lg uppercase tracking-widest">Plate Empty</span>
                </div>
            )}
        </div>
      );
  };

  return (
    <div className="w-full flex flex-col items-center gap-8 mt-4 select-none">
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
          {/* SOURCE (Kitchen) */}
          <div className="flex flex-col items-center gap-3">
              <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Kitchen Pan</span>
              {renderPie(sliceIds, true)}
          </div>

          {/* ARROW */}
          <div className="hidden md:flex flex-col items-center justify-center text-slate-300">
              <ChevronRight size={48} strokeWidth={3} />
          </div>

          {/* TARGET (Plate) */}
          <div className="flex flex-col items-center gap-3 relative">
              <span className="text-xs font-black text-brand-500 uppercase tracking-widest">
                  My Plate: <span className="text-lg">{slicesOnPlate.length}/{totalSlices}</span>
              </span>
              {renderPie(slicesOnPlate, false)}
              
              {/* Reset Button */}
              <button 
                onClick={handleReset}
                disabled={slicesOnPlate.length === 0 || isSubmitting}
                className="absolute -right-12 top-1/2 -translate-y-1/2 p-2 bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-red-500 rounded-full shadow-sm border border-slate-200 dark:border-slate-700 transition-colors disabled:opacity-0"
                title="Reset Plate"
              >
                  <RotateCcw size={20} />
              </button>
          </div>
      </div>

      <p className="text-slate-500 dark:text-slate-400 text-sm font-medium animate-pulse">
          Tap a slice to move it!
      </p>

    </div>
  );
};
