/* 
    Tipos de datos

    Un valor en JavaScript siempre pertenece a un tipo de dato determinado. Por ejemplo, un string o un número.

    Hay ocho tipos de datos básicos en JavaScript.

    Podemos almacenar un valor de cualquier tipo dentro de una variable. Por ejemplo, una variable puede contener en un momento un string y luego almacenar un número

*/

// no hay error
let message = "hola";
message = 123456;

/* 
    Los lenguajes de programación que permiten estas cosas, como JavaScript, se denominan “dinámicamente tipados”, lo que significa que allí hay tipos de datos, pero las variables no están vinculadas rígidamente a ninguno de ellos.
*/

// Number

let n = 123;
n = 12.345;

/* 
    El tipo number representa tanto números enteros como de punto flotante.

    Hay muchas operaciones para números: multiplicación *, división /, suma +, resta -, y demás.

    Además de los números comunes, existen los llamados “valores numéricos especiales” que también pertenecen a este tipo de datos: Infinity, -Infinity y NaN.
*/

/* 
    Infinity representa el Infinito matemático ∞. Es un valor especial que es mayor que cualquier número.

    Podemos obtenerlo como resultado de la división por cero:
*/

console.log( 1 / 0 ); // Infinity

// Podemos hacer referencia a él directamente:

console.log( Infinity ); // Infinity

// NaN representa un error de cálculo. Es el resultado de una operación matemática incorrecta o indefinida, por ejemplo:

console.log( "no es un número" / 2 ); // NaN, tal división es errónea

// NaN es “pegajoso”. Cualquier otra operación sobre NaN devuelve NaN:

console.log( NaN + 1 ); // NaN
console.log( 3 * NaN ); // NaN
console.log( "not a number" / 2 - 1 ); // NaN

//Tiene única excepción: NaN ** 0 es 1.

console.log(NaN ** 0); //1

// BigInt

/* 
    En JavaScript, el tipo “number” no puede representar de forma segura valores enteros mayores que (253-1) (eso es 9007199254740991), o menor que -(253-1) para negativos.

    Para ser realmente precisos, el tipo de dato “number” puede almacenar enteros muy grandes (hasta 1.7976931348623157 *  
    10308), pero fuera del rango de enteros seguros ±(253-1) habrá un error de precisión, porque no todos los dígitos 
    caben en el almacén fijo de 64-bit. Así que es posible que se almacene un valor “aproximado”.

    Por ejemplo, estos dos números (justo por encima del rango seguro) son iguales:
*/

console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992

/* 
    Podemos decir que ningún entero impar mayor que (253-1) puede almacenarse en el tipo de dato “number”.

    Para la mayoría de los propósitos, el rango ±(253-1) es suficiente, pero a veces necesitamos números realmente 
    grandes; por ejemplo, para criptografía o marcas de tiempo de precisión de microsegundos.

    BigInt se agregó recientemente al lenguaje para representar enteros de longitud arbitraria.

    Un valor BigInt se crea agregando n al final de un entero:
*/


// la "n" al final significa que es un BigInt
const bigInt = 1234567890123456789012345678901234567890n;

// String

/* 
    En JavaScript, hay 3 tipos de comillas.

    Comillas dobles: "Hola".
    Comillas simples: 'Hola'.
    Backticks (comillas invertidas): `Hola`.
    Las comillas dobles y simples son comillas “sencillas” (es decir, funcionan igual). No hay diferencia entre ellas en 
    JavaScript.

    Los backticks son comillas de “funcionalidad extendida”. Nos permiten incrustar variables y expresiones en una cadena 
    de caracteres encerrándolas en ${...}, por ejemplo:
*/

let name = "John";

// incrustar una variable
console.log( `Hola, ${name}!` ); // Hola, John!

// incrustar una expresión
console.log( `el resultado es ${1 + 2}` ); //el resultado es 3

/* 
    La expresión dentro de ${...} se evalúa y el resultado pasa a formar parte de la cadena. Podemos poner cualquier cosa ahí dentro: una variable como name, una expresión aritmética como 1 + 2, o algo más complejo.

    Toma en cuenta que esto sólo se puede hacer con los backticks. ¡Las otras comillas no tienen esta capacidad de 
    incrustación!
*/

console.log( "el resultado es ${1 + 2}" ); // el resultado es ${1 + 2} (las comillas dobles no hacen nada)

/* 
    En algunos lenguajes, hay un tipo especial “carácter” para un solo carácter. Por ejemplo, en el lenguaje C y en Java 
    es char.

    En JavaScript no existe tal tipo. Sólo hay un tipo: string. Un string puede estar formado por un solo carácter, por 
    ninguno, o por varios de ellos
*/

// Boolean (tipo lógico)

/* 
    El tipo boolean tiene sólo dos valores posibles: true y false.

    Este tipo se utiliza comúnmente para almacenar valores de sí/no: true significa “sí, correcto, verdadero”, y false 
    significa “no, incorrecto, falso”.

    Por ejemplo:    
*/

let nameFieldChecked = true; // sí, el campo name está marcado
let ageFieldChecked = false; // no, el campo age no está marcado

// Los valores booleanos también son el resultado de comparaciones:

let isGreater = 4 > 1;

console.log( isGreater ); // verdadero (el resultado de la comparación es "sí")

// El valor “null” (nulo)

/* 
    El valor especial null no pertenece a ninguno de los tipos descritos anteriormente.

    Forma un tipo propio separado que contiene sólo el valor null:
*/

let age = null;

/* 
    En JavaScript, null no es una “referencia a un objeto inexistente” o un “puntero nulo” como en otros lenguajes.

    Es sólo un valor especial que representa “nada”, “vacío” o “valor desconocido”.

    El código anterior indica que el valor de age es desconocido o está vacío por alguna razón.
*/

