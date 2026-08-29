'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Swords, Database, GitBranch, Layers, CircleAlert, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import './styles.css';

// Icons are visual-only and language-independent; copy comes from the
// translation dictionary, merged in below by index.
const ARCHITECTURE_ICONS = [
  <Database key="db" size={28} className="gd-icon cyan" />,
  <Layers key="layers" size={28} className="gd-icon purple" />,
  <GitBranch key="branch" size={28} className="gd-icon green" />,
];

export default function GameDevelop() {
  const { t } = useLanguage();
  const gd = t.gameDevelop;

  const architecture = gd.architecture.map((item, index) => ({
    icon: ARCHITECTURE_ICONS[index],
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
        <h2 className="glow-text section-title">{gd.architectureTitle}</h2>
        <p className="gd-block-subtitle">{gd.architectureSubtitle}</p>

        <div className="gd-grid">
          {architecture.map((item, index) => (
            <div key={index} className="gd-card">
              {item.icon}
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="gd-block"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="glow-text section-title">{gd.progressTitle}</h2>
        <ul className="gd-progress-list">
          {gd.progress.map((item, index) => (
            <li key={index} className={item.done ? 'done' : ''}>
              <CheckCircle2 size={20} />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        className="gd-callout glass-panel"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <CircleAlert size={28} className="gd-callout-icon" />
        <div>
          <h3>{gd.callout.title}</h3>
          <p>{gd.callout.desc}</p>
        </div>
      </motion.div>
    </section>
  );
}
