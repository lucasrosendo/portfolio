import React from 'react';
import { motion } from 'framer-motion';
import './styles.css';

export default function About() {
  const stacks = [
    { name: 'Node.js', url: 'https://nodejs.org/' },
    { name: 'NestJS', url: 'https://nestjs.com/' },
    { name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
    { name: 'React', url: 'https://react.dev/' },
    { name: 'Next.js', url: 'https://nextjs.org/' },
    { name: 'Oracle SQL', url: 'https://www.oracle.com/br/database/' },
    { name: 'PostgreSQL', url: 'https://www.postgresql.org/' },
    { name: 'Docker', url: 'https://www.docker.com/' },
    { name: 'AWS', url: 'https://aws.amazon.com/' },
    { name: 'n8n', url: 'https://n8n.io/' },
    { name: 'Airflow', url: 'https://airflow.apache.org/' }
  ];

  return (
    <section className="about-section" id="sobre">
      <motion.div
        className="container-about glass-panel"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="about-content">
          <div className="photo-and-description">
            <motion.div
              className="photo-perfil"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />

            <div className="description">
              <h2 className="glow-text">Sobre Mim</h2>
              <p>
                Desenvolvedor Full Stack com 3 anos de experiência em soluções tecnológicas orientadas a dados, especializado em integração de sistemas e desenvolvimento de APIs robustas. Atualmente atuo como peça-chave na entrega de dashboards estratégicos e ferramentas de análise para tomada de decisão no Grupo Brasileiro.
              </p>
              <p>
                Combino expertise técnica no backend (NestJS, Node.js) e frontend (React, Next.js) com habilidades em gestão de bancos de dados complexos (Oracle, PostgreSQL) e práticas modernas de DevOps. Minha trajetória prévia em vendas consolidou habilidades como comunicação clara, resolução ágil de problemas e foco autêntico no cliente.
              </p>
            </div>
          </div>

          <div className="stacks">
            <h3 className="glow-text">Stacks & Ferramentas</h3>
            <ul className="stack-grid">
              {stacks.map((stack, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.a
                    href={stack.url}
                    target="_blank"
                    rel="noreferrer"
                    className="stack-badge"
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(139, 92, 246, 0.2)' }}
                  >
                    {stack.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

