import React from 'react';
import './contactUsHeader.css'
import {NavLink} from 'react-router-dom'
import {AiOutlineHome} from 'react-icons/ai'
import { Container } from 'react-bootstrap';

const ContactUsHeader = () => {
  return (
    
        <Container className='contact_header d-flex justify-content-center align-items-center flex-column'>
         <h1 className='contact_title'> Contact Us </h1>
         <div className="contact_btn">
          <button className='btn btn-primary'> <AiOutlineHome/> <NavLink to="/">Home</NavLink></button>
         </div>  
        </Container>
            
          
   


  )
}

export default ContactUsHeader