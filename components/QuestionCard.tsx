import React, { useState, useEffect, useRef } from 'react';
import { Question, InteractionType } from '../types';
import { Check, SkipForward, ExternalLink, AlertCircle } from 'lucide-react';
import { getQuestionTheme } from '../utils/theme';
import { INTERACTION_COMPONENTS } from './interactions/InteractionRegistry'; // Internal Components
import { validateAnswer } from '../utils/scoring';
import { LEARNING_RESOURCES } from '../data/learningResources'; // External Links Data

interface QuestionCardProps {
  question: Question;
  onAnswer: (isCorrect: boolean, answer: string | string[], timeTaken: number) => void;
  onSkip: (timeTaken: number) => void;
  isSubmitting: boolean;
  grade: number;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswer, onSkip, isSubmitting, grade }) => {
  const [currentAnswer, setCurrentAnswer] = useState<any>(null);
  
  const theme = getQuestionTheme(grade);
  const startTimeRef = useRef(Date.now());

  // Reset state when question changes
  useEffect(() => {
    setCurrentAnswer(null);
    startTimeRef.current = Date.now();
  }, [question]);

  const getTimeSpent = () => (Date.now() - startTimeRef.current) / 1000;

  const handleSubmit = () => {
    const timeSpent = getTimeSpent();
    const isCorrect = validateAnswer(question, currentAnswer);
    
    // Format answer for DB if necessary (e.g. stringify objects)
    let finalAnswerForDB = currentAnswer;
    if (typeof currentAnswer === 'object' && currentAnswer !== null) {
        finalAnswerForDB = JSON.stringify(currentAnswer);
    }

    onAnswer(isCorrect, finalAnswerForDB, timeSpent);
  };

  const handleSkip = () => {
      onSkip(getTimeSpent());
  };

  // Select the correct component based on type
  const InteractionComponent = INTERACTION_COMPONENTS[question.interactionType];

  const canSubmit = () => {
    if (isSubmitting) return false;
    if (currentAnswer === null || currentAnswer === undefined) return false;
    
    if (Array.isArray(currentAnswer) && currentAnswer.length === 0) return false;
    
    // @ts-ignore
    if (question.interactionType === 'INPUT' && String(currentAnswer).trim() === '') return false;
    
    return true;
  };

  if (!InteractionComponent) {
    return (
        <div className="p-6 text-red-500 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2">
            <AlertCircle /> 
            <strong>Error:</strong> Component not found for {question.interactionType}
        </div>
    );
  }

  // Look up external resource link
  const resource = question.resourceId ? LEARNING_RESOURCES[question.resourceId] : null;

  return (
    <div className={`w-full max-w-4xl mx-auto ${theme.container} relative overflow-hidden`}>
      
      {/* --- EXTERNAL RESOURCE BUTTON --- */}
      {resource && (
        <a 
          href={resource.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute top-4 right-4 z-10 p-2 pl-3 pr-3 text-blue-600 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-full transition-all flex items-center gap-2 text-xs font-bold shadow-sm hover:shadow-md active:scale-95 group"
          title={resource.label}
        >
          <span className="hidden sm:inline group-hover:underline">{resource.label}</span>
          <span className="sm:hidden">Learn</span>
          <ExternalLink size={14} />
        </a>
      )}

      {/* Header Info */}
      <div className="flex justify-between items-center mb-6 border-b border-slate-100 dark:border-slate-700 pb-4">
        <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-black uppercase dark:bg-emerald-900/30 dark:text-emerald-300 tracking-wider">
            {question.subject}
            </span>
            <span className={`${theme.subTitle} text-xs font-bold text-slate-400 uppercase tracking-widest`}>
                {question.skillTag}
            </span>
        </div>
      </div>

      {/* Question Text */}
      <div className="px-2 md:px-6">
          <h2 className={`${theme.title} mt-2 text-2xl md:text-3xl font-black text-slate-800 dark:text-white leading-tight text-center`}>
            { question.interactionType === InteractionType.SHAPE_MATCH && question.questionMeta?.targetShape 
                ? `Which of these is a ${question.questionMeta.targetShape}?` 
                : question.questionText
            }
          </h2>
          
          {/* DYNAMIC INTERACTION RENDER */}
          <div className="my-8">
            <InteractionComponent 
                question={question}
                theme={theme}
                currentAnswer={currentAnswer}
                onAnswerChange={(val: any) => setCurrentAnswer(val)}
                triggerSubmit={handleSubmit}
                isSubmitting={isSubmitting}
                grade={grade} // <--- CRITICAL UPDATE: Passes grade to child component
            />
          </div>
      </div>
      
      {/* Footer / Action Buttons */}
      <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700 flex justify-end gap-4">
          <button
            onClick={handleSkip}
            disabled={isSubmitting}
            className="px-6 py-3 rounded-xl font-bold text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors flex items-center gap-2"
          >
            Skip <SkipForward size={20} />
          </button>
          
          <button 
            onClick={handleSubmit} 
            disabled={!canSubmit()} 
            className={`
                px-8 py-3 rounded-xl font-bold text-lg text-white shadow-lg flex items-center gap-2 transition-all
                ${!canSubmit() 
                    ? 'bg-slate-300 dark:bg-slate-700 cursor-not-allowed opacity-70' 
                    : 'bg-brand-600 hover:bg-brand-500 hover:scale-105 active:scale-95'
                }
            `}
          >
            Check Answer <Check size={20} strokeWidth={3} />
          </button>
      </div>

    </div>
  );
};

export default QuestionCard;