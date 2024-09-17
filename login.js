document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting
    
    // Hardcoded username and password for testing purposes
    const validUsername = "admin";
    const validPassword = "password";
    
    // Get entered username and password values
    const enteredUsername = document.getElementById("username").value;
    const enteredPassword = document.getElementById("password").value;
    
    // Validate entered credentials
    if (enteredUsername === validUsername && enteredPassword === validPassword) {
        window.location.href = "dashboard.html"; // Redirect to dashboard if valid
    } else {
        alert("Invalid username or password!"); // Show error if invalid
    }
});