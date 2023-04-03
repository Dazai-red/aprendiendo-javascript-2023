/* 
    Las promesas son objetos que dentro tienen dos callbacks internos

    Las promesas tienen mucho más que lo que se explica aquí pero esto
    es una introducción para poder empezar a trabajar con ellas
    y entender fetch en un futuro ampliare esta información con más ejemplos.

*/


const users = [
    {
        id: 1,
        name: 'Dorian'
    },
    {
        id: 2,
        name: 'Laura'
    },
    {
        id: 3,
        name: 'Carlos'
    }
]

const emails = [
    {
        id: 1,
        email: 'dorian@gmail.com'
    },
    {
        id: 2,
        email: 'laura@gmail.com'
    }
]

const getUser = (id) => {
    const user = users.find(user=>user.id==id)
    const promise = new Promise((resolve, reject)=>{
        // resolve y reject son callbacks viene ya programado en el objeto promise
        // resolve se ejecuta cuando todo salga bien y reject cuando haya algun error
        if(!user) reject(`Doesn't exist an user with id ${id}`)
        else resolve(user)

    })   
    
    return promise

}

const getEmail = (user) =>{
    const email = emails.find(email=>email.id==user.id)
    // podemos retornar la promesa directamente de esta forma:
    return promise = new Promise((resolve, reject)=>{
        if(!email) reject(`${user.name} hasn't email`)
        else resolve({
            id: user.id,
            name: user.name,
            email: email.email
        })
    })
}

// mostrar promesa
console.log(getUser(1));


/* // uso de promesas:
getUser(5)
// accedemos a la información encapsulada que no podemos acceder de forma directa de la promesa
    .then(user => {
        return console.log(user)
    })
// tratamos errores (si no lo ponemos nos aparecera un uncaught error igualmente muestra el mensaje de reject)
    .catch(err => console.log(err)) */


// podemos simplificarlo de esta forma: (las funciones de flecha no necesitan return si es 1 línea)
getUser(2 )
    .then(user => getEmail(user))
    .then(res => console.log(res))
    .catch(err => console.log(err))



// podemos simplificarlo aún más de esta forma pero no se ve del todo claro 
/* getUser(1)
    .then(getEmail)
    .then(console.log)
    .catch(console.log) */