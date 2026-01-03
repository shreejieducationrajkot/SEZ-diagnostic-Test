// ----------------------------------------------------------------------
// FIX: Use '../../types' to go up 2 folders to find src/types.ts
// ----------------------------------------------------------------------
import { InteractionType } from '../../types'; 

// --- HELPER 1: Deep Compare Objects (Sorter, Pizza, Circuit) ---
const deepEqual = (obj1: any, obj2: any): boolean => {
  if (obj1 === obj2) return true;
  
  if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }
  return true;
};

// --- HELPER 2: Normalize Arrays (Reorder) ---
// Handles mismatch between ["A", "B"] and [{id:"A"}, {id:"B"}]
const normalizeArray = (arr: any[]): string[] => {
  if (!Array.isArray(arr)) return [];
  return arr.map(item => {
    if (typeof item === 'object' && item !== null) {
      return String(item.id || item.text || item.value || JSON.stringify(item));
    }
    return String(item);
  });
};

// --- HELPER 3: Compare Lists Order-Ignored (Anatomy, Word Select) ---
const arrayEqualUnordered = (arr1: any[], arr2: any[]): boolean => {
    const norm1 = normalizeArray(arr1).sort();
    const norm2 = normalizeArray(arr2).sort();
    return JSON.stringify(norm1) === JSON.stringify(norm2);
};

export const validateAnswer = (type: InteractionType, userAnswer: any, correctAnswer: any) => {
  // 1. Safety Check & Debugging
  if (userAnswer === null || userAnswer === undefined) {
    // console.warn("Validator: Received null answer");
    return false;
  }

  switch (type) {
    // --- A. Simple Equality (Strings/Numbers) ---
    case InteractionType.MULTIPLE_CHOICE:
    case InteractionType.SLIDER_INPUT:
    case InteractionType.OBJECT_COUNT:
    case InteractionType.VISUAL_COUNT:
    case InteractionType.CALCULATOR:
    case InteractionType.BALANCE:       
    case InteractionType.MONEY_BUILDER: 
      // Use loose equality (==) to match "50" with 50
      return userAnswer == correctAnswer; 

    // --- B. Text Input (Case Insensitive) ---
    case InteractionType.INPUT:
       return String(userAnswer).trim().toLowerCase() === String(correctAnswer).trim().toLowerCase();

    // --- C. Exact Order (Reorder List) ---
    case InteractionType.REORDER:
      // Robust check: matches ["2"] with [{id:"2"}]
      const userSeq = normalizeArray(userAnswer);
      const correctSeq = normalizeArray(correctAnswer);
      return JSON.stringify(userSeq) === JSON.stringify(correctSeq);

    // --- D. Any Order (Multi-Select, Anatomy) ---
    case InteractionType.WORD_SELECT:
    case InteractionType.ANATOMY: 
      return arrayEqualUnordered(userAnswer, correctAnswer);

    // --- E. Complex Object Matching (Sorter, Categorize) ---
    case InteractionType.SORTER_BUCKET:
    case InteractionType.CATEGORIZE:
    case InteractionType.DRAG_TO_SLOTS:
    case InteractionType.DRAG_DROP:   
    case InteractionType.CIRCUIT:     
    case InteractionType.GRAPH_INPUT:
    case InteractionType.PROFIT_LOSS:
    case InteractionType.PIZZA:
      return deepEqual(userAnswer, correctAnswer);

    // --- F. Coordinates (Hotspot) ---
    case InteractionType.LOCATOR_HOTSPOT:
      if (typeof userAnswer === 'object' && correctAnswer.x !== undefined) {
          const tolerance = correctAnswer.tolerance || 15; 
          const dist = Math.sqrt(Math.pow(userAnswer.x - correctAnswer.x, 2) + Math.pow(userAnswer.y - correctAnswer.y, 2));
          return dist <= tolerance;
      }
      return deepEqual(userAnswer, correctAnswer);

    default:
      // Fallback
      return JSON.stringify(userAnswer) === JSON.stringify(correctAnswer);
  }
};