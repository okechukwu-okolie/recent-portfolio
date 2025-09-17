import React from 'react'
import './contacts.css'
import img1 from '/img1.png'
import { Typewriter } from 'react-simple-typewriter';

const Contacts = () => {
  return (
    // <div className='contacts'>
     <div class='hero'>
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
    // </div>
  )
}

export default Contacts
