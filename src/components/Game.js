import React, { useState } from "react";
import { calculateWinner } from "../helper";
import Board from "./Board";

const Game = () => {
  // initial state of grid is an array of 9 with value of null
  // history is an array of all the steps taken
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);

  // decides if we place an X or O in a given square
  const xO = xIsNext ? "X" : "O";

  // this is onClick function that is passed down to Square
  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];

    if (squares[i] !== null) {
      alert("already clicked");
      return;
    }

    // return if won or (squares [i] is) occupied
    if (winner || squares[i]) return;
    // select square depending on turn (according to var xO)
    squares[i] = xO;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);
  };

  // const handleRestart = () => {
  //   setHistory(Array(9).fill(null));
  // };

  // xisNext will look for a remainder, if divisible by 2, it should be on O, else on X
  const jumpTo = (step) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  const renderMoves = () =>
    history.map((_step, move) => {
      const destination = move ? `Go to move # ${move}` : "Go to Start";
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      );
    });

  return (
    <>
      <h1>React Tic Tac Toe - With Hooks</h1>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div className="info-wrapper">
        <div>
          <h3>History</h3>
          {renderMoves()}
        </div>
        <h3>{winner ? "Winner: " + winner : "Next Player: " + xO} </h3>
        {/* <button onClick={() => handleRestart()}>Play Again</button> */}
      </div>
    </>
  );
};

export default Game;
