// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHGyofcPxRjhnuq3b72fY1sIp5dQUBiVc",
  authDomain: "react-native-login-84eea.firebaseapp.com",
  projectId: "react-native-login-84eea",
  storageBucket: "react-native-login-84eea.firebasestorage.app",
  messagingSenderId: "226140944788",
  appId: "1:226140944788:web:ce9fee78e379959f013781",
  measurementId: "G-BGVCR10FJ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);