import css from './Search.module.css';

export default function Search({ changeQuery }) {
  function onSubmit(e) {
    e.preventDefault();
    changeQuery(e.target.elements.search.value.trim());
  }
  return (
    <form className={css.searchForm} onSubmit={onSubmit}>
      <input name='search'></input>
      <button type='submit'>Search</button>
    </form>
  );
}
