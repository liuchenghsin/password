// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNkmLQbmaUMgN3ASAg7gi-U-zn9AMDvAM",
  authDomain: "passworddefender-73aab.firebaseapp.com",
  databaseURL: "https://passworddefender-73aab-default-rtdb.firebaseio.com",
  projectId: "passworddefender-73aab",
  storageBucket: "passworddefender-73aab.firebasestorage.app",
  messagingSenderId: "270944179994",
  appId: "1:270944179994:web:0c36cf807ace1b6fe7bea3",
  measurementId: "G-QGPW9LVD4V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
