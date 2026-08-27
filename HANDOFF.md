# Handoff: Entrena con Ciencia — Design System

## Overview

Sistema de diseño del canal **Entrena con Ciencia (ECC)**: fitness y nutrición basados en evidencia,
en español neutro LATAM. El producto real del canal es contenido short-form vertical (Reels, Shorts,
TikTok) de 60–90 s más las guías descargables que se piden por comentario ("comenta PESO", "comenta
PROTE"). Todo el sistema gira sobre una promesa: cada afirmación se rastrea a un estudio real citado
por PMID.

Este bundle contiene el sistema completo: tokens CSS, 17 componentes React, 21 cards de fundamentos y
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
- `--vf-display` → `wdth 84, opsz 72` — h1, h2, wordmark (clase `.ecc-display`)
- `--vf-heading` → `wdth 92, opsz 24` — titulares de interfaz

Escala: cover 138/100/74 · display 64 · h1 46 · h2 33 · h3 24 · h4 19 · cuerpo 18/16/14 · caption 13 ·
micro 11.
Interlineado: cover .86 · tight 1.02 · snug 1.22 · body 1.58.
Tracking óptico (más grande = más cerrado): cover −.022em · display −.018em · tight −.012em · body 0 ·
label +.15em. Cifras siempre tabulares (`.ecc-num`).

**Tipo en lienzos de 1080 px:** los componentes traen tamaños de pantalla. En Reels y carrusel hay que
pasarles `scale` (`StudyMeta scale={2.4}`, `MythBuster scale={2.3}`) o el texto queda ilegible.

### Espaciado

Escala 4 px: `--space-1` 4 · `-2` 8 · `-3` 12 · `-4` 16 · `-5` 20 · `-6` 24 · `-8` 32 · `-10` 40 ·
`-12` 48 · `-16` 64 · `-20` 80 · `-24` 96 · `-32` 128.
Ritmo: `--pad-card` 24 · `--gap-stack` 16 · `--gap-inline` 8 · `--gap-section` 80.
Contenedor web `--container-max` 1160 px · medida de prosa 64ch.
Lienzos: Reel 1080×1920 (margen 68–76 px), post 1080×1350 (margen 90 px).

### Radios (pasos impares, a propósito)

`--radius-xs` 3 · `--radius-sm` 7 (controles) · `--radius-md` 11 · `--radius-lg` 18 (tarjetas) ·
`--radius-xl` 26 (bloques de lienzo) · `--radius-pill` 999. Nada más redondo que 26 px.

### Sombras (dos capas: contacto corto + difusión larga, tintadas de navy)

```css
--shadow-sm: 0 1px 1px rgba(11,20,37,.04), 0 2px 6px -2px rgba(11,20,37,.09);
--shadow-md: 0 2px 4px -1px rgba(11,20,37,.07), 0 12px 28px -8px rgba(11,20,37,.15);
--shadow-lg: 0 4px 8px -2px rgba(11,20,37,.09), 0 28px 56px -18px rgba(11,20,37,.26);
--shadow-on-dark: 0 1px 0 rgba(255,255,255,.06) inset, 0 32px 64px -28px rgba(0,0,0,.72);
--edge-top: inset 0 1px 0 rgba(255,255,255,.09);
--ring-focus: 0 0 0 3px rgba(109,205,242,.42);
```

`--edge-top` es **obligatorio** en toda superficie oscura elevada: es lo que la separa del fondo sin
un borde duro.

### Atmósfera (regla de acabado)

**Ninguna superficie navy es plana.** Un navy sólido se lee como plantilla. `.ecc-atmos` compone:
degradado `--ground-navy` + trama de 34 px al 7 % + `--glow-cyan` arriba-izquierda + `--glow-gold`
abajo-derecha + grano al 30 % en `mix-blend-mode: overlay`. Variantes: `.ecc-grain` (solo ruido, para
superficies con su propio fondo) y `.ecc-grid` / `.ecc-grid-light` (solo rejilla).

Scrims de protección: `--scrim-bottom` y `--scrim-top`. Texto suelto sobre imagen: prohibido.

### Movimiento

`--dur-fast` 140 ms (controles) · `--dur-base` 200 ms (superficies/estados) · `--dur-slow` 340 ms ·
`--dur-reveal` 560 ms.
`--ease-out cubic-bezier(.2,.8,.2,1)` por defecto · `--ease-entrance cubic-bezier(.16,1,.3,1)`.
Sin bounces, sin parallax, sin loops. El único gesto orquestado es la entrada escalonada `.ecc-rise`
+ `.ecc-rise-1…4` (retardos 60/130/200/270 ms, `translateY 10px → 0`), una vez por vista, en el hero,
nunca en listados. Respeta `prefers-reduced-motion`.

### Estados

- **Hover**: oscurece el relleno un paso (navy-700 → navy-800; gold-400 → gold-500); en ghost aparece
  fondo `--navy-050`. Tarjetas clicables suben 3 px y pasan a `--shadow-lg`. Nunca se aclara un sólido
  ni cambia el color del texto en hover de botón.
- **Press**: un paso más oscuro y `translateY(1px)`. Sin escalados.
- **Focus**: `--ring-focus` (anillo cyan 3 px). Nunca outline del navegador, nunca amarillo.
- **Disabled**: opacidad .45, `cursor: not-allowed`, sin cambio de color.

---

## Components

17 componentes. Cada carpeta trae `<Name>.jsx`, `<Name>.d.ts` (contrato de props) y
`<Name>.prompt.md` (qué es, cuándo usarlo, ejemplo).

### `components/core/`

| Componente | Notas |
|---|---|
| `Button` | variants `primary` / `evidence` / `outline` / `ghost` / `onDark`; sizes sm 36 / md 44 / lg 54 px; `iconLeft`, `iconRight`, `fullWidth` |
| `IconButton` | 32/40/48 px, `label` obligatorio (aria), `round` para controles sobre video |
| `Badge` | tones `evidence` / `myth` / `info` / `neutral` / `dark` / `outline` / `outlineOnDark`; mono mayúsculas, máx. 2 palabras |
| `Tag` | chip de tema en pill, `active` para filtros, `onDark` |
| `Card` | themes `light` / `dark` / `deep` / `void`; `grid`, `interactive`, `accent` (filete 3 px, solo mito/evidencia) |
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

`SiteHeader` (navy con blur, nav subrayado cyan, CTA amarillo) · `HomeHero` (atmósfera + entrada
escalonada + tarjeta del estudio de la semana) · `VideoGrid` (parrilla 4:5 con filtro por tema y PMID
visible) · `LeadMagnet` (captura de correo PESO/PROTE con estado enviado) · `StudyArticle` (ficha:
mito → metodología → resultado → matices → referencias) · `SiteFooter`.

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
| Entrada del hero | `.ecc-rise` escalonada 60/130/200/270 ms, una sola vez |

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

**Iconos: Lucide** vía CDN, trazo 2 px, fijado a `0.469.0`:

```html
<script src="https://unpkg.com/lucide@0.469.0/dist/umd/lucide.min.js"></script>
```

En uso: `arrow-left`, `arrow-right`, `bookmark`, `share-2`, `more-horizontal`, `volume-x`, `mail`,
`search`, `download`, `play`, `microscope`, `pin`, `check-circle-2`, `alert-triangle`. Tamaños 16–18 px
en texto y botones, 20 px en IconButton, 24 px en nav. Color = `currentColor`, nunca amarillo.
`createIcons()` sustituye el `<i>` por un `<svg>`, así que hay que re-llamarlo tras cada render que
introduzca iconos nuevos (`ui_kits/_ds_fallback.js` trae `window.__eccIcons()` con reintento).

**Unicode no se usa como icono.** Un glifo tipográfico en lugar del icono correcto (♪ por "silenciar")
es un error, no un atajo.

---

## Contenido y tono (resumen)

El detalle completo está en `README.md` § CONTENT FUNDAMENTALS. Lo esencial:

- Español neutro LATAM, **sin voseo**. Tuteo al viewer ("tú"), la marca habla en plural ("te enviamos").
- Arco fijo: creencia común → negación → estudio → resultado en cifras → recomendación → CTA.
- Painpoint antes que tecnicismo en cover, hook y titular.
- Copy en frase normal; MAYÚSCULAS solo en covers tipográficos y rótulos mono `.ecc-label`.
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
guidelines/                  21 cards de fundamentos (Colors, Type, Spacing, Brand)
ui_kits/social/              ReelCover, ReelOverlay, CarouselDeck + index.html
ui_kits/web/                 SiteHeader, HomeHero, VideoGrid, LeadMagnet, StudyArticle, SiteFooter
ui_kits/_ds_fallback.js      transpila los .jsx en el navegador + helper de iconos
_ds_bundle.js                componentes compilados; lo que cargan las cards
```

Para ver cualquier card o kit: ábrelo directo en el navegador. `_ds_fallback.js` hace que funcionen sin
build.

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
4. **Iconos Lucide** son una sustitución declarada, no el set oficial.
5. **Coral propuesto.** El amarillo lo dio la marca; el coral de mito es una decisión de sistema para
   separar "creencia falsa" de "hallazgo".
6. **Los estudios y PMID de los ejemplos son relleno realista, no verificados.** No reutilizar en
   contenido publicado sin pasar por verificación en PubMed.
