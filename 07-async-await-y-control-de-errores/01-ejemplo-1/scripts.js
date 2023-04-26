/* 
    async await es una implementación para hacer funciones asincronas en JavaScript de forma
    nativa.

    Async y await funciona a traves de promesas debemos de comprenderlas para entender
    async await.

    Es necesario su uso cuando una API nos devuelve datos y queremos trabajar con ellos
    desde otra función.

    A las funciones que queramos que sean asincronas debemos de escribir async delante 
    de los parentesis de la función const nombreFuncion = async () => {}

    Para establecer paradas o bloqueos hasta que se termine una promesa es await cuando
    escribimos await lo que estamos haciendo es establecer un bloqueo hasta que la promesa
    se haya cumplido.
    
    await no puede funcionar si no estamos dentro de una función asincrona (que tenga async)

    CUANDO NOSOTROS ESCRIBIMOS ASYNC EN UNA FUNCIÓN AUTOMATICAMENTE ESTA FUNCIÓN DEVUELVE 
    UNA PROMESA

    Para mostrar su funcionamiento aplicaremos un ejemplo muy simple con settimeout para 
    que en x tiempo se resuelve una promesa simulando el comportamiento de recibir datos
    de una API.

*/
const getName = async () => {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve('José')
        }, 1500) // en 1500seg devuelve el nombre
    })
}

const sayHello = async () =>{
    /* 
        si no ponemos await nos devuelve una promesa en name porque todavía no han pasado
        1500 seg para que se resuelva la promesa como hemos indicado en el timeout. si fuera
        una llamada a una api tardaria x tiempo en devolvernos algo por lo que pasaría lo mismo.
     */
    const name = await getName()
    return `Hola ${name}`
}

sayHello().then(res=>console.log(res))