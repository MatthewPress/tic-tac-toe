// I 1: Player's turn
  // player's token fills gameboard
  // Switch players after turn
  // Update turnDisplay

// ***** Selectors *****
var playerOneToken = document.querySelector('.player-one-token');
var playerOneWins = document.querySelector('.player-one-wins');
var playerTwoToken = document.querySelector('.player-two-token');
var playerTwoWins = document.querySelector('.player-two-wins');
var turnDisplay = document.querySelector('.game-turn-display');
var gameGridItems = document.querySelectorAll('.game-grid-item');

// ***** Data *****
var currentGame = createGame();

// ***** Event Listeners *****
window.addEventListener('load', displayGameData);

// ***** Event Handlers *****
function createGame() {
  var player1 = new Player(0, "🟩");
  var player2 = new Player(1, "🟦");
  var createdGame = new Game();

  createdGame.players.push(player1);
  createdGame.players.push(player2);

  createdGame.setTurn();

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
  turnDisplay.innerText = `Turn: ${currentGame.currentTurn.token}`;
}

function updateGameDisplay() {
  for (var i = 0; i < currentGame.gameState.length; i++) {
    gameGridItems[i].innerText = currentGame.gameState[i];
  }
}
