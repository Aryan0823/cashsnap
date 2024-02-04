function cashOut(grandTotal) {
    const timestamp = new Date().toISOString();
    const transactionData = {
      timestamp,
      transactionType: "cashOut",
      grandTotal
    };
  
    const transactionsRef = firebase.database().ref("transactions");
  
    transactionsRef.push(transactionData, (error) => {
      if (error) {
        console.error("Cash Out data transfer failed:", error);
        alert("Cash Out data transfer failed. Please try again.");
      } else {
        console.log("Cash Out data transferred successfully");
        alert("Cash Out data transferred successfully!");
      }
    });
  }
  