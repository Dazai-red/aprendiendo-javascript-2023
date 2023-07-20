/* 
    Asociación: objetos con la capacidad de referir a otro objeto.
    Es decir poder unir dos objetos y poder enlazarlos de cierta 
    forma en código
*/

class Person {
    constructor(name, lastname) {
        this.name = name
        this.lastname = lastname
    }
}

const john = new Person('John', 'ray')
const maria = new Person('Maria', 'perez')

maria.parent = john;

console.log(maria)
console.log(john)