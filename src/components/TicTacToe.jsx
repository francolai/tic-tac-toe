import { useState } from 'react';
import TicTacToeGameGrid from './TicTacToeGameGrid';
import TicTacToeGameLogic from '../util/tic-tac-toe-gameLogic';
import TicTacToeGameHeader from './TicTacToeGameHeader';
import '../styles/tictactoe.css';

const gameLogic = new TicTacToeGameLogic();

function TicTacToe() {
  const [selectedCells, setSelectedCells] = useState({});
  const [currentPlayer, setCurrentPlayer] = useState(gameLogic.currentPlayer);

  function handleCellClick(cellID) {
    if (selectedCells[cellID] || gameLogic.isGameOver()) {
      return;
    }
    setSelectedCells((prevSelectedCells) => {
      return { ...prevSelectedCells, [cellID]: currentPlayer };
    });
    gameLogic.play(cellID);
    if (!gameLogic.isGameOver()) {
      setCurrentPlayer(gameLogic.currentPlayer);
    }
  }

  return (
    <div className="game__container">
      <TicTacToeGameHeader className="game__header" />
      <TicTacToeGameGrid
        gameOver={gameLogic.isGameOver()}
        currentPlayer={currentPlayer}
        selectedCells={selectedCells}
        onCellClick={handleCellClick}
      />
    </div>
  );
}

export default TicTacToe;
