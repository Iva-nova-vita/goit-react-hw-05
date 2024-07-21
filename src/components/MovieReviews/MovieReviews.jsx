import { getMovieReviews } from '../../utilites/getMovies';
import css from './MovieReviews.module.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function MovieReviews() {
  const { moviesId } = useParams();
  console.log(moviesId);
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    async function getMovieDetails() {
      try {
        const result = await getMovieReviews(moviesId);
        console.log(result);
        setMovieReviews(result);
      } catch (error) {
        console.log(error);
      }
    }

    getMovieDetails();
  }, [moviesId]);
  return (
    movieReviews && (
      <div>
        <ul className={css.reviews}>
          {movieReviews.map((review) => (
            <li key={review.id}>
              <div className={css.author}>{review.author}</div>
              <div className={css.content}>{review.content}</div>
            </li>
          ))}
        </ul>
      </div>
    )
  );
}
