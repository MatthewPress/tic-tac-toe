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
var winningConditions = ["012", "345", "678", "036", "147", "258", "048", "246"];

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
  playerOneWins.innerText = `Wins: ${currentGame.players[0].wins}`;

  playerTwoToken.innerText = currentGame.players[1].token;
  playerTwoWins.innerText = `Wins: ${currentGame.players[1].wins}`;

  updateTurnDisplay();
  updateGameDisplay();
}

function updateTurnDisplay() {
  turnDisplay.innerText = `Turn: ${currentGame.currentPlayer.token}`;
}

function updateGameDisplay() {
  for (var i = 0; i < currentGame.gameState.length; i++) {
    gameGridSpaces[i].innerText = currentGame.gameState[i];
  }
}

function playersTurn(event) {
  if (!event.target.disable) {
    for (var i = 0; i < gameGridSpaces.length; i++) {
      if (gameGridSpaces[i].classList === event.target.classList) {
        event.target.disable = true;
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
  }
}

function displayWinner() {
  turnDisplay.innerText = `Won: ${currentGame.currentPlayer.token}`;
}

function displayDraw() {
  turnDisplay.innerText = `Draw`;
}
