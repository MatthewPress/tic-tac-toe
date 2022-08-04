class Game {
  constructor() {
    this.players = [];
    this.gameState = ["🟪", "🟪", "🟪", "🟪", "🟪", "🟪", "🟪", "🟪", "🟪"];
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

  changeTurnTracker(turnTracker) {
    if (turnTracker === this.players[0]) {
      this.currentPlayer = this.players[1];
    }
    else if (turnTracker === this.players[1]) {
      this.currentPlayer = this.players[0];
    }
  }

  trackGame(spaceIndex) {
    this.gameState[spaceIndex] = this.currentPlayer.token;
    this.trackPlayerSpaces(spaceIndex);
    this.checkWin();
    this.changeTurnTracker(this.currentPlayer);
  }

  trackPlayerSpaces(spaceIndex) {
    this.players[this.currentPlayer.id].spaces.push(spaceIndex);
    console.log("unsorted", this.currentPlayer.spaces);
    this.currentPlayer.spaces.sort();
    console.log("sorted:", this.currentPlayer.spaces);
  }

  checkWin() {
    // compare the current player's spaces against the winningConditions


  }

  resetGame() {
    changeTurnTracker(this.startingPlayer);
    this.currentPlayer = this.startingPlayer;

    // gameState reset
  }

  setTurnTrackers() {

  }
}
