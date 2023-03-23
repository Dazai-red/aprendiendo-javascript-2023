/* 
    Recorriendo el DOM (DOM Traversing)

    Padre - parent (Nodo del que desciende)
        - parentNode - Devuelve el nodo padre (Que puede no ser un elemento)
        - parentElement - Devuelve el nodo elemento padre

        NOTA
        Los nodos del tipo Document y DocumentFragment nunca van a tener un elemento
        padre, parentNode devolverá siempre null.

    Hijos - child (Nodo que desciende un padre)
        - childNodes - Devuelve todos los nodos hijos
        - children - Devuelve todos los nodos elementos hijos
        - firstChild - Devuelve el primer nodo hijo
        - firstElementChild - Devuelve el primer nodo elemento hijo
        - lastChild - Devuelve el último nodo hijo
        - lastElementChild - Devuelve el último nodo elemento hijo
        - hasChildNodes() - Devuelve true si el nodo tiene hijos y false si no los tiene

    Hermanos - siblings (Nodo al mismo nivel)
        - nextSibling - Devuelve el siguiente nodo hermano
        - nextElementSibling - Devuelve el siguiente nodo elemento hermano
        - previousSibling - Devuelve el anterior nodo hermano
        - previousElementSibling - Devuelve el anterior nodo elemento hermano

    Cercano
        - closet(selector) - Selecciona el nodo más cercano que cumpla con el selector, aún
        es experimental.

*/

const parent = document.getElementById('parent')

console.log(parent.parentNode)
console.log(parent.parentElement)

console.log(parent.childNodes)
console.log(parent.children)

console.log(parent.firstChild)
console.log(parent.firstElementChild)

console.log(parent.lastChild)
console.log(parent.lastElementChild)

console.log(parent.hasChildNodes())
console.log(parent.firstChild.hasChildNodes())

console.log(parent.nextSibling)
console.log(parent.parentElement.nextElementSibling)
console.log(parent.parentElement.previusSibling)
console.log(parent.parentElement.previusElementSibling)
