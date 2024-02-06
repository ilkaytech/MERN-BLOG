// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mera-blog-f6c03.firebaseapp.com",
  projectId: "mera-blog-f6c03",
  storageBucket: "mera-blog-f6c03.appspot.com",
  messagingSenderId: "111989654999",
  appId: "1:111989654999:web:1f5d23e422c53af702b792",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
