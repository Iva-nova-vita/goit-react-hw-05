import css from './MovieInfo.module.css';
export default function MovieInfo({ info }) {
  const { poster_path, title, vote_average, overview, genres } = info;
  console.log(info);
  return (
    <div className={css.card}>
      <img
        className={css.cardImg}
        src={'https://image.tmdb.org/t/p/w500' + poster_path}
      ></img>
      <div className={css.cardInfo}>
        <div className={css.cardTitle}>{title}</div>
        <div className={css.cardAverage}><span>Rating:</span> {vote_average}</div>
        <div className={css.bold}>Overview</div>
        <div className={css.cardOverview}>{overview}</div>
        <div className={css.bold}>Genres:</div>
        <ul className={css.cardGenres}>
          {genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
