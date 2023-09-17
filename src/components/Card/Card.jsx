import { useState } from "react";
import css from "./Card.module.scss";
import { ReactComponent as FavoriteImg } from "../../assets/active.svg";
import { ReactComponent as NotFavoriteImg } from "../../assets/normal.svg";

const Card = ({ cars }) => {
  const { id, img, make, model, year, rentalPrice, rentalCompany, address, type, functionalities } = cars;
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(prev => !prev);
  }
  const city = address.split(",")[1];
  const country = address.split(",")[2];
  


  return (
    <li className={css.card}>
      <button type="button" className={css.heartBtn} onClick={toggleFavorite}>
        {isFavorite ? <FavoriteImg/> : <NotFavoriteImg/>}
      </button>
      <img src={img} alt={`${make} ${model}`} className={css.img}/>
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
      <button type="button" className={css.moreBtn}>Learn more</button>
    </li>
  );
};

export default Card;
