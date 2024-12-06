// JavaScript file for password visibility toggle
document.addEventListener("DOMContentLoaded", () => {
    const togglePassword = document.getElementById("toggle-password");
    const passwordField = document.getElementById("password");

    togglePassword.addEventListener("click", () => {
        if (passwordField.type === "password") {
            passwordField.type = "text";
            togglePassword.textContent = "🙈"; // Switch to 'hide' icon
        } else {
            passwordField.type = "password";
            togglePassword.textContent = "👁️"; // Switch to 'show' icon
        }
    });
});
