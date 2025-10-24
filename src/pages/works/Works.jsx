import React,{useState} from 'react'
import './works.css'
import ProjectCard from '../../components/projectCards/ProjectCard'
import { BsArrowRight } from 'react-icons/bs'
import skill1 from '/skill1.png'
import Skill from '../../components/skills/Skill'
import { BiCollapse } from 'react-icons/bi'
import { sampleWorks } from './works'

const Works = () => {
  const [view, setView] = useState(true)
  console.log(sampleWorks)
  

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
          {view ? 'View-all-projects' : 'Collapse-view'}
         </div>

      </div>
      
      <div className={view ?'works-cards':'works-cards-open'}>
       {sampleWorks.map((samplework)=>  <ProjectCard key={samplework.id} 
                                                image={samplework.image}
                                                title={samplework.title}
                                                liveURL ={samplework.liveURL}
                                                gitURL = {samplework.gitURL}
                                                projectTools = {samplework.projectTools}/>)}
      
      </div>


      {/* this is skills section of the codebase */}
      <div className='works-projects skills-section'>
        <div className='project-text'>
          <h3 >#skills </h3>
          <hr className='skills-line'/>
         </div>

         
      </div>

      <div className='work-skill'>
        <div className='skill-image'><img src={skill1} alt="" /></div>
        <div className='work-skill-component'>
          <Skill title='UI Component Libraries' skill1='.shadcnUI' skill2='.antDesignUI' skill3='.daisyUI' skill4='.semanticUI' skill5='' skill6='' skill7='' skill8='' />
          <Skill title='Programming Languages' skill1='.Javascript' skill2='.Typescript' skill3='.Python' skill4='.HTML' skill5='.CSS' skill6='' skill7='' skill8='' />
          <Skill title='Frameworks and Libraries' skill1='.ReactJS' skill2='.NextJS' skill3='.React Native' skill4='.Tailwind' skill5='' skill6='' skill7='' skill8='' />
          <Skill title='Database Management System' skill1='.MongoDB' skill2='.SQL' skill3='.MySQL' skill4='' skill5='' skill6='' skill7='' skill8='' />
          <Skill title='Animation Libraries' skill1='.Framer Motion     ' skill2='.GSAP' skill3='' skill4='' skill5='' skill6='' skill7='' skill8=''/>
          {/* <Skill/>
          <Skill/>  */}
        </div>
      </div>
      


    </div>
  )
}

export default Works
