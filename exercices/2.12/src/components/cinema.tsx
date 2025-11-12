
import type { Movie } from "../types";
import MovieItem from "./movieItem";

interface CinemaProps {
  name: string;
  movies : Movie[];
}

const Cinema = (props: CinemaProps) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <ul>
        <li>
          {props.movies.map((movie) => (
          <MovieItem title={movie.title} director={movie.director} description={movie.description}/>
        ))}
        </li>
      </ul>
    </div>
  );
};

export default Cinema;