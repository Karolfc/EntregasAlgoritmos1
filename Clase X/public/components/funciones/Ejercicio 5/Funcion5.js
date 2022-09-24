"use strict";
/**
 * Ejercicio 5
 * cree una función que reciba dos arreglos y verifique que el primero contenga todos los elementos del segundo
 */
function Funcion5() {
    const universo = ['amarillo', 'azul', 'rojo', 'verde', 'naranja', 'violeta'];
    const conjunto = ['verde', 'naranja', 'violeta'];
    const contiene = universo.some(r => conjunto.includes(r));
    console.log(contiene);
}
module.exports = Funcion5;
