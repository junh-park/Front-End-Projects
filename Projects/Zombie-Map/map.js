var zombie_map;
function initMap() {
    const melbourne = { lat: -37.840935, lng: 144.946457 };
    zombie_map = new google.maps.Map(document.getElementById('zombie_map'), {
        zoom: 10,
        center: melbourne
    });

    zombie_map.addListener('click', function (e) {
        place_marker(e.latLng);
    });
}

function place_marker(location) {
    var emoji = document.getElementById('icon_to_use').value;
    var marker = new google.maps.Marker({
        position: location,
        map: zombie_map,
        icon: emoji
    });
    console.log(location.lat() + " " + location.lng() + " " + emoji);
}



