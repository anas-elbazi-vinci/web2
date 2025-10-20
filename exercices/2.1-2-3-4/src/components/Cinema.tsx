import { Movie } from "../type";

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
          {props.movies.map((movie,index) => (
          <tr key={index}>
            <td>{movie.director}</td>
            <td>{movie.title}</td>
          </tr>
        ))}
        </li>
      </ul>
    </div>
  );
};

export default Cinema;