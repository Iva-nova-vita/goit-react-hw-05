import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCredits } from '../../utilites/getData';

import css from './MovieCast.module.css';

export default function MovieCast() {
  const { moviesId } = useParams();
  const [movieCredits, setMovieCredits] = useState([]);
  const [noData, setNoData] = useState(false);
  const defaultImg =
    'https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster';

  useEffect(() => {
    async function getMovieDetails() {
      try {
        setNoData(false);
        const result = await getMovieCredits(moviesId);
        setMovieCredits(result);
        result.length > 0 ? setNoData(false) : setNoData(true);
      } catch (error) {
        console.log(error);
      }
    }

    getMovieDetails();
  }, [moviesId]);
  return (
    movieCredits && (
      <div>
        <ul className={css.cast}>
          {movieCredits.map((item) => (
            <li key={item.id}>
              <img
                src={
                  item.profile_path
                    ? 'https://image.tmdb.org/t/p/w500' + item.profile_path
                    : defaultImg
                }
                width={250}
                alt='poster'
              />
              <div className={css.name}>{item.name}</div>
              <div className={css.name}>Character: {item.character}</div>
            </li>
          ))}
        </ul>
        {noData && <p>No data</p>}
      </div>
    )
  );
}
