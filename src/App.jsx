
import './App.css'
import {Router, Routes, Route} from 'react-router-dom'
import Hero from './pages/hero/Hero'
import Footer from './static/footer/Footer'
import Header from './static/header/Header'
import Works from './pages/works/Works'
import About from './pages/about/About'
import Contacts from './pages/contact/Contacts'

function App() {

  return (
    <>
     <Header/>
     <Routes>
          <Route path='/' element={<Hero/>}/>
          <Route path='/works' element={<Works/>}/>
          <Route path='/about-me' element={<About/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
