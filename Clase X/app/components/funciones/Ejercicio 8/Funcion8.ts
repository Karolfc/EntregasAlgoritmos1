/**
 * Ejercicio 8
 * dado un arreglo de ideas, donde estas pueden ser buenas o malas, imprima un mensaje con las
 * siguientes condiciones:
 * - si el arreglo no contiene ninguna buena idea entonces el mensaje es "fallo"
 * - si el arreglo contiene 1 o 2 buenas ideas entonces el mensaje es "publicar"
 * - si el arreglo contiene más de 2 buenas ideas entonces el mensaje es "fantastico"
 */

 function Funcion8(){
    var listaIdeas = ["Buena", "Mala", "Mala","Buena", "Mala"];
    var contador = 0;
    var start = 0;
    
    let mensaje = "";
    
    while ((start = listaIdeas.indexOf("Buena", start) + 1) > 0) {
        contador++;
        }   if(contador === 0){mensaje = "Fallo"}
            if(contador === 1 || contador === 2){mensaje = "Publicar"}
            if(contador > 2){mensaje = "Fantastico"}
    
    console.log(mensaje);
    return mensaje;
}

module.exports = Funcion8;