function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]
    let randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}

function playRound(playerSelection, computerSelection) {
    if (String(playerSelection).toLowerCase() == "rock") {
        if (computerSelection == "rock") {
            return "tie"
        } else if (computerSelection == "paper") {
            return "lose"
        } else {
            return "win"
        }
    } else if (String(playerSelection).toLowerCase() === "paper") {
        if (computerSelection == "rock") {
            return "win"
        } else if (computerSelection == "paper") {
            return "tie"
        } else {
            return "lose"
        }
    } else {
        if (computerSelection == "rock") {
            return "lose"
        } else if (computerSelection == "paper") {
            return "win"
        } else {
            return "tie"
        }
    }
}

function game() {
    let playerScore = 0
    let computerScore = 0
    while (playerScore < 3 && computerScore < 3) {
        let playerSelection = prompt("Enter your choice :")
        while (!(["rock", "paper", "scissors"]).includes(playerSelection)) {
            playerSelection = prompt("Enter a valid choice :")
        }
        let computerSelection = getComputerChoice()
        let result = playRound(playerSelection, computerSelection)
        if (result == "win") {
            console.log(`You won this round, computer chose ${computerSelection}`)
            playerScore++
            console.log(`current score : ${playerScore} : ${computerScore}`)
        } else if (result == "lose") {
            console.log(`You lost this round, computer chose ${computerSelection}`)
            computerScore++
            console.log(`current score : ${playerScore} : ${computerScore}`)
        } else {
            console.log("This round is a tie, no points awarded")
            console.log(`current score : ${playerScore} : ${computerScore}`)
        }
    }

    return playerScore > computerScore ? `You won the game, score : ${playerScore}` : `You lost the game, score : ${computerScore}`
}

console.log(game())