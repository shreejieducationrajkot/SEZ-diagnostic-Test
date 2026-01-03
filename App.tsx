import React, { useState, useEffect } from 'react';
import QuestionCard from './components/QuestionCard';
import Results from './components/Results';
import AdminDashboard from './components/AdminDashboard';
import PinLock from './components/PinLock'; 
import { UserResponse, Analytics, Question, Subject, StudentReport } from './types';
import { calculateAnalytics } from './utils/scoring';
import { saveTestResult } from './utils/db';
import { Timer, Play, Star, BookOpen, GraduationCap, BrainCircuit, Crown, Sun, Moon, Lightbulb, LayoutDashboard, ArrowLeft, AlertTriangle, Zap, Target, FlaskConical, Award, User, ChevronRight, Loader } from 'lucide-react';
import { getBackgroundTheme, getProgressColor } from './utils/theme';

// LOGO URLS
const logoDarkUrl = "https://i.postimg.cc/HW5XnSxF/Diagnostic-Test-5-removebg-preview.png";
const logoLightUrl = "https://i.postimg.cc/Kc1Y94LJ/Diagnostic_Test_2_removebg_preview.png";
const sezLogoUrlTop = "https://i.postimg.cc/vmPQhdZC/SEZ-1-(1).png";

const GRADE_CONFIG = [
  { grade: 3, subtitle: "JUNIOR STAR", icon: Star, color: "text-purple-500", bg: "bg-purple-100 dark:bg-purple-900/30" },
  { grade: 4, subtitle: "SCHOLAR", icon: BookOpen, color: "text-blue-500", bg: "bg-blue-100 dark:bg-blue-900/30" },
  { grade: 5, subtitle: "MASTER", icon: GraduationCap, color: "text-emerald-500", bg: "bg-emerald-100 dark:bg-emerald-900/30" },
  { grade: 6, subtitle: "THINKER", icon: Lightbulb, color: "text-orange-500", bg: "bg-orange-100 dark:bg-orange-900/30" },
  { grade: 7, subtitle: "ASPIRANT", icon: BrainCircuit, color: "text-indigo-500", bg: "bg-indigo-100 dark:bg-indigo-900/30" },
  { grade: 8, subtitle: "ELITE", icon: Crown, color: "text-rose-500", bg: "bg-rose-100 dark:bg-rose-900/30" },
  { grade: 9, subtitle: "FRESHMAN", icon: Zap, color: "text-cyan-500", bg: "bg-cyan-100 dark:bg-cyan-900/30" },
  { grade: 10, subtitle: "SOPHOMORE", icon: Target, color: "text-fuchsia-500", bg: "bg-fuchsia-100 dark:bg-fuchsia-900/30" },
  { grade: 11, subtitle: "JUNIOR", icon: FlaskConical, color: "text-lime-500", bg: "bg-lime-100 dark:bg-lime-900/30" },
  { grade: 12, subtitle: "SENIOR", icon: Award, color: "text-amber-500", bg: "bg-amber-100 dark:bg-amber-900/30" },
];

function App() {
  const [grade, setGrade] = useState<number | null>(null);
  const [studentName, setStudentName] = useState<string>("");
  const [inputName, setInputName] = useState("");
  const [started, setStarted] = useState(false);
  
  const [allQuestions, setAllQuestions] = useState<Question[]>([]);
  const [isQuestionsLoading, setIsQuestionsLoading] = useState(false);

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<UserResponse[]>([]);
  const [isFinished, setIsFinished] = useState(false);
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  const [showExitConfirmation, setShowExitConfirmation] = useState(false);
  
  const [saveStatus, setSaveStatus] = useState<'IDLE'|'SAVING'|'SUCCESS'|'ERROR'>('IDLE');
  
  const [globalTimeLeft, setGlobalTimeLeft] = useState(1800);
  const [isProgressAnimating, setIsProgressAnimating] = useState(false);

  // --- ADMIN & LOCK STATE ---
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [showLock, setShowLock] = useState(false);

  // --- THEME STATE ---
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('sez_theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('sez_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('sez_theme', 'light');
    }
  }, [isDarkMode]);

  // --- LOAD QUESTIONS ---
  useEffect(() => {
    if (grade) {
      const loadQuestionsForGrade = async () => {
        setIsQuestionsLoading(true);
        try {
          let module;
          switch (grade) {
            case 3: module = await import('./data/grade3'); break;
            case 4: module = await import('./data/grade4'); break;
            case 5: module = await import('./data/grade5'); break;
            case 6: module = await import('./data/grade6'); break;
            case 7: module = await import('./data/grade7'); break;
            case 8: module = await import('./data/grade8'); break;
            case 9: module = await import('./data/grade9'); break;
            case 10: module = await import('./data/grade10'); break;
            case 11: module = await import('./data/grade11'); break;
            case 12: module = await import('./data/grade12'); break;     
            default: throw new Error(`No data file for grade ${grade}`);
          }

          const questionsData = module.default || 
                                module[`grade${grade}Questions`] || 
                                module.questionBank || 
                                [];

          if (questionsData.length === 0) console.warn("Loaded module but found no questions:", module);
          setAllQuestions(questionsData);
          
        } catch (e) {
          console.error(`Failed to load questions for grade ${grade}`, e);
          alert(`Could not load questions for Grade ${grade}.`);
          setGrade(null); 
        } finally {
          setIsQuestionsLoading(false);
        }
      };
      loadQuestionsForGrade();
    }
  }, [grade]);

  // --- TIMERS ---
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    let timer: number;
    if (started && !isFinished && globalTimeLeft > 0 && !showExitConfirmation) {
      timer = window.setInterval(() => {
        setGlobalTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            finishTest(responses); 
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [started, isFinished, globalTimeLeft, responses, showExitConfirmation]); 

  useEffect(() => {
    if (currentQuestionIndex > 0) {
      setIsProgressAnimating(true);
      const timer = setTimeout(() => setIsProgressAnimating(false), 400);
      return () => clearTimeout(timer);
    }
  }, [currentQuestionIndex]);

  // --- HANDLERS ---
  const handleStart = () => {
    if (!allQuestions || allQuestions.length === 0) {
      alert("Questions have not been loaded yet. Please try again.");
      return;
    }
    const BATCH_SIZE = 40;
    const totalQuestionsInBank = allQuestions.length;
    const attemptKey = `sez_attempt_grade_${grade}`;
    const currentAttempt = parseInt(localStorage.getItem(attemptKey) || '0', 10);
    const startIndex = (currentAttempt * BATCH_SIZE) % totalQuestionsInBank;
    
    let sessionQuestions = allQuestions.slice(startIndex, startIndex + BATCH_SIZE);
    if (sessionQuestions.length < BATCH_SIZE && totalQuestionsInBank >= BATCH_SIZE) {
        const remaining = BATCH_SIZE - sessionQuestions.length;
        sessionQuestions.push(...allQuestions.slice(0, remaining));
    }

    localStorage.setItem(attemptKey, (currentAttempt + 1).toString());

    const subjectPriority: Record<string, number> = {
      [Subject.MATH]: 1, [Subject.SCIENCE]: 2, [Subject.ENGLISH]: 3
    };

    const groupedQuestions = sessionQuestions.sort((a, b) => {
        const pA = subjectPriority[a.subject] || 99;
        const pB = subjectPriority[b.subject] || 99;
        return pA - pB;
    });
    
    setQuestions(groupedQuestions);
    setStarted(true);
    setGlobalTimeLeft(1800);
    setCurrentQuestionIndex(0);
    setResponses([]);
    setIsFinished(false);
    setSaveStatus('IDLE');
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex(prev => Math.max(0, prev - 1));
  };

  const handleAnswer = (isCorrect: boolean, userAnswer: string | string[], timeTaken: number) => {
    const currentQ = questions[currentQuestionIndex];
    const newResponse: UserResponse = { questionId: currentQ.id, isCorrect, userAnswer, timeTaken, isSkipped: false };
    
    let updatedResponses = [...responses];
    const existingIndex = updatedResponses.findIndex(r => r.questionId === currentQ.id);
    
    if (existingIndex !== -1) {
        updatedResponses[existingIndex] = newResponse;
    } else {
        updatedResponses.push(newResponse);
    }
    
    setResponses(updatedResponses);
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      finishTest(updatedResponses);
    }
  };

  const handleSkip = (timeTaken: number) => {
    const currentQ = questions[currentQuestionIndex];
    const newResponse: UserResponse = { questionId: currentQ.id, isCorrect: false, userAnswer: "SKIPPED", timeTaken, isSkipped: true };
    
    let updatedResponses = [...responses];
    const existingIndex = updatedResponses.findIndex(r => r.questionId === currentQ.id);
    
    if (existingIndex !== -1) {
        updatedResponses[existingIndex] = newResponse;
    } else {
        updatedResponses.push(newResponse);
    }

    setResponses(updatedResponses);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      finishTest(updatedResponses);
    }
  };

  // --- UNIFIED FINISH TEST FUNCTION (Replaces duplicate logic) ---
  const finishTest = async (finalResponses: UserResponse[]) => {
    const results = calculateAnalytics(finalResponses, questions);
    setAnalytics(results);
    setIsFinished(true);

    const percentage = Math.round((results.score / results.totalQuestions) * 100);
    let masteryLevel = percentage >= 80 ? "Excellent" : percentage >= 60 ? "Good" : "Developing";

    // 1. CALCULATE IDS from the provided 'finalResponses'
    const incorrectIds = finalResponses.filter(r => !r.isCorrect && !r.isSkipped).map(r => `q_${r.questionId}`);
    const skippedIds = finalResponses.filter(r => r.isSkipped).map(r => `q_${r.questionId}`);
    
    const studentId = `user_${Math.random().toString(36).substr(2, 9)}`;
    const finalGrade = grade || 3; // Fallback safety

    // 2. CREATE REPORT
    const report: StudentReport = {
        id: Date.now(),
        report_id: `REP_${Date.now()}`,
        student_id: studentId,
        student_name: studentName || "Guest Student", 
        
        // DYNAMIC SUBJECT & GRADE
        subject: `Grade ${finalGrade} Diagnostic Assessment`,
        grade: `Grade ${finalGrade}`, 
        
        timestamp: new Date().toISOString(),
        final_score: results.score,
        total_marks: results.totalQuestions,
        mastery_level: masteryLevel,
        performance_analysis: { strong_areas: results.strongAreas, weak_areas: results.weakAreas },
        incorrect_question_ids: incorrectIds,
        skipped_question_ids: skippedIds
    };

    setSaveStatus('SAVING');
    const result = await saveTestResult(report);
    if (result && result.success) setSaveStatus('SUCCESS');
    else setSaveStatus('ERROR');
  };

  const handleFullReset = () => {
    setStarted(false); setIsFinished(false); setGrade(null); setStudentName(""); setInputName("");
    setQuestions([]); setAllQuestions([]); setResponses([]); setAnalytics(null);
    setCurrentQuestionIndex(0); setGlobalTimeLeft(1800); setShowExitConfirmation(false); setSaveStatus('IDLE');
  };

  const handleNameSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (inputName.trim()) setStudentName(inputName.trim());
  };

  const handleExitRequest = () => setShowExitConfirmation(true);
  const confirmExit = () => { setShowExitConfirmation(false); handleFullReset(); };
  const cancelExit = () => setShowExitConfirmation(false);

  const ThemeToggle = () => (
    <button onClick={() => setIsDarkMode(!isDarkMode)} className="absolute top-4 left-4 z-50 p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg text-slate-800 dark:text-yellow-400 border border-slate-100 dark:border-slate-700">
      {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );

  // --- VIEW RENDERING LOGIC ---

  // 1. PIN LOCK SCREEN
  if (showLock) {
    return (
      <PinLock 
        onSuccess={() => {
          setShowLock(false);
          setIsAdminMode(true); 
        }}
        onCancel={() => setShowLock(false)}
      />
    );
  }

  // 2. ADMIN DASHBOARD
  if (isAdminMode) {
    return <AdminDashboard onExit={() => setIsAdminMode(false)} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />;
  }

  // 3. GRADE SELECTION SCREEN
  if (grade === null) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300 flex flex-col">
        <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm w-full sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center space-x-4">
                        <img src={sezLogoUrlTop} alt="SEZ Logo" className="h-12 w-auto" />
                    </div>
                    <div className="flex items-center space-x-4">
                        <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-yellow-400 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button 
                            onClick={() => setShowLock(true)} 
                            className="px-4 py-2 rounded-full bg-slate-800 hover:bg-slate-700 text-white text-sm font-bold shadow-lg flex items-center gap-2 transition-all"
                        >
                            <LayoutDashboard size={16} /> Teacher Mode
                        </button>
                    </div>
                </div>
            </div>
        </header>

        <main className="flex-1 flex flex-col items-center justify-center py-12 px-6">
            <div className="max-w-6xl w-full text-center animate-pop">
               
               <img 
                 src={isDarkMode ? logoDarkUrl : logoLightUrl} 
                 alt="SEZ Logo" 
                 className="block h-24 md:h-32 mx-auto -mb-3 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300" 
               />

               <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mt-0 tracking-tight leading-none">
                 Diagnostic Test
               </h1>

               <p className="text-xl text-slate-500 dark:text-slate-400 mt-4">Select Your Grade Level to Begin</p>
               
               <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-12">
                  {GRADE_CONFIG.map((config) => {
                      const Icon = config.icon;
                      return (
                        <button 
                            key={config.grade}
                            onClick={() => setGrade(config.grade)} 
                            className="group bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-xl hover:shadow-2xl border border-slate-100 dark:border-slate-700 hover:-translate-y-2 transition-all duration-300 flex flex-col items-center gap-4 relative overflow-hidden"
                        >
                            <div className={`p-5 rounded-full ${config.bg} ${config.color} group-hover:scale-110 transition-transform duration-300 shadow-inner`}>
                                <Icon size={36} strokeWidth={2.5} />
                            </div>
                            <div className="z-10">
                                <h2 className="text-xl font-black text-slate-800 dark:text-white mb-1">Grade {config.grade}</h2>
                                <p className={`text-[10px] font-bold ${config.color} uppercase tracking-widest`}>{config.subtitle}</p>
                            </div>
                        </button>
                      )
                  })}
               </div>
            </div>
        </main>
      </div>
    )
  }

  // 4. STUDENT NAME INPUT (LOADING SCREEN)
  if (!studentName) {
      return (
        <div className={`min-h-screen flex flex-col items-center justify-center p-6 transition-colors duration-300 ${getBackgroundTheme(grade, false)}`}>
            <ThemeToggle />
            <div className="max-w-md w-full animate-pop">
                <button 
                    onClick={() => setGrade(null)}
                    className="mb-8 flex items-center gap-2 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-colors font-bold"
                >
                    <ArrowLeft size={20} /> Back to Grade Selection
                </button>
                
                {isQuestionsLoading ? (
                  <div className="flex flex-col items-center justify-center p-8 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md rounded-2xl">
                      <Loader className="w-12 h-12 text-brand-500 animate-spin mb-4" />
                      <p className="text-slate-600 dark:text-slate-300 font-bold">Loading Grade {grade} questions...</p>
                  </div>
                ) : (
                  <div className="bg-white dark:bg-slate-900/80 backdrop-blur-md p-8 rounded-[2rem] shadow-2xl border border-slate-200 dark:border-slate-700">
                      <div className="flex justify-center mb-6">
                          <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-full text-blue-500 dark:text-blue-300">
                              <User size={48} />
                          </div>
                      </div>
                      <h2 className="text-2xl font-black text-center text-slate-800 dark:text-white mb-2">Who is taking the test?</h2>
                      <p className="text-center text-slate-500 dark:text-slate-400 mb-8 font-medium">Enter your full name to generate your report card.</p>

                      <form onSubmit={handleNameSubmit} className="space-y-4">
                          <input 
                              type="text" 
                              value={inputName}
                              onChange={(e) => setInputName(e.target.value)}
                              placeholder="Student Name"
                              className="w-full text-xl p-5 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950/50 focus:border-blue-500 focus:ring-0 text-slate-900 dark:text-white font-bold text-center placeholder:text-slate-400 placeholder:font-normal transition-all"
                              autoFocus
                          />
                          <button 
                              type="submit"
                              disabled={!inputName.trim()}
                              className="w-full py-4 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl font-bold text-xl shadow-lg transition-all flex items-center justify-center gap-2"
                          >
                              Continue <ChevronRight size={24} />
                          </button>
                      </form>
                  </div>
                )}
            </div>
        </div>
      );
  }

  // 5. INSTRUCTIONS SCREEN
  if (!started) {
    return (
      <div className={`min-h-screen flex flex-col items-center justify-center p-6 transition-colors duration-300 ${getBackgroundTheme(grade, false)}`}>
        <ThemeToggle />
        <div className="max-w-4xl w-full text-center space-y-8 animate-pop">
          <div className="flex justify-center">
             <div className="backdrop-blur-md p-4 border flex items-center gap-4 bg-white/50 dark:bg-black/30 rounded-2xl border-slate-200 dark:border-slate-700">
                <Timer size={32} className="text-slate-700 dark:text-white" />
                <div className="text-left">
                    <p className="text-xs font-bold uppercase text-slate-500 dark:text-slate-400">Total Time</p>
                    <p className="text-2xl font-black text-slate-800 dark:text-white">30:00</p>
                </div>
             </div>
          </div>
          <div>
            <h1 className="text-5xl font-black tracking-tight text-slate-800 dark:text-white mb-2">
                Grade {grade} <span className="text-brand-500">Diagnostic</span>
            </h1>
            <p className="text-xl font-bold text-slate-500 dark:text-slate-400">Welcome, {studentName}!</p>
          </div>
          
          <p className="text-lg font-medium max-w-lg mx-auto text-slate-600 dark:text-slate-300">
             You have 30 minutes to complete 40 questions. This session is part of a rotational batch system. Good luck!
          </p>
          <div className="flex justify-center my-10 gap-4">
             <button onClick={() => setStudentName("")} className="px-6 py-4 font-bold text-slate-500 hover:text-slate-700">Back</button>
             <button onClick={handleStart} className="px-10 py-4 text-white font-black shadow-xl transition-all flex items-center gap-2 bg-brand-600 rounded-xl hover:scale-105">
                 Start Test <Play fill="currentColor" />
             </button>
          </div>
        </div>
      </div>
    );
  }

  // 6. RESULTS SCREEN
  if (isFinished && analytics) {
    return (
      <div className="fixed inset-0 overflow-y-auto no-scrollbar bg-slate-50 dark:bg-slate-950 py-10 transition-colors duration-300">
        <ThemeToggle />
        <Results analytics={analytics} onRestart={handleFullReset} saveStatus={saveStatus} />
      </div>
    );
  }

  // 7. ACTIVE TEST SCREEN
  const currentQ = questions[currentQuestionIndex];
  const progress = questions.length > 0 ? ((currentQuestionIndex) / questions.length) * 100 : 0;
  const bgClass = getBackgroundTheme(grade, false);
  const progressColor = getProgressColor(grade);
  
  // Find saved answer if available for navigating back
  const existingResponse = responses.find(r => r.questionId === currentQ?.id);
  let savedAnswer = existingResponse ? existingResponse.userAnswer : null;

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-500 ${bgClass} overflow-hidden relative`}>
      <ThemeToggle />

      {showExitConfirmation && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-pop">
            <div className="p-6 max-w-sm w-full bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700">
                <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 flex items-center justify-center mb-4 bg-amber-100 dark:bg-amber-900/30 text-amber-500 rounded-full">
                        <AlertTriangle size={32} strokeWidth={2.5} />
                    </div>
                    <h3 className="text-2xl font-black mb-2 text-slate-800 dark:text-white">Exit Test?</h3>
                    <p className="mb-8 font-medium leading-relaxed text-slate-500 dark:text-slate-400">
                        Are you sure you want to leave? <br/>
                        <span className="text-rose-500 font-bold">Your progress will be lost.</span>
                    </p>
                    <div className="grid grid-cols-2 gap-3 w-full">
                        <button onClick={cancelExit} className="px-4 py-3 font-bold transition-colors rounded-2xl text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600">Stay</button>
                        <button onClick={confirmExit} className="px-4 py-3 font-bold text-white transition-transform active:scale-95 rounded-2xl bg-rose-500 hover:bg-rose-600 shadow-lg shadow-rose-200 dark:shadow-none">Exit</button>
                    </div>
                </div>
            </div>
        </div>
      )}
      
      <div className="w-full p-3 md:p-4 sticky top-0 z-50 flex items-center justify-between shadow-sm bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
         <div className="flex items-center gap-2 md:gap-4">
            <button onClick={handleExitRequest} className="p-2 transition-all active:scale-95 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white">
                <ArrowLeft size={24} strokeWidth={2.5} />
            </button>
            <div className="h-8 w-px hidden md:block bg-slate-200 dark:bg-slate-700"></div>
            <div className="flex flex-col">
                <span className="text-xs font-black uppercase tracking-widest text-brand-500">Grade {grade}</span>
                <span className="text-lg md:text-xl font-black text-slate-700 dark:text-white">
                    Q{currentQuestionIndex + 1}<span className="text-sm font-bold text-slate-400">/{questions.length}</span>
                </span>
            </div>
         </div>
         
         <div className={`flex items-center gap-3 px-3 py-1.5 md:px-4 md:py-2 font-mono text-lg md:text-xl font-bold border-2 rounded-xl
            ${globalTimeLeft < 60 ? 'bg-red-50 text-red-600 border-red-200 animate-pulse' : 
              globalTimeLeft < 300 ? 'bg-orange-50 text-orange-600 border-orange-200' : 
              'bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-white dark:border-slate-700'}
         `}>
            <Timer size={20} />
            {formatTime(globalTimeLeft)}
         </div>
      </div>

      <div className={`h-2 w-full bg-slate-200 dark:bg-slate-800 overflow-hidden ${isProgressAnimating ? 'animate-progress-pop' : ''}`}>
        <div className={`h-full transition-all duration-700 ${progressColor}`} style={{ width: `${progress}%` }} />
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center p-4 relative z-10">
          {questions.length > 0 && currentQ ? (
            <QuestionCard 
                key={currentQ.id} 
                question={currentQ} 
                onAnswer={handleAnswer} 
                onSkip={handleSkip}
                onPrevious={handlePrevious} 
                isFirstQuestion={currentQuestionIndex === 0}
                isSubmitting={false} 
                grade={grade || 5} 
            />
          ) : (
             <div className="text-slate-500 font-bold">Loading test...</div>
          )}
      </div>
    </div>
  );
}

export default App;