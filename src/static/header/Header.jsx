import React,{useState} from 'react'
import './header.css'
import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs'

import { BiCloset, BiMenu, BiSun } from 'react-icons/bi'
import { CiDark } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import { CgClose } from 'react-icons/cg'
import { GrClose } from 'react-icons/gr'
import { IoClose } from 'react-icons/io5'


const Header = ({theme}) => {
    const [light,setLight] = useState(false)
    const [hamburger, setHamburger] = useState(false)

    const handleLight=()=>{
        setLight(!light)
    }

    const handleHamburger = ()=>{
      setHamburger(!hamburger)
    }

    theme(light)

  return (
    <div className='header'>
      <div className='socials'><hr className='vertical' /><BsGithub size={20}/><BsLinkedin size={20}/><BsWhatsapp size={20}/></div>
      <div className='logo'>samuel okolie</div>
      <div className='header-right'>
          <div className='navigation'>
            <ul className='non-mobile'>
              <li><a href="#home">#home</a></li>
              <li><a href="#works">#works</a></li>
              <li><a href="#about">#about-me</a></li>
              <li><a href="#contacts">#contacts</a></li>
            </ul> 

            <ul className={hamburger ?'mobile': 'hamburger-remove'}>
              <li><a href="#home">#home</a></li>
              <li><a href="#works">#works</a></li>
              <li><a href="#about">#about-me</a></li>
              <li><a href="#contacts">#contacts</a></li>
            </ul>
          </div>
          <div style={{display:'flex', alignItems:'center',gap:'5px'}}>
              {light ? <CiDark onClick={handleLight} size={25} className='dark'/> :<BiSun onClick={handleLight} size={25}/>}
                
                <span  style={{display:'inline'}} onClick={handleHamburger}>
                  {hamburger ?  <IoClose  size={23} />: <BiMenu size={25}/>}
                  </span>
              

          </div>



      </div>
    </div>
  )
}

export default Header
