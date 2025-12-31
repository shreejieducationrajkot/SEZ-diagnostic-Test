import React from 'react';
import { Question } from '../../types';

interface Props {
  question: Question;
  currentAnswer: any;
  onAnswerChange: (ans: any) => void;
  grade?: number;
}

export const BalanceView: React.FC<Props> = ({ question, currentAnswer, onAnswerChange, grade = 0 }) => {
  const isAdvanced = grade >= 9;

  // --- MODE A: ADVANCED (Torque/Moments) ---
  if (isAdvanced) {
      // Example: Left side has 10kg at 4m distance. Moment = 40.
      // Right side has 5kg weight. User must slide it to 8m distance.
      const leftWeight = question.interactiveData?.leftWeight || 10;
      const leftDist = question.interactiveData?.leftDistance || 4;
      const rightWeight = question.interactiveData?.rightWeight || 5;
      
      const userDist = currentAnswer || 1; // User adjusts distance (1 to 10m)

      const leftMoment = leftWeight * leftDist;
      const rightMoment = rightWeight * userDist;
      
      // Calculate tilt based on Moment difference
      const diff = rightMoment - leftMoment;
      const tilt = Math.max(-20, Math.min(20, diff / 2));

      return (
        <div className="flex flex-col items-center gap-8 mt-12 w-full max-w-2xl mx-auto select-none">
            {/* BEAM */}
            <div className="relative w-full h-2 bg-slate-600 rounded transition-transform duration-500 ease-out" style={{ transform: `rotate(${tilt}deg)` }}>
                {/* Pivot */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[30px] border-b-slate-800"></div>

                {/* Left Weight (Fixed) */}
                <div className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-blue-600 rounded shadow-md flex items-center justify-center text-white text-xs font-bold"
                     style={{ left: `${50 - (leftDist * 5)}%` }}>
                    {leftWeight}kg
                </div>

                {/* Right Weight (Draggable/Slidable) */}
                <div className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-orange-500 rounded shadow-md flex items-center justify-center text-white text-xs font-bold transition-all duration-300"
                     style={{ left: `${50 + (userDist * 5)}%` }}>
                    {rightWeight}kg
                </div>

                {/* Ruler Markings */}
                <div className="absolute -bottom-6 w-full flex justify-between px-2 text-[10px] font-mono text-slate-400">
                    <span>10m</span><span>5m</span><span className="text-slate-900">0</span><span>5m</span><span>10m</span>
                </div>
            </div>

            {/* CONTROLS */}
            <div className="w-full bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 mt-8">
                <label className="flex justify-between font-bold text-slate-700 dark:text-slate-300 mb-2">
                    <span>Adjust Distance (Right Mass)</span>
                    <span className="text-orange-500">{userDist} m</span>
                </label>
                <input 
                    type="range" min="1" max="9" step="0.5" 
                    value={userDist}
                    onChange={(e) => onAnswerChange(parseFloat(e.target.value))}
                    className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
            </div>
            
            <div className="text-sm text-slate-500 italic">
                 Principle of Moments: <span className="font-mono">W₁ × D₁ = W₂ × D₂</span>
            </div>
        </div>
      );
  }

  // --- MODE B: JUNIOR (Simple Addition) ---
  const targetWeight = question.interactiveData?.leftWeight || 10;
  const userWeight = currentAnswer || 0;
  const diff = userWeight - targetWeight;
  const tilt = Math.max(-20, Math.min(20, diff * 2));

  return (
    <div className="flex flex-col items-center gap-8 mt-8 select-none">
       <div className="relative w-64 h-4 bg-slate-300 rounded-full transition-transform duration-700 ease-out" style={{ transform: `rotate(${tilt}deg)` }}>
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[40px] border-b-slate-400"></div>
            <div className="absolute left-0 top-2 -translate-x-1/2 flex flex-col items-center">
                 <div className="w-1 h-12 bg-slate-400"></div>
                 <div className="w-16 h-16 bg-blue-500 rounded-lg shadow-lg flex items-center justify-center text-white font-bold mt-[-4px]">{targetWeight}kg</div>
            </div>
            <div className="absolute right-0 top-2 translate-x-1/2 flex flex-col items-center">
                 <div className="w-1 h-12 bg-slate-400"></div>
                 <div className="w-16 h-16 bg-orange-500 rounded-lg shadow-lg flex items-center justify-center text-white font-bold mt-[-4px] transition-all">{userWeight}kg</div>
            </div>
       </div>
       <div className="h-16"></div>
       <div className="flex gap-4">
          {[1, 2, 5, 10].map(val => (
              <button key={val} onClick={() => onAnswerChange(userWeight + val)} className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 border-2 border-orange-200 shadow-sm font-bold hover:bg-orange-50 active:scale-95 transition-all">+{val}</button>
          ))}
          <button onClick={() => onAnswerChange(0)} className="px-4 py-2 text-sm text-red-500 font-bold">Reset</button>
       </div>
    </div>
  );
};