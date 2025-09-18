import React from 'react'
import './contacts.css'
import img1 from '/img1.png'
import { Typewriter } from 'react-simple-typewriter';

const Contacts = () => {
  return (
    <div className='contacts' >
      <div className='works-projects'>
    <div className='project-text'>
           <h3 id='contacts'>#contact me </h3>
          <hr />
         </div>
    </div>


    <div className='form-and'>
      <div>
        <form action="">
         <div>
           <div>
            <input type="text"
                  placeholder='input your name here' />
          <input type="email"
                  placeholder='input your email here' />
          </div>
          <div>
            <input type="text"
                  placeholder='input message title here' />
          </div>
          <div>
            <textarea name="" id="" rows={8} cols={20}></textarea>
          </div>
          <button>Send</button>
         </div>
        </form>
      </div>

      <div></div>
    </div>
    </div>
  )
}

export default Contacts
