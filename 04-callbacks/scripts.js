/* 
    Para entender las promesas necesitamos conocer los problemas que dan los callbacks por eso esta pausa de AJAX.
    
    Un callback es una función que se ejecuta a través de una función

    Los callbacks no son asíncronos, es decir se ejecutan en orden

    cb es una abreviatura de callback

*/

// Ejemplo 1

/* const getUser = (id, cb) =>{
    const user = {
        name: 'Dorian',
        id: id // con la sintaxis nueva de javascript podríamos poner unicamente id siendo igual que id: id
    }

    // console.log(user)
    // cb(null,user)
    // cb('user not exist')

    if(id==1) cb(null, user)
    else cb('User not exist')

    
}

getUser(1, (err, user)=>{
    if(err) return console.log(err)
    console.log(`User name is ${user.name}`)
}) */

// Ejemplo 2

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

const getUser = (id, cb) => {
    const user = users.find(user=>user.id==id)
    // console.log(user)
    // es lo mimo poner !user que user==undefined
    if(!user) cb(`Not exist a user with id ${id}`)
    else cb(null, user)

}

const getEmail = (user, cb) =>{
    const email = emails.find(email=>email.id==user.id)
    if(!email) cb(`${user.name} hasn't email`)
    else cb(null, {
        id: user.id,
        name: user.name,
        email: email.email
    })
}
// este es el error del que se habla (nos muestra solo el consolelog del callback de email si escribimos el id 3(que no tiene correo))
getUser(3,(err, user)=>{
    if(err) return console.log(err)
    // otro problema es el callbackhell es decir llamar a muchas funciones dentro de una misma siendo muy dificil de mantener
    getEmail(user, (err,res) => {
        if(err) return console.log(err)
        console.log(res)
    })
})