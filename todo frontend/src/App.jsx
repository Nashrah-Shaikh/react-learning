import React from 'react'
import Todoservice from './components/Todoservice'
import Form from './components/Form'
import { Routes, Route, } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Todoservice/>}/>
      <Route path="/form" element={<Form/>}/>
    </Routes>
    </>
  )
}

export default App
