import React from 'react'
import img1 from '/project2.png'
import './projectCard.css'

const ProjectCard = () => {
  return (
    <div className='project-card'>
      <div className='project-image'><img src={img1} alt="" /></div>
      <div className='project-tools'>HTML CSS React </div>
      <div className='project-details'>
        <p>
          To-do Scheduler
        </p>
        <button>Visit </button>
        <button>visit Git</button>
      </div>
    </div>
  )
}

export default ProjectCard
