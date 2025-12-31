import { initializeApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";

// Configuration provided for 'diagonstic-test'
const firebaseConfig = {
  apiKey: "AIzaSyCeH8ldZA6HjibC7UEylVc__GufO1ku0ik",
  authDomain: "diagonstic-test.firebaseapp.com",
  projectId: "diagonstic-test",
  storageBucket: "diagonstic-test.firebasestorage.app",
  messagingSenderId: "703123392788",
  appId: "1:703123392788:web:1d20ae10ff1602f296da01",
  measurementId: "G-XNRZM2DPK0"
};

let app;
let db: Firestore | null = null;

try {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  console.log("Firebase initialized successfully with project: diagonstic-test");
} catch (error) {
  console.error("Error initializing Firebase:", error);
}

export { db };