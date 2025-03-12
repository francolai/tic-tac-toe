// Global constants and functions
const NOUGHT = 1;
const CROSS = -1;

function newGameGrid() {
  return [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
}

/**
 * Represents a tic-tac-toe game instance.
 */
class TicTacToe {
  /**
   * Create and initialize a tic-tac-toe game.
   */
  constructor() {
    this.grid = newGameGrid();
    this.currentPlayer = NOUGHT;
    this.winner = null;
  }

  /**  Play on the cell with the corresponding cell ID.
   * If the game is over, log a message on the console instead.
   * @param {number} cellId - The id of the cell (1 ~ 9)
   */
  play(cellId) {
    if (this.isGameOver()) {
      return console.log(
        'Game Over. Cannot play anymore, please start a new game!'
      );
    }
    const rowInd = Math.floor((cellId - 1) / 3);
    const colInd = (cellId - 1) % 3;
    if (this.grid[rowInd][colInd]) {
      console.log('This cell is already played, please pick another cell.');
      return;
    }
    this.grid[rowInd][colInd] = this.currentPlayer;
    console.log(this.grid);
    if (this.isGameOver()) {
      this.winner = this.currentPlayer === NOUGHT ? 'NOUGHT' : 'CROSS';
      return;
    }
    this.currentPlayer === NOUGHT
      ? (this.currentPlayer = CROSS)
      : (this.currentPlayer = NOUGHT);
  }

  /** Check if the game is over.
   * @returns {boolean} true if over, false otherwise.
   */
  isGameOver() {
    if (this.winner !== null) {
      return true;
    }
    const grid = this.grid;
    if (
      (grid[0][0] && grid[0][0] === grid[0][1] && grid[0][0] === grid[0][2]) ||
      (grid[1][0] && grid[1][0] === grid[1][1] && grid[1][0] === grid[1][2]) ||
      (grid[2][0] && grid[2][0] === grid[2][1] && grid[2][0] === grid[2][2]) ||
      (grid[0][0] && grid[0][0] === grid[1][0] && grid[0][0] === grid[2][0]) ||
      (grid[0][1] && grid[0][1] === grid[1][1] && grid[0][1] === grid[2][1]) ||
      (grid[0][2] && grid[0][2] === grid[1][2] && grid[0][2] === grid[2][2]) ||
      (grid[0][0] && grid[0][0] === grid[1][1] && grid[0][0] === grid[2][2]) ||
      (grid[2][0] && grid[2][0] === grid[1][1] && grid[2][0] === grid[0][2])
    ) {
      return true;
    }
    return false;
  }

  /**
   * Reset and start a new game.
   */
  reset() {
    this.grid = newGameGrid();
    this.currentPlayer = NOUGHT;
    this.winner = null;
  }
}
