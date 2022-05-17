import { useEffect, useState } from "react";

import styles from "./App.module.css";
import CardsList from "./components/cardsList/CardsList";
import Container from "./components/container/Container";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Router from "./AppsRouter";

const count = 10;
const apiKey = "eguDbnHKBHkJSIAKAbUwOYvP1hFz7bEsBliV3xSy";
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

function App() {
  const [cards, setCards] = useState([]);

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
        <Router cards={cards} />
      </Container>
    </div>
  );
}

export default App;
