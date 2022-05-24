import { useContext } from "react";
import { useEffect, useState } from "react";

import styles from "./App.module.css";
import AppContext from "./AppContext";
import Router from "./AppsRouter";
import Confirmation from "./components/confirmation/Confirmation";
import Container from "./components/container/Container";
import LocalStorageManager from "./components/localstorage/LocalStorageManager";
import Navbar from "./components/navbar/Navbar";

const count = 10;
const apiKey = "eguDbnHKBHkJSIAKAbUwOYvP1hFz7bEsBliV3xSy";
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

function App() {
  const [cards, setCards] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const appContext = useContext(AppContext);

  // TODO: Create a full-screen image viewer component.
  // TODO: Make the fetchData function rerun when "Load more" link is clicked.
  // TODO: Create the functionality of the "Add to Favorites" link using the localStorage.
  // TODO: Create a page for favorites.
  // TODO: Create Favorites component.
  // TODO: Create favoritesList component.

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(apiUrl);
      return result.json();
    };

    fetchData().then((data) => {
      setCards(data);
    });
  }, []);

  return (
    <div className={styles.app}>
      <Navbar />
      <Container>
        <AppContext.Provider
          value={{ cards, setCards, favorites, setFavorites }}
        >
          <LocalStorageManager />
          <Router />
        </AppContext.Provider>
      </Container>
      {/* <Confirmation message={`Welcome to Nasa's Gallery`} /> */}
    </div>
  );
}

export default App;
