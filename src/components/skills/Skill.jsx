import React from 'react'
import './skill.css'

const Skill = ({title,skill1,skill2,skill3,skill4,skill5,skill6,skill7,skill8}) => {
  return (
    <div className='skill'>
      <div><h3>{title}</h3></div>
      <div className='skill-list'>
        <span>{skill1}</span>
        <span>{skill2}</span>
        <span>{skill3}</span>
        <span>{skill4}</span>
         <span>{skill5}</span>
        <span>{skill6}</span>
        <span>{skill7}</span>
        <span>{skill8}</span>
      </div>
    </div>
  )
}

export default Skill
