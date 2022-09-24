"use strict";
/**
 * Ejercicio 2
 * Dado un arreglo de numeros, devuelva un arreglo con dos listas en su interios,
 * la primera contendrá los números pares del arreglo y la segunda los impares
 */
function Funcion2() {
    const numbers = [19, 14, 2, 1, 79, 20, 9, 11];
    const pares = numbers.filter(x => x % 2 === 0);
    const impares = numbers.filter(x => x % 2 !== 0);
    const filtro = [pares, impares];
    console.log(filtro);
}
module.exports = Funcion2;
