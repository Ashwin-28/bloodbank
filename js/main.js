document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const userType = document.querySelector('input[name="user-type"]:checked').value;

        // Show loading animation
        showLoading();

        // Simulate API call for login
        setTimeout(() => {
            // Hide loading animation
            hideLoading();

            // In a real application, you would send this data to your server for authentication
            console.log('Login attempt:', { email, password, userType });

            // Simulate successful login and redirect
            localStorage.setItem('userType', userType);
            localStorage.setItem('userEmail', email);

            switch(userType) {
                case 'admin':
                    window.location.href = 'dashboards/admin_dashboard.html';
                    break;
                case 'donor':
                    window.location.href = 'dashboards/donor_dashboard.html';
                    break;
                case 'manager':
                    window.location.href = 'dashboards/manager_dashboard.html';
                    break;
                default:
                    alert('Invalid user type');
            }
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