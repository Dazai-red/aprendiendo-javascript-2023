/* 
    https://developer.mozilla.org/es/docs/Web/API/IndexedDB_API
*/

const indexedDB = window.indexedDB
const form = document.getElementById('form')
const tasks = document.getElementById('taks')

if(indexedDB && form){
    let db
    const request = indexedDB.open('taskList',1)

    request.onsuccess = () =>{
        db = request.result
        console.log('OPEN',db)
        readData()
    }

    request.onupgradeneeded = (e) =>{
        db = e.target.result
        console.log('Create', db)
        const objectStore = db.createObjectStore('tasks', {
            autoIncrement: true
        })
    }

    request.onerror = (error) => {
        console.log('Error',error)
    }

    const addData = (data) => {
        const transaction = db.transaction(['tasks'],'readwrite')
        const objectStore = transaction.objectStore('tasks')
        const request = objectStore.add(data)
        readData()
    }

    const readData = () => {
        // el valor por defecto es readonly por lo que podriamos poner solo un parametro
        const transaction = db.transaction(['tasks'],'readonly')
        const objectStore = transaction.objectStore('tasks')
        const request = objectStore.openCursor()
        const fragment = document.createDocumentFragment()
        request.onsuccess = (e) =>{
            console.log(e.target.result)
            const cursor = e.target.result
            
            if(cursor){
                console.log(cursor.value)
                const taskTitle = document.createElement('P')
                taskTitle.textContent = cursor.value.taskTitle
                const taskPriority = document.createElement('P')
                taskPriority.textContent = cursor.value.taskPriority
                fragment.appendChild(taskTitle)
                fragment.appendChild(taskPriority)
                // para seguir leyendo datos (mover el cursor al siguiente)
                cursor.continue()
            }else {
                // ya ha terminado de leer los datos cuando no existe cursor
                console.log('No more data')
                // eliminamos el contenido que ya tiene para no repetir los datos que ya tenemos
                tasks.textContent = ''
                console.dir(fragment)
                tasks.appendChild(fragment)
            }
        }
    }

    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        const data = {
            taskTitle: e.target.task.value,
            taskPriority: e.target.priority.value
        }
        addData(data)
    })

}