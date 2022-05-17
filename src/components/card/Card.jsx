import { useEffect, useState } from "react";
import style from "./Card.module.css";

const Card = (props) => {
  // const { hdurl, url, copyright, date, explanation, title, isFavored } =
  // props.card;
  const [card, setCard] = useState({});
  const [isFavored, setIsFavored] = useState(false);

  useEffect(() => {
    if (card) {
      // setCard(props.card);
      setCard({ ...props.card, isFavorite: props.card?.isFavorite || false });
      // setCard((pre) => ({ ...pre, isFavored: false }));
    }
  }, [props.card]);

  useEffect(() => {
    if (card) {
      setIsFavored(card.isFavorite);
    }
  }, [card]);

  const loadCards = () => {
    if (card) {
      return (
        <div className={style.card}>
          <a href={card.hdurl}>
            <img
              className={style.image}
              src={
                card.hdurl
                  ? card.hdurl
                  : "https://apod.nasa.gov/apod/image/0003/eros0306_near.jpg"
              }
              alt={
                card.hdurl
                  ? card.hdurl
                  : "https://apod.nasa.gov/apod/image/0003/eros0306_near.jpg"
              }
            />
          </a>
          <div className={style.cardBody}>
            <h3 className={style.title}>
              {card.title ? card.title : `Nearer To Asteroid Eros`}
            </h3>
            <a
              onClick={(e) => {
                // TODO: SET ELEMENTs or Add element to the localStorage
                e.preventDefault();
                setIsFavored(!isFavored);
                setCard((pre) => ({ ...pre, isFavorite: !isFavored }));
                if (!localStorage.getItem("cards")) {
                  localStorage.setItem("cards:", JSON.stringify({ card }));
                }
                console.log(localStorage.getItem("card"));
                console.log(card);
              }}
              className={`${style.link} + ${isFavored && style.favored}`}
            >
              Add to Favorites
            </a>
            <p className={style.text}>
              {card.explanation
                ? card.explanation
                : `As the robot spacecraft NEAR lowers itself toward asteroid 433 Eros,
            more surface details are becoming visible. Last week's maneuvers
            brought NEAR to within 204 kilometers of the floating mountain's
            surface. With increased resolution, NEAR's camera then documented
            Eros' unusual shape, craters large and small, boulders, and mysterious
            grooves similar to asteroid Gaspra and Martian moon Phobos. If you
            could stand on Eros, you would still be too small to be visible on
            this recent image, which shows features as small as 20 meters across.
            However, you would feel gravity only 1/1000 that on Earth, so that you
            could easily jump over even this large 5 kilometer wide crater.`}
            </p>
            <div className={style.dateAndCopyright}>
              {card.copyright && (
                <p className={style.copyright}>
                  <span className={style.copyrightIcon}>Copyright:</span>
                  <span className={style.copyrightText}>
                    By {card.copyright}
                  </span>
                </p>
              )}
              <p className={style.date}>
                <span className={style.dateIcon}>
                  Published:
                  <span className={style.dateText}>
                    {card.date
                      ? `${card.date}`
                      : `${new Date().toDateString()}`}
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  return loadCards();
};

export default Card;
