import { Outlet } from "react-router-dom"
import NavBar from "./navBar"
import type { Film, FilmContext } from "../types";
import { useState } from "react";

const mesFilmsPref : Film[] = [
  {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    dureeMinute: 148,
    linkImage: "https://m.media-amazon.com/images/I/51nbVEuw1HL._AC_.jpg",
    description: "Un voleur s'introduit dans les rêves pour implanter une idée dans l'esprit d'un individu.",
    budget: 160_000_000,
  },
  {
    id: 2,
    title: "Fight Club",
    director: "David Fincher",
    dureeMinute: 139,
    linkImage: "https://m.media-amazon.com/images/I/71wO8j8OBwL._AC_SL1000_.jpg",
    description: "Un employé de bureau rencontre un vendeur de savon charismatique, et ensemble ils créent un club de combat.",
    budget: 63_000_000,
  },
  {
    id: 3,
    title: "Interstellar",
    director: "Christopher Nolan",
    dureeMinute: 169,
    linkImage: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SL1500_.jpg",
    description: "Un groupe d'astronautes voyage à travers un trou de ver à la recherche d'une nouvelle planète habitable.",
    budget: 165_000_000,
  },
  {
    id: 4,
    title: "The Dark Knight",
    director: "Christopher Nolan",
    dureeMinute: 152,
    linkImage: "https://m.media-amazon.com/images/I/51EbJjlLgFL._AC_.jpg",
    description: "Batman affronte le Joker, un criminel imprévisible qui sème le chaos à Gotham City.",
    budget: 185_000_000,
  },
  {
    id: 5,
    title: "The Wolf of Wall Street",
    director: "Martin Scorsese",
    dureeMinute: 180,
    linkImage: "https://m.media-amazon.com/images/I/71pVzK0U5kL._AC_SL1024_.jpg",
    description: "L'histoire vraie de Jordan Belfort, un courtier en bourse devenu multimillionnaire grâce à la fraude.",
    budget: 100_000_000,
  },
];

const App = () => {
    const [movies, setMovies] = useState(mesFilmsPref);

    const addMovie = (newMovie: Film) => {
        setMovies([...movies, newMovie]);
    };

    const fullFilmContext : FilmContext = {
      movies,
      setMovies,
      addMovie,
    }

    return(
      <div className="app-container stack">
        <NavBar/>
        <Outlet context={fullFilmContext}/>
      </div>
    )
}

export default App;