import React from "react";
import { useContext } from "react";
import { Routes as Router, Route } from "react-router-dom";
import AppContext from "./AppContext";
import Favorites from "./pages/Favorites";

import Home from "./pages/Home";

const AppsRouter = () => {
  const { cards, setCards, favorites, setFavorites } = useContext(AppContext);
  return (
    <Router>
      <Route path="/" element={<Home cards={cards} />} />
      <Route path="/Favorites" element={<Favorites cards={favorites} />} />
    </Router>
  );
};

export default AppsRouter;
