// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-0606.firebaseapp.com",
  projectId: "mern-blog-0606",
  storageBucket: "mern-blog-0606.appspot.com",
  messagingSenderId: "536659933490",
  appId: "1:536659933490:web:809eeda49713392fe27f2b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
