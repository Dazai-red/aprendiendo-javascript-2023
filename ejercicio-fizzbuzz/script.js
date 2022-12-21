/* 
    Ejercicio: Escribir un programa que muestre los números del 
    1 al 100 sustituyendo los múltiplos de 3 por la palabra "fizz"
    los múltiplos de 5 por "buzz" y los múltiplos de ambos (de 3 y 5)
    por la palabra "fizzBuzz"
*/
function fizzBuzz(){
    for(let i=0;i<=10;i++){
        // es importante que el primer if sea haciendo la condición de ambos porque si no nunca entraría a este if
        if(i % 15 == 0) console.log('fizzBuzz'); // entre 15 es lo mismo que if(i % 3 == 0 && i %5== 0) console.log('fizzBuzz');
        else if (i % 3 == 0) console.log('fizz');
        else if (i %5== 0) console.log('buzz');
        else console.log(i);
    }
}

fizzBuzz();