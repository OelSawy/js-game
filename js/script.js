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

var result = playRound("rock",getComputerChoice())
while (result == "tie") {
    result = playRound("rock",getComputerChoice())
}

console.log(result)