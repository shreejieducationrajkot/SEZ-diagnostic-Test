import { UserResponse, Question, Analytics, InteractionType, Subject } from '../types';

// --- HELPER: DEEP EQUAL COMPARISON ---
// efficiently compares two objects or arrays to see if they are identical
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

// --- HELPER: ARRAY COMPARISON (ORDER AGNOSTIC) ---
// Returns true if both arrays have the same items, regardless of order
const arrayEqualUnordered = (arr1: any[], arr2: any[]): boolean => {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) return false;
    if (arr1.length !== arr2.length) return false;
    const sorted1 = [...arr1].sort();
    const sorted2 = [...arr2].sort();
    return JSON.stringify(sorted1) === JSON.stringify(sorted2);
};

// --- MAIN VALIDATION FUNCTION ---
export const validateAnswer = (question: Question, userAnswer: any): boolean => {
  // 1. Safety Check
  if (userAnswer === null || userAnswer === undefined) return false;

  const correct = question.correctAnswer;

  // 2. Handle Different Interaction Types
  switch (question.interactionType) {
    
    // A. ORDER MATTERS (Reorder, Pattern)
    // We expect the array to be exactly the same [A, B, C] === [A, B, C]
    case InteractionType.REORDER:
      return JSON.stringify(userAnswer) === JSON.stringify(correct);

    // B. ORDER DOESN'T MATTER (Anatomy, Grouping)
    // [A, B] is same as [B, A]
    case InteractionType.ANATOMY:
      return arrayEqualUnordered(userAnswer, correct);

    // C. OBJECT MATCHING (Sorter, Circuit, Coordinates)
    // { id: 1, val: 2 } === { val: 2, id: 1 }
    case InteractionType.SORTER_BUCKET:
    case InteractionType.CIRCUIT:
    case InteractionType.BALANCE:
    case InteractionType.GRAPH_INPUT:
    case InteractionType.LOCATOR_HOTSPOT:
      return deepEqual(userAnswer, correct);

    // D. STRING MATCHING (Standard MCQ, Fill in Blank)
    // Clean up strings (trim spaces, ignore case)
    case InteractionType.INPUT:
       return String(userAnswer).trim().toLowerCase() === String(correct).trim().toLowerCase();

    // E. DEFAULT (MCQ, True/False)
    default:
      // If it's an array (Multi-select MCQ), sort and compare
      if (Array.isArray(userAnswer) && Array.isArray(correct)) {
          return arrayEqualUnordered(userAnswer, correct);
      }
      return userAnswer === correct;
  }
};

// --- ANALYTICS CALCULATION ---
export const calculateAnalytics = (responses: UserResponse[], questions: Question[]): Analytics => {
  let score = 0;
  let correctCount = 0;
  let incorrectCount = 0;
  let skippedCount = 0;
  
  // Initialize Subject Stats
  const subjectStats: Record<string, { total: number, correct: number }> = {};
  Object.values(Subject).forEach(sub => {
      subjectStats[sub] = { total: 0, correct: 0 };
  });

  // Track strength/weakness by Tag
  const tagPerformance: Record<string, { total: number, correct: number }> = {};

  responses.forEach(response => {
    const question = questions.find(q => q.id === response.questionId);
    if (!question) return;

    const isActuallyCorrect = response.isCorrect; 

    if (response.isSkipped) {
        skippedCount++;
    } else if (isActuallyCorrect) {
        score += 1; // Or question.points if you have weighted scoring
        correctCount++;
    } else {
        incorrectCount++;
    }

    // Subject Analysis
    if (subjectStats[question.subject]) {
        subjectStats[question.subject].total += 1;
        if (isActuallyCorrect) {
            subjectStats[question.subject].correct += 1;
        }
    }

    // Tag Analysis
    const tag = question.skillTag || "General";
    if (!tagPerformance[tag]) tagPerformance[tag] = { total: 0, correct: 0 };
    
    tagPerformance[tag].total += 1;
    if (isActuallyCorrect) tagPerformance[tag].correct += 1;
  });

  // Calculate By Subject Breakdown
  const bySubject: any = {};
  Object.values(Subject).forEach((sub) => {
      const stats = subjectStats[sub as string];
      bySubject[sub] = {
          correct: stats.correct,
          total: stats.total,
          percentage: stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0
      };
  });

  // Determine Strong/Weak Areas
  const strongAreas: string[] = [];
  const weakAreas: string[] = [];

  Object.entries(tagPerformance).forEach(([tag, data]) => {
      const percentage = (data.correct / data.total) * 100;
      if (percentage >= 75) strongAreas.push(tag);
      if (percentage <= 40) weakAreas.push(tag);
  });

  // Calculate Time (Simple sum)
  // const totalTimeTaken = responses.reduce((acc, curr) => acc + curr.timeTaken, 0);

  return {
    score: score,
    totalQuestions: questions.length,
    skipped: skippedCount,
    bySubject: bySubject,
    strongAreas,
    weakAreas
  };
};