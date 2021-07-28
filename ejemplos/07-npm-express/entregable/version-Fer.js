import express from 'express';
import fs from 'fs';

const app = express();
const puerto = 8080;

//Inicializo contadores de visitas a los métodos.
let consultaItems = 0;
let consultaItemRandom = 0;

//Función que me permite obtener un valor aleatorio entre 2 números
function obtenerRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//1
app.get('/items', (req, res) => {
    let archivo = [];
    let productos = [];
    let cantidades;
    let respuesta = [];

    try {
        data = JSON.parse(fs.readFileSync('./productos.txt', 'utf-8'));

        for (var i = 0; i < archivo.length; i++) {
            productos.push(archivo[i].title);
            cantidades = i + 1;
        }

        respuesta = {
            items: productos.join(),
            cantidad: cantidades
        };

    } catch (error) {
        console.log('error', error);
    }


    if (consultaItems == undefined) {
        consultaItems = 1;
    } else {
        consultaItems++;
    }

    res.send(JSON.stringify(respuesta, null, '\n'));
});

//2
app.get('/item-random', (req, res) => {
    let archivo = [];
    let respuesta = [];

    try {
        archivo = JSON.parse(fs.readFileSync('./productos.txt', 'utf-8'));

        let id = obtenerRandom(0, archivo.length);
        let producto = archivo[id].title;

        respuesta = {
            items: producto
        };

    } catch (error) {
        console.log('error', error);
    }

    if (consultaItemRandom == undefined) {
        consultaItemRandom = 1;
    } else {
        consultaItemRandom++;
    }

    res.send(JSON.stringify(respuesta, null, '\n'));
});

//3
app.get('/visitas', (req, res) => {
    let respuesta = {
        visitas: {
            items: consultaItems,
            item: consultaItemRandom
        }
    };

    res.send(JSON.stringify(respuesta, null, '\n'));
});

// pongo a escuchar el servidor en el puerto indicado
const server = app.listen(puerto, () => {
    console.log(`servidor escuchando en http://localhost:${puerto}`);
});

// en caso de error, avisar
server.on('error', error => {
    console.log('error en el servidor:', error);
});