/* 
    
    Delimitadores:
        Existen varios más pero estos dos son los más usados:

        ^ Antes de este símbolo no puede haber nada
        $ Despues de este símbolo no puede haber nada
        ^hola$ 

    Cantidad:
        - llaves: lo que está antes tiene que
        aparecer la cantidad exacta de veces. Hay 
        tres combinaciones posibles:
            {n} Se tieneq ue repetir n veces
            {n,m} Se tiene que repetir entre n y m veces, ambas incluidas.
            {n,} Se tiene que repetir minimo n veces

        
        ^[a-zA-Z]{1,3}@{1}$

        -asterisco: Lo que está antes del asterisco
        puede estar, puede no estar y se puede repetir. .*@.*\..*
        -interrogación: lo que está antes de la
        interrogación puede no estar, pero si está
        solo puede aparecer una vez.
            ^[ae]?$
        -operador +: lo que esta antes del +
        tiene que estár una vez como mínimo
        A-[0-9]+

        La diferencia entre * y + es que le obligamos a que este algo como mínimo una vez mientras que el * no tiene porque
        haber algo.


*/

const text = document.getElementById('text').textContent
const regEx = /lorem/gi // lo más comun es ver esta forma de declararlo
// Se pueden declarar expresiones regulares de estas otras formas:
const regEx2 = new RegExp('lorem','gi')
const regEx3 = new RegExp('/lorem/', 'gi')

console.log(regEx.test(text))
