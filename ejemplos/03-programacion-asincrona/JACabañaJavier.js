/**
 * Plantilla base para el desafio entregable de Javascript asincrono
 * 
 * Desarrollar una función que permita recorrer un texto que se le pase como parámetro 
 * y muestre cada una de sus palabras en un tiempo estipulado. 
 * Al finalizar debe ejecutar una función que se le pasa como callback.
 * 
 * Realizar tres llamadas a la función con porciones de texto que tienen que ser 
 * representados en forma ordenada. Inicialmente todas las palabras del primero, 
 * luego las del segundo y finalmente las del tercero.
 * 
 * Hacer configurable el tiempo de representación de palabras mediante un parámetro opcional.
 * Si este no se define será cada un segundo.
 * 
 * Al finalizar el la operación completa debe imprimir: ‘proceso completo’ y también mostrar
 * la cantidad de palabras totales
 * Aclaracion: no usar variables globales y clases y ejecutar con NodeJS (no tsc)
 */

// funcion de espera
const esperar = ret => { for (let i = 0; i < ret * 3e6; i++); }

// muestra las palabras en orden a partir de un texto
const mostrarPalabras = (texto, tiempo, cantidadPalabras, callback) => {
    
    if(callback.error){
        cantidadPalabras = 0;
    } 

    tiempo = tiempo || 1000; //Si tiempo no viene definido le asigno un valor default (1000 ms).

    try {
        let lista = texto.split(' '); //Armo un arreglo con las palabras del texto separádolas por los espacios que contiene.
        
        for(var i=0; i<lista.length; i++){
            /*
                Por cada palabra que haya en la lista:
                    * La imprimo en consola
                    * Espero el tiempo definido
                    * Sumo uno al contador general.
            */
            console.log(lista[i]);
            esperar(tiempo);
            cantidadPalabras++;
        } 

        callback(error,cantidadPalabras);

    } catch (error) {
        callback(error,cantidadPalabras);
    }

}

let texto1 = 'primer texto';
let texto2 = 'curso backend de coderhouse';
let texto3 = 'probando llamadas asincronas en nodejs';
const tiempo = 500;

mostrarPalabras(texto1, tiempo, 0, (error, totalPalabras) => {
    mostrarPalabras(texto2, '', totalPalabras, (error, totalPalabras) => { /*En esta línea no defino valor para tiempo para demostrar que se asigna el valor por default*/
        mostrarPalabras(texto3, tiempo, totalPalabras, (error, totalPalabras) => {
            console.log('Proceso terminado, cantidad de palabras:', totalPalabras);
        });
    });
});
