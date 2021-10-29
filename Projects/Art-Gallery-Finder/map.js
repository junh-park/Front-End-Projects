let myMap;
let geocoder;

function initMap() {
    let Melbourne = { lat: -37.81741506336941, lng: 144.96062150745593 };
    let mapOption = {
        zoom: 14,
        center: Melbourne
    };

    myMap = new google.maps.Map(document.getElementById('myMap'), mapOption);
    let data_file = "http://localhost:8000/Outdoor_artworks.geojson";

    $.getJSON(data_file, function(data) {
        $.each(data.features, function(i) {

            if (i == 10) { return false; }
            markLocation(data.features[i]);
        });
    });
}

function markLocation(feature) {
    let [long, latitude] = feature.geometry.coordinates;
    let property = feature.properties.property;
    const infoWindow = new google.maps.InfoWindow();

    console.log(feature);
    let marker = new google.maps.Marker({
        map: myMap,
        position: { lat: latitude, lng: long },
        animation: google.maps.Animation.DROP,
        icon: "artgallery.png",
        title: property,
        optimized: false
    });

    marker.addListener("click", () => {
        infoWindow.close();
        infoWindow.setContent(marker.getTitle());
        infoWindow.open(marker.getMap(), marker);
    });
}