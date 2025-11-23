import { useMatch, useOutletContext } from "react-router-dom";
import type { FilmContext } from "../../types";

const MoviePage = () => {
    const {movies} : FilmContext = useOutletContext();
    const match = useMatch("/movie/:id");
    const idMovie = Number(match?.params.id);
    const film = movies.find((movie) => movie.id === idMovie);
    if (!film) {
        return(
            <p>Movie not found</p>
        )
    }else return(
        <div>
                <h3>
                    <strong>{film.title}</strong>
                </h3>
                <h5>
                    Directeur :  {film.director}
                </h5>
                <h5>
                    {film.dureeMinute} minutes
                </h5>
                <h6>
                    {film.linkImage}
                </h6>
                <h6>
                    Description : {film.description}
                </h6>
                <h6>
                    {film.budget} million €
                </h6>
                </div>
    )
}

export default MoviePage;