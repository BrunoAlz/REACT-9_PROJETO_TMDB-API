// Router
import { Link } from "react-router-dom";

// Icons
import { FaStar } from "react-icons/fa";

// Env Variables
const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
  return (
    <div className="movie-card">
      <img src={imageUrl + movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>
        <FaStar /> {movie.vote_average}
      </p>
      <p>
        Total de Votos: <span>{movie.vote_count}</span>
      </p>
      {showLink ? <Link to={`/movie/${movie.id}`}>Detalhes</Link> : null}
    </div>
  );
};

export default MovieCard;
