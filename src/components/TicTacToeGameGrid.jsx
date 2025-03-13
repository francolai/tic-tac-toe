import '../styles/tictactoegamegrid.css';

function TicTacToeGameGrid({ currentPlayer, selectedCells, onCellClick }) {
  return (
    <div className={`game__grid game__grid-turn_${currentPlayer}`}>
      {Array(9)
        .fill()
        .map((val, ind) => (
          <div
            key={`game__grid-cell_${ind + 1}`}
            className={`game__grid-cell_${ind + 1} ${
              selectedCells[ind + 1] ? selectedCells[ind + 1] : 'unselected'
            }`}
            onClick={() => onCellClick(ind + 1)}
          />
        ))}
    </div>
  );
}

export default TicTacToeGameGrid;
