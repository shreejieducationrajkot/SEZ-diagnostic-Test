import React, { useState, useEffect } from 'react';
import { Question, InteractionType } from '../types';
import { INTERACTION_COMPONENTS } from './interactions/InteractionRegistry';
import { validateAnswer } from './interactions/InteractionValidators';
import { getQuestionTheme } from '../utils/theme';
import { Clock, ChevronLeft, Check, SkipForward } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  onAnswer: (isCorrect: boolean, answer: any, timeTaken: number) => void;
  onSkip: (timeTaken: number) => void;
  onPrevious?: () => void;
  isFirstQuestion?: boolean;
  isSubmitting: boolean;
  grade: number;
  savedAnswer?: any;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ 
  question, 
  onAnswer, 
  onSkip, 
  onPrevious,
  isFirstQuestion = false,
  isSubmitting,
  grade,
  savedAnswer
}) => {
  const [startTime, setStartTime] = useState(Date.now());
  const [userAnswer, setUserAnswer] = useState<any>(savedAnswer || null);

  const theme = getQuestionTheme(grade || 5);

  // Sync state when question or savedAnswer changes
  useEffect(() => {
    setStartTime(Date.now());
    setUserAnswer(savedAnswer || null);
  }, [question, savedAnswer]);

  const InteractionComponent = INTERACTION_COMPONENTS[question.interactionType];

  if (!InteractionComponent) {
    return <div className="p-8 text-red-500">Error: Unknown interaction type {question.interactionType}</div>;
  }

  const handleInteractionAnswer = (val: any) => {
    setUserAnswer(val);
    
    // Auto-submit for simple selection types for better UX
    const autoSubmitTypes = [InteractionType.MULTIPLE_CHOICE];
    if (autoSubmitTypes.includes(question.interactionType)) {
      setTimeout(() => submitAnswer(val), 300);
    }
  };

  const submitAnswer = (finalAnswer: any) => {
    if (isSubmitting) return;
    const timeTaken = Math.round((Date.now() - startTime) / 1000);
    
    // Ensure we are validating the answer passed (for click-to-submit) or state (for button submit)
    const answerToValidate = finalAnswer !== undefined ? finalAnswer : userAnswer;
    
    const isCorrect = validateAnswer(question.interactionType, answerToValidate, question.correctAnswer);
    onAnswer(isCorrect, answerToValidate, timeTaken);
  };

  return (
    <div className={`w-full max-w-4xl mx-auto ${theme.container} relative overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500`}>
      
      {/* Header Info */}
      <div className="flex justify-between items-center mb-6 border-b border-slate-100 dark:border-slate-700 pb-4">
        <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-black uppercase dark:bg-emerald-900/30 dark:text-emerald-300 tracking-wider">
            {question.subject}
            </span>
            <span className={`${theme.subTitle} text-xs font-bold text-slate-400 uppercase tracking-widest`}>
                {question.skillTag || "General"}
            </span>
        </div>
        <div className="text-slate-400 dark:text-slate-500 text-xs font-mono flex items-center gap-1">
           <Clock size={12} /> Tracking...
        </div>
      </div>

      {/* Question Text */}
      <div className="px-2 md:px-6">
          <h2 className={`${theme.title} mt-2 text-2xl md:text-3xl font-black text-slate-800 dark:text-white leading-tight text-center`}>
            {question.questionText}
          </h2>
          
          {/* Main Interaction Area */}
          <div className="my-8">
            <InteractionComponent 
              question={question}
              currentAnswer={userAnswer}
              onAnswerChange={handleInteractionAnswer} 
              theme={theme}
              isSubmitting={isSubmitting}
              grade={grade}
              triggerSubmit={() => submitAnswer(userAnswer)}
            />
          </div>
      </div>

      {/* Footer Navigation */}
      <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700 flex justify-end gap-3 md:gap-4 flex-wrap">
        
        {onPrevious && (
          <button 
            onClick={onPrevious}
            disabled={isFirstQuestion || isSubmitting}
            className={`
              px-4 md:px-6 py-3 rounded-xl font-bold transition-colors flex items-center gap-2
              ${isFirstQuestion 
                ? 'text-slate-300 dark:text-slate-700 cursor-not-allowed' 
                : 'text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800'
              }
            `}
          >
            <ChevronLeft size={20} /> <span className="hidden sm:inline">Previous</span>
          </button>
        )}

        <button 
          onClick={() => onSkip(Math.round((Date.now() - startTime) / 1000))}
          disabled={isSubmitting}
          className="px-4 md:px-6 py-3 rounded-xl font-bold text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors flex items-center gap-2"
        >
          Skip <SkipForward size={20} />
        </button>
        
        {/* Only show Next/Check button if it's not an auto-submit type (like MCQ) or if we want explicit confirmation */}
        {question.interactionType !== InteractionType.MULTIPLE_CHOICE && (
          <button 
            onClick={() => submitAnswer(userAnswer)}
            disabled={!userAnswer && userAnswer !== 0} 
            className={`
                flex-1 sm:flex-none px-6 md:px-8 py-3 rounded-xl font-bold text-lg text-white shadow-lg flex items-center justify-center gap-2 transition-all
                ${(!userAnswer && userAnswer !== 0)
                    ? 'bg-slate-300 dark:bg-slate-700 cursor-not-allowed opacity-70' 
                    : 'bg-brand-600 hover:bg-brand-500 hover:scale-105 active:scale-95'
                }
            `}
          >
            Check <span className="hidden sm:inline">Answer</span> <Check size={20} strokeWidth={3} />
          </button>
        )}
      </div>
    </div>
  );
};

export default QuestionCard;