# Portfólio - Lucas Rosendo

Bem-vindo ao repositório do meu Portfólio Profissional! Este projeto foi desenvolvido para demonstrar não apenas minha trajetória na tecnologia, mas as principais stacks, competências e **desafios superados** corporativos (como integrações sistêmicas, migrações na nuvem e criação estrutural de Bancos de Dados Complexos).

## 🚀 Tecnologias Utilizadas
O portfólio roda em **Next.js (App Router)**, exportado como site 100% estático (`output: 'export'`) para publicação no GitHub Pages, com uma UI focada em *Glassmorphism*, Dark Mode e animações de alto nível.

- **Next.js 16** (App Router, Static Export)
- **React 19**
- **Framer Motion** (Micro-interações, Scroll Animations e componentes fluídos)
- **Lucide React / React Icons** (Iconografia consistente via SVGs)
- **CSS3** Variáveis Nativas e Flexbox/Grid
- **gray-matter + remark** (pipeline de conteúdo Markdown/MDX para o blog)

## 🔥 Destaques do Projeto
1. **Design System "Wow"**: Tema escuro contrastando com acentuações luminosas, *backdrop-filters* que promovem o efeito vidro (Glassmorphism) nos cartões e Menu.
2. **Experiência do Usuário (UX)**: Interações que promovem engajamento (escala, sombras expansivas), botões táteis e navegação horizontal natural no Contato.
3. **Desafios Superados**: A seção de Portfólio antigo foi refeita do zero sob o componente `<Challenges />`, apresentando um formato "Acordeão Interativo" (Accordion) que comporta textos densos focados em resolução de problemas reais de DevOps, ETL, AWS e NestJs, garantindo design limpo sem sacrificar o nível técnico demonstrado.
4. **`/game-develop`**: página de acompanhamento de um projeto pessoal paralelo — um card game de luta — com destaques de arquitetura e progresso.
5. **`/blog`**: devlogs e notas técnicas, publicados em Markdown/MDX a partir de `src/content/blog`.

## 🛠️ Como Executar Localmente

### Pré-requisitos
Ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

### Passos
1. Clone o repositório:
```bash
git clone https://github.com/lucasrosendo/portfolio.git
```
2. Acesse a pasta do projeto e instale as dependências:
```bash
cd portfolio
npm install
```
3. Inicie o Servidor de Desenvolvimento:
```bash
npm run dev
```
Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o projeto.

## 📦 Build e Deploy (Produção)
`next build` gera o site estático em `out/` (não em `build/`, como no antigo Create React App):
```bash
npm run build
```
Para publicar no GitHub Pages (branch `gh-pages`, mesmo mecanismo de antes, agora apontando para `out/`):
```bash
npm run deploy
```
O site é publicado como *project page* em `https://lucasrosendo.github.io/portfolio`, por isso `next.config.mjs` define `basePath`/`assetPrefix: '/portfolio'`.

## ✍️ Novo post no blog
1. Crie um arquivo em `src/content/blog/<slug>.mdx`.
2. Preencha o frontmatter: `slug`, `title`, `date`, `author`, `tags`, `coverImage` (opcional), `excerpt`, `readingTime`.
3. Escreva o conteúdo em Markdown abaixo do frontmatter — o post aparece automaticamente em `/blog` e em `/blog/<slug>`.

---
**Lucas Rosendo**  
Desenvolvedor Full Stack • lucasrosendo91@gmail.com
