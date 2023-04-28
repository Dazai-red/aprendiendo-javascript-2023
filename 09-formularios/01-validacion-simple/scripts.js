/* 
    Lo importante es controlar que los datos no se envien hasta que no estemos seguros de 
    que son correctos. De todas formas en el lado del cliente siempre se va a poder falsear.
    Si alguien que sabe quiere enviar el formulario con los datos sin rellenar si quiere 
    lo puede hacer por eso es tan importante validarlos tambien en el backend.

    No es la ideal pero es para entender como funcionan las validaciones. Esta forma nos puede
    servir para formularios pequeños como los de login o registro aun así los campos de texto
    no se validan de esta forma para ello se utilizan expresiones regulares

*/

const form = document.getElementById('form')
// Importante el boton de submit no puede tener de id submit porque entra en conflicto 
const button = document.getElementById('submitButton')

const name = document.getElementById('name')
const email = document.getElementById('email')
const gender = document.getElementById('gender')
const terms = document.getElementById('terms')

/* 
    construir objeto contiene propiedades a enviar del form se inicializan en false
    para posteriormente ir cambiandolas a true cuando se rellenen los campos en el form
*/

const formIsValid = {
    name: false,
    email: false,
    gender: false,
    terms: false
}

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    // pordiamos poner el código de la función aquí pero es mejor separarlo por legibilidad
    validateForm()
})

/* 
    hay gente que utiliza el evento 'keyup' pero esto tiene un problema y es que si el 
    usuario copia y pega sin usar el telcado no se registra por eso es mejor usar 'change' 
    registra cualquier tipo de cambio al campo que estemos controlando
*/

name.addEventListener('change', (e) => {
    // la función trim() sirve para quitar espacios en blanco y .length para mostrar su longitud
    console.log(e.target.value.trim().length)
    if(e.target.value.trim().length > 0) {
        formIsValid.name = true
        console.table(formIsValid) //muestro el objeto en forma de tabla por consola
    }
   
})

email.addEventListener('change', (e) => {
    if(e.target.value.trim().length > 0) formIsValid.email = true
})


gender.addEventListener('change', (e) => {
    if(e.target.checked) formIsValid.gender = true
})

terms.addEventListener('change', (e) => {
    formIsValid.terms = e.target.checked
    // setAttribute('atributo a añadir', true) es necesario el true
    e.target.checked ? button.removeAttribute('disabled') : button.setAttribute('disabled', true)
})

/* 
    metodo de objeto Object.values(objeto)
    Object.values(objeto) coge todos los valores del objeto y los transforma en un array

    función de arrays
    .findIndex(value => value == false) si findIndex no encuentra un valor que sea falso 
    devuelve -1 si encuentra algun valor con false del array devuelve el indice de ese false
    
    la función value => value == false es una función de flecha que inventamos nosotros para
    hacer los criterios de busqueda dentro de un array.

*/

const validateForm = () =>{
    const formValues = Object.values(formIsValid)
    const valid = formValues.findIndex(value => value == false)
    if(valid == -1) form.submit()
    else alert('Form invalid')
}