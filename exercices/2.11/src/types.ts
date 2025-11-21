interface Film{
    title : string;
    director : string;
    dureeMinute : number;
    linkImage?  : string;
    description? : string;
    budget? : number;
}

interface FilmContext{
  movies : Film[];
  setMovies : (movies: Film[]) => void;
  addMovie : (newMovie : Film) => void;
}

export type {Film,FilmContext};