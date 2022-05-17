import React, { useEffect } from "react";
import Card from "../card/Card";
import appStyle from "../../App.module.css";
import loadingImage from "../../icons/rocket.svg";

const CardsList = ({ cards }) => {
  const loadCards = () => {
    if (cards.length <= 0) {
      return (
        <div className={appStyle.loader}>
          <img src={loadingImage} alt="Rocket Loading Animation" />
        </div>
      );
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
