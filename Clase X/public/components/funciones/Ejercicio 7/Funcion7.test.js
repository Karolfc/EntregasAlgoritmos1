"use strict";
const divisibilidad = require('./Funcion7');
let output = "";
for (let i = 1; i <= 20; i++) {
    if (i % 3 !== 0 && i % 5 !== 0)
        output += i + " ";
    if (i % 3 === 0)
        output += "Fizz ";
    if (i % 5 === 0)
        output += "Buzz ";
}
test('Numeros enteros', () => {
    expect(output).toEqual("1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 Fizz Buzz 16 17 Fizz 19 Buzz ");
    console.log(output);
});
