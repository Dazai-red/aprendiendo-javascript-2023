/* 
    8 - Dado un array de letras, solicita un número de DNI y calcula que letra le corresponde. El número no puede ser negativo ni tener más de 8 dígitos. La posición de la letra es el resultado del módulo del número introducido entre 23

    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
*/

let dniValido=false;
let numDni;
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];


while(!dniValido){
    numDni = prompt('Introduce los números de tu DNI y te dire la letra que le corresponde: ');
    if(!isNaN(numDni)){
        if((numDni>0)){
            if(numDni<99999999){
                alert(`Tu DNI completo es: ${numDni}${letras[numDni % 23]}`);
                dniValido=true;
            }else{
                alert('El número no puede ser mayor a 8 digitos');
            }
        }else{
            alert('No has introducido un número positivo por favor vuelve a intentarlo');
        }
    }else{
        alert('No has introducido un número por favor vuelve a intentarlo.');
    }
}





