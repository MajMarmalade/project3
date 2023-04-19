var map;
const iit = {lat:41.835, lng:-87.627};


function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15, center:iit,
    });
    const marker = new google.maps.Marker({
        position: iit, map:map,
    });
}

initMap();