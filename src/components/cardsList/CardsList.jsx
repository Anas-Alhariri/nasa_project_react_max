import React, { useEffect } from "react";
import Card from "../card/Card";
import Loader from "../loader/Loader";

const CardsList = ({ cards, hideLoader }) => {
  const loadCards = () => {
    if (cards.length <= 0 && !hideLoader) {
      return <Loader />;
    }

    return (
      <div className="cardsList">
        {cards?.map((card, i) => (
          <Card key={i} card={card} {...card} />
        ))}
      </div>
    );
  };

  return loadCards();
};

export default CardsList;
