// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6pgHuFJKjkyr2wcS0yPSY9OknCrP0hRs",
  authDomain: "passion-project-app.firebaseapp.com",
  projectId: "passion-project-app",
  storageBucket: "passion-project-app.appspot.com",
  messagingSenderId: "913710744033",
  appId: "1:913710744033:web:be20361a60df52d523d2a0",
  measurementId: "G-KT2L83TMZL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);