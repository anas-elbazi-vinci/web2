interface Film{
    id : number;
    title : string;
    director : string;
    dureeMinute : number;
    linkImage?  : string;
    description? : string;
    budget? : number;
}

type NewFilm = Omit<Film,"id">;

interface FilmContext{
  movies : Film[];
  setMovies : (movies: Film[]) => void;
  addFilm : (newMovie : Film) => void;
}

export type {Film,FilmContext,NewFilm};