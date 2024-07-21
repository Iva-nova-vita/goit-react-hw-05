import { useParams } from 'react-router-dom';
import { NavLink, Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { getMoviesById } from '../../utilites/getData';
import MovieInfo from '../../components/MovieInfo/MovieInfo';
import { Vortex } from 'react-loader-spinner';

import css from './MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
  const { moviesId } = useParams();

  const [movieDetails, setMovieDetails] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/");

  useEffect(() => {
    setIsLoading(true);
    async function getMovieDetails() {
      try {
        const result = await getMoviesById(moviesId);
        console.log(result);
        setMovieDetails(result);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getMovieDetails();
  }, [moviesId]);
  return (
    <div>
      <Link to={backLinkRef.current} className='link'>Go back</Link>
      {movieDetails && <MovieInfo info={movieDetails} />}
      {isError && <div>Something went wrong...</div>}
      {isLoading && (
        <Vortex
          visible={true}
          height='80'
          width='80'
          ariaLabel='vortex-loading'
          wrapperStyle={{}}
          wrapperClass='vortex-wrapper'
          colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
        />
      )}

      {movieDetails && (
        <>
          <ul className={css.tabs}>
            <li>
              <NavLink to='cast' className={({ isActive }) => isActive ? css.isActive : ''}>Cast</NavLink>
            </li>
            <li>
              <NavLink to='reviews' className={({ isActive }) => isActive ? css.isActive : ''}>Go through the reviews</NavLink>
            </li>
          </ul>
          <Outlet />
        </>
      )}
    </div>
  );
}
