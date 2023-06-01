/* 
    API webStorage:
        Los dos mecanismos en el almacenamiento web son los siguientes:

            sessionStorage mantiene un área de almacenamiento separada para
            cada origen que está disponible mientras dure la sesión de la 
            página (mientras el navegador esté abierto, incluyendo recargas 
            de página y restablecimientos)

            localStorage hace lo mismo, pero persiste incluso cuando el 
            navegador se cierre y se reabra.
            
        Ambos funcionan con clave:valor y tienen dos métodos fundamenteles
        setItem() para asignar una clave:valor y getItem() que recibe comoo parámetro
        la clave de la que queramos obtener el valor.
        
        Es recomendable comprobar que es posible usar localstorage o sesionstorage mediante
        un if si vamos a trabajar con navegadores antiguos (aunque es raro que no sea compatible)

        if(localStorage){

        }

        Tambien existen los métodos localStorage.clear() sessionStorage.clear() 
        para borrar localstorage o sessionStorage y los métodos removeItem('key')



*/

//  los ejemplos estan con sessionStorage pero es exactamente igual con localStorage

const form = document.getElementById('form')
const keys = document.getElementById('keys')

form.addEventListener('submit', (e) =>{
    e.preventDefault()

    // podriamos pasarle un objeto haciendo 
    // uso del metodo de JSON.stringify (para convertir el objeto a texto)
    /* const person = {
        name: 'Dorian',
        email: 'dorian@gmail.com'
    } */

    // sessionStorage.setItem('person', JSON.stringify(person))

    sessionStorage.setItem(form.key.value, form.value.value)

    keys.innerHTML += `<option>${form.key.value}</option>`

    form.reset()

})

keys.addEventListener('change', ()=>{
    document.getElementById('infoValue').textContent = sessionStorage.getItem(keys[keys.selectedIndex].textContent)
})

sessionStorage.removeItem('name')
sessionStorage.clear()
