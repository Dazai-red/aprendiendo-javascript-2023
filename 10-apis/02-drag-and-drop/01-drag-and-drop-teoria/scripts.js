/* 
    API drag & drop:

    Existen dos partes principales en esta API, el objeto a arrastrar y
    la zona donde vamos a dejarlo.

    Para controlar estas acciones tenemos varios eventos de cada una de
    las partes.
        Objeto a arrastrar:
            dragStart: Se dispara al comenzar a arrastrar
            drag: Se dispara mientras arrastramos
            dragend: Se dispara cuando soltamos el objeto
        Zona de destino:
            dragenter: Se dispara cuando el objeto entra en la zona de destino
            dragover: Se dispara cuando el objeto se mueve sobre la zona de destino
            drop: se dispara cuando soltamos el objeto en la zona de destino
            dragleave: se dispara cuando el objeto sale de la zona de destino

*/

const smile = document.getElementById('smile')
const dropZone = document.getElementById('drop-zone')

smile.addEventListener('dragstart', () => {
    console.log('Drag start')
})

smile.addEventListener('drag', () => {
    console.log('Dragging')
})

smile.addEventListener('dragend', () => {
    console.log('Drag end')
})

dropZone.addEventListener('dragenter', () => {
    console.log('Object entered the drop zone')
})

dropZone.addEventListener('dragover', (e) => {
    // Es necesario prevenir el comportamiento por defecto para que funcione el evento drop
    e.preventDefault()
    console.log('Object moving inside drop zone')
})

dropZone.addEventListener('drop', (e)=> {
    // para que funcione este evento es necesario que exista un evento dragover y el preventdefault se indica para que no amplie la imágen
    e.preventDefault() 
    console.log('Drop')
})

dropZone.addEventListener('dragleave', () => {
    console.log('The object left the drop zone')
})

