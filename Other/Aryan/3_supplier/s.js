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
