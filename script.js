const secHand = document.querySelector('.sec-hand')
const minHand = document.querySelector('.min-hand')
const hrHand = document.querySelector('.hr-hand')
const clock = document.querySelector('.clock')

function runClock() {
  const date = new Date()
  const hr = date.getHours()
  const min = date.getMinutes()
  const sec = date.getSeconds()
  const milSec = date.getMilliseconds()

  const secRotate = sec * 6 + milSec * (6 / 1000)
  const minRotate = min * 6 + sec * (6 / 60) + (milSec * (6 / 60)) / 1000
  const hrRotate =
    hr * 30 +
    min * (30 / 60) +
    (sec * (30 / 60)) / 60 +
    (milSec * (30 / 60)) / 60 / 1000

  secHand.style.transform = `rotate(${secRotate}deg)`
  minHand.style.transform = `rotate(${minRotate}deg)`
  hrHand.style.transform = `rotate(${hrRotate}deg)`
}

setInterval(runClock, 1)

for (let i = 0; i < 60; i++) {
  const mark = document.createElement('div')
  mark.style.backgroundColor = `black`
  mark.style.width = `10px`
  mark.style.height = `1px`
  mark.style.position = `absolute`
  mark.style.transform = `rotate(${i * 6}deg)`
  mark.style.top = `298px`
  mark.style.left = `0`
  mark.style.transformOrigin = `300px`
  clock.append(mark)
}

for (let k = 0; k < 12; k++) {
  const markHr = document.createElement('div')
  markHr.style.backgroundColor = `black`
  markHr.style.width = `15px`
  markHr.style.height = `3px`
  markHr.style.position = `absolute`
  markHr.style.transform = `rotate(${k * 30}deg)`
  markHr.style.top = `298px`
  markHr.style.left = `0`
  markHr.style.transformOrigin = `300px`
  clock.append(markHr)
}

for (let j = 0; j < 12; j++) {
  const num = document.createElement('div')
  const angUnit = (Math.PI * 2) / 12
  const changNum = j === 11 ? '1' : `${j + 2}`

  num.innerHTML = `${changNum}`
  num.style.position = `absolute`
  num.style.fontSize = `36px`

  num.style.left =
    -85 + 400 - 25 + Math.cos(j * angUnit - Math.PI / 6) * 270 + 'px'

  num.style.top =
    5 + 300 - 25 + Math.sin(j * angUnit - Math.PI / 6) * 260 + 'px'

  clock.append(num)
}
