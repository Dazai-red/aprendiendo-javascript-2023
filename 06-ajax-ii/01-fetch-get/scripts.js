/* 
    Fetch API 
    Es el reemplazo moderno para sustituir XMLHTTPREQUEST.
    Proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, como
    peticiones y respuestas.
    fetch trabaja internamente con promesas creando internamente una promesa nos facilita
    la escritura de código escribiendo fetch.

    Fetch es más potente de lo que parece normalmente se utiliza para hacer peticiones a APIS
    o servidores pero podemos hacer muchas más cosas. Por ejemplo traernos el HTML entero de 
    una página, leer archivos de texto que tengamos en el equipo, leer formularios, etc.


    También provee un método global fetch() que proporciona una forma fácil y lógica de
    obtener recursos de forma asíncrona por la red.
    Esta basado en promesas, por lo cual tiene un response y un reject internos.
        response tiene varios métodos
        arrayBuffer(): Archivos binarios en bruto (mp3, pdf, jpg, etc) Se utiliza cuando se
        necesita manipular el contenido del archivo.
        blob(): Archivos binarios en bruto (mp3, pdf, jpg, etc) Se utiliza cuando no se 
        necesita manipular el contenido y se va a trabajar con el archivo directamente.
        clone(): crea un clon de un objeto de respuesta, idéntico en todos los sentidos, pero
        almacenado en una variable diferente.
        formData(): Se utiliza para leer los objetos de formData
        json(): Convierte los archivos json a un objeto de JavaScript
        text(): Se utiliza cuando queremos leer un archivo de texto. Siempre se codifica
        en UTF-8

        comprobación soporte fetch (no funciona en Internet Explorer)
        if(window.fetch != undefined) console.log('FETCH OK')
        else console.log('FETCH NOT WORKS!') 

*/

const button = document.getElementById('button')

// res = response = respuesta
button.addEventListener('click', ()=>{
    // esta línea de then iria debajo del fetch 
    // .then(res => console.log(res.ok))
    // ok: true y status: 200 significa que la petición ha sido correcta
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
        .then(res => res.json())
        .then(res => {
            console.log(res)
            const list = document.getElementById('list')
            const fragment = document.createDocumentFragment()
            for(const userInfo of res){
                const listItem = document.createElement('LI')
                listItem.textContent = `${userInfo.id} - ${userInfo.name}`
                fragment.appendChild(listItem)
            }
        list.appendChild(fragment)
        })
})

