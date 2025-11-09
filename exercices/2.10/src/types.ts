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

export type {Film,Movie};