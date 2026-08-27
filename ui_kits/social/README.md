# UI kit · Contenido social

Lienzos de produccion del canal. No es una recreacion de Instagram: son las plantillas de marca
que se exportan y suben.

| Archivo | Lienzo | Uso |
|---|---|---|
| `ReelCover.jsx` | 1080 x 1920 | Cover de Reel/Short. Variantes: `question`, `stat`, `versus`. |
| `ReelOverlay.jsx` | 1080 x 1920 | Gráficos en pantalla: `hook`, `study`, `stat`, `cta`. |
| `CarouselDeck.jsx` | 1080 x 1350 | Carrusel de 5 láminas con el orden del guion. Toma `asset` (isotipo transparente, láminas navy) y `assetLight` (isotipo en cuadro navy, láminas claras). |
| `index.html` | — | Vista interactiva de las tres plantillas. |

Reglas al producir:
- El cover lleva 2 a 5 palabras y habla del painpoint directo (peso, energia, verse mejor).
- Una sola palabra o cifra en amarillo por lienzo.
- El PMID aparece siempre en el pie del cover y en la lámina de referencias.
- Texto sobre fotograma: siempre con `--scrim-bottom` o caja opaca.
- El isotipo transparente es cyan y se lava sobre fondo claro: en cualquier lienzo o barra clara va
  `assets/isotipo-ecc-navy.png`.
