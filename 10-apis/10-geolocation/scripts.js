/* 
    https://developer.mozilla.org/es/docs/Web/API/Geolocation_API
*/

const button = document.getElementById('button')

button.addEventListener('click', () => {
    const geolocation = navigator.geolocation
    geolocation.getCurrentPosition(getPosition, error, options)
})

const options = {
    /* enableHighAccuracy boolean por defecto a false, en el caso que el dispositivo tenga más opciones de geo por ejemplo
    móviles que las use. En el caso de que el cliente no las tenga (ordenadores) la precisión nos va a poner 0 porque 
    no tenga altimetro, GPS ni nada parecido */
    enableHighAccuracy: true,
    // determina el tiempo que le establecemos para que nos devuelva la posición en milisegundos
    timeout: 5000,
    /* tiempo que le permitimos o duración tener algo en cache (es decir que al preguntarle la pos 
    si la tenemos en cache la va a utilizar o no) En el caso de que no queremos que nos devuelva info en cache 
    y queramos solo info real lo ponemos a 0*/
    maximunAge: 0
}

// le podemos sacar mucho más partido con la API de google maps para que nos de mucha más información

const getPosition = (position) => console.log(position)

// función que se ejecuta cuando el usuario no permite el uso de geo u otro tipo de errores
const error = (error) => console.log(error)