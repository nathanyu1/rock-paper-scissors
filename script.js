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
    return "Tie! Play again!";
  } else if (player === "paper" && computer === "scissors") {
    computerScore++;
    return "You Lose! Scissors beats Paper!";
  } else if (player === "paper" && computer === "rock") {
    playerScore++;
    return "You Win! Paper beats Rock!";
  } else if (player === "paper" && computer === "paper") {
    return "Tie! Play again!";
  } else if (player === "scissors" && computer === "rock") {
    computerScore++;
    return "You Lose! Paper beats Rock!";
  } else if (player === "scissors" && computer === "paper") {
    playerScore++;
    return "You Win! Scissors beats Paper";
  } else if (player === "scissors" && computer === "scissors") {
    return "Tie! Play Again";
  } else {
    return "Invalid answer. Try again.";
  }
}

function game(choice) {
  if (playerScore >= 5 || computerScore >= 5) {
    if (playerScore > computerScore) {
        displayResult.textContent = "Player wins the match!";
    } else {
        displayResult.textContent = "Computer wins the match!";
    }
  } else {
    let playerChoice = choice;
    let computerChoice = getComputerChoice();

    let result = playRound(playerChoice, computerChoice);
    let humanScore = document.getElementById("humanScore");
    let compScore = document.getElementById("compScore");
    let displayResult = document.querySelector(".subheader");
    displayResult.textContent = result;

    humanScore.textContent = playerScore;
    compScore.textContent = computerScore;

  }
}

let rock = document.getElementById("rockButton");
let paper = document.getElementById("paperButton");
let scissors = document.getElementById("scissorsButton");

rock.addEventListener("click", () => game("rock"));
paper.addEventListener("click", () => game("paper"));
scissors.addEventListener("click", () => game("scissors"));
let displayResult = document.querySelector(".subheader");
