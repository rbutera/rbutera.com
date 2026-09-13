# Design QA

final result: blocked

Source visual truth: `docs/design/selected-direction.png`, the second displayed concept. Desktop and mobile compositions share one reference sheet. Rai subsequently requested a full Chaching feature before easyJet via Focused Labs.

Implementation: static Astro page in `src/pages/index.astro`, production output in `dist`. No browser-rendered implementation screenshot is available. The approved content and visual styles were preserved during the migration; native scripts replace React's menu and dialog handlers.

## Blocker

The production build succeeds, but the local preview server cannot bind `127.0.0.1:4173`: the session returns `listen EPERM`. A self-contained offline HTML preview was then prepared in `/private/tmp/rbutera-portfolio-preview.html`; the in-app browser rejected its file URL under its URL policy. No bypass was attempted.

Rechecked after the Astro migration: `pnpm dev --host 127.0.0.1 --port 4173` exited before becoming ready. No running preview process remains. A clean frozen-lockfile offline installation and build/tests passed in `/private/tmp/rbutera-astro-clean.UPr4mk`, and the main checkout also passed under Node 24.20.0, matching CI's Node major. These verify static output, not browser rendering or interactions.

Viewport, implementation pixel dimensions, device density, matched-state screenshots, full-view comparisons, and focused visual comparisons are unavailable. Browser interaction and console checks remain unverified. This is not a visual pass.

## Required visual checks

- Typography: compare headline weight, wrapping, and tracking with the selected reference at desktop and 390px mobile.
- Layout: check the split hero, project spacing, navigation at narrow widths, and absence of horizontal overflow at 320px.
- Color: confirm pink/blue balance and text contrast in the actual renderer.
- Imagery: confirm generated hero crop, screenshot legibility, mobile image cropping, and image dialog sizing.
- Copy: confirm approved work order and verify personal positioning with Rai. Commercial claims are CV-derived. Product captures are existing marketing assets, not fresh live captures.

## Interaction checks still required

Open/close mobile navigation, Escape and focus restoration, internal anchors below the sticky header, screenshot dialogs by keyboard and pointer, email link, product links, scroll-linked motion, and reduced-motion behavior.

## Comparison history

No visual comparison was possible. No P0/P1/P2 finding is claimed resolved through screenshots. Run the local server in a session that permits it, capture desktop and mobile, compare against the source sheet, then fix visible issues before setting this report to passed.
