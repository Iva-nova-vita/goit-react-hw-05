import { Link } from "react-router-dom";

export default function MovieList({list}) {
  return (
    <ul>
      {list.map(({ id, title }) => (
        <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
            </li>
      ))}
    </ul>
  );
}
