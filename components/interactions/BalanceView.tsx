
import React, { useState, useEffect } from 'react';
import { Question } from '../../types';
import { RefreshCcw } from 'lucide-react';

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
      // (Keep existing Advanced Logic - Omitted for brevity as the request focused on Grade 5 primarily, 
      // but putting back the original code is safer to avoid breaking Grade 9+)
      const leftWeight = question.interactiveData?.leftWeight || 10;
      const leftDist = question.interactiveData?.leftDistance || 4;
      const rightWeight = question.interactiveData?.rightWeight || 5;
      const userDist = currentAnswer || 1;
      const leftMoment = leftWeight * leftDist;
      const rightMoment = rightWeight * userDist;
      const diff = rightMoment - leftMoment;
      const tilt = Math.max(-20, Math.min(20, diff / 2));

      return (
        <div className="flex flex-col items-center gap-8 mt-12 w-full max-w-2xl mx-auto select-none">
            <div className="relative w-full h-2 bg-slate-600 rounded transition-transform duration-500 ease-out" style={{ transform: `rotate(${tilt}deg)` }}>
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[30px] border-b-slate-800"></div>
                <div className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-blue-600 rounded shadow-md flex items-center justify-center text-white text-xs font-bold" style={{ left: `${50 - (leftDist * 5)}%` }}>{leftWeight}kg</div>
                <div className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-orange-500 rounded shadow-md flex items-center justify-center text-white text-xs font-bold transition-all duration-300" style={{ left: `${50 + (userDist * 5)}%` }}>{rightWeight}kg</div>
                <div className="absolute -bottom-6 w-full flex justify-between px-2 text-[10px] font-mono text-slate-400"><span>10m</span><span>5m</span><span className="text-slate-900">0</span><span>5m</span><span>10m</span></div>
            </div>
            <div className="w-full bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 mt-8">
                <label className="flex justify-between font-bold text-slate-700 dark:text-slate-300 mb-2"><span>Adjust Distance</span><span className="text-orange-500">{userDist} m</span></label>
                <input type="range" min="1" max="9" step="0.5" value={userDist} onChange={(e) => onAnswerChange(parseFloat(e.target.value))} className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-orange-500"/>
            </div>
        </div>
      );
  }

  // --- MODE B: JUNIOR (Simple Addition - SVG Enhanced) ---
  const targetWeight = question.interactiveData?.leftWeight || 15;
  const userTotal = currentAnswer || 0;
  
  // We maintain a local history of weights added to show them stacked visually
  const [weightsOnPan, setWeightsOnPan] = useState<number[]>([]);

  // Sync visual stack with answer if answer exists but stack is empty (e.g. reload)
  useEffect(() => {
      if (userTotal > 0 && weightsOnPan.length === 0) {
          // If we have a total but no history, just show one big block representing total
          setWeightsOnPan([userTotal]);
      } else if (userTotal === 0) {
          setWeightsOnPan([]);
      }
  }, [userTotal]);

  const addWeight = (w: number) => {
      const newStack = [...weightsOnPan, w];
      setWeightsOnPan(newStack);
      onAnswerChange(newStack.reduce((a,b)=>a+b, 0));
  };

  const resetWeights = () => {
      setWeightsOnPan([]);
      onAnswerChange(0);
  };

  // Physics calculation for tilt
  const diff = userTotal - targetWeight;
  // Limit tilt to +/- 20 degrees. Positive diff means Right side is heavier (goes down, so positive rotation)
  const tilt = Math.max(-20, Math.min(20, diff * 1.5)); 

  return (
    <div className="flex flex-col items-center gap-8 mt-4 select-none w-full max-w-lg mx-auto">
       
       {/* 1. THE SCALE (SVG) */}
       <div className="relative w-full h-48">
            {/* The Beam Group - Rotates based on tilt */}
            <div 
                className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] origin-bottom"
                style={{ transform: `rotate(${tilt}deg)`, transformOrigin: '50% 60px' }} // Pivot point
            >
                {/* Crossbar */}
                <div className="absolute top-[55px] left-[10%] right-[10%] h-3 bg-slate-400 rounded-full shadow-sm"></div>
                
                {/* Pivot Circle */}
                <div className="absolute top-[50px] left-1/2 -translate-x-1/2 w-6 h-6 bg-slate-500 rounded-full border-2 border-slate-300 z-10"></div>

                {/* --- LEFT PAN (Target) --- */}
                {/* String */}
                <div className="absolute top-[60px] left-[10%] w-[2px] h-[80px] bg-slate-300 origin-top" style={{ transform: `rotate(${-tilt}deg)` }}></div>
                {/* Pan */}
                <div className="absolute top-[140px] left-[10%] -translate-x-1/2 w-24 h-4 bg-slate-400 rounded-b-full border-t-0 border-slate-500 shadow-md origin-top flex flex-col-reverse items-center justify-start" style={{ transform: `rotate(${-tilt}deg)` }}>
                    {/* The Target Weight Visual */}
                    <div className="w-16 h-16 bg-blue-600 rounded-lg border-b-4 border-blue-800 shadow-inner flex items-center justify-center text-white font-black text-xl mb-1 relative top-[-64px]">
                        {targetWeight}
                        <span className="text-[10px] font-normal absolute bottom-1">kg</span>
                    </div>
                </div>

                {/* --- RIGHT PAN (User) --- */}
                {/* String */}
                <div className="absolute top-[60px] right-[10%] w-[2px] h-[80px] bg-slate-300 origin-top" style={{ transform: `rotate(${-tilt}deg)` }}></div>
                {/* Pan */}
                <div className="absolute top-[140px] right-[10%] translate-x-1/2 w-24 h-4 bg-slate-400 rounded-b-full border-t-0 border-slate-500 shadow-md origin-top flex flex-col-reverse items-center justify-start" style={{ transform: `rotate(${-tilt}deg)` }}>
                    {/* Stacked User Weights */}
                    <div className="flex flex-col-reverse items-center mb-1 relative top-[-4px]">
                        {weightsOnPan.map((w, idx) => (
                            <div key={idx} className={`
                                w-12 rounded border-b-2 shadow-sm flex items-center justify-center text-[10px] font-bold text-white mb-[1px] animate-in slide-in-from-top-4 fade-in duration-300
                                ${w === 1 ? 'h-4 bg-amber-500 border-amber-700' : 
                                  w === 2 ? 'h-6 bg-slate-500 border-slate-700' :
                                  w === 5 ? 'h-8 bg-yellow-500 border-yellow-700' : 
                                  'h-10 bg-indigo-500 border-indigo-700'}
                            `}>
                                {w}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* The Base (Static) */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[80px] border-b-slate-700 z-0"></div>
       </div>

       {/* 2. CONTROLS */}
       <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 flex flex-col items-center gap-4 w-full">
          <div className="flex justify-between w-full px-4 text-sm font-bold text-slate-500">
              <span>Target: {targetWeight}kg</span>
              <span className={diff === 0 ? 'text-green-500' : 'text-orange-500'}>Current: {userTotal}kg</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
              {[1, 2, 5, 10].map(val => (
                  <button 
                    key={val} 
                    onClick={() => addWeight(val)} 
                    className={`
                        w-14 h-14 rounded-xl flex flex-col items-center justify-center font-black shadow-[0_4px_0_rgb(0,0,0,0.2)] active:shadow-none active:translate-y-[4px] transition-all border-2
                        ${val === 1 ? 'bg-amber-400 border-amber-600 text-amber-900' : 
                          val === 2 ? 'bg-slate-300 border-slate-500 text-slate-800' :
                          val === 5 ? 'bg-yellow-300 border-yellow-600 text-yellow-900' : 
                          'bg-indigo-400 border-indigo-600 text-white'}
                    `}
                  >
                      <span className="text-lg">{val}</span>
                      <span className="text-[9px] uppercase opacity-70">kg</span>
                  </button>
              ))}
          </div>

          <button 
            onClick={resetWeights}
            className="flex items-center gap-2 text-slate-400 hover:text-red-500 text-sm font-bold mt-2 px-4 py-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
          >
             <RefreshCcw size={14} /> Reset Scale
          </button>
       </div>

    </div>
  );
};
