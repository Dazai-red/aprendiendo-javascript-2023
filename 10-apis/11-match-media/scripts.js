/* 
    https://developer.mozilla.org/es/docs/Web/API/Window/matchMedia

    Match Media

        mql = window.matchMedia(mediaQueryString)

        mql viene de media query list, que es el objeto que se crea con el método matchMedia()
        mediaQueryString es cualquier media query válida en CSS

    Esto NO sirve para sustituir aplicar mediaqueries sustituyendo las de CSS
    
    Esto sirve para cuando tenemos que utilizar mediaqueries para lógica en JS
    todo lo que podamos hacer con CSS hacerlo en CSS.

    Por ejemplo a partir de cierta mediaquerie necesitamos quitarle clases a un elemento
    o añadirle unas nuevas.
    
*/

// antes se usaba pero esto no tiene en cuenta cuando el dispositivo cambia de orientación
console.log(innerWidth)

const title = document.getElementById('title')

const mql = matchMedia('(min-width: 400px) and (orientation: landscape)')


// Nunca añadir estilos desde JS porque esto escribe los estilos en línea creando problemas de especificidad (esto es solo un ejemplo)
const applyMatchMedia = (mql) => {
    if(mql.matches){
        document.body.style.backgroundColor = 'red'
        // esto sería la forma correcta
        // title.classList.add('clase-que-sea')
    } else {
        document.body.style.backgroundColor = 'royalblue'
        // title.classList.remove('clase-que-sea')
    }
}
// cuando se redimensiona la ventana
addEventListener('resize', () => applyMatchMedia(mql))
// cuando el DOM hay acargado
addEventListener('DOMContentLoaded', () => applyMatchMedia(mql))