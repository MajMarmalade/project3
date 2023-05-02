
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat:41.835, lng:-87.627},
    zoom: 8
});
}

initMap();