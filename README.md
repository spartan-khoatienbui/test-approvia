# Walling Web

## Features

- ⚡️ [Vite 5](https://vitejs.dev/) - Next Generation Frontend Tooling
- ⚛️ [React 20](https://reactjs.org/) - A JavaScript library for building user interfaces
- 💎 [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript designed with large scale applications in mind
- 🔨 [EsLint](https://eslint.org/) - JavaScript linter
- 🌀 [Prettier](https://prettier.io) - Opinionated Code Formatter
- 🐺 [Husky](https://github.com/typicode/husky) - Native Git hooks
- 📑 [Commitlint](https://commitlint.js.org/) - Linting your commits based on commit convention
- 🐜 [Ant Design](https://ant.design/) - Plenty of UI components
- 🍃 [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework packed with classes to build any web design imaginable
- 🐻 [Zustand](https://zustand-demo.pmnd.rs/) - An unopinionated, small, fast and scalable bearbones state-management solution
- 🚏 [generouted](https://github.com/oedotme/generouted) - Generated file-based routes for Vite

## Prerequisites

- **[Node.js](https://nodejs.org/en/)** (version 20+ or the latest LTS version) and **[yarn](https://yarnpkg.com/)** installed.
- Basic understanding of **[React.js](https://react.dev/learn/describing-the-ui)** concepts.

## Icons

1. Put svg file to `src/assets/icons` directory. Note that the length and width should be set to 1em.

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor"
  stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M18 6l-12 12" />
  <path d="M6 6l12 12" />
</svg>
```

2. Run command:

```bash
yarn gen-icons
```

## More

For newcomers: Please thoroughly review all documentation in the /docs folder.

3. Launch:
### Install dependencies
```bash
yarn install
```

### Start
```bash
yarn dev
```