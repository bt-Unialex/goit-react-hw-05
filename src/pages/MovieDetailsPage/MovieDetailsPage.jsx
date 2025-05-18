import { useEffect, useRef, useState } from "react";
import {
  NavLink,
  Link,
  Outlet,
  useParams,
  useLocation,
} from "react-router-dom";
import css from "./MovieDetailsPage.module.css";
import Navigation from "../../components/Navigation/Navigation";
import { getFilms } from "../../loadingAPI";
import clsx from "clsx";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const location = useLocation();
  const bckLink = useRef(location.state);

  const [film, setFilm] = useState(null);

  useEffect(() => {
    async function getMovie() {
      const res = await getFilms("details", movieId);
      setFilm(res);
    }
    getMovie();
  }, [movieId]);

  function activeStles({ isActive }) {
    return clsx(css.link, isActive && css.active);
  }
  return (
    <>
      <Navigation />
      <Link
        className={css.backlink}
        to={bckLink.current ?? "/"}
      >{`<< GO Back`}</Link>
      {film && (
        <>
          <div className={css.wrapper}>
            <div className={css.img}>
              <img
                src={"https://image.tmdb.org/t/p/w342" + film.poster_path}
                alt="poster"
                loading="lazy"
              />
            </div>
            <div className={css.description}>
              <h2 className={css.title}>{film.title}</h2>
              <h3 className={css.subtitle}>Overview:</h3>
              <p className={css.text}>{film.overview}</p>
              <h3 className={css.subtitle}>Genres:</h3>
              <p className={css.text}>
                {film.genres.map((g) => g.name).join(", ")}
              </p>
              <div className={css.linksblock}>
                <h3 className={css.subtitle}>Additional information:</h3>
                <div className={css.links}>
                  <NavLink className={activeStles} to="cast">
                    Cast
                  </NavLink>
                  <NavLink className={activeStles} to="reviews">
                    Reviews
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className={css.out}>
            <Outlet />
          </div>
        </>
      )}
    </>
  );
}
