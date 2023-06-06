// Si llamamos a la constate de la misma forma que indexedDB tendremos que poner la referencia a window o tendremos un error
const indexedDB = window.indexedDB
// otra opción es llamar a la constante de otra forma
// const idb = indexedDB

// Los navegadores modernos soportan indexedDB pero para comprobarlo
if(indexedDB){
    // variable que va a almacenar la db
    let db 
    // método open() 2 parametros: nombre de la base de datos y la versión en int (son distintas bases de datos cada uno)
    const request = indexedDB.open('tasklist',1)
    
    request.onsuccess = ()=>{
        db = request.result
        console.log('OPEN', db)
    }

    // este método es el que se ejecuta primero si la bd esta creada no hace el console.log(create) pasa al método onsuccess
    // todas las operaciones de creación bd, eliminación, lectura lo hacemos en esté método
    request.onupgradeneeded = () =>{
        db = request.result
        console.log('Create', db)
        // creamos el almacen de datos
        const objectStore = db.createObjectStore('tasks')
        // podríamos crear varios
        // const objectStore2 = db.createObjectStore('tasks2')
    }

    request.onerror = (error) =>{
        console.log('Error', error)
    }

}