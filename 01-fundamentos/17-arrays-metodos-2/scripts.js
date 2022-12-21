/* 

    CALLBACK: Un callback no es más que una función dentro
    de otra. Por comodidad y legibilidad se utilizan las 
    funciones flecha de ECMA6

    Array - Métodos II

    Array.from(iterable) - Convierte en array el elemento iterable 
    (se suele usar con palabras, y nodos del DOM)

    .sort([callback]) - Ordena los elementos de un array 
    alfabéticamente(valor Unicode), si le pasamos un callback
    los ordena en función del algoritmo que le pasemos. 
    (para ordenar números es necesario pasarle un callback)

    .forEach(callback(currentValue, [index])) - ejecuta la
    función indicada una vez por cada elemento del array.
    Es una forma más corta de usar for of / for in a la vez

    .some(callback) -  Comprueba si al menos un elemento del
    array cumple la condición

    .every(callback) - Comprueba si todos los elementos del 
    array cumplen la condición

    .map(callback) - Transforma todos los elementos del array 
    y devuelve un nuevo array.

    .filter(callback) - Filtra todos los elementos del array
    que cumplan la condición y devuelve un nuevo array

    .reduce(callback) - Reduce todos los elementos del array
    a un único valor

*/

let word = 'Hola mundo'

console.log(Array.from(word));
// Es lo mismo hacerlo de esta forma
console.log(word.split(''));
// Con split recordemos que separa segun el parametro que le pasemos
console.log(word.split(' '));

// Un ejemplo usando el DOM sería coger todos los enlaces de una página y convertirlos a un array
// cuando seleccionamos etiquetas html lo que tenemos son nodos utilizaremos from para pasarlo a arrays

/* const links = document.querySelectorAll('a');
console.log(links);
console.log(Array.from(links)); */

const letters = ['b','c','z','a']
console.log(letters.sort());

// SORT

/* 
    como vemos sort ordena por el valor unicode cosa que normalmente
    no vamos a querer, para ello podemos pasarle callbacks haciendo uso
    de algoritmos de ordenación  
*/

let numbers = [1,8,100,300,3]
console.log(numbers.sort());


/* 
    sort y otros callbacks de metodos de arrays trabajan con pares
    se suelen llamar a esos pares a y b pero podemos poner lo que 
    queramos.

    El algoritmo funciona de esta forma:
    Recorre el array a través de pares a sería 1 y b sería 8 en la
    primera vuelta del bucle resta 1-8= 7 si a-b da un valor > 0
    lo que determina es que a es mayor que b. Si da 0 a=b y si
    a-b da un resultado menor que 0 pues a es < que b
*/

// ordena de menor a mayor
console.log(numbers.sort((a,b)=>a-b));
// ordena de mayor a menor
console.log(numbers.sort((a,b)=>b-a));

/* 
    function menorMayor(a,b){
        if (a-b < 0) return -1;
        if (a-b > 0) return 1;
        if(a == b) return 0;
    }
*/

/* 
    function mayorMenor(a,b){
        if (b-a < 0) return -1;
        if (b-a > 0) return 1;
        if(b == a) return 0;
    }
*/

// FOREACH

numbers = [12,25,47,84,98];

// Si solo queremos recorrer los valores podriamos hacerlo de esta forma:
numbers.forEach((number)=>console.log(number));

// Si queremos recorrer su indice y valor lo haríamos de esta forma:
numbers.forEach((number,index)=>
    console.log(`[${index}] tiene de valor ${number}`)
);

// SOME Y EVERY (los dos juntos porque son muy parecidos)

const words = ['HTML', 'CSS', 'JavaScript', 'PHP'];

console.log(words.some(word => word.length>3));
console.log(words.every(word => word.length>3));

// MAP

numbers = [12,25,47,84,98];
console.log(numbers)
console.log('Números multiplicados por 2: ')
numbers.map(number => console.log(number*2));
// Sería lo mismo que hacer 
/* for(const number of numbers){
    console.log(number*2);
} */

// tambien podemos guardarlo en un nuevo array de esta forma:
console.log()
const numbersBy2 = numbers.map(number => number * 2);
console.log('números multiplicados por 2 es: ')
console.log(numbersBy2);

// map es muy util cuando trabajemos con el dom, no necesariamente tienen que ser operaciones matematicas


// FILTER

numbers = [12,25,47,84,98];
console.log()
console.log(numbers)
const numbersGreaterThan40 = numbers.filter(number => number>40);
console.log('Números mayores que 40 son: ')
console.log(numbersGreaterThan40);

// Filter es muy util trabajando con el DOM para filtrar etiquetas que tengan una clase en concreto o id



// REDUCE

numbers = [1,2,3,4,5];
console.log(numbers);
console.log('La suma de todos los números es: ')
console.log(numbers.reduce((a,b)=>a+b));

console.log()
console.log()
console.log()

// otro ejemplo con reduce
// creo un array con objetos que contienen propiedades name con el nombre del usuario y online true o false
const users = [
    {
        name: 'user 1',
        online: true
    },
    {
        name: 'user 2',
        online: true
    },
    {
        name: 'user 3',
        online: false
    },
    {
        name: 'user 4',
        online: true
    },
    {
        name: 'user 5',
        online: false
    },
    {
        name: 'user 6',
        online: true
    },
]

// si escribimos esto así nos aparecera un error de not a number
let usersOnline = users.reduce((cont, user) => {
    if(user.online) cont++
    return cont
})
console.log(`Hay ${usersOnline} usuarios conectados.`)

// para solucionarlo en el corchete escribimos una coma y el número por el que va a comenzar el contador
usersOnline = users.reduce((cont, user) => {
    if(user.online) cont++
    return cont
},0)
console.log(`Hay ${usersOnline} usuarios conectados.`)





