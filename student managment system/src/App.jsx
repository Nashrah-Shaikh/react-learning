import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import UserDeails from './components/UserDeails'
import About from './components/About'
import Aboutshow from './components/Aboutshow'
import Navbar from './components/Navbar'
import Contact from './components/Contact'

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      
      <Route path="/" element={<Home />}/>
      <Route path="/user/:id" element={<UserDeails />}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/about/:id" element={<Aboutshow/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default App
