/* 
    Prototipos en javascript
        Debemos de saber que javascript tiene una naturaliza de objetos dinamica, es decir que cuando creamos un objeto luego
        podriamos alterarlo

    prototype hace referencia a la estructura que ya tenia un constructor, es por eso por lo que podemos extenderlo y como hay muchos
    objetos que descienden de ese constructor al final todos los objetos que descienden de ese constructor estan conectados con el y pueden
    buscar entre sus propiedades y metodos.
*/

// sintaxis de objetos anterior a la implementación de clases (esto es lo mismo que una clase pero esto es lo que hace realmente por debajo)

function Person(name, lastname) {
    this.name = name
    this.lastname = lastname
    this.displayName = function() {
        return `${this.name} ${this.lastname}`
    }
}

const john = new Person("John", "Mcmillan")
john.name = 'Joe'
console.log(john.displayName())

// añadirle un método al objeto john, mario no va a tener este método
/* john.greet = function() {
    return `Hello I'am ${this.name}`
} */

// console.log(john.greet())

const mario = new Person("Mario", "Rossi")
console.log(mario.displayName())

const maria = new Person("Maria", "Perez")
const jose = new Person("José", "Perez")

// si queremos añadir un método o propiedades a todos los objetos que se hayan creado con el constructor Person lo hacemos de esta forma

Person.prototype.greet = function() {
    return `Hello I'am ${this.name}`
}

Person.prototype.age = 100

// vemos que no se muestra el método recien añadido haciendo uso de prototype pero sin embargo podemos ejecutarlo

console.log(john)
console.log(mario)
console.log(maria)
console.log(jose)

console.log(john.greet())
console.log(mario.greet())
console.log(maria.greet())
console.log(jose.greet())

console.log(john.age)
console.log(mario.age)
console.log(maria.age)
console.log(jose.age)

/* 
    Cuando creamos un objeto lo que hacemos no es hacer una copia del objeto, lo que hacemos es una referencia directamente en memoria 
    es decir esta enlazado directamente con el constructor si tratamos de acceder a una propiedad o metodo dentro de un objeto que no existe 
    javascript trata de buscarlo en el constructor porque aún sigue enlazado, luego busca si hemos alterado el prototipo.
*/

/* 
    Esto es importante porque JavaScript tiene objetos que ya vienen con el propio lenguaje y podemos modificar los constructores de esos 
    objetos que vienen por defecto en javaScript.
*/

const s = String("hello world")

console.log(s)

String.prototype.concatenaTest = function () {
    return this + "test"
}

console.log(s.concatenaTest())

console.log("My name is Jesus".toUpperCase())

console.log("My name is Jesus".concatenaTest())

/* 
    En otros lenguajes de programación no es normal que se pueda alterar los constructores de los objetos una vez ya creados.
*/




