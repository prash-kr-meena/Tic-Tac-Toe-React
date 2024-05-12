import {useState} from "react";

function Board() {
  const [state, setState] = useState(undefined);

  function handleClick() {
    return state === 'X' ? setState('O') : setState('X');
  }

  return (
      <>
        <div className="board-row">
          <button className="square" onClick={handleClick}>{state}</button>
          <button className="square">2</button>
          <button className="square">3</button>
        </div>

        <div className="board-row">
          <button className="square">4</button>
          <button className="square">5</button>
          <button className="square">6</button>
        </div>

        <div className="board-row">
          <button className="square">7</button>
          <button className="square">8</button>
          <button className="square">9</button>
        </div>
      </>
  );
}

export default function App() {
  return <Board/>
}