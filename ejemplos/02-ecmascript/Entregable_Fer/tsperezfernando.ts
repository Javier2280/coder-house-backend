/* 
Crear dos funciones llamadas 'operación' y 'operaciones'. 

'operación' recibirá dos números y un string con el nombre de la operación a efectuar entre ellos: 'suma' ó 'resta' y cargará dinámicamente un módulo para realizar dicho cálculo. 

'operaciones' llamará a 'operacion' con los casos de prueba. 
'operacion' deberá devolver el resultado a operaciones a través de una promesa.

Los cálculos habilitados estarán definidos en archivos separados empleado clases donde los argumentos de entrada se guardarán en propiedades instancia privadas (#) y tendrán un método 'resultado' que hará efectiva la operación. 

Este debe ser un proyecto que utilice typescript, async await, funciones flecha y tipado en todos sus módulos.
*/

//Función operación
async function operacion(a: number, b: number, operacion: string) {
    var resultado;

    try {
        if (operacion == 'suma') {
            let clase = await import('./suma');
            let sumar = new clase.Suma(a, b);
            resultado = sumar.resultado();
        } else if (operacion == 'resta') {
            let clase = await import('./resta');
            let restar = new clase.Resta(a, b);
            resultado = restar.resultado();
        }
    } catch (error) {
        resultado = error;
    }

    return Promise.resolve(resultado);
}

// ejecuto pasando los operandos y el tipo de operacion
async function operaciones() {
    console.log(await operacion(86, 18, 'suma'));
    console.log(await operacion(55, 15, 'resta'));
}

operaciones();