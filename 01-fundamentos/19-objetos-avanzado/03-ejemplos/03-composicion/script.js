/* 
    Composición: capacidad de un objeto de referir a otros objetos dependientes.
     Es decir un objeto grande que esta formado por multiples objetos pequeños 
     pero si sacamos un objeto pequeño del grande el grande ya no seriviria o 
     funcionaria correctamente.
*/

// el objeto de dirección podría desacoplarse de person pero no tendría mucho sentido porque esta fuertemente relacionado con person

const person = {
    name: 'ryan',
    lastname: "ray",
    adddres: {
        street: "123 baker street",
        city: "london",
        country: "United kingdom"
    }
}

console.log(person)