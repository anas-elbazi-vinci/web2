import { useEffect, useState } from "react";
import type { ImgDog } from "../types";

const RandomDog = () => {
    const [imgDog,setImgDog] = useState<ImgDog|undefined>(undefined);
    const fetchImgDogs = async () => {
        try {
            const response = await fetch("https://dog.ceo/api/breeds/image/random");
            if (!response.ok) {
                throw new Error(
                    'fetch Error'
                );
            }
            const imgDog = await response.json();
       setImgDog({
        link : imgDog.message ?? "No found"
       });
        } catch (err) {
            console.error("HomePage::error: ", err);
        } 
      };
    useEffect(() => {
        fetchImgDogs();
    }, []);
    
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