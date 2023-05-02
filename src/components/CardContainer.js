/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import Card from './Card';
import Characters from '../helpers/Characters';

function CardContainer(props) {
  const { handleGameLogic } = props;

  const cardArr = [...Characters];
  const [cards, setCards] = useState(cardArr);

  const shuffle = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      const rndm = Math.floor(Math.random() * arr.length);
      // eslint-disable-next-line no-param-reassign
      [arr[i], arr[rndm]] = [arr[rndm], arr[i]];
    }
  };

  useEffect(() => {
    const newCardArr = [...cardArr];
    shuffle(newCardArr);
    setCards(newCardArr);
  }, [handleGameLogic]);

  return (
    <div id="card-container">
      {cards.map((card) => (
        <Card
          key={card.name}
          character={card}
          handleGameLogic={handleGameLogic}
        />
      ))}
    </div>
  );
}

export default CardContainer;
