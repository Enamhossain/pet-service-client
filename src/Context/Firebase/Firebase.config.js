// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAh0EFkDyROqK147pIF_9qlGPa6EVoBliY",
  authDomain: "pets-service-care.firebaseapp.com",
  projectId: "pets-service-care",
  storageBucket: "pets-service-care.appspot.com",
  messagingSenderId: "929692120078",
  appId: "1:929692120078:web:c7f0b8e72a5c837687385f",
  measurementId: "G-ELPR8DJPZQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

