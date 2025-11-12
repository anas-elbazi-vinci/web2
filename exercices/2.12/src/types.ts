interface Film{
    title : string;
    director : string;
    dureeMinute : number;
    linkImage?  : string;
    description? : string;
    budget? : number;
}

interface Movie {
  title: string;
  director: string;
  description : string;
}

interface FilmContext{
  movies : Film[];
  setMovies : (movies: Film[]) => void;
  addMovie : (newMovie : Film) => void;
}

export type {Film,Movie,FilmContext};