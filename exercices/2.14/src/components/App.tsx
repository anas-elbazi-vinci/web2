import { useEffect, useState } from 'react'
import './App.css'
import type { Joke } from '../types';

function App() {
  const [joke, setJoke] = useState<Joke|undefined>(undefined);

  const fetchJoke = () => {
    fetch("https://v2.jokeapi.dev/joke/Any?type=single")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setJoke({
          text: data.joke ?? "No joke found",
          category: data.category ?? "Unknown",
        });
      });
  };
  useEffect (() => {
    fetchJoke();
    const timer = setInterval(fetchJoke,100000);
    return () => clearTimeout(timer);
  } , []);    

  if (!joke)
    return <p>Loading...</p>

  

  return (
    <>
      <div>
        <h3 >{joke.category}</h3>
        <h3 >{joke.text}</h3>
      </div>
    </>
  )
}

export default App
