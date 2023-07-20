/* 
    Encapsulación: se refiere a la agrupación de datos con los métodos que operan en esos datos, 
    o la restricción del acceso directo a algunos de los componentes de un objeto.

    En javascript no tenemos disponible private todo en javascript es publico
*/

// es como poner private en java en la variable employees (simplemente no le hacemos referencia a this), parece ser necesario usar esta sintaxis de clase

// por convención a las propiedades que queremos hacer privadas se les indica _ delante 

function Company(name) {
    let _employees = []
    this.name = name

    this.getEmployees = function() {
        return _employees
    }

    this.addEmployee = function(employee) {
        _employees.push(employee)
    }
}

const company = new Company('Coca-cola')
const company2 = new Company('Pepsi')

console.log(company)
console.log(company2)

company.addEmployee( { name: "ryan" } )
company2.addEmployee( { name: "joe" } )

console.log(company.getEmployees())
console.log(company2.getEmployees())


