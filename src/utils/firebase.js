// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKrFcpmqVEEnRr0m71NZGu1HFstImqpdA",
  authDomain: "netflix-gpt-89b67.firebaseapp.com",
  projectId: "netflix-gpt-89b67",
  storageBucket: "netflix-gpt-89b67.firebasestorage.app",
  messagingSenderId: "1096280086998",
  appId: "1:1096280086998:web:853c7db38c54eb464c2c77",
  measurementId: "G-R4D93F1CL5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
