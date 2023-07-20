/* 
    Es un principio en el que nos permite crear objetos especializados a partir de uno más generico.
*/

class Person {
    constructor(name, lastname){
        this.name = name
        this.lastname = lastname
        // this.age = null
        // si añadieramos alguna propiedad no tendriamos que añadirla en todos los objetos
    }
}

class Programmer extends Person {
    constructor(languague, name, lastname) {
        super(name, lastname)
        this.languague = languague
    }
}

const myPerson = new Person('Maria', 'Perez')

console.log(myPerson)

const myProgrammer = new Programmer('Joe', 'mcmillan', 'Python')

console.log(myProgrammer)