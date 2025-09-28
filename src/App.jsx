import React,{useState,useEffect} from 'react'
import './App.css'
import {Router, Routes, Route} from 'react-router-dom'
import Hero from './pages/hero/Hero'
import Footer from './static/footer/Footer'
import Header from './static/header/Header'
import Works from './pages/works/Works'
import About from './pages/about/About'
import Contacts from './pages/contact/Contacts'

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);



  useEffect(() => {
    // Apply or remove the dark theme class
    const body = document.body;
    if (isDarkTheme) {
      body.classList.add('dark-theme');
      // localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove('dark-theme');
      // localStorage.setItem('theme', 'light');
    }
  }, [isDarkTheme]);

  const theme =(data)=>{
    setIsDarkTheme(data)
  }

  return (
    <>
     <Header theme={theme}/>
     {/* <Routes> */}
          {/* <Route path='/' element={<Hero isDarkTheme={isDarkTheme}/>}/>
          <Route path='/works' element={<Works/>}/>
          <Route path='/about-me' element={<About/>}/>
          <Route path='/contacts' element={<Contacts/>}/> */}
          <Hero isDarkTheme={isDarkTheme}/>
          <Works/>
          <About/>
          <Contacts isDarkTheme={isDarkTheme}/>  
     {/* </Routes> */}
     {/* <Footer/> */}
    </>
  )
}

export default App
