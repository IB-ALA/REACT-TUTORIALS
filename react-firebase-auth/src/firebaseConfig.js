import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBYc-OTX-4WlkDLmUKU0eivz6flyaINKDc",
  authDomain: "react-firebase-auth-b5627.firebaseapp.com",
  projectId: "react-firebase-auth-b5627",
  storageBucket: "react-firebase-auth-b5627.appspot.com",
  messagingSenderId: "738956749190",
  appId: "1:738956749190:web:a11f262eff6c9947c12407",
  measurementId: "G-60W3SME5EP",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
