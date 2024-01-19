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

var rockButton = document.querySelector('#rockButton');
var paperButton = document.querySelector('#paperButton');
var scissorsButton = document.querySelector('#scissorsButton');

const pScore = document.querySelector('.playerScore');
const cScore = document.querySelector('.computerScore');
var playerScore = parseInt(pScore.textContent);
var computerScore = parseInt(cScore.textContent);

const res = document.querySelector('.result');

function game(playerSelection) {
    if (playerScore < 5 && computerScore < 5) {
        let computerSelection = getComputerChoice()
        let result = playRound(playerSelection, computerSelection)
        if (result == "win") {
            res.textContent = `You won this round, computer chose ${computerSelection}`;
            playerScore++;
            pScore.textContent = playerScore;
            setTimeout(() => {
                if (playerScore == 5 || computerScore == 5) {
                    playerScore > computerScore ?
                        res.textContent = "You won the game!" :
                        res.textContent = "You lost the game!";
                }
            }, 3000);
        } else if (result == "lose") {
            res.textContent = `You lost this round, computer chose ${computerSelection}`;
            computerScore++
            cScore.textContent = computerScore
            setTimeout(() => {
                if (playerScore == 5 || computerScore == 5) {
                    playerScore > computerScore ?
                        res.textContent = "You won the game!" :
                        res.textContent = "You lost the game!";
                }
            }, 3000);
        } else {
            res.textContent = "This round is a tie, no points awarded";
            console.log(`current score : ${playerScore} : ${computerScore}`)
        }
    }
}

rockButton.addEventListener('click', () => {
    game("rock");
});

paperButton.addEventListener('click', () => {
    game("paper");
})

scissorsButton.addEventListener('click', () => {
    game("scissors");
});