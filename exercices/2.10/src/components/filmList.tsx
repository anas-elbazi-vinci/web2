import type { Film } from "../types"

interface FilmListProps{
    films : Film[];
}

const FilmList = ({films} : FilmListProps) =>{
    

    return(
        <div>
            {films.map((film) => (
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
            ))}
        </div>
    );
}

export default FilmList;