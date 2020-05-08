/* =====================
  Global Variables
===================== */
var data;  // for holding data

/* =====================
  Map Setup
===================== */
mapboxgl.accessToken = 'pk.eyJ1IjoieXVxaWxpdSIsImEiOiJjazh1bGlmZmYwMjhpM2RycmU3d29wbDM2In0.SJ3uvZLirKHDLB8-LJ2SDg';
var map = new mapboxgl.Map({
container: 'worldmap',
style: 'mapbox://styles/mapbox/dark-v10',
center: [0,0],
pitch: 0,
zoom: 1
});
// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

//L.mapbox.accessToken = 'pk.eyJ1IjoieXVxaWxpdSIsImEiOiJjazh1bGlmZmYwMjhpM2RycmU3d29wbDM2In0.SJ3uvZLirKHDLB8-LJ2SDg';
//var map = L.mapbox.map('worldmap')
         //.setView([40, -74.50], 9)
  //  .setView([0, 0],2)
  //  .addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/dark-v10'));

//var secondaryinput; // for holding the result from the filtered data in csv

//read export country
//var exp1996 = $.ajax("https://raw.githubusercontent.com/joyceyuqiliu/midterm/master/joyce/midterm_dataset/m2017.json");


map.on('load', function() {
// Add a source for the state polygons.
map.addSource('exp2017', {
'type': 'geojson',
'data': 'https://raw.githubusercontent.com/joyceyuqiliu/midterm/master/joyce/midterm_dataset/m2017.json'
});
// Add a layer showing the state polygons.
map.addLayer({
'id': 'Export-2017',
'type': 'fill',
'source': 'exp2017',
'layout': {
  'visibility': 'none'
},
'paint': {
'fill-color': 'rgba(167, 198, 250, 0.5)',
'fill-outline-color': 'rgba(167, 198, 250, 1)'
}
});

//add another addSource
map.addSource('exp2016', {
'type': 'geojson',
'data': 'https://raw.githubusercontent.com/joyceyuqiliu/midterm/master/joyce/midterm_dataset/m2016.json'
});
// Add a layer showing the state polygons.
map.addLayer({
'id': 'Export-2016',
'type': 'fill',
'source': 'exp2016',
'layout': {
  'visibility': 'none'},
'paint': {
'fill-color': 'rgba(167, 198, 250, 0.5)',
'fill-outline-color': 'rgba(167, 198, 250, 1)'
}
});
});



var toggleableLayerIds = ['Export-2017','Export-2016'];
var link = document.getElementById("go");
link.href = "#";
link.className = 'active';
link.onclick = function(e) {
//  for (i = 0; i< toggleableLayerId.length; i++)
  for (var index in toggleableLayerIds)
  {
  var clickedLayer = toggleableLayerIds[index];
  e.preventDefault();
  e.stopPropagation();

  var visibility = map.getLayoutProperty(clickedLayer, 'visibility');

  if (visibility === 'visible') {
        map.setLayoutProperty(clickedLayer, 'visibility', 'none');
        this.className = '';
    } else {
        map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
        this.className = 'active';
    }}

var layers = document.getElementById('mapit');
layers.appendChild(link);
};
