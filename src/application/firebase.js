// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: meta.env.VITE_PROJECT_ID + ".firebaseapp.com",
  projectId: meta.env.VITE_PROJECT_ID,
  storageBucket: meta.env.VITE_PROJECT_ID + ".appspot.com",
  messagingSenderId: meta.env.VITE_PROJECT_SENDER_ID,
  appId: meta.env.VITE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export default app;