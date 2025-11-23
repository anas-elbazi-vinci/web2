import type { Film } from "../types"

interface FilmListProps{
    films : Film[];
}

const FilmList = ({films} : FilmListProps) =>{
    return(
        <div className="movie-grid">
            {films.map((film) => (
                <div key={film.id} className="movie-card">
                    <img className="movie-poster" src={film.linkImage} alt={film.title}/>
                    <h3 className="movie-title">{film.title}</h3>
                    <div className="movie-meta">{film.director} • {film.dureeMinute} min</div>
                    <p className="movie-meta">Budget: {film.budget?.toLocaleString() ?? 'N/A'} €</p>
                    <p>{film.description}</p>
                </div>
            ))}
        </div>
    );
}

export default FilmList;