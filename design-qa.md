# Design QA

final result: passed

Verified 2026-09-13 after filesystem/network permissions were restored. Scope: local portfolio rendering and interactions; Cloudflare deployment is pending.

## Reference and evidence

Source: `docs/design/selected-direction.png`, the second displayed concept. Its desktop and mobile panels were compared together with implementation captures. The reference is a composition sheet rather than an exact browser viewport. Comparisons therefore use corresponding hero and project regions, not a pixel-perfect whole-sheet overlay.

Production screenshots: `docs/design/qa/desktop.png` (1280 × 720) and `docs/design/qa/mobile.png` (390 × 844), both at device pixel ratio 1. Captured from the built Astro output at http://127.0.0.1:4174. Full-page development captures were also inspected, but scroll-linked reveals make offscreen content dim in those captures; viewport captures are the retained visual evidence.

The oversized name, ruled navigation, dark ground, split desktop hero, stacked mobile hero, and pink/blue artwork follow the selected composition. Implementation typography is lighter than the concept and the mobile CTAs share a row at 390px; these are minor fidelity differences, not clipping or readability defects. Product screenshots are uncropped and open in native dialogs. Chaching has a full feature before easyJet via Focused Labs, as requested after concept selection.

## Browser checks

- No horizontal overflow at 1280px, 390px, or 320px; images loaded without broken assets.
- Mobile menu opens, closes on navigation, and closes on Escape with focus restored to its button.
- Rennet dialog opens and Escape closes it, restoring focus to its trigger. Chaching dashboard and receipt dialogs open and close through their visible controls, including at 320px.
- Internal navigation changes the expected fragment; the Chaching heading remains below the sticky header and fully opaque after scrolling.
- Product, GitHub, and email hrefs point to the intended destinations. No email was sent.
- Production browser console contained no logged errors.
- Scroll motion works in the checked browser. The reduced-motion CSS override disables animation, transitions, and smooth scrolling; OS preference emulation was not available, so that setting was verified in source only.

No P0/P1/P2 visual or interaction defects observed in this scope. Cross-browser and physical-device testing remain outside these checks.

## Build verification

`pnpm test` passed both static-output checks. GitHub Actions run 34751104037 independently passed frozen-lockfile installation, build, tests, and artifact upload under Node 24. Deployment was deliberately skipped until Cloudflare credentials are configured.
