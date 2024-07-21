import { useEffect, useState } from 'react';

import MovieList from '../../components/MovieList/MovieList';
import { getMovies } from '../../utilites/getData';

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function getTrendingMovies() {
      try {
        const result = await getMovies();
        setTrendingMovies(result);
      } catch (error) {
        console.log(error);
      }
    }

    getTrendingMovies();
  }, []);
  return <MovieList list={trendingMovies}></MovieList>;
}
