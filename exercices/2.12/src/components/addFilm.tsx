import { useEffect, useState, type SyntheticEvent } from "react";
import type { Film, FilmContext } from "../types";
import { useNavigate, useOutletContext } from "react-router-dom";

interface addFilmProps{
    addedFilm : (film : Film) => void;
}

const AddFilm = ({addedFilm} : addFilmProps) =>{
    const {movies}  : FilmContext= useOutletContext();
    const id = movies.length+1;
    const navigate = useNavigate();
    const [title , setTitle] = useState("");
    const [director , setDirector] = useState("");
    const [dureeMinute , setDureeMinute] = useState<number | ''>('');
    const [linkImage,setLinkImage] = useState("");
    const [description,setDescription] = useState("");
    const [budget,setBudget] = useState<number | ''>('');
    const durationHours = dureeMinute && dureeMinute > 0 ? `${Math.floor(dureeMinute/60)}h ${dureeMinute%60}m` : '—';
    const budgetFmt = budget && budget > 0 ? `${budget.toLocaleString()} €` : '—';
    const handleSubmit = (e :SyntheticEvent) =>{
        e.preventDefault();
                addedFilm({id,title,director,dureeMinute: typeof dureeMinute === 'number' ? dureeMinute : 0, linkImage,description,budget: typeof budget === 'number' ? budget : 0});
        setTitle("");
        setDirector("");
                setDureeMinute('');
        setLinkImage("");
        setDescription("");
                setBudget('');
        navigate("/movieList");
    }

        // live preview mount/update
        useEffect(() => {
            const container = document.getElementById('live-preview');
            if(!container) return;
            const html = `
                <div class='movie-card'>
                    ${linkImage ? `<img class='movie-poster' src='${linkImage}' alt='${title || 'Poster'}'/>` : `<div class='movie-poster'></div>`}
                    <h3 class='movie-title'>${title || 'Titre…'}</h3>
                    <div class='movie-meta'>${director || 'Réalisateur…'}${dureeMinute ? ` • ${dureeMinute} min` : ''}</div>
                    <p class='movie-meta'>Durée formatée: ${durationHours}</p>
                    <p class='movie-meta'>Budget: ${budgetFmt}</p>
                    <p>${description || '<span class="muted">Aucune description</span>'}</p>
                </div>`;
            container.innerHTML = html;
        }, [title,director,dureeMinute,linkImage,description,budget,durationHours,budgetFmt]);

    return(
                <form onSubmit={handleSubmit} className="film-form form-grid" aria-labelledby="add-film-title">
                    <h2 id="add-film-title" className="form-title">Nouveau film</h2>
                    <div className="field">
                        <label htmlFor="title">Titre</label>
                        <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} required placeholder="Ex: Inception"/>
                    </div>
                    <div className="field">
                        <label htmlFor="director">Réalisateur</label>
                        <input id="director" type="text"  value={director} onChange={(e) => setDirector(e.target.value)} required placeholder="Ex: Nolan"/>
                    </div>
                    <div className="field">
                        <label htmlFor="duree">Durée (minutes)</label>
                        <input
                            id="duree"
                            type="number"
                            value={dureeMinute}
                            onChange={(e) => setDureeMinute(e.target.value === '' ? '' : parseInt(e.target.value))}
                            min={0}
                            required
                            placeholder="148"
                        />
                        <small className="muted">Format: {durationHours}</small>
                    </div>
                    <div className="field">
                        <label htmlFor="image">URL de l'image</label>
                        <input
                            id="image"
                            type="text"
                            value={linkImage}
                            onChange={(e) => setLinkImage(e.target.value)}
                            placeholder="https://...jpg"
                        />
                    </div>
                    <div className="field span-2">
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Résumé bref du film"
                            rows={4}
                        />
                        <small className="muted">{description.length} caractères</small>
                    </div>
                    <div className="field">
                        <label htmlFor="budget">Budget (€)</label>
                        <input
                            id="budget"
                            type="number"
                            value={budget}
                            onChange={(e) => setBudget(e.target.value === '' ? '' : parseInt(e.target.value))}
                            min={0}
                            placeholder="100000000"
                        />
                        <small className="muted">Format: {budgetFmt}</small>
                    </div>
                    <div className="actions span-2">
                        <button className="btn btn-primary" type="submit" disabled={!title || !director}>Ajouter</button>
                    </div>
                </form>
    );
}

export default AddFilm;