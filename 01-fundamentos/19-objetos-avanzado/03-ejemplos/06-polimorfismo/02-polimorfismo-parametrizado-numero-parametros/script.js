/* 
    En lenguajes orientados a objetos como java deberíamos de crear dos métodos con el mismo 
    nombre con diferentes cantidades de argumentos en el caso de querer tenerlos en cuenta.

    Sin embargo en JavaScript tenemos que tener en cuenta que cualquier cosa puede ser pasada como
    parametro, por ende podriamos pasarle parametros por defecto. 
*/

const sum = (x=0,y=0,z=0) => x + y + z

console.log(sum())
// si no le pasamos parametros el valor de las variables sera 0 devuelve 0
console.log(sum(1))
// le pasamos un parametro el resto son 0 por ende es ese mismo número el resultado
console.log(sum(1,2))
// sera la suma de los 2 parametros pasados + 0 
console.log(sum(1,2,3))
// suma de los 3 parametros


