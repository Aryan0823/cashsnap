// // Initialize Firebase with your configuration
// const firebaseConfig = {
//     apiKey: "YOUR_API_KEY",
//     authDomain: "YOUR_AUTH_DOMAIN",
//     projectId: "YOUR_PROJECT_ID",
//     storageBucket: "YOUR_STORAGE_BUCKET",
//     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//     appId: "YOUR_APP_ID"
//   };
  
//   firebase.initializeApp(firebaseConfig);
//   const database = firebase.database();
  
  // Global variables
  let grandTotal = 0;
  const grandTotalDisplay = document.getElementById("grandTotalDisplay");
  const cashInButton = document.getElementById("cashIn");
  const cashOutButton = document.getElementById("cashOut");
  
  // Event listener for Cash In button
  cashInButton.addEventListener("click", () => {
    transferToDatabase("cashIn");
  });
  
  // Event listener for Cash Out button
  cashOutButton.addEventListener("click", () => {
    transferToDatabase("cashOut");
  });
  
  // Function to transfer data to the database
  function transferToDatabase(transactionType) {
    const timestamp = new Date().toISOString();
  
    // Data to be stored in the database
    const transactionData = {
      timestamp,
      transactionType,
      grandTotal
    };
  
    // Reference to the database node
    const transactionsRef = database.ref("transactions");
  
    // Push the data to the database
    transactionsRef.push(transactionData, (error) => {
      if (error) {
        console.error("Data transfer failed:", error);
        alert("Data transfer failed. Please try again.");
      } else {
        console.log("Data transferred successfully");
        alert("Data transferred successfully!");
      }
    });
  }
  