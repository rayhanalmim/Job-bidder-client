// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmQqCjlV5adwYpCIZw4xKdIwz_Xyqf_ag",
  authDomain: "job-bideer-hub.firebaseapp.com",
  projectId: "job-bideer-hub",
  storageBucket: "job-bideer-hub.appspot.com",
  messagingSenderId: "821446784709",
  appId: "1:821446784709:web:5420fb0eab00892058a2ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;