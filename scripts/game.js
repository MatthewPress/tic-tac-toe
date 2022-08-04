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
    this.setCurrentPlayer();
  }

  setCurrentPlayer() {
    this.currentPlayer = this.startingPlayer;
  }

  changePlayer() {
    if (this.currentPlayer === this.players[0]) {
      this.currentPlayer = this.players[1];
    }
    else if (this.currentPlayer === this.players[1]) {
      this.currentPlayer = this.players[0];
    }
    updateTurnDisplay();
  }

  trackGame(spaceIndex) {
    this.gameState[spaceIndex] = this.currentPlayer.token;
    this.turnCount++;
    this.trackPlayerSpaces(spaceIndex);
console.log(this.currentPlayer);
    updateGameDisplay();
    if (!this.checkOutcome()) {
      this.changePlayer();
    }
  }

  trackPlayerSpaces(spaceIndex) {
    this.players[this.currentPlayer.id].spaces.push(spaceIndex);
  }

  checkOutcome() {
    var sortedSpaces = this.currentPlayer.spaces.sort();
    var joinedSpaces = sortedSpaces.join("");
console.log(this.currentPlayer.token, joinedSpaces);
    for (var i = 0; i < winningConditions.length; i++) {
      if (joinedSpaces.includes(winningConditions[i])) {
        this.winReset();
        return true;
      }
      else if (this.turnCount === 9) {
        this.drawReset();
        return true;
      }
    }
    return false;
  }

  winReset() {
    this.currentPlayer.increaseWins();
    displayWinner();
    setTimeout(resetGame, 3000);
  }

  drawReset() {
    displayDraw();
    setTimeout(resetGame, 3000);
  }

  resetData() {
    for (var i = 0; i < this.gameState.length; i++) {
      this.gameState[i] = "🟪";
      this.players[0].spaces.splice(0, 1)
      this.players[1].spaces.splice(0, 1)
    }

    this.turnCount = 0;
    this.switchStartingPlayer();
  }

  switchStartingPlayer() {
    if (this.startingPlayer.id === 0) {
      this.startingPlayer = this.players[1];
    }
    else if (this.startingPlayer.id === 1) {
      this.startingPlayer = this.players[0];
    }
    this.setCurrentPlayer();
  }
}
