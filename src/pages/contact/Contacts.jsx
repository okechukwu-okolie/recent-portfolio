import React,{useState} from 'react'
import './contacts.css'
import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs';

const Contacts = ({isDarkTheme}) => {
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    title:'',
    message:'',
  })
  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [title, setTitle] = useState('')
  // const [message, set] = useState('')

  const [responseMessage, setResponseMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);


  const accessKey = '82020874-4524-41c6-af09-34cfe3f3bd9b'

  const handleChange =(e)=>{
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  const handleSubmit =async (e)=>{
    e.preventDefault()
    setIsSubmitting(true)
    setResponseMessage('')

    try {
      // const form ={}
      // form.access_key = accessKey
      // form.name = formData.name
      // form.email= formData.email
      // form.title= formData.title
      // form.message= formData.message   
      if(!formData.name||!formData.email||!formData.title||!formData.message){
        return setResponseMessage('please input all availiable fields before submission')
      }   
      
       const form = new FormData()
       form.append("access_key", accessKey)
       form.append("name",formData.name)
       form.append("email",formData.email)
       form.append("title",formData.title)
       form.append("message",formData.message)

       const response = await fetch("https://api.web3forms.com/submit",{
        method:'POST',
        body:form,
       })
       const result = await response.json()

       if(result.success){
          setResponseMessage('Thank you! Your message has been sent successfully.')
          setIsSuccess(true)
          setFormData({name:'',email:'',title:'',message:''})
       }else{
        setResponseMessage('Something went wrong. Please try again later.')
        setIsSuccess(false)
       }

    } catch (error) {
      console.log('error submitting form:', error)
      setResponseMessage('Network error. Please check your connection and try again.')
      setIsSuccess(false)
    }finally{
      setIsSubmitting(false)
    }




  }
  return (
    <div className='contacts' >
      <div className='works-projects'>
    <div className='project-text'>
           <h3 id='contacts'>#contact me </h3>
          <hr />
         </div>
    </div>


    <div className='contact-form'>
      <div className='form-and'>
        <form onSubmit={handleSubmit}>
         <div>
           <div className='name-email'>

            <input type="text"
                  value={formData.name}
                  placeholder='input your name here'
                  onChange={handleChange}
                  required
                  id="name"
                  name="name"
                  style={{backgroundColor:'transparent'}}
                   />

          <input type="email"
                  placeholder='input your email here'
                  value={formData.email}
                  id="email"
                  name="email"
                  onChange={handleChange}
                  required
                   />
          </div>

          <div className='title'>
            <input type="text"
                  placeholder='input message title here'
                  value={formData.title}
                  id="title"
                  name="title"
                  onChange={handleChange} 
                  required
                  />
                  
                  
          </div>

          <div className='textarea'>
            <textarea id="message"
                      name="message"
                      rows={8} 
                      cols={20} 
                      value={formData.message}
                      onChange={handleChange}
                      required
                      />
          </div>
          <button>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
         </div>
        </form>

        {responseMessage && (
          <div className={isSuccess || isDarkTheme ? 'response':'bad-response'}>
            {responseMessage}
          </div>
        )}
      </div>

      <div>
        <div className=''><hr class='' /><BsGithub size={20}/><BsLinkedin size={20}/><BsWhatsapp size={20}/></div>
      </div>
    </div>
    </div>
  )
}

export default Contacts
