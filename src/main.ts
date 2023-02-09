//    Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoRNW7R17Jh8hRh4f77jsGVnwFdqe3HGA",
  authDomain: "svelte-3c459.firebaseapp.com",
  projectId: "svelte-3c459",
  storageBucket: "svelte-3c459.appspot.com",
  messagingSenderId: "712931807319",
  appId: "1:712931807319:web:932332e4bd9d474cd5d312",
  measurementId: "G-TJQPH2B6E8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
