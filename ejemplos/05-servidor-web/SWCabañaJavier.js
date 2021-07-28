/*
 * Desafio Entregable
 * 
 * Desarrollar un servidor en nodejs que con cada requerimiento devuelva como
 * resultado un objeto con ciertos valores aleatorios.
 */
const http = require('http');

function obtenerRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const server = http.createServer((peticion, respuesta) => {
    let objeto = {
        id: obtenerRandom(1, 10),
        title: "Producto " + obtenerRandom(1, 10),
        price: obtenerRandom(0.00, 9999.99),
        thumbnail: "Foto " + obtenerRandom(1, 10)
    };

    respuesta.end(JSON.stringify(objeto));
});

let PUERTO = 3000;

server.listen(PUERTO, function () {
    console.log(`Servidor escuchando en http://localhost:${PUERTO}`);
});
