/*
    PROGRAMACIÓN ORIENTADA A OBJETOS

    Es un paradigma de la programación que actualiza la forma de programar anterior

    Algunos de los conceptos fundamentales son:
    clase
    herencia
    objeto
    metodo
    evento
    etc

    Las clases son plantillas que se utilizan para crear objetos iguales

    Cuando creamos un objeto, a esa acción se le denomina INSTANCIAR un objeto.

    Necesitamos una función constructora. Se tiene que llamar constructor y se 
    ejecuta cada vez que creamos un objeto.

    this hace referencia al objeto.
   
    Se le pueden asignar propiedades que no haya en los parámetros, pero siempre
    utilizando this para referenciar al objeto.

    Los objetos pueden tener funciones asociadas a él. En ese caso se les denomina
    MÉTODOS.

    Para crear un objeto utilizando la clase o plantilla se hace con la palabra reservada
    new y el nombre de la clase que queremos utilizar.

    const juan = new Persona('Juan','García',23);

    Una vez INSTANCIADO el objeto podremos acceder a sus propiedades y métodos utilizando
    la nomenclatura del punto o buscando su propiedad en el objeto con los corchetes:
    
    juan.nombre;
    juan['nombre];
    // para llamar a funciones:
    juan.saludar();
    juan['saludar']();


*/

/* 
    this.nombre = nombre 
    nombreDelObjeto = nombre del parametro
    this.apellido = apellido 
    apellidoDelObjeto = apellido del parametro
    this.edad = edad 
    edadDelObjeto = edad del parametro
*/

// creando la clase persona
class Persona {
    constructor(nombre, apellido, edad){
        this.nombre = nombre,
        this.apellido = apellido,
        this.edad = edad,
        this.datos = `Me llamo ${nombre} ${apellido} y tengo ${edad} años`
    }
    saludar(){
        return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`
    }
}

// Instanciando objetos
const juan = new Persona('Juan', 'García', 25);
const marta = new Persona('Marta', 'García', 35);

console.log(juan);
console.log(juan.saludar());
console.log(marta.saludar());
