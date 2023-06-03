const pendingTasks = document.getElementById('pending-tasks')
const finishedTasks = document.getElementById('finished-tasks')
//dataTransfer es un objeto contiene toda la información del objeto que estamos arrastrando
    //setData: Establece la información que queremos compartir
    //getData: Establece la información que queremos obtener
pendingTasks.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id)
})


// para dar un efecto visual usamos estos dos eventos
pendingTasks.addEventListener('drag', (e) => {
    e.target.classList.add('active')
})

pendingTasks.addEventListener('dragend', (e) => {
    e.target.classList.remove('active')
})

//Es obligatorio el evento dragover y preventdefault si no no funciona, el preventdefault
finishedTasks.addEventListener('dragover', (e) => {
    e.preventDefault()
})
// obtenemos los datos de dataTransfer y lo guardamos en una variable
finishedTasks.addEventListener('drop', (e) => {
    e.preventDefault()
    const element = document.getElementById(e.dataTransfer.getData('text'))
    element.classList.remove('active')
    // pendingTasks.removeChild(element) devuelve 
    finishedTasks.appendChild(pendingTasks.removeChild(element))
})