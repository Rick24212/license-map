// Create a map centered around the US
var map = L.map('map').setView([37.8, -96.9], 4); // Coordinates for the geographic center of the US

// Add a tile layer (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// List of US state capitals with their coordinates
var stateCapitals = [
    {lat: 32.3770, lon: -86.3000, popup: 'Alabama'},
    {lat: 58.3019, lon: -134.4197, popup: 'Alaska'},
    {lat: 33.4484, lon: -112.0740, popup: 'Arizona'},
    {lat: 34.7465, lon: -92.2896, popup: 'Arkansas'},
    {lat: 38.5767, lon: -121.4944, popup: 'California'},
    {lat: 39.7392, lon: -104.9903, popup: 'Colorado'},
    {lat: 41.7658, lon: -72.6734, popup: 'Connecticut'},
    {lat: 39.1580, lon: -75.5244, popup: 'Delaware'},
    {lat: 30.4383, lon: -84.2807, popup: 'Florida'},
    {lat: 33.7490, lon: -84.3880, popup: 'Georgia'},
    {lat: 21.3070, lon: -157.8583, popup: 'Hawaii'},
    {lat: 43.6178, lon: -116.1994, popup: 'Idaho'},
    {lat: 39.7983, lon: -89.6544, popup: 'Illinois'},
    {lat: 39.7684, lon: -86.1581, popup: 'Indiana'},
    {lat: 41.5868, lon: -93.6250, popup: 'Iowa'},
    {lat: 39.0489, lon: -95.6780, popup: 'Kansas'},
    {lat: 38.2009, lon: -84.8733, popup: 'Kentucky'},
    {lat: 30.4571, lon: -91.1874, popup: 'Louisiana'},
    {lat: 44.3070, lon: -69.7817, popup: 'Maine'},
    {lat: 38.9784, lon: -76.4922, popup: 'Maryland'},
    {lat: 42.3601, lon: -71.0589, popup: 'Massachusetts'},
    {lat: 42.7325, lon: -84.5555, popup: 'Michigan'},
    {lat: 44.9537, lon: -93.0900, popup: 'Minnesota'},
    {lat: 32.2988, lon: -90.1848, popup: 'Mississippi'},
    {lat: 38.5767, lon: -92.1735, popup: 'Missouri'},
    {lat: 46.5891, lon: -112.0391, popup: 'Montana'},
    {lat: 40.8136, lon: -96.7026, popup: 'Nebraska'},
    {lat: 39.1638, lon: -119.7674, popup: 'Nevada'},
    {lat: 43.2081, lon: -71.5376, popup: 'New Hampshire'},
    {lat: 40.2206, lon: -74.7699, popup: 'New Jersey'},
    {lat: 35.6822, lon: -105.9396, popup: 'New Mexico'},
    {lat: 42.6526, lon: -73.7562, popup: 'New York'},
    {lat: 35.7796, lon: -78.6382, popup: 'North Carolina'},
    {lat: 46.8083, lon: -100.7837, popup: 'North Dakota'},
    {lat: 39.9612, lon: -82.9988, popup: 'Ohio'},
    {lat: 35.4676, lon: -97.5164, popup: 'Oklahoma'},
    {lat: 44.9429, lon: -123.0351, popup: 'Oregon'},
    {lat: 40.2732, lon: -76.8867, popup: 'Pennsylvania'},
    {lat: 41.8236, lon: -71.4222, popup: 'Rhode Island'},
    {lat: 34.0007, lon: -81.0348, popup: 'South Carolina'},
    {lat: 44.3668, lon: -100.3538, popup: 'South Dakota'},
    {lat: 36.1627, lon: -86.7816, popup: 'Tennessee'},
    {lat: 30.2747, lon: -97.7404, popup: 'Texas'},
    {lat: 40.7608, lon: -111.8910, popup: 'Utah'},
    {lat: 44.2624, lon: -72.5805, popup: 'Vermont'},
    {lat: 37.5407, lon: -77.4360, popup: 'Virginia'},
    {lat: 47.0379, lon: -122.9007, popup: 'Washington'},
    {lat: 38.3365, lon: -81.6123, popup: 'West Virginia'},
    {lat: 43.0747, lon: -89.3844, popup: 'Wisconsin'},
    {lat: 41.1400, lon: -104.8202, popup: 'Wyoming'}
];

// Function to adjust the dimensions of the textarea
function adjustTextareaSize(textarea) {
    textarea.style.height = 'auto'; // Reset the height
    textarea.style.width = 'auto';  // Reset the width
    textarea.style.height = textarea.scrollHeight + 'px'; // Set the height to the scroll height
    textarea.style.width = textarea.scrollWidth + 'px';  // Set the width to the scroll width
}

// Function to create and bind popups with editable text areas
function createMarker(state) {
    var popupContent = `
        <b>${state.popup}</b><br>
        <textarea id="note-${state.popup}" placeholder="Type here..." oninput="adjustTextareaSize(this)"></textarea>
    `;
    var marker = L.marker([state.lat, state.lon]).addTo(map).bindPopup(popupContent);

    // Event listener for when the popup is opened
    marker.on('popupopen', function() {
        var textarea = document.getElementById(`note-${state.popup}`);
        // Load saved text from localStorage
        textarea.value = localStorage.getItem(`note-${state.popup}`) || '';
        // Adjust the textarea size based on its content
        adjustTextareaSize(textarea);
        // Save text to localStorage when the textarea value changes
        textarea.addEventListener('input', function() {
            localStorage.setItem(`note-${state.popup}`, textarea.value);
        });
    });
}

// Add markers to the map
stateCapitals.forEach(createMarker);
// Example of saving marker text
function saveMarkerText(markerId, text) {
    fetch('http://localhost:5000/save-marker', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: markerId, text: text }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Marker data saved:', data);
    })
    .catch(error => {
        console.error('Error saving marker data:', error);
    });
}

// Example of loading markers with saved text
function loadMarkersFromServer() {
    fetch('http://localhost:5000/get-markers')
    .then(response => response.json())
    .then(markers => {
        Object.keys(markers).forEach(markerId => {
            const marker = markers[markerId];
            // Add your code to update markers with saved text
            // Example: updateMarkerText(markerId, marker.text);
        });
    })
    .catch(error => {
        console.error('Error fetching markers:', error);
    });
}

// Call loadMarkersFromServer when map is ready to load saved markers
document.addEventListener('DOMContentLoaded', loadMarkersFromServer);