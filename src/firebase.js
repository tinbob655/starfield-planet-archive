// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "starfield-planet-archive.firebaseapp.com",
  projectId: "starfield-planet-archive",
  storageBucket: "starfield-planet-archive.firebasestorage.app",
  messagingSenderId: "104265975175",
  appId: "1:104265975175:web:2d3d6274e0931340a47f22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);