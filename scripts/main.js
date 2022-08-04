// I 2: Check for Win
  // check board for win condition
  // An array holding arrays of win conditions
  // Maybe turn this into an object for some type of looping
  // search the gameState array for every index that a player's emoji exists
  // put index positions in new array for each player
  // check if the players' index array INCLUDES an array from the first point

// I 4: Reset and new starting player
  // Happens after brief pause
  // Player win count increases in a function separate from Reset
  // startingPlayer is switched in Data
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
var winningConditions = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]
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
        currentGame.trackGame(i);
        // Need to change all disables to false on reset
        event.target.disable = true;

        updateGameDisplay();
        updateTurnDisplay();
      }
    }
  }
}
