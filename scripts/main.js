// ***** Selectors *****
var playerOneToken = document.querySelector('.player-one-token');
var playerOneWins = document.querySelector('.player-one-wins');
var playerTwoToken = document.querySelector('.player-two-token');
var playerTwoWins = document.querySelector('.player-two-wins');
var turnDisplay = document.querySelector('.game-turn-display');
var gameGrid = document.querySelector('.game-grid');
var gameGridSpaces = document.querySelectorAll('.game-grid-space');

// ***** Data *****
var currentGame = createGame();
var winningConditions = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

// ***** Event Listeners *****
window.addEventListener('load', displayGameData);
gameGrid.addEventListener('click', playersTurn);

// ***** Event Handlers *****
function createGame() {
  var createdGame = new Game();
  createdGame.startGame();

  return createdGame;
}

function displayGameData() {
  playerOneToken.innerText = currentGame.players[0].token;
  playerOneWins.innerText = `${currentGame.players[0].wins}`;

  playerTwoToken.innerText = currentGame.players[1].token;
  playerTwoWins.innerText = `${currentGame.players[1].wins}`;

  updateTurnDisplay();
  updateGridDisplay();
}

function updateTurnDisplay() {
  turnDisplay.innerText = `Turn: ${currentGame.currentPlayer.token}`;
}

function updateGridDisplay() {
  for (var i = 0; i < currentGame.gameState.length; i++) {
    gameGridSpaces[i].innerText = currentGame.gameState[i];
  }
}

function playersTurn(event) {
  if (!event.target.disable) {
    for (var i = 0; i < gameGridSpaces.length; i++) {
      if (gameGridSpaces[i].classList === event.target.classList) {
        event.target.disable = true;
        event.target.classList.add('disabled');
        event.target.classList.remove('hvr-grow');
        currentGame.trackGame(i);
      }
    }
  }
}

function resetGame() {
  currentGame.resetData();

  displayGameData();
  for (var i = 0; i < gameGridSpaces.length; i++) {
    gameGridSpaces[i].disable = false;
    gameGridSpaces[i].classList.remove('disabled');
    gameGridSpaces[i].classList.add('hvr-grow');
  }
}

function displayWinner() {
  turnDisplay.innerText = `Won: ${currentGame.currentPlayer.token}`;
}

function displayDraw() {
  turnDisplay.innerText = `Draw`;
}
