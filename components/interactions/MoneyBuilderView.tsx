import React, { useState, useEffect } from 'react';
import { Question } from '../../types';
import { RefreshCw } from 'lucide-react';

interface Props {
  question: Question;
  currentAnswer: number | null;
  onAnswerChange: (ans: number) => void;
  isSubmitting?: boolean;
}

export const MoneyBuilderView: React.FC<Props> = ({ question, currentAnswer, onAnswerChange, isSubmitting }) => {
  // We keep track of individual coins added to show them visually
  const [coinsInBox, setCoinsInBox] = useState<number[]>([]);

  // Default denominations if none provided in the question data
  const denominations = question.interactiveData?.denominations || [1, 2, 5, 10];

  // Initialize: If there is a saved answer (total), we can't easily reconstruction the exact coins
  // without more complex logic, so we start empty or just show the total.
  // For simplicity in this version, we reset if it's a new load, or keep state if hot-reloading.
  
  const handleAddCoin = (value: number) => {
    if (isSubmitting) return;
    const newCoins = [...coinsInBox, value];
    setCoinsInBox(newCoins);
    
    // Calculate new total and send to parent
    const newTotal = newCoins.reduce((a, b) => a + b, 0);
    onAnswerChange(newTotal);
  };

  const handleReset = () => {
    if (isSubmitting) return;
    setCoinsInBox([]);
    onAnswerChange(0);
  };

  const currentTotal = coinsInBox.reduce((a, b) => a + b, 0);

  // Helper to render a CSS Coin
  const renderCoin = (val: number, size: 'sm' | 'lg') => (
    <div className={`
      rounded-full flex items-center justify-center font-bold text-yellow-900 shadow-md border-2 border-yellow-600 bg-yellow-400
      ${size === 'lg' ? 'w-16 h-16 text-2xl' : 'w-12 h-12 text-lg'}
      transform transition-transform
    `}>
      ₹{val}
    </div>
  );

  return (
    <div className="w-full max-w-lg mx-auto mt-6 flex flex-col gap-6 select-none">
      
      {/* UPPER BOX: The "Wallet" */}
      <div className="bg-slate-100 dark:bg-slate-800 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-2xl p-6 min-h-[180px] flex flex-col items-center justify-center relative transition-all">
        
        {/* Total Display */}
        <div className="absolute top-0 right-0 bg-brand-600 text-white px-4 py-2 rounded-bl-xl rounded-tr-lg font-bold text-xl shadow-sm">
           Total: ₹ {currentTotal}
        </div>

        {/* Visual Coins in the Box */}
        <div className="flex flex-wrap justify-center gap-3 mt-4 w-full">
            {coinsInBox.map((val, idx) => (
                <div key={`${val}-${idx}`} className="animate-in fade-in zoom-in duration-300">
                    {renderCoin(val, 'sm')}
                </div>
            ))}
            {coinsInBox.length === 0 && (
                <span className="text-slate-400 italic font-medium">Tap coins below to add money...</span>
            )}
        </div>

        {/* Reset Button */}
        {coinsInBox.length > 0 && (
            <button 
                onClick={handleReset}
                className="absolute bottom-2 right-2 p-2 text-slate-400 hover:text-red-500 transition-colors"
                title="Clear Wallet"
            >
                <RefreshCw size={20} />
            </button>
        )}
      </div>

      {/* OPTIONS: The Coin Bank */}
      <div className="grid grid-cols-4 gap-4">
        {denominations.map((val: number) => (
          <button
            key={val}
            onClick={() => handleAddCoin(val)}
            disabled={isSubmitting}
            className="flex flex-col items-center gap-2 group active:scale-95 transition-transform"
          >
            <div className="group-hover:-translate-y-1 transition-transform duration-200">
                {renderCoin(val, 'lg')}
            </div>
            <span className="text-sm font-bold text-slate-500 dark:text-slate-400 group-hover:text-brand-600">
                + ₹{val}
            </span>
          </button>
        ))}
      </div>

    </div>
  );
};