import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// import {firebase} from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBVwd1rqcIiJxjFhSb5E674MbXShewE7uM",
  authDomain: "esc-data.firebaseapp.com",
  projectId: "esc-data",
  storageBucket: "esc-data.appspot.com",
  messagingSenderId: "323140928214",
  appId: "1:323140928214:web:06b52f015363bbb58cff77"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);