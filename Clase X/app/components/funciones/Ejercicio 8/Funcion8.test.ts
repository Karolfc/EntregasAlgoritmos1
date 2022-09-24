const clasificacion = require('./Funcion8');

var listaIdeas = ["Mala", "Buena", "Buena","Mala", "Mala"];

var contador = 0;
var start = 0;

let mensaje = "";

while ((start = listaIdeas.indexOf("Buena", start) + 1) > 0) {
    contador++;
}   if(contador === 0){mensaje = "Fallo"}
    if(contador === 1 || contador === 2){mensaje = "Publicar"}
    if(contador > 2){mensaje = "Fantastico"}

test('La idea es', () => {
    expect(mensaje).toEqual("Publicar");
    console.log(mensaje)
})