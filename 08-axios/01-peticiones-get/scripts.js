/* 
    Axios es una libreria basada en promesas para el cliente y el servidor.
    Hay mucha gente que sigue usando JQUERY simplemente por las peticiones AJAX
    esta librería pesa mucho menos que JQUERY.

    Esta libreria tiene transformación automatica cuando hacemos peticiones JSON.
    Tiene soporte para Internet explorer 11.

    Podemos usar XMLHTTPREQUEST, fetch o exios pero si nuestro proyecto solo va a
    hacer peticiones a una API REST para traer datos axios es muy buena opción
    porque es la libreria que mejor optimizada esta para esto ya que las peticiones
    las hace en un menor tiempo que otras.


    para controlar errores usamos .catch(err => console.log(err))

*/

const button = document.getElementById('button')

button.addEventListener('click', ()=>{
    axios({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/users'
    }).then(res =>{
        console.log(res) 
        console.log(res.data) // nos ahorramos el metodo json
        const list = document.getElementById('list')
        const fragment = document.createDocumentFragment()
        for(const userInfo of res.data) {
            const listItem = document.createElement('LI')
            listItem.textContent = `${userInfo.id} - ${userInfo.name}`
            fragment.appendChild(listItem)
        }
        list.appendChild(fragment)
    }).catch(err => console.log(err))
})