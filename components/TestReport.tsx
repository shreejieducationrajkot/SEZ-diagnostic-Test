import React, { useMemo, useState, useEffect, useRef } from 'react';
import { ArrowLeft, Trash2, RotateCcw, Activity, Beaker, BookOpen, FileText, AlertTriangle, CheckSquare, XCircle, Loader, SkipForward, Download } from 'lucide-react';
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

  // PDF Ref
  const reportRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  // --- 1. LOAD QUESTIONS DYNAMICALLY ---
  useEffect(() => {
    const loadQuestions = async () => {
      setIsLoading(true);
      
      // PARSE GRADE: Extracts "3" from "Grade 3" or "3rd Grade"
      const gradeStr = String(record.grade).replace(/[^0-9]/g, '');
      const gradeLevel = parseInt(gradeStr);

      if (isNaN(gradeLevel)) {
          console.error("Could not determine grade level from:", record.grade);
          setIsLoading(false);
          return;
      }

      try {
        let module;
        // Load the correct file based on the parsed number
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
        
        const questions = module.default || 
                          module[`grade${gradeLevel}Questions`] || 
                          module.questionBank || 
                          [];

        setGradeQuestions(questions);
      } catch (e) {
        console.error("Failed to load questions", e);
      } finally {
        setIsLoading(false);
      }
    };
    loadQuestions();
  }, [record.grade]);

  // --- 2. ANALYSIS LOGIC ---
  const detailedAnalysis = useMemo(() => {
    if (isLoading) return null;
    if (!gradeQuestions || gradeQuestions.length === 0) return null;
    
    const incorrectIds = record.incorrect_question_ids || [];
    const incorrectSet = new Set(incorrectIds.map(id => Number(String(id).replace("q_", ""))));
    
    const skippedIds = record.skipped_question_ids || [];
    const skippedSet = new Set(skippedIds.map(id => Number(String(id).replace("q_", ""))));

    const subjects: Record<string, { correct: number, total: number, skills: Record<string, {correct: number, total: number}> }> = {};
    
    gradeQuestions.forEach(q => {
        const isCorrect = !incorrectSet.has(q.id) && !skippedSet.has(q.id);
        const subjectKey = q.subject || "General";
        
        if (!subjects[subjectKey]) subjects[subjectKey] = { correct: 0, total: 0, skills: {} };
        subjects[subjectKey].total += 1;
        if (isCorrect) subjects[subjectKey].correct += 1;

        const skill = q.skillTag || 'General';
        if (!subjects[subjectKey].skills[skill]) subjects[subjectKey].skills[skill] = { correct: 0, total: 0 };
        subjects[subjectKey].skills[skill].total += 1;
        if (isCorrect) subjects[subjectKey].skills[skill].correct += 1;
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

  // --- 3. PDF DOWNLOAD LOGIC ---
  const loadLibrary = (url: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (document.querySelector(`script[src="${url}"]`)) { resolve(); return; }
      const script = document.createElement('script');
      script.src = url;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`Failed to load ${url}`));
      document.head.appendChild(script);
    });
  };

  const handleDownloadPDF = async () => {
    if (!reportRef.current) return;
    setIsDownloading(true);

    try {
      await loadLibrary('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js');
      await loadLibrary('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js');

      // @ts-ignore
      const html2canvas = window.html2canvas;
      // @ts-ignore
      const { jsPDF } = window.jspdf;

      const canvas = await html2canvas(reportRef.current, { scale: 2, useCORS: true, backgroundColor: '#ffffff', logging: false });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 10;

      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save(`${record.student_name.replace(/\s+/g, '_')}_Report.pdf`);

    } catch (error) {
      console.error("PDF Error:", error);
      alert("Could not generate PDF.");
    } finally {
      setIsDownloading(false);
    }
  };

  const getSubjectIcon = (subject: string) => {
      if (!subject) return <BookOpen size={18} />;
      if (subject.includes('Math')) return <Activity size={18} />;
      if (subject.includes('Science')) return <Beaker size={18} />;
      return <BookOpen size={18} />;
  };

  const renderSubjectAnalysis = () => {
      if (!detailedAnalysis || !detailedAnalysis.subjects) return null;
      return Object.entries(detailedAnalysis.subjects).map(([subj, data]) => {
          const typedData = data as { correct: number; total: number; skills: Record<string, { correct: number; total: number; }> };
          if (typedData.total === 0) return null;
          const pct = Math.round((typedData.correct / typedData.total) * 100);
          const prof = detailedAnalysis.getProficiency(pct);
          
          const weakSkills = Object.entries(typedData.skills).filter(([_, stats]) => (stats.correct / stats.total) < 0.6).map(([name]) => name);
          const strongSkills = Object.entries(typedData.skills).filter(([_, stats]) => (stats.correct / stats.total) >= 0.8).map(([name]) => name);

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
                          <span className="block font-bold text-slate-500 dark:text-slate-400 text-xs uppercase mb-1">Competencies</span>
                          {strongSkills.length > 0 ? (
                              <ul className="list-disc list-inside text-emerald-700 dark:text-emerald-400">
                                  {strongSkills.map(s => <li key={s}>{s}</li>)}
                              </ul>
                          ) : <span className="text-slate-400 dark:text-slate-500 italic">No clear strengths.</span>}
                      </div>
                      <div>
                          <span className="block font-bold text-slate-500 dark:text-slate-400 text-xs uppercase mb-1">Critical Gaps</span>
                          {weakSkills.length > 0 ? (
                              <ul className="list-disc list-inside text-rose-700 dark:text-rose-400 font-medium">
                                  {weakSkills.map(s => <li key={s}>{s}</li>)}
                              </ul>
                          ) : <span className="text-slate-400 dark:text-slate-500 italic">No major gaps.</span>}
                      </div>
                  </div>
              </div>
          );
      });
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-slate-500">
        <Loader className="w-10 h-10 animate-spin mb-4" />
        <p className="font-bold">Generating Report...</p>
      </div>
    );
  }

  if (!detailedAnalysis) {
    return <div className="p-8 text-center">Failed to load analysis.</div>;
  }

  const getRealityCheck = () => {
      const pct = detailedAnalysis.overallPercentage;
      if (pct >= 80) return { status: "Above Grade Level", desc: `Student demonstrates mastery of ${record.grade} concepts.`, color: "text-emerald-700 bg-emerald-50 border-emerald-200 dark:text-emerald-300 dark:bg-emerald-900/20 dark:border-emerald-700" };
      if (pct >= 60) return { status: "At Grade Level", desc: `Student meets core expectations for ${record.grade}.`, color: "text-blue-700 bg-blue-50 border-blue-200 dark:text-blue-300 dark:bg-blue-900/20 dark:border-blue-700" };
      if (pct >= 40) return { status: "Below Grade Level", desc: `Student struggles with ${record.grade} curriculum.`, color: "text-amber-700 bg-amber-50 border-amber-200 dark:text-amber-300 dark:bg-amber-900/20 dark:border-amber-700" };
      return { status: "Critical Risk", desc: `Student is not performing at ${record.grade} level.`, color: "text-rose-700 bg-rose-50 border-rose-200 dark:text-rose-300 dark:bg-rose-900/20 dark:border-rose-700" };
  };

  const reality = getRealityCheck();
  const strongAreas = record.performance_analysis?.strong_areas || [];
  const weakAreas = record.performance_analysis?.weak_areas || [];

  return (
    <div className="max-w-5xl mx-auto animate-pop pb-32">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
            <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white font-bold transition-colors">
                <ArrowLeft size={20} /> Back to Dashboard
            </button>
            <span className="hidden md:block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase">
               Ref: {record.report_id ? record.report_id.slice(0,8) : "LOC"}
            </span>
        </div>

        {/* PRINTABLE AREA */}
        <div ref={reportRef} className="bg-white dark:bg-slate-800 rounded-none md:rounded-lg shadow-xl border border-slate-300 dark:border-slate-700 overflow-hidden mb-8">
            <div className="bg-white dark:bg-slate-900 p-8 border-b-4 border-brand-500">
                <div className="flex flex-col md:flex-row justify-between md:items-end gap-6">
                    <div>
                        <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2">Diagnostic Assessment Report</div>
                        <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-1">{record.student_name}</h1>
                        
                        {/* --- DYNAMIC TITLE --- */}
                        {/* It will now display exactly what 'record.grade' contains */}
                        <div className="text-lg text-slate-600 dark:text-slate-300 font-medium">
                           {record.grade} Entry Assessment
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="text-sm text-slate-500 dark:text-slate-400">{new Date(record.timestamp).toLocaleDateString()}</div>
                        <div className="text-3xl font-mono font-bold text-slate-900 dark:text-white">{detailedAnalysis.overallPercentage}%</div>
                        <div className="text-xs uppercase font-bold text-slate-500">Overall Score</div>
                    </div>
                </div>
            </div>

            <div className="p-8 space-y-8 bg-white dark:bg-slate-800">
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
                    <div className="space-y-4">{renderSubjectAnalysis()}</div>
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
                        ) : <p className="text-sm text-slate-500 italic pl-3">No consistent strengths.</p>}
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
                        ) : <p className="text-sm text-slate-500 italic pl-3">No critical weaknesses.</p>}
                    </section>
                </div>

                <hr className="border-slate-100 dark:border-slate-700" />
                <section>
                    <h3 className="text-sm font-black text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-4 flex items-center gap-2">
                        <SkipForward size={18} /> Skipped Questions ({detailedAnalysis.skippedCount})
                    </h3>
                    {detailedAnalysis.skippedCount > 0 ? (
                        <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                            <ul className="list-disc list-inside text-sm text-slate-700 dark:text-slate-300 space-y-1">
                                {detailedAnalysis.skippedQuestions.map(q => (
                                    <li key={q.id}>
                                        <span className="font-bold text-xs uppercase text-slate-500 mr-2">{q.subject}</span>
                                        {q.skillTag || q.questionText.substring(0, 30) + "..."}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : <p className="text-sm text-slate-500 italic pl-3">No skipped questions.</p>}
                </section>
            </div>
            <div className="bg-slate-100 dark:bg-slate-800 p-4 text-center text-xs text-slate-400 dark:text-slate-500 font-mono uppercase border-t border-slate-200 dark:border-slate-700">
                Generated via Shreeji Education Zone • Diagnostic Protocol
            </div>
        </div>

        {/* FOOTER */}
        <div className="fixed bottom-0 left-0 w-full bg-white/80 backdrop-blur-sm dark:bg-slate-800/80 border-t border-slate-200 dark:border-slate-700 p-4 shadow-2xl z-50">
            <div className="max-w-5xl mx-auto flex justify-between items-center">
                <button onClick={onDelete} className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 border-2 border-red-100 dark:border-red-900/50 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 hover:border-red-200 rounded-xl font-bold transition-all">
                    <Trash2 size={20} /> Delete
                </button>
                <div className="flex gap-3">
                    <button onClick={handleDownloadPDF} disabled={isDownloading} className="flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold shadow-lg shadow-emerald-200 dark:shadow-none transition-all hover:-translate-y-1 disabled:opacity-70 disabled:cursor-wait">
                        {isDownloading ? <Loader size={18} className="animate-spin"/> : <Download size={18} />}
                        {isDownloading ? "..." : "PDF"}
                    </button>
                    <button onClick={onBack} className="hidden md:flex items-center gap-2 px-6 py-3 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-xl font-bold transition-all">
                        Close
                    </button>
                    <button onClick={onRetake} className="flex items-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-500 text-white rounded-xl font-bold shadow-lg shadow-brand-200 transition-all hover:-translate-y-1">
                        <RotateCcw size={20} /> Retake
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default TestReport;