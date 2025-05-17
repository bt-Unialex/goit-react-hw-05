import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

export default function Header() {
  function activeStles({ isActive }) {
    return clsx(css.link, isActive && css.active);
  }
  return (
    <header className={css.wrapper}>
      <nav className={css.nav}>
        <NavLink className={activeStles} to="/">
          Home
        </NavLink>
        <NavLink className={activeStles} to="/movies">
          Movies
        </NavLink>
      </nav>
    </header>
  );
}
