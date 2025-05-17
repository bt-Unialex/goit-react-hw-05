import { useEffect, useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import css from "./HomePage.module.css";
import { getFilms } from "../../loadingAPI";
import MovieList from "../../components/MovieList/MovieList";

export default function HomePage() {
  const [filmsCollection, setFilmsCollection] = useState(null);

  useEffect(() => {
    async function getTrends() {
      const films = await getFilms();
      // console.log(" getTrends:", films);

      setFilmsCollection(films);
    }
    getTrends();
  }, []);

  return (
    <>
      <Navigation />
      <h2 className={css.title}>Trending today:</h2>
      {filmsCollection && <MovieList films={filmsCollection} />}
    </>
  );
}
