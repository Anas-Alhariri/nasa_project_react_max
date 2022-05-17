import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div id="menu" className={style.menu}>
        <Link to={"/Favorites"} className={style.link}>
          Favorites
        </Link>
        <span className={style.dot}> • </span>
        <Link to={"/"} className={style.link}>
          Load More
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
