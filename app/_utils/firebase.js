// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCC8OktUICPe2CF3nfJ1Wdn8TITQoPn1tU",
  authDomain: "bruner-art.firebaseapp.com",
  projectId: "bruner-art",
  storageBucket: "bruner-art.firebasestorage.app",
  messagingSenderId: "66473809150",
  appId: "1:66473809150:web:ceb24d6e20829abbda81af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);