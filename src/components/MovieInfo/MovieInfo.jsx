import css from './MovieInfo.module.css';

export default function MovieInfo({ info }) {
  const { poster_path, title, vote_average, overview, genres } = info;
  const defaultImg =
    'https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster';

  return (
    <div className={css.card}>
      <img
        src={
          poster_path
            ? 'https://image.tmdb.org/t/p/w500' + poster_path
            : defaultImg
        }
        width={250}
        alt='poster'
      />
      <div className={css.cardInfo}>
        <div className={css.cardTitle}>{title}</div>
        <div className={css.cardAverage}>
          <span>Rating:</span> {vote_average}
        </div>
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
