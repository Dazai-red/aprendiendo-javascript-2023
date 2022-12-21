/* 
    Los bucles se usan cuando queremos que un trozo de código se repita.
    
    Existen bucles determinados e indeterminados.

    Los determinados se usan cuando especificamos el número de veces 
    que se va a repetir.
        Imprimir números del 1 al 10.
    
    Los indeterminados se usan cuando no sabemos el número de veces
    que se van a repetir.
        Repetir mensaje de introducir contraseña.

    La estructura de un bucle es siempre la misma

        bucle{
            código a ejecutar
        }

    Bucle WHILE

    Es un bucle indeterminado ya que no sabemos cuantas vueltas dará durante
    su ejecución.

    Su sintaxis se compone de una única parte:
        * Condición de entrada
    
    while(condición){ //Mientras la condición sea verdadera se ejecutara tantas veces el código
        código a ejecutar
    }

    Dentro del código deberemos de controlar el cierre de la condición o crearemos un bucle infinito

    Si la condición no se cumple no entrara siquiera en el bucle.


    bucle DO WHILE

    Es un bucle indeterminado ya que no sabemos cuantas vueltas dará durante
    su ejecución.

    Su sintaxis se compone de dos partes:
        Código a ejecutar
        condición de entrada

    do{
        código a ejecutar
    }while(condición)

    En este bucle, siempre se ejecutara el código almenos una vez (se cumpla o no la condición), al igual
    que en el bucle while deberemos de controlar la condición para poder salir
    del bucle o crearemos un bucle infinito.

*/

let pass = 'hola';

/* while(pass!='hola'){
    pass = prompt('Introduce tu conntraseña: ');
}

console.log('fin del bucle'); */

do {
    pass = prompt('Introduce tu contraseña: ');
}while(pass!='hola');