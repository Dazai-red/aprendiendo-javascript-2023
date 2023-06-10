/* 
    IntersectionObserver
        - Sirve para saber cuando un elemento se ve y cuando esta oculto.
        - Esto nos ayuda bastante entre muchas otras cosas para hacer lazy load es decir no cargamos elementos
        que no vemos hasta que no se vayan a ver no los cargamos por lo cual ahorramos muchisimos recursos.
        
        Lo suelen utilizar netflix, instagram se cargan 10 o 15 imágenes que son las que se ven y segun 
        vamos haciendo scroll se van cargando las imágenes.

*/

const boxes = document.querySelectorAll('.box')

// recibe como párametros los elementos que tiene que vigilar (en este caso cada caja)
const callback = (entries) => {
    console.log(entries)
    // recorremos cada elemento preguntamos si se esta viendo ese elemento
    entries.forEach(entry => {
        if(entry.isIntersecting){
            // si el elemento se esta viendo mostramos un mensaje con el id de ese elemento
            console.log(entry.target.id, 'is interesecting')
        }
    });
}

// las 3 propiedades son opcionales al igual que el propio objeto 
const options = {
    // root es el elemento padre que vamos a estar vigilando que normalmente es el viewport con esto podemos cambiarlo a otra caja
    // root: 
    // rootmargin funciona igual que margin en css podemos pasarle de 1 a 4 parámetros, acepta valores negativos 
    // rootMargin: '-200px' 
    // rootMargin: '-200px 100px' 
    // rootMargin: '-200px 100px 300px' 
    // rootMargin: '-200px 100px 300px 100px' 
    /* threshold recibe valores entre 0 y 1 0 es el valor por defecto. cuando tenga interceptado un 50% de la 
    caja saltara el callback, si pusieramos 1 le estariamos diciendo que hasta que el elemento no se vea del todo no va a 
    contar como interceptado. */
    threshold: 0.50
}

/* El primer párametro es obligatorio es la función que vamos a ejecutar cuando algo 
entre en el rango de visión es el segundo párametro es opcional sirve para darle opciones  */

const observer = new IntersectionObserver(callback, options)
// recorremos el array de nodos de cajas 
boxes.forEach(element => observer.observe(element))
