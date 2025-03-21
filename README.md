# Template Web

## Features

- ⚡️ [Vite 5](https://vitejs.dev/) - Next Generation Frontend Tooling
- ⚛️ [React 20](https://reactjs.org/) - A JavaScript library for building user interfaces
- 💎 [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript designed with large scale
  applications in mind
- 🔨 [EsLint](https://eslint.org/) - JavaScript linter
- 🌀 [Prettier](https://prettier.io) - Opinionated Code Formatter
- 🐺 [Husky](https://github.com/typicode/husky) - Native Git hooks
- 📑 [Commitlint](https://commitlint.js.org/) - Linting your commits based on commit convention
- 🐜 [Ant Design](https://ant.design/) - Plenty of UI components
- 🍃 [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework packed with classes to build any web design
  imaginable
- 🐻 [Jotai](https://jotai.org/) - An unopinionated, small, fast and scalable bearbones state-management
  solution
- 🚏 [Tanstack Router](https://tanstack.com/router/latest) - Generated file-based routes for Vite

## Prerequisites

- **[Node.js](https://nodejs.org/en/)** (version 20+ or the latest LTS version) and **[yarn](https://yarnpkg.com/)**
  installed.
- Basic understanding of **[React.js](https://react.dev/learn/describing-the-ui)** concepts.

## Folder structure

```
scripts/                    # Scripts for generating files
├── gen-api/
│   ├── api-name.json
│   └── excluded.json
└── gen-icon.js
src/                        # Source files
├── __generated__/          # Generated files from script yarn gen-api
│   └── api/
│       ├── hooks
│       └── types
├── assets                  # Static files
├── configs                 # Configuration files
├── modules/                # Modules
│   ├── auth/               # Each module has its own files, avoid importing from other modules
│   │   ├── constants
│   │   ├── hooks
│   │   ├── services
│   │   ├── stores
│   │   └── types
│   ├── dashboard/
│   │   ├── components
│   │   ├── constants
│   │   └── utils
│   └── employees
├── routes                  # Routes from tanstack router
├── shared                  # Shared components, hooks, services, stores, types
│   └── guard/              # Guards for routes, component, etc. No UI renderers.
├── stories                 # Storybook stories
├── styles                  # Global styles
├── tests                   # Test files
├── main.tsx
└── routeTree.gen.ts        # Generated file from tanstack router
```

## Icons

1. Put svg file to `src/assets/icons` directory. Note that the length and width should be set to 1em.

```svg

<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor"
     stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M18 6l-12 12"/>
    <path d="M6 6l12 12"/>
</svg>
```

2. Run command:

```bash
yarn gen-icons
```

## More

For newcomers: Please thoroughly review all documentation
in [Team's Notion](https://www.notion.so/c0x12c/Frontend-convention-1ad01fb05bf180cc8560f315f9b01fc9?pvs=4) and
investigate components by running storybook server.

### Install dependencies

```bash
yarn install
```

### Start

```bash
yarn dev
```

### Documentation

Checkout storybook server to see all components and communication with teams.

```bash
yarn storybook
```
