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
  };
};
