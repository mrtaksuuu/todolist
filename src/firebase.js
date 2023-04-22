// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCFIOGLL_Ok-uY_68tr8_6lQFOBC3nQLU",
  authDomain: "todo-app-58-ef3f4.firebaseapp.com",
  projectId: "todo-app-58-ef3f4",
  storageBucket: "todo-app-58-ef3f4.appspot.com",
  messagingSenderId: "268417005156",
  appId: "1:268417005156:web:2be7f180fd3ff5149d1171"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)