import React from "react";
import appStyle from "../../App.module.css";
import loadingImage from "../../icons/rocket.svg";

const Loader = () => {
  return (
    <div className={appStyle.loader}>
      <img src={loadingImage} alt="Rocket Loading Animation" />
    </div>
  );
};

export default Loader;
