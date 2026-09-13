# Portfolio design brief

Updated 2026-09-13.

## Purpose and audience

The 2026 refresh of Rai Butera's online CV and portfolio. Help a visitor understand Rai's engineering judgment, inspect evidence of his work, and make contact.

Working assumption pending Rai's answer: senior and lead engineering hiring teams are the primary audience. Consulting clients and product collaborators are secondary.

Draft positioning: senior engineer and former tech lead building products and tools that make complex software work easier to ship and review. Agent-driven development is a distinctive thread, supported by broader commercial delivery experience.

## Visual direction

Rai explicitly requested a close adaptation of https://mistral.ai/ with blue and pink replacing orange.

Observed on the live desktop homepage: near-black and charcoal panels, oversized off-white sans-serif type, thin grid borders, mostly square geometry, a split hero, pixel artwork, large image-led stories, and substantial product chapters. Navigation remained at the top during scrolling. A vertical product navigation rail appeared alongside the chapters.

Retain these proportions, graphic density, and chapter pacing. Adapt the navigation to Work, Experience, About, and Contact. Replace enterprise product categories with personal work and evidence. Use original portfolio imagery and motifs rather than Mistral's logo or mascot.

Proposed palette, not sampled from the reference: ink #101014, panel #19191F, paper #F5F5F0, electric blue #4278FF, pink #F477BA. Treat blue and pink as distinct blocks and highlights. Validate text contrast when implementing.

The live reference was inspected at several scroll positions. Exact animation timing, easing, and scroll-linked transformations have not been measured. Before implementation, capture the chosen opening transition closely. Proposed portfolio motion: a blue/pink opening composition, deliberate chapter reveals, and an active project indicator. Keep ordinary scrolling, readable static content, and reduced-motion support.

## Content and evidence

These are CV-derived claims, not independently verified outcomes. Source: Rai_Butera_CVs.zip, Rai_Butera_CV_desktop.pdf pp. 1–2. The four other CV PDFs contain materially equivalent career evidence.

| Story | Evidence available | Material needed for the site |
| --- | --- | --- |
| Rennet | Local-first diff and PR review, specialised lenses, ordered review board with source-linked evidence. The sample cover letter describes daily use in its own development. | A real board capture, one concrete review example, and the product decisions behind it. |
| easyJet via Focused Labs | Production features in the first week, incremental Nx migration, shared libraries for three frontends, Playwright/MSW crash-detection gate. | A public-safe example showing a delivery or migration decision and its result. |
| LexStep | Tech Lead 2020–2025, international team, tested NestJS migration, database ETL, React adoption, AWS/Terraform infrastructure, incident ownership. | One focused migration story, Rai's responsibility, and any supported outcome. |
| Chaching | Terminal dashboard, web view, shareable receipt, cache-aware token-spend reporting. | Current screenshots and capability verification; strong secondary visual project. |

Additional source: Rai_Butera_cover_letter_sample.pdf p. 1 for Rennet's motivation. Its sample recipient is not an employer. Avoid unmeasured productivity claims, inferred degree completion, and unverified current product guarantees.

Do not put raw CV extracts or private contact details in the repository. Choose a public CV edition before offering a download.

## Page sequence

1. Rai's name, clear positioning, a short introduction, and links to selected work and contact.
2. Compact evidence strip using specific roles or achievements.
3. Rennet as a substantial project chapter with actual product imagery.
4. easyJet and LexStep stories showing delivery and leadership, with Chaching as supporting product work.
5. Concise experience timeline, personal introduction, and direct contact path.

## Next design milestone

Prepare a desktop/mobile opening and one complete Rennet chapter using real copy and imagery. Compare a faithful Mistral adaptation with two restrained variations in blue/pink balance and typography. Choose the visual direction before building the full site. A short browser motion study should test the opening transition before animation spreads across the page.

Open input: primary audience. Then gather one Rennet capture and the strongest public-safe commercial story. The user should assess the design with real evidence rather than placeholder case studies.

## Sources

- https://mistral.ai/ — live desktop visual and page-structure reference, inspected 2026-09-13.
- https://mistral.ai/brand/ — official description of the pixel illustration system.
- /Users/rai/employment/cv/Rai_Butera_CVs.zip — five CV PDFs and a sample cover letter, inspected locally.
