// CSS
import "../../assets/MovieGrid.css";

// Hooks
import { useState, useEffect } from "react";

// Router
import { useSearchParams } from "react-router-dom";

// Components
import MovieCard from "../../components/MovieCard";

// Env Variables
const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

useSearchParams;
const Search = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovies(data.results);
  };

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
    getSearchedMovies(searchWithQueryURL);
  }, [query]);

  return (
    <div className="container">
      <h2 className="title">
        Resultados para: <span className="query-text">{query}</span>
      </h2>

      <div className="movies-container">
        {movies
          ? movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
          : null}
      </div>
    </div>
  );
};

export default Search;
