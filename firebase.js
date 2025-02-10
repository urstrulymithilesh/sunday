import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9Wv8fh748EdTyvQQK4BmHufOIPJBzQpc",
  authDomain: "sunday-c54d3.firebaseapp.com",
  projectId: "sunday-c54d3",
  storageBucket: "sunday-c54d3.firebasestorage.app",
  messagingSenderId: "261043806991",
  appId: "1:261043806991:web:637a915699df389a14947a",
  measurementId: "G-W6T5VEE8LM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
