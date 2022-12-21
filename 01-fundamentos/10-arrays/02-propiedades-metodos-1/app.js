let numeros = [1,2,3,4,5,6,7,8,9,10];
/* 
    Propiedad length

    nombre-array.length - devuelve el número de posiciones 
    que contiene el array

*/

console.log(numeros.length);

/* 
    Métodos
    
    Array.isArray(nombre-array) - Sirve para evaluar si una variable/constante es un array o no. Devuelve true si la variable es un array.

*/

let numero = 5;

console.log(Array.isArray(numero));
console.log(Array.isArray(numeros));

/* 
    Eliminar un elemento:

        .shift() - Elimina el primer elemento del array y devuelve ese elemento.
        .pop() - Elimina el último elemento del array y devuelve ese elemento.

*/

console.log(numeros);
let numeroEliminado = numeros.shift(); // podemos guardar ese elemento eliminado para usarlo en otra parte o consultarlo
console.log(numeros);
console.log('Se ha elminado el primer elemento del array: '+numeroEliminado);
numeros.pop();
console.log(numeros);



/* 
    Añadir elementos:

        .push(elemen1, elemen2, ...) - Añade uno o más elementos al final del array y devuelve la nueva longitud.
        .unshift(elemen1, elemen2, ...) - Añade uno o más elementos al principio del array y devuelve la nueva longitud. 

*/

console.log(numeros);
numeros.unshift(1);
console.log(numeros);
numeros.push(10);
console.log(numeros);

/*  Para buscar:

    .indexOf() - Devuelve el primer índice del elemento que coincida con el valor especificado, o -1 si ninguno es encontrado.

    .lastIndexOf() - Devuelve el último índice del elemento que coincida con el 
    valor especificado, o -1 si ninguno es encontrado.

*/
numeros.push(2);
console.log(numeros.indexOf(2));
console.log(numeros.lastIndexOf(2));


/* 
    .reverse() - Invierte el orden de los elementos del array.
*/

console.log(numeros);
numeros.reverse();
console.log(numeros);

/* 
    .join('separador') - Devuelve un String con el separador que indiquemos,
    por defecto son comas.
*/

console.log(numeros);
console.log(numeros.join(' ')); // muestra el array con espacios pero podemos indicar el separador que queramos

/* 
    cambiar elementos array (más opciones)

    .splice(a,b,items) - Cambia el contenido de un array
    eliminando elementos existentes y/o agregando nuevos elementos.
        a - Indice de inicio 
        b - Número de elementos (opcional)
        items - Elementos a añadir en el caso de que se añadan (opcional)
    
*/

// Ejemplo usando un solo parametro

console.log(numeros);
numeros.splice(6); // desde la posición 6-1(5), elimina todos los elementos seguidos 
console.log(numeros);
numeros.splice(2,2); // desde la posición 2 (no se resta 1 en este caso) elimina 2 elementos
console.log(numeros);
numeros.splice(2,2,20,20,50,809); //apartir de la 2º coma son los elementos que se añaden

// cuando tenemos 3 parametros el parametro b (2º parametro) si b es un valor distinto de 0 elimina el número de valores que le indiquemos en b y añade los valores de items a partir de la posición a
console.log(numeros);
numeros.splice(1,0,11111011,111192); // ejemplo sin elminar elementos (siempre que b (2º parametro) valga 0)
console.log(numeros);


/* 
    slice(a,b) - Extrae elementos de un array desde 
    el índice a hasta el indice b. Si no existe b
    lo hace desde a hasta el final, si no existe a ni b 
    hace una copia del original.
*/

console.log();
console.log();
console.log();

let nuevosNumeros = numeros.slice();
// si no ponemos parametros nos genera una copia exacta del original
console.log(numeros);
console.log(nuevosNumeros);

console.log();
console.log();
console.log();

nuevosNumeros = numeros.slice(2);
// nos genera un nuevo array del array desde la posición 2(a) hasta el final
console.log(numeros);
console.log(nuevosNumeros);

console.log();
console.log();
console.log();

nuevosNumeros = numeros.slice(2,4);
// nos genera un nuevo array del array desde la posición 2(a) hasta el 4(b)
console.log(numeros);
console.log(nuevosNumeros);

