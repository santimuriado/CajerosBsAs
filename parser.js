const fs = require('fs');
const csv = require('csvtojson')

const csvFilePath = './cajeros-automaticos.csv'
csv().fromFile(csvFilePath)
    .then(cajeros => {
        fs.writeFile('cajeros-automaticos.json', JSON.stringify(cajeros, null, 4), (err) => {
            if (err) {
                throw err;
            }
        });
    })
    .catch(err => {
        console.log(err);
    });