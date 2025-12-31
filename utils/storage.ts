import { StudentReport } from '../types';

const STORAGE_KEY = 'level_up_test_history_v3';

export const getHistory = (): StudentReport[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    return JSON.parse(stored);
  } catch (e) {
    console.error("Failed to load history", e);
    return [];
  }
};

export const saveHistory = (record: StudentReport) => {
  try {
    const history = getHistory();
    // Avoid duplicates if saving same ID again
    const exists = history.some(r => r.id === record.id);
    if (!exists) {
        const updated = [record, ...history];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    }
  } catch (e) {
    console.error("Failed to save history", e);
  }
};

export const deleteLocalHistory = (id: number) => {
    try {
        const history = getHistory();
        const updated = history.filter(r => r.id !== id);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        return true;
    } catch (e) {
        console.error("Failed to delete local history", e);
        return false;
    }
};
