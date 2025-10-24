import React from 'react'
import img1 from '/project2.png'
import './projectCard.css'

const ProjectCard = ({title,image,liveURL,gitURL,projectTools}) => {
  return (
    <div className='project-card'>
      <div className='project-image'><img src={image} alt="" /></div>
      <div className='project-tools'>{projectTools} </div>
      <div className='project-details'>
        <p>
          {title}
        </p>
        <a href={liveURL} ><button>Visit Page </button></a>
        <a href={gitURL}><button>Visit Git</button></a>
      </div>
    </div>
  )
}

export default ProjectCard
