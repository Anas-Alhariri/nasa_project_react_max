import React from "react";
import { useEffect } from "react";
import "./Confirmation.css";
const Confirmation = ({ message }) => {
  const [show, setShow] = React.useState(true);

  useEffect(() => {
    setShow(true);
    let id = null;
    console.log(message);
    id = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => {
      clearTimeout(id);
    };
  }, [message]);

  return (
    <div
      className="confirmation"
      style={{
        display: show && message ? "block" : "none",
        color: message && message.includes("Added") ? "green" : "red",
      }}
    >
      {message && message}
    </div>
  );
};

export default Confirmation;
