
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
