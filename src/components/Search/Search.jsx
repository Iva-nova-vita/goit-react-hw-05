import css from './Search.module.css';

export default function Search() {
  return (
    <form className={css.searchForm}>
      <input name='search'></input>
      <button type='submit'>Search</button>
    </form>
  );
}
