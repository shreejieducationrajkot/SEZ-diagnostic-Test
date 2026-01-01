import React, { useState, useEffect } from 'react';
import { StudentReport } from '../types';
import TestReport from './TestReport';
import { getTestHistory, deleteTestResult } from '../utils/db';
import { Trash2, History, Cloud, LayoutDashboard, Search, LogOut, ChevronRight, User, AlertOctagon, RefreshCw, Laptop, Sun, Moon } from 'lucide-react';

interface AdminDashboardProps {
  onExit: () => void;
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
}

const CACHE_KEY = 'sez_admin_reports_cache';

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onExit, isDarkMode, setIsDarkMode }) => {
  const [reports, setReports] = useState<StudentReport[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedReportId, setSelectedReportId] = useState<string | number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // State for delete confirmation modal
  const [reportToDelete, setReportToDelete] = useState<StudentReport | null>(null);

  const fetchData = async (forceRefresh: boolean = false) => {
    setLoading(true);
    setError(null);

    // 1. Try to load from Cache first
    if (!forceRefresh) {
        try {
            const cachedData = sessionStorage.getItem(CACHE_KEY);
            if (cachedData) {
                const parsedReports = JSON.parse(cachedData);
                setReports(parsedReports);
                setLoading(false);
                return; 
            }
        } catch (e) {
            console.warn("Cache parsing failed, fetching fresh data.");
            sessionStorage.removeItem(CACHE_KEY);
        }
    }

    // 2. Fetch from DB
    const result = await getTestHistory();
    if (result.error) {
        setError(result.error);
    }
    
    setReports(result.data);
    
    // 3. Update Cache
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(result.data));
    setLoading(false);
  };

  useEffect(() => {
    fetchData(false);
  }, []);

  const handleDeleteRequest = (report: StudentReport) => {
      setReportToDelete(report);
  };

  const confirmDelete = async () => {
    if (!reportToDelete) return;
    
    const success = await deleteTestResult(reportToDelete);
    if (success) {
        const newReports = reports.filter(r => r.id !== reportToDelete.id);
        setReports(newReports);
        sessionStorage.setItem(CACHE_KEY, JSON.stringify(newReports));

        if (selectedReportId === reportToDelete.id || selectedReportId === reportToDelete.report_id) {
            setSelectedReportId(null);
        }
    } else {
        alert("Failed to delete report.");
    }
    setReportToDelete(null);
  };

  const handleRetake = () => {
      setSelectedReportId(null);
      onExit();
  };

  const selectedRecord = reports.find(a => a.id === selectedReportId || (a.report_id === selectedReportId));

  const filteredReports = reports.filter(report => 
    report.student_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    report.grade.toString().includes(searchQuery.toLowerCase())
  );

  const DeleteConfirmationModal = () => {
      if (!reportToDelete) return null;
      return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-sm w-full p-6 border border-slate-200 dark:border-slate-700 transform transition-all scale-100 animate-in zoom-in-95 duration-200">
                <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-16 h-16 bg-red-50 dark:bg-red-900/30 text-red-500 rounded-full flex items-center justify-center mb-2">
                        <Trash2 size={32} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white">Delete Report?</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mt-2 leading-relaxed">
                            Are you sure you want to delete the record for <span className="font-bold text-slate-800 dark:text-slate-200 block mt-1 text-lg">"{reportToDelete.student_name}"</span>
                        </p>
                        <p className="text-xs text-red-500 font-bold mt-2 uppercase tracking-wide">This action cannot be undone.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3 w-full mt-4">
                        <button 
                            onClick={() => setReportToDelete(null)}
                            className="px-4 py-3 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl font-bold hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                        >
                            Cancel
                        </button>
                        <button 
                            onClick={confirmDelete}
                            className="px-4 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl font-bold transition-colors shadow-lg shadow-red-200/50 dark:shadow-none flex items-center justify-center gap-2"
                        >
                            <Trash2 size={18} /> Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
      );
  };

  // RENDER REPORT VIEW
  if (selectedReportId && selectedRecord) {
      return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-sans">
             <DeleteConfirmationModal />
             <div className="fixed top-0 left-0 right-0 bg-white dark:bg-slate-900 text-slate-900 dark:text-white p-4 shadow-lg z-50 border-b border-slate-200 dark:border-slate-800">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <LayoutDashboard className="text-brand-400" />
                    <div>
                    <h1 className="text-xl font-bold leading-none">Admin Dashboard</h1>
                    <p className="text-xs text-slate-400 uppercase tracking-widest">Report View</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="p-4 md:p-8 pt-28">
                <TestReport 
                    record={selectedRecord}
                    onBack={() => setSelectedReportId(null)}
                    onDelete={() => handleDeleteRequest(selectedRecord)}
                    onRetake={handleRetake}
                />
            </div>
        </div>
      );
  }

  // RENDER LIST VIEW
  return (
    // 1. Layout: Screen Height, No Body Scroll
    <div className="h-screen w-full bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-sans animate-pop flex flex-col overflow-hidden">
      <DeleteConfirmationModal />
      
      {/* Custom Styles for Scrollbar */}
      <style>{`
        .hover-scrollbar::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        .hover-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .hover-scrollbar::-webkit-scrollbar-thumb {
          background: transparent;
          border-radius: 4px;
        }
        .hover-scrollbar:hover::-webkit-scrollbar-thumb {
          background: #cbd5e1; /* slate-300 */
        }
        .dark .hover-scrollbar:hover::-webkit-scrollbar-thumb {
          background: #475569; /* slate-600 */
        }
        /* Firefox */
        .hover-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: transparent transparent;
        }
        .hover-scrollbar:hover {
          scrollbar-color: #cbd5e1 transparent;
        }
        .dark .hover-scrollbar:hover {
          scrollbar-color: #475569 transparent;
        }
      `}</style>

      {/* 2. Fixed Header (Flex-none prevents shrinking) */}
      <div className="flex-none bg-white dark:bg-slate-900 text-slate-900 dark:text-white p-4 shadow-lg z-50 border-b border-slate-200 dark:border-slate-800 h-[76px] flex items-center">
        <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
          <div className="flex items-center gap-3">
            <LayoutDashboard className="text-brand-400" />
            <div>
              <h1 className="text-xl font-bold leading-none">Admin Dashboard</h1>
              <p className="text-xs text-slate-400 uppercase tracking-widest">Student Reports</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-yellow-400 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={onExit}
              className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg text-sm font-bold transition-colors border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200"
            >
              <LogOut size={16} /> Exit
            </button>
          </div>
        </div>
      </div>

      {/* 3. Scrollable Content Area (Flex-1 takes remaining height) */}
      <div className="flex-1 overflow-y-auto hover-scrollbar">
        <div className="max-w-7xl mx-auto p-6 md:p-8">
        
            {error && (
            <div className="mb-8 p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-xl flex items-center gap-4 text-orange-800 dark:text-orange-300">
                <AlertOctagon size={24} />
                <div>
                    <h3 className="font-bold">Sync Warning</h3>
                    <p className="text-sm">{error}</p>
                </div>
                <button onClick={() => fetchData(true)} className="ml-auto px-4 py-2 bg-orange-100 dark:bg-orange-900/50 hover:bg-orange-200 dark:hover:bg-orange-900 rounded-lg text-xs font-bold uppercase">Retry</button>
            </div>
            )}

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col">
                    <span className="text-slate-400 dark:text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Total Reports</span>
                    <span className="text-4xl font-black text-slate-800 dark:text-white">{reports.length}</span>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col">
                    <span className="text-slate-400 dark:text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Excellent Mastery</span>
                    <span className="text-4xl font-black text-green-600 dark:text-green-500">{reports.filter(r => r.mastery_level === 'Excellent').length}</span>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col">
                    <span className="text-slate-400 dark:text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Avg Score</span>
                    <span className="text-4xl font-black text-blue-500 dark:text-blue-400">
                    {reports.length > 0 ? Math.round(reports.reduce((acc, curr) => acc + (curr.final_score/curr.total_marks)*100, 0) / reports.length) : 0}%
                    </span>
                </div>
            </div>

            {/* 4. Table Card - REMOVED overflow-hidden to allow sticky child */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 relative">
            
                {/* 5. Sticky Search Bar - Added rounded-t-xl to maintain look */}
                <div className="sticky top-0 z-40 p-6 border-b border-slate-100 dark:border-slate-700 flex flex-col md:flex-row justify-between items-center gap-4 bg-white dark:bg-slate-800 shadow-sm rounded-t-xl">
                    <div className="flex items-center gap-4">
                        <h2 className="text-xl font-bold flex items-center gap-2 text-slate-800 dark:text-slate-100">
                            <History className="text-slate-400" /> Recent Submissions
                        </h2>
                        {loading && <span className="text-xs text-blue-500 font-bold animate-pulse">Syncing...</span>}
                    </div>
                    
                    <div className="flex items-center gap-3 w-full md:w-auto">
                        <div className="relative group flex-1 md:flex-none">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-500 transition-colors" size={18} />
                            <input 
                                type="text" 
                                placeholder="Search student..." 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10 pr-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-sm font-medium focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all w-full md:w-64 text-slate-800 dark:text-slate-200"
                            />
                        </div>

                        <button onClick={() => fetchData(true)} className="p-2 text-slate-500 dark:text-slate-400 hover:text-brand-500 transition-colors" title="Refresh Data">
                            <RefreshCw size={18} className={loading ? 'animate-spin' : ''} />
                        </button>
                        <div className="hidden md:flex text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${loading ? 'bg-amber-400' : 'bg-green-500'} animate-pulse`}></div>
                            Online
                        </div>
                    </div>
                </div>
                
                <div className="overflow-x-auto rounded-b-xl">
                    <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-100/80 dark:bg-slate-900/50 text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider font-bold">
                        <th className="p-4 border-b border-slate-200 dark:border-slate-700">Date</th>
                        <th className="p-4 border-b border-slate-200 dark:border-slate-700">Student</th>
                        <th className="p-4 border-b border-slate-200 dark:border-slate-700">Grade</th>
                        <th className="p-4 border-b border-slate-200 dark:border-slate-700">Mastery</th>
                        <th className="p-4 border-b border-slate-200 dark:border-slate-700">Score</th>
                        <th className="p-4 border-b border-slate-200 dark:border-slate-700 text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                        {filteredReports.map((report) => (
                        <tr 
                            key={report.id} 
                            onClick={() => setSelectedReportId(report.id || null)}
                            className="hover:bg-blue-50/50 dark:hover:bg-slate-700/50 transition-colors group cursor-pointer"
                        >
                            <td className="p-4 text-sm text-slate-500 dark:text-slate-400 font-bold">
                                {new Date(report.timestamp).toLocaleDateString()}
                                <div className="text-[10px] text-slate-400 flex items-center gap-1">
                                    {new Date(report.timestamp).toLocaleTimeString()}
                                    {report.report_id ? (
                                        <span title="Saved to Cloud" className="text-blue-400 ml-1"><Cloud size={10} /></span>
                                    ) : (
                                        <span title="Local Only" className="text-amber-500 ml-1"><Laptop size={10} /></span>
                                    )}
                                </div>
                            </td>
                            <td className="p-4 font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                                <div className="p-1 bg-slate-100 dark:bg-slate-700 rounded-full"><User size={14} /></div>
                                {report.student_name}
                            </td>
                            <td className="p-4 text-sm font-semibold text-slate-600 dark:text-slate-300">{report.grade}</td>
                            <td className="p-4">
                                <span className={`text-xs px-2 py-1 rounded-full font-bold border ${
                                    report.mastery_level === 'Excellent' ? 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800' :
                                    report.mastery_level === 'Good' ? 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800' :
                                    'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800'
                                }`}>
                                    {report.mastery_level}
                                </span>
                            </td>
                            <td className="p-4 font-mono font-bold text-slate-800 dark:text-slate-100">
                                {report.final_score}/{report.total_marks}
                            </td>
                            <td className="p-4 text-right">
                                <div className="flex items-center justify-end gap-2">
                                    <span className="text-brand-500 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold mr-2">View</span>
                                    <button 
                                        onClick={(e) => { e.stopPropagation(); handleDeleteRequest(report); }}
                                        className="px-3 py-2 bg-slate-50 border border-slate-300 text-slate-600 hover:bg-red-50 hover:border-red-200 hover:text-red-600 rounded-lg text-xs font-black uppercase transition-all shadow-sm z-10 dark:bg-slate-700 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-red-900/30 dark:hover:border-red-800 dark:hover:text-red-400"
                                        title="Delete Report"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                    <ChevronRight className="text-slate-300 group-hover:text-brand-500 transition-colors" size={20} />
                                </div>
                            </td>
                        </tr>
                        ))}
                        
                        {!loading && reports.length === 0 && (
                        <tr>
                            <td colSpan={6} className="p-12 text-center text-slate-400 dark:text-slate-500 flex flex-col items-center justify-center">
                            <Cloud size={48} className="mb-4 opacity-20" />
                            <span className="font-medium">No reports found.</span>
                            </td>
                        </tr>
                        )}
                        
                        {!loading && reports.length > 0 && filteredReports.length === 0 && (
                        <tr>
                            <td colSpan={6} className="p-12 text-center text-slate-400 dark:text-slate-500 flex flex-col items-center justify-center">
                            <Search size={48} className="mb-4 opacity-20" />
                            <span className="font-medium">No students matching "{searchQuery}"</span>
                            </td>
                        </tr>
                        )}

                        {loading && (
                            <tr>
                            <td colSpan={6} className="p-12 text-center text-slate-400 dark:text-slate-500 flex flex-col items-center justify-center">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-500 mb-2"></div>
                            <span className="font-medium text-xs">Loading data...</span>
                            </td>
                            </tr>
                        )}
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;