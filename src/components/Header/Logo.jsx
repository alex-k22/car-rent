// import { ReactComponent as SiteLogo } from "../../assets/car-rent-icon.svg";
// import { ReactComponent as SiteLogo } from "../../images/car-rent-icon.svg"
import css from "./Logo.module.scss";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className={css.link}>
      {/* <SiteLogo className={css.logoImg} /> */}
      <p className={css.logoText}>Rent a car</p>
    </Link>
    
  );
};

export default Logo;
