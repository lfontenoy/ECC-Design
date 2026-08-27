# Entrena con Ciencia · Design System (V2)

Sistema de diseño del canal **Entrena con Ciencia (ECC)**: fitness y nutrición basados en evidencia,
presentados por un médico, para audiencia LATAM en español neutro (país base: Perú).

El producto real del canal es **contenido short-form vertical de 60–90 s** (Reels de Instagram, Shorts
de YouTube, TikTok) más las **guías descargables** que se piden por comentario ("comenta PESO",
"comenta PROTE"). Todo el sistema está construido alrededor de una promesa: *cada afirmación se
rastrea a un estudio real, citado por PMID.* La marca no vende transformación milagrosa; vende
confianza verificable.

## Superficies representadas

| Superficie | Dónde vive | Qué es |
|---|---|---|
| Contenido social | `ui_kits/social/` | Covers de Reel (1080×1920), gráficos en pantalla y carrusel de 5 láminas (1080×1350). |
| Sitio del canal | `ui_kits/web/` | Landing con parrilla de videos, ficha de estudio y captura de guías. |

## Fuentes recibidas

- `uploads/isotipo_ecc_navy_plano_1920x1080.png` — isotipo (átomo + mancuerna) en cyan sobre navy
  plano. Única pieza gráfica entregada. Se recortó y se extrajo con fondo transparente a
  `assets/isotipo-ecc.png` y con cuadro navy a `assets/isotipo-ecc-navy.png`.
- `assets/brand-color-amarillo.png` — ficha de color entregada por la marca: **#FFC300** (RGB 255/195/0).
  Es el `--gold-400` del sistema y el único color de acento que no se derivó del isotipo.
- Skills de contenido del canal ya instaladas en el proyecto, usadas como fuente de verdad para tono,
  estructura y reglas editoriales: `ecc-guiones-shorts` (guiones), `ecc-captions-instagram`
  (descripciones), `ecc-brief-cientifico` (validación de evidencia).
- **No se entregaron:** logotipo/wordmark, archivos de fuente, fotografía de marca, capturas de las
  cuentas, código de sitio web, Figma. Todo lo visual fuera del isotipo es una propuesta construida a
  partir del isotipo y de las reglas editoriales; ver CAVEATS al final.

---

## CONTENT FUNDAMENTALS

Cómo se escribe en ECC. Las reglas salen de las skills del canal, no de convenciones genéricas.

**Idioma y persona.** Español neutro LATAM, sin voseo ("tú tienes", nunca "vos tenés") y sin
regionalismos de un solo país. Tuteo directo al viewer: **"tú", no "yo"**. La marca habla en plural
cuando se refiere a sí misma ("te enviamos la guía", "síguenos"). El registro es de médico que le
explica a un amigo, no de paper ni de coach motivacional.

**Estructura narrativa.** Toda pieza sigue el mismo arco: creencia común → negación → estudio →
resultado en cifras → recomendación práctica → CTA. Los moldes verbales son literalmente reutilizables:

- "Muchas personas creen que… Pero lo que no saben es que…"
- "La única diferencia fue que…"
- "¿El resultado?"
- "Por eso te recomiendo…"
- "Hoy te voy a explicar…" / "Te explico qué dice la ciencia" (nunca "te digo")

**Painpoint antes que tecnicismo.** En la puerta de entrada (cover, hook, titular) se habla del dolor
visible del viewer: *peso, energía, verse mejor, levantar más*. Los tecnicismos (composición corporal,
grasa vs músculo, efecto agudo) van en el cuerpo. Ejemplo aprobado: el cover
"¿Ayuno = Perder Peso Más Rápido?" gana a "¿Ayuno = Más Grasa Quemada?".

**Contraste de la tinta.** Todo token de texto pasa AA para texto pequeño (4.5:1) sobre su superficie:
sobre `--surface-page` strong 17.6 · body 10.8 · muted 6.0 · faint 4.6 · link 4.5. `--text-faint` es el
piso, no un gris decorativo: si un metadato necesita ser más tenue, se reduce su tamaño, no su contraste.

**Casing.** Copy en frase normal ("Dormir 5.5 h cambia de dónde sale el peso"). MAYÚSCULAS solo en dos
lugares: los covers/titulares tipográficos (Barlow Condensed) y los rótulos mono de 11 px
(`.ecc-label`: PARTICIPANTES, DISEÑO, DURACIÓN). Nunca una frase entera en mayúsculas dentro de un
párrafo.

**Cifras.** Siempre salen del estudio, nunca de memoria, y se traducen a equivalentes cotidianos:
"200 a 400 mg, o sea 2 a 3 cafés"; "112 g de proteína, como una pechuga grande más dos huevos".
Formato de resultado: **cifras primero, conclusión al final.**

**Longitudes.** Cover 2–5 palabras. Guion hablado ~200 palabras (techo firme 230). Caption educativo
250–350 palabras; caption SEO 80–150. Párrafos de 1 a 3 frases, mayormente sin punto final.
Sin viñetas dentro del cuerpo, sin negritas ni cursivas en captions, **sin hashtags**.

**Emoji.** Uso puntual y corto, solo este set: 📲 📈 💡 💬 🔬 👨🏽‍🔬. Aparecen casi siempre pegados al
CTA ("📲 Si quieres entrenar basándote en evidencia y no en mitos, síguenos"). Nunca emoji decorativo
en tarjetas, botones, títulos ni en la interfaz del sistema.

**CTAs canónicos.**
- "Y si quieres ver más videos como este, síguenos."
- "📲 Si quieres entrenar basándote en evidencia y no en mitos, síguenos en Entrena con Ciencia"
- "💬 Comenta PESO y te enviamos nuestra guía de déficit calórico" (pérdida de peso, dieta, cardio)
- "💬 Comenta PROTE y te enviamos nuestra guía de proteína" (proteína, timing, síntesis)

**Citas.** Siempre **PMID** (`PMID: 20921542`), DOI solo si el estudio no está en PubMed, prensa y
organismos citados como aparecen. Nunca fabricar un PMID. Los matices, dosis raras y limitaciones del
estudio van al **comentario fijado**, no al cuerpo.

**Lo que nunca se escribe.** Promesas mágicas, superlativos de marketing, cadenas especulativas
("más fuerza → más músculo garantizado"), lenguaje de urgencia, ni claims médicos individuales
(el pie de página recuerda que el contenido es informativo).

---

## VISUAL FOUNDATIONS

### Idea rectora
El isotipo ya contiene la tesis de la marca: **átomo + mancuerna**, laboratorio y gimnasio. El sistema
la extiende con un solo gesto: superficie navy con atmósfera de laboratorio, tipografía condensada de
gimnasio y un resaltador amarillo que marca el dato verificado. Nada más brilla.

La regla de acabado que gobierna todo: **ninguna superficie es plana.** Un navy sólido se lee como
plantilla; el navy de ECC siempre lleva degradado, trama de 34 px, halo cyan y una capa de grano
(`.ecc-atmos`). Y toda superficie oscura elevada lleva 1 px de luz en su borde superior
(`--edge-top`), que es lo que separa una tarjeta del fondo sin recurrir a un borde duro.

### Color
- **Navy** es el color de la marca, tomado del fondo del isotipo original: `--navy-700 #224277`.
  La escala tiene 14 pasos y baja a `--navy-975 #060C18` (el suelo de los bloques de evidencia) y sube
  a `--navy-025 #F8FAFD` como fondo de página.
- **Cyan** `--cyan-400 #6DCDF2` es el color del propio isotipo: se usa para datos, enlaces, PMID y el
  indicador de pestaña activa. Sobre navy siempre `--cyan-300`.
- **Amarillo** `--gold-400 #FFC300` es el resaltador de evidencia: la cifra del resultado, la palabra
  clave del cover, el CTA principal, el filete `.ecc-rule` que abre un bloque. Es el color entregado por
  la marca (`assets/brand-color-amarillo.png`). Regla dura: **un solo elemento amarillo por lienzo.**
- **El amarillo cambia de comportamiento según el fondo**, y esto no es negociable:
  - **Sobre navy es texto.** `#FFC300` sobre `--navy-900` da 9.7:1 (11.4:1 sobre `--navy-950`). Ahí van las cifras hero, la palabra
    clave del cover y los titulares resaltados.
  - **Sobre claro es relleno, nunca texto.** Amarillo sobre blanco da 1.61:1 (1.54:1 sobre `--surface-page`), y oscurecerlo hasta que se
    lea deja de ser amarillo (se vuelve mostaza). El gesto correcto es `.ecc-mark` (relleno `#FFC300`
    con tinta navy, como un subrayador) o `.ecc-underline` (texto navy con banda amarilla baja).
  - `--accent-evidence-deep` (`--gold-600`, 3.1:1 sobre claro) existe solo para filetes, bordes de 2–3 px
    y hairlines. **Nunca como color de texto** — tampoco `--gold-700`.
  - `StatFigure` con `onDark={false}` y `tone="evidence"` aplica esta regla solo: pasa la cifra a relleno.
- **Coral** `--coral-400 #FF6650` es exclusivo del mito o la creencia falsa. Nunca decorativo, nunca
  como color de error genérico salvo en formularios.
- Máximo dos fondos por pieza: claro (`--surface-page`) y navy (`--ground-navy`). Sin terceros tonos.
- **No hay gradientes de color a color.** Los únicos permitidos son navy → navy más oscuro
  (`--ground-navy`, `--ground-void`), los halos de baja opacidad (`--glow-cyan`, `--glow-gold`) y los
  scrims de protección.

### Tipografía
Tres familias variables, cada una con un trabajo:

| Rol | Familia | Uso |
|---|---|---|
| Cover / display | **Bricolage Grotesque** 700–800, eje `wdth` | Covers 74–138 px, h1–h2, cifras hero, el wordmark. |
| Interfaz y cuerpo | **Instrument Sans** 400–700 | h3–h4, párrafos 18/16/14, botones, nav. Medida 64ch, `leading 1.58`. |
| Datos y citas | **JetBrains Mono** 400–600 | PMID, n, dosis, duraciones, rótulos `.ecc-label` y "con Ciencia" del lockup. |

Lo que hace distinta la tipografía de ECC es **el eje de ancho**: Bricolage Grotesque es variable en
`wdth`, así que el condensado de los covers es real, no una familia aparte. Tres ajustes fijos:

- `--vf-cover` → `wdth 76, opsz 96` — covers y cifras hero (clase `.ecc-cover`).
- `--vf-display` → `wdth 84, opsz 72` — h1, h2, wordmark (clase `.ecc-display`).
- `--vf-heading` → `wdth 92, opsz 24` — titulares de interfaz.

Tracking óptico: cuanto más grande el texto, más cerrado (`-0.022em` en cover, `0` en cuerpo, `+0.15em`
en rótulos mono). Números siempre tabulares (clase `.ecc-num`). La condensada nunca se usa en párrafos;
el mono nunca se usa para texto corrido.

**Tipo en lienzos de 1080 px:** los componentes de interfaz traen tamaños de pantalla. En Reels y
carrusel hay que pasarles `scale` (`StudyMeta scale={2.4}`, `MythBuster scale={2.3}`) o el texto queda
ilegible en el móvil.

### Espaciado y layout
Escala base 4 px (`--space-1` … `--space-32`). Ritmo real: 24 px de padding de tarjeta, 16 px entre
elementos apilados, 8 px entre elementos en línea, 80 px entre secciones. Contenedor web 1160 px.
Los bloques abren con `.ecc-rule` (filete amarillo de 56×3 px) o con un rótulo `.ecc-label`, nunca con un
título suelto.
Los lienzos sociales tienen margen fijo de 64–88 px (`1080 px` de ancho). El header del sitio es el
único elemento fijo (`position: sticky`, 76 px, con blur); en los lienzos verticales el logo va fijo
arriba a la izquierda y el PMID abajo.

### Bordes, radios y tarjetas
Hairline de 1 px (`--border-subtle #DCE5F1` en claro, `rgba(255,255,255,.16)` sobre navy).
Radios en pasos impares para que no se lean como plantilla: controles 7 px, tarjetas 18 px, bloques
grandes de lienzo 26 px, chips pill. Nada más redondo que 26 px y nunca esquinas totalmente rectas en
tarjetas.
Una tarjeta clara = fondo blanco + hairline + `--shadow-sm`. Una tarjeta navy = atmósfera
(`Card theme="deep"`) + hairline translúcido + `--edge-top` + `--shadow-on-dark`, sin borde de color. El filete izquierdo de 3 px existe
(`Card accent`) pero se reserva al par mito/evidencia: no es un patrón decorativo de uso libre.

### Sombras
Tres pasos, y **cada sombra son dos capas**: un contacto corto de 1–4 px y una difusión larga de
6–56 px, ambas tintadas de navy (nunca negro puro sobre claro). `--shadow-sm` (reposo),
`--shadow-md` (formularios y elementos flotantes), `--shadow-lg` (hover de tarjeta clicable).
Sobre navy la elevación se resuelve con `--edge-top` + `--shadow-on-dark`: el filo de luz es
obligatorio, es lo que evita que la tarjeta oscura se hunda en el fondo.

### Fondos, texturas e imagen
- **Atmósfera** (`.ecc-atmos`): la superficie navy por defecto. Degradado `--ground-navy` + trama de
  34 px + `--glow-cyan` arriba a la izquierda + `--glow-gold` abajo a la derecha + grano al 30 % en
  `mix-blend-mode: overlay`. Va en heroes, covers, láminas y tarjetas `theme="deep"`.
- **Trama blueprint**: rejilla técnica de 34 px a 1 px, `rgba(154,241,254,.07)` sobre navy
  (`.ecc-grid`). Sobre fondo claro (`.ecc-grid-light`) solo en bloques sin texto.
- **Grano** (`.ecc-grain`): la capa de ruido sola, para superficies que ya tienen su propio fondo
  (footer, fotogramas de video).
- **Sin ilustración**. La marca no usa ilustración hand-drawn ni iconografía decorativa grande.
- **Fotografía**: no se entregó ninguna. Cuando exista, el criterio es fotograma real de gimnasio o
  laboratorio, frío y contrastado, sin grano ni filtros cálidos, y **siempre** bajo scrim
  (`--scrim-bottom`) o caja opaca antes de poner texto encima. Texto suelto sobre imagen: prohibido.
- **Transparencia y blur**: solo dos usos. Header del sitio (`rgba(19,37,70,.92)` + `blur(12px)`) y
  las cajas de dato sobre fotograma (`rgba(13,26,49,.82)` + `blur(8px)`). No hay glassmorphism
  decorativo.

### Movimiento
Discreto y funcional: 140 ms para controles, 200 ms para tarjetas y estados, 340 ms para entradas de
bloque. Curvas: `--ease-out cubic-bezier(.2,.8,.2,1)` por defecto, `--ease-entrance` para apariciones.
**Sin bounces, sin parallax, sin auto-animaciones en loop.**

El único gesto orquestado es la **entrada escalonada** de la vista: `.ecc-rise` más
`.ecc-rise-1…4` (560 ms, retardos de 60/130/200/270 ms, `translateY 10px → 0`). Uno por vista, en el
hero, nunca en listados. Respeta `prefers-reduced-motion`.
En video, la revelación de cifras es un corte o un fade rápido, nunca un conteo animado que distorsione
el dato.

### Estados
- **Hover** oscurece el relleno un paso (navy-700 → navy-800; gold-400 → gold-500); en variantes
  fantasma aparece un fondo `--navy-050`. Las tarjetas clicables suben 3 px y pasan a `--shadow-lg`.
  Nunca se aclara un sólido ni se cambia el color de la tipografía en hover de botón.
- **Press** oscurece un paso más y baja 1 px (`translateY(1px)`). Sin escalados.
- **Focus** anillo cyan de 3 px `--ring-focus` (nunca outline del navegador, nunca amarillo).
- **Disabled** opacidad .45 y cursor `not-allowed`, sin cambio de color.
- **Selección de texto** amarillo con tinta navy (`::selection`).

---

## ICONOGRAPHY

No se entregó ningún set de iconos, fuente de iconos ni SVG con la marca. Estado y decisión:

- **Sustitución declarada:** **Lucide** vía CDN, trazo de 2 px, esquinas redondeadas, sin relleno — es
  lo más cercano al trazo uniforme del isotipo. **Confirmar o reemplazar con el usuario.** Está cableada
  en las tres cards de componentes y en los dos `index.html` de los UI kits:

  ```html
  <script src="https://unpkg.com/lucide@0.469.0/dist/umd/lucide.min.js"></script>
  ```
  ```jsx
  <i data-lucide="bookmark" style={{width:20,height:20}}></i>
  // tras montar: lucide.createIcons({attrs:{'stroke-width':2}})
  ```
- Iconos en uso: `arrow-left`, `arrow-right`, `bookmark`, `share-2`, `more-horizontal`, `volume-x`,
  `mail`, `search`, `download`, `play`, `microscope`, `pin`, `check-circle-2`, `alert-triangle`.
- Tamaños: 16–18 px en línea con texto y en botones, 20 px en IconButton, 24 px en navegación. El color
  es el del texto que acompaña (`currentColor`), nunca amarillo.
- `createIcons()` reemplaza el `<i>` por un `<svg>`, así que hay que volver a llamarlo después de cada
  render de React que introduzca iconos nuevos.
- **El único activo gráfico propio es el isotipo** (`assets/isotipo-ecc.png`). No se dibujaron marcas,
  ilustraciones ni pictogramas nuevos: cuando falta un gráfico, el sistema usa tipografía o una cifra.
- **Unicode no se usa como icono.** Un glifo tipográfico en lugar del icono correcto (♪ por "silenciar",
  ★ por "guardar") es un error, no un atajo aceptable.
- **Emoji**: nunca como icono de interfaz. Solo en copy, con el set del canal (📲 💬 🔬 …).

---

## Intentional additions

No había inventario de componentes que copiar (no hay Figma ni código). Se autoró un set mínimo
estándar más cinco piezas propias del negocio del canal, cada una con una razón:

- `StatFigure` — la cifra del estudio es el elemento visual más repetido del canal.
- `StudyMeta` — la "carne metodológica" (n, grupos, protocolo, duración) es obligatoria en cada guion.
- `MythBuster` — el par creencia/evidencia es el motor narrativo de todo el contenido.
- `PmidRef` — la marca cita siempre por PMID; merece un componente con enlace a PubMed.
- `Callout` — replica el comentario fijado y las limitaciones del estudio.

---

## Índice del proyecto

**Raíz**
- `styles.css` — punto de entrada; solo `@import`s.
- `thumbnail.html` — tile del sistema.
- `readme.md` (este archivo), `SKILL.md` — guía portable para agentes.

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `shape.css`, `motion.css`,
`base.css` (reset, enlaces, `.ecc-grid`, `.ecc-label`).

**`assets/`** — `isotipo-ecc.png` (transparente), `isotipo-ecc-navy.png` (cuadro navy).

**`guidelines/`** — 20 cards de fundamentos: Colors (navy, cyan, evidencia/mito, superficies, texto),
Type (cover, titulares, cuerpo, datos), Spacing (escala, en uso, radios, elevación, filo de luz,
entrada escalonada), Brand (isotipo, lockup, atmósfera, trama, protección de texto).

**`components/`**
- `core/` — `Button`, `IconButton`, `Badge`, `Tag`, `Card`, `Divider`, `Logo`, `Tabs`
- `content/` — `StatFigure`, `PmidRef`, `StudyMeta`, `MythBuster`, `Callout`
- `forms/` — `Input`, `Select`, `Checkbox`, `Switch`

**`ui_kits/`**
- `social/` — `ReelCover`, `ReelOverlay`, `CarouselDeck` + `index.html`
- `web/` — `SiteHeader`, `HomeHero`, `VideoGrid`, `LeadMagnet`, `StudyArticle`, `SiteFooter` + `index.html`
- `_ds_fallback.js` — permite abrir los kits y las cards de componentes aunque `_ds_bundle.js` no esté
  compilado (transpila los `.jsx` en el navegador). No sustituye al bundle en proyectos consumidores.

---

## CAVEATS

1. **Fuentes sustituidas.** No se entregaron binarios. Bricolage Grotesque / Instrument Sans /
   JetBrains Mono se cargan desde Google Fonts (`tokens/fonts.css`). Si la marca ya usa otras
   tipografías, reemplazar ese archivo por `@font-face` locales — pero conviene conservar una familia
   con eje `wdth`, porque los covers dependen de él.
2. **Wordmark reconstruido.** El lockup ("ENTRENA / con Ciencia") es tipográfico, no el logotipo real.
   Si existe archivo oficial, sustituirlo y ajustar `components/core/Logo.jsx`.
3. **Sin fotografía.** Los thumbnails y fotogramas son lienzos navy con tipografía.
4. **Iconos Lucide** son una sustitución, no el set oficial.
5. **Coral propuesto.** El amarillo `#FFC300` lo dio la marca; el coral de mito sigue siendo una
   decisión de sistema para separar "creencia falsa" de "hallazgo".
