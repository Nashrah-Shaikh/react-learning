import { useState } from 'react'
import './App.css'
import Lists from './components/Lists'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Lists />
    </>
  )
}

export default App
