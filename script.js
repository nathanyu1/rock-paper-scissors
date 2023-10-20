let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(player, computer) {

    if (player === "rock" && computer === "paper") {
        computerScore++;
        return "You Lose! Paper beats Rock!";
    } else if (player === "rock" && computer === "scissors") {
        playerScore++;
        return "You Win! Rock beats Scissors!";
    } else if (player === "rock" && computer === "rock") {
        return "Tie! Play again!"
    } else if (player === "paper" && computer === "scissors") {
        computerScore++;
        return "You Lose! Scissors beats Paper!";
    } else if (player === "paper" && computer === "rock") {
        return "You Win! Paper beats Rock!";
    } else if (player === "paper" && computer === "paper") {
        return "Tie! Play again!";
    } else if (player === "scissors" && computer === "rock") {
        return "You Lose! Paper beats Rock!"
    } else if (player === "scissors" && computer === "paper") {
        return "You Win! Scissors beats Paper";
    } else if (player === "scissors" && computer === "scissors") {
        return "Tie! Play Again"
    } else {
        return "Invalid answer. Try again."
    }
}

function game() {

    if (playerScore >= 5 || computerScore >= 5) {
        alert("Game is over. Refresh to play again.")
    }
    else {
        let playerChoice = prompt("Enter rock, paper, or scissors");
        playerChoice = playerChoice.toLowerCase();
        let computerChoice = getComputerChoice();

        console.log(playRound(playerChoice, computerChoice));
        console.log(playerScore);
        console.log(computerScore);
    }
}

let button = document.getElementById("playButton");
button.addEventListener("click", game);