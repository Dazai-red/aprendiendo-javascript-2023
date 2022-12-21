/* 
    4 - Escribe un programa que pida un número entero mayor que 1 y que escriba si el número primo o no.
    Un número primo es aquel que solo es divisible por sí mismo y la unidad
*/

let num;
let divisores=0;
while(isNaN(num)){
    num = prompt('Introduce un número y comprobare si es primo o no');
    if(num===1) alert('El número 1 no es valido.');
    else{
        for(let i=2;i<num;i++){
            if(num % i == 0){
                alert(`${num} / ${i} = ${num / i} - No es primo`);
                divisores++;
                break;
            }
        }
    }
}

if(divisores===0) alert(`${num} es primo.`);


