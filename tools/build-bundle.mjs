#!/usr/bin/env node
/* Regenera _ds_bundle.js a partir de los .jsx del sistema.
 *
 * El bundle es lo que consumen las cards de componentes y los dos UI kits:
 * `_ds_fallback.js` solo transpila en el navegador cuando el bundle NO existe
 * o no expone Button, asi que un bundle desactualizado gana silenciosamente
 * sobre los .jsx editados. Cada vez que toques un componente, corre esto.
 *
 *   node tools/build-bundle.mjs
 *
 * Requiere @babel/core y @babel/preset-react (npm install --no-save).
 * Reproduce el formato 4 del bundle original, incluidos los sourceHashes
 * (sha256 del archivo, truncado a 12 hex).
 */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { transformSync } from '@babel/core';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const NS = 'EntrenaConCienciaDesignSystem_ad72a9';

/* El orden importa: es el orden de evaluacion dentro del IIFE, y el que
   conserva el bundle original. Componentes primero, kits despues. */
const SOURCES = [
  'components/content/Callout.jsx',
  'components/content/MythBuster.jsx',
  'components/content/PmidRef.jsx',
  'components/content/StatFigure.jsx',
  'components/content/StudyMeta.jsx',
  'components/core/Badge.jsx',
  'components/core/Button.jsx',
  'components/core/Card.jsx',
  'components/core/Divider.jsx',
  'components/core/IconButton.jsx',
  'components/core/Logo.jsx',
  'components/core/Tabs.jsx',
  'components/core/Tag.jsx',
  'components/forms/Checkbox.jsx',
  'components/forms/Input.jsx',
  'components/forms/Select.jsx',
  'components/forms/Switch.jsx',
  'ui_kits/social/CarouselDeck.jsx',
  'ui_kits/social/ReelCover.jsx',
  'ui_kits/social/ReelOverlay.jsx',
  'ui_kits/web/HomeHero.jsx',
  'ui_kits/web/LeadMagnet.jsx',
  'ui_kits/web/SiteFooter.jsx',
  'ui_kits/web/SiteHeader.jsx',
  'ui_kits/web/StudyArticle.jsx',
  'ui_kits/web/VideoGrid.jsx',
];

const sha12 = (s) => createHash('sha256').update(s).digest('hex').slice(0, 12);

const components = [];
const sourceHashes = {};
const chunks = [];

for (const path of SOURCES) {
  const raw = readFileSync(join(ROOT, path), 'utf8');
  sourceHashes[path] = sha12(raw);

  /* Los .jsx usan `import React from 'react'` y `export function X`, pero el
     bundle corre como script clasico con React global y un scope compartido.
     Se quitan los imports y se degradan los exports, igual que hace el fallback. */
  const stripped = raw
    .replace(/^import[^\n]*\n/gm, '')
    .replace(/^export function /gm, 'function ');

  const names = [...stripped.matchAll(/^function ([A-Z]\w*)/gm)].map((m) => m[1]);
  if (names.length === 0) throw new Error(`Sin componente exportado en ${path}`);
  for (const n of names) components.push({ name: n, sourcePath: path });

  const { code } = transformSync(stripped, {
    presets: [[join(ROOT, 'node_modules/@babel/preset-react'), { runtime: 'classic' }]],
    filename: path,
    babelrc: false,
    configFile: false,
    compact: false,
  });

  chunks.push(
    `\n// ${path}\n` +
      `try { (() => {\n${code}\n` +
      `Object.assign(__ds_scope, { ${names.join(', ')} });\n` +
      `})(); } catch (e) { __ds_ns.__errors.push({ path: ${JSON.stringify(path)}, ` +
      `error: String((e && e.message) || e) }); }\n`
  );
}

/* El manifiesto del encabezado lista los componentes por nombre alfabetico
   dentro de cada carpeta, que es el orden en que ya venian. */
const header = {
  format: 4,
  namespace: NS,
  components,
  sourceHashes,
  inlinedExternals: [],
  unexposedExports: [],
};

const exposure = components
  .map((c) => `\n__ds_ns.${c.name} = __ds_scope.${c.name};\n`)
  .join('');

const out =
  `/* @ds-bundle: ${JSON.stringify(header)} */\n\n` +
  `(() => {\n\n` +
  `const __ds_ns = (window.${NS} = window.${NS} || {});\n\n` +
  `const __ds_scope = {};\n\n` +
  `(__ds_ns.__errors = __ds_ns.__errors || []);\n` +
  chunks.join('') +
  exposure +
  `\n})();\n`;

writeFileSync(join(ROOT, '_ds_bundle.js'), out);

/* ── _ds_manifest.json ───────────────────────────────────────────────────
   Solo se reescriben `components` y `tokens`. El resto del manifiesto
   (cards, brandFonts, globalCssPaths, source…) se conserva tal cual: lo
   produce el editor de design systems, no este script. */

const TOKEN_FILES = [
  'tokens/colors.css',
  'tokens/typography.css',
  'tokens/spacing.css',
  'tokens/shape.css',
  'tokens/motion.css',
];

/* Taxonomia observada en el manifiesto original: el nombre del token manda
   sobre el archivo donde vive (--text-* es `font` aunque este en colors.css),
   y un marcador "@kind <x>" en el comentario que sigue a la declaracion
   gana sobre todo. */
function kindOf(name, file, marked) {
  if (marked) return marked;
  if (/^--text-/.test(name)) return 'font';
  if (/^--radius-/.test(name)) return 'radius';
  if (/^--border-w/.test(name)) return 'spacing';
  if (/^--(shadow|ring)-/.test(name)) return 'shadow';
  if (file === 'tokens/colors.css') return 'color';
  if (file === 'tokens/typography.css') return 'font';
  if (file === 'tokens/spacing.css') return 'spacing';
  if (file === 'tokens/shape.css') return 'spacing';
  return 'other';
}

const tokens = [];
for (const file of TOKEN_FILES) {
  const css = readFileSync(join(ROOT, file), 'utf8');
  /* Las declaraciones vienen apretadas, varias por linea. Se parte por `;`
     conservando el comentario @kind que sigue a cada una. */
  const re = /(--[\w-]+)\s*:\s*([^;]+);(?:\s*\/\*\s*@kind\s+(\w+)\s*\*\/)?/g;
  let m;
  while ((m = re.exec(css)) !== null) {
    tokens.push({
      name: m[1],
      value: m[2].trim(),
      kind: kindOf(m[1], file, m[3]),
      definedIn: file,
    });
  }
}

const manifestPath = join(ROOT, '_ds_manifest.json');
const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
manifest.components = components;
manifest.tokens = tokens;

/* Cards: se releen del comentario @dsCard de cada archivo. Se actualizan en su
   sitio y las nuevas se anaden al final, para no alterar el orden que ya tenia
   el manifiesto (no es alfabetico ni por ruta: lo fija el editor). */
const cardFiles = globCards();
const parsed = new Map();
for (const rel of cardFiles) {
  const head = readFileSync(join(ROOT, rel), 'utf8').slice(0, 800);
  const tag = head.match(/<!--\s*@dsCard\s+([^>]*?)-->/);
  if (!tag) continue;
  const attrs = {};
  for (const a of tag[1].matchAll(/(\w+)="([^"]*)"/g)) attrs[a[1]] = a[2];
  parsed.set(rel, { path: rel, group: attrs.group, viewport: attrs.viewport, subtitle: attrs.subtitle, name: attrs.name });
}
const kept = (manifest.cards || []).filter((c) => parsed.has(c.path)).map((c) => parsed.get(c.path));
const keptPaths = new Set(kept.map((c) => c.path));
const added = [...parsed.values()].filter((c) => !keptPaths.has(c.path));
manifest.cards = kept.concat(added);

writeFileSync(manifestPath, JSON.stringify(manifest) + '\n');

console.log(
  `_ds_bundle.js regenerado · ${components.length} componentes desde ${SOURCES.length} archivos\n` +
    `_ds_manifest.json actualizado · ${tokens.length} tokens · ${manifest.cards.length} cards` +
    (added.length ? ` (${added.length} nueva/s)` : '')
);

function globCards() {
  const out = [];
  const walk = (dir, prefix) => {
    for (const e of readdirSync(join(ROOT, dir), { withFileTypes: true })) {
      const rel = prefix ? `${prefix}/${e.name}` : e.name;
      if (e.isDirectory()) {
        if (e.name === 'node_modules' || e.name === '.git' || e.name === 'tools') continue;
        walk(join(dir, e.name), rel);
      } else if (e.name.endsWith('.card.html') || e.name === 'index.html') {
        out.push(rel);
      }
    }
  };
  walk('.', '');
  return out;
}
