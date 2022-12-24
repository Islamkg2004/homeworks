const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const rez = document.querySelector('#count')
let b = 0
plus.onclick = (e) =>{
    b++
    rez.innerText = b
    rez.style.color = 'green'
}

minus.onclick = (e) =>{
    if (b>0) {
        b--
        rez.innerText = b
        rez.style.color = 'red'
    }
}

const posX = document.getElementById('posX')
const posY = document.getElementById('posY')
const block = document.querySelector('.cursor')

block.onmousemove = e => {
    posX.innerText = e.screenX
    posY.innerText = e.screenY
}

const red = document.querySelector('#red')
const green = document.querySelector('#green')
const yellow = document.querySelector('#yellow')

let color = prompt('Ведите цвет светафора').toLowerCase()

if (color === "красный" || color === "red"){
    red.style.background = 'red'
    red.innerText = 'Stop'
}
else if (color === "желтый" || color === "yellow"){
    yellow.style.background = 'yellow'
    yellow.innerText = 'wait'
}
else if (color === "зеленый"|| color === "green"){
    green.style.background = 'green'
    green.innerText = 'GO'
}
else alert('Choice color! (red, yellow, green)')