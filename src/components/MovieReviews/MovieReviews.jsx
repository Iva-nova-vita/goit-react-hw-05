import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from '../../utilites/getData';

import css from './MovieReviews.module.css';

export default function MovieReviews() {
  const { moviesId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  const [noData, setNoData] = useState(false);

  useEffect(() => {
    async function getMovieDetails() {
      try {
        setNoData(false);
        const result = await getMovieReviews(moviesId);
        setMovieReviews(result);
        result.length > 0 ? setNoData(false) : setNoData(true);
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
        {noData && <p>There are no reviews yet</p>}
      </div>
    )
  );
}
