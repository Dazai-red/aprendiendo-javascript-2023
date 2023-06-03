/* 
    API file
        Esta API nos sirve para leer archivos que el usuario carge en la web. Se pueden cargar archivos desde un input
        de tipo file o desde el objeto DataTransfer de la API Drag&Drop.

        La interfaz más utilizada para interactuar con ella es FileReader
        https://developer.mozilla.org/es/docs/Web/API/FileReader

*/

const fileInput = document.getElementById('file')
const img = document.getElementById('img')
const text = document.getElementById('text')
const images = document.getElementById('images')

// para cargar un documento de texto

/* fileInput.addEventListener('change', (e)=>{
    // con esto tenemos algo de info del archivo pero no tenemos acceso al contenido del archivo
    // el array de files nos dice que ficheros estamos subiendo (con el atributo HTML multiple podemos subir varios archivos)
    // console.log(e.target.files)
    const file = e.target.files[0]
    const fileReader = new FileReader()
    fileReader.readAsText(file)
    // Usamos este evento para que cuando termine de leer el fichero se ejecute
    fileReader.addEventListener('load', (e)=>{
        console.log(e.target.result)
        text.textContent = e.target.result
    })
}) */

// cargando una imágen

/* fileInput.addEventListener('change', (e)=>{
    const file = e.target.files[0]
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.addEventListener('load', (e)=>{
        img.setAttribute('src', e.target.result)
    })
}) */

// cargar varias imágenes (es necesario tener el atributo multiple en el input file en el html)

fileInput.addEventListener('change', (e)=>{
    const files = e.target.files
    const fragment = document.createDocumentFragment()
    // const fileReader = new FileReader()
    // debemos de instanciar fileReader dentro del bucle porque este se autodestruye una vez de usa 
    // cuando tengamos el error: an attempt was made to use an object that is not or is no longer usable es por esto.
    for(const file of files){
        const img = document.createElement('IMG')
        const fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        fileReader.addEventListener('load',(e)=>{
            img.setAttribute('src',e.target.result)
        })
        fragment.appendChild(img)
    }
    images.appendChild(fragment)
})
