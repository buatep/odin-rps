let yourScore = 0;
let opponentScore = 0;
let winner = "";

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissor");

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    winner = "tie";
  }
  if (
    (playerSelection === "ROCK" && computerSelection === "SCISSOR") ||
    (playerSelection === "SCISSOR" && computerSelection === "PAPER") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK")
  ) {
    yourScore++;
    winner = "player";
  }
  if (
    (computerSelection === "ROCK" && playerSelection === "SCISSOR") ||
    (computerSelection === "SCISSOR" && playerSelection === "PAPER") ||
    (computerSelection === "PAPER" && playerSelection === "ROCK")
  ) {
    opponentScore++;
    roundWinner = "computer";
  }
  updateScoreMessage(winner, yourScore, opponentScore);
}

function opponentTurn() {
  let random = Math.floor(Math.random() * 5);
  switch (random) {
    case 0:
      return "ROCK";
    case 1:
      return "PAPER";
    case 2:
      return "SCISSOR";
  }
}

function