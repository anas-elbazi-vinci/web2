import { useNavigate } from "react-router-dom"

const NavBar = () =>{
    const navigate = useNavigate();

    return(
        <nav>
            <button onClick={() => navigate("/")}>
                HomePage
            </button>
            <button onClick={() => navigate("cinema")}>
                CinemaPage
            </button>
            <button onClick={() => navigate("movieList")}>
                MovieListPage
            </button>   
            <button onClick={() => navigate("addMovie")}> 
                AddMovie
            </button>
        </nav>
    )
}

export default NavBar;