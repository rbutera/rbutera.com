# Cloudflare Pages deployment

## Pipeline

`.github/workflows/pages.yml` installs the pinned dependencies, runs `pnpm test`, and uploads `dist/`. A separate job downloads that same artifact and deploys it with Wrangler. The production job runs only for `main`, never a pull request, and only after `CLOUDFLARE_PAGES_ENABLED` is set to `true`.

Cloudflare project name: `rbutera-com`. Production branch: `main`. Output: `dist`. This is a static Astro site with no Functions, runtime bindings, database, or adapter.

This uses Pages Direct Upload from GitHub Actions. Do not also enable Pages Git integration builds for this project, which would duplicate deployments. Cloudflare currently recommends Workers for new projects, but Pages supports this requested static deployment workflow.

## One-time setup

1. Completed: `main` is pushed to `rbutera/rbutera.com` and is the default branch. The previous `master` branch and its history remain intact.
2. In the intended Cloudflare account, create a Direct Upload Pages project named `rbutera-com`, with production branch `main`. With Wrangler authenticated, the equivalent command is `npx --yes wrangler@4.131.1 pages project create rbutera-com --production-branch=main`.
3. Create an API token with **Account → Cloudflare Pages → Edit**, restricted to that Cloudflare account. In GitHub repository Actions secrets, set `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`. Do not commit them or paste them into chat.
4. Set the GitHub Actions repository variable `CLOUDFLARE_PAGES_ENABLED` to `true`.
5. Run **Build and deploy Pages** with **Run workflow** on `main`, or push a new commit. Inspect both the build and deploy jobs. Save the Pages URL returned by Wrangler; the actual allocated hostname is authoritative.

The workflow's `production` environment can use your existing GitHub environment protections. Missing credentials fail deployment; an unset enable variable deliberately leaves it inactive while CI still runs.

## Domain cutover

Rai is managing the domain's move to Cloudflare. Keep existing DNS records, particularly mail records, when moving nameservers. After Cloudflare reports the zone active:

1. Open the Pages project → Custom domains → Set up a custom domain and add `rbutera.com`.
2. Complete Cloudflare's DNS instructions through that flow and wait for the certificate and domain status to become active. Creating a DNS record alone is not a substitute for associating the Pages custom domain.
3. If `www.rbutera.com` is wanted, add it through the same flow and configure a Cloudflare redirect to `https://rbutera.com`, preserving path and query.
4. Verify HTTPS, the home page, direct `/#chaching` navigation, screenshots, email link, and an unknown path returning HTTP 404. Canonical and sitemap URLs already use `https://rbutera.com/`.

## Checks and rollback

Before enabling deployment, inspect the local desktop/mobile preview against `docs/design/selected-direction.png`. `design-qa.md` records the completed desktop/mobile browser checks and remaining verification limits. Automated output checks do not substitute for browser testing.

For a content rollback, revert the relevant commit and push `main`; the pipeline will build and publish the reverted site. Cloudflare also exposes previous successful production deployments in the Pages dashboard. Re-run the workflow on `main` after correcting a failed deployment setup.

## Sources

- [Cloudflare Pages Astro guide](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/)
- [Direct Upload with CI](https://developers.cloudflare.com/pages/how-to/use-direct-upload-with-continuous-integration/)
- [Pages custom domains](https://developers.cloudflare.com/pages/configuration/custom-domains/)

Verified 2026-09-14: GitHub Actions secrets are configured and `CLOUDFLARE_PAGES_ENABLED=true`. [Run 34865393943](https://github.com/rbutera/rbutera.com/actions/runs/34865393943) passed both build and deployment. The production site is available at https://rbutera-com.pages.dev. Every push to `main` now builds, tests, and deploys the same tested artifact.

The active Cloudflare zone has `rbutera.com` associated with the Pages project. Its two previous proxied A records (`98.84.224.111` and `18.208.88.157`) were replaced with one proxied CNAME to `rbutera-com.pages.dev`. Other DNS records were untouched. For a hosting rollback, restore those two A records in place of the CNAME. Custom-domain validation is pending immediately after cutover.
