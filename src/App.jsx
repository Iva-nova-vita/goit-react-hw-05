import css from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/HomePage/HomePage';
import Movies from './pages/MoviesPage/MoviesPage';
import NotFound from './pages/NotFound/NotFound';
import Cast from './components/Cast/Cast';
import Reviews from './components/Reviews/Reviews';
import MovieDetails from './pages/MovieDetails/MovieDetails';

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <div className={css.container}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/movies/:moviesId' element={<MovieDetails />}>
            <Route path='cast' element={<Cast />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
