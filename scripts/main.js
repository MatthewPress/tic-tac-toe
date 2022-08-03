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

// ***** Event Listeners *****
window.addEventListener('load', createGame);

// ***** Event Handlers *****
function createGame() {
  var player1 = new Player(0, token);
  var player2 = new Player(0, token);
  var currentGame = new Game();
  console.log (player1, player2, currentGame);

  currentGame.players.push(player1);
  currentGame.players.push(player2);
  console.log (currentGame, currentGame.players);
}
