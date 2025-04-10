// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADGSbe8A847qV5I1fSEYkXYeTmHbtauwQ",
  authDomain: "netflixgpt-87c9f.firebaseapp.com",
  projectId: "netflixgpt-87c9f",
  storageBucket: "netflixgpt-87c9f.firebasestorage.app",
  messagingSenderId: "442860218676",
  appId: "1:442860218676:web:1e47bbc8bdd924ff681d61",
  measurementId: "G-NZY9BP4X0Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
