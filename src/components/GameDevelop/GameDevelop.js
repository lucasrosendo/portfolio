'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Swords, Database, GitBranch, Layers, CircleAlert, CheckCircle2 } from 'lucide-react';
import './styles.css';

const architecture = [
  {
    icon: <Database size={28} className="gd-icon cyan" />,
    title: 'Data-driven cards',
    desc: "CardDefinition ScriptableObjects hold identity only (id, style, cost, rarity, tier). Effects are polymorphic — a list of CardEffect objects (DamageEffect, PercentDamageReductionEffect, ...) each implementing Apply(ctx), so new effect types slot in without touching the card schema.",
  },
  {
    icon: <Layers size={28} className="gd-icon purple" />,
    title: 'Ten styles, three evaluators',
    desc: 'Every fighting style is an ordered list of GradeDefinitions (belts, records, ranks — just data). An IGradeProgressionEvaluator strategy collapses ten bespoke advancement systems into three or four reusable archetypes: win-count, time-and-test, and record-by-weight-class.',
  },
  {
    icon: <GitBranch size={28} className="gd-icon green" />,
    title: 'Interruptible turn state machine',
    desc: 'Combat resolution is a State pattern — AwaitingAction → ActionDeclared → ReactionWindow → ResolvingEffects → TurnEnd — with instant defense as an observer intercepting the declare-to-resolve transition. The same interrupt point is where networked play would eventually hook in.',
  },
];

const progress = [
  { done: true, text: 'Architecture pass: data-driven cards, styles, and grade evaluators defined' },
  { done: true, text: 'Combat rules hand-simulated over 4 manual rounds (shared stamina + instant defense)' },
  { done: false, text: 'Build the automated combat simulation harness (headless, C#, Edit Mode tests)' },
  { done: false, text: 'Answer: does reacting second actually win more often?' },
  { done: false, text: 'Lock the PvP networking model before touching combat UI' },
];

export default function GameDevelop() {
  return (
    <section className="gd-section">
      <motion.div
        className="gd-hero glass-panel"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Swords size={40} className="gd-hero-icon" />
        <h1 className="glow-text">Building a Fighting-Style Card Game</h1>
        <p>
          A card game where every character is built from <strong>two fighting
          styles</strong> chosen out of ten — boxing, wrestling, karate, BJJ,
          and more — each with its own authentic progression system. Combat is
          turn-based with a twist: an instant defense lets you react to an
          opponent&apos;s move, paid out of the same shared stamina pool
          you&apos;ll need for your own next turn.
        </p>
        <Link href="/blog" className="gd-cta glass-panel">
          Read the devlog
        </Link>
      </motion.div>

      <motion.div
        className="gd-block"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="glow-text section-title">Architecture</h2>
        <p className="gd-block-subtitle">
          The single biggest technical risk isn&apos;t the cards — it&apos;s
          keeping ten genuinely different progression systems from turning
          into ten times the code. The plan leans on Unity ScriptableObjects
          and the Strategy pattern to keep that variety in data, not code.
        </p>

        <div className="gd-grid">
          {architecture.map((item) => (
            <div key={item.title} className="gd-card">
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
        <h2 className="glow-text section-title">Progress</h2>
        <ul className="gd-progress-list">
          {progress.map((item) => (
            <li key={item.text} className={item.done ? 'done' : ''}>
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
          <h3>Open question: what does PvP feel like?</h3>
          <p>
            Real-time PvP with an authoritative server makes the reaction
            window feel instant but costs the most to build. Asynchronous PvP
            is far cheaper but changes the core mechanic — both players would
            commit blind and resolve simultaneously instead of reacting live
            to what the opponent plays. That call has to land before any
            networked combat UI gets built.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
