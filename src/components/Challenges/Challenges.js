import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Code, Database, Server, ChevronDown } from 'lucide-react';
import './styles.css';

export default function Challenges() {
    const [expandedId, setExpandedId] = useState(null);

    const challenges = [
        {
            id: 1,
            title: "Relatórios Complexos e Queries SQL",
            icon: <Database size={32} className="challenge-icon cyan" />,
            shortDesc: "Otimização de buscas e cruzamento estruturado de 7 tabelas com Oracle.",
            fullDesc: "Replicar um relatório de vendas buscando informações diretamente no banco Oracle, sem regras definidas de onde coletar os dados e dependendo de procedures de terceiros. A solução englobou muita pesquisa, testes e a criação de consultas complexas combinando 7 tabelas via JOINS, INNER JOINS, LEFT JOINS e filtros robustos para alinhamento da regra de negócio ao relatório final.",
            techs: ["Oracle SQL", "Análise de Dados"]
        },
        {
            id: 2,
            title: "Migração de Sistemas (Regras e ETL)",
            icon: <Code size={32} className="challenge-icon purple" />,
            shortDesc: "Transição completa entre plataformas, desde a UI até a base de dados via Apache Airflow.",
            fullDesc: "A migração exigiu a superação de três desafios: 1) Refatorei a lógica de acessos legada (feita antes apenas no frontend) visando a integração corporativa e segura com o Keycloak. 2) Construí um ETL com Apache Airflow na AWS para migrar dados de bancos on-premise, normalizando tabelas de camelCase para snake_case e realizando mapeamento de IDs de novos modelos de dados. 3) Otimizei a performance do sistema ao realocar cálculos vitais, outrora dispersos em código de interface/backend, em triggers enxutas no banco de dados.",
            techs: ["PostgreSQL", "Airflow", "ETL", "Triggers"]
        },
        {
            id: 3,
            title: "Migração Cloud (On-premise para AWS EC2)",
            icon: <Server size={32} className="challenge-icon green" />,
            shortDesc: "Adoção do Docker para +30 serviços e criação de scripts automatizados de Backup.",
            fullDesc: "Planejamento e migração de pouco mais de 30 serviços internos (APIs, Frontends e DBs) de ambientes on-premise para a nuvem da AWS EC2. Criei scripts Shell no Ubuntu vinculados a cron jobs para efetuar backups duplos diários direto no Amazon S3.  Serviços que rodavam em Bare Metal (PM2/Node) foram completamente dockerizados, com criação das Dockerfiles, Compose e repasses ao Docker Hub.",
            techs: ["AWS EC2", "AWS S3", "Docker", "Shell Script", "Linux"]
        },
        {
            id: 4,
            title: "Implantação do Keycloak (NestJS Guards)",
            icon: <CheckCircle size={32} className="challenge-icon yellow" />,
            shortDesc: "Mapeamento completo do fluxo de permissões, otimização de cache e endpoint nativo.",
            fullDesc: "Desafio focado em dominar os escopos do Keycloak e mapear credenciais de usuários para exposição via JSON Web Tokens. Como as permissões de acesso eram vitais, depurei gargalos onde o caching de excessivas claims quebravam o navegador. A solução envolveu consumir o endpoint nativo do próprio Keycloak para validar as autorizações dinamicamente a cada sessão logada, blindando por completo as rotas do backend em NestJS.",
            techs: ["NestJS", "Keycloak", "Autenticação", "JWT"]
        }
    ];

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
                    <h2 className="glow-text section-title">Desafios e Experiências</h2>
                    <p className="challenges-subtitle">
                        Cenários reais de migrações, arquitetura corporativa e resolução pragmática de problemas.
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

