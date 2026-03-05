import React from 'react';
import { motion } from 'framer-motion';
import './styles.css';

export default function Menu() {
  const links = [
    { name: 'Home', href: '#home' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Desafios', href: '#desafios' },
    { name: 'Contato', href: '#contato' }
  ];

  return (
    <nav className="menu">
      <ul>
        {links.map((link, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href={link.href}>{link.name}</a>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}

