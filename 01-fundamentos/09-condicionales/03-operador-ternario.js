/* 
    Se utiliza cuando una condición será true o false, al igual que if

    Su ejecución puede tener una o varías sentencias, en este caso irán separadas
    por comas y entre paréntesis.

    (condición) ? true : false

    (condición) ?
        (
            primera sentencia,
            segunda sentencia
        )
        :
        (
            primera sentencia,
            segunda sentencia
        )

    El operador ternario consume menos recursos que un if
*/

let num = 2; 

// es igual a un if pero con otra sintaxis

if(num % 2 == 0)
    console.log(`${num} es par`);
else
    console.log(`${num} es impar`);   


(num % 2 == 0) ? console.log(`${num} es par`) : console.log(`${num} es impar`);

(num % 2 == 0) ?
    (
        console.log(`${num} es par`),
        console.log(`${num} es par 2`)
    )
    :
    (
        console.log(`${num} es impar`),
        console.log(`${num} es impar 2`)
    )