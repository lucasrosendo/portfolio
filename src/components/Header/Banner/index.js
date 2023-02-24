import React from 'react'
import './styles.css';


export default function Banner() {
  return (
    <div className='banner' id='home'>
      <div className='content-banner'>
        <h2>Oi, eu sou</h2>
        <h1>Desenvolvedor Web Full Stack</h1>
        <p>Formado em Desenvolvimento web na <span className='trybe'>Trybe</span> e cursando Engenharia de software na AMPLI</p>
        <a  href='https://docs.google.com/document/d/15Ltjzm93HY__rRNowyEjC86c0rdBOnFQ/edit?usp=share_link&ouid=106327726629506372556&rtpof=true&sd=true' target='_blank' rel='noreferrer'><button type='button'> Currículo</button></a>

      </div>
    </div>
  )
}
