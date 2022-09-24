const combinar = require('./Funcion1');

const Array1 = ['perro', 'gato', 'jirafa', 'tigre', 'nutria', 'canario', 'pinguino'];
const Array2 = ['1', '2', '3', '4', '5', '6'];

let [l, s] = Array1.length > Array2.length ? [Array1, Array2] : [Array2, Array1];
const Array3 = Array.from({length: l.length * 2}).map((_, i) => i%2==0 ? l[i/2] : s[Math.ceil(i/2)-1]).filter(el => el);

test('combinar los arreglos', () => {
    expect(Array3).toEqual(['perro', '1','gato', '2', 'jirafa', '3', 'tigre', '4', 'nutria', '5', 'canario', '6', 'pinguino']);
    console.log(Array3);
    
})

////
