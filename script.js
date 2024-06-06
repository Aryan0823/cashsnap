
            // Firebase initialization
            import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
            import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
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
        
            let currentUser = null;
        
            onAuthStateChanged(auth, async (user) => {
                if (user) {
                    currentUser = user;
                    await loadTotalCustomers();
                    await loadTotalSuppliers();
                    await loadTotalEmployees();
                    await loadTotalProducts();
                    await loadTotalReturns();
                    await loadDataAndRenderCharts();
                } else {
                    alert("Please sign in to view the dashboard.");
                }
            });
        
            async function loadTotalCustomers() {
                if (!currentUser) {
                    alert("Please sign in to view the dashboard.");
                    return;
                }
        
                try {
                    const userDocRef = collection(db, "Data", currentUser.uid, "customers");
                    const customersSnapshot = await getDocs(userDocRef);
                    const totalCustomers = customersSnapshot.size;
        
                    // Update the total customers count in the dashboard
                    const totalCustomersElement = document.getElementById("totalCustomersCount");
                    totalCustomersElement.textContent = totalCustomers;
                } catch (error) {
                    console.error("Error loading total customers:", error);
                    alert("Failed to load total customers. Please try again.");
                }
            }
            async function loadTotalSuppliers() {
                if (!currentUser) {
                    alert("Please sign in to view the dashboard.");
                    return
                }
        
                try {
                    const userDocRef = collection(db, "Data", currentUser.uid, "suppliers");
                    const suppliersSnapshot = await getDocs(userDocRef);
                    const totalSuppliers = suppliersSnapshot.size;
        
                    // Update the total customers count in the dashboard
                    const totalSuppliersElement = document.getElementById("totalSuppliersCount");
                    totalSuppliersElement.textContent = totalSuppliers;
                } catch (error) {
                    console.error("Error loading total suppliers:", error);
                    alert("Failed to load total suppliers. Please try again.");
                }
            }
            async function loadTotalEmployees() {
                if (!currentUser) {
                    alert("Please sign in to view the dashboard.");
                    return
                }
        
                try {
                    const userDocRef = collection(db, "Data", currentUser.uid, "employee");
                    const employeeSnapshot = await getDocs(userDocRef);
                    const totalEmployees = employeeSnapshot.size;
        
                    // Update the total customers count in the dashboard
                    const totalEmployeesElement = document.getElementById("totalEmployeesCount");
                    totalEmployeesElement.textContent = totalEmployees;
                } catch (error) {
                    console.error("Error loading total employee:", error);
                    alert("Failed to load total employee. Please try again.");
                }
            }
            async function loadTotalProducts() {
                if (!currentUser) {
                    alert("Please sign in to view the dashboard.");
                    return
                }
        
                try {
                    const userDocRef = collection(db, "Data", currentUser.uid, "products");
                    const productsSnapshot = await getDocs(userDocRef);
                    const totalProducts =  productsSnapshot.size;
        
                    // Update the total customers count in the dashboard
                    const totalProductsElement = document.getElementById("totalProductsCount");
                    totalProductsElement.textContent = totalProducts;
                } catch (error) {
                    console.error("Error loading total Products:", error);
                    alert("Failed to load total Products. Please try again.");
                }
            }
            async function loadTotalReturns() {
                if (!currentUser) {
                    alert("Please sign in to view the dashboard.");
                    return
                }
        
                try {
                    const userDocRef = collection(db, "Data", currentUser.uid, "return");
                    const returnSnapshot = await getDocs(userDocRef);
                    const totalReturns = returnSnapshot.size;
        
                    // Update the total customers count in the dashboard
                    const totalReturnsElement = document.getElementById("totalReturnsCount");
                    totalReturnsElement.textContent = totalReturns;
                } catch (error) {
                    console.error("Error loading total Returns:", error);
                    alert("Failed to load total Returns. Please try again.");
                }
            }
           
            async function loadDataAndRenderCharts() {
                if (!currentUser) {
                    alert("Please sign in to view the dashboard.");
                    return;
                }

                try {
                    const totalCustomers = await getCount("customers");
                    const totalSuppliers = await getCount("suppliers");
                    const totalEmployees = await getCount("employee");
                    const totalProducts = await getCount("products");
                    const totalReturns = await getCount("return");

                    renderBarChart('customersSuppliersEmployeesChart', ['Customers', 'Suppliers', 'Employees'], [totalCustomers, totalSuppliers, totalEmployees]);
                    renderBarChart('productsReturnsChart', ['Products', 'Returns'], [totalProducts, totalReturns]);
                } catch (error) {
                    console.error("Error loading data:", error);
                    alert("Failed to load data. Please try again.");
                }
            }

            async function getCount(collectionName) {
                const userDocRef = collection(db, "Data", currentUser.uid, collectionName);
                const snapshot = await getDocs(userDocRef);
                return snapshot.size;
            }

            function renderBarChart(canvasId, labels, data) {
                const ctx = document.getElementById(canvasId).getContext('2d');
                new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: labels,
                        datasets: [{
                            label: '',
                            data: data,
                            backgroundColor: [
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 99, 132, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        responsive: true,
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });
            }
