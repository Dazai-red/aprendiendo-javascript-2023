/* bucles */

/* 

    Palabras reservadas bucles break y continue

    break - Rompe el bucle en la posición que le indiquemos.

    continue - Se salta la(s) posicion(es) que 
    le indiquemos y después continúa su ejecución

*/

let names = [ 'Paco', 'José', 'Paula', 'María' ]

console.log('Ejemplo con break: ')

for(let name of names){
    if(name=='Paula'){
        break //termina el bucle en Paula, no imprime Paula ni María
    }
    console.log(name);
}

console.log('Ejemplo con continue: ')

for(let name of names){
    if(name=='Paula'){
       continue // No imprime Paula y sigue con el resto del bucle (si imprime María)
    }
    console.log(name);
}



