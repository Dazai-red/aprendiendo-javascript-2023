const form = document.getElementById('form')

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    // Enviamos el propio formulario
    sendData(form)
})

const sendData = (data) => { 
    let xhr
    if (window.XMLHttpRequest) xhr = new XMLHttpRequest()
    else xhr = new ActiveXObject("Microsoft.XMLHTTP")

    xhr.open('POST', 'marvel.php')

    // creamos un objeto formdata al que le pasamos como parametro el propio formulario
    const formData = new FormData(data)

    xhr.send(formData)
    
}