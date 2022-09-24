"use strict";
/**
 * Ejercicio 10
 * cree una funcion que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para
 * obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el
 * resultado de lanzar dos dados y anotar en un objeto el número de apariciones de dicha suma.
 * ejemplo del resultado:
 * const result = { "7": 3, "2": 1 }
 */
function Funcion10() {
    const min = 1;
    const max = 6;
    const Dado1 = Math.round(Math.random() * (+max - +min)) + +min;
    const Dado2 = Math.round(Math.random() * (+max - +min)) + +min;
    const suma = Dado1 + Dado2;
    return suma;
}
module.exports = Funcion10;
