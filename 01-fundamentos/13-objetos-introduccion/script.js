/* 
    Son estructuras de datos que representan propiedades, valores y acciones que puede realizar el objeto

    Todos los objetos tienen propiedades o atributos y comportamientos o acciones representados por pares de clave (key): 
    valor (value)

    Para acceder a las propiedades y acciones del objeto se ujtiliza la nomenclatura del punto objeto.key o corchete entre 
    comillas objeto['key']

    cuando queremos acceder a todas las propiedades del objeto usaremos bucles for in porque los objetos no son iterables 
    esto se vera en un futuro con más profundidad  

*/

const person = {
    name: 'Juan',
    age: 26,
    sons: ['Laura', 'Diego', 'Pepe','Rosa','Tomás']
}

// tenemos 2 formas de acceder al valor de las propiedades de los objetos
console.log(person.name);
console.log(person['name']);
/* 
    Es muy importante diferenciar entre objetos y array en la consola del navegador
    los objetos se representan con {...} mientras que los arrays [...] cuando trabajemos con el DOM
*/

console.log('Recorriendo las keys del objeto');
for (const key in person) {
    console.log(key);
}

console.log('Recorriendo los valores de las keys del objeto');
for (const key in person) {
    console.log(person[key]);
}

console.log('Recorriendo el array de hijos del objeto: ');
// En este caso no da error porque person.sons hace referencia a un array no al objeto
for (const son of person.sons) {
    console.log(son);
}
// Si intentamos recorrer un objeto con for of nos aparecera el error de que un objeto no es iterable
/* for (const value of person) {
    console.log(value);
} */

// Para imprimir todo el objeto completo en una sola frase
console.log(`Hola ${person.name}. Tienes ${person.age} años y tus hijos se llaman: ${person.sons.join(', ')}.`)