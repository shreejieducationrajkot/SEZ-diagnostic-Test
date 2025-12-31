
import React, { useMemo, useState, useEffect } from 'react';
import { ArrowLeft, Trash2, RotateCcw, Activity, Beaker, BookOpen, FileText, AlertTriangle, CheckSquare, XCircle, Loader, SkipForward } from 'lucide-react';
import { StudentReport, Question } from '../types';

interface TestReportProps {
  record: StudentReport;
  onBack: () => void;
  onDelete: () => void;
  onRetake: () => void;
}

const TestReport: React.FC<TestReportProps> = ({ record, onBack, onDelete, onRetake }) => {
  const [gradeQuestions, setGradeQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadQuestions = async () => {
      setIsLoading(true);
      // Robust grade parsing: Handles "Grade 5", "5", etc.
      const gradeStr = String(record.grade).replace(/[^0-9]/g, '');
      const gradeLevel = parseInt(gradeStr);

      if (isNaN(gradeLevel)) {
          console.error("Invalid grade level in report:", record.grade);
          setIsLoading(false);
          return;
      }
      try {
        let module;
        switch (gradeLevel) {
          case 3: module = await import('../data/grade3'); break;
          case 4: module = await import('../data/grade4'); break;
          case 5: module = await import('../data/grade5'); break;
          case 6: module = await import('../data/grade6'); break;
          case 7: module = await import('../data/grade7'); break;
          case 8: module = await import('../data/grade8'); break;
          case 9: module = await import('../data/grade9'); break;
          case 10: module = await import('../data/grade10'); break;
          case 11: module = await import('../data/grade11'); break;
          case 12: module = await import('../data/grade12'); break;
          default: throw new Error(`No data file for grade ${gradeLevel}`);
        }
        
        // Robust loading: Check default, named export, or questionBank
        const questions = module.default || 
                          module[`grade${gradeLevel}Questions`] || 
                          module.questionBank || 
                          [];

        setGradeQuestions(questions);
      } catch (e) {
        console.error("Failed to load questions for report analysis", e);
      } finally {
        setIsLoading(false);
      }
    };
    loadQuestions();
  }, [record.grade]);

  const detailedAnalysis = useMemo(() => {
    // If we have no questions but the page isn't loading, we might want to show basic stats anyway.
    // However, the detailed breakdown relies on questions.
    if (isLoading) return null;
    
    // Fallback: If questions failed to load, we can't do detailed analysis.
    if (!gradeQuestions || gradeQuestions.length === 0) return null;
    
    // Defensive coding: Ensure array exists before mapping
    const incorrectIds = record.incorrect_question_ids || [];
    const incorrectSet = new Set(incorrectIds.map(id => Number(String(id).replace("q_", ""))));
    
    // Track skipped questions
    const skippedIds = record.skipped_question_ids || [];
    const skippedSet = new Set(skippedIds.map(id => Number(String(id).replace("q_", ""))));

    const subjects: Record<string, { correct: number, total: number, skills: Record<string, {correct: number, total: number}> }> = {};
    
    gradeQuestions.forEach(q => {
        // Only analyze questions that could have been in the test.
        // This is a proxy since we don't know the exact 40 questions.
        // A better approach would be to save question IDs with the report.
        // For now, we assume analysis is on the entire grade bank.
        const isCorrect = !incorrectSet.has(q.id) && !skippedSet.has(q.id);
        
        if (!subjects[q.subject]) subjects[q.subject] = { correct: 0, total: 0, skills: {} };
        subjects[q.subject].total += 1;
        if (isCorrect) subjects[q.subject].correct += 1;

        const skill = q.skillTag || 'General';
        if (!subjects[q.subject].skills[skill]) subjects[q.subject].skills[skill] = { correct: 0, total: 0 };
        subjects[q.subject].skills[skill].total += 1;
        if (isCorrect) subjects[q.subject].skills[skill].correct += 1;
    });

    const overallPercentage = Math.round((record.final_score / record.total_marks) * 100);

    const getProficiency = (pct: number) => {
        if (pct >= 85) return { label: 'Advanced', color: 'text-emerald-700 dark:text-emerald-300', bg: 'bg-emerald-100 dark:bg-emerald-900/30', icon: '🟢', status: 'Strong' };
        if (pct >= 70) return { label: 'Proficient', color: 'text-blue-700 dark:text-blue-300', bg: 'bg-blue-100 dark:bg-blue-900/30', icon: '🔵', status: 'Average' };
        if (pct >= 50) return { label: 'Developing', color: 'text-amber-700 dark:text-amber-300', bg: 'bg-amber-100 dark:bg-amber-900/30', icon: '🟡', status: 'Weak' };
        return { label: 'Critical', color: 'text-rose-700 dark:text-rose-300', bg: 'bg-rose-100 dark:bg-rose-900/30', icon: '🔴', status: 'Critical' };
    };

    return {
        overallPercentage,
        subjects,
        getProficiency,
        skippedCount: skippedSet.size,
        skippedQuestions: gradeQuestions.filter(q => skippedSet.has(q.id))
    };
  }, [record, gradeQuestions, isLoading]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-slate-500">
        <Loader className="w-10 h-10 animate-spin mb-4" />
        <p className="font-bold">Generating Detailed Report...</p>
      </div>
    );
  }

  // --- CHANGED LOGIC HERE ---
  // If analysis is missing (e.g. data load error), show a basic report instead of just an error.
  if (!detailedAnalysis) {
    return (
        <div className="max-w-5xl mx-auto animate-pop pb-32">
            <div className="flex justify-between items-center mb-6">
                <button onClick={onBack} className="flex items-center gap-2 text-slate-500 font-bold"><ArrowLeft size={20} /> Back</button>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-xl border-l-4 border-amber-500">
                <h1 className="text-3xl font-black text-slate-800 dark:text-white mb-2">{record.student_name}</h1>
                <p className="text-slate-500 mb-6">{record.grade} • {new Date(record.timestamp).toLocaleDateString()}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-xl">
                        <span className="text-xs font-bold uppercase text-slate-400">Score</span>
                        <div className="text-4xl font-black text-brand-600 dark:text-brand-400">
                            {record.final_score}/{record.total_marks}
                        </div>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-xl">
                        <span className="text-xs font-bold uppercase text-slate-400">Mastery</span>
                        <div className="text-4xl font-black text-blue-600 dark:text-blue-400">
                            {record.mastery_level}
                        </div>
                    </div>
                </div>

                <div className="p-4 bg-amber-50 dark:bg-amber-900/20 text-amber-800 dark:text-amber-200 rounded-lg flex items-center gap-3">
                    <AlertTriangle />
                    <div>
                        <strong>Detailed Analysis Unavailable.</strong>
                        <p className="text-sm">We could not load the question bank for {record.grade} to perform a deep-dive analysis. Please verify the question data files.</p>
                    </div>
                </div>
            </div>
             <div className="fixed bottom-0 left-0 w-full bg-white dark:bg-slate-800 p-4 shadow-2xl z-50 flex justify-center">
                <button onClick={onDelete} className="text-red-500 font-bold flex items-center gap-2"><Trash2 size={18}/> Delete Record</button>
            </div>
        </div>
    );
  }

  const getSubjectIcon = (subject: string) => {
      if (subject.includes('Math')) return <Activity size={18} />;
      if (subject.includes('Science')) return <Beaker size={18} />;
      return <BookOpen size={18} />;
  };

  const renderSubjectAnalysis = () => {
      return Object.entries(detailedAnalysis.subjects).map(([subj, data]) => {
          const typedData = data as { correct: number; total: number; skills: Record<string, { correct: number; total: number; }> };
          if (typedData.total === 0) return null;
          const pct = Math.round((typedData.correct / typedData.total) * 100);
          const prof = detailedAnalysis.getProficiency(pct);
          
          const weakSkills = Object.entries(typedData.skills)
              .filter(([_, stats]) => {
                  const s = stats as { correct: number; total: number; };
                  return (s.correct / s.total) < 0.6;
              })
              .map(([name]) => name);
          
          const strongSkills = Object.entries(typedData.skills)
              .filter(([_, stats]) => {
                  const s = stats as { correct: number; total: number; };
                  return (s.correct / s.total) >= 0.8;
              })
              .map(([name]) => name);

          return (
              <div key={subj} className="mb-6 p-4 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50/50 dark:bg-slate-800/30">
                  <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-slate-800 dark:text-slate-100 uppercase flex items-center gap-2">
                          {getSubjectIcon(subj)} {subj}
                      </h4>
                      <span className={`px-2 py-0.5 text-xs font-bold uppercase rounded ${prof.bg} ${prof.color}`}>
                          {prof.label} ({pct}%)
                      </span>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                          <span className="block font-bold text-slate-500 dark:text-slate-400 text-xs uppercase mb-1">Competencies (Proven)</span>
                          {strongSkills.length > 0 ? (
                              <ul className="list-disc list-inside text-emerald-700 dark:text-emerald-400">
                                  {strongSkills.map(s => <li key={s}>{s}</li>)}
                              </ul>
                          ) : (
                              <span className="text-slate-400 dark:text-slate-500 italic">No clear strengths demonstrated.</span>
                          )}
                      </div>
                      <div>
                          <span className="block font-bold text-slate-500 dark:text-slate-400 text-xs uppercase mb-1">Critical Gaps (Failed)</span>
                          {weakSkills.length > 0 ? (
                              <ul className="list-disc list-inside text-rose-700 dark:text-rose-400 font-medium">
                                  {weakSkills.map(s => <li key={s}>{s}</li>)}
                              </ul>
                          ) : (
                              <span className="text-slate-400 dark:text-slate-500 italic">No major gaps detected.</span>
                          )}
                      </div>
                  </div>
              </div>
          );
      });
  };

  const getRealityCheck = () => {
      const pct = detailedAnalysis.overallPercentage;
      if (pct >= 80) return {
          status: "Above Grade Level",
          desc: `Student demonstrates mastery of ${record.grade} concepts. Ready for advanced topics.`,
          color: "text-emerald-700 bg-emerald-50 border-emerald-200 dark:text-emerald-300 dark:bg-emerald-900/20 dark:border-emerald-700"
      };
      if (pct >= 60) return {
          status: "At Grade Level",
          desc: `Student meets core expectations for ${record.grade}, but lacks consistency in complex applications.`,
          color: "text-blue-700 bg-blue-50 border-blue-200 dark:text-blue-300 dark:bg-blue-900/20 dark:border-blue-700"
      };
      if (pct >= 40) return {
          status: "Below Grade Level",
          desc: `Student struggles with ${record.grade} curriculum. Foundational intervention required immediately.`,
          color: "text-amber-700 bg-amber-50 border-amber-200 dark:text-amber-300 dark:bg-amber-900/20 dark:border-amber-700"
      };
      return {
          status: "Critical Risk",
          desc: `Student is not performing at ${record.grade} level. Significant remedial work needed before progressing.`,
          color: "text-rose-700 bg-rose-50 border-rose-200 dark:text-rose-300 dark:bg-rose-900/20 dark:border-rose-700"
      };
  };

  const reality = getRealityCheck();

  // Safety checks for arrays
  const strongAreas = record.performance_analysis?.strong_areas || [];
  const weakAreas = record.performance_analysis?.weak_areas || [];

  return (
    <div className="max-w-5xl mx-auto animate-pop pb-32">
        <div className="flex justify-between items-center mb-6">
            <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white font-bold transition-colors">
                <ArrowLeft size={20} /> Back to Dashboard
            </button>
            <div className="flex gap-2 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase">
                <span>Ref: {record.report_id ? record.report_id.slice(0,8) : "LOC"}</span>
            </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-none md:rounded-lg shadow-xl border border-slate-300 dark:border-slate-700 overflow-hidden mb-8 print:shadow-none print:border-none">
            
            <div className="bg-white dark:bg-slate-900 p-8 border-b-4 border-brand-500">
                <div className="flex flex-col md:flex-row justify-between md:items-end gap-6">
                    <div>
                        <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2">Diagnostic Assessment Report</div>
                        <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-1">{record.student_name}</h1>
                        <div className="text-lg text-slate-600 dark:text-slate-300 font-medium">{record.grade} Entry Assessment</div>
                    </div>
                    <div className="text-right">
                        <div className="text-sm text-slate-500 dark:text-slate-400">{new Date(record.timestamp).toLocaleDateString()}</div>
                        <div className="text-3xl font-mono font-bold text-slate-900 dark:text-white">{detailedAnalysis.overallPercentage}%</div>
                        <div className="text-xs uppercase font-bold text-slate-500">Overall Score</div>
                    </div>
                </div>
            </div>

            <div className="p-8 space-y-8">
                
                <section>
                    <h3 className="text-lg font-black text-slate-900 dark:text-slate-100 uppercase tracking-wide mb-4 flex items-center gap-2">
                        <Activity size={20} /> 1. Reality Check & Standing
                    </h3>
                    <div className={`p-4 border-l-4 rounded-r-lg ${reality.color}`}>
                        <div className="font-black text-xl mb-1">{reality.status}</div>
                        <p className="font-medium opacity-90">{reality.desc}</p>
                    </div>
                </section>

                <hr className="border-slate-100 dark:border-slate-700" />

                <section>
                    <h3 className="text-lg font-black text-slate-900 dark:text-slate-100 uppercase tracking-wide mb-4 flex items-center gap-2">
                        <FileText size={20} /> 2. Subject-wise Analysis
                    </h3>
                    <div className="space-y-4">
                        {renderSubjectAnalysis()}
                    </div>
                </section>

                 <hr className="border-slate-100 dark:border-slate-700" />

                <div className="grid md:grid-cols-2 gap-8">
                    <section>
                         <h3 className="text-sm font-black text-emerald-700 dark:text-emerald-400 uppercase tracking-wide mb-4 flex items-center gap-2">
                            <CheckSquare size={18} /> Validated Strengths
                        </h3>
                        {strongAreas.length > 0 ? (
                            <ul className="space-y-2">
                                {strongAreas.map((area, i) => (
                                    <li key={i} className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-start gap-2">
                                        <span className="text-emerald-500 dark:text-emerald-400 mt-0.5">✓</span> {area}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-sm text-slate-500 dark:text-slate-400 italic border-l-2 border-slate-200 dark:border-slate-600 pl-3">
                                Data does not support any consistent strengths at this level.
                            </p>
                        )}
                    </section>

                    <section>
                         <h3 className="text-sm font-black text-rose-700 dark:text-rose-400 uppercase tracking-wide mb-4 flex items-center gap-2">
                            <XCircle size={18} /> Confirmed Weaknesses
                        </h3>
                         {weakAreas.length > 0 ? (
                            <ul className="space-y-2">
                                {weakAreas.map((area, i) => (
                                    <li key={i} className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-start gap-2">
                                        <span className="text-rose-500 dark:text-rose-400 mt-0.5">✕</span> {area}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-sm text-slate-500 dark:text-slate-400 italic border-l-2 border-slate-200 dark:border-slate-600 pl-3">
                                No critical weaknesses detected.
                            </p>
                        )}
                    </section>
                </div>

                <hr className="border-slate-100 dark:border-slate-700" />

                {/* NEW SKIPPED QUESTIONS SECTION */}
                <section>
                    <h3 className="text-sm font-black text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-4 flex items-center gap-2">
                        <SkipForward size={18} /> Skipped Questions ({detailedAnalysis.skippedCount})
                    </h3>
                    {detailedAnalysis.skippedCount > 0 ? (
                        <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                            <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">The student skipped the following topics, indicating confusion or lack of confidence:</p>
                            <ul className="list-disc list-inside text-sm text-slate-700 dark:text-slate-300 space-y-1">
                                {detailedAnalysis.skippedQuestions.map(q => (
                                    <li key={q.id}>
                                        <span className="font-bold text-xs uppercase text-slate-500 mr-2">{q.subject}</span>
                                        {q.skillTag || q.questionText.substring(0, 30) + "..."}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <p className="text-sm text-slate-500 dark:text-slate-400 italic border-l-2 border-slate-200 dark:border-slate-600 pl-3">
                            The student attempted all questions.
                        </p>
                    )}
                </section>

                <hr className="border-slate-100 dark:border-slate-700" />

                <section className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                     <h3 className="text-lg font-black text-slate-900 dark:text-slate-100 uppercase tracking-wide mb-2 flex items-center gap-2">
                        <AlertTriangle size={20} /> Summary & Action Insight
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                        {detailedAnalysis.overallPercentage < 50 
                            ? `The student is currently struggling with core ${record.grade} material. The score of ${detailedAnalysis.overallPercentage}% indicates foundational gaps, likely carrying over from previous grades. Immediate intervention is recommended, focusing specifically on the 'Critical Gaps' listed above rather than introducing new complex topics.` 
                            : detailedAnalysis.overallPercentage < 80
                            ? `The student shows potential but lacks consistency. With a score of ${detailedAnalysis.overallPercentage}%, they understand the basics but fail when applying concepts to harder problems. Focus on moving from 'rote learning' to 'conceptual application' in the Weak Areas identified.`
                            : `The student is performing well above average (${detailedAnalysis.overallPercentage}%). They have mastered the core curriculum. To prevent stagnation, challenge them with higher-order thinking problems in their Strong Areas while patching the few minor gaps listed.`
                        }
                    </p>
                </section>
            </div>
            
            <div className="bg-slate-100 dark:bg-slate-800 p-4 text-center text-xs text-slate-400 dark:text-slate-500 font-mono uppercase border-t border-slate-200 dark:border-slate-700">
                Generated via Shreeji Education Zone • Diagnostic Protocol
            </div>
        </div>

        <div className="fixed bottom-0 left-0 w-full bg-white/80 backdrop-blur-sm dark:bg-slate-800/80 border-t border-slate-200 dark:border-slate-700 p-4 shadow-2xl z-50">
            <div className="max-w-5xl mx-auto flex justify-between items-center">
                <button 
                    onClick={onDelete}
                    className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 border-2 border-red-100 dark:border-red-900/50 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 hover:border-red-200 rounded-xl font-bold transition-all"
                >
                    <Trash2 size={20} /> Delete Record
                </button>
                <div className="flex gap-3">
                    <button 
                        onClick={onBack}
                        className="hidden md:flex items-center gap-2 px-6 py-3 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-xl font-bold transition-all"
                    >
                        Close
                    </button>
                    <button 
                        onClick={onRetake}
                        className="flex items-center gap-2 px-8 py-3 bg-brand-600 hover:bg-brand-500 text-white rounded-xl font-bold shadow-lg shadow-brand-200 transition-all hover:-translate-y-1"
                    >
                        <RotateCcw size={20} /> Retake Test
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default TestReport;
