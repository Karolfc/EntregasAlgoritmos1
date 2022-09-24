const Listas = require('./Funcion4');

const lista1 = ['harina', 'huevos', 'levadura', 'zanahoria', 'trigo'];
const lista2 = ['huevos', 'bowl', 'agua', 'zanahoria', 'huevos'];

 
var repetido = lista1.filter(x => lista2.indexOf(x) !== -1)
 

test('Ordenar repetidos', () => {
    expect(repetido).toEqual(["huevos", "zanahoria"]);
    console.log(repetido);
})