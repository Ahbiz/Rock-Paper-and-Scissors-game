const choices = ["rock", "paper", "scissors"];
const rockRadio = document.querySelector("#rock");
const paperRadio = document.querySelector("#paper");
const scissorsRadio = document.querySelector("#scissors");
const confirmBtn = document.querySelector("#confirm");
const result = document.querySelector("#result");

let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const totalRounds = 5;

confirmBtn.addEventListener("click", function () {
  if (roundsPlayed >= totalRounds) {
    return;
  }
  let userChoice = null;
  if (rockRadio.checked) {
    userChoice = "rock";
  } else if (paperRadio.checked) {
    userChoice = "paper";
  } else if (scissorsRadio.checked) {
    userChoice = "scissors";
  }
  if (userChoice === null) {
    result.textContent = "please select an option";
    return;
  }
  const computerChoiceIndex = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[computerChoiceIndex];
  let winner = "";
  if (userChoice === computerChoice) {
    winner = "It's a tie";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    winner = "You win";
  } else {
    winner = "computer wins";
  }
  if (winner === "You win") {
    playerScore++;
  } else if (winner === "computer wins") {
    computerScore++;
  }
  roundsPlayed++;
  document.querySelector("#player-score").textContent = playerScore;
  document.querySelector("#computer-score").textContent = computerScore;
  result.textContent = ` Round ${roundsPlayed}:  You picked ${userChoice}, Computer picked ${computerChoice}, ${winner}.`;

  if (roundsPlayed === totalRounds) {
    let finalMessage =  "Game over! <br><br>";
    if (playerScore > computerScore) {
      finalMessage += "overall You Won";
    } else if (computerScore > playerScore) {
      finalMessage += "overall Computer won" ;
    } else {
      finalMessage += "overall It's a Tie";
    }
    document.querySelector("#final-message").innerHTML = finalMessage;
  }
});
