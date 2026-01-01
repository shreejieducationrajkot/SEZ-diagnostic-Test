import React, { useState, useEffect, useRef } from 'react';
import { Lock, ArrowRight, ShieldCheck, X } from 'lucide-react';

interface PinLockProps {
  onSuccess: () => void;
  onCancel: () => void;
}

// 🔐 HARDCODED TEACHER CODE (You can change this)
const TEACHER_CODE = "4002"; 

const PinLock: React.FC<PinLockProps> = ({ onSuccess, onCancel }) => {
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-focus input on load
  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  const handleInput = (val: string) => {
    setError(false);
    // Allow only numbers and max 4 digits
    if (/^\d*$/.test(val) && val.length <= 4) {
      setPin(val);
    }
  };

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (pin === TEACHER_CODE) {
      onSuccess();
    } else {
      setError(true);
      setPin(""); // Clear on error
      // Shake animation trigger could go here
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-slate-900/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-800 w-full max-w-sm p-8 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700 relative">
        
        {/* Close Button */}
        <button 
          onClick={onCancel}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-red-500 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col items-center text-center gap-6">
          
          {/* Icon */}
          <div className={`w-20 h-20 rounded-full flex items-center justify-center transition-colors ${error ? 'bg-red-100 text-red-500' : 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'}`}>
             {error ? <Lock size={32} /> : <ShieldCheck size={32} />}
          </div>

          {/* Title */}
          <div>
            <h2 className="text-2xl font-black text-slate-800 dark:text-white">Teacher Access</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Enter your 4-digit security PIN</p>
          </div>

          {/* PIN Input */}
          <form onSubmit={handleSubmit} className="w-full">
           <input ref={inputRef} type="password" inputMode="numeric" value={pin} onChange={(e) => handleInput(e.target.value)} placeholder="••••"
         // ADDED: 'text-slate-900 dark:text-white' to force visibility
      className={`w-full text-center text-4xl font-mono tracking-[1em] py-4 rounded-xl border-2 outline-none transition-all placeholder:tracking-normal text-slate-900 dark:text-white
     ${error 
      ? 'border-red-300 bg-red-50 text-red-600 placeholder-red-300 animate-shake' 
      : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10'
    }
  `}
/>
            {error && <p className="text-red-500 text-xs font-bold mt-3 animate-pulse">Incorrect PIN. Try again.</p>}

            <button 
              type="submit"
              disabled={pin.length !== 4}
              className="w-full mt-6 py-4 bg-brand-600 hover:bg-brand-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl shadow-lg shadow-brand-500/30 transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              Access Dashboard <ArrowRight size={20} />
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default PinLock;