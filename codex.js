const buttonF = document.getElementById('btnFlowery')
const contadorF = document.getElementById('flowers')
const FPStext = document.getElementById('FlowerSeg')

let FPS = 0
let flowers = 0
let flowerBoost = 1


buttonF.addEventListener('click', (evento) => {
    flowers += 1 * flowerBoost
    atualizar()

    let mouseX = evento.clientX
    let mousey = evento.clientY

    
})
function mouseClickEffect(){
    
}

function atualizar() {
    FPStext.textContent = `Você esta ganhando ${FPS} flores/S`
    contadorF.textContent = flowers
}

atualizar()