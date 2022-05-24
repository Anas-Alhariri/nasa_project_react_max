import React from "react";
import { useContext } from "react";
import AppContext from "../AppContext";
import CardsList from "../components/cardsList/CardsList";
import { getFavItemsFromLocalStorage } from "../components/localstorage/LocalStorageManager";

const Favorites = ({ hideLoader }) => {
  const { favorites, setFavorites } = useContext(AppContext);
  // const [faveItemsList, setFaveItemsList] = React.useState([]);
  // React.useEffect(() => {
  //   setFaveItemsList(getFavItemsFromLocalStorage());
  // }, []);

  return <CardsList cards={favorites} hideLoader={true} />;
};

export default Favorites;
