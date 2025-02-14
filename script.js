const result = document.querySelector(".result")
const imageResult = document.querySelector("#imagemResultado")
const humanScore = document.querySelector("#human-score")
const machineScore = document.querySelector("#machine-score")

let humanScoreNumber = 0
let machineScoreNumber = 0

const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}


const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}


const playTheGame = (human, machine) => {
    console.log("Humano: " + human + "Maquina: " + machine)
    if (human === machine) {
        result.innerHTML = "Deu empate!"
        imageResult.src = "./assets/emburrado.png"
        imageResult.style.display = "block"
    } else if (
        (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) ||
        (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER) ||
        (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK)
    ) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você ganhou!"
        imageResult.src = "./assets/feliz.png"
        imageResult.style.display = "block"
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Alexa ganhou!"
        imageResult.src = "./assets/triste.png"
        imageResult.style.display = "block"
    }
}









































// const result = document.querySelector(".result")
// const humanScore = document.querySelector("#human-score")
// const machineScore = document.querySelector("#machine-score")
// const imageResult = document.querySelector("#imagemResultado")

// let humanScoreNumber = 0
// let machineScoreNumber = 0




// const playHuman = (humanChoice) => {
//     playTheGame(humanChoice, playMachine())
// }

// const playMachine = () => {
//     const choices = ['rock', 'paper', 'scissors']
//     const randomNumber = Math.floor(Math.random() * 3)
//     return choices[randomNumber]
// }

// const playTheGame = (human, machine) => {
//     console.log('Humano:' + human + 'Maquina:' + machine)

//     if (human === machine) {
//         result.innerHTML = "Deu empate!"
//         imageResult.src = "./assets/emburrado.png"
//         imageResult.style.display = "block"
//     } else if (
//         (human === 'paper' && machine === 'rock') ||
//         (human === 'rock' && machine === 'scissors') ||
//         (human === 'scissors' && machine === 'paper')
//     ) {
//         humanScoreNumber++
//         humanScore.innerHTML = humanScoreNumber
//         result.innerHTML = "Você ganhou!"
//         imageResult.src = "./assets/feliz.png"
//         imageResult.style.display = "block"
//     } else {
//         machineScoreNumber++
//         machineScore.innerHTML = machineScoreNumber
//         result.innerHTML = 'Você perdeu!'
//         imageResult.src = "./assets/triste.png"
//         imageResult.style.display = "block"
//     }
// }
