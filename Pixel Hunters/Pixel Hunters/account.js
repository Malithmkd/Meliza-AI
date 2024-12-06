// Logout function
function logout() {
    alert("You have been logged out.");
    // Implement your logout logic here
}

// Delete account function
function deleteAccount() {
    const confirmation = confirm("Are you sure you want to delete your account? This action cannot be undone.");
    if (confirmation) {
        alert("Your account has been deleted.");
        // Implement your account deletion logic here
    }
}
