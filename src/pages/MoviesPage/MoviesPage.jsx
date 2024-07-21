import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Search from '../../components/Search/Search';
import MovieList from '../../components/MovieList/MovieList';
import { getMovieBySearch } from '../../utilites/getData';

export default function MoviesPage() {
  const [moviesBySearch, setMoviesBySearch] = useState([]);
  const [noData, setNoData] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function getMovies() {
      try {
        setNoData(false);
        const result = await getMovieBySearch(query);
        setMoviesBySearch(result);
        result.length > 0 ? setNoData(false) : setNoData(true);
      } catch (error) {
        console.log(error);
      }
    }

    getMovies();
  }, [query]);

  const changeQuery = (newQuery) => {
    searchParams.set('query', newQuery);
    setSearchParams(searchParams);
  };
  return (
    <div>
      <Search changeQuery={changeQuery}></Search>
      {moviesBySearch && <MovieList list={moviesBySearch}></MovieList>}
      {noData && <p>Nothing was found</p>}
    </div>
  );
}
