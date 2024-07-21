import MovieList from '../../components/MovieList/MovieList';
import { getMovies } from '../../utilites/getData';

import { useEffect, useState } from 'react';

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function getTrendingMovies() {
      try {
        const result = await getMovies();
        console.log(result);
        setTrendingMovies(result);
      } catch (error) {
        console.log(error);
      }
    }

    getTrendingMovies();
  }, []);
  return <MovieList list={trendingMovies}></MovieList>;
}
