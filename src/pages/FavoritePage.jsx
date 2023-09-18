import Container from "components/Shared/Container";
import Card from "../components/Card/Card";
import NoFavorites from "../components/NoFavorites/NoFavorites";
import { useState } from "react";
import css from "./FavoritePage.module.scss";

const FavoritePage = () => {
  const [storage, setStorage] = useState(
    JSON.parse(localStorage.getItem("favorite")) || []
  );
  return (
    <Container>
      <ul className={css.cardSet}>
        {storage.length > 0 &&
          storage.map((cars) => {
            return <Card cars={cars} key={cars.id} setStorage={setStorage} />;
          })}
      </ul>
      {storage.length === 0 && <NoFavorites />}
    </Container>
  );
};

export default FavoritePage;
