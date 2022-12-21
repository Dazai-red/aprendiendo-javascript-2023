/* 
    Spread operator (operador de expansión) lo que hace es expandir el contenido de un array.
    su sintaxis es ...
*/

let numbers = [-12, 2, 3, 23, 43, 2, 3];

console.log(numbers);
// muestra cada valor por separado
console.log(...numbers);

// Casos donde podemos usar el spread operator: 




// Enviar elementos de un array a una función:

const addNumbers = (a,b,c) => {
    console.log(a+b+c)
}

let numbersToAdd = [1,2,3];
//si tratamos de añadir el array a la función nos aparecera un error 
addNumbers(numbersToAdd);
// para solucionarlo:
addNumbers(...numbersToAdd);

// Añadir un array a otro array:

let users = ['Javier','David','Rosa','Juan','Mercedes'];

let newUsers = ['Marta','Jaime','Laura'];

// podemos añadirlos de la forma tradicional (tambíen podríamos usar un bucle for)

//users.push(newUsers[0],newUsers[1],newUsers[2])

console.log(users);

// afortunadamente tenemos el spread operator como solución escribiendo mucho menos código
users.push(...newUsers);

// podemos utilizar otros metodos de arrays y funcionaría igual
//users.splice(2,0,...newUsers);

console.log(users);


// Copiar arrays:
// lo lógico sería pensar que esto funciona:
let arr1 = [1,2,3,4];
//let arr2 = [arr1]
// como vemos esto no funciona porque nos crea un array dentro de otro
//console.log(arr2);

//para hacerlo bien:
//let arr2 = arr1;
//console.log(arr2)
// pero hay ciertas ocasiones donde no podemos hacerlo así, para esas ocasiones:
let arr2 = [...arr1];
console.log(arr2);


// Concatenar arrays:

let numeros1 = [1,2,3,4,5];
let numeros2 = [6,7,8];

// esta es una opción totalmente valida
//let arrayConcat = numeros1.concat(numeros2);
// pero podemos hacerlo tambien así:
let arrayConcat = [...numeros1, ...numeros2];

console.log()
console.log()
console.log(arrayConcat);


// Enviar un número indefinido de argumentos a una función (parámetros REST):

const restParams = (...numbers) =>{
    console.log(numbers)
}

restParams();
restParams(1);
restParams(1,2,3,4);
// le pasamos el número de parametros que necesitemos
restParams(1,9,0,4,5,6,7,7,7,8,8,8,8,8,8,8);


// Librería Math
console.log(Math.max(1,2,3));

numbers = [1,2,3,4];
// esto nos da error porque no puede sacar el maximo de un array
console.log(Math.max(numbers));

//para solucionarlo:
console.log(Math.max(...numbers));



// Eliminar elementos duplicados de un array
numbers = [1,2,2,2,2,2,39,40,50,30]
// set no permite elementos duplicados, pero deja de ser un array y pasa a ser un objeto set
console.log(new Set(numbers))
// para convertirlo en un array: 
console.log([...new Set(numbers)])

