/* 
    document.getElementById('id') - Acceder a un elemento a través de su id

    document | element .querySelector('selectorCSS') - Accede al primer elemento que 
    coincida con el selector CSS

    document | element .querySelectorAll('selectorCSS') - Accede a todos los elementos 
    que coincidan con el selector CSS, devuelve un nodeList

    Los elementos se guardan en constantes porque no van a cambiar.

*/

const title = document.getElementById('title');
// mostramos todas las propiedades del nodo con el id title
console.log(title);
// modificando el contenido del nodo con el id title
//title.textContent = 'DOM - Accediendo a NODOS'

const paragraph = document.querySelector('.paragraph');

// podemos usar cualquier tipo de selector css como pseudoclases exceptuando los AFTER y los BEFORE
//const paragraph = document.querySelector('.paragraph:nth-child(2)');

console.log(paragraph)


/* 
    querySelector y querySelectorAll no tienen porque descender de document, tambien pueden descender
    de un elemento.
*/

/* const span = paragraph.querySelector("span")

console.log(span) */

/* También podriamos hacer algo parecido con ids de esta forma */

const span = document.getElementById('title').querySelector("span")

console.log(span.textContent);

/* 
    Si tuvieramos más elementos dentro de otros iriamos descendiendo colocando . getElementByID o 
    querySelector sucesivamente hasta llegar al elemento que necesitemos.
*/

const paragraphs = document.querySelectorAll('.paragraph')

// recordar que no es recomendable dar estilos a traves de JavaScript

paragraphs[0].style.color = 'red';

//map no funciona porque no es un array, con lo que estamos trabajando es con nodos no arrays
//paragraphs.map(p=>p.style.color='green') 

console.log(paragraphs)

// Para transformar los nodos en arrays tenemos dos formas:

// usando spread operator: (esta forma tiene el problema de que no es compatible con todos los navegadores)

const paragraphsSpread = [...document.querySelectorAll('.paragraph')]

paragraphsSpread.map(p => p.style.color = 'green');

// usando array from

const paragraphsArray = Array.from(document.querySelectorAll('.paragraph'));

paragraphsArray.map(p=>p.style.color='blue')




