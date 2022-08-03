// Iteration 0: On First load
  // two players are created
  // one game is created
  // protect both inside and on load event listener and handler
  // players are put in the game object instance
  // Output (querySelector) players and win count
  // Determine (game method) whose turn it is
  // Output (querySelector) player's turn

// ***** Selectors *****

// ***** Data *****
var currentGame = createGame()

// ***** Event Listeners *****
window.addEventListener('load', displayGameData);

// ***** Event Handlers *****
function createGame() {
  var player1 = new Player(0, token);
  var player2 = new Player(0, token);
  var createdGame = new Game();
  console.log (player1, player2, createdGame);

  createdGame.players.push(player1);
  createdGame.players.push(player2);
  console.log (createdGame, createdGame.players);
  return createdGame;
}

function displayGameData() {
  
}
