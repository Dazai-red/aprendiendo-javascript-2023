const input = document.getElementById('input')
const button = document.getElementById('button')
const gallery = document.getElementById('gallery')
const form = document.getElementById('form')
const link = document.getElementById('link')

// El 99% de las veces que trabajemos con eventos utilizaremos el objeto evento (lo podemos nombrar como queremos)
input.addEventListener('keyup', (e) => {
    console.log(e)
    console.log(e.key)
    console.log(e.target) // target es la propiedad más utilizada al trabajar con eventos
})


// es lo mismo no poner window porque window es el objeto global de javascript  (alert por ejemplo es un metodo de window)
// window.addEventListener('click', (e) =>{
//     console.log(e);
// })

/* button.addEventListener('click', (e) =>{
    console.log(e.target);
}) */

/* 
    podríamos hacer un for recorriendo todos los gallery item añadiendole un evento 
    esto es valido pero hacer esto consume muchisimos recursos para solucinar este problema
    vamos a utilizar la delegación de eventos

*/

/* 
    DELEGACIÓN DE EVENTOS 
        ayuda muchisimo al rendimiento sirve para evitar tener que hacer varios addeventlistener
        a muchas cosas como puede ser campos de formulario, varios botones etc en vez de hacer un for
        y que vaya recorriendo casa item lo que hacemos es añadir un unico addevent listener al padre
        y haciendo uso del objeto evento y target identificar que es lo que estamos manipulando

    Lo que hacemos es ponerle el escuchador al padre (contenedor) y localizar en cúal de los hijos
    se hizo el click

*/

// esto se suele aplicar en formularios

gallery.addEventListener('click', (e) => {
    console.log(e.target.textContent)
    //para prácticar la anterior lección con los metodos de classlist:
    e.target.classList.add('red');
})



form.addEventListener('submit', (e) =>{
    /*  
        el comportamiento por defecto en los formularios es enviarse para evitarlo 
        (funciona con cualquier elemento html que tenga un comportamiento predeterminado)
    */
    e.preventDefault()
    console.log('El formulario ha sido enviado')
})

link.addEventListener('click', (e) =>{
    //evitamos que vaya a google
    e.preventDefault()
    // ejemplo de forzar los eventos
    button.click()
})

/* 
    Los eventos los podemos escuchar o los podemos forzar para que los eventos se disparar
*/

// form.submit()

button.addEventListener('click', () =>{
    input.value = 'Has hecho click';
})