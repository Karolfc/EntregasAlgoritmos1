"use strict";
const orden = require('./Funcion3');
const arrays = [["e", "c", "a"], ["x", "z", "y"], ["k", "j", "l"]];
const letras1 = arrays[0].sort();
const letras2 = arrays[1].sort();
const letras3 = arrays[2].sort();
const todos = [letras1, letras2, letras3];
const ordenado = todos.sort();
test('Ordenar grupos de letras', () => {
    expect(ordenado).toEqual([["a", "c", "e"], ["j", "k", "l"], ["x", "y", "z"]]);
    console.log(ordenado);
});
