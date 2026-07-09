import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBaOLLuuIo86ngQ3i3C28AoOiZFdwLGaZU",
  authDomain: "mayur-enterprises-fcdc5.firebaseapp.com",
  projectId: "mayur-enterprises-fcdc5",
  storageBucket: "mayur-enterprises-fcdc5.firebasestorage.app",
  messagingSenderId: "203484839368",
  appId: "1:203484839368:web:d7a8f5553dc28a37a354fd",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);