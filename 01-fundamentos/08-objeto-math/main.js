/* 
    El objeto Math es un objeto que se utiliza para hacer operaciones Matemáticas más complejas

    al ser un objeto utiliza la nomenclatura del punto al igual que String

    Objeto estático (Tenemos que usar su nombre para utilizarlo)

    propiedades: math.E mathPi

    Metodos:
        Math.abs(x) Devuelve el valor absoluto de x

        Match.floor(x) Devuelve el entero más pequeño menor o igual a un número.

        Math.ceil(x) Devuelve el entero más grande mayor o igual que un número.

        Math.pow(x,y) Devuelve la potencia de x elavada a y

        Math.sqrt(x) Devuelve la raíz cuadrada de un número.

        ****Math.random() Genera un número pseudoaleatorio entre 0 y 1

        ****Math.round(x) Devuelve el valor de un número redondeado al entero más cercano.

        ****Math.sign(x) Devuelve el signo de la x, que indica si x es positivo, negativo o cero.


https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math

*/

console.log(Math.E);
console.log(Math.PI);

let num = 5.3;

// el número absoluto es el número sin su signo
console.log(Math.abs(num));
console.log(Math.abs(-num));

console.log(Math.floor(5.9));
console.log(Math.floor(5.4));

console.log(Math.ceil(5.9));
console.log(Math.ceil(5.4));

console.log(Math.pow(2,3));

console.log(Math.random());

console.log(Math.random()*100); // para sacar un número entre 0 y 100
console.log(Math.floor(Math.random()*100)); // para sacar un número entre 0 y 100

// Para generar un número entre un minimo y un maximo
// Math.random * (max-min)+(min); 
console.log(Math.floor(Math.random()*(50-20)+(20))); // numero aleatorio entre 20 y 50

// Muy util en condicionales:
 //Math.sign(num) si es negativo -1 | si es 0 devuelve 0 | si es positivo 1

console.log(Math.sign(0));

console.log(Math.sign(50)); 

console.log(Math.sign(-40)); 

console.log("Raiz cuadrada de 9: "+Math.sqrt(9));