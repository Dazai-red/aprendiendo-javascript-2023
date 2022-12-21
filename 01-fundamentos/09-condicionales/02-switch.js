/* 
    Se utiliza para elegir un camino de varios preestablecidos. Tenemos 2 tipos principales:

    Sintaxis simple:
    switch(evaluacion){
        case n1:
            //código
            brack;
        case n2:
            //código
            break;
        default:
            //código
    }

    Sintaxis multiple:
    switch(evaluación){
        case1:
        case2:
        case3:
            //código
            break;
        default:
            //código
    }

*/

let num = 4;

switch(num){
    case 1: 
        console.log(`${num} tiene valor 1`);
        break
    case 2:
        console.log(`${num} tiene valor 2`);
        break
    default:
        console.log(`${num} no tiene de valor 1 ni 2`);
}

switch(num){
    case 1:
    case 3:
    case 5:
        console.log(`${num} es impar`);
        break
    case 2:
    case 4:
        console.log(`${num} es par`);
}

let adversario = 'Hulk';
let loki = '';

switch(adversario){
    case 'Iron-Man':
        loki = 'Magneto';
        break;
    case 'Hulk':
        loki = 'Thanos'
        break;
    case 'Thor':
        loki = 'Odin'
        break;
    
    default:
        loki = 'Loki';
}

console.log(loki);

/* 
    Otra forma de hacer uso de switchs pero con una estructura diferente pero más escalable, limpio y legible  utilizando HASH TABLES 
*/

adversario = 'Iron-Man';

const LOKI_DISFRACES = {
    'Iron-Man': 'Magneto',
    Thor: 'Odin',
    Hulk: 'Thanos'
}

const LOKI_DEFAULT_DISFRAZ = 'Loki';

loki = LOKI_DISFRACES[adversario] || LOKI_DEFAULT_DISFRAZ;

console.log(loki);

/* 
    Tambien podríamos ejecutar metodos de esta forma: 

    const LOKI_DISFRACES = {
        'Iron-Man': ()=> 'Magneto',
        Thor: ()=> 'Odin',
        Hulk: ()=> 'Thanos'
    }

    no tiene porque ser unicamente String

*/