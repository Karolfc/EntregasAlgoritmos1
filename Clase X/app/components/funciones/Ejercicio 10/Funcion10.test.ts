const dados = require('./Funcion10');
    const min=1;
    const max=6;

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
})

test('Sumar Dados', () => {
    expect(suma).toBeGreaterThanOrEqual(2);
    expect(suma).toBeLessThanOrEqual(12);
    console.log("La suma del lanzamiento de los dados es =", suma)
})


var a = 0; 
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;
var g = 0; 
var h = 0;
var i = 0;
var j = 0;
var k = 0;

for(i=1;i<=30;i++){
    
    const dado1 = Math.round(Math.random() * (max - min)) + min;
    const dado2 = Math.round(Math.random() * (max - min)) + min;

    const suma = dado1 + dado2;
    switch(suma){
        case 1:a++;
            break;
        case 2:b++;
            break;
        case 3:c++;
            break;
        case 4:d++;
            break;
        case 5:e++;
            break;
        case 6:f++;
            break;
        case 7:g++;
            break;
        case 8:h++;
            break;
        case 9:i++;
            break;
        case 10:j++;
            break;
        case 11:k++;
            break;
    }
}

const Results = ["2:", a, "3:", b, "4:", c, "5:", d, "6:", e, "7:", f, "8:", g, "9:", h, "10:", i, "11:", j, "12:", k]

test('Resultados de las 30 sumas', () => {
    console.log(Results);
})