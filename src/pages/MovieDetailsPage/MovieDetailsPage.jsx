import { useParams } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from "react";
import { getMoviesById } from '../../utilites/getMovies';
import MovieInfo from '../../components/MovieInfo/MovieInfo';

export default function MovieDetailsPage() {
  const {moviesId} = useParams();
  console.log(moviesId)

  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    async function getMovieDetails() {
      try {
        const result = await getMoviesById(moviesId);
        console.log(result);
        setMovieDetails(result);
      } catch (error) {
        console.log(error)
      } 
    }

    getMovieDetails();
  }, [moviesId]);
  return (
    <div>
      {movieDetails && <MovieInfo info={movieDetails}/>}

      <ul>
        <li>
          <Link to="cast">cast</Link>
        </li>
        <li>
          <Link to="reviews">Go through the reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
