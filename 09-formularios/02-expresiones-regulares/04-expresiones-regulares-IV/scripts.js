/* 

    Caracteres:
        \s Coincide con un carácter de 
        espacio, entre ellos incluidos
        espacio, tab, salto de página, salto
        de linea y retorno de carro. 
        ^[a-zA-Z]+\s[a-zA-Z]+$
        \S Coincide con todo menos caracteres de espacio
        ^\S{5}$

        \d: Coincide con un carácter de número. Equivalente a [0-9] 
        ^\d{5}$

        \D Coincide con cualquier carácter no númerico. Equivalente a [!0-9]
        ^\D{5}$

        \w: Coincide con cualquier carácter alfanúmerico, incluyendo el guion bajo.
        Equivalente a [a-zA-Z0-9_] 
        ^\w+@$

        \W: Coincide con todo menos caracteres de palabra. ^\W+$



*/

const text = document.getElementById('text').textContent
const regEx = /lorem/gi // lo más comun es ver esta forma de declararlo
// Se pueden declarar expresiones regulares de estas otras formas:
const regEx2 = new RegExp('lorem','gi')
const regEx3 = new RegExp('/lorem/', 'gi')

console.log(regEx.test(text))
