'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import './styles.css';

export default function Menu() {
  const links = [
    { name: 'Home', href: '/#home' },
    { name: 'Sobre', href: '/#sobre' },
    { name: 'Desafios', href: '/#desafios' },
    { name: 'Game Dev', href: '/game-develop' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contato', href: '/#contato' },
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
            <Link href={link.href}>{link.name}</Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}
