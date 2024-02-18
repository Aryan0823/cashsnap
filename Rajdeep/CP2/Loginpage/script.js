// script.js

const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function () {
    // toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    
    // toggle the icon
    if (type === "password") {
        this.classList.remove("bi-eye");
        this.classList.add("bi-eye-slash");
    } else {
        this.classList.remove("bi-eye-slash");
        this.classList.add("bi-eye");
    }
});

// prevent form submit
const form = document.querySelector("form");
form.addEventListener('submit', function (e) {
    e.preventDefault();
});
