import css from "./Navigation.module.scss";
import { NavLink } from "react-router-dom";

const Navigation = () => {
   return (
    <nav className={css.nav}>
      <ul className={css.list}>
        <li>
          <NavLink to="/" className={css.link}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/catalog" className={css.link}>
            Catalog
          </NavLink>
        </li>
        <li>
          <NavLink to="/favorite" className={css.link}>
            Favorite
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
