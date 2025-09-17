import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import './hero.css'
import img1 from '/img1.png'

const Hero = () => {

  //{' '}
      // <span style={{ color: 'red' }}>
      //   <Typewriter
      //     words={['Developer', 'Designer', 'Freelancer']}
      //     loop={true}
      //     cursor
      //     cursorStyle='|'
      //     typeSpeed={70}
      //     deleteSpeed={50}
      //     delaySpeed={1000}
      //   />
      // </span>
  
  return (
    <div class='hero' id='hero'>
      <div class='hero-content'>
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
          cursorStyle='|'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
          />
          </span>
          </h2>
        
      </div>
      <div class='hero-image'><img src={img1} alt="hero-image" className='hero-img' /></div>
    </div>
  )
}



export default Hero
