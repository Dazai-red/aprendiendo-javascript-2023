/* 
    Comodines:
        -Sustitución: Define un comodín dentro del
        patron. El simbolo es el . 
        (es parecido en windows a usar ? para cada 
        caracter que no sabemos cual es)

        Para poner un punto de verdad lo que hacemos es usar
        secuencias de escape de esta forma: \.

        -Listado de caracteres válidos: Entre corchetes 
        se pone una lista de los caracteres válidos.
        [aeiou] con esto cogeriamos todas las vocales.

        -Rangos: Entre corchetes si ponemos un guión 
        entre dos caracteres establecemos un rango. [a-z]
        todas las letras minúsculas.

        Si tenemos dudas sobre como va el orden de los cáracteres
        en los rangos podemos hacer uso de la tabla asci:
        https://ascii.cl/es/

        -Mezcla entre rangos y listas:
            Podemos unir los dos anteriores en una sola 
            expresión. [0-5ou] Serían números del 0 al 5,
            la letra "o" y la letra "u"

        Cadenas completas:
            Para establecer una cadena completa debe ir
            entre paréntesis. Si queremos más palabras
            iran separadas por un pipe. (lorem|amet) es
            válida la palabra "lorem" y la palabra "amet"
*/

const text = document.getElementById('text').textContent
const regEx = /lorem/gi // lo más comun es ver esta forma de declararlo
// Se pueden declarar expresiones regulares de estas otras formas:
const regEx2 = new RegExp('lorem','gi')
const regEx3 = new RegExp('/lorem/', 'gi')

console.log(regEx.test(text))
