/* 
    Arrays

    Son estructuras que nos permiten almacenar varios 
    datos y agruparlos.

    Se pueden llenar con cualquier tipo de dato válido 
    en JavaScript y deben ir separados por comas.

    Se pueden mezclar tipos de datos, pero no es 
    recomendable (son similares a las listas en Java o python).

    Se declkaran con llaves cuadradas o corchetes []

    Pueden declararse vacíos o con un contenido ya establecido.

    let numero = 5;

    let array = [];

    let numeros = [1,2,3,4,5];

    Cada uno de los elementos podrá ser identificado 
    por su índice, es decir su posición.

    Los índices empiezan a contar desde 0
*/

let numeros=[1, 2, 3, 4, 5, 6, 7];

let palabras=['hola', 'estamos', 'trabajando', 'con', 'arrays'];

let booleans=[true, false, false];

console.log(numeros);

console.log(numeros[0]);

console.log('La suma de '+numeros[0]+'+'+numeros[1]+'='+(numeros[0]+numeros[1]));

console.log(`La longitud de la palabra: '${palabras[4]}' es: ${palabras[4].length}`);




