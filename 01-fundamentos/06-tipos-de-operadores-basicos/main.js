// Operadores matemáticos

//el operador + sirve tambien para concatenar cadenas de texto (no solo 
// para sumar los parentesis son para aislar las operaciones)
let usuario = "Carlos"

console.log("Hola "+ usuario);

let a = 5;
let b = 2;

console.log(a+'+'+b+'='+(a+b));
console.log(a+'-'+b+'='+(a-b));
console.log(a+'*'+b+'='+(a*b));
console.log(a+'/'+b+'='+(a/b));
console.log(a+'/'+b+' su resto es: '+(a%b));

// Operadores de incremento y decremento

a = 5;

console.log("La variable vale "+a);
console.log("variable++ La variable vale "+a++);
console.log("La variable vale "+a);
// Diferencia entre usar los operadores de incremento y decremento antes de la 
// variable o número
a = 5;
console.log("La variable vale "+a);
console.log("++variable La variable vale "+(++a));

a = 5;
console.log("La variable vale "+a);
console.log("variable-- La variable vale "+a--);
console.log("La variable vale "+a);

// Operadores de asignación

/* 

    a = a+3; 
    esta línea de código es lo mismo que poner 
    a+=3; 

*/

a = 10;
console.log("variable vale "+10);

a+=3;
console.log("variable+=3;//"+a);
a-=3;
console.log("variable-=3;//"+a);
a*=3;
console.log("variable*=3;//"+a);
a/=3;
console.log("variable/=3;//"+a);
a%=3;
console.log("variable%=3;//"+a);

