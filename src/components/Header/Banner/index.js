import React from 'react'
import './styles.css';


export default function Banner() {
  return (
    <div className='banner'>
      <div className='content-banner'>
        {/* <h1>SITE EM CONSTRUÇÃO!!!</h1> */}
        <h2>Oi, eu sou</h2>
        <h1>Desenvolvedor Web Full Stack</h1>
        <p>Formado em Desenvolvimento web na <span className='trybe'>Trybe</span> e cursando Engenharia de software na AMPLI</p>
        <button type='button'> Download CV</button>

      </div>
    </div>
  )
}
