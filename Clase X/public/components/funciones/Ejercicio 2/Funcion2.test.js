"use strict";
const paresimpares = require('./Funcion2');
const numbers = [19, 14, 2, 1, 79, 20, 9, 11];
const pares = numbers.filter(x => x % 2 === 0);
const impares = numbers.filter(x => x % 2 !== 0);
const filtro = [pares, impares];
test('pares', () => {
    expect(pares).toEqual([14, 2, 20]);
    console.log(pares);
});
test('impares', () => {
    expect(impares).toEqual([19, 1, 79, 9, 11]);
    console.log(pares);
});
test('filtro', () => {
    expect(filtro).toEqual([[14, 2, 20], [19, 1, 79, 9, 11]]);
    console.log(filtro);
});
