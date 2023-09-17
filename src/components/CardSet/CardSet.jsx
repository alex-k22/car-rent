import Card from "../Card/Card";
import css from "./CardSet.module.scss";

const CardSet = ( { cars } ) => {
  console.log(cars)
   return (
  <ul className={css.cardSet}>
    {cars.map((cars) => {
      return (<Card cars={cars} key={cars.id} />);
    })}
  </ul>
)};

export default CardSet;

