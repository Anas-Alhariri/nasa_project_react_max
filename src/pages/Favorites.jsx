import React from "react";
import CardsList from "../components/cardsList/CardsList";

const Favorites = ({ cards }) => {
  const favList = cards.filter((card) => card.isFavored);
  return <CardsList cards={favList} />;
};

export default Favorites;
