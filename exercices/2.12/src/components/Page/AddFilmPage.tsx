import { useOutletContext } from "react-router-dom";
import type { FilmContext } from "../../types";
import AddFilm from "../addFilm";

const AddFilmPage = () => {
    const { addMovie } : FilmContext = useOutletContext();

    return (
        <div className="add-film-page stack">
            <div className="page-hero">
                <h1 className="hero-title">Ajouter un film</h1>
                <p className="hero-sub">Complétez le formulaire et prévisualisez avant d'enregistrer.</p>
            </div>
            <div className="add-film-layout">
                <AddFilm addedFilm={addMovie} />
                <div className="preview-panel panel">
                    <h2 className="preview-title">Prévisualisation</h2>
                    <p className="muted">Le film apparaîtra comme ceci dans la liste.</p>
                    <div id="live-preview" className="preview-card"></div>
                </div>
            </div>
        </div>
    );
};

export default AddFilmPage;