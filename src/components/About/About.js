import React from 'react'
import './styles.css';


export default function About() {
  return (
    <div className='container-about' id='sobre'>
      <div className="about-content">
        <div className="photo-and-description">
          <div className="photo-perfil">

          </div>
          <div className="description">
            <p>Nascido e criado em Irecê-BA até os meus 14 anos, hoje moro em Itabuna-BA aos 31. A paixão por tecnologia vem desde criança, quando tive meu primeiro contato com um computador, mas foi depois da vida adulta que descobri a programação e suas possibilidades de mudança de mundo, o que só fez consolidar o meu amor pelo mundo tecnológico.
            <br/>
            Ah! Na imagem ao lado estou comemorando o tetra do Bahia (baeea!) na copa do nordeste, segurando a camisa de meu pai, que se tornou meu amuleto da sorte.
            </p>
          </div>
        </div>
        <div className="stacks">
          <h3>Stacks</h3>
          <ul>
            <a href='https://developer.mozilla.org/pt-BR/docs/Web/HTML' target='_blank'
              rel='noreferrer'>HTML</a>
            <a href='https://developer.mozilla.org/pt-BR/docs/Web/CSS' target='_blank'
              rel='noreferrer'>CSS</a>
            <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript' target='_blank'
              rel='noreferrer'>Javascrip</a>
            <a href='https://pt-br.reactjs.org/' target='_blank'
              rel='noreferrer'>ReactJs</a>
            <a href='https://nodejs.org/pt-br/docs/' target='_blank'
              rel='noreferrer'>NodeJs</a>
            <a href='https://expressjs.com/en/5x/api.html' target='_blank'
              rel='noreferrer'>Express</a>
            <a href='https://docs.docker.com/' target='_blank'
              rel='noreferrer'>Docker</a>
            <a href='https://dev.mysql.com/doc/' target='_blank'
              rel='noreferrer'>MySql</a>
            <a href='https://www.mongodb.com/docs/' target='_blank'
              rel='noreferrer'>MongoDB</a>
          </ul>
        </div>
      </div>
    </div>
  )
}
