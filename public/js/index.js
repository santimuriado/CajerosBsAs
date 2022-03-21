document.querySelector('#miUbicacionMasCajeros').addEventListener('click', geoFindMe)

function initMap() {

    var options = {
        zoom: 12,
        center: { lat: -34.585119, lng: -58.433830 }
    }

    window.map = new google.maps.Map(document.getElementById('map'), options);

}

function geoFindMe() {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            addMarker({
                coordinates: pos,
                content: `<p>Lat:${pos.lat}</p>
                            <p>Lat:${pos.lng}</p>`
            });
            map.setCenter(pos);
            map.setZoom(16);

            let red = document.getElementById("red").value;
            fetchAndMark(red, pos.lat, pos.lng);

        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });

    } else {
        // Browser doesn’t support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }

}

const form = document.getElementById("datos");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let red = document.getElementById("red").value;
    let lat = document.getElementById("lat").value;
    let long = document.getElementById("long").value;
    fetchAndMark(red, lat, long);

})

function fetchAndMark(red, lat, long) {

    fetch(`http://localhost:5000/cajeros/${red}&${lat}&${long}`)
        .then(response => response.json())
        .then(data => {
            if (data[0] == null) {
                alert('No se encontraron cajeros automaticos a menos de 500m de su posicion');
            }

            for (let i = 0; i < data.length; i++) {
                addMarker({
                    coordinates: { lat: Number(data[i].lat), lng: Number(data[i].long) },
                    content: `<h5>${data[i].banco}</h5>
                            <p>${data[i].ubicacion}</p>
                            <p>Lat:${data[i].lat}</p>
                            <p>Lat:${data[i].long}</p>`
                });
            }
        });
}

function addMarker(prop) {
    var marker = new google.maps.Marker({
        position: prop.coordinates,
        map: map,
    });
    if (prop.content) {
        var information = new google.maps.InfoWindow({
            content: prop.content
        });

        marker.addListener('click', function() {
            information.open(map, marker);
        });
    }
}