/* 
    consiste en la capacidad de un método con la capacidad
    de funcionar con cualquier tipo de parametro de cualquier tipo
    es decir no tipos que hayamos especificado previamente si no cualquier tipo.
    A estos parametros se les conoce como generics.

    En c tendriamos que poner <> para indicar que es un parametro generics en Java 
    desconozco si esta disponible esto o si es de otra forma.

    En javaScript no es necesario hacer esto porque no hay restricciones con los tipos de datos.

*/

class Stack {
    constructor(){
        this.items = []
    }
    push(item) {
        this.items.push(item)
    }
}

const stack = new Stack()
stack.push('hola')

const stack2 = new Stack()
stack2.push(5)

console.log(stack)
console.log(stack2)
