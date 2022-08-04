class Game {
  constructor() {
    this.players = [];
    this.gameState = ["🟪", "🟪", "🟪", "🟪", "🟪", "🟪", "🟪", "🟪", "🟪"];
    // this.startingTurn;
    // this.currentTurn;
  }

  startGame() {
    var player1 = new Player(0, "🟩");
    var player2 = new Player(1, "🟦");
    this.players.push(player1);
    this.players.push(player2);

    this.startingTurn = this.players[0];
    this.currentTurn = this.startingTurn;
  }

  changeTurnTracker(turnTracker) {
    if (turnTracker === this.players[0]) {
      this.currentTurn = this.players[1];
    }
    else if (turnTracker === this.players[1]) {
      this.currentTurn = this.players[0];
    }
  }

  trackGame(spaceIndex) {
    this.gameState[spaceIndex] = this.currentTurn.token;
    currentGame.changeTurnTracker(currentGame.currentTurn);
    checkWin();
  }

  checkWin() {
    trackPlayersTurns();
  }

  trackPlayersTurns() {
    for (var i = 0; i < this.gameState.length; i++) {
      if (this.gameState[i] === "🟦") {
        this.players[0]
      }
    }
  }

  resetGame() {
    changeTurnTracker(this.startingTurn);
    this.currentTurn = this.startingTurn;

    // gameState reset
  }

  setTurnTrackers() {

  }
}
