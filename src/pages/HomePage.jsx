import Container from "components/Shared/Container";
import { NavLink } from "react-router-dom";
import css from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <section className={css.section}>
    <Container>

      <div>
        <h1 className={css.header}>Drive your dreams</h1>
        <p className={css.description}>Unlock the road to freedom with us. Discover convenience, flexibility, and adventure at your fingertips. Rent a car today and drive your dreams!</p>
        <NavLink to="/catalog" className={css.link}>Start</NavLink>
      </div>
    </Container>
    </section>
  );
};

export default HomePage;
