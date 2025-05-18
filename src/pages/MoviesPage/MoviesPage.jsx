import { FiSearch } from "react-icons/fi";
import Navigation from "../../components/Navigation/Navigation";
import css from "./MoviesPage.module.css";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFilms } from "../../loadingAPI";
import MovieList from "../../components/MovieList/MovieList";

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filmsCollection, setFilmsCollection] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const query = e.target.query.value.trim();
    if (query === "") return;
    const updateSearchParams = new URLSearchParams(searchParams);
    updateSearchParams.set("query", query);
    setSearchParams(updateSearchParams);
  }

  useEffect(() => {
    async function searchMovies() {
      const query = searchParams.get("query");
      if (!query) return;
      console.log("SEARCH query:", query);
      const films = await getFilms("search", query);
      console.log("search:", films);

      setFilmsCollection(films);
    }
    searchMovies();
  }, [searchParams]);

  return (
    <>
      <Navigation />
      <h2 className={css.title}>Search movies</h2>
      <form className={css.form} onSubmit={handleSubmit}>
        <button className={css.button} type="submit">
          <FiSearch size="16px" />
        </button>
        <input className={css.input} name="query" required autoFocus />
      </form>
      {!!filmsCollection.length && <MovieList films={filmsCollection} />}
    </>
  );
}
