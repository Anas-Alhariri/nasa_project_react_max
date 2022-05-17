import React from "react";
import { Routes as Router, Route } from "react-router-dom";
import Favorites from "./pages/Favorites";

import Home from "./pages/Home";

const AppsRouter = ({ cards }) => {
  return (
    <Router>
      <Route path="/" element={<Home cards={cards} />} />
      <Route path="/Favorites" element={<Favorites cards={cards} />} />
    </Router>
  );
};

export default AppsRouter;
