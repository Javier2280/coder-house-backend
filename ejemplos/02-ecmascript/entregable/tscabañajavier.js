"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//Función asincrónica "operacion" que recibe como parámetros los operandos y el operador.
function operacion(a, b, operacion) {
    return __awaiter(this, void 0, void 0, function* () {
        let resultado;
        try {
            //Importación dinámica de la clase necesaria para la operación
            let modulo = yield Promise.resolve().then(() => __importStar(require(`./${operacion}`)));
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
        }
        catch (error) {
            //Manejo del error...
            resultado = error;
        }
        //Devuelvo el resultado a través de una promesa.
        return Promise.resolve(resultado);
    });
}
// Ejecuto la función pasando los operandos y la operación a realizar
function operaciones() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(yield operacion(22, 4, 'suma'));
        console.log(yield operacion(19, 80, 'resta'));
    });
}
//Llamo a la función para mostrar los resultados.
operaciones();
