/* 
    Consiste en que en una funcion le podemos pasar un tipo de dato de objeto
    y objetos heredades que van a funcionar sin problemas aunque no sea el tipo que hemos declarado
    porque si un objeto hereda de este lo entiende.

    En javaScript al no tener tipos de datos lo entiende igualmente
*/

class Person {
    constructor(name, lastname) {
        this.name = name
        this.lastname = lastname
    }
}

class Programmer extends Person {
    constructor(name, lastname, languague) {
        super(name, lastname)
        this.languague = languague
    }
}

const printFullName = (person) => console.log(person.name + ' ' + person.lastname)

person = new Person('José','Antonio')

programmer = new Programmer('Manolo', 'López', 'JavaScript')

printFullName(person)
printFullName(programmer)
