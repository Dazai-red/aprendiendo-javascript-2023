/* 
    Un lazy load consiste en que se van generando contenido conforme vamos haciendo scroll 
    en la última imagen.

    Para hacer esto vamos a hacer peticiones a una API y para hacer las solicitudes a la API
    usaremos la libreria axios.


*/

const images = document.getElementById('images')

const getImages = () => {
    axios('https://picsum.photos/v2/list?page=3&limit=5')
        .then(res =>{
            const fragment = document.createDocumentFragment()
            res.data.forEach(element => {
                const newImage = document.createElement('IMG')
                newImage.src = element.download_url
                fragment.appendChild(newImage)
            })
            images.appendChild(fragment)
            setObserver()
        })
}

/* Nuestro observador lo construimos dentro de la función para que se ejecute cuando ya tengamos las imágenes */

const callback = (entries) => {
    entries.forEach(entry => {
        // console.log(entry)
        if(entry.isIntersecting){
            // tambíen podriamos colocar algun tipo de animación
            // Añadiriamos la clase para aplicar la animación
            getImages()
        } else {
            //quitar anímación
        }
    })
}

const setObserver = () => {
    const options = {
        // cuando estemos viendo la mitad de la imágen quiero que se construyan más imágenes
        threshold: 0.5
    }
    const observer = new IntersectionObserver(callback, options)
    observer.observe(images.lastElementChild)
}

getImages()