"use strict";
const dados = require('./Funcion10');
const min = 1;
const max = 6;
const dado1 = Math.round(Math.random() * (+max - +min)) + +min;
const dado2 = Math.round(Math.random() * (+max - +min)) + +min;
const suma = dado1 + dado2;
test('Lanzar dados', () => {
    expect(dado1).toBeGreaterThanOrEqual(1);
    expect(dado1).toBeLessThanOrEqual(6);
    console.log("Dado1 = ", dado1);
    expect(dado2).toBeGreaterThanOrEqual(1);
    expect(dado2).toBeLessThanOrEqual(6);
    console.log("Dado2 = ", dado2);
});
test('Sumar Dados', () => {
    expect(suma).toBeGreaterThanOrEqual(2);
    expect(suma).toBeLessThanOrEqual(12);
    console.log("Suma de dados =", suma);
});
