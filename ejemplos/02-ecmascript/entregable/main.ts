/* 
Crear dos funciones llamadas 'operación' y 'operaciones'. 

'operación' recibirá dos números y un string con el nombre de la operación a efectuar entre ellos: 'suma' ó 'resta' y cargará dinámicamente un módulo para realizar dicho cálculo. 

'operaciones' llamará a 'operacion' con los casos de prueba. 
'operacion' deberá devolver el resultado a operaciones a través de una promesa.

Los cálculos habilitados estarán definidos en archivos separados empleado clases donde los argumentos de entrada se guardarán en propiedades instancia privadas (#) y tendrán un método 'resultado' que hará efectiva la operación. 

Este debe ser un proyecto que utilice typescript, async await, funciones flecha y tipado en todos sus módulos.
*/

async function _operacion(a: number, b: number, operacion: string) {
    // importar el modulo con await import() y realizar la operacion
    let resultado;

    try {
        let modulo = await import(`./${operacion}`);

        if (operacion == 'suma') {
            let sumar = new modulo.Suma(a, b);
            resultado = sumar.resultado();
        } else if (operacion == 'resta') {
            let restar = new modulo.Resta(a, b);
            resultado = restar.resultado();
        } else {
            resultado = 'Operación no reconocida';
        }
    } catch (error) {
        resultado = error;
    }


    return Promise.resolve(resultado);

}

// ejecuto pasando los operandos y el tipo de operacion
async function _operaciones() {
    console.log(await _operacion(22, 4, 'suma'));
    console.log(await _operacion(19, 80, 'resta'));
}

_operaciones();
