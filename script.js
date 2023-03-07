
var sec = 00

function start() {
   setInterval(contar,1000)
}

function pause() {
    console.log('PAUSOU')
}

function stop() {
    console.log('PAROU')
}

//fazer a contagem a cada mile_segundos
function contar() {
     
    sec++
    var segundos = window.document.getElementById('segundos')
    segundos.innerText = sec
}
