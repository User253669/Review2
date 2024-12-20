document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let isValid = true;

    // Reset error messages
    document.getElementById('emailError').innerText = '';
    document.getElementById('passwordError').innerText = '';

    // Email validation
    if (!validateEmail(email)) {
        document.getElementById('emailError').innerText = 'Please enter a valid email address.';
        isValid = false;
    }
    // Password strength check (simple example)
    if (password.length < 6) {
        document.getElementById('passwordError').innerText = 'Password must be at least 6 characters long.';
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
        // Here you could also send the form data to a server
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}