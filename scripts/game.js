class Game {
  constructor() {
    this.players = [];
    this.gameState = ["🟪", "🟪", "🟪", "🟪", "🟪", "🟪", "🟪", "🟪", "🟪"];
    this.turnCount = 0;
    // this.startingPlayer;
    // this.currentPlayer;
  }

  startGame() {
    var player1 = new Player(0, "🟩");
    var player2 = new Player(1, "🟦");
    this.players.push(player1);
    this.players.push(player2);

    this.startingPlayer = this.players[0];
    this.currentPlayer = this.startingPlayer;
  }

  changePlayer(turnTracker) {
    if (turnTracker === this.players[0]) {
      this.currentPlayer = this.players[1];
    }
    else if (turnTracker === this.players[1]) {
      this.currentPlayer = this.players[0];
    }
  }

  trackGame(spaceIndex) {
    this.gameState[spaceIndex] = this.currentPlayer.token;
    this.turnCount++;
    this.trackPlayerSpaces(spaceIndex);
    this.checkOutcome();
    this.changePlayer(this.currentPlayer);
  }

  trackPlayerSpaces(spaceIndex) {
    this.players[this.currentPlayer.id].spaces.push(spaceIndex);
  }

  checkOutcome() {
    var joinedSpaces = this.currentPlayer.spaces.join("");

    for (var i = 0; i < winningConditions.length; i++) {
      if (joinedSpaces.includes(winningConditions[i])) {
        this.winReset();
      }
      else if (this.turnCount === 9) {
        this.drawReset();
      }
    }
  }

  winReset() {
    this.currentPlayer.increaseWins();
    displayWinner();
    this.resetGame();
  }

  drawReset() {
    // DOM: Display Draw
    this.resetGame();
  }

  resetGame() {
    // DATA
      // delay
      // reset gameState
      this.turnCount = 0;
      switchStartingPlayer();
        // update currentPlayer w/ startingPlayer
        // repurpose code from startGame()

    displayGameData();

    // for (var i = 0; i > this.gameState)
    // changePlayer(this.startingPlayer);
    // this.currentPlayer = this.startingPlayer;
  }

  switchStartingPlayer() {
    if (!this.startingPlayer.id) {
      this.startingPlayer = this.players[1];
    }
    else if (this.startingPlayer.id) {
      this.startingPlayer = this.players[0];
    }
  }
}
