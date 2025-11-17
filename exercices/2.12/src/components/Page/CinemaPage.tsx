import type { Film } from "../../types";
import Cinema from "../cinema";
import Footer from "../footer";
import Header from "../header";
import PageTitle from "../pageTitle";


const CinemaPage = () => {
    const pageTitle = "Informations sur les films dans les cinémas";

    const cinema1Name = "UGC De Brouckère";

    const moviesCinema1: Film[] = [
    {
      id: 1,
      title: "HAIKYU-THE DUMPSTER BATTLE",
      director: "Susumu Mitsunaka",
      dureeMinute: 120,
      description:
        "A high-energy sports anime movie focusing on the intense volleyball rivalry between Karasuno High and their fierce competitors.",
    },
    {
      id: 2,
      title: "GOODBYE JULIA",
      director: "Mohamed Kordofani",
      dureeMinute: 110,
      description:
        "A poignant drama exploring themes of love, loss, and complex human relationships.",
    },
    {
      id: 3,
      title: "INCEPTION",
      director: "Christopher Nolan",
      dureeMinute: 148,
      description:
        "A mind-bending sci-fi thriller where a thief enters people's dreams to implant an idea.",
    },
    {
      id: 4,
      title: "PARASITE",
      director: "Bong Joon-ho",
      dureeMinute: 132,
      description:
        "Oscar-winning thriller examining class disparities through two families.",
    },
  ];

  const cinema2Name = "UGC Toison d'Or";

  const moviesCinema2: Film[] = [
    {
      id: 5,
      title: "THE WATCHERS",
      director: "Ishana Night Shyamalan",
      dureeMinute: 100,
      description:
        "A suspenseful thriller where a group of people discover secrets about their observers.",
    },
    {
      id: 6,
      title: "BAD BOYS: RIDE OR DIE",
      director: "Adil El Arbi, Bilall Fallah",
      dureeMinute: 115,
      description:
        "The latest Bad Boys movie, packed with action and explosive investigations.",
    },
    {
      id: 7,
      title: "TENET",
      director: "Christopher Nolan",
      dureeMinute: 150,
      description:
        "A sci-fi film involving temporal inversion to prevent World War III.",
    },
    {
      id: 8,
      title: "THE IRISHMAN",
      director: "Martin Scorsese",
      dureeMinute: 209,
      description:
        "An epic crime drama following Frank Sheeran and his ties to the Bufalino crime family.",
    },
  ];



  
  return (
    <div>
      <Header urlLogo="https://media.istockphoto.com/id/1429764305/fr/vectoriel/bande-de-film-vierge-isol%C3%A9e-sur-le-fond-blanc.jpg?s=1024x1024&w=is&k=20&c=is5Y6cun0NC8PxJd51p4YnUoLUpyb758Bdigh4Bqn48=">
        <h1>Tous sur les films</h1>
      </Header>
      <PageTitle title={pageTitle} />

      <Cinema name={cinema1Name} movies= {moviesCinema1} />

      <Cinema name={cinema2Name} movies={moviesCinema2} />
      <Footer urlLogo="https://media.istockphoto.com/id/1202770152/fr/photo/bobine-de-film-disolement-sur-le-fond-jaune-lumineux-dans-les-couleurs-pastel.jpg?s=1024x1024&w=is&k=20&c=2yKBrC8oyimPdW-5IxFWN_zxFPVK3KWYL9OE2gVmVX4=">
        <p>© 2021 UGC Cinémas</p>
      </Footer>
    </div>
  );
};

export default CinemaPage;