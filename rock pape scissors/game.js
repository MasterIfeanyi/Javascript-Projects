let userScore = 0;
let computerScore = 0;

const userScoreDisplay = document.getElementById("user-score");
const computerScoreDisplay = document.getElementById("computer-score");

const resultDisplay = document.getElementById("result");
const resultDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("computer-choice");

//Function to get computer choice

function computerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// Function to determine the winner

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "its a draw! ";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    userScore++;
    return "You win!";
  } else {
    computerScore++;
    return "You lose!";
  }
}

//Function to play the game
function playGame(userChoice) {
  const compChoice = computerChoice();
  const result = determineWinner(userChoice, compChoice);

  //Update the score and display the result
  userScoreDisplay.textContent = userScore;
  computerScoreDisplay.textContent = computerScore;
  resultDisplay.textContent = `You chose ${userChoice}. Computer chose ${compChoice} . ${result}`;

  // Display the user choice image
  userScoreDisplay.innerHTML = ` <img src= "${userChoice}.png" alt="${userChoice}" />`;

  //Display the computer choice image
  computerScoreDisplay.innerHTML = ` <img src= "${compChoice}.png" alt="${compChoice}" />`;
}

//Event listener for butttons

document
  .getElementById("rock")
  .addEventListener("click", () => playGame("rock"));

document
  .getElementById("paper")
  .addEventListener("click", () => playGame("paper"));

document
  .getElementById("scissors")
  .addEventListener("click", () => playGame("scissors"));
