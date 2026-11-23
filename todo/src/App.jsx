import { useState } from 'react'
import './App.css'
import Lists from './components/Lists'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h3>hello wold</h3>
      <Lists />
    </>
  )
}

export default App
