const circles = document.querySelectorAll(".circle");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector("#score")

let result = 0
let hitPosition
let currentTime = 60
let timerId = null

const randomCircle = () => {
    circles.forEach(circle => {
        circle.classList.remove('mole')
    })

    let randomCircle = circles[Math.floor(Math.random()*12)]
    randomCircle.classList.add('mole')

    hitPosition = randomCircle.id

}

circles.forEach(circle => {
    circle.addEventListener('mousedown', () => {
        if(circle.id == hitPosition){
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})

const moveMole = () => {
    timerId = setInterval(randomCircle, 1000)
}

moveMole();

const countDown = () => {
    currentTime--
    timeLeft.textContent = currentTime

    if(currentTime == 0){
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert("Game Over! Your final score is " + result)
    }

}

let countDownTimerId = setInterval(countDown, 1000)
