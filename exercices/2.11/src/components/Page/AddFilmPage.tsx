import { useOutletContext } from "react-router-dom"
import type { FilmContext } from "../../types"
import AddFilm from "../addFilm"

const AddFilmPage = () => {
    const {addMovie} : FilmContext = useOutletContext(); 

    return (
        <div>
            <AddFilm  addedFilm={addMovie}/>
        </div>
    )
}

export default AddFilmPage;