/* 
    Fetch API
    Las peticiones POST sirven para enviar datos y hacer insercciones en una API o en un base de datos.
    Para hacer peticiones POST, fetch admite un segundo parámetro.
    fetch(url, {
        method: 'POST',
        body: los datos que enviamos. Si es un objeto hay que convertiro con 
        JSON.stringify(datos),
        headers: {
            cabeceras de información sobre lo que estamos enviando 
            https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
            no son los mismos headers cuando enviamos un json que una imágen o 
            cuando enviamos un formulario.
        }
    })

    Se puede complicar mucho más pero esto sería lo básico para poder empezar a trabajar.

*/

const button = document.getElementById('button')

button.addEventListener('click', () =>{
    const newPost = {
        title: 'A new post',
        body: 'Lorem ipsum dolor sit amet consecteur adispisicing elit.',
        userId: 1
    }
    console.log(newPost)
    /* 
        cuando recibimos los datos nos llega en formato json, no podemos leerlo directamente
        tenemos que convertirlo a objeto js ahora hacemos el proceso contrario 
    */
    console.log(JSON.stringify(newPost))
    
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers:{
            "Content-type": "application/json"
        }
    }).then(res => res.json())
    .then(data => console.log(data))
})