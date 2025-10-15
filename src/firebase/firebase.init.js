// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgSL6gnny6DAglTwPiw2bpwk8zeVc0ybs",
  authDomain: "react-firebase-auth-int-9ae73.firebaseapp.com",
  projectId: "react-firebase-auth-int-9ae73",
  storageBucket: "react-firebase-auth-int-9ae73.firebasestorage.app",
  messagingSenderId: "628527103043",
  appId: "1:628527103043:web:5c198f75ef87b37a6a28f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);