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
      this.currentTurn = this.players[1];
    }
    else if (turnTracker === this.players[1]) {
      this.currentTurn = this.players[0];
    }
  }

  trackGame() {

  }

  trackTurn() {

  }

  checkOutcome() {

  }

  resetGame() {
    changeTurnTracker(this.startingTurn);
    this.currentTurn = this.startingTurn;

    // gameState reset
  }
}
