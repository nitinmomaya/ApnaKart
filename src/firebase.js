// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//Import getAuth from firebase
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDR0pa5Az2YeRSabcGYhW7ntQ7J2sxKJUI",
  authDomain: "apnamart-2c363.firebaseapp.com",
  projectId: "apnamart-2c363",
  storageBucket: "apnamart-2c363.appspot.com",
  messagingSenderId: "124862930193",
  appId: "1:124862930193:web:3c74f9cdfe57e319cb80b0",
  measurementId: "G-3XCDTWNRK3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
