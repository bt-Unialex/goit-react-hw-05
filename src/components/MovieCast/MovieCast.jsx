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
  return (
    !!actors.length && (
      <ul className={css.wrapper}>
        {actors.map((actor) => {
          if (actor.known_for_department !== "Acting" || actor.popularity < 1) {
            return;
          }
          return (
            <li className={css.item} key={actor.id}>
              <h3 className={css.title}>{actor.character}</h3>
              <img
                className={css.img}
                src={"https://image.tmdb.org/t/p/w185" + actor.profile_path}
                alt={actor.name}
                loading="lazy"
              />
              <p className={css.text}>{actor.name}</p>
            </li>
          );
        })}
      </ul>
    )
  );
}
//  "w45", "w185", "h632", "original";
