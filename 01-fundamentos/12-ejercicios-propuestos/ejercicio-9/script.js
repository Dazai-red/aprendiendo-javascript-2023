/* 
    9 - Solicitar al usuario una palabra y mostrar por consola el número de consonantes, vocales y longitud de la palabra.
*/

const vocales = ['a','e', 'i', 'o', 'u','A','E','I','O','U','á','é', 'í', 'ó', 'ú','Á','É','Í','Ó','Ú'];
const consonantes = ['q','Q','w','W','r','R','t','T','y','Y','p','P','s','S','d','D','f','F','g','G','h','H','j','J','k','K','l','L','ñ','Ñ','z','X','c','C','v','V','b','B','n','N'];

// Colocando la función tolowerCase no es necesario que el array contenga mayus

// let palabra = prompt('Introduce una palabra y te dire el número de vocales, consonantes y su longitud').toLowerCase();

let palabra = prompt('Introduce una palabra y te dire el número de vocales, consonantes y su longitud');
let numVocales=0;
let numConsonantes=0;

for(let i=0; i<palabra.length;i++){
    for (const letra of vocales) { 
        if(palabra[i]===letra){
            numVocales++;
        }
    }
    for (const letra of consonantes) {
        if(palabra[i]===letra){
            numConsonantes++;
        }
    }
}

alert(`El número de letras que tiene ${palabra} es de ${palabra.length}, el número de vocales es: ${numVocales} y el número de consonantes es: ${numConsonantes}`);




