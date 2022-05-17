import React from "react";

const Container = (props) => {
  const containerStyle = {
    width: "96%",
    maxWidth: "780px",
    height: "100%",
    display: "grid",
    placeItems: "center",
    margin: "0 auto",
    // backgroundColor: '#f5f5f5',
    // padding: '20px',
  };
  return <div style={containerStyle}>{props.children}</div>;
};

export default Container;
