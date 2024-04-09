import { useSearch } from "../../hooks";

export const Movies = () => {
  const {
    searchTerm,
    setSearchTerm,
    filteredItems: filteredMovies,
  } = useSearch([
    {
      title: "Star Wars",
      release_date: "1977-05-25",
      director: "George Lucas",
      opening_crawl: "It is a period of civil war.",
    },
  ]);

  return (
    <section>
      <div>
        <label htmlFor="search">Search</label>
        <input
          type="search"
          id="search"
          value={searchTerm}
          data-testid="search-input-field"
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
      <ul data-testid="movies-list">
        {(filteredMovies || []).map((movie, index) => (
          <li key={index}>
            <article>
              <h2>{movie.title}</h2>
              <p>Release on: {movie.release_date}</p>
              <p>Directed by: {movie.director}</p>
              <p>{movie.opening_crawl}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};
