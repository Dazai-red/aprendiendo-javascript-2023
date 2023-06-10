/* 
    Este evento sirve para conocer cuando el cliente pierde o vuelve a tener conexión.
    Se suele usar en apps donde se manejen datos en tiempo real como un chat o redes sociales.

    en chrome nos vamos a devtools pestaña network y donde pone sin limitaciones seleccionamos offline y luego sin limitaciones

    en firefox nos vamos a el icono de hamburguesa -> desarrollador web ->  trabajar sin conexión (esto se queda marcado)
    para volver a tener conexión exactamente el mismo procedimiento hamburguesa -> desarrollador web ->  trabajar sin conexión

*/
const alert = document.getElementById('alert')

addEventListener('online', (e) => {
    console.log(e)
    setAlert(1)
})

addEventListener('offline', (e) => {
    console.log(e)
    setAlert(0)
})

const setAlert = (status) => {
    alert.classList.remove('alert--online')
    alert.classList.remove('alert--offline')
    // hacemos uso de setTimeout para poder producir la animación (si no no funciona)
    if(status === 0){
        setTimeout(()=>{
            alert.textContent = "Ups, it seems you're offline"
            alert.classList.add('alert--offline')
        }, 100)
    } else{
        setTimeout(()=>{
            alert.textContent = "Great! you're online again!"
            alert.classList.add('alert--online')
        }, 100)
    }
}
