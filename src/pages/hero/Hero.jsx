import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import './hero.css'
import img1 from '/img1.png'
import img2 from '/img2.png'


const Hero = ({isDarkTheme}) => {


  
  return (
    <div class='hero' id='home'>
      <div class='hero-content'>
        <h1 className='content-name'>hello there, I am <span className='content-name-span'>Samuel Okolie</span></h1>
        <h2>I am  <span className='typewritter'>{" "} 
          
          <Typewriter
          words={[
            'a front-end software developer',
             'a backend software developer', 
             'a machine learning model engineer',
             'an artificial intelligence engineer',
             'a technology enthusiast',
             '............'
            ]}
          loop={true}
          cursor
          cursorStyle='#'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
          />
          </span>
          </h2>
        
      </div>
      <div class='hero-image'>{isDarkTheme ? <img src={img2} alt="hero-image" className='hero-img' style={{width:'380px'}}/>:<img src={img1} alt="hero-image" className='hero-img' />}   </div>
    </div>
  )
}



export default Hero
