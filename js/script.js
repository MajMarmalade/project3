
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat:37.629562, lng:-116.849556},
    zoom: 15,
    mapTypeId: 'satellite',
});
const contentString = "<p>No man could ever make a large geometric object on the ground! This must be ALIENS</p>";

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
}




marker1.setMap(map);
initMap();