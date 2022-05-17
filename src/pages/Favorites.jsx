import React from "react";
import CardsList from "../components/cardsList/CardsList";

const Favorites = ({ cards }) => {
  const favList = cards.filter((card) => card.copyright);
  return <CardsList cards={favList} />;
};

export default Favorites;
