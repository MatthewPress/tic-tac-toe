// Iteration 0: On First load
  // Determine (game method) whose turn it is
  // Output (querySelector) player's turn

// ***** Selectors *****
var playerOneToken = document.querySelector('.player-one-token');
var playerOneWins = document.querySelector('.player-one-wins');
var playerTwoToken = document.querySelector('.player-two-token');
var playerTwoWins = document.querySelector('.player-two-wins');
var turnDisplay = document.querySelector('.game-turn-display');
// ***** Data *****
var currentGame = createGame();

// ***** Event Listeners *****
window.addEventListener('load', displayGameData);

// ***** Event Handlers *****
function createGame() {
  var player1 = new Player(0, "🟩");
  var player2 = new Player(1, "🟦");
  var createdGame = new Game();
  console.log (player1, player2, createdGame);

  createdGame.players.push(player1);
  createdGame.players.push(player2);

  createdGame.setTurn();
  console.log (createdGame, createdGame.players);

  return createdGame;
}

function displayGameData() {
  playerOneToken.innerText = currentGame.players[0].token;
  playerOneWins.innerText = `Wins: ${currentGame.players[0].wins}`;

  playerTwoToken.innerText = currentGame.players[1].token;
  playerTwoWins.innerText = `Wins: ${currentGame.players[1].wins}`;

  updateTurnDisplay();
}

function updateTurnDisplay() {
  turnDisplay.innerText = `Turn: ${currentGame.currentTurn.token}`;
}
