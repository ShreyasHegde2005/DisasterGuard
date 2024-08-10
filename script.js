// Function to fetch earthquake data from the API
async function fetchEarthquakeData() {
    const url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson';
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const earthquakeData = await response.json();
        displayTsunamiInfo(earthquakeData);
    } catch (error) {
        console.error("Error fetching earthquake data:", error);
    }
}

// Function to display the tsunami data on the webpage
function displayTsunamiInfo(data) {
    const infoDiv = document.getElementById('earthquake-info');
    
    data.features.forEach((feature) => {
        const place = feature.properties.place;
        const magnitude = feature.properties.mag;
        const tsunami = feature.properties.tsunami;
        const eventUrl = feature.properties.url;

        // Creating HTML content for each earthquake event
        const earthquakeInfo = document.createElement('div');
        earthquakeInfo.innerHTML = `
            <h2><a href="${eventUrl}" target="_blank">${place}</a></h2>
            <p>Magnitude: ${magnitude}</p>
            <p>Tsunami: ${tsunami === 1 ? 'Yes' : 'No'}</p>
            <hr>
        `;

        // Appending the content to the webpage
        infoDiv.appendChild(earthquakeInfo);
    });
}

// Call the function to fetch and display data
fetchEarthquakeData();