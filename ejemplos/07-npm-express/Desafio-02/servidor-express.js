const express = require('express');
const moment = require('moment');

// creo una app de tipo express
const app = express();
const puerto = 8080;
let visitas = 0;

// defino la ruta / con GET
app.get('/', (req, res) => {
    console.log('request recibido!');
    let texto = ''
    res.send('<h1 style="color: blue">Bienvenido al servidor Express</h1>');
});

app.get('/visitas', (req, res) => {
    console.log(`request recibido! / visitas: ${visitas}`);

    if(visitas==undefined){
        visitas= 1;
    } else {
        visitas ++;
    }

    res.send(`Esta es la visita número ${visitas}`);
});

app.get('/fyh', (req, res) => {
    let fecha = new Date().toLocaleString;
    
    console.log(`request recibido! / fecha: ${fecha}`);
    
    res.json({ fyh: fecha });
});


// pongo a escuchar el servidor en el puerto indicado
const server = app.listen(puerto, () => {
    console.log(`servidor escuchando en http://localhost:${puerto}`);
});

// en caso de error, avisar
server.on('error', error => {
    console.log('error en el servidor:', error);
});