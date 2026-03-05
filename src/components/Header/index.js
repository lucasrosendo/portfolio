import React from 'react';
import Menu from '../Menu';
import Banner from './Banner';
import './styles.css';

export default function Header() {
  return (
    <>
      <header className="glass-header">
        <div className="header-container">
          <div className="logo-container">
            <span className="logo glow-text">&lt;LR/&gt;</span>
          </div>
          <Menu />
        </div>
      </header>
      <Banner />
    </>
  );
}

