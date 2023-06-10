/* 
    https://developer.mozilla.org/en-US/docs/Web/API/Notification

    Las notificaciones son los mensajes que nos aparecen normalmente a la derecha cuando el navegador quiere
    hacer algo en nuestro equipo.

    El usuario debe permitirlas para que se muestren.


*/

const permissions = document.getElementById('permissions')

permissions.addEventListener('click', () => {
    // tenemos 3 opciones: 'default' (lo que tenga el navegador por defecto), 'denied' (denegado), 'granted' (permitido)
    if (Notification.permission !== 'granted'){
        getPermissions()
    } else {
        notify()
    }
})

const getPermissions = () => {
    // nos devuelve una promesa
    Notification.requestPermission()
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

const notify = () => {
    // hay más opciones en la documentación
    const options = {
        body: 'Contenido de la notificación',
        icon: 'world.png',
        data: 'este texto lo podemos obtener desde JS',
        lang: 'es',
        tag: 'etiquetas: notification demo'
        // dir: 'auto' sería la dirección del texto
    }
    //el primer pármetro es el título de la notificación, el segundo es opcional y son opciones de la notificación
    const notificaction = new Notification('Hello world', options)

    // eventos disponibles

    notificaction.addEventListener('close', () => console.log('notificación cerrada'))
    notificaction.addEventListener('show', () => console.log('notificación mostrada'))

    console.log(notificaction)
}