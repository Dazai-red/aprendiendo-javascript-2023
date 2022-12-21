/* 
    Variables
    
    Una variable es un “almacén con un nombre” para guardar datos. Podemos usar variables para almacenar golosinas, visitantes, y otros datos.

    Para generar una variable en JavaScript, se usa la palabra clave let.

    La siguiente declaración genera (en otras palabras: declara o define) una variable con el nombre “message”:

*/

let message;

message = "Hola";

// ahora la variable contiene la palabra Hola y podemos visualizarla de esta forma

alert("Hola");

//podemos combinar la declaración de la variable y su asignación en una sola línea:

let mensaje = "Prueba de declaración y asignación en una sola línea";

alert(mensaje);

//También podemos declarar variables múltiples en una sola línea:

let nombre= "Juan Manuel"; let apellidos="López Fajardo";

alert(nombre+" "+apellidos);

//  También se pueden definir variables múltiples en estilo multilínea:

let user = 'John',
  age = 25,
  mes = 'Hola';

/* 
    En scripts más viejos, a veces se encuentra otra palabra clave: var en lugar de let:

    Existen sutiles diferencias entre let y var en un futuro se verá la diferencia pero lo mejor es utilizar let o en los casos
    donde se permita usar const.
*/

/* 
    Una variable debe ser declarada solamente una vez.

    No se puede nombrar dos variables con el mismo nombre salta un error

    El nombre de las variables es keysensitive es decir no es lo mismo manzana que Manzana

    Hay una lista de palabras reservadas, las cuales no pueden ser utilizadas como nombre de variable porque el lenguaje en sí las utiliza.

    Por ejemplo: let, class, return, y function están reservadas.


*/

/*
 Constantes 

 Son similares a las variables pero su contenido no puede ser cambiado
*/

const myBirthday = '15-05.1999';

/* 
    Constantes mayúsculas
    Existe una práctica utilizada ampliamente de utilizar constantes como aliases de valores difíciles-de-recordar
    y que se conocen previo a la ejecución.

    Tales constantes se nombran utilizando letras mayúsculas y guiones bajos.
*/

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...cuando debemos elegir un color
let color = COLOR_ORANGE;
alert(color); // #FF7F00

/* 
    Es importante que los nombres de variables y constantes sean descriptivos para que en el futuro cuando revisemos el código
    sepamos que es lo que significan esas variables

    Algunas reglas buenas para seguir:

    Use términos legibles para humanos como userName p shoppingCart.
    Evite abreviaciones o nombres cortos a, b, c, al menos que en serio sepa lo que está haciendo.
    Cree nombres que describen al máximo lo que son y sean concisos.
        Ejemplos que no son adecuados son data y value. Estos nombres no nos dicen nada.
        Estos solo está bien usarlos en el contexto de un código que deje excepcionalmente 
        obvio cuál valor o cuales datos está referenciando la variable.
    Acuerda en tu propia mente y con tu equipo cuáles términos se utilizarán. 
        Si a un visitante se le llamara “user”, debemos llamar las variables relacionadas
        currentUser o newUser en vez de currentVisitor o newManInTown.
*/

