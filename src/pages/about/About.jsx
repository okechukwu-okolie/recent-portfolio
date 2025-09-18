import React from 'react'
import './about.css'
import { BsArrowRight } from 'react-icons/bs'
import img5 from '/img5.png'
import about1 from '/skill1.png'

const About = () => {
  return (
    <div className='about'>
      <div className='works-projects'>

         <div className='project-text'>
           <h3 >#about-me </h3>
          <hr />
         </div>

         {/* <div onClick={openView}>
          View All <BsArrowRight/>
         </div> */}

      </div>
      <div className='about-contents'>
        <div className='about-text'>
          <p>
            <img src={about1} alt="" />
            Hello, i’m Elias! <br />

              I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. 

              Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
          </p>
        </div>
        <div className='about-image'>
          <img src={img5} alt="" />
        </div>
      </div>
    </div>
  )
}

export default About
