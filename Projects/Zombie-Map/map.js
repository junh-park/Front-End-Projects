var zombie_map;
function initMap() {
    zombie_map = new google.maps.Map(document.getElementById('zombie_map'), {
        zoom: 10,
        center: {lat: -37.840935, lng: 144.946457}
    });
}