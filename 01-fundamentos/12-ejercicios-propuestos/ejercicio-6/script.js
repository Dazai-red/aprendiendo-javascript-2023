/* 
    6 - Escribe un programa que permita ir introduciendo una serie indeterminadade números mientras su suma no supere 50. Cuando esto ocurra, se debe mostrar el total acumulado y el contador de cuantos números se han introducido
*/

let num, contador=0, acumulado=0;


while(acumulado<=50){
    num = parseInt(prompt('Introduce números, cuando su suma sea mayor de 50 te mostrare el total acumulado y cuantos números has introducido'));
        
    if(!isNaN(num)){
        acumulado+=num;
        contador++;
    } else {
        alert('No has introducido un número, por favor vuelve a intentarlo');
    }
}


if(contador>1)
    alert(`El total acumulado es: ${acumulado} has introducido ${contador} números`);
else
    alert(`El total acumulado es: ${acumulado} has introducido ${contador} número`);





