/* eslint-disable react/prop-types */
import React from 'react';

function Header(props) {
  const { score, highScore } = props;
  return (
    <div id="header">
      <div className="title">Stardust Crusaders Memory Cards</div>
      <div className="scoreboard">
        <div>Score: {score}</div>
        <div>Highscore: {highScore}</div>
      </div>
    </div>
  );
}

export default Header;
