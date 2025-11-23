import { Outlet } from "react-router-dom"
import NavBar from "./navBar"
import type { Film, FilmContext, NewFilm } from "../types";
import { useEffect, useState } from "react";


const App = () => {
    const [movies, setMovies] = useState<Film[]>([]);

    const fecthFilms = async () => {
      try {
        const response = await fetch("/api/films");
        if (!response.ok) {
          throw new Error(
          `fetch error : ${response.status} : ${response.statusText}`
        );
        }
        const films = await response.json();
        setMovies(films);
      } catch (error) {
        console.error("HomePage::error: ", error);
      }
    }

    useEffect(() => {
      fecthFilms();
    } ,[]);

    const addFilm = async (newFilm : NewFilm) => {
      try {
            const options = {
            method: "POST",
            body: JSON.stringify(newFilm),
            headers: {
              "Content-Type": "application/json",
            },
          };
          const response = await fetch("http://localhost:3000/films",options);
          if (!response.ok) {
              throw new Error(
              `fetch error : ${response.status} : ${response.statusText}`
            );
          }

          const createdFilm = await response.json();
          setMovies([...movies,createdFilm])
      } catch (error) {
        console.error("AddPizzaPage::error: ", error);
      }
    }
    const fullFilmContext : FilmContext = {
      movies,
      setMovies,
      addFilm,
    }

    

    return(
      <div className="app-container stack">
        <NavBar/>
        <Outlet context={fullFilmContext}/>
      </div>
    )
}

export default App;