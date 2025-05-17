import { Link } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ films }) {
  return (
    <ul className={css.wrapper}>
      {films.map((film) => {
        const link = `/movies/${film.id}`;
        return (
          <li className={css.item} key={film.id}>
            <Link className={css.link} to={link}>
              {film.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
