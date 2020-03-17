import React, { useState } from 'react'

import './Msg.css'

const Message = () => {
  const[formData,setFormData] = useState({
    name:'',
    email:'',
    sub:'',
    message:''
  })
  const {name,email,sub,message} = formData
  const onChange = e =>
  setFormData({...formData,[e.target.name]:e.target.value})
  const onSubmit = async e =>{
    e.preventDefault()
    console.log("succes")
  }

  
    return (
      <div className='msg'  >
        <h2>Message Me</h2>
        <div className="container">
            <div className="form-wrap" >
            <form onSubmit = { e=> onSubmit(e)} >         
                  <div className="form-group" >
                  
                  
                  <input
                  type="text"
                  placeholder="name...."
                  name="name"
                  value={name}
                  onChange = {e => onChange(e)}
                  required

                  />
                </div>
                <div className="form-group" >
                  
                  <input
                  type="email"
                  placeholder="email...."
                  name="email"
                  value={email}
                  onChange = {e => onChange(e)}
                  required

                  />
                </div>
                <div className="form-group" >
                  
                  <input
                  type="text"
                  placeholder="Subject...."
                  name="sub"
                  value={sub}
                  onChange = {e => onChange(e)}
                  required

                  
                  />
                  </div>
                <div className="form-group" >
                 
                  <textarea
                  type="message"
                  placeholder="Message...."
                  name="message"
                  value={message}
                  onChange = {e => onChange(e)}
                  required

                  />
                </div>
                <button style={{fontSize:'20px',padding:'10px'}}  type='submit' >Send Message</button>
             </form>
   

                  </div>
                </div>
               
      </div>
    )
  
}

export default Message
