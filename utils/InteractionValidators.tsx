import { InteractionType } from '../types';

export const validateAnswer = (type: InteractionType, userAnswer: any, correctAnswer: any) => {
  switch (type) {
    case InteractionType.MULTIPLE_CHOICE:
      return userAnswer === correctAnswer;
    case InteractionType.REORDER:
      // Compare two arrays
      return JSON.stringify(userAnswer) === JSON.stringify(correctAnswer);
    case InteractionType.INPUT:
       return userAnswer.trim().toLowerCase() === correctAnswer.trim().toLowerCase();
    default:
      console.error(`No validator found for ${type}`);
      return false;
  }
};