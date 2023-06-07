/* 
    visibilitychange
        Sirve para las páginas en las que tengamos un audio o vídeo que se reproduce al cambiar
        de pestaña se deje de reproducir  
*/

const video = document.getElementById('video')

/* addEventListener('visibilitychange', (e)=> {
    if(document.visibilityState === 'visible'){
        console.log('PLAY')
        video.play()
    } else if (document.visibilityState === 'hidden') {
        console.log('PAUSE')
        video.pause()
    }
}) */

// se podria hacer en una sola línea de código de esta forma:

addEventListener('visibilitychange', ()=> document.visibilityState === 'visible' ? video.play() : video.pause())