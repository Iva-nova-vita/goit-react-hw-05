import { Link, Outlet } from 'react-router-dom';

export default function MovieDetails() {
  return (
    <div>
      MovieDetails

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
