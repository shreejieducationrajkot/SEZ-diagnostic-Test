import React, { useMemo } from 'react';
import { Question } from '../../types';

interface Props {
  question: Question;
  theme: any;
  onAnswerChange: (ans: string) => void;
  currentAnswer: string | null;
}

export const McqView: React.FC<Props> = ({ question, theme, onAnswerChange, currentAnswer }) => {
  
  // NORMALIZE OPTIONS
  // Handles ["A", "B"] (Strings) AND [{id:'a', text:'A'}] (Objects)
  const normalizedOptions = useMemo(() => {
    return (question.options || []).map((opt: any) => {
      // 1. Handle Primitive Strings/Numbers
      if (typeof opt === 'string' || typeof opt === 'number') {
        return { 
            id: String(opt), 
            text: String(opt), 
            visual: null 
        };
      }
      
      // 2. Handle Objects (Grade 6+ style)
      // Heuristic: If the correct answer in DB matches the ID, we use ID as the value.
      // Otherwise, we use the Text as the value (because some data files use text as the answer key).
      const matchId = String(question.correctAnswer) === String(opt.id);
      
      // The 'value' we pass to onAnswerChange
      const value = matchId ? String(opt.id) : String(opt.text || opt.label || opt.value);

      return {
        id: value, // Use this for comparison with currentAnswer
        text: String(opt.text || opt.label || opt.value),
        visual: opt.visual,
        original: opt
      };
    });
  }, [question.options, question.correctAnswer]);

  const renderVisualContent = (visual: string) => (
    <div className={`mb-2 text-3xl md:text-5xl ${theme.mcqIcon}`}>{visual}</div>
  );

  return (
    <div className="grid grid-cols-2 gap-4 mt-8">
      {normalizedOptions.map((opt) => (
        <button 
          key={opt.id} 
          onClick={() => onAnswerChange(opt.id)} 
          className={`flex flex-col items-center justify-center text-center p-4 ${theme.mcqBtn} ${currentAnswer === opt.id ? theme.mcqSelected : theme.mcqDefault}`}
        >
          {opt.visual && renderVisualContent(opt.visual)}
          <span className={`${theme.mcqText}`}>{opt.text}</span>
        </button>
      ))}
    </div>
  );
};