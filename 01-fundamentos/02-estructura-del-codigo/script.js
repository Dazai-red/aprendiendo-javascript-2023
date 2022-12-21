// Estructura del código

/* 
    Las sentencias son construcciones sintácticas y comandos que realizan acciones.

    Ya hemos visto una sentencia, alert('¡Hola mundo!'), que muestra el mensaje “¡Hola mundo!”.

    Podemos tener tantas sentencias en nuestro código como queramos, las cuales se pueden separar con un 
    punto y coma.

    Por ejemplo, aquí separamos “Hello World” en dos alerts:
*/

// alert('Hola'); alert('Mundo');

// Generalmente, las sentencias se escriben en líneas separadas para hacer que el código sea más legible:

// alert('Hola');
// alert('Mundo');

/* 
    Punto y coma
    Se puede omitir un punto y coma en la mayoría de los casos cuando existe un salto de línea.

    Esto también funcionaría:   
*/

// alert('Hola')
// alert('Mundo')

/* 
    Aquí, JavaScript interpreta el salto de línea como un punto y coma “implícito”. Esto se denomina inserción automática de punto y coma.

    En la mayoría de los casos, una nueva línea implica un punto y coma. Pero “en la mayoría de los casos” 
    no significa “siempre”!

    Hay casos en que una nueva línea no significa un punto y coma. Por ejemplo:
*/

/* alert(3 +
    1
    + 2); */

/* 
    El código da como resultado 6 porque JavaScript no inserta punto y coma aquí. Es intuitivamente obvio 
    que si la línea termina con un signo más "+", es una “expresión incompleta”, un punto y coma aquí sería 
    incorrecto. Y en este caso eso funciona según lo previsto.

    Pero hay situaciones en las que JavaScript “falla” al asumir un punto y coma donde realmente se necesita.

    Los errores que ocurren en tales casos son bastante difíciles de encontrar y corregir.

    Recomendamos colocar puntos y coma entre las sentencias, incluso si están separadas por saltos de línea. 
    Esta regla está ampliamente adoptada por la comunidad. Notemos una vez más que es posible omitir los 
    puntos y coma la mayoría del tiempo. Pero es más seguro, especialmente para un principiante, usarlos.

*/

/* 
    Los comentarios se pueden poner en cualquier lugar de un script. No afectan su ejecución porque el motor 
    simplemente los ignora.

    Los comentarios de una línea comienzan con dos caracteres de barra diagonal //.

    El resto de la línea es un comentario. Puede ocupar una línea completa propia o seguir una sentencia.

    Como aquí:
*/

// Este comentario ocupa una línea propia.
alert('Hello');

alert('World'); // Este comentario sigue a la sentencia.

/* 

    Los comentarios de varias líneas comienzan con una barra inclinada y un asterisco /* y terminan con un 
    asterisco y una barra inclinada 

    Los comentarios anidados no son admitidos.
    
    Por favor, no dudes en comentar tu código.

    Los comentarios aumentan el tamaño general del código, pero eso no es un problema en absoluto. Hay 
    muchas herramientas que minimizan el código antes de publicarlo en un servidor de producción. Eliminan 
    los comentarios, por lo que no aparecen en los scripts de trabajo. Por lo tanto, los comentarios no 
    tienen ningún efecto negativo en la producción.

    Más adelante, en el tutorial, habrá un capítulo Estilo de codificación que también explica cómo escribir 
    mejores comentarios.

*/

