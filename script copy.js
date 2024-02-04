const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

let grandTotal = 0;
  const grandTotalDisplay = document.getElementById("grandTotalDisplay");
  // const cashInButton = document.getElementById("cashIn");
  // const cashOutButton = document.getElementById("cashOut");
  

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      // Backspace functionality
    } else if (display.innerText != "" && item.id == "equal") {
      grandTotal = eval(display.innerText);
      display.innerText = grandTotal;
      updateGrandTotalDisplay(); // Update the grandTotal display
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Empty!";
      setTimeout(() => {
        display.innerText = "";
      }, 2000);
    } else if (item.id == "allclear") {
      display.innerText = "";
      grandTotal = 0;
      updateGrandTotalDisplay(); // Update the grandTotal display
    } else if(item.id =="cashIn"){
      InsertData(); 
      // display.innerText = "";
      // grandTotal = 0;
      // updateGrandTotalDisplay();
    }
    
    else {
      display.innerText += item.id;
    }
  };
});
    // //update grand total
    function updateGrandTotalDisplay() {
      grandTotalDisplay.innerText = `${grandTotal}`;
    }

            // //  Import the functions you need from the SDKs you need
            // import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
            // import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
            // // TODO: Add SDKs for Firebase products that you want to use
            // // https://firebase.google.com/docs/web/setup#available-libraries
    
            // // Your web app's Firebase configuration
            // // For Firebase JS SDK v7.20.0 and later, measurementId is optional
            // const firebaseConfig = {
            // apiKey: "AIzaSyBncdnP33SF5gVSACcn2DI7DMZ-eIF3hj4",
            // authDomain: "cashsnap-9a185.firebaseapp.com",
            // databaseURL: "https://cashsnap-9a185-default-rtdb.asia-southeast1.firebasedatabase.app",
            // projectId: "cashsnap-9a185",
            // storageBucket: "cashsnap-9a185.appspot.com",
            // messagingSenderId: "1046320871049",
            // appId: "1:1046320871049:web:600b3dee8af7b3c4763858",
            // measurementId: "G-5M366WH052"
            // };
    
            // // Initialize Firebase
            // const app = initializeApp(firebaseConfig);
            // const analytics = getAnalytics(app);
    
            // import { getDatabase, ref, set, serverTimestamp } 
            //     from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
    
            // const db = getDatabase();
            // // var grandTotal = document.querySelector("#grandTotalDisplay");
            // var cashInButton = document.querySelector("#cashIn");
            
            // var cin = document.querySelector("#Sell");
            // //  var cout = document.querySelector("CashOut");
            // function InsertData() {
            //     const timestamp = Date.now();  // Get current timestamp in milliseconds
            //     const date = new Date(timestamp);
            //     const formattedDate = `${date.getDate()}:${date.getMonth() + 1}:${date.getFullYear()}`;
    
            //     const formattedTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    
            //     set(ref(db, "transaction/" + formattedDate.value), {
            //         Date: formattedDate,
            //         Time: formattedTime,
            //         transactionType: cin.value,
            //         Amount: grandTotal,     
            //     })
            //     .then(() => {
            //         alert("Data added successfully");
            //     })
            //     .catch((error) => {
            //         alert(error);
            //     });
            // }
            // cashInButton.addEventListener('click', InsertData);
// cashInButton.addEventListener("click", () => {
//     transferToDatabase("cashIn");
//   });
  
//   // Event listener for Cash Out button
//   cashOutButton.addEventListener("click", () => {
//     transferToDatabase("cashOut");
//   });




// // Assuming you have initialized Firebase and have a reference to the database
// function transferToDatabase(transactionType) {
//     const timestamp = new Date().toISOString();
  
//     // Data to be stored in the database
//     const transactionData = {
//       timestamp,
//       transactionType,
//       grandTotal
//     };
  
//     // Reference to the database node
//     const transactionsRef = database.ref("transactions");
  
//     // Push the data to the database
//     transactionsRef.push(transactionData, (error) => {
//       if (error) {
//         console.error("Data transfer failed:", error);
//         alert("Data transfer failed. Please try again.");
//       } else {
//         console.log("Data transferred successfully");
//         alert("Data transferred successfully!");
//       }
//     });
//   }

 
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
  grandTotal = 0;
  updateGrandTotalDisplay(); // Update the grandTotal display on theme toggle
};

