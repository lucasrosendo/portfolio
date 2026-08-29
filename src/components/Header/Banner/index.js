'use client';

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import './styles.css';

export default function Banner() {
  const { t } = useLanguage();

  return (
    <section className="banner" id="home">
      <div className="banner-bg-glow"></div>

      <motion.div
        className="content-banner"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {t.banner.greeting}
        </motion.h2>

        <h1 className="glow-text">{t.banner.role}</h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {t.banner.descriptionParts.map((part, index) =>
            typeof part === 'string' ? (
              <span key={index}>{part}</span>
            ) : (
              <span key={index} className="highlight-trybe">{part.highlight}</span>
            )
          )}
        </motion.p>

        <motion.a
          href="https://docs.google.com/document/d/1FWoLmNZwz_zBle2bjhPNxrrlEpVoQ3QzNiwXXYiJ7lc/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="resume-btn glass-panel"
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <Download size={20} />
          <span>{t.banner.resumeBtn}</span>
        </motion.a>

      </motion.div>
    </section>
  );
}
