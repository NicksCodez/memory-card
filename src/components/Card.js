/* eslint-disable react/prop-types */
import React from 'react';

function Card(props) {
  const {
    character: { name, picture },
    handleGameLogic,
  } = props;
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div id="card" onClick={handleGameLogic.bind(this, name)}>
      <div>
        <img src={picture} alt={name} />
      </div>
      <div>{name}</div>
    </div>
  );
}

export default Card;
