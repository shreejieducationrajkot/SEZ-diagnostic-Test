import React from 'react';
import { Question } from '../../types';

interface Props {
  question: Question;
  currentAnswer: { x: number, y: number } | null;
  onAnswerChange: (ans: { x: number, y: number }) => void;
}

export const HotspotView: React.FC<Props> = ({ question, currentAnswer, onAnswerChange }) => {
  const imageUrl = question.interactiveData?.imageUrl || 'https://placehold.co/600x400/png?text=Image+Missing';

  const handleClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    onAnswerChange({ x, y });
  };

  return (
    <div className="flex flex-col items-center mt-6">
        <div className="relative rounded-xl overflow-hidden cursor-crosshair border-2 border-slate-200 shadow-lg"
             onClick={handleClick}>
             
             <img src={imageUrl} alt="Hotspot Task" className="max-w-full md:max-w-lg object-contain" />
             
             {currentAnswer && (
                 <div className="absolute w-6 h-6 border-2 border-red-500 rounded-full bg-red-500/30 animate-ping-once"
                      style={{ 
                          left: `${currentAnswer.x}%`, 
                          top: `${currentAnswer.y}%`,
                          transform: 'translate(-50%, -50%)'
                      }} 
                 />
             )}
             
             {currentAnswer && (
                 <div className="absolute w-3 h-3 bg-red-600 rounded-full"
                      style={{ 
                          left: `${currentAnswer.x}%`, 
                          top: `${currentAnswer.y}%`,
                          transform: 'translate(-50%, -50%)'
                      }} 
                 />
             )}
        </div>
        <p className="text-sm text-slate-400 mt-2">Tap on the image to select location</p>
    </div>
  );
};