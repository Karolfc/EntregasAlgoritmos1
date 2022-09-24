"use strict";
/**
 * Ejercicio 7
 * Print integers 1 to N, but print “Fizz” if an integer is divisible by 3, “Buzz” if an integer is divisible
 * by 5, and “FizzBuzz” if an integer is divisible by both 3 and 5
 */
function Funcion7() {
    let output = "";
    for (let i = 1; i <= 20; i++) {
        if (i % 3 !== 0 && i % 5 !== 0)
            output += i + " ";
        if (i % 3 === 0)
            output += "Fizz ";
        if (i % 5 === 0)
            output += "Buzz ";
    }
    console.log(output);
    return output;
}
module.exports = Funcion7;
