# rbutera.com

The 2026 refresh of Rai Butera's online CV and portfolio, built with Astro and deployed as static HTML to Cloudflare Pages.

Pink-led geometric artwork, large typography, and real product captures. Featured work: Rennet, Chaching, easyJet via Focused Labs, then LexStep.

## Development

Requires Node 22.12+ and pnpm 10.32.1. CI uses Node 24.

```sh
pnpm install --frozen-lockfile
pnpm dev --host 127.0.0.1 --port 4173
pnpm test
```

`pnpm test` builds the actual deployable site and checks its HTML, asset references, navigation targets, and metadata. `pnpm build` emits `dist/`; `pnpm preview` serves it locally.

Page content lives in `src/pages/index.astro`, shared product imagery in `src/components/ProductImage.astro`, styles in `src/styles.css`, and native menu/dialog behavior in `src/interactions.js`. Page content and image links work without JavaScript. No React runtime or Cloudflare server adapter is shipped.

## Deployment

The GitHub Actions workflow builds and tests every pull request and `main` push. Once Cloudflare is configured, successful `main` builds deploy their exact artifact to the `rbutera-com` Pages project. Pull requests do not receive deployment credentials or publish to production.

Follow [Cloudflare setup](docs/deployment.md) to create the Pages project, configure credentials, and activate deployment. Domain migration can happen separately.

See the [design brief](docs/design-brief.md), [asset sources](docs/design/assets.md), and [visual QA status](design-qa.md).
