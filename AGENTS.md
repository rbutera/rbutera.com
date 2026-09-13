# Portfolio instructions

Rai selected the pink-led option in `docs/design/selected-direction.png`. Preserve that direction and the work order: Rennet, Chaching, easyJet via Focused Labs, LexStep. Chaching gets a full feature section. Senior/lead engineering hiring teams are the primary audience.

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build the static site with Astro in `src/pages/` and `src/components/`. Preserve the approved design. Use native browser scripts for the small interactions; no React runtime is needed. Run `pnpm test` to build and check the deployable `dist/` output. Cloudflare Pages CI/CD lives in `.github/workflows/pages.yml`; domain and credentials setup is documented in `docs/deployment.md`.
