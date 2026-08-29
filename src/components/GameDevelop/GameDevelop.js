'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Swords, Users, TrendingUp, ShieldHalf, Clock } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import './styles.css';

// Icons are visual-only and language-independent; copy comes from the
// translation dictionary, merged in below by index.
const MECHANICS_ICONS = [
  <Users key="users" size={28} className="gd-icon cyan" />,
  <TrendingUp key="trend" size={28} className="gd-icon purple" />,
  <ShieldHalf key="shield" size={28} className="gd-icon green" />,
];

export default function GameDevelop() {
  const { t } = useLanguage();
  const gd = t.gameDevelop;

  const mechanics = gd.mechanics.map((item, index) => ({
    icon: MECHANICS_ICONS[index],
    ...item,
  }));

  return (
    <section className="gd-section">
      <motion.div
        className="gd-hero glass-panel"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Swords size={40} className="gd-hero-icon" />
        <h1 className="glow-text">{gd.hero.title}</h1>
        <p>{gd.hero.description}</p>
        <Link href="/blog" className="gd-cta glass-panel">
          {gd.hero.cta}
        </Link>
      </motion.div>

      <motion.div
        className="gd-block"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="glow-text section-title">{gd.mechanicsTitle}</h2>
        <p className="gd-block-subtitle">{gd.mechanicsSubtitle}</p>

        <div className="gd-grid">
          {mechanics.map((item, index) => (
            <div key={index} className="gd-card">
              {item.icon}
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="gd-callout glass-panel"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <Clock size={28} className="gd-callout-icon" />
        <div>
          <h3>{gd.roadmap.title}</h3>
          <p>{gd.roadmap.desc}</p>
        </div>
      </motion.div>
    </section>
  );
}
