// Iteration 0: On First load
  // Determine (game method) whose turn it is
  // Output (querySelector) player's turn

// ***** Selectors *****
// var playerOne = document.querySelector('.player-one');
// var playerTwo = document.querySelector('.player-two');
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
  console.log (createdGame, createdGame.players);
  return createdGame;
}

function displayGameData() {
  // playerOne h4 element is the currentGame.players[0].token
  // playerOne p element is `Wins: ${currentGame.players[0].wins}`

  // playerTwo h4 element is the currentGame.players[1].token
  // playerTwo p element is `Wins: ${currentGame.players[1].wins}`

  updateTurnDisplay();
}

function updateTurnDisplay() {
  // turnDisplay innerText is `Turn: ${currentGame.turn}`
}
