// For customers.html

document.addEventListener("DOMContentLoaded", function () {
    const addCustomerBtn = document.getElementById("add-customer");
    const removeCustomerBtn = document.getElementById("remove-customer");
    const updateCustomerBtn = document.getElementById("update-customer");
    const customerTransactionsBtn = document.getElementById("customer-transactions");
    const customerTableBody = document.querySelector(".customer-list tbody");

    // Function to add a new customer
    addCustomerBtn.addEventListener("click", function () {
        // Here you can implement logic to add a new customer
        const newCustomerRow = "<tr><td>1</td><td>John Doe</td><td>john@example.com</td><td>Edit / Delete</td></tr>";
        customerTableBody.innerHTML += newCustomerRow;
    });

    // Function to remove a customer
    removeCustomerBtn.addEventListener("click", function () {
        // Here you can implement logic to remove a customer
        const customerRows = customerTableBody.querySelectorAll("tr");
        if (customerRows.length > 0) {
            customerTableBody.removeChild(customerRows[customerRows.length - 1]);
        } else {
            alert("No customers to remove!");
        }
    });

    // Function to update a customer
    updateCustomerBtn.addEventListener("click", function () {
        // Here you can implement logic to update a customer
        alert("Update functionality not implemented yet!");
    });

    // Function to handle customer transactions
    customerTransactionsBtn.addEventListener("click", function () {
        // Here you can implement logic to handle customer transactions
        alert("Transaction functionality not implemented yet!");
    });
});

// For suppliers.html

document.addEventListener("DOMContentLoaded", function () {
    const addSupplierBtn = document.getElementById("add-supplier");
    const removeSupplierBtn = document.getElementById("remove-supplier");
    const updateSupplierBtn = document.getElementById("update-supplier");
    const supplierTransactionsBtn = document.getElementById("supplier-transactions");
    const supplierTableBody = document.querySelector(".supplier-list tbody");

    // Function to add a new supplier
    addSupplierBtn.addEventListener("click", function () {
        // Here you can implement logic to add a new supplier
        const newSupplierRow = "<tr><td>1</td><td>Supplier ABC</td><td>supplier@example.com</td><td>Edit / Delete</td></tr>";
        supplierTableBody.innerHTML += newSupplierRow;
    });

    // Function to remove a supplier
    removeSupplierBtn.addEventListener("click", function () {
        // Here you can implement logic to remove a supplier
        const supplierRows = supplierTableBody.querySelectorAll("tr");
        if (supplierRows.length > 0) {
            supplierTableBody.removeChild(supplierRows[supplierRows.length - 1]);
        } else {
            alert("No suppliers to remove!");
        }
    });

    // Function to update a supplier
    updateSupplierBtn.addEventListener("click", function () {
        // Here you can implement logic to update a supplier
        alert("Update functionality not implemented yet!");
    });

    // Function to handle supplier transactions
    supplierTransactionsBtn.addEventListener("click", function () {
        // Here you can implement logic to handle supplier transactions
        alert("Transaction functionality not implemented yet!");
    });
});
