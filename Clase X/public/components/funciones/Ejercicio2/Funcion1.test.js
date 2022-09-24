"use strict";
const paresimpares = require('./Funcion2');
const numbers = [19, 14, 2, 1, 79, 20, 9, 11];
const pares = numbers.filter(x => x % 2 === 0);
const impares = numbers.filter(x => x % 2 !== 0);
const filtro = [pares, impares];
test('pares', () => {
    expect(pares).toEqual([80, 20, 42]);
    console.log(pares);
});
test('impares', () => {
    expect(impares).toEqual([65, 35]);
    console.log(pares);
});
test('filtro', () => {
    expect(filtro).toEqual([[80, 20, 42], [65, 35]]);
    console.log(filtro);
});
