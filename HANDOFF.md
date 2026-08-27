# Handoff: Entrena con Ciencia — Design System

## Overview

Sistema de diseño del canal **Entrena con Ciencia (ECC)**: fitness y nutrición basados en evidencia,
en español neutro LATAM. El producto real del canal es contenido short-form vertical (Reels, Shorts,
TikTok) de 60–90 s más las guías descargables que se piden por comentario ("comenta PESO", "comenta
PROTE"). Todo el sistema gira sobre una promesa: cada afirmación se rastrea a un estudio real citado
por PMID.

Este bundle contiene el sistema completo: tokens CSS, 17 componentes React, 22 cards de fundamentos y
dos UI kits (contenido social y sitio del canal).

## Cómo usarlo en Claude Code

El zip descargado **es** el sistema completo, y ya es un **Agent Skill** válido: `SKILL.md` está en la
raíz con su front-matter.

```bash
unzip entrena-con-ciencia-design-system.zip -d ecc-ds

# como skill de proyecto
mkdir -p .claude/skills/entrena-con-ciencia-design
cp -r ecc-ds/* .claude/skills/entrena-con-ciencia-design/

# o como skill personal
cp -r ecc-ds ~/.claude/skills/entrena-con-ciencia-design
```

Luego invócalo por nombre (`entrena-con-ciencia-design`) o simplemente pide un diseño de ECC.

`SKILL.md` apunta a `README.md`; en este proyecto el archivo se llama `readme.md` (minúsculas). En
macOS da igual, pero en Linux el filesystem es sensible a mayúsculas: si el skill no encuentra la guía,
renombra el archivo o crea un enlace (`ln -s readme.md README.md`).

También sirve como carpeta de trabajo suelta: abre Claude Code en ella y pide cambios directos a los
tokens o a los componentes.

## About the Design Files

Los archivos de este bundle son **referencias de diseño escritas en HTML/JSX** — prototipos que fijan
el aspecto y el comportamiento pretendidos, no código de producción para copiar tal cual. Los
componentes son deliberadamente cosméticos: estilos inline sobre custom properties, sin build, sin
dependencias más allá de React.

El trabajo al llevarlo a una app real es **recrear estos diseños en el entorno existente del
codebase** (React, Next, Vue, SwiftUI, nativo) con sus patrones y librerías establecidos. Si no hay
entorno todavía, elige el framework adecuado e implementa ahí. Lo que **sí** debe viajar literal son
los valores: hex, tamaños de tipo, ejes variables, radios, sombras y las reglas de contraste.

## Fidelity

**Alta fidelidad.** Colores, tipografía, espaciado, estados y transiciones son definitivos y están
tokenizados. Recrear pixel-perfect usando las librerías del codebase destino.

Dos excepciones conocidas, documentadas abajo en CAVEATS: las fuentes son sustitutos de Google Fonts
(no se entregaron binarios de marca) y no hay fotografía — los thumbnails son lienzos tipográficos.

---

## Design Tokens

Punto de entrada único: `styles.css`, que solo contiene `@import`s. Todo lo demás vive en `tokens/`.

### Color — navy (base de marca, del fondo del isotipo)

| Token | Hex | Uso |
|---|---|---|
| `--navy-975` | `#060C18` | suelo de bloques de evidencia, tinta sobre amarillo |
| `--navy-950` | `#0B1425` | `--surface-black`, `--text-strong` |
| `--navy-900` | `#122340` | `--surface-deep` |
| `--navy-850` | `#172C50` | `--surface-card-dark` |
| `--navy-800` | `#1B3560` | hover de primary |
| `--navy-700` | `#224277` | **color de marca**, `--brand-primary` |
| `--navy-600` | `#2C5391` | — |
| `--navy-500` | `#3A67AE` | — |
| `--navy-400` | `#6E8FC8` | — |
| `--navy-300` | `#A9BEDD` | — |
| `--navy-200` | `#D3DEEE` | `--border-strong` |
| `--navy-100` | `#E7EEF8` | `--surface-sunken` |
| `--navy-050` | `#F2F6FC` | `--surface-inset`, hover ghost |
| `--navy-025` | `#F8FAFD` | `--surface-page` |

### Color — cyan (trazo del isotipo)

`--cyan-200 #C7F6FF` · `--cyan-300 #9AF1FE` · `--cyan-400 #6DCDF2` (color del isotipo) ·
`--cyan-500 #3EA9D6` · `--cyan-600 #1F7CA8` (`--text-link`) · `--cyan-700 #155C7F`

### Color — amarillo (evidencia; color entregado por la marca)

`--gold-300 #FFD54A` · **`--gold-400 #FFC300`** · `--gold-500 #E0A800` · `--gold-600 #B88600` ·
`--gold-700 #8A6300`

**Regla crítica — el amarillo cambia de comportamiento según el fondo:**

- **Sobre navy es texto.** `#FFC300` sobre `--navy-900` = 9.7:1; sobre `--navy-950` = 11.4:1. Ahí van
  las cifras hero, la palabra clave del cover y los titulares resaltados.
- **Sobre claro es relleno, nunca texto.** Amarillo sobre blanco = 1.61:1; sobre `--surface-page` =
  1.54:1. Oscurecerlo hasta que se lea lo convierte en mostaza. El gesto correcto es
  `.ecc-mark` (relleno `#FFC300` + tinta `--navy-975`, 12.2:1) o `.ecc-underline` (texto navy con
  banda amarilla baja).
- `--accent-evidence-deep` (`--gold-600`, 3.1:1 sobre claro) y `--gold-700` existen **solo para
  filetes, bordes de 2–3 px y hairlines**. Nunca como color de texto.
- `StatFigure` con `onDark={false}` y `tone="evidence"` aplica esta regla automáticamente.

### Color — coral (mito)

`--coral-300 #FFA294` · `--coral-400 #FF6650` · `--coral-500 #DE3B26` · `--coral-600 #A82A19`
Exclusivo de la creencia falsa. Nunca decorativo.

### Color — texto (toda la escala pasa AA 4.5:1)

| Token | Hex | Ratio sobre `--surface-page` |
|---|---|---|
| `--text-strong` | `#0B1425` | 17.6:1 |
| `--text-body` | `#2A3B57` | 10.8:1 |
| `--text-muted` | `#4B6182` | 6.0:1 |
| `--text-faint` | `#5D7396` | 4.6:1 |
| `--text-link` | `#1F7CA8` | 4.5:1 |

Sobre navy: `--text-on-dark #FFFFFF` · `--text-on-dark-muted #BACDE6` · `--text-on-dark-faint #7C97BE`.

`--text-faint` es el **piso** de contraste, no un gris decorativo: si un metadato necesita ser más
tenue, se reduce su tamaño, no su contraste.

### Tipografía

Tres familias variables (Google Fonts; ver CAVEATS):

| Rol | Familia | Uso |
|---|---|---|
| Display | **Bricolage Grotesque** 700–800, eje `wdth` | covers 74–138 px, h1–h2, cifras hero, wordmark |
| Interfaz y cuerpo | **Instrument Sans** 400–700 | h3–h4, párrafos 18/16/14, botones, nav |
| Datos | **JetBrains Mono** 400–600 | PMID, n, dosis, rótulos `.ecc-label`, "con Ciencia" del lockup |

Lo que define el carácter tipográfico es **el eje de ancho**: el condensado de los covers es real, no
otra familia. Tres ajustes fijos vía `font-variation-settings`:

- `--vf-cover` → `wdth 76, opsz 96` — covers y cifras hero (clase `.ecc-cover`)
- `--vf-display` → `wdth 84, opsz 72` — **h1 y h2 en `base.css`**, más el wordmark
- `--vf-heading` → `wdth 92, opsz 24` — h3, h4 y titulares de interfaz

`h1,h2` y `h3,h4` son reglas separadas: agrupar las cuatro dejaba a los titulares display con
`opsz 24`, un eje óptico de interfaz aplicado a un titular de 46 px.

Escala: cover 138/100/74 · display 64 · h1 46 · h2 33 · h3 24 · h4 19 · cuerpo 18/16/14 · caption 13 ·
micro 11.
Interlineado: cover .86 · tight 1.02 · snug 1.22 · body 1.58.
Tracking óptico (más grande = más cerrado): cover −.022em · display −.018em · tight −.012em · body 0 ·
label +.15em. Cifras siempre tabulares (`.ecc-num`).

**Tipo en lienzos de 1080 px:** los componentes traen tamaños de pantalla. En Reels y carrusel hay que
pasarles `scale` (`StudyMeta scale={2.4}`, `MythBuster scale={2.3}`) o el texto queda ilegible.

### Espaciado

Escala 4 px: `--space-1` 4 · `-2` 8 · `-3` 12 · `-4` 16 · `-5` 20 · `-6` 24 · `-8` 32 · `-10` 40 ·
`-12` 48 · `-16` 64 · `-20` 80 · `-24` 96 · `-28` 112 · `-32` 128 · `-36` 144 · `-40` 160.
Ritmo: `--pad-card` 24 · `--gap-stack` 16 · `--gap-inline` 8 · **`--gap-section` 96** ·
**`--gap-section-xl` 160** (corte entre actos).
Contenedor web `--container-max` 1160 px · medida de prosa 64ch.
Lienzos: Reel 1080×1920 (margen 68–76 px), post 1080×1350 (margen 90 px).

**Colapso móvil (≤768 px):** `.ecc-bento` a una columna, `.ecc-split` a una, `.ecc-cols` a dos, la
navegación en línea y el CTA de la isla ocultos, `.ecc-pad` de 32 px a 16 px. Titulares con `clamp()`.

### Radios y doble bisel

`--radius-xs` 4 · `--radius-sm` 10 · `--radius-md` 16 · `--radius-lg` 24 · **`--radius-shell` 32**
(carcasa de tarjeta) · `--radius-pill` 999. `--radius-control` y `--radius-chip` son píldora.

**Doble bisel:** carcasa con `--bezel-pad` 6 px, filo `--bezel-ring-*` y radio 32 px; núcleo con fondo
propio, realce `--bezel-core-sheen-*` y radio `calc(var(--radius-shell) - var(--bezel-pad))` = 26 px.
El radio del núcleo se calcula, no se estima: es lo que mantiene las curvas concéntricas.
`Card` lo aplica por defecto (`bezel={false}` para anidados).

### Sombras (ambientales: difusión larga y muy abierta, tintadas de navy)

```css
--shadow-sm: 0 2px 6px -3px rgba(11,20,37,.05), 0 10px 24px -12px rgba(11,20,37,.10);
--shadow-md: 0 4px 14px -6px rgba(11,20,37,.06), 0 24px 56px -20px rgba(11,20,37,.14);
--shadow-lg: 0 8px 28px -10px rgba(11,20,37,.07), 0 48px 96px -32px rgba(11,20,37,.20);
--shadow-on-dark: 0 1px 0 rgba(255,255,255,.07) inset, 0 40px 90px -40px rgba(6,12,24,.55);
--edge-top: inset 0 1px 0 rgba(255,255,255,.09);
--ring-focus: 0 0 0 3px rgba(109,205,242,.42);
```

Sin caída dura ni negro puro: la sombra sugiere aire alrededor de la pieza, no un objeto recortado.
`--edge-top` es **obligatorio** en toda superficie oscura elevada.

**Capas:** `--z-base` 0 · `--z-raised` 1 · `--z-grain` 2 · `--z-nav` 20 · `--z-overlay` 40 ·
`--z-tooltip` 60. No hay z-index arbitrarios.

### Atmósfera (regla de acabado)

**Ninguna superficie navy es plana.** `.ecc-atmos` compone: degradado `--ground-navy` + trama de 34 px
al 7 % + `--glow-cyan` arriba-izquierda + `--glow-gold` abajo-derecha. Variantes `.ecc-grid` /
`.ecc-grid-light` (solo rejilla).

**Ninguna superficie se apoya plana sobre el fondo.** Toda tarjeta va en doble bisel (ver arriba).

**Grano:** `.ecc-grain-layer`, una sola capa `position: fixed` por documento, `pointer-events: none`,
que monta `__eccGrain()`. Ruido adjunto a contenedores que scrollean fuerza repintado continuo de GPU.
Excepción: los lienzos sociales usan `.ecc-grain-canvas` (interno) porque se exportan como imagen y una
capa fija del viewport no entra en la exportación.

**Blur:** solo en elementos `fixed` o `sticky` — la isla de navegación y el menú overlay. Nunca sobre
contenido que scrollea.

Scrims de protección: `--scrim-bottom` y `--scrim-top`. Texto suelto sobre imagen: prohibido.

### Movimiento

`--dur-fast` 240 ms (controles) · `--dur-base` 400 ms (superficies/estados) · `--dur-slow` 700 ms ·
`--dur-reveal` 900 ms.
**`--ease-fluid cubic-bezier(.32,.72,0,1)`** es la curva canónica del sistema.
**`--ease-in-out` no existe**: la curva simétrica delata una transición por defecto.

Sólo se animan `transform` y `opacity`; nunca `top`/`left`/`width`/`height`. `will-change` se pone
mientras el elemento anima y se suelta al terminar (`.is-done`).

**Revelación por scroll:** `.ecc-reveal` entra desde `translateY(64px)` + `blur(12px)` + opacidad 0 y
resuelve en 900 ms; `.ecc-reveal-1…5` escalonan de 60 en 60 ms. La dispara un **IntersectionObserver**
(nunca un listener de `scroll`), y un MutationObserver recoge los nodos que React monte después —
React 18 hace commit asíncrono y una sola pasada se los perdería.

**Failsafe:** el estado oculto cuelga de `[data-ecc-motion]`, que marca `__eccReveal()` al arrancar.
Sin JS, con el JS caído o con `prefers-reduced-motion`, el contenido se ve. La animación es una mejora,
nunca un requisito para leer la página.

Sin bounces, sin parallax, sin loops.

### Estados

- **Hover**: oscurece el relleno un paso (navy-700 → navy-800; gold-400 → gold-500); en ghost aparece
  fondo `--navy-050`. Tarjetas clicables suben 4 px y pasan a `--shadow-lg`. En botones con
  `iconRight`, el círculo interno se desplaza en diagonal y crece a `scale(1.05)`. Nunca se aclara un
  sólido ni cambia el color del texto.
- **Press**: un paso más oscuro y `scale(.98)` — el control se hunde, no se desplaza.
- **Focus**: `--ring-focus` (anillo cyan 3 px). Nunca outline del navegador, nunca amarillo.
- **Disabled**: opacidad .45, `cursor: not-allowed`, sin cambio de color.

---

## Components

17 componentes. Cada carpeta trae `<Name>.jsx`, `<Name>.d.ts` (contrato de props) y
`<Name>.prompt.md` (qué es, cuándo usarlo, ejemplo).

### `components/core/`

| Componente | Notas |
|---|---|
| `Button` | píldora; variants `primary` / `evidence` / `outline` / `ghost` / `onDark`; sizes sm 40 / md 48 / lg 56 px; `iconLeft` en línea, **`iconRight` anidado en su propio círculo** al ras del padding derecho; `fullWidth` |
| `IconButton` | 32/40/48 px, píldora por defecto (`round={false}` para radio 10 px), `label` obligatorio (aria) |
| `Badge` | eyebrow en píldora (mono 10 px, tracking `.2em`); tones `evidence` / `myth` / `info` / `neutral` / `dark` / `outline` / `outlineOnDark`; máx. 2 palabras |
| `Tag` | chip de tema en pill, `active` para filtros, `onDark` |
| `Card` | **doble bisel por defecto** (`bezel={false}` para anidados); themes `light` / `dark` / `deep` / `void`; `grid`, `interactive`, `accent` (filete 3 px, solo mito/evidencia); `className` se fusiona con las clases de la carcasa |
| `Divider` | regla 1 px, con `label` rotula la sección siguiente |
| `Logo` | variants `mark` / `horizontal` / `stacked`; `theme` elige el archivo del isotipo |
| `Tabs` | subrayado cyan 2 px |

### `components/content/` — piezas propias del negocio del canal

| Componente | Notas |
|---|---|
| `StatFigure` | cifra hero del estudio; `value`, `unit`, `label`, `note`; tones evidence/myth/info; sizes sm 44 / md 72 / lg 112 / xl 160 px |
| `StudyMeta` | rejilla de metodología (n, grupos, protocolo, duración); `scale` para lienzos 1080 |
| `MythBuster` | par creencia/evidencia — el motor narrativo del canal; `layout`, `scale` |
| `PmidRef` | chip de referencia, enlaza a pubmed.ncbi.nlm.nih.gov; `pmid` o `doi` |
| `Callout` | kinds `pinned` (comentario fijado) / `note` / `limit` (limitaciones) / `practice` |

### `components/forms/`

`Input` (con `prefix`/`suffix`/`error`) · `Select` · `Checkbox` · `Switch`. Todos con variante `onDark`.

### Contrato compartido

Estilos inline sobre custom properties; sin CSS-in-JS, sin npm más allá de React. Los componentes se
compilan a un namespace global (`window.EntrenaConCienciaDesignSystem_*`) para las cards; al portarlos
a un codebase real, conviértelos a los imports normales del proyecto.

---

## UI kits (screens)

### `ui_kits/social/` — lienzos de producción

No es una recreación de Instagram: son las plantillas de marca que se exportan y suben.

| Archivo | Lienzo | Vistas |
|---|---|---|
| `ReelCover.jsx` | 1080×1920 | `question` (painpoint), `stat` (cifra), `versus` (A vs B) |
| `ReelOverlay.jsx` | 1080×1920 | `hook` (0–6 s), `study` (metodología), `stat` (resultado), `cta` (cierre) |
| `CarouselDeck.jsx` | 1080×1350 | 5 láminas: cover → mito → estudio → resultado → aplicación + CTA |
| `index.html` | — | vista interactiva de las tres plantillas |

Reglas al producir: cover de 2–5 palabras sobre el painpoint (peso, energía, verse mejor), **una sola
palabra o cifra en amarillo por lienzo**, PMID en el pie del cover y en la lámina de referencias, y
todo texto sobre fotograma con scrim o caja opaca.

### `ui_kits/web/` — sitio del canal

`SiteHeader` (**isla flotante**: píldora de vidrio despegada, punto cyan en la activa, hamburguesa que
muta a X y menú a pantalla completa con entrada escalonada; cierra con X, Escape o clic en el fondo) ·
`HomeHero` (atmósfera + revelación escalonada + tarjeta del estudio en doble bisel) · `VideoGrid`
(**bento asimétrico** de 12 columnas con filtro por tema y PMID visible) · `LeadMagnet` (captura de
correo PESO/PROTE con estado enviado) · `StudyArticle` (ficha: mito → metodología → resultado →
matices → referencias) · `SiteFooter`.

`index.html` navega entre Videos / Fichas / Guías, filtra por tema, elige guía y envía el formulario.

---

## Interactions & Behavior

| Interacción | Comportamiento |
|---|---|
| Nav del header | cambia de vista; el ítem activo lleva subrayado cyan 2 px |
| Filtros de tema | `Tag active` filtra la parrilla en cliente |
| Tarjeta de video | hover: sube 3 px + `--shadow-lg` (200 ms `--ease-out`) |
| Lead magnet | elegir PESO/PROTE, submit → estado "Enviado" con punto amarillo y opción de reenviar |
| Ficha de estudio | volver a Videos con `arrow-left` |
| Carrusel | flechas + chips numerados navegan las 5 láminas |
| Entrada de bloque | `.ecc-reveal` por IntersectionObserver: 64 px + blur 12 px → 0 en 900 ms, escalonado de 60 en 60 ms, una sola vez por elemento |

State necesario en el kit web: `page`, `filter`, `guia`, `sent`. En social: `tab`, `slide`, `overlay`.
Todo local; no hay data fetching real.

## Assets

- `assets/isotipo-ecc.png` — isotipo (átomo + mancuerna) en cyan, fondo transparente. Para fondos navy.
- `assets/isotipo-ecc-navy.png` — el mismo isotipo en cuadro navy. **Para fondos claros**: el
  transparente es cyan y se lava. `Logo` con `theme="light"` lo elige solo.
- `assets/brand-color-amarillo.png` — ficha de color entregada por la marca (#FFC300).

Ambos isotipos se extrajeron programáticamente del PNG original entregado
(`isotipo_ecc_navy_plano_1920x1080.png`): recorte al bounding box, key del fondo navy y separación del
canal alfa. No se dibujó ningún gráfico.

**Iconos: Phosphor Light**, trazo ultraligero, fijado a `2.1.1`. Llega como **fuente de iconos** desde
`tokens/fonts.css`, no como script: no hay paso de hidratación y el glifo pinta también en nodos que
React monte después.

```css
@import url("https://unpkg.com/@phosphor-icons/web@2.1.1/src/light/style.css");
```
```jsx
<i className="ph-light ph-download-simple" style={{fontSize:17}}></i>
```

En uso: `arrow-left`, `arrow-right`, `arrow-up-right`, `bookmark-simple`, `share-network`,
`dots-three`, `speaker-slash`, `envelope-simple`, `magnifying-glass`, `download-simple`, `play`,
`microscope`, `push-pin`, `check-circle`, `warning`. Tamaños 15–18 px en texto y botones, 20 px en
IconButton, 24 px en nav. Tamaño con `font-size`, color con `currentColor`, nunca amarillo.

**Unicode no se usa como icono.** Un glifo tipográfico en lugar del icono correcto (♪ por "silenciar")
es un error, no un atajo.

---

## Contenido y tono (resumen)

El detalle completo está en `README.md` § CONTENT FUNDAMENTALS. Lo esencial:

- Español neutro LATAM, **sin voseo**. Tuteo al viewer ("tú"), la marca habla en plural ("te enviamos").
- Arco fijo: creencia común → negación → estudio → resultado en cifras → recomendación → CTA.
- Painpoint antes que tecnicismo en cover, hook y titular.
- Copy en frase normal; MAYÚSCULAS solo en covers tipográficos y rótulos mono (`.ecc-label`, `.ecc-eyebrow`).
- Cifras siempre del estudio, traducidas a equivalentes cotidianos ("2 a 3 cafés").
- Citas **siempre por PMID**. Nunca fabricar un PMID. Los matices van al comentario fijado.
- Emoji solo en copy y solo este set: 📲 📈 💡 💬 🔬 👨🏽‍🔬. Nunca en interfaz.
- Nada de promesas mágicas, superlativos, urgencia ni claims médicos individuales.

---

## Files

```
readme.md                    guía completa de marca (la que lee el skill)
SKILL.md                     front-matter de Agent Skill
HANDOFF.md                   este archivo
styles.css                   entrada única; solo @imports
thumbnail.html               tile del sistema
tokens/                      fonts, colors, typography, spacing, shape, motion, base
components/core/             Button, IconButton, Badge, Tag, Card, Divider, Logo, Tabs
components/content/          StatFigure, PmidRef, StudyMeta, MythBuster, Callout
components/forms/            Input, Select, Checkbox, Switch
guidelines/                  22 cards de fundamentos (Colors, Type, Spacing, Brand)
ui_kits/social/              ReelCover, ReelOverlay, CarouselDeck + index.html
ui_kits/web/                 SiteHeader, HomeHero, VideoGrid, LeadMagnet, StudyArticle, SiteFooter
ui_kits/_ds_fallback.js      transpila los .jsx en el navegador + runtime (grano, revelación)
tools/build-bundle.mjs       regenera _ds_bundle.js y _ds_manifest.json desde los .jsx y los tokens
_ds_bundle.js                componentes compilados; lo que cargan las cards
.claude/skills/              high-end-visual-design, el skill que gobierna el acabado
```

Para ver cualquier card o kit: ábrelo directo en el navegador. `_ds_fallback.js` hace que funcionen sin
build.

### Volver a Claude Design

El proyecto ya está en el formato nativo de Claude Design: `_ds_manifest.json`, `_ds_bundle.js`,
marcadores `<!-- @dsCard ... -->` en cada preview y `source: spa`. No hace falta convertir nada; se
empuja tal cual con la herramienta `DesignSync`, que sincroniza incrementalmente (nunca reemplaza
el proyecto entero).

Requiere autorización de design-system, que **solo se puede conceder desde una sesión interactiva**:

```bash
# 1. una sola vez, en Claude Code local (no en la web)
/design-login

# 2. desde el repo, pedirle a Claude que sincronice
#    list_projects -> finalize_plan -> write_files
```

Rutas a incluir en el plan (`finalize_plan`):

```
styles.css  thumbnail.html  readme.md  SKILL.md  HANDOFF.md
_ds_bundle.js  _ds_manifest.json  _adherence.oxlintrc.json
tokens/**  components/**  guidelines/**  ui_kits/**  assets/**  uploads/**
```

Fuera del plan: `.claude/`, `node_modules/`, `tools/` y `.git/` — son andamiaje de Claude Code, no
del sistema de diseño.

Desde **Claude Code en la web** no se puede autorizar: ahí el camino es al revés, con
"Send to Claude Code Web" desde Claude Design, que siembra el proyecto en el workspace.

### Tras editar un componente

```bash
npm install --no-save @babel/core @babel/preset-react
node tools/build-bundle.mjs
```

`_ds_bundle.js` es un artefacto compilado y **gana sobre los `.jsx`**: `_ds_fallback.js` solo transpila
en el navegador si el bundle no expone `Button`. Editar un componente sin regenerar deja los kits
mostrando la versión anterior, sin ningún error visible.

---

## CAVEATS

1. **Fuentes sustituidas.** No se entregaron binarios. Bricolage Grotesque / Instrument Sans /
   JetBrains Mono se cargan desde Google Fonts (`tokens/fonts.css`). Si la marca tiene tipografías
   propias, reemplaza ese archivo por `@font-face` locales — pero conserva una familia con eje `wdth`,
   porque los covers dependen de él.
2. **Wordmark reconstruido.** El lockup ("ENTRENA / con Ciencia") es tipográfico, no el logotipo real.
   Solo se entregó el isotipo. Si existe archivo oficial, sustitúyelo y ajusta `Logo.jsx`.
3. **Sin fotografía.** Los thumbnails y fotogramas son lienzos navy con tipografía. Cuando haya
   imágenes: fotograma real de gimnasio o laboratorio, frío y contrastado, sin grano ni filtros
   cálidos, y siempre bajo scrim antes de poner texto.
4. **Iconos Phosphor Light** son una sustitución declarada, no el set oficial.
5. **Coral propuesto.** El amarillo lo dio la marca; el coral de mito es una decisión de sistema para
   separar "creencia falsa" de "hallazgo".
6. **Los estudios y PMID de los ejemplos son relleno realista, no verificados.** No reutilizar en
   contenido publicado sin pasar por verificación en PubMed.
