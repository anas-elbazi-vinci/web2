
import type { Film} from "../types";
import MovieItem from "./movieItem";

interface CinemaProps {
  name: string;
  movies : Film[];
}

const Cinema = (props: CinemaProps) => {
  return (
    <section className="cinema-section panel">
      <header className="cinema-header row">
        <h2 className="cinema-title">{props.name}</h2>
        <span className="muted">{props.movies.length} films</span>
      </header>
      <div className="cinema-table-wrapper">
        <table className="cinema-table">
          <thead>
            <tr>
              <th>Titre</th>
              <th>Réalisateur</th>
              <th>Durée</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {props.movies.map((movie) => (
              <MovieItem key={movie.id} id={movie.id} title={movie.title} director={movie.director} dureeMinute={movie.dureeMinute} description={movie.description} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Cinema;