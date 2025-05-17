import { Route, Routes } from "react-router-dom";
// import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import MovieCast from "./components/MovieCast/MovieCast";
import MovieReviews from "./components/MovieReviews/MovieReviews";
import MovieRaiting from "./components/MovieRaiting/MovieRaiting";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<MoviesPage />} />
      <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
        <Route index element={<MovieRaiting />} />
        <Route path="raiting" element={<MovieRaiting />} />
        <Route path="cast" element={<MovieCast />} />
        <Route path="reviews" element={<MovieReviews />} />
      </Route>
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default App;
