// variables to select DOM elements
const playerChoiceDiv = document.querySelector("#player-choice");
const computerChoiceDiv = document.querySelector("#computer-choice");

const playerScoreDiv = document.querySelector("#player-score");
const computerScoreDiv = document.querySelector("#computer-score");

const messageDisplay = document.querySelector("#message-display");

const buttons = document.querySelectorAll('button');

// set initial scores
let playerScore = 0;
let computerScore = 0;

// randomly generate a move for the computer
function computerPlay() {
    var i = Math.floor(Math.random() * 3) + 1;

    if (i == 1) {
        return ("rock");
    } else if (i == 2) {
        return ("paper");
    } else if (i == 3) {
        return ("scissors");
    } else {
        return ("Error!");
    }
}

function playRound (playerSelection, computerSelection) {
    let message = null;

    if (playerSelection === computerSelection) {
        message = "It's a tie!";
    } else if ((playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")) {
        message = "You Lose";
        ++computerScore;
    } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")) {
        message = "You Win!";
        ++playerScore;
    } else {
        message = "Error";
    }

    if (playerScore === 3 || computerScore === 3) {
        if (playerScore === 3) {
            message = "Game Over: You Win!";
        } else {
            message = "Game Over: You Lose!";
        }
    }
    return message;
}

function resetScores() {
    playerScore = 0;
    computerScore = 0;
    roundNumber = 1;
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const playerSelection = button.value;
        computerPlay();
        const computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        playerScoreDiv.textContent = "Your score: " + playerScore;
        computerScoreDiv.textContent = "The computer's score: " + computerScore;
        messageDisplay.textContent = result;
        playerChoiceDiv.textContent = "You chose: " + playerSelection;
        computerChoiceDiv.textContent = "The computer chose: " + computerSelection;

        if (result.includes("Game Over")) {
            resetScores();
        }
    });
});

