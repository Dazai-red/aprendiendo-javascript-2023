/* 

    Protocolo HTTP:
    https://es.wikipedia.org/wiki/Protocolo_de_transferencia_de_hipertexto

    Códigos de estado de respuesta HTTP:
    https://developer.mozilla.org/es/docs/Web/HTTP/Status

    Para evitar trabajar con un servidor web, php, bases de datos vamos a 
    trabajar con una API llamada JSONPlaceholder esta api nos da la posibilidad
    de hacer peticiones normales o AJAX.

    Cuando hacemos una petición a una API la respuesta que nos da es JSON
    veremos que nos devuelve un array de objetos que a su vez tiene propiedades
    y otros objetos o arrays dentro etc.



*/

const button = document.getElementById('button')
const list = document.getElementById('list')


button.addEventListener('click', ()=>{
    
    // por convención llamamos a la variable xhr y creamos un nuevo objeto "AJAX"
    let xhr
    // para que sea compatible con navegadores viejos
    if(window.XMLHttpRequest){
        // navegadores actuales
        xhr = new XMLHttpRequest()
    }else{
        // Internet Explorer 8
        xhr = new ActiveXObject("Microsoft.XMLHTTP")
    }
    
    
    // Hacemos una petición puede ser GET POST O DELETE (METODOS HTTP)
    /* 
        si se hace a través de GET los códigos hay que ponerlos 
        dentro de la url a la que hacemos la petición y si lo hacemos
        por POST tendríamos que crear un objeto donde vamos a guardar 
        esa información. (son algo más complejas que con GET)

        Si en vez de la API con la que estamos trabajando estamos 
        trabajando con un servidor web propio con php pondríamos
        la dirección donde este nuestro archivo de php o cualquier lenguaje
        de backend.

    */
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')

    /* 
        Antes de enviar la petición le tenemos que indicar que queremos hacer con los datos por eso 
        va antes este eventlistener que el xhr.send().
        escuchamos un evento para saber cuando la información ha llegado del servidor 
        y guardamos esa información en una variable
    */
    xhr.addEventListener('load', (data) =>{
        // la parte que nos interesa es la la propiedad target 
        console.log(data.target)
        /* 
            lo que vamos a hacer es comprobar la respuesta dentro de la propiedad target a su vez la propieda response
            El problema es que esta respuesta es de tipo cadena podemos comprobarlo con typeof data.target.response
            nosotros necesitamos un objeto con el que poder trabajar y recorrer sus propiedades.

            Para convertir un string a un objeto de JavaScript utilizamos JSON.parse(data.target.response)
         */
        console.log(JSON.parse(data.target.response))

        const dataJSON = JSON.parse(data.target.response)

        // imprimimos por pantalla

        for(const userInfo of dataJSON){
            const listItem = document.createElement('LI')
            listItem.textContent = `${userInfo.id} - ${userInfo.name}`
            list.appendChild(listItem)
        }

    })

    // Enviamos la petición (tiene que ir al final)
    xhr.send()

})