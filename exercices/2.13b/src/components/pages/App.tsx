import { useState } from 'react'
import RandomDog from '../randomDog'
import './App.css'

function App() {
  const [refresh , setRefresh] = useState(0);

  return (
    <>
      <div>
        <button onClick={() => setRefresh(refresh+1)}>
          Rafraichir de nouvelle image
        </button>
      </div>
      <div>
          <RandomDog key={refresh+"1"}></RandomDog>
          <RandomDog key={refresh+"2"}></RandomDog>
          <RandomDog key={refresh+"3"}></RandomDog>
      </div>
    </>
  )
}

export default App
