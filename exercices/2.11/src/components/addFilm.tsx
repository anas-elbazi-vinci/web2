import { useState, type SyntheticEvent } from "react";
import type {FilmContext } from "../types"
import { useOutletContext } from "react-router-dom";

const AddFilm = () =>{
    const {addFilm} : FilmContext = useOutletContext();
    const [title , setTitle] = useState("");
    const [director , setDirector] = useState("");
    const [dureeMinute , setDureeMinute] = useState(0);
    const [linkImage,setLinkImage] = useState("");
    const [description,setDescription] = useState("");
    const [budget,setBudget] = useState(0);
    const handleSubmit = (e :SyntheticEvent) =>{
        e.preventDefault();
        addFilm({title,director,dureeMinute,linkImage,description,budget});
        setTitle("");
        setDirector("");
        setDureeMinute(0);
        setLinkImage("");
        setDescription("");
        setBudget(0);
    }

    return(
        <form onSubmit={handleSubmit} >
            <div>
                <label htmlFor="title">Titre</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required/>
            </div>
            <div>
                <label htmlFor="director">Directeur</label>
                <input type="text"  value={director} onChange={(e) => setDirector(e.target.value)} required/>
            </div>
            <div>
                <label>Durée :</label>
                <input
                type="number"
                value={dureeMinute}
                onChange={(e) => setDureeMinute(parseInt(e.target.value))}
                required
                />
            </div>
            <div>
                <label>URL de l'image :</label>
             <input
                type="text"
                value={linkImage}
                onChange={(e) => setLinkImage(e.target.value)}
                />
            </div>
            <div>
                <label>Description :</label>
                <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div>
                <label>Budget :</label>
                <input
                type="number"
                value={budget}
                onChange={(e) => setBudget(parseInt(e.target.value))}
                />
            </div>
            <button type="submit">Ajouter</button>
        </form>
    );
}

export default AddFilm;