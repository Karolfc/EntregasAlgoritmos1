"use strict";
/**
 * ejercicio 1
 * cree una función que recibe 2 arreglos como parametros.
 * luego combina estos arreglos en uno solo, alternando sus valores.
 *
 * ejem: dados los arreglos ["h", "a", "c"] y [7, 4, 17, 10, 48],
 * la respuesta deber ser: ["h", 7, "a", 4, "c", 17, 10, 48]
 *
 * note que los arreglos pueden ser de diferente tamaños y el contenido puede ser cualquier tipo de dato
 */
function Funcion1() {
    const Array1 = ['perro', 'gato', 'jirafa', 'tigre', 'nutria', 'canario'];
    const Array2 = ['1', '2', '3', '4', '5', '6'];
    let [l, s] = Array1.length > Array2.length ? [Array1, Array2] : [Array2, Array1];
    const Array3 = Array.from({ length: l.length * 2 }).map((_, i) => i % 2 == 0 ? l[i / 2] : s[Math.ceil(i / 2) - 1]).filter(el => el);
    console.log(Array3);
}
module.exports = Funcion1;
