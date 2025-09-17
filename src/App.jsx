
import './App.css'
import {Router, Routes, Route} from 'react-router-dom'
import Hero from './pages/hero/Hero'
import Footer from './static/footer/Footer'
import Header from './static/header/Header'

function App() {

  return (
    <>
     <Header/>
     <Routes>
          <Route path='/' element={<Hero/>}/>
          <Route path='/works' element={<Hero/>}/>
          <Route path='/about-me' element={<Hero/>}/>
          <Route path='/contact' element={<Hero/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
