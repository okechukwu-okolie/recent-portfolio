import React,{useState} from 'react'
import './header.css'
import '../../../src/app.css'
import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs'

import { BiSun } from 'react-icons/bi'
import { CiDark } from 'react-icons/ci'
import { Link } from 'react-router-dom'


const Header = () => {
    const [light,setLight] = useState(false)

    const handleLight=()=>{
        setLight(!light)
    
    }

  return (
    <div class='header'>
      <div class='socials'><hr /><BsGithub size={20}/><BsLinkedin size={20}/><BsWhatsapp size={20}/></div>
      <div class='logo'>samuel okolie</div>
      <div class='navigation'>
        <ul>
            <Link ><li>#home</li></Link>
            <li>#works</li>
            <li>#about-me</li>
            <li>#contacts</li>
        </ul>
      </div>
     {light ? <CiDark onClick={handleLight}/> :<BiSun onClick={handleLight}/>}
    </div>
  )
}

export default Header
