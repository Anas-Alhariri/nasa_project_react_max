import React from "react";
import CardsList from "../components/cardsList/CardsList";
import { getFavItemsFromLocalStorage } from "../components/localstorage/LocalStorageManager";

const Favorites = ({ hideLoader }) => {
  const [faveItemsList, setFaveItemsList] = React.useState([]);
  React.useEffect(() => {
    setFaveItemsList(getFavItemsFromLocalStorage());
  }, []);

  return <CardsList cards={faveItemsList} hideLoader={true} />;
};

export default Favorites;
