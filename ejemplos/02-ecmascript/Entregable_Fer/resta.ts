export class Resta {
    //Creo las variables privadas.
    #numero1: number;
    #numero2: number;
    #resultadoOperacion: number;

    constructor(a: number, b: number) {
       //Declaro el constructor de la clase
       this.#numero1 = a;
       this.#numero2 = b;

       this.#resultadoOperacion = 0;
    }

    resultado(): number {
        //Realizo la operación
        this.#resultadoOperacion = this.#numero1 - this.#numero2;

        //Devuelvo el resultado
        return this.#resultadoOperacion;
    }
}