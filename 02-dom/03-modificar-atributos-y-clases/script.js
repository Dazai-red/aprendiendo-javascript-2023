/* 

    Atributos 
        element.getAttribute('attribute')
        element.setAttribute('attribute',value)
    
    Clases
        element.classList.add('class', 'class',...)
        element.classList.remove('class', 'class',...)
        element.classList.contains('class')
        element.classList.replace('oldClass',newClass)

        // togle funciona así: si tiene la clase la quita, si no la tiene la añade
        // se vera con más profundidad con eventos
        element.classList.toggle('class'[,force])

    Atributos directos (son aquellos a los que podemos acceder de forma directa, no tienen desplegable hay 
    más aparte de estos 2):
        id
        value
        textContent
*/

const title = document.getElementById('title')
const nameA = document.getElementById('name')

console.log(title)
console.log(nameA)

console.log(nameA.getAttribute('type'))

// modificando atributos
//nameA.setAttribute('type','date')

title.classList.add('main-title')
title.classList.remove('title')

if(title.classList.contains('main-title')) console.log('title tiene la clase main-title')
else console.log('title no tiene la clase main-title')

//replace es lo mismo que hacer un remove y luego un add pero en una misma línea
title.classList.replace('main-title','title')


// accediendo a atributos directos

console.log(title.id)

// innerHTML recoge las etiquetas html aparte del texto plano
console.log(title.innerHTML)
// textContent recoge solo el texto plano, ignora las etiquetas que pudiera tener dentro
console.log(title.textContent)

//tambien podemos hacer uso de metodos de cadenas de esta forma
console.log(nameA.value)
console.log('La longitud es de: '+nameA.value.length)

