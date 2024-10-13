let userScore = 0;
let computerScore = 0;

const userScoreDisplay = document.getElementById("user-score");
const resultDisplay = document.getElementById("result");
const computerScoreDisplay = document.getElementById("computer-score");
const userChoiceDisplay = document.getElementById("user-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");

function announceResult(message) {
  const speech = new SpeechSynthesisUtterance(message);
  speech.lang = "en-US";
  window.speechSynthesis.speak(speech);
}

//  const computerScoreDisplay = document.getElementById("computer-score");
//Function to get computer choice

function computerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// Function to determine the winner

function determineWinner(userChoice, compChoice) {
  if (userChoice === compChoice) {
    announceResult("draw");
    return "its a draw! ";
  } else if (
    (userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissors" && compChoice === "paper")
  ) {
    userScore++;
    announceResult(`You win! Your Score is ${userScore}`);
    return "You win!";
  } else {
    computerScore++;
    announceResult(`You lose`);
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
  userChoiceDisplay.innerHTML = ` <img src= "${userChoice}.png" alt="${userChoice}" />`;

  //Display the computer choice image
  computerChoiceDisplay.innerHTML = ` <img src= "${compChoice}.png" alt="${compChoice}" />`;
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
