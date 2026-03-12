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

firebase.initializeApp(firebaseConfig);
const db = firebase.database();