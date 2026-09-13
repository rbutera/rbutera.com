import assert from "node:assert/strict";
import { test } from "node:test";
import { mkdtemp, readFile, rm, access } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import { build } from "esbuild";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

test("portfolio renders the agreed work order, valid anchors, and real image assets", async () => {
  const temporary = await mkdtemp(
    new URL("../.portfolio-test-", import.meta.url),
  );
  try {
    const output = `${temporary}/app.mjs`;
    await build({
      entryPoints: ["src/App.jsx"],
      outfile: output,
      bundle: true,
      platform: "node",
      format: "esm",
      jsx: "automatic",
      packages: "external",
    });
    const { App } = await import(pathToFileURL(output).href);
    const html = renderToStaticMarkup(React.createElement(App));
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
      await access(`public${source}`);
    assert.match(html, /mailto:rai@rbutera\.com/);
    assert.match(html, /aria-expanded="false"/);
    assert.equal([...html.matchAll(/<dialog /g)].length, 3);
    assert.match(
      await readFile("src/styles.css", "utf8"),
      /prefers-reduced-motion/,
    );
  } finally {
    await rm(temporary, { recursive: true, force: true });
  }
});
