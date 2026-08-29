// Full UI copy for both supported locales. Keeping this as one flat object
// (rather than per-component files) makes it easy to spot a missing
// translation — every key that exists in `pt` must exist in `en`, and vice
// versa.
export const translations = {
  pt: {
    menu: {
      home: 'Home',
      about: 'Sobre',
      challenges: 'Desafios',
      gameDev: 'Dev de Jogo',
      blog: 'Blog',
      contact: 'Contato',
    },
    banner: {
      greeting: 'Olá, eu sou',
      role: 'Desenvolvedor Web Full Stack',
      descriptionParts: [
        'Desenvolvedor Full Stack com 3 anos de experiência em integrações, APIs em ',
        { highlight: 'NestJS/Node' },
        ' e interfaces em ',
        { highlight: 'React/Next' },
        '.',
      ],
      resumeBtn: 'Currículo',
    },
    about: {
      title: 'Sobre Mim',
      paragraphs: [
        'Desenvolvedor Full Stack com 3 anos de experiência em soluções tecnológicas orientadas a dados, especializado em integração de sistemas e desenvolvimento de APIs robustas. Atualmente atuo como peça-chave na entrega de dashboards estratégicos e ferramentas de análise para tomada de decisão no Grupo Brasileiro.',
        'Combino expertise técnica no backend (NestJS, Node.js) e frontend (React, Next.js) com habilidades em gestão de bancos de dados complexos (Oracle, PostgreSQL) e práticas modernas de DevOps. Minha trajetória prévia em vendas consolidou habilidades como comunicação clara, resolução ágil de problemas e foco autêntico no cliente.',
      ],
      stacksTitle: 'Stacks & Ferramentas',
    },
    challenges: {
      title: 'Desafios e Experiências',
      subtitle: 'Cenários reais de migrações, arquitetura corporativa e resolução pragmática de problemas.',
      items: [
        {
          title: 'Relatórios Complexos e Queries SQL',
          shortDesc: 'Otimização de buscas e cruzamento estruturado de 7 tabelas com Oracle.',
          fullDesc: 'Replicar um relatório de vendas buscando informações diretamente no banco Oracle, sem regras definidas de onde coletar os dados e dependendo de procedures de terceiros. A solução englobou muita pesquisa, testes e a criação de consultas complexas combinando 7 tabelas via JOINS, INNER JOINS, LEFT JOINS e filtros robustos para alinhamento da regra de negócio ao relatório final.',
          techs: ['Oracle SQL', 'Análise de Dados'],
        },
        {
          title: 'Migração de Sistemas (Regras e ETL)',
          shortDesc: 'Transição completa entre plataformas, desde a UI até a base de dados via Apache Airflow.',
          fullDesc: 'A migração exigiu a superação de três desafios: 1) Refatorei a lógica de acessos legada (feita antes apenas no frontend) visando a integração corporativa e segura com o Keycloak. 2) Construí um ETL com Apache Airflow na AWS para migrar dados de bancos on-premise, normalizando tabelas de camelCase para snake_case e realizando mapeamento de IDs de novos modelos de dados. 3) Otimizei a performance do sistema ao realocar cálculos vitais, outrora dispersos em código de interface/backend, em triggers enxutas no banco de dados.',
          techs: ['PostgreSQL', 'Airflow', 'ETL', 'Triggers'],
        },
        {
          title: 'Migração Cloud (On-premise para AWS EC2)',
          shortDesc: 'Adoção do Docker para +30 serviços e criação de scripts automatizados de Backup.',
          fullDesc: 'Planejamento e migração de pouco mais de 30 serviços internos (APIs, Frontends e DBs) de ambientes on-premise para a nuvem da AWS EC2. Criei scripts Shell no Ubuntu vinculados a cron jobs para efetuar backups duplos diários direto no Amazon S3. Serviços que rodavam em Bare Metal (PM2/Node) foram completamente dockerizados, com criação das Dockerfiles, Compose e repasses ao Docker Hub.',
          techs: ['AWS EC2', 'AWS S3', 'Docker', 'Shell Script', 'Linux'],
        },
        {
          title: 'Implantação do Keycloak (NestJS Guards)',
          shortDesc: 'Mapeamento completo do fluxo de permissões, otimização de cache e endpoint nativo.',
          fullDesc: 'Desafio focado em dominar os escopos do Keycloak e mapear credenciais de usuários para exposição via JSON Web Tokens. Como as permissões de acesso eram vitais, depurei gargalos onde o caching de excessivas claims quebravam o navegador. A solução envolveu consumir o endpoint nativo do próprio Keycloak para validar as autorizações dinamicamente a cada sessão logada, blindando por completo as rotas do backend em NestJS.',
          techs: ['NestJS', 'Keycloak', 'Autenticação', 'JWT'],
        },
      ],
    },
    contact: {
      title: 'Contato',
    },
    gameDevelop: {
      hero: {
        title: 'Construindo um Card Game de Luta',
        description:
          'Um jogo de cartas onde cada personagem é montado a partir de duas modalidades de luta escolhidas entre dez — boxe, wrestling, karatê, BJJ e outras — cada uma com seu próprio sistema de progressão autêntico. O combate é por turnos com um adicional: uma defesa instantânea permite reagir à jogada do oponente, paga com a mesma estamina compartilhada que você vai precisar no seu próprio próximo turno.',
        cta: 'Ler o devlog',
      },
      architectureTitle: 'Arquitetura',
      architectureSubtitle:
        'O maior risco técnico não são as cartas — é evitar que dez sistemas de progressão genuinamente diferentes virem dez vezes mais código. O plano se apoia em ScriptableObjects da Unity e no padrão Strategy para manter essa variedade nos dados, não no código.',
      architecture: [
        {
          title: 'Cartas orientadas a dados',
          desc: 'ScriptableObjects CardDefinition guardam só a identidade da carta (id, estilo, custo, raridade, tier). Os efeitos são polimórficos — uma lista de objetos CardEffect (DamageEffect, PercentDamageReductionEffect, ...), cada um implementando Apply(ctx) — então novos tipos de efeito entram sem mexer no schema da carta.',
        },
        {
          title: 'Dez estilos, três avaliadores',
          desc: 'Cada estilo de luta é uma lista ordenada de GradeDefinitions (faixas, recordes, ranks — só dados). Uma estratégia IGradeProgressionEvaluator reduz dez sistemas de avanço sob medida a três ou quatro arquétipos reaproveitáveis: contagem de vitórias, tempo-e-exame e recorde por categoria de peso.',
        },
        {
          title: 'Máquina de turnos interruptível',
          desc: 'A resolução de combate é um padrão State — AguardandoAção → AçãoDeclarada → JanelaDeReação → ResolvendoEfeitos → FimDeTurno — com a defesa instantânea como um observer que intercepta a transição de declarar para resolver. O mesmo ponto de interrupção é onde o modo online eventualmente se encaixaria.',
        },
      ],
      progressTitle: 'Progresso',
      progress: [
        { done: true, text: 'Arquitetura definida: cartas, estilos e avaliadores de graduação orientados a dados' },
        { done: true, text: 'Regras de combate simuladas manualmente em 4 rodadas (estamina compartilhada + defesa instantânea)' },
        { done: false, text: 'Construir o harness de simulação automatizada de combate (C# headless, testes em Edit Mode)' },
        { done: false, text: 'Responder: reagir em segundo realmente vence mais?' },
        { done: false, text: 'Definir o modelo de rede do PvP antes de mexer na UI de combate' },
      ],
      callout: {
        title: 'Pergunta em aberto: qual é a sensação do PvP?',
        desc: 'PvP em tempo real com servidor autoritativo faz a janela de reação parecer instantânea, mas custa mais caro pra construir. PvP assíncrono é bem mais barato, mas muda a mecânica principal — os dois jogadores comitariam às cegas e resolveriam simultaneamente, em vez de reagir ao vivo à jogada do oponente. Essa decisão precisa ser tomada antes de qualquer UI de combate em rede.',
      },
    },
    blog: {
      pageTitle: 'Blog',
      pageSubtitle:
        'Devlogs, notas técnicas e atualizações de progresso — incluindo a série /game-develop, que acompanha um card game de luta da arquitetura aos testes de jogabilidade.',
      emptyState: 'Nenhum post publicado ainda. Volte em breve.',
      backLink: '← Voltar ao blog',
      notTranslatedNote: 'Este post ainda não tem tradução em português — exibindo a versão em inglês.',
    },
  },
  en: {
    menu: {
      home: 'Home',
      about: 'About',
      challenges: 'Challenges',
      gameDev: 'Game Dev',
      blog: 'Blog',
      contact: 'Contact',
    },
    banner: {
      greeting: "Hi, I'm",
      role: 'Full Stack Web Developer',
      descriptionParts: [
        'Full Stack Developer with 3 years of experience in integrations, APIs in ',
        { highlight: 'NestJS/Node' },
        ' and interfaces in ',
        { highlight: 'React/Next' },
        '.',
      ],
      resumeBtn: 'Resume',
    },
    about: {
      title: 'About Me',
      paragraphs: [
        'Full Stack Developer with 3 years of experience in data-driven technology solutions, specialized in systems integration and building robust APIs. I currently play a key role delivering strategic dashboards and decision-making analytics tools at Grupo Brasileiro.',
        'I combine technical expertise in backend (NestJS, Node.js) and frontend (React, Next.js) with skills in managing complex databases (Oracle, PostgreSQL) and modern DevOps practices. My previous background in sales built strong communication, fast problem-solving, and a genuine customer focus.',
      ],
      stacksTitle: 'Stacks & Tools',
    },
    challenges: {
      title: 'Challenges & Experience',
      subtitle: 'Real-world scenarios in migrations, corporate architecture, and pragmatic problem-solving.',
      items: [
        {
          title: 'Complex Reports & SQL Queries',
          shortDesc: 'Search optimization and structured joins across 7 Oracle tables.',
          fullDesc: 'Replicate a sales report by pulling data directly from an Oracle database with no defined rules for where to source it, and dependent on third-party procedures. The solution took heavy research, testing, and building complex queries combining 7 tables via JOINs, INNER JOINs, LEFT JOINs, and robust filters to align the business rules with the final report.',
          techs: ['Oracle SQL', 'Data Analysis'],
        },
        {
          title: 'System Migration (Business Rules & ETL)',
          shortDesc: 'Full platform transition, from the UI down to the database, via Apache Airflow.',
          fullDesc: 'The migration required overcoming three challenges: 1) I refactored legacy access logic (previously handled only on the frontend) for secure, corporate-grade integration with Keycloak. 2) I built an ETL pipeline with Apache Airflow on AWS to migrate data from on-premise databases, normalizing tables from camelCase to snake_case and mapping IDs across new data models. 3) I improved system performance by moving critical calculations — previously scattered across the interface/backend — into lean database triggers.',
          techs: ['PostgreSQL', 'Airflow', 'ETL', 'Triggers'],
        },
        {
          title: 'Cloud Migration (On-Premise to AWS EC2)',
          shortDesc: 'Docker adoption for 30+ services and automated backup scripting.',
          fullDesc: 'Planned and migrated just over 30 internal services (APIs, frontends, and databases) from on-premise environments to AWS EC2. I wrote Shell scripts on Ubuntu tied to cron jobs to run dual daily backups straight to Amazon S3. Services that ran bare-metal (PM2/Node) were fully dockerized, including writing Dockerfiles, Compose configs, and pushing images to Docker Hub.',
          techs: ['AWS EC2', 'AWS S3', 'Docker', 'Shell Script', 'Linux'],
        },
        {
          title: 'Keycloak Rollout (NestJS Guards)',
          shortDesc: 'Full permission-flow mapping, cache optimization, and native endpoint integration.',
          fullDesc: "A challenge focused on mastering Keycloak's scopes and mapping user credentials for exposure via JSON Web Tokens. Since access permissions were mission-critical, I debugged bottlenecks where caching excessive claims was breaking the browser. The fix involved consuming Keycloak's own native endpoint to dynamically validate authorization on every logged-in session, fully shielding the NestJS backend routes.",
          techs: ['NestJS', 'Keycloak', 'Authentication', 'JWT'],
        },
      ],
    },
    contact: {
      title: 'Contact',
    },
    gameDevelop: {
      hero: {
        title: 'Building a Fighting-Style Card Game',
        description:
          "A card game where every character is built from two fighting styles chosen out of ten — boxing, wrestling, karate, BJJ, and more — each with its own authentic progression system. Combat is turn-based with a twist: an instant defense lets you react to an opponent's move, paid out of the same shared stamina pool you'll need for your own next turn.",
        cta: 'Read the devlog',
      },
      architectureTitle: 'Architecture',
      architectureSubtitle:
        "The single biggest technical risk isn't the cards — it's keeping ten genuinely different progression systems from turning into ten times the code. The plan leans on Unity ScriptableObjects and the Strategy pattern to keep that variety in data, not code.",
      architecture: [
        {
          title: 'Data-driven cards',
          desc: 'CardDefinition ScriptableObjects hold identity only (id, style, cost, rarity, tier). Effects are polymorphic — a list of CardEffect objects (DamageEffect, PercentDamageReductionEffect, ...) each implementing Apply(ctx), so new effect types slot in without touching the card schema.',
        },
        {
          title: 'Ten styles, three evaluators',
          desc: 'Every fighting style is an ordered list of GradeDefinitions (belts, records, ranks — just data). An IGradeProgressionEvaluator strategy collapses ten bespoke advancement systems into three or four reusable archetypes: win-count, time-and-test, and record-by-weight-class.',
        },
        {
          title: 'Interruptible turn state machine',
          desc: 'Combat resolution is a State pattern — AwaitingAction → ActionDeclared → ReactionWindow → ResolvingEffects → TurnEnd — with instant defense as an observer intercepting the declare-to-resolve transition. The same interrupt point is where networked play would eventually hook in.',
        },
      ],
      progressTitle: 'Progress',
      progress: [
        { done: true, text: 'Architecture defined: data-driven cards, styles, and grade evaluators' },
        { done: true, text: 'Combat rules hand-simulated over 4 manual rounds (shared stamina + instant defense)' },
        { done: false, text: 'Build the automated combat simulation harness (headless C#, Edit Mode tests)' },
        { done: false, text: 'Answer: does reacting second actually win more often?' },
        { done: false, text: 'Lock the PvP networking model before touching combat UI' },
      ],
      callout: {
        title: 'Open question: what does PvP feel like?',
        desc: "Real-time PvP with an authoritative server makes the reaction window feel instant but costs the most to build. Asynchronous PvP is far cheaper but changes the core mechanic — both players would commit blind and resolve simultaneously instead of reacting live to what the opponent plays. That call has to land before any networked combat UI gets built.",
      },
    },
    blog: {
      pageTitle: 'Blog',
      pageSubtitle:
        'Devlogs, technical write-ups and progress notes — including the /game-develop series tracking a fighting-style card game from architecture through playtesting.',
      emptyState: 'No posts published yet. Check back soon.',
      backLink: '← Back to blog',
      notTranslatedNote: "This post isn't translated to Portuguese yet — showing the English version.",
    },
  },
};
