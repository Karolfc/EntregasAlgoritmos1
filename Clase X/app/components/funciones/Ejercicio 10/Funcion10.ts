/**
 * Ejercicio 10
 * cree una funcion que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para
 * obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el
 * resultado de lanzar dos dados y anotar en un objeto el número de apariciones de dicha suma.
 * ejemplo del resultado:
 * const result = { "7": 3, "2": 1 }
 */

function Funcion10dados(){
    const min=1;
    const max=6;

    const dado1 = Math.round(Math.random() * (max - min)) + min;
    const Dado2 = Math.round(Math.random() * (max - min)) + min;

    const suma = dado1 + Dado2;

    console.log(suma);

    return suma;
}

function Funcion10sumdata(){
    var dos = 0; 
    var tres = 0;
    var cuatro = 0;
    var cinco = 0;
    var seis = 0;
    var siete = 0;
    var ocho = 0; 
    var nueve = 0;
    var diez = 0;
    var once = 0;
    var doce = 0;

    var i

    for(i=1;i<=30;i++){
        const dado1 = Math.round(Math.random() * (max - min)) + min;
        const Dado2 = Math.round(Math.random() * (max - min)) + min;

        const suma = dado1 + Dado2;
        switch(suma){
            case 1:dos++; break;
            case 2:tres++; break;
            case 3:cuatro++; break;
            case 4:cinco++; break;
            case 5:seis++; break;
            case 6:siete++; break;
            case 7:ocho++; break;
            case 8:nueve++; break;
            case 9:diez++; break;
            case 10:once++; break;
            case 11:doce++; break;
        }
    }

    const Results = ["2:", dos, "3:", tres, "4:", cuatro, "5:", cinco, "6:", seis, "7:", siete, "8:", ocho, "9:", nueve, "10:", diez, "11:", once, "12:", doce]

    console.log(Results);
}

module.exports = Funcion10dados;
module.exports = Funcion10sumdata;