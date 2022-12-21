# DOM (DOCUMENT OBJECT MODEL)
Es toda la estructura HTML del documento.
No es JavaScript, es una API (Aplication Programing Interface)

![](https://www.codingcreativo.it/wp-content/uploads/2019/03/dom-1024x653.jpg)

Cada parte del arbol del documento es un NODO.
Hay varios tipos de nodos (12), los más utilizados son:
- Element node - 1 (Cualquier etiqueta HTML)
- Text node - 3 (El contenido de la etiqueta)
- Comment node - 8 (Cualquier comentario en HTML)

Dentro de la consola del navegador, si seleccionamos un elemento HTML podemos utilizar $0
para seleccionar el elemento seleccionado, esto solo funciona dentro del navegador no podemos usar
$0 dentro de un archivo JavaScript.

Al introducir $0 nos aparecera la información de la etiqueta de esta forma h1#title.title en este ejemplo
es una etiqueta h1 con el id title y la clase title.

Al desplegarlo podremos ver todas las propiedades que tiene, podemos acceder a estas propiedades como si 
fuera un objeto.

$0.id nos devuelve el nombre de id: "title"

$0.textContent nos devuelve el contenido de la etiqueta "DOM Document Object Model"

Para saber de que tipo es el nodo tenemos $0.nodeType esto nos devuelve el número del nodo en este caso sería 
1

También podemos saber el nombre del nodo con $0.nodeName "H1" es importante saber que lo devuelve en 
mayusculas cuando queramos acceder al nodo a partir de su nodeName es keysensitive distingue entre mayus y 
minus.

Si queremos acceder al texto del comentario $0.childNodes[0].nodeType






