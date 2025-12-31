import { db } from '../firebase';
import { collection, addDoc, getDocs, deleteDoc, doc, query, orderBy } from 'firebase/firestore';
import { StudentReport } from '../types';
import { getHistory, saveHistory, deleteLocalHistory } from './storage';

const REPORTS_COLLECTION = 'student_reports'; 

// Save a student's test report
export const saveTestResult = async (report: StudentReport) => {
  // 1. Always save locally first (Safety net)
  saveHistory(report);

  if (!db) {
      console.warn("Database not initialized, saved locally.");
      return { success: true, offline: true };
  }
  try {
    const { id, ...reportData } = report;
    
    // Save to Cloud with the local ID included for deduplication
    const docRef = await addDoc(collection(db, REPORTS_COLLECTION), {
        ...reportData,
        id: id, 
        timestamp: reportData.timestamp || new Date().toISOString()
    });
    console.log("Report saved to cloud with ID: ", docRef.id);
    return { success: true, id: docRef.id };
  } catch (e) {
    console.error("Cloud save failed, but saved locally.", e);
    // Return success because we have a local copy
    return { success: true, offline: true, error: e };
  }
};

// Fetch test history (Merges Cloud + Local)
export const getTestHistory = async (): Promise<{ data: StudentReport[], error?: string }> => {
  const localReports = getHistory();
  let cloudReports: StudentReport[] = [];
  let dbError = null;

  if (db) {
    try {
        let q = query(collection(db, REPORTS_COLLECTION), orderBy('timestamp', 'desc'));
        try {
            const querySnapshot = await getDocs(q);
            cloudReports = mapDocs(querySnapshot);
        } catch (err: any) {
            // Handle missing index by fetching all and sorting client-side
             if (err.code === 'failed-precondition' || err.message?.includes('index')) {
                const q2 = collection(db, REPORTS_COLLECTION);
                const querySnapshot = await getDocs(q2);
                cloudReports = mapDocs(querySnapshot);
            } else {
                throw err;
            }
        }
    } catch (e: any) {
        console.error("Error getting reports from cloud: ", e);
        dbError = e.message;
    }
  }

  // Merge: Prefer Cloud (has report_id) over Local for same 'id'
  const mergedMap = new Map<number, StudentReport>();
  
  // 1. Add Local Reports
  localReports.forEach(r => {
      if (r.id) mergedMap.set(r.id, r);
  });

  // 2. Overwrite/Add Cloud Reports
  cloudReports.forEach(r => {
      if (r.id) {
          mergedMap.set(r.id, r);
      } else {
          // Fallback for legacy cloud records without ID: use timestamp
          const legacyId = r.timestamp ? Date.parse(r.timestamp) : Math.random();
          mergedMap.set(legacyId, { ...r, id: legacyId });
      }
  });

  const mergedList = Array.from(mergedMap.values()).sort((a, b) => 
      new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  return { data: mergedList, error: dbError };
};

function mapDocs(querySnapshot: any): StudentReport[] {
    return querySnapshot.docs.map((doc: any) => {
        const data = doc.data();
        return {
            ...data,
            report_id: doc.id,
            // Ensure internal ID exists for dedup
            id: data.id || (data.timestamp ? Date.parse(data.timestamp) : Date.now())
        } as StudentReport;
    });
}

// Delete a test report (Deletes from both sources)
export const deleteTestResult = async (report: StudentReport) => {
    let success = false;
    
    // 1. Delete Local
    if (report.id) {
        if (deleteLocalHistory(report.id)) success = true;
    }

    // 2. Delete Cloud
    if (db && report.report_id) {
        try {
            await deleteDoc(doc(db, REPORTS_COLLECTION, report.report_id));
            success = true;
        } catch (e) {
            console.error("Error deleting cloud report: ", e);
        }
    }
    
    return success;
}
