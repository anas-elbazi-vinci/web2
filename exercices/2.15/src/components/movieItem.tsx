import { useState } from "react";
import type { Film } from "../types";

const MovieItem = (props: Film) => {
    const [expanded, setExpanded] = useState(false);
    return (
        <tr className={expanded ? "row-expanded" : undefined}>
            <td className="cell-title">
                <button
                    className="cell-toggle"
                    type="button"
                    onClick={() => setExpanded((e) => !e)}
                    aria-expanded={expanded}
                    aria-label={expanded ? `Réduire la description de ${props.title}` : `Afficher la description de ${props.title}`}
                >
                    {expanded ? "−" : "+"}
                </button>
                {props.title}
            </td>
            <td>{props.director}</td>
            <td>{props.dureeMinute} min</td>
            <td className="cell-description">
                {expanded ? props.description ?? "(Pas de description)" : <span className="muted">Cliquer pour voir…</span>}
            </td>
        </tr>
    );
};

export default MovieItem;