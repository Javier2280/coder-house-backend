/**
 * Realizar una funcion que devuelva numeros aleatorios entre un minimo y maximo
 * configurable y que muestre la cantidad de valores que vamos solicitando junto a la
 * fecha y hora del pedido.
 * {orden: 1, numero: 5, fyh: dd/mm/yy hh:mm:ss}
 * AVISO: No se permite usar variables globales ni contadores para mantener el contador.
 */

function obtenerRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function* hacerID(min, max) {
    let resultado = [];
    let contador = 0;

    while(true){
        yield resultado={orden: contador++, numero: obtenerRandom(min, max), fyh: new Date().toLocaleString};
    }
}

let obtenerId = hacerID(5,5000);



// completar el codigo...

console.log(obtenerId.next().value);
console.log(obtenerId.next().value);
console.log(obtenerId.next().value);
console.log(obtenerId.next().value);
console.log(obtenerId.next().value);
console.log(obtenerId.next().value);
console.log(obtenerId.next().value);
console.log(obtenerId.next().value);
console.log(obtenerId.next().value);
console.log(obtenerId.next().value);