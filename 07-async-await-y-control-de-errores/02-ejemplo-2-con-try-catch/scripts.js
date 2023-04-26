/* 
    
    Vamos a hacer uso de try catch para resolver errores.

    try{
        bloque de código a ejecutar si todo es correcto
    } catch (error){
        código que se ejecuta si aparece un error
        podemos mostrar el error con console.log(error)
    }

    Cuando escribimos throw new Error('mensaje de error a mostrar') lo que hacemos es lanzar
    un error este error se controla a través de un try catch posteriormente.

    Ejemplo II un poco más complejo en base al ejemplo anterior de promesas con users emeail.

*/

const users = [{ id:1, name: 'Dorian' }, { id: 2, name: 'Laura' }, { id: 3, name: 'Carlos' }]

const emails = [{ id:1, email: 'dorian@gmail.com' }, { id: 2, email: 'laura@gmail.com' }]

const getUser = async (id) => {
    const user = users.find(user => user.id ==id)
    if(!user) throw new Error(`Doesn't exist an user with id ${id}`)
    else return user
}

const getEmail = async (user) =>{
    const email = emails.find(email => email.id == user.id)
    if(!email) throw new Error(`${user.name} hasn't email`)
    else return ({
        id: user.id,
        name: user.name,
        email: email.email
    })
}

const getInfo = async(id) => {
    try {
        const user = await getUser(id)
        const res = await getEmail(user)
        return `${res.name} email is ${res.email}` 
    } catch (error){
        console.log(error)
    }
}

getInfo(1).then(res=>console.log(res))
