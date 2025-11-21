import { useEffect, useState } from 'react'
import RandomDog from '../randomDog'
import './App.css'

function App() {
  const [refresh , setRefresh] = useState(0);
  useEffect(() => {
    const timer = setInterval(()=> {
      setRefresh(prev => prev+1)
    },5000);
    return () => clearTimeout(timer);
  },[])
  return (
      <div>
      <main className="dog-grid">
          <RandomDog key={refresh+"1"} />
          <RandomDog key={refresh+"2"} />
          <RandomDog key={refresh+"3"} />
      </main>
    </div>
  )
}

export default App
