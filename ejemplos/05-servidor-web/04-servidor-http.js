/* const http = require('http');

const server = http.createServer((peticion, respuesta) => {
    var hora = new Date().getHours();

    if(hora >= 6 && hora <= 12){
        respuesta.end('Buenos dias!');
    } else if(hora >= 13 && hora <= 19) {
        respuesta.end('Buenas tardes!');
    } else if(hora >= 20 || hora <= 5) {
        respuesta.end('Buenas noches!');
    }
    
});

let puerto=8080;

server.listen(puerto, function () {
    console.log(`servidor esta escuchando en el puerto http://localhost:${puerto}`);
}); */


const http = require('http');

const server = http.createServer((peticion, respuesta) => {
    var hora = new Date().getHours();

    if(hora >= 6 && hora <= 12){
        respuesta.end('Buenos dias!, la hora es', hora.tostring());
    } else if(hora >= 13 && hora <= 19) {
        respuesta.end('Buenas tardes!, la hora es', hora.tostring());
    } else if(hora >= 20 || hora <= 5) {
        respuesta.end('Buenas noches!, la hora es', hora.tostring());
    }
    
});

let puerto=8080;

server.listen(puerto, function () {
    console.log(`servidor esta escuchando en el puerto http://localhost:${puerto}`);
});