import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFilms } from "../../loadingAPI";
import css from "./MovieReviews.module.css";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getReviews() {
      const res = await getFilms("reviews", movieId);
      setReviews(res);
    }
    getReviews();
  }, [movieId]);

  return reviews.length ? (
    <ul className={css.wrapper}>
      {reviews.map((reviews) => {
        return (
          <li key={reviews.id}>
            <h3 className={css.title}>
              {reviews.author}
              <span className={css.date}>
                {" "}
                {reviews.created_at.split("T")[0]}
              </span>
            </h3>
            <p className={css.text}>{reviews.content}</p>
          </li>
        );
      })}
    </ul>
  ) : (
    <p className={css.title}>No reviews yet</p>
  );
}
