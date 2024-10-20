document.addEventListener('DOMContentLoaded', function() {
    loadDonationHistory();
    loadUpcomingDrives();
    loadDonationCenters();
    document.getElementById('schedule-donation-form').addEventListener('submit', scheduleDonation);
});

function loadDonationHistory() {
    // Simulated data - replace with actual API call
    const history = [
        { date: '2023-05-15', location: 'City Hospital', bloodType: 'A+', quantity: 1 },
        { date: '2023-02-10', location: 'Red Cross Center', bloodType: 'A+', quantity: 1 },
        { date: '2022-11-05', location: 'Community Clinic', bloodType: 'A+', quantity: 1 },
    ];

    const tableBody = document.querySelector('#history-table tbody');
    tableBody.innerHTML = '';

    history.forEach(donation => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${donation.date}</td>
            <td>${donation.location}</td>
            <td>${donation.bloodType}</td>
            <td>${donation.quantity}</td>
        `;
        tableBody.appendChild(row);
    });
}

function loadUpcomingDrives() {
    // Simulated data - replace with actual API call
    const drives = [
        { date: '2023-06-01', location: 'City Hall' },
        { date: '2023-06-15', location: 'University Campus' },
        { date: '2023-07-02', location: 'Shopping Mall' },
    ];

    const drivesList = document.getElementById('drives-list');
    drivesList.innerHTML = '';

    drives.forEach(drive => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${drive.date}</strong> - ${drive.location}
            <button onclick="registerForDrive('${drive.date}', '${drive.location}')">Register</button>
        `;
        drivesList.appendChild(li);
    });
}

function loadDonationCenters() {
    // Simulated data - replace with actual API call
    const centers = ['City Hospital', 'Red Cross Center', 'Community Clinic'];
    const select = document.querySelector('select[name="donation-center"]');

    centers.forEach(center => {
        const option = document.createElement('option');
        option.value = center;
        option.textContent = center;
        select.appendChild(option);
    });
}

function scheduleDonation(e) {
    e.preventDefault();
    const date = e.target.elements['donation-date'].value;
    const center = e.target.elements['donation-center'].value;

    // Simulated API call - replace with actual API call
    console.log(`Donation scheduled for ${date} at ${center}`);
    alert('Donation scheduled successfully!');
    e.target.reset();
}

function registerForDrive(date, location) {
    // Simulated API call - replace with actual API call
    console.log(`Registered for blood drive on ${date} at ${location}`);
    alert(`Successfully registered for blood drive on ${date} at ${location}`);
}