import React, { useState } from 'react';
import { Question } from '../../types';
import { Zap, Gauge } from 'lucide-react';

interface Props {
  question: Question;
  currentAnswer: any;
  onAnswerChange: (ans: any) => void;
  // We use this prop to decide the maturity level
  grade?: number; 
}

export const CircuitView: React.FC<Props> = ({ question, currentAnswer, onAnswerChange, grade = 0 }) => {
  const isAdvanced = grade >= 9;

  // --- MODE A: ADVANCED (Ohm's Law) ---
  if (isAdvanced) {
    // Default values if not provided in data
    const resistance = question.interactiveData?.resistance || 10; // Ohms
    const targetCurrent = question.interactiveData?.targetCurrent || 2; // Amps
    
    // User controls Voltage
    const voltage = currentAnswer?.voltage || 0;
    const current = (voltage / resistance).toFixed(1);
    const isCorrect = parseFloat(current) === targetCurrent;

    return (
      <div className="flex flex-col items-center gap-8 mt-6 w-full max-w-lg mx-auto select-none">
         
         {/* 1. DIGITAL MULTIMETER DISPLAY */}
         <div className="w-full bg-slate-900 rounded-xl border-4 border-slate-600 p-6 relative shadow-2xl">
             <div className="absolute top-2 left-4 text-slate-400 text-xs font-mono">FLUKE 87 V TRUE RMS MULTIMETER</div>
             <div className="bg-emerald-900/40 border border-emerald-900 rounded h-24 flex items-center justify-end px-4 font-mono text-5xl text-emerald-400 shadow-inner">
                 {current} <span className="text-xl ml-2 text-emerald-600">A</span>
             </div>
             
             {/* Circuit Schematic Visual */}
             <div className="flex justify-between items-center mt-4 text-slate-400 text-sm font-bold">
                 <div className="flex flex-col items-center">
                    <span className="text-xs uppercase">Resistance</span>
                    <span className="text-white text-lg">{resistance}Ω</span>
                 </div>
                 <div className="flex flex-col items-center">
                    <span className="text-xs uppercase">Target</span>
                    <span className="text-yellow-400 text-lg">{targetCurrent}A</span>
                 </div>
             </div>
         </div>

         {/* 2. VOLTAGE REGULATOR (Slider) */}
         <div className="w-full bg-slate-100 dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
             <label className="flex justify-between font-bold text-slate-700 dark:text-slate-200 mb-4">
                 <span className="flex items-center gap-2"><Zap size={18} className="text-yellow-500"/> DC Voltage Source</span>
                 <span className="text-blue-600 font-mono text-xl">{voltage} V</span>
             </label>
             
             <input
                type="range"
                min={0}
                max={resistance * targetCurrent * 2} // Scale dynamically
                step={1}
                value={voltage}
                onChange={(e) => onAnswerChange({ voltage: parseInt(e.target.value) })}
                className="w-full h-4 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-blue-600"
             />
             <div className="flex justify-between text-xs font-bold text-slate-400 mt-2">
                 <span>0V</span>
                 <span>MAX</span>
             </div>
         </div>

         <div className="text-xs text-slate-400 italic">
             Hint: Use Ohm's Law (V = I × R) to find the correct voltage.
         </div>
      </div>
    );
  }

  // --- MODE B: JUNIOR (Simple Switch) ---
  const isClosed = currentAnswer?.switch === 'closed';
  const toggle = () => onAnswerChange({ switch: isClosed ? 'open' : 'closed' });

  return (
    <div className="flex flex-col items-center gap-6 mt-6 select-none">
        <div className={`relative w-64 h-40 border-4 rounded-xl flex items-center justify-center transition-colors duration-500 ${isClosed ? 'border-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.5)]' : 'border-slate-300'}`}>
            <div className={`absolute top-[-20px] transition-all duration-300 ${isClosed ? 'scale-110 drop-shadow-[0_0_15px_yellow]' : 'opacity-50'}`}>💡</div>
            <div className={`w-full h-full absolute inset-0 border-t-0 border-l-4 border-r-4 border-b-4 rounded-b-xl ${isClosed ? 'border-yellow-500' : 'border-slate-300'}`}></div>
            <div onClick={toggle} className="absolute bottom-[-10px] bg-white dark:bg-slate-900 px-4 cursor-pointer">
                <div className={`w-12 h-1 bg-slate-800 transition-transform duration-300 origin-left ${isClosed ? 'rotate-0' : '-rotate-45'}`}></div>
            </div>
        </div>
        <button onClick={toggle} className={`px-6 py-3 rounded-xl font-bold transition-all ${isClosed ? 'bg-green-500 text-white' : 'bg-slate-200 text-slate-600'}`}>
            {isClosed ? "Circuit CLOSED (On)" : "Circuit OPEN (Off)"}
        </button>
    </div>
  );
};