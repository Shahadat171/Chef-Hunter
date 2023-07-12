
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log('environment variable', import.meta.env.VITE_apiKey)
const firebaseConfig = {
  apiKey: "AIzaSyA4HZYUAw0bX7baV4CnQiArwJ9z0CcQ1vY",
  authDomain: "assignment-10-b716a.firebaseapp.com",
  projectId: "assignment-10-b716a",
  storageBucket: "assignment-10-b716a.appspot.com",
  messagingSenderId: "598223555357",
  appId: "1:598223555357:web:47fee7c11aeb3b9f2d6ff4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;