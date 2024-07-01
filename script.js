// List of US states with their approximate geographic center coordinates
const states = [
    { name: "Alabama, James W. Wilson", coords: [32.806671, -86.791130] },
  //  { name: "Alaska, NA", coords: [61.370716, -152.404419] },
  //  { name: "Arizona, NA", coords: [33.729759, -111.431221] },
  //  { name: "Arkansas, NA", coords: [34.969704, -92.373123] },
   // { name: "California, NA", coords: [36.116203, -119.681564] },
    { name: "Colorado, James Wilson", coords: [39.059811, -105.311104] },
   // { name: "Connecticut, NA", coords: [41.597782, -72.755371] },
  //  { name: "Delaware, NA", coords: [39.318523, -75.507141] },
    { name: "Florida, James Wilson", coords: [27.766279, -81.686783] },
    { name: "Georgia, James Wilson", coords: [33.040619, -83.643074] },
  //  { name: "Hawaii, NA", coords: [21.094318, -157.498337] },
    //{ name: "Idaho, NA", coords: [44.240459, -114.478828] },
   // { name: "Illinois, NA", coords: [40.349457, -88.986137] },
    { name: "Indiana, James W Wilson", coords: [39.849426, -86.258278] },
    //{ name: "Iowa, NA", coords: [42.011539, -93.210526] },
    //{ name: "Kansas, NA", coords: [38.526600, -96.726486] },
    { name: "Kentucky, James Wilson", coords: [37.668140, -84.670067] },
    { name: "Louisiana, James Wilson", coords: [31.169546, -91.867805] },
   // { name: "Maine, NA", coords: [44.693947, -69.381927] },
   // { name: "Maryland, NA", coords: [39.063946, -76.802101] },
   // { name: "Massachusetts, NA", coords: [42.230171, -71.530106] },
   // { name: "Michigan, NA", coords: [43.326618, -84.536095] },
   // { name: "Minnesota, NA", coords: [45.694454, -93.900192] },
    { name: "Mississippi, JAmes Wilson", coords: [32.741646, -89.678696] },
    { name: "Missouri, James Wilson", coords: [38.456085, -92.288368] },
   // { name: "Montana, Na", coords: [46.921925, -110.454353] },
   // { name: "Nebraska, NA", coords: [41.125370, -98.268082] },
  //  { name: "Nevada, NA", coords: [38.313515, -117.055374] },
  //  { name: "New Hampshire, NA", coords: [43.452492, -71.563896] },
   // { name: "New Jersey, NA", coords: [40.298904, -74.521011] },
   // { name: "New Mexico, NA", coords: [34.840515, -106.248482] },
    //{ name: "New York, NA", coords: [42.165726, -74.948051] },
    //{ name: "North Carolina, NA", coords: [35.630066, -79.806419] },
    //{ name: "North Dakota, NA", coords: [47.528912, -99.784012] },
    { name: "Ohio, Jim Wilson", coords: [40.388783, -82.764915] },
    { name: "Oklahoma, Zach Buss", coords: [35.565342, -96.928917] },
    //{ name: "Oregon, NA", coords: [44.572021, -122.070938] },
    //{ name: "Pennsylvania, NA", coords: [40.590752, -77.209755] },
    //{ name: "Rhode Island, NA", coords: [41.680893, -71.511780] },
    //{ name: "South Carolina, NA", coords: [33.856892, -80.945007] },
    //{ name: "South Dakota, NA", coords: [44.299782, -99.438828] },
    { name: "Tennessee, Jim Wilson", coords: [35.747845, -86.692345] },
    //{ name: "Texas, NA", coords: [31.054487, -97.563461] },
    //{ name: "Utah, NA", coords: [40.150032, -111.862434] },
    //{ name: "Vermont, NA", coords: [44.045876, -72.710686] },
    //{ name: "Virginia, NA", coords: [37.769337, -78.169968] },
    //{ name: "Washington, NA", coords: [47.400902, -121.490494] },
    //{ name: "West Virginia, NA", coords: [38.491226, -80.954456] },
    //{ name: "Wisconsin, NA", coords: [44.268543, -89.616508] },
    //{ name: "Wyoming, NA", coords: [42.755966, -107.302490] }
];

// Create the map centered on the United States
const map = L.map('map').setView([37.8, -96], 4);

// Add the OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Add a marker for each state
states.forEach(state => {
    L.marker(state.coords).addTo(map)
        .bindPopup(state.name);
});




