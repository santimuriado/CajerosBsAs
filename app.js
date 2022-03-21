const express = require('express')
const app = express()
const path = require('path')

require('./parser')

const buscarCajeros = require('./buscarCajeros');
//Logger
const morgan = require('morgan')

//static setup
app.use(express.static('./public'))

app.use(morgan('dev'))

//Cajeros endpoint.
app.get('/cajeros', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, './public/cajeros.html'));
})

app.get('/cajeros/:red&:lat&:long', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, './public/cajeros.html'));
    const cajeros = buscarCajeros(req.params.red, req.params.lat, req.params.long);
    res.status(200).json(cajeros)
})

//Non-existent endpoints.
app.all('*', (req, res) => {
    res.status(404).send('resource not found')
})

//Server port.
app.listen(5000, () => {
    console.log('server is listening on port 5000');
})