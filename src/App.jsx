import { lazy, Suspense } from 'react';
import css from './App.module.css';
import { Routes, Route } from 'react-router-dom';

const Navigation = lazy(() => import('./components/Navigation/Navigation'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const MovieCast = lazy(() => import('./components/MovieCast/MovieCast'));
const MovieReviews = lazy(() =>
  import('./components/MovieReviews/MovieReviews')
);
const MovieDetailsPage = lazy(() =>
  import('./pages/MovieDetailsPage/MovieDetailsPage')
);

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <div className={css.container}>
        <Suspense fallback={<div>Loading page code...</div>}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/movies' element={<MoviesPage />} />
            <Route path='/movies/:moviesId' element={<MovieDetailsPage />}>
              <Route path='cast' element={<MovieCast />} />
              <Route path='reviews' element={<MovieReviews />} />
            </Route>
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
