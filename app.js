// Require de Express
const express = require('express');

// Require de FS
const fs = require('fs');

// Ejecución de Express
const app = express();

// rutas
const main = require('./routes/rutaMain');
const sucursales = require('./routes/rutaSucursales');
const marcas = require('./routes/rutaMarcas')
const autos = require('./routes/rutaAutos')

app.use('/', main)
app.use('/sucursales', sucursales)
app.use('/marcas', marcas)
app.use('/autos', autos)

// app.use('/autos', autos)

// Levanto servidor en un puerto, este caso el 3030.
app.listen(3030, () => console.log('Servidor abierto correctamente!'));


// ruta error
app.get('*', (req, res) => {
	res.status(404).send('[ERROR]. <br> No se pudo localizar la ruta indicada, por favor comunicarse con el programador!');
});