document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Check if username and password are valid (You can replace this with your authentication logic)
    if (username === 'your_username' && password === 'your_password') {
        // If valid, redirect to dashboard or perform any action needed
        window.location.href = 'dashboard.html';
    } else {
        // If not valid, display error message
        var errorMessage = document.getElementById('errorMessage');
        errorMessage.innerText = 'Invalid username or password.';
        errorMessage.classList.remove('d-none');
    }
});