import { Outlet } from "react-router-dom";
import Logo from "../Header/Logo";
import Navigation from "../Header/Navigation";
import css from "./Layout.module.scss";

const Layout = () => {
  return (
    <>
      <header className="">
        <div className={css.wrapper}>
          <Logo />
          <Navigation className={css.mainNav}/>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
