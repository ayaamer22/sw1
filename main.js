document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    // Basic client-side validation
    if (username === 'admin' && password === 'password') {
        errorMessage.textContent = '';
        alert('Login successful!');
        // You can redirect to another page or perform other actions here
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
});
