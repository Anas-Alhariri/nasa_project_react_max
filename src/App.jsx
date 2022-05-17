import { useEffect, useState } from "react";

import styles from "./App.module.css";
import CardsList from "./components/cardsList/CardsList";
import Container from "./components/container/Container";
import Navbar from "./components/navbar/Navbar";

const count = 10;
const apiKey = "eguDbnHKBHkJSIAKAbUwOYvP1hFz7bEsBliV3xSy";
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

function App() {
  const [cards, setCards] = useState([]);

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
        <CardsList cards={cards} />
      </Container>
    </div>
  );
}

export default App;
