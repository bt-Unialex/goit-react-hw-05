import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ films }) {
  const location = useLocation();
  return (
    !!films.length && (
      <ul className={css.wrapper}>
        {films.map((film) => {
          const link = `/movies/${film.id}`;
          return (
            <li className={css.item} key={film.id}>
              <Link className={css.link} to={link} state={location}>
                {film.title}
              </Link>
            </li>
          );
        })}
      </ul>
    )
  );
}
