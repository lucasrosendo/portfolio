import React from 'react'
import './styles.css';
import { BsInstagram, BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { VscGithubInverted } from 'react-icons/vsc'


function Contact() {
  return (
    <div className='contact-container' id='contato'>
      <a  href="http://www.instagram.com/lucasrosendo0" target='_blank' rel='noreferrer'><h1 className='icons-contact'><BsInstagram /></h1></a>
      <a  href="http://www.linkedin.com/in/lucasrosendo" target='_blank' rel='noreferrer'><h1 className='icons-contact'><BsLinkedin /></h1></a>
      <a  href="http://www.github.com/lucasrosendo" target='_blank' rel='noreferrer'><h1 className='icons-contact'><VscGithubInverted /></h1></a>
      <a  href="google.com" target='_blank' rel='noreferrer'><h1 className='icons-contact'><MdEmail /></h1></a>
      <h1 className='icons-contact'><BsWhatsapp /></h1>

    </div>
  )
}

export default Contact