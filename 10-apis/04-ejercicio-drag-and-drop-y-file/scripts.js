const fileInput = document.getElementById('file')
const dropZone = document.getElementById('drop-zone')

// para que al hacer click en la dropzone se active el input de file (nos aparezca la ventana de explorador de archivos)
dropZone.addEventListener('click', () => fileInput.click())

// estos dos eventos se encargan de cambiar los estilos de la dropzone 

dropZone.addEventListener('dragover', (e) => {
    e.preventDefault()
    dropZone.classList.add('drop-zone--active')
})

dropZone.addEventListener('dragleave', (e) => {
    e.preventDefault()
    dropZone.classList.remove('drop-zone--active')
})

// el objeto datatransfer.files contiene los archivos que estamos dejando en la zona y los metemos en el array de files del inputfiles

dropZone.addEventListener('drop', (e) => {
    e.preventDefault()
    fileInput.files = e.dataTransfer.files
    console.log(fileInput.files);
})

fileInput.addEventListener('change', (e) => {
    console.log(fileInput.files);
})