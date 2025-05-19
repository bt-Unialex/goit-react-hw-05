import fallback from "../../assets/shiluet.png";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFilms } from "../../loadingAPI";
import css from "./MovieCast.module.css";

export default function MovieCast() {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    async function getActors() {
      const res = await getFilms("cast", movieId);
      setActors(res);
    }
    getActors();
  }, [movieId]);

  const filteredActors = actors.filter(
    (actor) => actor.known_for_department === "Acting" && actor.popularity > 0.8
  );
  return filteredActors.length ? (
    <ul className={css.wrapper}>
      {filteredActors.map((actor) => {
        return (
          <li className={css.item} key={actor.id}>
            <h3 className={css.title}>{actor.character}</h3>
            <img
              className={css.img}
              src={
                (actor.profile_path &&
                  "https://image.tmdb.org/t/p/w185" + actor.profile_path) ||
                fallback
              }
              alt={actor.name}
              loading="lazy"
            />
            <p className={css.text}>{actor.name}</p>
          </li>
        );
      })}
    </ul>
  ) : (
    <p className={css.fallback}>No one good enough to show</p>
  );
}
//  "w45", "w185", "h632", "original";
