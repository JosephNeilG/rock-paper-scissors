let playerScore = 0;
let computerScore = 0;
let playerChoiceCompare = '';
let compChoiceCompare = '';

const buttons = document.querySelectorAll('.buttons-container button');
const output = document.querySelector('.output-message')
const player = document.querySelector('.player-score');
const computer = document.querySelector('.computer-score');
const playAgain = document.querySelector('.button-container .play-again');
const lostAudio = new Audio("sfx/lost.wav");
const wonAudio = new Audio("sfx/won.wav");
const drawAudio = new Audio("sfx/draw.wav");

// adding event listener to three buttons.
buttons.forEach((button) => {
    button.addEventListener('click', handleClick);
});

playAgain.addEventListener('click', clickPlayAgain);
playAgain.addEventListener('click', showPlayAgain);

playAgain.style.visibility = "hidden";

// function that will run when a click event occur.
function handleClick() {
    //determines player choice.
    playerChoice = this.className;
    if(playerChoice === "rock") {
        playerChoiceCompare = "rock";
    } else if (playerChoice === "paper") {
        playerChoiceCompare = "paper";
    } else if (playerChoice === "scissors") {
        playerChoiceCompare = "scissors";
    }
    compChoiceCompare = getComputerChoice(); //get the computer choice by calling its function.
    game(); //call the game logic function.
    checkWinner();

}

//check if a score is 5, then remove event listener to three buttons,
//then calls the function showPlayAgain() to display play again button.
function checkWinner() {
    if (playerScore === 5 || computerScore === 5) {
        buttons.forEach((button) => {
            button.removeEventListener('click', handleClick);
            showPlayAgain();
        });
    }
}

//resets everything, this function is called when play again button is clicked.
function reset() {
    if (computerScore === 5) {
        output.textContent = "I see you don't like giving up, here's another chance!";
    } else if (playerScore === 5) {
        output.textContent = "Wow, you're really proving something!";
    }

    playerScore = 0;
    computerScore = 0;
    player.textContent = `Player Score: ${playerScore}`;
    computer.textContent = `Computer Score: ${computerScore}`;
}

//this function handles the logic when play again button is clicked.
function clickPlayAgain() {
    reset();

    buttons.forEach((button) => {
      button.addEventListener('click', handleClick);
    });

    playAgain.style.visibility = "hidden";
    playAgain.removeEventListener('click', clickPlayAgain);
    playAgain.addEventListener('click', clickPlayAgain);
}

//
function playAgainClickHandler() {
    clickPlayAgain();
    playAgain.removeEventListener('click', playAgainClickHandler);
}

playAgain.addEventListener('click', playAgainClickHandler);
  
//sets play again button to be visible, this function is called in the handleClick function.
function showPlayAgain() {
        playAgain.style.visibility = "visible";
}

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

//game logic,
//shows output text, add score to winner.
//sfx to win lose or tie round.
function playRound() {
    if (playerChoiceCompare === compChoiceCompare) {
        output.textContent = `It's a tie!\nYou chose ${playerChoiceCompare} and computer chose ${compChoiceCompare}.`;
        drawAudio.currentTime = 0;
        drawAudio.play();
    } else if (playerChoiceCompare === "rock") {
        if (compChoiceCompare === "scissors") {
            output.textContent = `You won!\nYou chose ${playerChoiceCompare} and computer chose ${compChoiceCompare}.`;
            playerScore++;
            wonAudio.currentTime = 0;
            wonAudio.play();
            
        } else {
            output.textContent = `You lost!\nYou chose ${playerChoiceCompare} and computer chose ${compChoiceCompare}.`;
            computerScore++;     
            lostAudio.currentTime = 0;
            lostAudio.play();
        }
    } else if (playerChoiceCompare === "paper") {
        if (compChoiceCompare === "rock") {
            output.textContent = `You won!\nYou chose ${playerChoiceCompare} and computer chose ${compChoiceCompare}.`;
            playerScore++
            wonAudio.currentTime = 0;    
            wonAudio.play();
        } else {
            output.textContent = `You lost!\nYou chose ${playerChoiceCompare} and computer chose ${compChoiceCompare}.`;
            computerScore++;    
            lostAudio.currentTime = 0;
            lostAudio.play();
        }
    } else if (playerChoiceCompare === "scissors") {
        if (compChoiceCompare === "rock") {
            output.textContent = `You lost!\nYou chose ${playerChoiceCompare} and computer chose ${compChoiceCompare}.`;
            computerScore++;    
            lostAudio.currentTime = 0;
            lostAudio.play();
        } else {
            output.textContent = `You won!\nYou chose ${playerChoiceCompare} and computer chose ${compChoiceCompare}.`;
            playerScore++;
            wonAudio.currentTime = 0; 
            wonAudio.play();
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