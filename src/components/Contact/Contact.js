'use client';

import { motion } from 'framer-motion';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { VscGithubInverted } from 'react-icons/vsc';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import './styles.css';

function Contact() {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section className="contact-section" id="contato">
      <motion.div
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.h2 variants={itemVariants} className="glow-text section-title">{t.contact.title}</motion.h2>

        <motion.div variants={itemVariants} className="social-links">
          <a href="http://www.instagram.com/lucasrosendo0" target="_blank" rel="noreferrer" className="social-glass">
            <BsInstagram size={28} />
          </a>
          <a href="http://www.linkedin.com/in/lucasrosendo" target="_blank" rel="noreferrer" className="social-glass">
            <BsLinkedin size={28} />
          </a>
          <a href="http://www.github.com/lucasrosendo" target="_blank" rel="noreferrer" className="social-glass">
            <VscGithubInverted size={28} />
          </a>
        </motion.div>

        <motion.div variants={itemVariants} className="email-container glass-panel">
          <MdEmail size={24} className="email-icon" />
          <span>lucasrosendo91@gmail.com</span>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Contact;