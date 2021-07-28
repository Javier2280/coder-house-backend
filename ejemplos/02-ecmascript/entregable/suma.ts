export class Suma {
    //Creo las variables privadas que almacenaran los valores de entrada.
    #numero1: number;
    #numero2: number;

    //Creo la variable privada que almacenará el valor de salida.
    #resultadoOperacion: number;

    constructor(a: number, b: number) {
       //Declaro el constructor de la clase
       this.#numero1 = a;
       this.#numero2 = b;

       this.#resultadoOperacion = 0;
    }

    resultado(): number {
        //Realizo la operación entre los parametros de entrada, guardándo el resultado en el parámetro de salida
        this.#resultadoOperacion = this.#numero1 + this.#numero2

        //Devuelvo el resultado de la operación
        return this.#resultadoOperacion;
    }
}