import Navigation from "../../components/Navigation/Navigation";
import css from "./MoviesPage.module.css";

export default function MoviesPage({ props }) {
  return (
    <>
      <Navigation />
      <div className={css.wrapper}>MoviesPage</div>
    </>
  );
}
