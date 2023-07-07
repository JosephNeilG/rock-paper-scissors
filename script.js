let playerScore = 0;
let computerScore = 0;
let playerChoiceCompare = '';
let compChoiceCompare = '';

const buttons = document.querySelectorAll('.buttons-container button');
const output = document.querySelector('.output-message')
const player = document.querySelector('.player-score');
const computer = document.querySelector('.computer-score');



// get player choice by clicking a button
buttons.forEach((button) => {button.addEventListener('click', () => {

    playerChoice = button.className;
    if (playerChoice == "rock") {
        playerChoiceCompare = "rock";
    } else if (playerChoice == "paper") {
        playerChoiceCompare = "paper";
    } else if (playerChoice == "scissors") {
        playerChoiceCompare = "scissors";
    }
    compChoiceCompare = getComputerChoice();
    game();


    })
})
//get computer choice
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber == 1) {
        compChoiceCompare = "rock";
    } else if (randomNumber == 2) {
        compChoiceCompare = "paper";
    } else if (randomNumber == 3) {
        compChoiceCompare = "scissors"; 
    }
    return compChoiceCompare;
}

function playRound() {
    if (playerChoiceCompare === compChoiceCompare) {
        output.textContent = `It's a tie! You chose ${playerChoiceCompare} and computer chose ${compChoiceCompare}.`;
    } else if (playerChoiceCompare === "rock") {
        if (compChoiceCompare === "scissors") {
            output.textContent = `You won! You chose ${playerChoiceCompare} and computer chose ${compChoiceCompare}.`;
            playerScore++;
            
        } else {
            output.textContent = `You lost! You chose ${playerChoiceCompare} and computer chose ${compChoiceCompare}.`;
            computerScore++;
        }
    } else if (playerChoiceCompare === "paper") {
        if (compChoiceCompare === "rock") {
            output.textContent = `You won! You chose ${playerChoiceCompare} and computer chose ${compChoiceCompare}.`;
            playerScore++
        } else {
            output.textContent = `You lost! You chose ${playerChoiceCompare} and computer chose ${compChoiceCompare}.`;
            computerScore++;
        }
    } else if (playerChoiceCompare === "scissors") {
        if (compChoiceCompare === "rock") {
            output.textContent = `You lost! You chose ${playerChoiceCompare} and computer chose ${compChoiceCompare}.`;
            computerScore++;
        } else {
            output.textContent = `You won! You chose ${playerChoiceCompare} and computer chose ${compChoiceCompare}.`;
            playerScore++;
        }
    }
}

function game() {  
    playRound();
    player.textContent = `Player Score: ${playerScore}`;
    computer.textContent = `Computer Score: ${computerScore}`;

    if (playerScore == 5) {
        output.textContent = "You won! Congratulations!";
        
        player.textContent = `Player Score: ${playerScore}`;
        computer.textContent = `Computer Score: ${computerScore}`;
    } else if (computerScore == 5) {
        output.textContent = "You lost! Better luck next time!";
        
         player.textContent = `Player Score: ${playerScore}`;
         computer.textContent = `Computer Score: ${computerScore}`;
    }
}