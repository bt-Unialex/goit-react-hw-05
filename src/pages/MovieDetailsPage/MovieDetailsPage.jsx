import { useEffect, useState } from "react";
import { NavLink, Link, Outlet, useParams } from "react-router-dom";
import css from "./MovieDetailsPage.module.css";
import Navigation from "../../components/Navigation/Navigation";
import { getFilms } from "../../loadingAPI";
import clsx from "clsx";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    async function getMovie() {
      const res = await getFilms("details", movieId);
      console.log("film:", res);
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
      <Link to="/">{`<< GO Back`}</Link>
      {film && (
        <div className={css.wrapper}>
          <div className={css.description}>
            <h2 className={css.title}>{film.title}</h2>
            <h3 className={css.subtitle}>Overview:</h3>
            <p className={css.text}>{film.overview}</p>
            <h3 className={css.subtitle}>Genres:</h3>
            <p className={css.text}>
              {film.genres.map((g) => g.name).join(", ")}
            </p>
            <div className={css.links}>
              <h3 className={css.subtitle}>Additional information:</h3>
              <NavLink className={activeStles} to="raiting">
                Raiting
              </NavLink>
              <NavLink className={activeStles} to="cast">
                Cast
              </NavLink>
              <NavLink className={activeStles} to="reviews">
                Reviews
              </NavLink>
            </div>
            <div className={css.out}>
              <Outlet />
            </div>
          </div>
          <div className={css.img}>
            <img
              src={"https://image.tmdb.org/t/p/w500" + film.poster_path}
              alt="poster"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </>
  );
}
