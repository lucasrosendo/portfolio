import React from 'react'
import './styles.css';
// import arquivo from '../../../docs/curriculoLucasRosendo.docx .pdf'


export default function Banner() {
  return (
    <div className='banner' id='home'>
      <div className='content-banner'>
        {/* <h1>SITE EM CONSTRUÇÃO!!!</h1> */}
        <h2>Oi, eu sou</h2>
        <h1>Desenvolvedor Web Full Stack</h1>
        <p>Formado em Desenvolvimento web na <span className='trybe'>Trybe</span> e cursando Engenharia de software na AMPLI</p>
        <button type='button' href='/curriculoLucasRosendo.docx.pdf' download> Download CV</button>

      </div>
    </div>
  )
}
