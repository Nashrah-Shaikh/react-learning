import {Routes, Route} from 'react-router-dom'
import './App.css'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import UserDeails from './components/UserDeails'
import Aboutshow from './components/Aboutshow'

function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/user/:name' element={<UserDeails />} />
        <Route path='/about/:id' element={<Aboutshow/>}/>
      </Routes>
    </>
  )
}

export default App
