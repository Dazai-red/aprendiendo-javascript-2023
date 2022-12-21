/* 
    7 - Crea 3 arrays. El primero tendra 5 números y el segundo se llamará pares y el tercero impares, ambos estarán vacíos. Después multiplica cada uno de los números del primer array por un número aleatorio entre 1 y 10, si el resultado es par guarda ese número en el array de pares y si es impar en el array de impares. Muestra por consola:
    -la multiplicación que se produce junto con su resultado con el formato 2 x 3 = 6
    -el array de pares e impares
*/

let numero, numeroAleatorio, resultado;
let numeros = [], pares = [], impares = [];

for(let i=0;i<5;i++){
    numero = Math.floor((Math.random() * (1000 - 1 + 1)) + 1);
    numeros.push(numero);
    numeroAleatorio = Math.floor((Math.random() * (10 - 1 + 1)) + 1)
    resultado = numeros[i]*numeroAleatorio;
    if(resultado%2==0)
        pares.push(numero+'x'+numeroAleatorio+'='+resultado);
    else
        impares.push(numero+'x'+numeroAleatorio+'='+resultado);
    console.log(numero+'x'+numeroAleatorio+'='+resultado);
}

console.log('Array de pares: ')
for (let num of pares) {
    console.log(num);
}
console.log('Array de impares: ')
for (let num of impares) {
    console.log(num);
}







