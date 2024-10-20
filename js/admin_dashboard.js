document.addEventListener('DOMContentLoaded', function() {
    loadBloodRequests();
    loadInventory();
    document.getElementById('emergency-request-form').addEventListener('submit', submitEmergencyRequest);
});

function loadBloodRequests() {
    // Simulated data - replace with actual API call
    const requests = [
        { id: 1, bloodType: 'A+', quantity: 2, status: 'Pending' },
        { id: 2, bloodType: 'O-', quantity: 1, status: 'Approved' },
        { id: 3, bloodType: 'B+', quantity: 3, status: 'Pending' },
    ];

    const tableBody = document.querySelector('#requests-table tbody');
    tableBody.innerHTML = '';

    requests.forEach(request => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${request.id}</td>
            <td>${request.bloodType}</td>
            <td>${request.quantity}</td>
            <td>${request.status}</td>
            <td><button onclick="updateRequestStatus(${request.id})">Update</button></td>
        `;
        tableBody.appendChild(row);
    });
}

function loadInventory() {
    // Simulated data - replace with actual API call
    const inventory = [
        { bloodType: 'A+', units: 50, status: 'Adequate' },
        { bloodType: 'A-', units: 10, status: 'Low' },
        { bloodType: 'B+', units: 30, status: 'Adequate' },
        { bloodType: 'B-', units: 5, status: 'Critical' },
        { bloodType: 'AB+', units: 15, status: 'Low' },
        { bloodType: 'AB-', units: 3, status: 'Critical' },
        { bloodType: 'O+', units: 40, status: 'Adequate' },
        { bloodType: 'O-', units: 20, status: 'Low' },
    ];

    const tableBody = document.querySelector('#inventory-table tbody');
    tableBody.innerHTML = '';

    inventory.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.bloodType}</td>
            <td>${item.units}</td>
            <td class="status ${item.status.toLowerCase()}">${item.status}</td>
        `;
        tableBody.appendChild(row);
    });
}

function submitEmergencyRequest(e) {
    e.preventDefault();
    const bloodType = e.target.elements['blood-type'].value;
    const quantity = e.target.elements['quantity'].value;

    // Simulated API call - replace with actual API call
    console.log(`Emergency request submitted: ${quantity} units of ${bloodType} blood`);
    alert('Emergency request submitted successfully!');
    e.target.reset();
}

function updateRequestStatus(requestId) {
    // Simulated API call - replace with actual API call
    console.log(`Updating status for request ${requestId}`);
    alert(`Status updated for request ${requestId}`);
    loadBloodRequests(); // Reload the table
}