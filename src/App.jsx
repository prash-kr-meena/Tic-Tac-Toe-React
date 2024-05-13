import {useState} from "react";
import PropTypes from "prop-types";


function Cell({turnValue, setTurnValue}) {
  Cell.propTypes = {
    turnValue: PropTypes.number.isRequired,
    setTurnValue: PropTypes.func.isRequired
  };

  const [cellValue, setCellValue] = useState(null);

  function handleClick() {
    // Can't Set cellValue once it has already been Set
    if (cellValue !== null) {
      return;
    }
    setCellValue(turnValue)
    // update the turnValue
    turnValue === 'X' ? setTurnValue('O') : setTurnValue('X');
  }

  return <button className="square" onClick={handleClick}>{cellValue}</button>
}

function Board() {
  const [turnValue, setTurnValue] = useState('X');

  return (
      <>
        <div className="board-row">
          <Cell turnValue={turnValue} setTurnValue={setTurnValue}/>
          <Cell turnValue={turnValue} setTurnValue={setTurnValue}/>
          <Cell turnValue={turnValue} setTurnValue={setTurnValue}/>
        </div>

        <div className="board-row">
          <Cell turnValue={turnValue} setTurnValue={setTurnValue}/>
          <Cell turnValue={turnValue} setTurnValue={setTurnValue}/>
          <Cell turnValue={turnValue} setTurnValue={setTurnValue}/>
        </div>

        <div className="board-row">
          <Cell turnValue={turnValue} setTurnValue={setTurnValue}/>
          <Cell turnValue={turnValue} setTurnValue={setTurnValue}/>
          <Cell turnValue={turnValue} setTurnValue={setTurnValue}/>
        </div>
      </>
  );
}

export default function App() {
  return <Board/>
}