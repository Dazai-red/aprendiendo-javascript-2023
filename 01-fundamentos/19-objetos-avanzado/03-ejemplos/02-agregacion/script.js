/* 
    Agregación: capacidad de un objeto de referir a otros objetos independientes. 
    Es decir podemos tener un objeto grande en el que puede estar formado por objetos 
    más pequeños pero si extraemos un objeto pequeño de uno grande este objeto pequeño 
    aun puede ser utilizado en otro código (objeto independiente)
*/

const company = {
    name: "fazt tech",
    employees: []
}
class Person {
    constructor(name, lastname) {
        this.name = name
        this.lastname = lastname
    }
}

const john = new Person('John', 'ray')
const maria = new Person('Maria', 'perez')

company.employees.push(john)
company.employees.push(maria)

console.log(maria)
console.log(john)

console.log(company)