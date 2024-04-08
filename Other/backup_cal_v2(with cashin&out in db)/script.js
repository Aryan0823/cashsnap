// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

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


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getDatabase();

export function insertData(cin, grandTotal) {
  const timestamp = Date.now();
  const date = new Date(timestamp);
  const formattedDate = `${date.getDate()}:${date.getMonth() + 1}:${date.getFullYear()}`;
  const formattedTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  set(ref(db, "Transaction/" + formattedDate), {
    Date: formattedDate,
    Time: formattedTime,
    transactionType: cin,
    Amount: grandTotal,
  })
    .then(() => {
      alert("Data added successfully");
    })
    .catch((error) => {
      alert(error);
    });
}
