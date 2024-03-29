
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBncdnP33SF5gVSACcn2DI7DMZ-eIF3hj4",
    authDomain: "cashsnap-9a185.firebaseapp.com",
    databaseURL: "https://cashsnap-9a185-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "cashsnap-9a185",
    storageBucket: "cashsnap-9a185.appspot.com",
    messagingSenderId: "1046320871049",
    appId: "1:1046320871049:web:600b3dee8af7b3c4763858",
    measurementId: "G-5M366WH052"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
