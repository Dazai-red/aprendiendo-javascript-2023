/* 
    La diferencia respecto a fetch es que en fetch teniamos que convertir el objeto a mandar 
    en data JSON.stringify(objeto a mandar) y además mandabamos las cabeceras con 
    application/json en axios no tenemos que hacerlo porque el ya se encarga de convertirlo
    en string para enviarlo esto lo hace internamente.

    Tampoco tenemos que convertir la respuesta a objeto javascript porque ya lo hace 
    internamente axios por nosotros.

    Para capturar errores igual que en get usando .catch(err => console.log(err))

*/

const button = document.getElementById('button')

button.addEventListener('click', () =>{
    axios({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        data: {
            title: 'A new post',
            body: 'lorem ipsum dolor sit amet consectetur adispisicing elit.',
            userId: 1
        }
    }).then(res => console.log(res.data))
        .catch(err => console.log(err))
})