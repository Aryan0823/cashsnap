function showAddCustomerPopup() {
    document.getElementById('addCustomerPopup').style.display = 'flex';
}

function closeAddCustomerPopup() {
    document.getElementById('addCustomerPopup').style.display = 'none';
}

function addCustomer() {
    // Get values from input fields
    const customerName = document.getElementById('customerName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const amount = document.getElementById('amount').value;

    // Create a new customer card
    const cardContainer = document.getElementById('cardContainer');
    const newCard = document.createElement('div');
    newCard.classList.add('cardmain');
    newCard.innerHTML = `
        <div class="card">
            <h1>Customer - ${customerName}</h1>
            <h2>Mobile No - ${phoneNumber}</h2>
            <h2>Amount - ${amount}</h2>
        </div>
    `;
    
    // Add the new card to the container
    cardContainer.appendChild(newCard);

    // Close the popup
    closeAddCustomerPopup();
}
