/* 
    El flujo de un programa siempre es de arriba hacía abajo
    pero no siempre queremos que sea así.

    Existen tres tipos de condicionales:

        *Simples -> solo comprueban una cosa
        *compustos -> comprueban una cosa y su caso contrario
        *multiples -> 

    cuando hay una sola línea
    
    if(condición)//código a ejecutar

    cuando hay más de una línea

    if(condición){
        //código a ejecutar 1
        //código a ejecutar 2
        ...
    }

*/

let num = 5;

if(num>0) console.log(`${num} es mayor que 0`);

num = -5;

if(num>0) console.log(`${num} es mayor que 0`); // no lo imprime porque es menor a 0

num = 5;

// al poner varías líneas de código es necesario el uso de llaves {}

if(num>0) {
    console.log(`${num} es mayor que 0`);
    console.log(`${num} es mayor que 0`);
} 

// condicional compuesto

num = -50;

if(num>0) {
    console.log(`${num} es mayor que 0`);
    
}else{
    console.log(`${num} es menor que 0`);
}


// condición múltiple 

num = 0;

if(num>0) {
    console.log(`${num} es mayor que 0`);
    
}else if (num===0){
    console.log(`${num} es 0`);
}else{
    console.log(`${num} es menor que 0`);
}

/* 
    Operadores lógicos sirven para comprobar más cosas

    && -> AND

    || -> OR 



*/

let num1 = 0;
let num2 = 5;

if(num1>0 && num2 >0){
    console.log(`${num1} y ${num2} son mayores que 0 o lo que es lo mismo positivos`);
}// no se ejecuta porque los dos números no son mayores que 0 

if(num1>0 || num2 >0){
    console.log('Uno de los dos números es mayor que 0');
}// se ejecuta porque uno de los dos es mayor que 0


//Podemos hacer uso de metodos de cadenas para evaluar condiciones de las mismas

let word = 'Hola';

if (word.length>4){
    console.log(`${word} tiene más de cuatro letras`);
}else if (word.length<4){
    console.log(`${word} tiene menos de 4 letras`);
}else{
    console.log(`${word} tiene 4 letras`);
}

// tambien podemos evaluar booleanos

let respuesta = true;

if(respuesta==true) console.log(`La respuesta tiene el valor true`);
else console.log(`La respuesta tiene el valor false`);

// otra forma de evaluar booleanos y es lo recomendable ponerlo de esta forma

if(respuesta) console.log(`La respuesta tiene el valor true`);
//para negarlo podríamos hacer esto
if(!respuesta) console.log(`La respuesta tiene el valor false`);