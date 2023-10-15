// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAN3sskM9aOpLJMzUK84sTj5y4236mwRcQ",
  authDomain: "react-disney-plus-app-5f384.firebaseapp.com",
  projectId: "react-disney-plus-app-5f384",
  storageBucket: "react-disney-plus-app-5f384.appspot.com",
  messagingSenderId: "378983339179",
  appId: "1:378983339179:web:6e9b4bd1c27db38b5753ee",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
