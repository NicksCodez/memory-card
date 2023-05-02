/* eslint-disable react/prop-types */
import React from 'react';

function Header(props) {
  const { score, highScore } = props;
  return (
    <div id="header">
      <div>score: {score}</div>
      <div>highscore: {highScore}</div>
    </div>
  );
}

export default Header;
