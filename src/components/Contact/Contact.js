import React from 'react'
import './styles.css';
import { BsInstagram, BsLinkedin } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { VscGithubInverted } from 'react-icons/vsc'


function Contact() {
  return (
    <div className='contact-container' id='contato'>

      <div className='social-icons'>
        <a href="http://www.instagram.com/lucasrosendo0" target='_blank' rel='noreferrer'><h1 className='icons-contact'><BsInstagram /></h1></a>
        <a href="http://www.linkedin.com/in/lucasrosendo" target='_blank' rel='noreferrer'><h1 className='icons-contact'><BsLinkedin /></h1></a>
        <a href="http://www.github.com/lucasrosendo" target='_blank' rel='noreferrer'><h1 className='icons-contact'><VscGithubInverted /></h1></a>
      </div>


      <div className='container-bot'>
        <h1><MdEmail />lucasrosendo91@gmail.com</h1>
        {/* <h1><BsWhatsapp />(73)99194-5041</h1> */}
      </div>

    </div>
  )
}

export default Contact