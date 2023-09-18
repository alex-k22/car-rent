import { useEffect, useState } from "react";
import css from "./Card.module.scss";
import { ReactComponent as FavoriteImg } from "../../assets/active.svg";
import { ReactComponent as NotFavoriteImg } from "../../assets/normal.svg";
import CarInfo from "../CarInfo/CarInfo";

const Card = ({ cars }) => {
  const {
    id,
    img,
    make,
    model,
    year,
    rentalPrice,
    rentalCompany,
    address,
    type,
    functionalities,
  } = cars;
  
  const city = address.split(",")[1];
  const country = address.split(",")[2];

  const [isFavorite, setIsFavorite] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleLearnMore = () => {
    setShowModal((prev) => !prev);

  };

  useEffect(() => {
    if (showModal) {
      document.body.classList.add('is-open');
    }
    if (!showModal) {
      document.body.classList.remove('is-open');
    }
  }, [showModal]);

  useEffect(() => {
    const currentStorage = JSON.parse(localStorage.getItem("favorite")) || [];
    if (currentStorage.find((car) => car.id === id)) {
      setIsFavorite(true);
    }
  }, [id, setIsFavorite]);

  const toggleFavorite = () => {
    const storage = JSON.parse(localStorage.getItem("favorite")) || [];
    let newStorage;
    if (!isFavorite) {
      newStorage = [...storage, cars];
    }
    if (isFavorite) {
      newStorage = storage.filter((car) => car.id !== id);
    }
    localStorage.setItem("favorite", JSON.stringify(newStorage));
    setIsFavorite((prev) => !prev);
  };

  return (
    <>
      <li className={css.card}>
        <button type="button" className={css.heartBtn} onClick={toggleFavorite}>
          {isFavorite ? <FavoriteImg /> : <NotFavoriteImg />}
        </button>
        <img src={img} alt={`${make} ${model}`} className={css.img} />
        <div className={css.carMainInfo}>
          <h2 className={css.make}>
            {make} <span className={css.blue}>{model}</span>, {year}
          </h2>
          <span>{rentalPrice}</span>
        </div>
        <ul className={css.carInfo}>
          <li className={css.infoItem}>{city}</li>
          <li className={css.infoItem}>{country}</li>
          <li className={css.infoItem}>{rentalCompany}</li>
          <li className={css.infoItem}>{type}</li>
          <li className={css.infoItem}>{model}</li>
          <li className={css.infoItem}>{id}</li>
          <li className={css.infoItem}>{functionalities[0]}</li>
        </ul>
        <button type="button" className={css.moreBtn} onClick={handleLearnMore}>
          Learn more
        </button>
      </li>
      {showModal && <CarInfo toggleModal={handleLearnMore} cars={cars} />}
    </>
  );
};

export default Card;
