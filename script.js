let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let computerChoice;

    if (randomNumber == 1) {
        computerChoice = 'Rock';
    } else if (randomNumber == 2) {
        computerChoice = 'Paper';
    } else if (randomNumber == 3) {
        computerChoice = 'Scissors'; 
    } else {
        return ('Invalid input.');
    }

    return computerChoice.toLowerCase();
}

function getPlayerChoice() {
    let playerSelection = prompt("Rock, paper or scissors?", '').toLowerCase();

    return playerSelection;
}

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection, computerSelection);
    if (playerSelection === computerSelection) {
        return("It's a tie!");
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return("You win! Rock beats scissors.")
        } else {
            return("You lose! Scissors beats Paper.")
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return("You win! Paper beats rock.");
        } else {
            return("You lose! Scissors beats Paper");
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return("You lose! Rock beats scissors.");
        } else {
            return("You win! Scissors beats paper.");
        }
    } else {
        return("Invalid input. Choose between rock, paper or scissors.");
    }
}

// console.log(playRound(getPlayerChoice(), getComputerChoice()));

function game() {  
    for (let i = 1; i <=5; i++) {
        const result = playRound(getPlayerChoice(), getComputerChoice());
        console.log(result);

        if (result.includes("tie")) {
            console.log("Player Score: " + playerScore + "\nComputer Score: " + computerScore);
        } else if (result.includes("win")) {
            playerScore++;
            console.log("Player Score: " + playerScore + "\nComputer Score: " + computerScore);
        } else if (result.includes("lose")) {
            computerScore++;
            console.log("Player Score: " + playerScore + "\nComputer Score: " + computerScore);
        }
    }

    console.log(`Game over! The Final Scores are:\n\nPlayer: ${playerScore}\nComputer: ${computerScore}`);

    if (playerScore == computerScore) {
        console.log("It's a tie! Nobody won the game.");
    } else if (playerScore < computerScore) {
        console.log("You lost the game, Do better next time!");
    } else {
        console.log("You won! Congratulations, do did well!");
    }
}

console.log(game());


