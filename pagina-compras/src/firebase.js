// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCJ-eY-6dz7VRYTJQJL4sF4TfCGp_cVl5Q",
  authDomain: "walmart-web-27610.firebaseapp.com",
  projectId: "walmart-web-27610",
  storageBucket: "walmart-web-27610.appspot.com",
  messagingSenderId: "807090400387",
  appId: "1:807090400387:web:e04c265d664d89d2d77fb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth();