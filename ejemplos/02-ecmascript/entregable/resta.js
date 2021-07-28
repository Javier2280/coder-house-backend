"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _numero1, _numero2, _resultadoOperacion;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resta = void 0;
class Resta {
    constructor(a, b) {
        //Creo las variables privadas que almacenaran los valores de entrada.
        _numero1.set(this, void 0);
        _numero2.set(this, void 0);
        //Creo la variable privada que almacenará el valor de salida.
        _resultadoOperacion.set(this, void 0);
        //Declaro el constructor de la clase
        __classPrivateFieldSet(this, _numero1, a);
        __classPrivateFieldSet(this, _numero2, b);
        __classPrivateFieldSet(this, _resultadoOperacion, 0);
    }
    resultado() {
        //Realizo la operación entre los parametros de entrada, guardándo el resultado en el parámetro de salida
        __classPrivateFieldSet(this, _resultadoOperacion, __classPrivateFieldGet(this, _numero1) - __classPrivateFieldGet(this, _numero2)
        //Devuelvo el resultado de la operación
        );
        //Devuelvo el resultado de la operación
        return __classPrivateFieldGet(this, _resultadoOperacion);
    }
}
exports.Resta = Resta;
_numero1 = new WeakMap(), _numero2 = new WeakMap(), _resultadoOperacion = new WeakMap();
