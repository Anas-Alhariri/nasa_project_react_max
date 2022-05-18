//@ts-check
import React from "react";

const LocalStorageManager = () => {
  const [storage, setStorage] = React.useState(null);

  React.useEffect(() => {
    // if (localStorage.length <= 0) {
    setLocalStorage("favItems", `[]`);
    // addCardToLocalStorage({
    //   title: "title",
    //   description: "description",
    //   url: "url",
    //   date: "date",
    // });
    // }

    (async () => {
      setStorage(storage);
    })();
  }, []);

  return null;
};

// Helper functions:
export const setLocalStorage = (key, value) => {
  localStorage.clear();
  localStorage.setItem(key, value);
};

export const addCardToLocalStorage = (card) => {
  const favItems = JSON.parse(localStorage.getItem("favItems"));
  favItems.push(card);
  setLocalStorage("favItems", JSON.stringify(favItems));
};

export const getFavItemsFromLocalStorage = () => {
  if (localStorage.length <= 0) {
    return [];
  }
  const favItems = JSON.parse(localStorage.getItem("favItems"));
  return favItems;
};

export const checkIfItemInLocalStorage = (item) => {
  const favItems = JSON.parse(localStorage.getItem("favItems"));
  return favItems.find((i) => i.hdurl === item.hdurl);
};

export const removeCardFromLocalStorage = (card) => {
  const favItems = JSON.parse(localStorage.getItem("favItems"));
  const newFavItems = favItems.filter((item) => item.hdurl !== card.hdurl);
  setLocalStorage("favItems", JSON.stringify(newFavItems));
};

export default LocalStorageManager;
