/* 
    Son fragmentos de código que escribimos para ejecutar una tarea
    y no volver a escribir el mismo código más de una vez.

    Nos ayudan a modularizar el código

    Las funciones deber de realizar una sola tearea y deben tener
    nombres que describar lo que hacen.

    Tenemos dos tipos de funciones 

    Funciones antiguas:

    function nombreFuncion(){
        //Código a ejecutar
    }

    Funciones flecha de ECMAScript 6:

    const nombreFuncion() => {
        //Código a ejecutar
    }

    Pueden recibir parámetros

    fuction nombreFuncion(parametro1, parametro2){
        //código a ejecutar
    }

    const nombreFuncion = (parametro1, parametro2) => {
        //código a ejecutar
    }

    Las funciones pueden devolver valores con la sentencia return

    Cuando existe un return el código que haya detras del mismo no se ejecutara

    fuction nombreFuncion(parametro1, parametro2){
        return parametro1+parametro2;
    }

    const nombreFuncion = (parametro1, parametro2) => {
        return parametro1+parametro2;
    }

    // Las funciones flecha pueden devolver valores sin escribir return si solo tenemos una sentencia
    // y no ponemos las llaves {} 

    const nombreFuncion = (parametro1, parametro2) => parametro1+parametro2;

*/

// sintaxis vieja de las funciones
/* 
    function saludar(){
        console.log('Hola');
    } 
 */
// sintaxis de ECMAScript 6
const saludar = () => console.log('Hola');
// llamada a la función
saludar();

const saludarUsuario = (user) => console.log(`Hola ${user}`); 
// llamada a la función
saludarUsuario('José');



// cuando tenemos un return el resto del código que este debajo no se ejecuta
/* const suma = (num1,num2) => {
    if(num1 == 2){
        return num1+num2;
    }
    console.log('Esto no se va a ejecutar si entre en el if')
    return num1;
} */

/* 
    las funciones de flecha pueden hacer un return sin escribirlo
    si no ponemos llaves y la instrucción es solo de una línea
*/

const suma = (num1, num2) => num1+num2;

let result = suma(3,6);

console.log('La suma de 3 y 6 es: '+result);