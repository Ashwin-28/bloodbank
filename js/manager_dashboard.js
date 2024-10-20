document.addEventListener('DOMContentLoaded', function() {
    loadInventory();
    loadBloodRequests();
    loadAnalytics();
    addAnimations();
});

function loadInventory() {
    // Simulated data - replace with actual API call
    const inventory = [
        { bloodType: 'A+', units: 50 },
        { bloodType: 'A-', units: 10 },
        { bloodType: 'B+', units: 30 },
        { bloodType: 'B-', units: 5 },
        { bloodType: 'AB+', units: 15 },
        { bloodType: 'AB-', units: 3 },
        { bloodType: 'O+', units: 40 },
        { bloodType: 'O-', units: 20 },
    ];

    const tableBody = document.querySelector('#inventory-table tbody');
    tableBody.innerHTML = '';

    inventory.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.bloodType}</td>
            <td>${item.units}</td>
            <td>
                <input type="number" min="0" value="${item.units}">
                <button onclick="updateInventory('${item.bloodType}', this)">Update</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function loadBloodRequests() {
    // Simulated data - replace with actual API call
    const requests = [
        { id: 1, hospital: 'City Hospital', bloodType: 'A+', quantity: 2, status: 'Pending' },
        { id: 2, hospital: 'Community Clinic', bloodType: 'O-', quantity: 1, status: 'Approved' },
        { id: 3, hospital: 'University Medical Center', bloodType: 'B+', quantity: 3, status: 'Pending' },
    ];

    const tableBody = document.querySelector('#requests-table tbody');
    tableBody.innerHTML = '';

    requests.forEach(request => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${request.id}</td>
            <td>${request.hospital}</td>
            <td>${request.bloodType}</td>
            <td>${request.quantity}</td>
            <td>${request.status}</td>
            <td>
                <button onclick="updateRequestStatus(${request.id}, 'Approved')">Approve</button>
                <button onclick="updateRequestStatus(${request.id}, 'Rejected')">Reject</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function loadAnalytics() {
    // Inventory Chart
    const inventoryCtx = document.getElementById('inventory-chart').getContext('2d');
    new Chart(inventoryCtx, {
        type: 'bar',
        data: {
            labels: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
            datasets: [{
                label: 'Current Inventory',
                data: [50, 10, 30, 5, 15, 3, 40, 20],
                backgroundColor: 'rgba(230, 0, 0, 0.6)',
                borderColor: 'rgba(230, 0, 0, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Requests Chart
    const requestsCtx = document.getElementById('requests-chart').getContext('2d');
    new Chart(requestsCtx, {
        type: 'pie',
        data: {
            labels: ['Pending', 'Approved', 'Rejected'],
            datasets: [{
                data: [5, 3, 2],
                backgroundColor: [
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(255, 99, 132, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }]
        }
    });
}

function updateInventory(bloodType, button) {
    const newValue = button.previousElementSibling.value;
    // Simulated API call - replace with actual API call
    console.log(`Updating inventory for ${bloodType}: ${newValue} units`);
    showNotification(`Inventory updated for ${bloodType}: ${newValue} units`);
    loadInventory(); // Reload the table
}

function updateRequestStatus(requestId, status) {
    // Simulated API call - replace with actual API call
    console.log(`Updating status for request ${requestId} to ${status}`);
    showNotification(`Status updated for request ${requestId} to ${status}`);
    loadBloodRequests(); // Reload the table
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 2000);
    }, 100);
}

function addAnimations() {
    const tables = document.querySelectorAll('table');
    tables.forEach(table => {
        table.classList.add('fade-in');
    });

    const charts = document.querySelectorAll('canvas');
    charts.forEach(chart => {
        chart.classList.add('slide-in');
    });
}