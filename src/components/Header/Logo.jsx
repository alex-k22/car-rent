import { ReactComponent as SiteLogo } from "../../assets/car-rent-icon.svg";
import css from "./Logo.module.scss";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className={css.link}>
      <SiteLogo className={css.logoImg} />
    </Link>
    
  );
};

export default Logo;
