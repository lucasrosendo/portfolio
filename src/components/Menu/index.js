import React from 'react'
import './styles.css';


export default function Menu() {
  return (
    <div className='menu'>
      <ul>
        <li><a href='#home'>Home</a></li>
        <li><a href='#sobre'>Sobre</a></li>
        <li><a href='#portifolio'>Portifolio</a></li>
        <li><a href='#contato'>Contato</a></li>
      </ul>
    </div>
  )
}
