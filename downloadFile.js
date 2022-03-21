const https = require('https')
const fs = require('fs');

const file = fs.createWriteStream("cajeros-automaticos.csv");
const request = https.get("https://cdn.buenosaires.gob.ar/datosabiertos/datasets/cajeros-automaticos/cajeros-automaticos.csv", function(response) {
    response.pipe(file);
    console.log('file saved');
});