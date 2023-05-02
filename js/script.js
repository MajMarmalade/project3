
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat:37.629562, lng:-116.849556},
    zoom: 50
});
}

initMap();