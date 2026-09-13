import assert from "node:assert/strict";
import { test } from "node:test";
import { readFile, access } from "node:fs/promises";

test("portfolio renders the agreed work order, valid anchors, and real image assets", async () => {
  const html = await readFile("dist/index.html", "utf8");
  assert.match(html, /Senior engineer/);
  assert.match(html, /Making code/);
  assert.doesNotMatch(html, /<astro-island|react-dom|id="root"/);
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  assert.equal(ids.length, new Set(ids).size, "section IDs must be unique");
  const order = ["rennet", "chaching", "easyjet", "lexstep"].map((id) =>
    ids.indexOf(id),
  );
  assert.ok(
    order.every(
      (position, index) =>
        position >= 0 && (index === 0 || position > order[index - 1]),
    ),
    "Rennet, Chaching, easyJet, LexStep order",
  );
  for (const [, target] of html.matchAll(/href="#([^"]+)"/g))
    assert.ok(ids.includes(target), `missing anchor ${target}`);
  for (const [, source] of html.matchAll(/src="(\/images\/[^\"]+)"/g))
    await access(`dist${source}`);
  assert.match(html, /mailto:rai@rbutera\.com/);
  assert.match(html, /aria-expanded="false"/);
  assert.equal([...html.matchAll(/<dialog /g)].length, 3);
  assert.match(
    await readFile("src/styles.css", "utf8"),
    /prefers-reduced-motion/,
  );
});

test("Pages output includes local CSS and scripts, crawl metadata, and a real 404 page", async () => {
  const html = await readFile("dist/index.html", "utf8");
  const assets = [...html.matchAll(/(?:href|src)="(\/_astro\/[^\"]+)"/g)].map(
    (match) => match[1],
  );
  assert.ok(assets.some((path) => path.endsWith(".css")));
  assert.match(
    html,
    /<script type="module">[\s\S]*showModal\(\)[\s\S]*<\/script>/,
  );
  for (const path of assets) await access(`dist${path}`);
  assert.match(html, /rel="canonical" href="https:\/\/rbutera.com\/"/);
  assert.match(await readFile("dist/404.html", "utf8"), /Nothing here/);
  assert.match(
    await readFile("dist/robots.txt", "utf8"),
    /Sitemap: https:\/\/rbutera.com\/sitemap.xml/,
  );
  assert.match(
    await readFile("dist/sitemap.xml", "utf8"),
    /<loc>https:\/\/rbutera.com\/<\/loc>/,
  );
  await access("dist/_headers");
});
