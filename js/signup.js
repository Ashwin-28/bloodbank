document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');

    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const fullname = document.getElementById('fullname').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        const userType = document.querySelector('input[name="user-type"]:checked').value;

        if (password !== confirmPassword) {
            alert("Passwords don't match!");
            return;
        }

        // Show loading animation
        showLoading();

        // Simulate API call for signup
        setTimeout(() => {
            // Hide loading animation
            hideLoading();

            // In a real application, you would send this data to your server to create a new user
            console.log('Signup attempt:', { fullname, email, password, userType });

            // Simulate successful signup and redirect to login page
            alert('Signup successful! Please log in.');
            window.location.href = 'index.html';
        }, 1500);
    });
});

function showLoading() {
    const loadingOverlay = document.createElement('div');
    loadingOverlay.className = 'loading-overlay';
    loadingOverlay.innerHTML = '<div class="spinner"></div>';
    document.body.appendChild(loadingOverlay);
}

function hideLoading() {
    const loadingOverlay = document.querySelector('.loading-overlay');
    if (loadingOverlay) {
        loadingOverlay.remove();
    }
}