/**
 * Desafio generico - tiempo 5/10 minutos
 * Guardar en un archivo fyh.txt la hora actual y leerlo usand operaciones sync
 * 
 * Lasciate ogni speranza, voi ch''entrate
 */

const fs = require('fs');

function escribir(ruta, data) {
    try {
        fs.writeFileSync(ruta, data);
    } catch (error) {
        throw new Error('Error al intentar escribir el archivo.');
    }

}

function leer(ruta) {
    let texto;

    try {
        texto = fs.readFileSync(ruta, 'utf-8');
    } catch (error) {
        throw new Error('No se puede leer el texto del archivo.')
    }

    console.log(texto);
}

const miTexto = new Date().toString();
const miArchivo = './mitxt.txt';

escribir(miArchivo, miTexto);
leer(miArchivo);