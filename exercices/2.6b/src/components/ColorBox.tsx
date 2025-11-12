import { useState } from "react";

const ColorBox = () =>{
    const colors  = ['red' , 'green' , 'yellow' , 'blue' , 'purple'];
    const [index,setIndex] = useState(0);


    return(
        <div style={{backgroundColor: colors[index%colors.length]}}>
            <button onClick={() => setIndex(index+1)}>
                {colors[(index+1)%colors.length]}
            </button>
            <p>{colors[index%colors.length]}</p>
        </div>
        
    )
}

export default ColorBox;