//check if code is woirking
console.log("working");

//JSON data
// Accessing the Toronto airline routes GeoJSON URL.
let torontoHoods = "https://raw.githubusercontent.com/ramruph/Mapping-Earthquakes/main/torontoNeighborhoods.json"


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the tile layer that will be the background of our map.
let satilliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});



let baseMaps = {
  "Streets": streets,
  "Satellite": satilliteStreets
};


// Create the map object with center and zoom level. This is the geographical center of the earth
let map = L.map('mapid', {
  center: [43.7, -79.3],
  zoom : 11,
  layers: [satilliteStreets]
});

// pass maps onto layer control
L.control.layers(baseMaps).addTo(map);

d3.json(torontoHoods).then(function(data){
  console.log(data);
  L.geoJSON(data).addTo(map);
});