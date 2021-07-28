/**
 * Desafio generico - tiempo 5 minutos
 * Completar el desafio generico obteniendo la informacion solicitada
 * 
 * A) Los nombres de los productos en un string separados por comas.
 * B) El precio total
 * C) El precio promedio
 * D) El producto con menor precio
 * E) El producto con mayor precio
 * F) Con los datos de los puntos 1 al 5 crear un objeto y representarlo por consola
 */
let productos = [
    { id: 1, nombre: 'Escuadra', precio: 323.45 },
    { id: 2, nombre: 'Calculadora', precio: 234.56 },
    { id: 3, nombre: 'Globo Terraqueo', precio: 45.67 },
    { id: 4, nombre: 'Paleta Pintura', precio: 456.78 },
    { id: 5, nombre: 'Reloj', precio: 67.89 },
    { id: 6, nombre: 'Agenda', precio: 78.90 },
]

//Bien:
const A = productos.map(el => el.nombre).join(', ')
const B = productos.reduce((acc, el) => acc + el.precio, 0).toFixed(2)
const C = (productos.reduce((acc, el) => acc + el.precio, 0) / productos.length).toFixed(2)
const D = productos.sort((a, b) => a.precio - b.precio )[0]
const E = productos.sort((a, b) => b.precio - a.precio )[0]
const F = {
    productos: A,
    precioTotal: B,
    precioPromedio: C,
    prodMenorPrecio: D,
    prodMayorPrecio: E
}

//Mal:
function obtenerResultados(lista) {
    let nombres = '';
    let precioTotal = 0;

    try {
        //console.log(lista.length);

        //Obtengo los nombres de los productos
        for (var i = 0; i < lista.length; i++) {
            // console.log(nombres);
            // console.log(lista[i].nombre);

            

            // console.log(precioTotal);
            // console.log(lista[i].precio);
            precioTotal = precioTotal + lista[i].precio;
        }
    } catch (error) {

    }

    console.log(nombres);
    console.log(math.round(precioTotal,0));

}

obtenerResultados(productos);