let playerScore = 0;
let computerScore = 0;
let playerChoiceCompare = '';
let compChoiceCompare = '';

const buttons = document.querySelectorAll('.buttons-container button');
const output = document.querySelector('.output-message')
const player = document.querySelector('.player-score');
const computer = document.querySelector('.computer-score');
const playAgain = document.querySelector('.button-container .play-again');

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

//display icon of the two choices,
//problem encountered, to show up icons next round.
// function displayChoice(playerChoiceCompare, compChoiceCompare) {
//     const playerChoice = document.querySelector('.player');
//     const computerChoice = document.querySelector('.computer');

//     switch (playerChoiceCompare) {
//         case "rock":
//             playerChoice.textContent = "✊";
//             break;
//         case "paper":
//             playerChoice.textContent = "✋";
//             break;
//         case "scissors":
//             playerChoice.textContent = "✌";
//             break;
//     }

//     switch(compChoiceCompare) {
//         case "rock":
//             computerChoice.textContent = "✊";
//             break;
//         case "paper":
//             computerChoice.textContent = "✋";
//             break;
//         case "scissors":
//             computerChoice.textContent = "✌";
//             break;
//     }  
// }

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