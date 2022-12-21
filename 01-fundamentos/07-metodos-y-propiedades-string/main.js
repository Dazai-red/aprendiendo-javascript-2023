// Strings

let cadena = "Hola Mundo";

console.log(cadena.length); //10 los espacios cuentan.

// Metodos

/* 
    Todos los metodos devuelven una cadena nueva es decir la cadena original no será modificada.
*/

// Estas funciones son utiles para la validación de formularios

console.log(cadena.toUpperCase()); // devuelve la cadena en mayusculas

console.log(cadena.toLowerCase()); // devuelve la cadena en minusculas

/* 
    string.IndexOF(string)devuelve la posición en la que se encuentre el string que le pasemos como 
    parametro, si no encuentra nada devuelve -1
*/

console.log(cadena.indexOf('d'));

/* 
    replace: (valor a buscar, valor nuevo) -> reemplaza el fragmento de la cadena que le indiquemos 1º parm
    por el 2º param
*/

console.log(cadena.replace('Mundo','Youtube'));

/* 
    los parametros encerrados en corchetes significan que son opcionales.

    substring:(inicio,[fin]) -> Extrae los caracteres desde el inicio hasta el final (el final no se incluye).

    si no se incluye fin extrae hasta el final.
*/

console.log(cadena.substring(3));
console.log(cadena.substring(3,7));

/* 
    slice(inicio,[fin]) -> igual que substring pero admite valores negativos, si ponemos valores negativos
    empezara desde atrás.

    Si no se incluye final extrae hasta el final

    (2,-4) -> empieza a contar en el tercer caracter y los 4 últimos no los considera
*/

console.log(cadena.slice(-3))
console.log(cadena.slice(3));
console.log(cadena.slice(0,-2));

/* 

    trim()-> elimina los espacios en blanco al inicio y al final de la cadena

    Se suele utilizar en la validación de formularios 
*/

let cadena2 = '     Hola mamamama      ';
console.log(cadena2);
console.log(cadena2.trim());

/* 
    --ES6--

    startWidth(valor,[inicio]) -> sirve para saber si la cadena empieza con ese valor
    devuelve true o false.

*/

console.log(cadena.startsWith('H'));
console.log(cadena.startsWith('h'));

console.log(cadena.startsWith('M',5));

/* 
    endtWidth(valor,[inicio]) -> sirve para saber si la cadena termina con ese valor
    devuelve true o false. el 2º parametro es la longitud en la que quieres que lo tenga en cuenta si no le ponemos por defecto es el final de la cadena.
*/

console.log(cadena.endsWith('o'));
console.log(cadena.endsWith('a',4));

console.log(cadena.endsWith('Mundo'));

/* 
    includes(valor,[inicio]) -> Igual que indexOf pero devuelve true o false
*/

console.log(cadena.includes('n'));
console.log(cadena.includes('a',5));
console.log(cadena.includes('a',2));

/* 
    repeat(valor) -> Repite el string el número de veces que le indiquemos.
*/

console.log(cadena.repeat(100));
console.log('r'.repeat(10));

/* Template Strings */

let nombre = 'Juan';
let apellido = 'Gómez';
let edad = 20;

console.log('Hola '+nombre+' '+apellido+' tu edad es de '+edad+' años.');
console.log(`Hola ${nombre} ${apellido} tu edad es de ${edad} años. `);

// si no ponemos edad+1 dentro de un parentesis devuelve 201
console.log('El año que viene tendras '+(edad+1)+' años.');
// Los template strings no solamente sirven para colocar variables, podemos poner cualquier código js
console.log(`El año que viene tendras ${edad+1} años. `);