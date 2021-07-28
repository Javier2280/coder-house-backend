const express = require('express');
const productos = require('./api/productos');

// creo una app de tipo express
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Listar en forma total
app.get('/api/productos/listar', (req, res) => {
    let respuesta = '';

    try {
        respuesta = JSON.stringify(productos.Listar());

        res.send(respuesta);
    } catch (error) {
        res.status(400).send(error);
    }
});

//Listar en forma individual
app.get('/api/productos/listar/:id', (req, res) => {
    let respuesta = '';

    try {
        respuesta = JSON.stringify(productos.Listar(req.params.id));

        res.send(respuesta);
    } catch (error) {
        res.status(400).send(error);
    }
});

//Almacenar un producto
app.post('/api/productos/guardar', (req, res) => {
    try {
        respuesta = JSON.stringify(productos.Agregar(req.body.title, req.body.price, req.body.thumbnail));

        res.status(200).send(respuesta);
    } catch (error) {
        res.status(400).send(error);
    }
});

// pongo a escuchar el servidor en el puerto indicado
const puerto = 8080;

const server = app.listen(puerto, () => {
    console.log(`servidor escuchando en http://localhost:${puerto}`);
});

// en caso de error, avisar
server.on('error', error => {
    console.log('error en el servidor:', error);
});
