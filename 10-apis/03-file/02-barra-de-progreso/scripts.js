const fileInput = document.getElementById('file')
const progress = document.getElementById('progress')

/* fileInput.addEventListener('change', (e)=>{
    const file = e.target.files[0]
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    
    // para controlar el progreso de la subida de un archivo tenemos 2 eventos progress y loadend
    fileReader.addEventListener('progress', (e)=>{
        // con esta sucesión de números controlamos cuanto tiene que crecer nuestra barra (width)
        // console.log(e.loaded) // tamaño que lleva actualmente
        // console.log(e.total) // tamaño total del archivo
        
        // convertimos e.loaded en porcentaje aplicando la siguiente regla de 3: loaded*100 / total     
        // el 100% no sale porque este evento se ejecuta mientras esta cargando el 100% sería con el evento loadend
        console.log(e.loaded * 100 / e.total)
        // lo pasamos a int para que css lo entienda
        progress.style.width = Number.parseInt(e.loaded * 100 / e.total) + '%'
    })

    // parece que a día de hoy no es necesario este evento porque el evento progress llega a 100
    fileReader.addEventListener('loadend', ()=>{
        console.log('END')
        progress.style.width = '100%'
    })
}) */


// raiz del documento para poder acceder a las variables
const root = document.documentElement

console.log

fileInput.addEventListener('change', (e)=>{
    const file = e.target.files[0]
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    
    fileReader.addEventListener('progress', (e)=>{
        root.style.setProperty('--bar-width', Number.parseInt(e.loaded * 100 / e.total) + '%')
    })

    // no es necesario este evento en versiones actuales de navegadores
    fileReader.addEventListener('loadend', ()=>{
        root.style.setProperty('--bar-width', '100%')
    }) 
})

// podriamos hacer uso de de degradados para animarlo,
// poner en otro elemento el porcentaje que lleva de forma dinámica