import React, { useMemo } from 'react';
import { Question } from '../../types';
import { ArrowUp, RotateCcw, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

interface ReorderViewProps {
  question: Question;
  currentAnswer: any;
  onAnswerChange: (answer: any) => void;
}

export const ReorderView: React.FC<ReorderViewProps> = ({ question, currentAnswer, onAnswerChange }) => {
  
  // 1. ROBUST DATA NORMALIZATION
  // This ensures we extract text/values correctly regardless of data format
  const allItems = useMemo(() => {
    const rawOptions = question.options || [];
    if (!rawOptions || rawOptions.length === 0) return [];

    return rawOptions.map((opt: any, index: number) => {
      // Handle simple strings/numbers vs objects
      const rawValue = typeof opt === 'object' ? (opt.id || opt.value || opt.text) : opt;
      const displayText = typeof opt === 'object' ? (opt.text || opt.label || opt.value) : opt;
      
      return {
        id: String(rawValue), // Always force string ID for comparison
        text: String(displayText),
        original: rawValue
      };
    });
  }, [question.options]);

  // 2. DERIVE STATE (Selected vs Available)
  const selectedIds = Array.isArray(currentAnswer) ? currentAnswer.map(String) : [];

  // Items currently in the top box
  const selectedItems = selectedIds
    .map((id: string) => allItems.find(i => i.id === id))
    .filter(Boolean); // Remove undefineds

  // Items remaining in the bottom pool
  const availableItems = allItems.filter(item => !selectedIds.includes(item.id));

  // 3. HANDLERS
  const handleAddToOrder = (item: any) => {
    const newOrderIds = [...selectedIds, item.id];
    
    // Map IDs back to original values for the validator/database
    const answerValues = newOrderIds.map(id => {
        const originalItem = allItems.find(i => i.id === id);
        return originalItem ? originalItem.original : id;
    });

    onAnswerChange(answerValues);
  };

  const handleRemoveFromOrder = (itemId: string) => {
    const newOrderIds = selectedIds.filter((id: string) => id !== itemId);
    
    // If empty, pass null so 'Submit' button gets disabled
    if (newOrderIds.length === 0) {
      onAnswerChange(null);
      return;
    }

    const answerValues = newOrderIds.map((id: string) => {
        const originalItem = allItems.find(i => i.id === id);
        return originalItem ? originalItem.original : id;
    });
    
    onAnswerChange(answerValues);
  };

  const handleReset = () => {
    onAnswerChange(null);
  };

  // 4. SAFETY FALLBACK
  // If no data exists, show a helpful error instead of "All items placed"
  if (allItems.length === 0) {
    return (
      <div className="p-6 text-center text-amber-500 bg-amber-50 rounded-xl border border-amber-200">
        <AlertCircle className="mx-auto mb-2" />
        <p className="font-bold">No items found to arrange.</p>
        <p className="text-xs">Please check the question data.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6 select-none">
      
      {/* REMOVED DUPLICATE HEADER */}

      <p className="text-center text-slate-500 dark:text-slate-400 font-medium text-sm uppercase tracking-wider">
        Tap items to arrange them in the correct order
      </p>

      {/* --- ZONE 1: THE ANSWER SEQUENCE (Top) --- */}
      <div className="bg-slate-50 dark:bg-slate-900/50 p-4 md:p-6 rounded-3xl border-2 border-slate-200 dark:border-slate-700 min-h-[140px] flex flex-col justify-center relative transition-colors">
        
        {/* Placeholder Text */}
        {selectedItems.length === 0 && (
          <div className="absolute inset-0 flex items-center justify-center text-slate-400 dark:text-slate-500 font-bold border-2 border-dashed border-slate-200 dark:border-slate-700 m-4 rounded-2xl pointer-events-none">
            Your ordered list will appear here...
          </div>
        )}

        {/* The Ordered List */}
        <div className="flex flex-wrap gap-3 justify-center z-10">
          {selectedItems.map((item: any, index: number) => (
            <div key={`${item.id}-selected`} className="flex items-center animate-in zoom-in duration-200">
               {/* Arrow Divider */}
               {index > 0 && (
                 <ArrowRight size={20} className="text-slate-300 dark:text-slate-600 mx-1" strokeWidth={3} />
               )}
               
               <button
                onClick={() => handleRemoveFromOrder(item.id)}
                className="bg-brand-600 text-white pl-3 pr-5 py-3 rounded-xl font-bold shadow-lg shadow-brand-500/20 hover:bg-red-500 transition-all active:scale-95 flex items-center gap-2 group"
              >
                <span className="bg-white/20 w-6 h-6 flex items-center justify-center rounded text-xs font-mono">
                    {index + 1}
                </span>
                {item.text}
              </button>
            </div>
          ))}
        </div>

        {/* Reset Button */}
        {selectedItems.length > 0 && (
            <button 
                onClick={handleReset}
                className="absolute top-3 right-3 p-2 text-slate-400 hover:text-red-500 transition-colors bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700"
                title="Reset Order"
            >
                <RotateCcw size={16} />
            </button>
        )}
      </div>

      {/* --- ZONE 2: THE OPTIONS POOL (Bottom) --- */}
      <div className="space-y-4 pt-2">
          <div className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest">
             Available Items
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {availableItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleAddToOrder(item)}
                className="bg-white dark:bg-slate-800 border-b-4 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 px-6 py-4 rounded-2xl font-bold hover:border-brand-400 hover:text-brand-600 dark:hover:text-brand-400 hover:-translate-y-1 active:scale-95 transition-all duration-200 flex items-center gap-2"
              >
                {item.text}
                <ArrowUp size={16} className="text-slate-300" />
              </button>
            ))}
          </div>

          {/* Success Message (Only shows if items were actually placed) */}
          {availableItems.length === 0 && selectedItems.length > 0 && (
             <div className="text-center text-emerald-600 dark:text-emerald-400 font-bold py-4 animate-bounce flex items-center justify-center gap-2">
                <CheckCircle2 size={20} /> All items placed!
             </div>
          )}
      </div>
    </div>
  );
};