import {useState} from "react";
import PropTypes from "prop-types";


function checkTicTacToe(board) {
  // Check all rows and columns
  for (let i = 0; i < 3; i++) {
    if (board[i][0] !== null && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
      return [true, board[i][0]]; // Row win
    }
    if (board[0][i] !== null && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
      return [true, board[0][i]]; // Column win
    }
  }

  // Check diagonals
  if (board[0][0] !== null && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
    return [true, board[0][0]]; // Diagonal from top-left to bottom-right
  }
  if (board[0][2] !== null && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
    return [true, board[0][2]]; // Diagonal from top-right to bottom-left
  }

  // Check for a draw (no nulls left on the board)
  let isDraw = true;
  for (let row of board) {
    for (let cell of row) {
      if (cell === null) {
        isDraw = false; // There's still at least one empty cell
        break;
      }
    }
    if (!isDraw) break;
  }

  if (isDraw) {
    return [true, 'D']; // Draw
  }

  return [false, null]; // Game not finished
}


function Cell({cellValue, handleClick}) {
  Cell.propTypes = {
    cellValue: PropTypes.string,
    handleClick: PropTypes.func.isRequired
  };

  return <button className="square" onClick={handleClick}>{cellValue}</button>
}

function Board() {
  const [turnValue, setTurnValue] = useState('X');
  const [gameResult, setGameResult] = useState(null);

  const [board, setBoard] = useState(
      [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ]
  );

  function updateCell(i, j) {
    // Can't Click any button if the game is over, ie the GameResult is set
    if (gameResult !== null) {
      return;
    }

    // Can't Set board once it has already been Set
    if (board[i][j] !== null) {
      return;
    }
    board[i][j] = turnValue; // Update the Value in the State
    setBoard(board) // Re-Trigger rendering with ~~ sort of fake setState,
    // as I am assigning it to itself, and not really updating

    // Before updating the next turn, check if this person has won the match or not?
    const [gameOver, winner] = checkTicTacToe(board)
    console.log(gameOver, winner)
    if (gameOver) {
      if (winner === "D") {
        setGameResult("Draw!")
      } else {
        setGameResult(winner + " Wins 🏆")
      }
    }

    // Update the turnValue
    turnValue === 'X' ? setTurnValue('O') : setTurnValue('X');
  }


  return (
      <div>
        <div className="board-row">
          <Cell cellValue={board[0][0]} handleClick={() => updateCell(0, 0)}/>
          <Cell cellValue={board[0][1]} handleClick={() => updateCell(0, 1)}/>
          <Cell cellValue={board[0][2]} handleClick={() => updateCell(0, 2)}/>
        </div>

        <div className="board-row">
          <Cell cellValue={board[1][0]} handleClick={() => updateCell(1, 0)}/>
          <Cell cellValue={board[1][1]} handleClick={() => updateCell(1, 1)}/>
          <Cell cellValue={board[1][2]} handleClick={() => updateCell(1, 2)}/>
        </div>

        <div className="board-row">
          <Cell cellValue={board[2][0]} handleClick={() => updateCell(2, 0)}/>
          <Cell cellValue={board[2][1]} handleClick={() => updateCell(2, 1)}/>
          <Cell cellValue={board[2][2]} handleClick={() => updateCell(2, 2)}/>
        </div>

        <br/>
        <h2 >{gameResult}</h2>
      </div>
  );
}

export default function App() {
  return <Board/>
}