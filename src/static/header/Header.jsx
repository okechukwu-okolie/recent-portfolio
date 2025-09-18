import React,{useState} from 'react'
import './header.css'
import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs'

import { BiSun } from 'react-icons/bi'
import { CiDark } from 'react-icons/ci'
import { Link } from 'react-router-dom'


const Header = ({theme}) => {
    const [light,setLight] = useState(false)

    const handleLight=()=>{
        setLight(!light)
    
    }

    theme(light)

  return (
    <div className='header'>
      <div className='socials'><hr class='vertical' /><BsGithub size={20}/><BsLinkedin size={20}/><BsWhatsapp size={20}/></div>
      <div className='logo'>samuel okolie</div>
      <div className='header-right'>
          <div className='navigation'>
            <ul>
              <li><a href="#home">#home</a></li>
              <li><a href="#works">#works</a></li>
              <li><a href="#about">#about-me</a></li>
              <li><a href="#contacts">#contacts</a></li>
            </ul> 
          </div>
        {light ? <CiDark onClick={handleLight} size={35} className='dark'/> :<BiSun onClick={handleLight} size={35}/>}

      </div>
    </div>
  )
}

export default Header
