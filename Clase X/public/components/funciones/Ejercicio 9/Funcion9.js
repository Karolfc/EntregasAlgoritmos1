"use strict";
/**
 * Ejercicio 9
 * calcular el factorial de un número
 */
function Funcion9() {
    var num = 3;
    var i;
    var total = 1;
    for (i = 1; i <= num; i++) {
        total = total * i;
    }
    return total;
}
module.exports = Funcion9;
