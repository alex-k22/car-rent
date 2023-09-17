import { NavLink } from "react-router-dom";
import css from "./NoFavorites.module.scss";

const NoFavorites = () => {
    return (
        <div className={css.wrapper}>
        <h2 className={css.subheader}>Looks like you don`t have any favorite cars yet</h2>
        <NavLink to="/catalog" className={css.link}>Choose your car</NavLink>
        </div>
    )
}

export default NoFavorites;