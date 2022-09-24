"use strict";
/**
 * Ejercicio 3
 * dado un arreglo multidimensional compuesto por varios grupos de 3 letras.
 * ordene su contenido en orden alfabetico.
 *  * las letras de cada grupo están en orden aleatorio.
 *  * cada grupo de letras tambien tiene orden aleatorio en la lista multidimensional.
 *
 * Ejem:
 * dados los grupos de letras ["e", "d", "f"], ["a", "c", "b"], ["m", "o", "n"] en ese mismo orden
 * el resultado de la función debe ser ["a", "b", "c"], ["d", "e", "f"], ["m", "n", "o"] en ese mismo orden
 */
function Funcion3() {
    const arrays = [["e", "c", "a"], ["x", "z", "y"], ["k", "j", "l"]];
    const letras1 = arrays[0].sort();
    const letras2 = arrays[1].sort();
    const letras3 = arrays[2].sort();
    const todos = [letras1, letras2, letras3];
    const ordenado = todos.sort();
    console.log(ordenado);
}
module.exports = Funcion3;
