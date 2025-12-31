
export enum Subject {
  MATH = 'Mathematics',
  SCIENCE = 'Science',
  ENGLISH = 'English'
}

export enum InteractionType {
  
  TAP_SELECT = "TAP_SELECT",
  MULTIPLE_CHOICE = "MULTIPLE_CHOICE",
  MCQ = "MCQ", 
  DRAG_DROP = "DRAG_DROP",
  MONEY_BUILDER = "MONEY_BUILDER",
  REORDER = "REORDER",
  SORTER_BUCKET = "SORTER_BUCKET",
  SHAPE_MATCH = "SHAPE_MATCH",
  SLIDER_INPUT = "SLIDER_INPUT",
  OBJECT_COUNT = "OBJECT_COUNT",
  CIRCUIT = "CIRCUIT",
  GRAPH_INPUT = "GRAPH_INPUT",
  VISUAL = "VISUAL",
  BINARY = "BINARY",
  VISUAL_COUNT = "VISUAL_COUNT",
  INPUT = "INPUT",
  CATEGORIZE = "CATEGORIZE",
  WORD_SELECT = "WORD_SELECT",
  BALANCE = "BALANCE",
  CALCULATOR = "CALCULATOR",
  ANATOMY = "ANATOMY",
  DRAG_TO_SLOTS = "DRAG_TO_SLOTS",
  LOCATOR_HOTSPOT = "LOCATOR_HOTSPOT",
  PROFIT_LOSS = "PROFIT_LOSS",
  PIZZA = "PIZZA"
}

export interface QuestionOption {
  id: string;
  text: string;
  visual?: string;
  isCorrect?: boolean;
  bucketId?: string;
  value?: number;
  matchId?: string;
  options?: any[]; 
  correctAnswer: any;
  explanation?: string;
  questionMeta?: any;
  interactiveData?: any;
}

export interface Category {
  id: string;
  label: string;
  visual?: string;
}

export interface Question {
  id: number;
  subject: Subject;
  gradeLevel?: number; 
  questionText?: string; 
  text?: string;      
  skillTag?: string;
  interactionType: InteractionType; 
  type?: InteractionType;          
  interactiveData?: any; 
  questionMeta?: any;              
  options?: any[]; 
  correctAnswer: any; 
  explanation?: string; 
  backgroundImage?: string;
  categories?: any[];
  resourceId?: string;
}
export interface UserResponse {
  questionId: number;
  isCorrect: boolean;
  userAnswer: string | string[];
  timeTaken: number;
  isSkipped?: boolean;
}

export interface Analytics {
  score: number;
  totalQuestions: number;
  skipped: number;
  bySubject: { [key in Subject]: { correct: number; total: number; percentage: number } };
  weakAreas: string[];
  strongAreas: string[];
}

// New Structure matching user request
export interface StudentReport {
  id?: number; // Internal local ID for keys
  report_id?: string; // Firestore ID
  student_id: string;
  student_name: string;
  subject: string; // e.g., "Math" or "Grade 5 Diagnostic"
  grade: string; // e.g., "Grade 5"
  timestamp: string; // ISO String
  final_score: number;
  total_marks: number;
  mastery_level: string; // e.g., "Excellent"
  
  performance_analysis: {
    strong_areas: string[];
    weak_areas: string[];
  };

  incorrect_question_ids: string[]; // e.g., ["q_501", "q_512"]
  skipped_question_ids: string[];
}

export enum Platform {
  KHAN_ACADEMY = "Khan Academy",
  IXL = "IXL",
  PRODIGY = "Prodigy",
  QUIZIZZ = "Quizizz",
  PHET = "PhET Interactive Simulations",
  QUIZLET = "Quizlet",
  DUOLINGO = "Duolingo",
  KAHOOT = "Kahoot!",
  YOUTUBE = "YouTube" 
}
