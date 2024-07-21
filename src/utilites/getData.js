import axios from 'axios';

const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjM2ZjgzYmQ2YzdjZDlkODhhMDVjZjFlYTA4MzA4ZSIsIm5iZiI6MTcyMDYyODc3OS42MjgwNCwic3ViIjoiNjY4ZDY0NDc0NzA4Njc5Y2NmMzI5ZWJiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.87JPCXEg1E0DGdTDPu-8RGK9XQJaLi2NIlSkBuf9z14',
  },
};
export async function getMovies() {
  const response = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    options
  );
  return response.data.results;
}

export async function getMoviesById(movie_id) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}`,
    options
  );
  return response.data;
}

export async function getMovieReviews(movie_id) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}/reviews`,
    options
  );
  return response.data.results;
}

export async function getMovieCredits(movie_id) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}/credits`,
    options
  );
  return response.data.cast;
}

export async function getMovieBySearch(query) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie`,
    {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjM2ZjgzYmQ2YzdjZDlkODhhMDVjZjFlYTA4MzA4ZSIsIm5iZiI6MTcyMDYyODc3OS42MjgwNCwic3ViIjoiNjY4ZDY0NDc0NzA4Njc5Y2NmMzI5ZWJiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.87JPCXEg1E0DGdTDPu-8RGK9XQJaLi2NIlSkBuf9z14',
      },
      params: {
        query
      },
    }
  );
  return response.data.results;
}
