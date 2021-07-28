/**
 * Desafio generico - tiempo 10/15 minutos
 * Escribir un programa que realice las siguientes acciones:
 * A - leer el archivo package.json y declarar un objeto con el siguiente formato.
 * B - muestre por consola el objeto info luego de leer el archivo
 * C - guardar el archivo info en un archivo llamado info.txt dentro de la misma carpeta de package.json
 * 
 */
const fs = require('fs');

fs.readFile('./package.json', (error, contenido) => {
    if (error) {
        console.log('error:', error);
    } else {
        let info = {
            contenidoStr: contenido.toString(),
            contenidoObj: JSON.parse(contenido),
            size: contenido.length,
        };

        console.log(info);

        fs.writeFile('./info.txt', JSON.stringify(info, null, '\t'), (error) => {
            if (error) {
                throw new Error('Error al escriie archivo')
            } else {
                console.log('Archivo creado exitosamente')
            }
        })
    }
})