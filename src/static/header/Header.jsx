import React from 'react'
import './header.css'
import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs'

const Header = () => {
  return (
    <div class='header'>
      <div class='socials'><hr /><BsGithub size={20}/><BsLinkedin size={20}/><BsWhatsapp size={20}/></div>
      <div class='logo'>samuel okolie</div>
      <div class='navigation'>
        <ul>
            <li>#home</li>
            <li>#works</li>
            <li>#about-me</li>
            <li>#contacts</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
