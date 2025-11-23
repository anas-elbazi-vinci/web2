import { useNavigate, useOutletContext } from "react-router-dom";
import type { FilmContext } from "../../types";
import type { SyntheticEvent } from "react";


const HomePage = () => {
  const navigate = useNavigate();
  const {movies} : FilmContext = useOutletContext();
  const handleClick =(id : number) => (e: SyntheticEvent) =>{
    e.preventDefault();
    navigate("/movie/"+id);
  }

  return (
    <div>
      <h1>Bienvenue sur iMovies ! 🎬</h1>
      <p>
        iMovies est une petite application pour découvrir et gérer vos films préférés.
        Vous pouvez naviguer entre les pages pour voir la liste des films, ajouter de nouveaux films
        et consulter des informations sur chaque film.
      </p>
      <p>
        Utilisez la barre de navigation ci-dessus pour explorer l'application.
      </p>
      <div>
        {
          movies.map((movie) => (
            <div>
              <h2 onClick={handleClick(movie.id)}>
                {movie.title}
              </h2>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export { HomePage };
