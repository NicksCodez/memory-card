import React, { useState } from 'react';
import Header from './Header';
import CardContainer from './CardContainer';
import '../styles/game.css';

function Game() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clickedCardArr, setClickedCardArr] = useState([]);

  const incrementScore = () => setScore((prevScore) => prevScore + 1);
  const reset = () => {
    setClickedCardArr([]);
    setScore(0);
  };

  const handleGameLogic = (cardName) => {
    if (clickedCardArr.includes(cardName)) {
      if (score > highScore) {
        setHighScore(score);
      }
      reset();
      return;
    }
    setClickedCardArr((prevArr) => prevArr.concat([cardName]));
    incrementScore();
  };

  return (
    <div id="game">
      <Header score={score} highScore={highScore} />
      <CardContainer handleGameLogic={handleGameLogic} />
    </div>
  );
}

export default Game;
