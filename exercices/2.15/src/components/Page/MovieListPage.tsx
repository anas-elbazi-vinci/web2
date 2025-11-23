
import FilmList from "../filmList";
import type { FilmContext } from "../../types";
import { useOutletContext } from "react-router-dom";


function MovieListPage (){
    const {movies} : FilmContext = useOutletContext();    

    return(
        <div>
            <FilmList films={movies}/>
        </div>
    )
}

export default MovieListPage;