/*
Consigna: 
    * Crear dos funciones llamadas 'operación' y 'operaciones'. 
    * 'operación' recibirá dos números y un string con el nombre de la operación a efectuar entre ellos: 'suma' ó 'resta' y cargará dinámicamente un módulo para realizar dicho cálculo. 
    * 'operaciones' llamará a 'operacion' con los casos de prueba. 
    * 'operacion' deberá devolver el resultado a operaciones a través de una promesa.
    * Los cálculos habilitados estarán definidos en archivos separados empleado clases donde los argumentos de entrada se guardarán en propiedades instancia privadas y tendrán un método 'resultado' que hará efectiva la operación. 
    * Este debe ser un proyecto de typescript que utilice clases, dynamic import, Promises, async await, funciones flecha y tipado en todos sus módulos. 
    * Debe ser compilado para generar un archivo javascript ejecutable por Node.js.
*/

//Función asincrónica "operacion" que recibe como parámetros los operandos y el operador.
async function operacion(a: number, b: number, operacion: string) {
    let resultado;

    try {
        //Importación dinámica de la clase necesaria para la operación
        let modulo = await import(`./${operacion}`);

        //Si es una suma...
        if (operacion == 'suma') {
            //Instancio la clase y ejecuto la operación guradándo el resultado en la variable correspondiente.
            let sumar = new modulo.Suma(a, b);
            resultado = sumar.resultado();
        } 
        
        //Si es una resta...
        if (operacion == 'resta') {
            //Instancio la clase y ejecuto la operación guradándo el resultado en la variable correspondiente.
            let restar = new modulo.Resta(a, b);
            resultado = restar.resultado();
        }
    } catch (error) {
        //Manejo del error...
        resultado = error;
    }

    //Devuelvo el resultado a través de una promesa.
    return Promise.resolve(resultado);

}

// Ejecuto la función pasando los operandos y la operación a realizar
async function operaciones() {
    console.log(await operacion(22, 4, 'suma'));
    console.log(await operacion(19, 80, 'resta'));
}

//Llamo a la función para mostrar los resultados.
operaciones();