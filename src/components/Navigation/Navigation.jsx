import { NavLink } from 'react-router-dom';

import css from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={css.navigation}>
      <ul>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) => isActive && css.isActive}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/movies'
            className={({ isActive }) => isActive && css.isActive}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
