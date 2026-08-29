'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Code, Database, Server, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import './styles.css';

// Icons are visual-only and language-independent; only the copy comes from
// the translation dictionary, merged in below by index.
const CHALLENGE_ICONS = [
    <Database key="db" size={32} className="challenge-icon cyan" />,
    <Code key="code" size={32} className="challenge-icon purple" />,
    <Server key="server" size={32} className="challenge-icon green" />,
    <CheckCircle key="check" size={32} className="challenge-icon yellow" />,
];

export default function Challenges() {
    const { t } = useLanguage();
    const [expandedId, setExpandedId] = useState(null);

    const challenges = t.challenges.items.map((item, index) => ({
        id: index + 1,
        icon: CHALLENGE_ICONS[index],
        ...item,
    }));

    return (
        <section className="challenges-section" id="desafios">
            <motion.div
                className="challenges-container glass-panel"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
            >
                <div className="challenges-header">
                    <h2 className="glow-text section-title">{t.challenges.title}</h2>
                    <p className="challenges-subtitle">
                        {t.challenges.subtitle}
                    </p>
                </div>

                <div className="challenges-grid">
                    {challenges.map((challenge, index) => {
                        const isExpanded = expandedId === challenge.id;

                        return (
                            <motion.div
                                key={challenge.id}
                                className="challenge-card"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.5 }}
                                whileHover={{ y: isExpanded ? 0 : -5, boxShadow: isExpanded ? "" : "0 15px 30px rgba(139, 92, 246, 0.15)" }}
                                onClick={() => setExpandedId(isExpanded ? null : challenge.id)}
                            >
                                <div className="challenge-card-header">
                                    {challenge.icon}
                                    <h3>{challenge.title}</h3>
                                </div>

                                <p className="challenge-desc">
                                    {challenge.shortDesc}
                                </p>

                                <AnimatePresence>
                                    {isExpanded && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="challenge-expanded-content"
                                        >
                                            <div className="divider"></div>
                                            <p>{challenge.fullDesc}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <div className="challenge-footer">
                                    <div className="challenge-techs">
                                        {challenge.techs.map((tech, techIndex) => (
                                            <span key={techIndex} className="tech-badge">{tech}</span>
                                        ))}
                                    </div>

                                    <motion.div
                                        animate={{ rotate: isExpanded ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="expand-icon"
                                    >
                                        <ChevronDown size={20} />
                                    </motion.div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
}

