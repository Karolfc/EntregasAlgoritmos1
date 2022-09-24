const Ord = require('./Funcion6');

const array = ['L', 19, 'K', 14, 2, 'J']

const letra1 = array.slice(0, 1);
const letra2 = array.slice(2, 3);
const letra3 = array.slice(5, 6);

const string = letra1.concat(letra2, letra3);

const ordenado1 = string.sort();


const numeros = array.filter(Number);

const ordenado2 = numeros.sort((a:any,b:any)=>a-b);

const sorted = ordenado1.concat(ordenado2);

test('Sort', () => {
    expect(sorted).toEqual(['J', 'K', 'L', 2, 14, 19]);
    console.log(sorted)
})