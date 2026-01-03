import React from 'react';
import { Analytics, Subject } from '../types';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Award, TrendingUp, AlertCircle, RefreshCcw, CheckCircle2, Cloud, CloudOff, Loader2 } from 'lucide-react';

interface ResultsProps {
  analytics: Analytics;
  onRestart: () => void;
  saveStatus?: 'IDLE'|'SAVING'|'SUCCESS'|'ERROR';
  grade?: number | string;
}

const Results: React.FC<ResultsProps> = ({ analytics, onRestart, saveStatus = 'IDLE', grade }) => {
  const data = [
    { name: 'Math', score: analytics.bySubject[Subject.MATH].percentage, color: '#8884d8' },
    { name: 'Science', score: analytics.bySubject[Subject.SCIENCE].percentage, color: '#82ca9d' },
    { name: 'English', score: analytics.bySubject[Subject.ENGLISH].percentage, color: '#ffc658' },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-8 space-y-8 animate-pop">
      {/* Header Card */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 text-center border-b-8 border-brand-500 transition-colors relative">
        <div className="absolute top-4 right-4">
             {saveStatus === 'SAVING' && (
                 <div className="flex items-center gap-2 text-blue-500 bg-blue-50 px-3 py-1 rounded-full text-xs font-bold">
                     <Loader2 className="animate-spin" size={14} /> Saving to Cloud...
                 </div>
             )}
             {saveStatus === 'SUCCESS' && (
                 <div className="flex items-center gap-2 text-green-600 bg-green-50 px-3 py-1 rounded-full text-xs font-bold">
                     <CheckCircle2 size={14} /> Saved Securely
                 </div>
             )}
             {saveStatus === 'ERROR' && (
                 <div className="flex items-center gap-2 text-red-600 bg-red-50 px-3 py-1 rounded-full text-xs font-bold">
                     <CloudOff size={14} /> Save Failed
                 </div>
             )}
        </div>

        <div className="flex justify-center mb-4">
          <Award className="w-16 h-16 text-yellow-400" />
        </div>
        <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">Diagnostic Complete!</h1>
        <p className="text-slate-500 dark:text-slate-400 mb-6">Here is your readiness report for Grade {grade}.</p>
        <div className="text-6xl font-extrabold text-brand-600 dark:text-brand-400 mb-2">
          {Math.round((analytics.score / analytics.totalQuestions) * 100)}%
        </div>
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Total Mastery</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Chart Card */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-6 transition-colors">
          <h3 className="text-xl font-bold text-slate-700 dark:text-slate-200 mb-6 flex items-center gap-2">
            <TrendingUp className="text-brand-500" /> Subject Breakdown
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} layout="vertical" margin={{ left: 20 }}>
                <XAxis type="number" domain={[0, 100]} hide />
                <YAxis dataKey="name" type="category" width={70} tick={{fill: '#64748b', fontSize: 14, fontWeight: 'bold'}} axisLine={false} tickLine={false} />
                <Tooltip 
                  cursor={{fill: 'transparent'}}
                  contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                  wrapperClassName="dark:!bg-slate-700 dark:!text-white"
                />
                <Bar dataKey="score" radius={[0, 10, 10, 0]} barSize={32}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Insights Card */}
        <div className="space-y-6">
          <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-3xl p-6 border border-emerald-100 dark:border-emerald-800 transition-colors">
            <h4 className="font-bold text-emerald-800 dark:text-emerald-400 mb-3 flex items-center gap-2">
              <Award size={20} /> Strong Areas
            </h4>
            {analytics.strongAreas.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {analytics.strongAreas.map(area => (
                  <span key={area} className="px-3 py-1 bg-white dark:bg-emerald-800 text-emerald-600 dark:text-emerald-200 rounded-full text-sm font-semibold shadow-sm">
                    {area}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-sm text-emerald-600 italic">Keep practicing to build strengths!</p>
            )}
          </div>

          <div className="bg-rose-50 dark:bg-rose-900/20 rounded-3xl p-6 border border-rose-100 dark:border-rose-800 transition-colors">
            <h4 className="font-bold text-rose-800 dark:text-rose-400 mb-3 flex items-center gap-2">
              <AlertCircle size={20} /> Focus Areas
            </h4>
            {analytics.weakAreas.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {analytics.weakAreas.map(area => (
                  <span key={area} className="px-3 py-1 bg-white dark:bg-rose-800 text-rose-600 dark:text-rose-200 rounded-full text-sm font-semibold shadow-sm">
                    {area}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-sm text-rose-600 italic">Great job! No major weak areas detected.</p>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-center pt-6">
        <button 
          onClick={onRestart}
          className="flex items-center gap-2 px-8 py-3 bg-slate-800 dark:bg-slate-700 hover:bg-slate-700 dark:hover:bg-slate-600 text-white rounded-xl font-bold transition-colors shadow-lg"
        >
          <RefreshCcw size={20} /> Restart Assessment
        </button>
      </div>
    </div>
  );
};

export default Results;