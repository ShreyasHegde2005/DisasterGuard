// Save location to localStorage and update the location on the current page
function saveLocation() {
    const location = document.getElementById('location').value;
    if (location) {
        localStorage.setItem('userLocation', location);
        alert(`Location ${location} saved!`);
    } else {
        alert('Please enter a location.');
    }
}

// Update the location display on pages
function updateLocation() {
    const location = localStorage.getItem('userLocation');
    if (location) {
        document.getElementById('current-location').innerText = location;
        document.getElementById('alert-message').innerText = `Weather alert for ${location}: Ensure you are updated with the latest weather conditions.`;
    }
}

// Call updateLocation() on pages where location needs to be displayed
window.onload = updateLocation;
