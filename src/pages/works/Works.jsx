import React,{useState} from 'react'
import './works.css'
import ProjectCard from '../../components/projectCards/ProjectCard'
import { BsArrowRight } from 'react-icons/bs'
import skill1 from '/skill1.png'
import Skill from '../../components/skills/Skill'
import { BiCollapse } from 'react-icons/bi'

const Works = () => {
  const [view, setView] = useState(true)
  

  const openView = ()=>{
    setView(!view)
  }
  return (
    <div className='works' id='works' >
      <div className='works-projects'>

         <div className='project-text'>
           <h3 >#projects </h3>
          <hr />
         </div>

         <div className='view-all' onClick={openView} >
          {view ? 'Click to view all' : 'Click to collapse'}
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
        <div><img src={skill1} alt="" className='work-skill-image'/></div>
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
