# Folder structure

```
.
├── @types                                # Contain types declare with namespace
│ ├── env.d.ts
│ ├── svgr.d.ts
│ └── vite.d.ts
├── Jenkinsfile
├── README.md
├── commitlint.config.js                  # Config about commit convention
├── docs                                  # Documents
│ └── 01-folder-structure.md
├── eslint.config.js                      # Config about ESLint
├── index.html
├── lint-staged.config.js                 # Config about lint-staged
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js
├── public
├── scripts                               # Contain automated scripts
│ └── gen-icons.js
├── src                                   # Source code
│ ├── api                                 # Contain all code relative API (hooks, types)
│ │ ├── hooks
│ │ │ ├── \_useExampleInfiniteQuery.ts
│ │ │ ├── \_useExampleMutation.ts
│ │ │ └── \_useExampleQuery.ts
│ │ └── type.ts
│ ├── assets                              # Contain all static files (font, svg, images, video, ...)
│ │ └── icons
│ │    ├── error.svg
│ │    ├── google.svg
│ │    ├── index.ts
│ │    ├── info.svg
│ │    ├── success.svg
│ │    ├── warning.svg
│ │    └── x.svg
│ ├── configs                             # Configs global configs
│ │ ├── ant.config.ts                     # Config for Ant Design theme
│ │ ├── env.config.ts                     # Export ENV constant variable and add default value if needed
│ │ ├── tailwind-theme.config.ts          # Export resolved tailwind theme, use for synchronize with AntD & use for JS code if needed
│ │ └── tanstack-query.config.ts
│ ├── main.tsx                            # Entry point of application, wrapped by global provider
│ ├── modules                             # Slice application into multiple modules. Each module will have closely related source code that can be reused in other modules.
│ │ └── auth                              # Each module should have exactly the following directories: constants, services, types, hooks, stores, components.
│ │   ├── constants
│ │   │ └── auth.constant.ts
│ │   ├── services
│ │   │ ├── auth.service.ts
│ │   │ └── client.service.ts
│ │   └── types
│ │     └── auth.type.ts
│ ├── pages                                # File-based routing, more here: https://github.com/oedotme/generouted
│ │ ├── (auth)
│ │ │ ├── \_layout.tsx
│ │ │ ├── sign-in
│ │ │ │ └── index.tsx
│ │ │ └── sign-up
│ │ │ └── index.tsx
│ │ ├── (private)
│ │ │ └── \_layout.tsx
│ │ └── index.tsx
│ ├── router.ts                            # Generated file, DO NOT MODIFY!
│ ├── shared                               # Contain shared code for all application, it can be reuse cross-project. Can't import code from /modules.
│ │ ├── components
│ │ │ ├── Loading.tsx
│ │ │ └── ScreenLoading.tsx
│ │ ├── constants
│ │ │ └── app.constant.ts
│ │ ├── hooks
│ │ │ ├── useNotification.ts
│ │ │ └── useResponsive.ts
│ │ ├── stores
│ │ ├── types
│ │ │ ├── base.type.ts
│ │ │ └── error.type.ts
│ │ └── utils
│ │ └── cn.util.ts
│ ├── styles
│ │ └── global.css
│ └── tests                                # Unit test
│ ├── __mocks__
│ ├── example.test.ts
│ └── setup.ts
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```
