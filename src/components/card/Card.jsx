import style from "./Card.module.css";

const Card = ({ hdurl, url, copyright, date, explanation, title }) => {
  const loadCards = () => {
    if (title) {
      return (
        <div className={style.card}>
          <a href={hdurl}>
            <img
              className={style.image}
              src={
                hdurl
                  ? hdurl
                  : "https://apod.nasa.gov/apod/image/0003/eros0306_near.jpg"
              }
              alt={
                hdurl
                  ? hdurl
                  : "https://apod.nasa.gov/apod/image/0003/eros0306_near.jpg"
              }
            />
          </a>
          <div className={style.cardBody}>
            <h3 className={style.title}>
              {title ? title : `Nearer To Asteroid Eros`}
            </h3>
            <a
              href={
                hdurl
                  ? hdurl
                  : "https://apod.nasa.gov/apod/image/0003/eros0306_near.jpg"
              }
              className={style.link}
            >
              Add to Favorites
            </a>
            <p className={style.text}>
              {explanation
                ? explanation
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
              {copyright && (
                <p className={style.copyright}>
                  <span className={style.copyrightIcon}>Copyright:</span>
                  <span className={style.copyrightText}>By {copyright}</span>
                </p>
              )}
              <p className={style.date}>
                <span className={style.dateIcon}>
                  Published:
                  <span className={style.dateText}>
                    {date ? `${date}` : `${new Date().toDateString()}`}
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
