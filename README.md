# rbutera.com

The 2026 refresh of my online CV and portfolio.

This repository contains the source for my personal website at [rbutera.com](https://rbutera.com), covering my work, projects, and experience.

React and Vite. The selected design uses pink and blue geometric artwork, large typography, and real product captures. Featured work appears in this order: Rennet, Chaching, easyJet via Focused Labs, LexStep.

## Development

```sh
npm ci
npm run dev -- --host 127.0.0.1 --port 4173
```

`npm run build` produces the static site in `dist/client`. `npm test` checks the rendered content, section links, asset availability, and bundled hosting adapter.

The page includes a mobile navigation menu, native image dialogs, scroll-linked artwork and section reveals where supported, and a reduced-motion fallback. Assets are served locally.

See [the design brief](docs/design-brief.md) and [QA status](design-qa.md). Browser verification is currently blocked by this agent session's local-server and browser-file restrictions.
