const prueba = require('mi-libreria-coder');
const moment = require('moment');

function calcular(fechaNacimiento) {
    

    try {
        if (fechaNacimiento == undefined) {
            throw new Error('Fecha inválida');
            prueba.error('ocurrio un error');
        }
    
        const hoy = moment();
        const nacimiento = moment(fechaNacimiento,'DD/MM/YYYY');


        
        console.log(`Hoy es ${hoy.format('DD/MM/YYYY')}`);
        console.log(`Nací el ${nacimiento.format('DD/MM/YYYY')}`);
        console.log(`Diferencia ${hoy.diff(nacimiento,'year')}`);

        prueba.log('Prueba / log');


    } catch (error) {
        throw new Error('Error al intentar calcular las fechas');
    }
}


calcular('22/4/1980');