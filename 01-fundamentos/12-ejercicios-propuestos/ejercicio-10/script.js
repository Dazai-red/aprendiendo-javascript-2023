/* 
   10 - Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.
*/

const colores = ["azul", "amarillo", "rojo", "verde", "rosa"];
// let seEncuentra=false;

let respuesta = prompt('Introduce un color para ver si esta en el array').toLowerCase();

/* for (const color of colores) {
    if(color === respuesta)
        seEncuentra=true;
} */

// Es más simple usar el metodo indexOF

if(colores.indexOf(respuesta) != -1){
    alert(`${respuesta} se encuentra dentro del array de colores`);
}else{
    alert(`${respuesta} no se encuentra dentro del array de colores`);
}

// seEncuentra ? alert('Se encuentra dentro del array de colores') : alert('No se encuentra dentro del array de colores');