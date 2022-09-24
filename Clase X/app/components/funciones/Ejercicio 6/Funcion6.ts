/**
 * Ejercicio 6
 * cree una función que a partir de una arreglo de número y letras, ordene el arreglo con todas las
 * letras en las primeras posiciones (ordenadas alfabeticamente) y luego ponga todos los número
 * ordenados ascendentemente.
 *
 * ejem:
 * el arreglo ["b", 6, "a", "q", 7, 2] retornará ["a", "b", "q", 2, 6, 7]
 */

 function Funcion6(){

    const array = ['L', 19, 'K', 14, 2, 'J']

    const letra1 = array.slice(0, 1);
    const letra2 = array.slice(2, 3);
    const letra3 = array.slice(5, 6);

    const string = letra1.concat(letra2, letra3);

    const ordenado1 = string.sort();
    const numeros = array.filter(Number);
    const ordenado2 = numeros.sort((a:any,b:any)=>a-b);
    const sorted = ordenado1.concat(ordenado2);

    console.log(sorted);
    return (sorted);
}

module.exports = Funcion6;