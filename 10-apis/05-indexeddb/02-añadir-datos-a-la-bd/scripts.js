const indexedDB = window.indexedDB
const form = document.getElementById('form')

if(indexedDB && form){
    let db 
    const request = indexedDB.open('taskList',1)

    request.onsuccess = () =>{
        db = request.result
        console.log('OPEN', db)
    }

    request.onupgradeneeded = () =>{
        db = request.result
        console.log('Create', db)
        const objectStore = db.createObjectStore('tasks', {
            //generar claves automáticamente (igual que sql con los ids autoincrement)
            // autoIncrement: true
            //podemos hacer que una key del objeto que vamos a enviar sea la propia clave
            keyPath: 'taskTitle'
        })
        // nos aparecera un error para solucionarlo tenemos que configurar los keys 

    }

    const addData = (data) => {
        // todas las operaciones funcionan con transacciones, estas tienen 2 parametros: almacen y de que modo vamos a trabajar
        // modo de trabajar: el valor por defecto es readonly, luego tenemos readwrite
        const transaction = db.transaction(['tasks'],'readwrite')
        // abrir almacen de datos
        const objectStore = transaction.objectStore('tasks')
        const request = objectStore.add(data)
    }

    form.addEventListener('submit', (e)=>{
        e.preventDefault()
        const data = {
            taskTitle: e.target.task.value,
            taskPriority: e.target.priority.value
        }
        console.log('Datos del formulario: ')
        console.log(data)
        addData(data)
    })
}
