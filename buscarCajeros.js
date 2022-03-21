const { captureRejections } = require('events');
const fs = require('fs');

function buscarCajeros(red, lat, long) {

    const jsonFile = require('./cajeros-automaticos.json')

    var cajerosCercanos = [];

    var shortestDistance = getDistanceFromLatLonInKm(lat, long, jsonFile[0].lat, jsonFile[0].long)

    for (var i = 0; i < jsonFile.length; i++) {
        if (jsonFile[i].red === red) {
            var currentDistance = getDistanceFromLatLonInKm(lat, long, jsonFile[i].lat, jsonFile[i].long)
            if (currentDistance < shortestDistance && currentDistance <= 0.5 && cajerosCercanos.length < 3) {
                shortestDistance = currentDistance;
                cajerosCercanos.push(jsonFile[i]);
            }
        }
    }
    return cajerosCercanos;
}


function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1); // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180)
}

module.exports = buscarCajeros;