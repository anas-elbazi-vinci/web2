import { useEffect, useState } from "react";
import type { ImgDog } from "../types";

const RandomDog = () => {
    const [imgDog,setImgDog] = useState<ImgDog|undefined>(undefined);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => {
            return response.json();
        })
        .then((data) => setImgDog({
        link : data.message ?? "No Joke"
        
      }));
    } , []);
    
    if (!imgDog) {
        return <p>Loading...</p>
    }
    return (
        <div>
            <img src={imgDog.link} alt="" />
        </div>
    )
}

export default RandomDog;