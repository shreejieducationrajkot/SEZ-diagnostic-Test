import React from 'react';
import { Question } from '../../types';

interface Props {
  currentAnswer: string;
  onAnswerChange: (ans: string) => void;
  triggerSubmit: () => void; // Calculator has its own submit button
}

export const CalculatorView: React.FC<Props> = ({ currentAnswer = '', onAnswerChange, triggerSubmit }) => {
  const handleCalcButton = (val: string) => {
    if (val === 'C') onAnswerChange('');
    else if (val === '=') triggerSubmit();
    else onAnswerChange(currentAnswer + val);
  }

  return (
    <div className="mt-6 max-w-xs mx-auto bg-slate-100 dark:bg-slate-800 p-4 rounded-2xl shadow-inner">
      <div className="bg-white dark:bg-slate-900 text-right rounded-lg p-4 mb-4 text-3xl font-mono text-slate-800 dark:text-white h-16 overflow-x-auto">{currentAnswer || '0'}</div>
      <div className="grid grid-cols-4 gap-2">
        {['C', '(', ')', '/'].map(op => <button key={op} onClick={() => handleCalcButton(op)} className="p-4 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-100 rounded-lg text-xl font-bold">{op}</button>)}
        {['7', '8', '9', '*'].map(op => <button key={op} onClick={() => handleCalcButton(op)} className="p-4 bg-white dark:bg-slate-600 text-slate-800 dark:text-slate-100 rounded-lg text-xl font-bold">{op}</button>)}
        {['4', '5', '6', '-'].map(op => <button key={op} onClick={() => handleCalcButton(op)} className="p-4 bg-white dark:bg-slate-600 text-slate-800 dark:text-slate-100 rounded-lg text-xl font-bold">{op}</button>)}
        {['1', '2', '3', '+'].map(op => <button key={op} onClick={() => handleCalcButton(op)} className="p-4 bg-white dark:bg-slate-600 text-slate-800 dark:text-slate-100 rounded-lg text-xl font-bold">{op}</button>)}
        {['0', '.'].map(op => <button key={op} onClick={() => handleCalcButton(op)} className={`p-4 bg-white dark:bg-slate-600 text-slate-800 dark:text-slate-100 rounded-lg text-xl font-bold ${op==='0' ? 'col-span-2' : ''}`}>{op}</button>)}
        <button onClick={() => handleCalcButton('=')} className="p-4 bg-blue-500 text-white rounded-lg text-xl font-bold col-span-2">=</button>
      </div>
    </div>
  );
};