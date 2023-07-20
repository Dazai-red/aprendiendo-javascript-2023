/* 
    En lenguajes orientados a objetos como java deberíamos de crear dos métodos con el mismo 
    nombre contemplando que cada método recibe como parametro una cadena o un entero. Y dependiendo
    de esto convertiriamos a cadena si fuera un digito. 

    Sin embargo en JavaScript tenemos que tener en cuenta que cualquier cosa puede ser pasada como
    parametro, por ende podemos ejecutar el método toString() si ya es una cadena no pasa nada 
    pero si no lo fuera lo convertiria a cadena para poder ejecutar su propiedad lenght.
*/

const countItems = (x) => x.toString().length

console.log(countItems(100000))
console.log(countItems('Hola mundo'))