import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGFij1pFUVNFP63QHxEq619c9jPnskzxY",
  authDomain: "bulbai-21f09.firebaseapp.com",
  projectId: "bulbai-21f09",
  storageBucket: "bulbai-21f09.firebasestorage.app",
  messagingSenderId: "366775652166",
  appId: "1:366775652166:web:22db16f4f87f9a60625f47",
  measurementId: "G-G09FQQ53XP"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
import { GoogleAuthProvider } from "firebase/auth";
export const googleProvider = new GoogleAuthProvider();
