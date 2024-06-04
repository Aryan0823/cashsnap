        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
        import { getFirestore, collection, getDocs, doc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
        import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

        const firebaseConfig = {
                apiKey: "AIzaSyBncdnP33SF5gVSACcn2DI7DMZ-eIF3hj4",
                authDomain: "cashsnap-9a185.firebaseapp.com",
                projectId: "cashsnap-9a185",
                storageBucket: "cashsnap-9a185.appspot.com",
                messagingSenderId: "1046320871049",
                appId: "1:1046320871049:web:600b3dee8af7b3c4763858",
                measurementId: "G-5M366WH052"
            };

        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);
        const auth = getAuth(app);