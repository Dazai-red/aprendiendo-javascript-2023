/* 
    2 - Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo.
    triángulo = b * h/2
    rectángulo = b * h
    círculo = π * r2 (pi * radio al cuadrado)
*/

let end=false;
let base, altura; //para no repetir codigo declaro estas dos variables 


while(!end){
    let figura = prompt(
        'Introduce figura geométrica (triángulo o rectángulo o círculo) para calcular el area:'
    );
    
    switch (figura) {
        case 'triángulo':
        case 'triangulo':
        case 'Triangulo':
            base = parseFloat(prompt('Introduce la base:'));
            altura = parseFloat(prompt('Introduce la altura:'));
            alert(`El resultado es: ${base} * ${altura}/2 = ${base*altura/2}`);
            end=true;
            break;
        case 'rectángulo':
        case 'rectangulo':
        case 'Rectángulo':
            base = parseFloat(prompt('Introduce la base:'));
            altura = parseFloat(prompt('Introduce la altura:'));
            alert(`El resultado es: ${base} * ${altura} = ${base*altura}`);
            end=true;
            break;
        case 'círculo':
        case 'circulo':
        case 'Circulo':
            let radio = parseFloat(prompt('Introduce el radio:'));
            alert(`El resultado es: π * ${radio}² = ${
                Math.round(
                    ((Math.PI*(Math.pow(radio, 2)))*100) / 100
                    )}`);
            end=true;
            break;
        default:
            alert('Lo siento no tenemos disponible esa figura, intentalo de nuevo');
            break;
    }
}


