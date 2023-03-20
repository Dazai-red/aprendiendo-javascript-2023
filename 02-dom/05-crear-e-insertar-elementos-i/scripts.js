/* 
    DOM - Crear e insertar elementos

    Crear un elemento: document.createElement(element)
    Escribir texto en un elemento: element.textContent = 'texto a escribir'
    Escribir HTML en un elemento: element.innerHTML = 'código HTML'

    Añadir un elemento al DOM: parent.appendChild(element) 

    Fragmentos de código: document.createDocumentFragment()

*/

const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

const title = document.getElementById('title')
const daysList = document.getElementById('daysList')
const daysSelect = document.getElementById('daysSelect')


// const itemList = document.createElement('LI')
// itemList.textContent = 'Lunes'

// daysList.appendChild(itemList)

title.innerHTML = 'DOM - <span>Crear e insertar elementos I</span>'

// forma mala de hacerlo porque gastamos muchos recursos pintando el DOM completo muchas veces.
/* for(const day of days){
    daysList.innerHTML += `<li>${day}</li>`
} */

// la forma correcta de hacerlo haciendo uso de los fragmentos de código

const fragment = document.createDocumentFragment()

for(const day of days){
    const itemList = document.createElement('LI')
    itemList.textContent = day
    fragment.appendChild(itemList)
}

daysList.appendChild(fragment)

for(const day of days){
    const selectItem = document.createElement('OPTION')
    //convertimos en minusculas los días que van a tener los value dentro de cada item del select
    selectItem.setAttribute('value', day.toLowerCase())
    selectItem.textContent = day
    fragment.appendChild(selectItem)
}

daysSelect.appendChild(fragment)
