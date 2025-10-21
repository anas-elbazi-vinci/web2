import { useState } from "react";
import type { ClickCounterProps } from "../types";

const ClickCounter = ({titre,message10clics,messageWhenOnCount} : ClickCounterProps) =>{
    const [count, setCount] = useState(0);
    const [isOnCount,setIsOnCount] = useState(false);

    return(
        <div>
        <h1>
            {titre}
        </h1>
            
        {isOnCount && <p>{messageWhenOnCount}</p>}
        <button onClick={() => setCount((count) => count + 1)}
            onMouseEnter={() => setIsOnCount(true)}
            onMouseLeave={() => setIsOnCount(false)}>
          count is {count}
        </button>
        {count >=10 ? <p>{message10clics}</p> : null}
        </div>
    );
}

export default ClickCounter;