import React from 'react';
import { Question } from '../../types';

interface Props {
  question: Question;
  theme: any;
  onAnswerChange: (ans: string) => void;
  currentAnswer: any;
}

export const InputView: React.FC<Props> = ({ theme, onAnswerChange, currentAnswer }) => (
  <input 
    className={`${theme.input} mt-8 text-center`} 
    value={currentAnswer || ''} 
    onChange={e => onAnswerChange(e.target.value)} 
    placeholder="Type your answer..."
  />
);