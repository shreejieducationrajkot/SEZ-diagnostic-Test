import React, { useState, useEffect } from 'react';
import { Question } from '../../types';

interface Props {
  question: Question;
  currentAnswer: number | null;
  onAnswerChange: (ans: number) => void;
  isSubmitting?: boolean;
}

export const ProfitLossView: React.FC<Props> = ({ question, currentAnswer, onAnswerChange, isSubmitting }) => {
  const costPrice = question.interactiveData?.costPrice || 100;
  // If no answer yet, default to Cost Price (0 profit)
  const sellingPrice = currentAnswer ?? costPrice;
  
  const profit = sellingPrice - costPrice;
  const maxRange = costPrice + 50;
  const minRange = Math.max(0, costPrice - 50);

  // Calculate Bar Height (Max height 100%)
  const percentage = Math.min(Math.abs(profit) * 2, 100); 
  
  const barColor = profit > 0 ? 'bg-green-500' : profit < 0 ? 'bg-red-500' : 'bg-slate-300';
  const textColor = profit > 0 ? 'text-green-600' : profit < 0 ? 'text-red-500' : 'text-slate-500';

  return (
    <div className="w-full max-w-lg mx-auto flex flex-col gap-8 mt-6 select-none">
      
      {/* 1. VISUALIZATION CARD */}
      <div className="flex gap-6 items-stretch justify-center bg-white dark:bg-slate-800 p-6 rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-sm">
          
          {/* Bar Chart */}
          <div className="w-20 h-40 bg-slate-100 dark:bg-slate-700 rounded-xl flex flex-col justify-end overflow-hidden relative border border-slate-200 dark:border-slate-600">
              <div 
                  className={`w-full transition-all duration-300 ${barColor}`} 
                  style={{ height: `${percentage}%` }}
              />
              {/* Baseline */}
              <div className="absolute bottom-0 w-full h-[1px] bg-slate-400"></div>
          </div>

          {/* Stats */}
          <div className="flex flex-col justify-center gap-2">
              <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">Result</div>
              <div className={`text-4xl font-black transition-colors ${textColor}`}>
                  {profit > 0 ? '+' : ''}{profit}
              </div>
              <div className="text-xs font-bold bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded text-slate-500">
                  {profit > 0 ? 'PROFIT' : profit < 0 ? 'LOSS' : 'BREAK EVEN'}
              </div>
          </div>
      </div>

      {/* 2. CONTROLS */}
      <div className="bg-blue-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-blue-100 dark:border-slate-700">
          <label className="flex justify-between font-bold text-slate-700 dark:text-slate-200 mb-4">
              <span>Selling Price:</span>
              <span className="text-blue-600 text-xl">${sellingPrice}</span>
          </label>
          
          <input
            type="range"
            min={minRange}
            max={maxRange}
            step={5}
            value={sellingPrice}
            disabled={isSubmitting}
            onChange={(e) => onAnswerChange(parseInt(e.target.value))}
            className="w-full h-3 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-blue-600 hover:accent-blue-500"
          />
          <div className="flex justify-between text-xs font-bold text-slate-400 mt-2">
              <span>${minRange}</span>
              <span>Cost: ${costPrice}</span>
              <span>${maxRange}</span>
          </div>
      </div>

    </div>
  );
};