// Refactor
  // All DOM updates happen in the Game class object instance

// I 2: Check for Win
  // check board for win condition
  // An array holding arrays of win conditions
  // search the gameState array for every index that a player's emoji exists
  // put index positions in new array for each player
  // check if the players' index array INCLUDES an array from the first point

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
        currentGame.trackTurn(i);
        // Need to change all disables to false on reset
        event.target.disable = true;
        
        updateGameDisplay();
        updateTurnDisplay();
      }
    }
  }
}
