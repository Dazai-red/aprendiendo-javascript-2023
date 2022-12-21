/* bucles */

/* 

    Bucle FOR OF / FOR IN

    Simplifica el bucle tradicional sin tener que darle un número
    de vueltas ni realizar un incremento.

    let names = [ 'Paco', 'José', 'Paula', 'María' ]

    se crea una variable pero no hay que igualarla a nada 
    simplemente ponemos el nombre de esa variable

    for(let name of names){
        console.log(name) //imprime cada nombre
    }

    vuelta 1: Paco
    vuelta 2: José
    vuelta 3: Paula
    vuelta 4: María

    El nombre de la variable puede ser el que queramos, pero por convención
    y habitualmente se suele escribir cuando tenemos un array en plural y
    la variable a recorrer en singular, de esta forma es muy intuitivo saber
    que va a hacer name.

    for(let name in names){
        console.log(name) //imprime cada indice del array: 0, 1, 2, 3
    }

    vuelta 1: 0
    vuelta 2: 1
    vuelta 3: 2
    vuelta 4: 3

    El bucle for in se suele utilizar para tratar con objetos pero
    podemos recorrer arrays sin problemas la cuestion es que nos va a devolver
    el número de indice no nos va a devolver el valor de la posición
    y con el for of nos devuelve el valor de la posición.

*/

let names = [ 'Paco', 'José', 'Paula', 'María' ]

for(let name of names){
    console.log(name);
}

for(let index in names){
    console.log(index);
}

for(let name of names){
    console.log(names.indexOf(name)); //Podemos hacer mismo comportamiento que for in de esta forma
}

for(let index in names){
    console.log(names[index]); //Podemos hacer mismo comportamiento que for of de esta forma
}

