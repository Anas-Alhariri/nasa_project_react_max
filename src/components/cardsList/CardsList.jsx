import React, { useEffect } from "react";
import Card from "../card/Card";
import Loader from "../loader/Loader";

const CardsList = ({ cards }) => {
  const loadCards = () => {
    if (cards.length <= 0) {
      return <Loader />;
    }

    return (
      <div className="cardsList">
        {cards?.map((card, i) => (
          <Card key={i} {...card} />
        ))}
      </div>
    );
  };

  return loadCards();
};

export default CardsList;
