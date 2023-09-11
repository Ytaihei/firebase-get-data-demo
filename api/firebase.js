// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPHVX3hw_JMlEEbsSusXJz1b3K5pUAH_w",
  authDomain: "fir-get-data-demo-a8acc.firebaseapp.com",
  projectId: "fir-get-data-demo-a8acc",
  storageBucket: "fir-get-data-demo-a8acc.appspot.com",
  messagingSenderId: "483155627720",
  appId: "1:483155627720:web:499956b172668420089ffd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };