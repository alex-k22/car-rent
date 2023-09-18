import Modal from "../Shared/Modal";
import css from "./CarInfo.module.scss";
import { ReactComponent as CloseIcon } from "../../assets/x.svg";

const CarInfo = ({ cars, toggleModal }) => {
  const {
    id,
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    type,
    functionalities,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    rentalConditions,
    mileage,
  } = cars;

  const city = address.split(",")[1];
  const country = address.split(",")[2];

  const handleCloseModal = () => {
    toggleModal();
  };

  return (
    <Modal toggleModal={toggleModal}>
      <div className={css.wrapper}>
        <button
          type="button"
          className={css.closeBtn}
          onClick={handleCloseModal}
        >
          <CloseIcon size={24} className={css.closeIcon} />
        </button>
        <img src={img} alt={`${make} ${model}`} className={css.img}></img>
        <h2 className={css.make}>
          {make} <span className={css.blue}>{model}</span>, {year}
        </h2>
        <ul className={css.carInfo}>
          <li className={css.infoItem}>{city}</li>
          <li className={css.infoItem}>{country}</li>
          <li className={css.infoItem}>id: {id}</li>
          <li className={css.infoItem}>Year: {year}</li>
          <li className={css.infoItem}>Type: {type}</li>
          <li className={css.infoItem}>Fuel Consumption: {fuelConsumption}</li>
          <li className={css.infoItem}>Engine Size: {engineSize}</li>
        </ul>
        <p className={css.description}>{description}</p>
        <h3 className={css.accHeader}>Accessories and functionalities:</h3>
        <ul className={css.carInfo}>
          {accessories.map((acc) => {
            return (
              <li className={css.infoItem} key={acc}>
                {acc}
              </li>
            );
          })}
          {functionalities.map((func) => {
            return (
              <li className={css.infoItem} key={func}>
                {func}
              </li>
            );
          })}
        </ul>
        <h3 className={css.accHeader}>Rental Conditions:</h3>
        <ul className={css.condList}>
            <li className={css.conditionsItem}>Minimum age: <span className={css.blue}>{rentalConditions.split("\n")[0].split(":")[1]}</span></li>
            <li className={css.conditionsItem}>{rentalConditions.split("\n")[1]}</li>
            <li className={css.conditionsItem}>{rentalConditions.split("\n")[2]}</li>
            <li className={css.conditionsItem}>Mileage: <span className={css.blue}>{mileage / 1000}</span></li>
            <li className={css.conditionsItem}>Price: <span className={css.blue}>{rentalPrice}</span></li>
        </ul>
        <a href="tel:+380730000000" className={css.rental}>Rental Car</a>
      </div>
    </Modal>
  );
};

export default CarInfo;
