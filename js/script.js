
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat:37.629562, lng:-116.849556},
    zoom: 15,
    mapTypeId: 'satellite',
});
const contentString =
'<div id="content">' +
'<h1 id="firstHeading" class="firstHeading">ALIENS ARE REAL!!!</h1>' +
'<div id="bodyContent">' +
"<p>Clearly no mortal man could do this?!?!?</p>" + 
"</div>" +
"</div>";

const contentString2 =
'<div id="content">' +
'<h1 id="firstHeading" class="firstHeading">ALIENS ARE REAL 2???!!!</h1>' +
'<div id="bodyContent">' +
"<p>Ground Circles Perposterous!!!?!?!?</p>" + 
"</div>" +
"</div>";

const infowindow = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: "Evidence 1",
});
let marker1 = new google.maps.Marker({
    position: {lat:37.629562, lng:-116.849556},
    map,
    title: "Evidence of Aliens 1"
})
marker1.addListener("click", () => {
  infowindow.open({
  anchor: marker1,
  map,
  });
});

const infowindow2 = new google.maps.InfoWindow({
  content: contentString2,
  ariaLabel: "Evidence 2",
});
let marker2 = new google.maps.Marker({
  position: {lat:35.52, lng:104.62},
  map,
  title: "Evidence of Aliens 2"
})
marker2.addListener("click", () => {
infowindow2.open({
anchor: marker2,
map,
});
});
}




marker1.setMap(map);
marker2.setMap(map);
initMap();