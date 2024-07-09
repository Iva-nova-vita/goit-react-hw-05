import css from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/HomePage/HomePage';
import Movies from './pages/MoviesPage/MoviesPage';

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <div className={css.container}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
