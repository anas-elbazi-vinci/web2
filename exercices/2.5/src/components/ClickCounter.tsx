import { useState } from "react";
import { ClickCounterProps } from "../types";

const ClickCounter = ({titre,message} : ClickCounterProps) =>{
    const [count, setCount] = useState(0);

    return(
        <div>
        <h1>
            {titre}
        </h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {count >=10 ? <p>{message}</p> : null}
        </div>
    );
}

export default ClickCounter;