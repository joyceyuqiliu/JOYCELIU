/* =====================
  Global Variables
===================== */
var data;  // for holding data

/* =====================
  Map Setup
===================== */
L.mapbox.accessToken = 'pk.eyJ1IjoieXVxaWxpdSIsImEiOiJjazh1bGlmZmYwMjhpM2RycmU3d29wbDM2In0.SJ3uvZLirKHDLB8-LJ2SDg';
var map = L.mapbox.map('worldmap')
    //.setView([40, -74.50], 9)
    .setView([0, 0],2)
    .addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/dark-v10'));

//    var map = new mapboxgl.Map({
//    container: 'map',
//    style: 'mapbox://styles/mapbox/streets-v11',
    // camera options properties - https://docs.mapbox.com/help/glossary/camera/
//    center: [-73.5804, 45.53483],
//    pitch: 60, // pitch in degrees
//    bearing: -60, // bearing in degrees
//    zoom: 10
//    });
