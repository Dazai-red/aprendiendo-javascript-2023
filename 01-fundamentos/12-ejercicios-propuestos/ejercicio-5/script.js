/* 
    5 - Escriba un programa que pida un número entero mayor que cero y calcule su factorial.
    El factorial es el resultado de multiplicar ese número por sus anteriores hasta la unidad.

    !5 = 5*4*3*2*1 = 120
*/

let num;
let primo=true;
while(isNaN(num)){
    num = prompt('Introduce un número y calculare su factorial');
    if(!isNaN(num)){
    let resultado=num;
    let numeros=[];

    for(let i=(num-1);i>=1;i--){
        if(i==1)
            numeros.push(i);
        else {
            numeros.push(i+'*');
        }
        
        resultado*=i;
        console.log(resultado)
    }
    console.log('!'+num+' = '+resultado);
    console.log(numeros);
    let texto='';
     for(let i=0;i<numeros.length;i++) {
        if(i==0)
            texto+=`${num}*`;
        texto+=numeros[i];
    }
    texto+=' = '+resultado; 
    alert(texto);
    
    } else {
        alert('No has introducido un número, por favor vuelve a intentarlo');
    }
}

// Forma más simple pero sin mostrar por pantalla cada múltiplicación

let numDos = parseInt(prompt('Introduce un número'));
let result=1;

for(let i = numDos; i>1;i--){
    result*=i;
}

alert(`El factorial de ${numDos} es ${result}`);



