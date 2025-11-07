import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBWTWgBgUK6W63rm2FQHeIyKBuQtk-0jE",
  authDomain: "hytteleie-d9ee4.firebaseapp.com",
  projectId: "hytteleie-d9ee4",
  storageBucket: "hytteleie-d9ee4.firebasestorage.app",
  messagingSenderId: "317187915570",
  appId: "1:317187915570:web:6ab3e00687dd257ca7612b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);