class Game {
  constructor() {
    this.players = [];
    this.gameState = ["🟪", "🟪", "🟪", "🟪", "🟪", "🟪", "🟪", "🟪", "🟪"];
    // this.startingTurn;
    // this.currentTurn;
  }

  setTurnTrackers() {
    this.startingTurn = this.players[0];
    this.currentTurn = this.startingTurn;
  }

  changeTurnTracker(turnTracker) {
    if (turnTracker === this.players[0]) {
      turnTracker = this.players[1];
    }
    else if (turnTracker === this.players[1]) {
      turnTracker = this.players[0];
    }
  }

  trackGame() {

  }

  trackTurn() {

  }

  checkOutcome() {
    // Maybe need "winner" parameter
      // if (player 1 wins) {}
      // if (player 2 wins) {}
      // if (draw) {}
    // delay
    resetGame()
  }

  resetGame() {
    changeTurnTracker(this.startingTurn);
    this.currentTurn = this.startingTurn;

    // gameState reset
  }
}
