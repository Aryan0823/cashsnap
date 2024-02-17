// script.js

function togglePasswordVisibility(event) {
    event.preventDefault(); // Prevent the default link behavior

    var passwordField = document.querySelector('input[type="password"]');
    var eyeIcon = document.getElementById('eye');

    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
    } else {
        passwordField.type = "password";
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
    }
}
