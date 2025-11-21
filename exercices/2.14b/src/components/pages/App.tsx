import { useState } from 'react'
import RandomDog from '../randomDog'
import './App.css'

function App() {
  const [refresh , setRefresh] = useState(0);

  return (
      <div>
        <button onClick={() => setRefresh(refresh+1)}>
          Rafraichir de nouvelle image
        </button>
      <main className="dog-grid">
          <RandomDog key={refresh+"1"} />
          <RandomDog key={refresh+"2"} />
          <RandomDog key={refresh+"3"} />
      </main>
    </div>
  )
}

export default App
