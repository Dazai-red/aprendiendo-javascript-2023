const numbers = document.getElementById('numbers');
const result = document.getElementById('result');

let a = parseInt(prompt('Introduce el primer número'));
let b =parseInt(prompt('Introduce el segundo número'));
let c =parseInt(prompt('Introduce el tercer número'));

numbers.textContent = `Los números son: ${a}, ${b}, ${c} `;

// Ejercicio

if(a>=b && a>=c){
    if(b>c)
        result.textContent = `El orden es: ${a}, ${b}, ${c}`;
    else
        result.textContent = `El orden es: ${a}, ${c}, ${b}`;
}else if(b>=a && b>=c){
    if(a>c)
        result.textContent = `El orden es: ${b}, ${a}, ${c}`;
    else
        result.textContent = `El orden es: ${b}, ${c}, ${a}`;
}else if (c>=a && c>=b){
    if(a>b)
        result.textContent = `El orden es: ${c}, ${a}, ${b}`;
    else
        result.textContent = `El orden es: ${c}, ${b}, ${a}`;
}

