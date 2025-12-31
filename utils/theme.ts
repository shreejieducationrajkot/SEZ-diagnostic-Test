

export const BASE_THEME = {
    showTimer: false,
    autoSubmit: false,
    timerDuration: 0,
    container: "p-8 bg-white dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-700/50 rounded-2xl shadow-sm transition-colors duration-300",
    title: "text-xl md:text-2xl font-semibold text-slate-900 dark:text-white leading-snug",
    subTitle: "text-slate-500 dark:text-slate-400 font-medium text-xs uppercase tracking-widest",
    mcqBtn: "rounded-lg border-2 transition-all duration-200 py-4 min-h-[100px] shadow-sm relative overflow-hidden",
    mcqDefault: "bg-white dark:bg-slate-800/40 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-700/60 hover:border-slate-400 dark:hover:border-slate-600 hover:shadow-md",
    mcqSelected: "bg-slate-900 dark:bg-emerald-600 border-slate-900 dark:border-emerald-500 text-white shadow-md ring-2 ring-offset-2 ring-slate-800",
    mcqText: "text-xl font-medium",
    mcqVisualText: "text-lg",
    mcqVisualSize: "w-16 h-16",
    mcqIcon: "text-3xl",
    actionBtn: "bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg py-3 px-8 shadow-sm font-medium text-lg",
    actionText: "Submit",
    input: "w-full text-xl p-3 rounded-lg border-2 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800/50 text-slate-900 dark:text-white",
    inputPlaceholder: "Your answer...",
    dragItem: "rounded-lg border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white shadow-sm",
    categorizeItemStyle: "px-4 py-2 rounded-lg border-2 border-slate-300 bg-white text-slate-800 dark:text-slate-100 hover:border-emerald-500 transition-all",
    categorizeBucketStyle: "p-4 min-h-[120px] rounded-xl border-2 border-dashed border-emerald-200 bg-emerald-50/30",
    checkSize: 20,
    checkStroke: 3,
};

const GRADE_3_4_OVERRIDE = {
    ...BASE_THEME,
    container: "p-6 md:p-8 bg-white/95 dark:bg-slate-900/80 backdrop-blur-md border-4 border-blue-200 dark:border-blue-700/50 rounded-[2.5rem] shadow-[0_10px_0_rgba(59,130,246,0.2)] dark:shadow-none transition-all duration-300",
    title: "text-2xl md:text-4xl font-extrabold text-blue-900 dark:text-blue-100 tracking-tight",
    subTitle: "text-blue-500 dark:text-blue-400 font-bold text-sm uppercase tracking-wider",
    mcqBtn: "rounded-2xl border-4 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl py-4 min-h-[120px] shadow-lg relative overflow-hidden",
    mcqDefault: "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 hover:border-blue-300",
    mcqSelected: "bg-blue-500 border-blue-600 text-white shadow-xl ring-4 ring-offset-2 ring-offset-white dark:ring-offset-slate-900 ring-blue-500",
    mcqText: "text-xl font-extrabold",
    actionBtn: "bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-4 px-10 text-xl font-extrabold shadow-lg transform active:scale-95 transition-all",
    actionText: "Check!",
};

const GRADE_5_OVERRIDE = {
    ...BASE_THEME,
    container: "p-6 md:p-8 bg-white/95 border-4 border-emerald-200 rounded-[2rem] shadow-[0_8px_0_rgba(16,185,129,0.2)]",
    title: "text-2xl md:text-4xl font-black text-emerald-900 tracking-tight",
    mcqBtn: "rounded-3xl border-2 transition-all duration-300",
    mcqSelected: "bg-emerald-500 border-emerald-600 text-white shadow-lg",
    actionBtn: "bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl py-4 px-12 text-2xl font-black",
    actionText: "Check Answer",
};

export const getQuestionTheme = (grade: number) => {
    if (grade >= 3 && grade <= 4) return GRADE_3_4_OVERRIDE;
    if (grade === 5) return GRADE_5_OVERRIDE;
    return BASE_THEME;
};

export const getBackgroundTheme = (grade: number | null, showFeedback: boolean) => "bg-slate-50 dark:bg-slate-950";
export const getProgressColor = (grade: number | null) => {
    if (grade && grade <= 4) return "bg-blue-500";
    if (grade === 5) return "bg-emerald-500";
    return "bg-brand-500";
};
