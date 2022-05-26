const selectionButtons = document.querySelectorAll('[data-selection]');
const yourScoreSpan = document.querySelector('[data-your-score]');
const finalColumn = document.querySelector('[data-final-column]');
const computerScoreSpan = document.querySelector('[data-opponent-score]');

const TURN = [
  {
    name: 'rock',
    emoji: '✊',
    beats: 'scissor'
  },
  {
    name: 'paper',
    emoji: '✋',
    beats: 'rock'
  },
  {
    name: 'scissor',
    emoji: '✌',
    beats: 'paper'
  },
];

selectionButtons.forEach((selectionButton) => {
  selectionButton.addEventListener('click', e => {
    const theTurn = selectionButton.dataset.selection;
    const selection = TURN.find(choice => choice.name === theTurn);
    makeChoice(selection);
  });
});

function isWinner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name;
}

function makeChoice(selection) {
  const computerSelection = opponentTurn();
  const yourWinner = isWinner(selection, computerSelection);
  const computerWinner = isWinner(computerSelection, selection);

  turnResult(computerSelection, computerWinner);
  turnResult(selection, yourWinner);

  if (yourWinner) incrementScore(yourScoreSpan);
  if (computerWinner) incrementScore(computerScoreSpan);
}

function incrementScore(scoreSpan) {
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
}

function turnResult(eachTurn, winner) {
  const div = document.createElement('div');
  div.innerText = eachTurn.emoji;
  div.classList.add('turn-result');
  if (winner) div.classList.add('winner');
  finalColumn.after(div);
}

function opponentTurn() {
  const fandom = Math.floor(Math.random() * TURN.length);
  return TURN[fandom];
}