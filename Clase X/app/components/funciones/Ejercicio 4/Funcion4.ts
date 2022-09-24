/**
 * Ejercicio 4
 * dadas dos listas de palabras, retorne una unica lista en la cual se encuentren las palabras
 * que existan en las dos listas iniciales, además ordene esta última lista de manera que las
 * palabras repetidas más veces en ambos arreglos se encuentren al inicio de la lista.
 *
 * ejem:
 * ["rat", "dog", "cat", "parrot", "cat"] y ["cat", "lizard", "rat", "cat"] devolverán ["cat", "rat"]
 */

 function Funcion4(){

    const lista1 = ['harina', 'huevos', 'levadura', 'zanahoria', 'trigo'];
    const lista2 = ['huevos', 'bowl', 'agua', 'zanahoria', 'huevos'];

    const repetido = lista1.filter(x => lista2.indexOf(x) !== -1)

    console.log(repetido);
}

module.exports = Funcion4;