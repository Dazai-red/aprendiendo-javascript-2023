/* 

    https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_expressions

    Para prácticar expresiones regulares:
    https://regex101.com/ 

    Expresiones regulares:
        Son una secuencia de caracteres que forma un patrón de búsqueda,
        principalmente utilizada para la búsqueda de patrones de cadenas
        de caracteres u operaciones de sustituciones.

    sintaxis:
        /patron/banderas
    Banderas:
        i: ignore case. No diferencia entre mayusculas y minúsculas
        g: global. Busca de forma global, es decir, no se para de buscar
        después de la primera coincidencia
        m: modo multi línea
*/

const text = document.getElementById('text').textContent
const regEx = /lorem/gi

console.log(regEx.test(text))
// con metodos de cadenas aunque no hace exactamente lo mismo
console.log(text.includes('Lorem'))