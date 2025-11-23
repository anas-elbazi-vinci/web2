import { useNavigate } from "react-router-dom"

const NavBar = () =>{
    const navigate = useNavigate();
    return(
        <nav className="navbar">
            <div className="nav-group">
                <button className="nav-btn" onClick={() => navigate("/")}>Accueil</button>
                <button className="nav-btn" onClick={() => navigate("cinema")}>Cinéma</button>
                <button className="nav-btn" onClick={() => navigate("movieList")}>Films</button>
                <button className="nav-btn btn-primary" onClick={() => navigate("addFilm")}>Ajouter</button>
            </div>
        </nav>
    )
}

export default NavBar;