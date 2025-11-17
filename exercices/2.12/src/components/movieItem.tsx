import { useState } from "react";
import type { Film} from "../types";


const MovieItem = (props : Film) => {
    const [isClicked , setIsClicked] = useState(false);

    return (
        <tr>
            <td onClick={() => setIsClicked(true)}>{props.title}</td>
            <td>{props.director}</td>
            {isClicked && <td onClick={() => setIsClicked(false)}>{props.description}</td>}
        </tr>
    )
}

export default MovieItem;