/* 
    La sintaxis de desestructuración es una expresión de JavaScript que permite desempacar valores de arreglos
    o propiedades de objetos en distintas variables.
*/

const person = {
    name: 'Dorian',
    age: 20,
    email: 'dorian@gmail.com'
}

console.log(person)

// forma tradicional
/* const name = person.name
const age = person.age 
const email = person.email  */

// console.log(name, age, email)

// usando destructuring
/*  const {name, age, email} = person
console.log(name, age, email) */

// podemos cambiar el nombre de las variables para que no coincidan con las del objeto (pero ya no funcionara name age)
 const {name: nombre, age: edad, email} = person
console.log(nombre,edad,email) 

// para usarlo en arrays

const numbers = [1,2,3,4]

const [primeraPosicion] = numbers

console.log(primeraPosicion)
// si quisieramos poner la 2º 3º tendriamos que poner huecos hasta llegar a ella
const [a,b, terceraPosicion] = numbers

console.log(a,b,terceraPosicion)
console.log(terceraPosicion)

// para usarlo en funciones
// cogemos solo la propiedad name del objeto
const printPerson = ({ name:nombre }) => console.log(nombre)
// le seguimos pasando el objeto como parametro
printPerson(person)

// haciendo una petición en axios podemos escribir mucho menos código 

const getUsers = async() => {
    // nos llega un objeto que dentro tiene una propiedad data y dentro de data tenemos toda la info de la petición
    const { data: users } = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(users)
}

getUsers()

