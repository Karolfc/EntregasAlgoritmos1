const Contenedor = require('./Funcion5');

const universo = ['amarillo', 'azul', 'rojo', 'verde', 'naranja', 'violeta'];
const conjunto = ['verde', 'naranja', 'violeta'];

const contiene = universo.some(r=> conjunto.includes(r))

test('verificar', () => {
    expect(contiene).toEqual(true);
    console.log(contiene)
})

