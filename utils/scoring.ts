
import { InteractionType, Question, UserResponse, Analytics, Subject } from '../types';

// ==========================================
// 1. ANSWER VALIDATOR (Used by QuestionCard)
// ==========================================
export const validateAnswer = (question: Question, userAnswer: any): boolean => {
  if (userAnswer === null || userAnswer === undefined) return false;

  switch (question.interactionType) {

    case InteractionType.LOCATOR_HOTSPOT:
       // Check if the selected ID matches the correct ID
       return String(userAnswer) === String(question.correctAnswer);

    case InteractionType.SLIDER_INPUT:
       // Check if the number matches
       return Number(userAnswer) === Number(question.correctAnswer);

    case InteractionType.OBJECT_COUNT:
       // Usually we check if the COUNT is correct (e.g. "Select 5 apples")
       if (typeof question.correctAnswer === 'number') {
          return (userAnswer as number[]).length === question.correctAnswer;
       }
       // OR we check if specific items were selected (e.g. "Select the red apples")
       // Assumes correctAnswer is an array of indices: [0, 2, 4]
       const correctSet = new Set(question.correctAnswer as number[]);
       const userSet = new Set(userAnswer as number[]);
       if (correctSet.size !== userSet.size) return false;
       return [...correctSet].every(x => userSet.has(x));

    case InteractionType.TAP_SELECT:
    return String(userAnswer) === String(question.correctAnswer);

    case InteractionType.CIRCUIT:
    // For these games, if the UI sends "true", it means the user finished the task
    return userAnswer === true;

    case InteractionType.GRAPH_INPUT:
    if (question.questionMeta?.graphType === 'pie') {
        return userAnswer.count === (question.correctAnswer as any).count;
    } else {
        // Cartesian logic: Compare points
        // Ensure userAnswer.points exists before mapping
        if (!userAnswer.points || !Array.isArray(userAnswer.points)) return false;
        
        const userPointSet = new Set(userAnswer.points.map((p:any) => `${p.x},${p.y}`));
        const correctPoints = (question.correctAnswer as any).points;
        // Also safeguard against correctPoints being undefined
        if (!correctPoints || !Array.isArray(correctPoints)) return false;

        return correctPoints.every((p:any) => userPointSet.has(`${p.x},${p.y}`));
    }
    case InteractionType.MULTIPLE_CHOICE:
    case InteractionType.VISUAL:
    case InteractionType.SHAPE_MATCH:
    case InteractionType.VISUAL_COUNT:
    case InteractionType.BINARY:
    case InteractionType.BALANCE:
    case InteractionType.DRAG_TO_SLOTS:
    case InteractionType.CALCULATOR:
       // Simple string/number comparison
       return String(userAnswer) === String(question.correctAnswer);

    case InteractionType.INPUT:
       return String(userAnswer).trim().toLowerCase() === String(question.correctAnswer).toLowerCase();

    case InteractionType.REORDER:
       // Compare arrays
       try {
         const correctOrder = typeof question.correctAnswer === 'string' 
            ? JSON.parse(question.correctAnswer) 
            : question.correctAnswer;
         return JSON.stringify(userAnswer) === JSON.stringify(correctOrder);
       } catch (e) {
         console.error("Error parsing REORDER answer", e);
         return false;
       }

    case InteractionType.WORD_SELECT:
       // Compare arrays of words
       const correctWords = (Array.isArray(question.correctAnswer) ? question.correctAnswer : [question.correctAnswer])
         .map((w: string) => w.toLowerCase());
       
       if (!Array.isArray(userAnswer)) return false;
       
       const userWords = userAnswer.map((w: string) => w.toLowerCase());
       return userWords.length === correctWords.length && userWords.every((word: string) => correctWords.includes(word));

    case InteractionType.CATEGORIZE:
       // Check every item in the dictionary
       if (!userAnswer || typeof userAnswer !== 'object') return false;
       const categorizedItems = userAnswer as { [key: string]: string };
       return Object.entries(categorizedItems).every(([itemId, bucketId]) => {
          const option = question.options?.find(o => o.id === itemId);
          return option?.bucketId === bucketId;
       });

    default:
       return false;
  }
};

// ==========================================
// 2. ANALYTICS CALCULATOR
// ==========================================
export const calculateAnalytics = (responses: UserResponse[], questions: Question[]): Analytics => {
  // 1. Initialize Structure with all Subjects to avoid undefined errors
  const stats: Analytics = {
    score: 0,
    totalQuestions: questions.length,
    skipped: 0,
    bySubject: {
      [Subject.MATH]: { correct: 0, total: 0, percentage: 0 },
      [Subject.SCIENCE]: { correct: 0, total: 0, percentage: 0 },
      [Subject.ENGLISH]: { correct: 0, total: 0, percentage: 0 }
    },
    strongAreas: [],
    weakAreas: []
  };

  // Map for quick lookup
  const questionMap = new Map(questions.map(q => [q.id, q]));
  const skillStats: Record<string, { correct: number; total: number }> = {};

  responses.forEach(r => {
    const q = questionMap.get(r.questionId);
    if (!q) return;

    if (r.isSkipped) {
        stats.skipped += 1;
        // A skipped question is technically not correct, so we don't increment score.
        // It is still part of the total assessment for skill tracking (as a missed opportunity).
    }

    // Update Score
    if (r.isCorrect) {
      stats.score += 1;
    }

    // Update Subject Stats
    const subject = q.subject;
    if (stats.bySubject[subject]) {
      stats.bySubject[subject].total += 1;
      if (r.isCorrect) stats.bySubject[subject].correct += 1;
    }

    // Update Skill Stats
    const skill = q.skillTag || 'General';
    if (!skillStats[skill]) skillStats[skill] = { correct: 0, total: 0 };
    skillStats[skill].total += 1;
    if (r.isCorrect) skillStats[skill].correct += 1;
  });

  // Calculate Percentages per Subject
  Object.values(stats.bySubject).forEach(s => {
    s.percentage = s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0;
  });

  // Calculate Strong/Weak Areas based on arbitrary thresholds
  Object.entries(skillStats).forEach(([skill, s]) => {
    const pct = (s.correct / s.total) * 100;
    if (pct >= 80) stats.strongAreas.push(skill);
    if (pct <= 40) stats.weakAreas.push(skill);
  });

  return stats;
};
