const numbers = document.getElementById('coeficientes-y-independiente');
const result = document.getElementById('resultados');

let a = parseFloat(prompt('Introduce el coeficiente numerico de x<sup>2</sup>:'));
let b =parseFloat(prompt('Introduce el coeficiente numerico de x:'));
let c =parseFloat(prompt('Introduce el termino independiente:'));

numbers.textContent = `a = ${a}, b = ${b}, c = ${c} `;

let determinante = Math.pow(b,2)-(4*a*c);

if(determinante>0){
    let x1 = ( (b*(-1))+Math.sqrt(determinante)) / (2*a);
    let x2 = ( (b*(-1))-Math.sqrt(determinante)) / (2*a);
    result.textContent = `El valor de x1 = ${x1} y el valor de x2 = ${x2} `;
}else{
    result.textContent = 'El determinante es negativo y no se puede completar la operación';
}