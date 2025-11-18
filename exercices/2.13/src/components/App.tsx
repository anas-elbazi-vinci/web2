import { useEffect, useState } from 'react'
import './App.css'
import type { Joke } from '../types';

function App() {
  const [joke, setJoke] = useState<Joke|undefined>(undefined);

  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Any?type=single")
      .then((response) => {
        return response.json();
      })
      .then((data) => setJoke({
        text : data.joke ?? "No Joke",
        category : data.category ?? "No category"
      }));
      }, []);

      if (!joke)
        return <p>Loading...</p>

  return (
    <>
      <div>
        <h3>{joke.category}</h3>
        <h3>{joke.text}</h3>
      </div>
    </>
  )
}

export default App
