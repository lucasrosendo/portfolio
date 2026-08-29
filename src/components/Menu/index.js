'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import './styles.css';

export default function Menu() {
  const { t } = useLanguage();

  const links = [
    { name: t.menu.home, href: '/#home' },
    { name: t.menu.about, href: '/#sobre' },
    { name: t.menu.challenges, href: '/#desafios' },
    { name: t.menu.gameDev, href: '/game-develop' },
    { name: t.menu.blog, href: '/blog' },
    { name: t.menu.contact, href: '/#contato' },
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
