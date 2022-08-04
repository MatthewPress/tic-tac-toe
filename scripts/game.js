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
    this.turnCount++;
    this.trackPlayerSpaces(spaceIndex);
    this.checkOutcome();
    this.changeTurnTracker(this.currentPlayer);
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
    console.log("Win");
    // call players increaseWin()
    // DOM: Display winner
    // resetGame();
  }

  drawReset() {
    console.log("Draw");
    // DOM: Display Draw
    // resetGame();
  }

  resetGame() {
    // DATA
      // delay
      // reset gameState
      // reset turnCount
      // switch startingPlayer
        // update currentPlayer w/ startingPlayer
        // repurpose code from startGame()

    // DOM
      // Reset button emojis
      // Display players' win counts
      // Display turn

    // this.turnCount = 0;
    // for (var i = 0; i > this.gameState)
    // changeTurnTracker(this.startingPlayer);
    // this.currentPlayer = this.startingPlayer;
  }

  setTurnTrackers() {

  }
}
