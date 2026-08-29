# Portfolio — Anderson Lima (jubureba)

Portfólio pessoal moderno, construído com **Vite + React + TypeScript + Tailwind CSS**.

- Bilíngue (PT-BR / EN) com toggle
- Tema claro/escuro com toggle e persistência
- Animações com Framer Motion, efeito typewriter no hero
- Responsivo e acessível
- Deploy automático no GitHub Pages via GitHub Actions

## Desenvolvimento

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # gera dist/
npm run preview  # pré-visualiza o build de produção
```

## Deploy no GitHub Pages

Este projeto é servido na raiz de `https://jubureba.github.io/`.

1. Coloque o conteúdo deste projeto na raiz do repositório `jubureba.github.io`.
2. Em **Settings → Pages**, defina **Source: GitHub Actions**.
3. Faça push na branch `main`. O workflow em `.github/workflows/deploy.yml`
   builda o projeto e publica automaticamente.

O workflow copia `index.html` para `404.html` (fallback de SPA) e cria
`.nojekyll` para o GitHub Pages servir a pasta `assets/` corretamente.

## Estrutura

```
src/
  components/   Header, Controls, Reveal, icons
  context/      ThemeContext, LanguageContext
  data/         profile.ts (links, avatar)
  hooks/        useTypewriter
  i18n/         translations.ts (todo o conteúdo PT/EN)
  sections/     Hero, About, Stack, Experience, Projects, Contact, Footer
```

Para atualizar textos, edite `src/i18n/translations.ts`.
Para atualizar links/avatar, edite `src/data/profile.ts`.
