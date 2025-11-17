
import type { Film} from "../types";
import MovieItem from "./movieItem";

interface CinemaProps {
  name: string;
  movies : Film[];
}

const Cinema = (props: CinemaProps) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <ul>
        <li>
          {props.movies.map((movie) => (
          <MovieItem id={movie.id} title={movie.title} director={movie.director} dureeMinute={movie.dureeMinute}/>
        ))}
        </li>
      </ul>
    </div>
  );
};

export default Cinema;