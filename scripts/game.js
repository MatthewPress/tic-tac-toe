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
    console.log(turnTracker);
    if (turnTracker === this.players[0]) {
      console.log("if");
      turnTracker = this.players[1];
      console.log(this.players[1]);
      console.log(this.currentTurn);
    }
    else if (turnTracker === this.players[1]) {
      console.log("else");
      turnTracker = this.players[0];
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
