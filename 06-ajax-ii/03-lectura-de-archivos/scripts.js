/* 
    Fetch API

    .blob() Binary Long Object función que sirve para 

    URL es un objeto que si a URL le pasamos un objeto de tipo blob lo que hace es
    construir un link valido para visualizar ese archivo con la función createObjectURL(objeto blob).

    Esto sirve para imagenes, pdfs, videos audio etc para lo que no sirve es para texto para ello 
    haremos uso de otras funciones.

*/

const buttonImg = document.getElementById('button-img')
const buttonPdf = document.getElementById('button-pdf')

buttonImg.addEventListener('click', ()=>{
    fetch('dog.jpg')
        .then(res => res.blob())
        .then(img => {
            // el url se genera distinto cada vez que le damos al botón
            document.getElementById('img').src = URL.createObjectURL(img)
        })
})

buttonPdf.addEventListener('click', ()=>{
    fetch('demo.pdf')
        .then(res => res.blob())
        .then(pdf => {
            document.getElementById('pdf').href = URL.createObjectURL(pdf)
        })
})