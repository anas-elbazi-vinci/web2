import { useEffect, useState } from 'react'
import './App.css'
import type { Joke } from '../types';

function App() {
  const [joke , setJoke] = useState<Joke[]>([]);

  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Any")
      .then((response) => {
        if (!response.ok)
          throw new Error(
            `fetch error : ${response.status} : ${response.statusText}`
          );
        return response.json();
      })
      .then((joke) => setJoke(joke))
      .catch((err) => {
        console.error("HomePage::error: ", err);
      });
  }, []);

  return (
    <>
      <div>
          
      </div>
    </>
  )
}

export default App
