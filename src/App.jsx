import {useState} from "react";

function Cell({turnValue, setTurnValue}) {
  const [cellValue, setCellValue] = useState(undefined);

  function handleClick() {
    // Can't Set cellValue once it has already been Set
    if (cellValue !== undefined) {
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