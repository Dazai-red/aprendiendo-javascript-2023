/* Bucles  */

/* 
    Determinados

    bucle for

    Su sintaxis se compone de 3 partes
        Iniciación de variable
        Número de vueltas
        Incremento o decremento
    
    for(let i = 0;  i<= 10;  i++){
        Código a ejecutar
    }

    Un ejemplo de como funciona

    for(let i=0;i<=3;i++){
        console.log(i)
    }

    1º vuelta i=0 ¿i<=3? i=0 entonces i++ imprime 0 y i vale 1 ahora 
    2º vuelta i=1 ¿i<=3? i=1 entonces i++ imprime 1 y i vale 2 ahora 
    3º vuelta i=2 ¿i<=3? i=2 entonces i++ imprime 2 y i vale 3 ahora
    4º vuelta i=3 ¿i<=3? i=3 entonces i++ imprime 3 y i vale 4 ahora 
    5º vuelta i=4 ¿i<=3? i=3 entonces fin del bucle.

*/

for(let i=0;i<=10;i++){
    console.log(i); // imprime los números del 0 al 10
}

for(let i=10;i>=0;i--){
    console.log(i); // imprime los números del 10 al 0
}

for(let i=10;i>=0;i--){
    if(i==5){
        console.log(i); // de esta forma solo imprimiria el 5
    }
}

for(let i=10;i>=0;i--){
    if(i!=5){
        console.log(i); // de esta forma imprime los números del 10 al 0 excepto el 5. El 5 no lo imprime
    }
}
/* 
for(let i=0;i<=10;i){
    console.log(i);
} */ 

// de esta forma se hace un bucle infinito.

let numbers = [ 56, 14, 23, 37, 41, 5 ]

/* 
    si ponemos <= numbers.lenght nos saltara un error porque numbers.length
    devuelve el número de elementos del array y las posiciones empiezan desde 0
    por ende te devuelve un número más del que necesitas para recorrerlos todos */

for(let i=0;i<numbers.length;i++){
    console.log(`i vale ${i} y el valor de esa posición en el array es: ${numbers[i]}`);
}