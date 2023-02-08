const form = document.getElementById('form')
const input = document.getElementById('input')
const button = document.getElementById('button')

input.addEventListener('keyup', (e) => {
    // es una forma de acceder al id muy larga pero para ver como se navega por el objeto evento
    // console.log(e.explicitOriginalTarget.attributes[0].nodeValue);
    console.log(e)

})

button.addEventListener('click', (e) =>{
    // target es lo que más información devuelve
    console.log(e.target);
})





// window (buscar en el vídeo que es lo que es exactamente y explicarlo aquí)



/* 
    DELEGACIÓN DE EVENTOS 
        ayuda muchisimo al rendimiento sirve para evitar tener que hacer varios addeventlistener
        a muchas cosas como puede ser campos de formulario, varios botones etc en vez de hacer un for
        y que vaya recorriendo casa item lo que hacemos es añadir un unico addevent listener al padre
        y haciendo uso del objeto evento y target identificar que es lo que estamos manipulando
*/

