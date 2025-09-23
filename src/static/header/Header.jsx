import React,{useState} from 'react'
import './header.css'
import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs'

import { BiSun } from 'react-icons/bi'
import { CiDark } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import { FaHamburger } from 'react-icons/fa'
import { GiCancel, GiHamburger, GiHamburgerMenu } from 'react-icons/gi'


const Header = ({theme}) => {
    const [light,setLight] = useState(false)
    const [hamburgerMenu,setHamburgerMenu] = useState(false)

    const handleLight=()=>{
        setLight(!light)
    
    }

    theme(light)

  return (
    <div className='header'>
      <div className='socials'><hr class='vertical' /><BsGithub size={25}/><BsLinkedin size={25}/><BsWhatsapp size={25}/></div>
      <div className='logo'>samuel okolie</div>
      <div className='header-right'>
          <div className='navigation'>
            <ul className={hamburgerMenu ? 'mobile' :'no-mobile'}>
              <li><a href="#home">#home</a></li>
              <li><a href="#works">#works</a></li>
              <li><a href="#about">#about-me</a></li>
              <li><a href="#contacts">#contacts</a></li>
            </ul> 

            <ul className=' other-screen'>
              <li><a href="#home">#home</a></li>
              <li><a href="#works">#works</a></li>
              <li><a href="#about">#about-me</a></li>
              <li><a href="#contacts">#contacts</a></li>
            </ul> 
          </div>
          <div style={{display:'flex', gap:'6px', alignItems:'center'}} >

          {light ? <CiDark onClick={handleLight} size={25} className='dark'/> :<BiSun onClick={handleLight} size={25}/>}
          {hamburgerMenu ? <GiCancel size={25} onClick={()=>setHamburgerMenu(!hamburgerMenu)} className='hamburger'/> : <GiHamburgerMenu size={25} onClick={()=>setHamburgerMenu(!hamburgerMenu)} className='hamburger'/>}
          </div>
      </div>
    </div>
  )
}

export default Header
