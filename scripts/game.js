class Game {
  constructor() {
    this.players = [];
    this.gameState = [];
    // this.startingTurn;
    // this.currentTurn;
  }

  setTurn() {
    this.startingTurn = this.players[0];
    this.currentTurn = this.startingTurn;
  }

  changeStartingTurn() {
    if (this.startingTurn === this.players[0]) {
      this.startingTurn = this.players[1];
    }
    else if (this.startingTurn === this.players[1]) {
      this.startingTurn = this.players[0];
    }
    
    this.currentTurn = this.startingTurn;
  }

  trackGame() {

  }

  trackTurn() {

  }

  checkOutcome() {

  }

  resetGame() {

  }
}
