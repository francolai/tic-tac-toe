import { useState } from 'react';
import TicTacToeGameGrid from './TicTacToeGameGrid';

function TicTacToe() {
  const [selectedCells, setSelectedCells] = useState({});
  const [currentPlayer, setCurrentPlayer] = useState('nought');

  function handleCellClick(cellID) {
    if (selectedCells[cellID]) {
      return;
    }
    setSelectedCells((prevSelectedCells) => {
      return { ...prevSelectedCells, [cellID]: currentPlayer };
    });
    setCurrentPlayer((prevPlayer) =>
      prevPlayer === 'nought' ? 'cross' : 'nought'
    );
  }

  return (
    <TicTacToeGameGrid
      currentPlayer={currentPlayer}
      selectedCells={selectedCells}
      onCellClick={handleCellClick}
    />
  );
}

export default TicTacToe;
