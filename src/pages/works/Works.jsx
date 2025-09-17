import React,{useState} from 'react'
import './works.css'
import ProjectCard from '../../components/projectCards/ProjectCard'
import { BsArrowRight } from 'react-icons/bs'
import skill1 from '/skill1.png'
import Skill from '../../components/skills/Skill'

const Works = () => {
  const [view, setView] = useState(true)

  const openView = ()=>{
    setView(!view)
  }
  return (
    <div className='works' >
      <div className='works-projects'>

         <div className='project-text'>
           <h3 >#projects </h3>
          <hr />
         </div>

         <div onClick={openView}>
          View All <BsArrowRight/>
         </div>

      </div>
      <div className={view ?'works-cards':'works-cards-open'}>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
      </div>


      {/* this is skills section of the codebase */}
      <div className='works-projects skills-section'>
        <div className='project-text'>
          <h3 >#skills </h3>
          <hr className='skills-line'/>
         </div>

         {/* <div>
          View All <BsArrowRight/>
         </div> */}
      </div>

      <div className='work-skill'>
        <div><img src={skill1} alt="" /></div>
        <div className='work-skill-component'>
          <Skill/>
          <Skill/>
          <Skill/>
          <Skill/>
          {/* <Skill/>
          <Skill/>
          <Skill/> */}
        </div>
      </div>
      


    </div>
  )
}

export default Works
