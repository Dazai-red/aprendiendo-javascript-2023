/* 

    El modo moderno, "use strict"
    Durante mucho tiempo, JavaScript evolucionó sin problemas de compatibilidad. Se añadían nuevas características al lenguaje sin que la funcionalidad existente cambiase.

    Esto tenía el beneficio de nunca romper código existente, pero lo malo era que cualquier error o decisión incorrecta tomada por los creadores de JavaScript se quedaba para siempre en el lenguaje.

    Esto fue así hasta 2009, cuando ECMAScript 5 (ES5) apareció. Esta versión añadió nuevas características al lenguaje y modificó algunas de las ya existentes. Para mantener el código antiguo funcionando, la mayor parte de las modificaciones están desactivadas por defecto. Tienes que activarlas explícitamente usando una directiva especial: "use strict".

*/

"use strict"; // Siempre al principio del código el código funcionara de forma moderna

/* 
    Aprenderemos funciones (una manera de agrupar comandos) en breve, pero adelantemos que "use strict" se puede poner al inicio de una función. De esta manera, se activa el modo estricto únicamente en esa función. Pero normalmente se utiliza para el script entero.
*/

// "use strict" está al principio de tus scripts. Si no, el modo estricto podría no estar activado.

/* 
    No hay ninguna directiva del tipo "no use strict" que haga al motor volver al comportamiento anterior.

    Una vez entramos en modo estricto, no hay vuelta atrás.
*/

/* 
    Consola del navegador
        Cuando utilices la consola del navegador para ejecutar código, ten en cuenta que no utiliza use strict por defecto.

        En ocasiones, donde use strict cause diferencia, obtendrás resultados incorrectos.

        Entonces, ¿como utilizar use strict en la consola?

        Primero puedes intentar pulsando Shift+Enter para ingresar múltiples líneas y poner use strict al principio, como aquí:
*/

'use strict'; <Shift+Enter para una nueva línea>
//  ...tu código
<Intro para ejecutar></Intro>

/* 
    Esto funciona para la mayoría de los navegadores, específicamente Firefox y Chrome.

    Si esto no funciona, como en los viejos navegadores, hay una fea pero confiable manera de asegurar use strict. Ponlo dentro de esta especie de envoltura:
*/

(function() {
    'use strict';
  
    // ...tu código...
  })()

/* 
    ¿Deberíamos utilizar “use strict”?

    Uno podría recomendar que se comiencen los script con "use strict"… ¿Pero sabes lo que es interesante?

    El JavaScript moderno admite “clases” y “módulos”, estructuras de lenguaje avanzadas (que seguramente llegaremos a ver), que automáticamente habilitan use strict. Entonces no necesitamos agregar la directiva "use strict" si las usamos.

    Entonces, por ahora "use strict"; es un invitado bienvenido al tope de tus scripts. Luego, cuando tu código sea todo clases y módulos, puedes omitirlo.

    A partir de ahora tenemos que saber acerca de use strict en general.

    En los siguientes capítulos, a medida que aprendamos características del lenguaje, veremos las diferencias entre el modo estricto y el antiguo. Afortunadamente no hay muchas y realmente hacen nuestra vida mejor.

    Todos los ejemplos en este tutorial asumen modo estricto salvo que (muy raramente) se especifique lo contrario.
*/


 