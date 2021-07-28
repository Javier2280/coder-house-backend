/**
 * Desafio generico - tiempo 5/10 minutos
 * Realizar un programa que ejecute las siguientes tareas:
 * A) Lea el archivo info.txt generado en el desafío anterior deserializándolo en un objeto llamado info.
 * B) Representar este objeto info en la consola.
 * C) Modifique el author a "Coderhouse" y guarde el objeto serializado en otro archivo llamado package.json.coder
 * D) Mostrar los errores por consola.
 */
const fs = require('fs');

async function Desafio() {
    let datos = await fs.promises.readFile('./info.txt');
    let info = {
        contenidoStr: datos.toString(),
        contenidoObj: JSON.parse(datos),
        size: datos.length,
    };

    return info;
}

Desafio().then(contenido => {
    console.log(contenido);
})


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