// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx9VtryFZqGGCJoZrxZqzlTQMBQYtM5X4",
  authDomain: "portafolio-bela.firebaseapp.com",
  projectId: "portafolio-bela",
  storageBucket: "portafolio-bela.appspot.com",
  messagingSenderId: "721928377386",
  appId: "1:721928377386:web:1fb067e80262b9a7d11f53",
  measurementId: "G-BQFDZ92G8L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);