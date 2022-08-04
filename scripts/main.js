// I 1: Player's turn
  // player's token fills gameboard
  // Switch players after turn
  // Update turnDisplay

// I 4: Reset and new starting player
  // Happens after brief pause
  // Player win count increases in a function separate from Reset
  // startingTurn is switched in Data
  // Reset gameState Data and Dom
  // Update playerWin count in Dom

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

// ***** Event Listeners *****
window.addEventListener('load', displayGameData);
gameGrid.addEventListener('click', playersTurn);

// ***** Event Handlers *****
function createGame() {
  var player1 = new Player(0, "🟩");
  var player2 = new Player(1, "🟦");
  var createdGame = new Game();

  createdGame.players.push(player1);
  createdGame.players.push(player2);

  createdGame.setTurnTrackers();

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
    gameGridSpaces[i].innerText = currentGame.gameState[i];
  }
}

function playersTurn(event) {
  if (!event.target.disable) {
    for (var i = 0; i < gameGridSpaces.length; i++) {
      if (gameGridSpaces[i].classList === event.target.classList) {
        currentGame.gameState[i] = currentGame.currentTurn.token;
        // Need to change disable to true when a space is selected
        event.target.disable = true;
        // Need to change all disables to false on reset

        updateGameDisplay();
        currentGame.changeTurnTracker(currentGame.currentTurn);
        console.log(currentGame.currentTurn);
        updateTurnDisplay();
      }
    }
  }
}
