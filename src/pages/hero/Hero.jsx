import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import './hero.css'
import img1 from '/img1.png'
import img2 from '/img2.png'
import heroSkill1 from '/skill1.png'
import heroSkill2 from '/skill2.png'


const Hero = ({isDarkTheme}) => {


  
  return (
    <div class='hero'>
      <div class='hero-content'>
        {/* <img className='image-one' src={heroSkill1} alt="" />
        <img className='image-two' src={heroSkill2} alt="" /> */}
        <h1>hello there, I am Samuel Okolie</h1>
        <h2>I am  <span style={{color:'red'}}>{" "} 
          
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
      <div class='hero-image'><img src={isDarkTheme ? img2 : img1} alt="hero-image" className='hero-img' /></div>
    </div>
  )
}



export default Hero
