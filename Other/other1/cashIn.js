function cashIn(grandTotal) {
    const timestamp = new Date().toISOString();
    const transactionData = {
      timestamp,
      transactionType: "cashIn",
      grandTotal
    };
  
    const transactionsRef = firebase.database().ref("transactions");
  
    transactionsRef.push(transactionData, (error) => {
      if (error) {
        console.error("Cash In data transfer failed:", error);
        alert("Cash In data transfer failed. Please try again.");
      } else {
        console.log("Cash In data transferred successfully");
        alert("Cash In data transferred successfully!");
      }
    });
  }
  