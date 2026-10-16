# Anuncios estáticos · Meta · Programa de pérdida de peso

15 anuncios de 1080×1350 (feed 4:5) con la marca ECC: logo, tipografía, colores, titular, subtítulo y CTA.
Los PNG están en `png/`. El anuncio `12-entreno` es tipográfico y ya está terminado. Los otros 14 llevan
un marcador "Foto pendiente" hasta que se agregue la foto.

## Cómo agregar las fotos

1. Genera cada foto con el prompt de abajo (Gemini, Nano Banana o el modelo que prefieras), en formato **4:5**.
2. Guárdala en `fotos/` con el nombre exacto que se indica, por ejemplo `fotos/pizza.png`.
3. Vuelve a renderizar: `node ads/meta-perdida-peso/render.js`

Cada foto ocupa la parte alta del anuncio (aprox. 860 px). Deja aire arriba para el logo y abajo para el texto.

## Fotos y prompts

Las 10 fotos cubren los 15 anuncios. Los prompts están en inglés porque así responden mejor los modelos de imagen.

| Archivo | Se usa en | Prompt |
|---|---|---|
| `espejo-segura.png` | 01a, 04 | Photorealistic editorial photo. A Latino man in his early 30s with an average, healthy build, in a modern gym locker room right after a workout, towel over his shoulder, looking at himself in a large mirror and smiling with quiet pride. Cool, crisp, high-contrast lighting with blue tones. Natural skin, real person, not a bodybuilder. Empty dark area in the upper third. No text, no logos. |
| `espejo-sutil.png` | 01b | Photorealistic editorial photo. A Latino man in his early 30s, slightly soft average build, plain grey t-shirt, standing in front of a bathroom mirror at home in the morning. His reflection looks subtly different: standing taller, a bit more athletic and confident, smiling. The real man looks at it hopeful and thoughtful. Subtle and natural, not dramatic. Cool, crisp lighting. No text, no logos. |
| `polo.png` | 02 | Photorealistic lifestyle photo on a sunny beach in Peru. A Latino man in his 30s with a fit but realistic body confidently pulling off his t-shirt, smiling. Around him friends on beach towels look at him smiling, cheering and impressed. Candid, joyful. Cool clean color grading. Clear sky in the upper third. No text, no logos. |
| `bikini-segura.png` | 03a | Photorealistic lifestyle photo on a sunny beach in Peru. Three Latina women friends in their 30s in bikinis and swimsuits, with different realistic body types, laughing together and walking toward the sea, confident and relaxed. Cool clean color grading. Clear sky in the upper third. No text, no logos. |
| `bikini-sutil.png` | 03b | Photorealistic lifestyle photo on a sunny beach in Peru. In the foreground a fit Latina woman in her 30s confidently pulling off an oversized t-shirt to reveal her bikini, smiling. In the soft-focus background a few beachgoers sit under an umbrella wearing loose t-shirts over their swimwear, relaxed. Subtle, nobody mocking. Cool clean color grading. No text, no logos. |
| `jean-segura.png` | 05a, 06, 07 | Photorealistic lifestyle photo. A Latina woman in her early 30s in a bright bedroom, smiling happily as she pulls her favorite pair of classic blue jeans out of an open wardrobe, holding them up. Cool clean daylight. Empty wall in the upper third. No text, no logos. |
| `jean-sutil.png` | 05b | Photorealistic lifestyle photo. A Latina woman in her early 30s next to an open wardrobe, holding two pairs of blue jeans, one in each hand, looking thoughtfully at the slimmer pair with a slight wistful smile. Subtle, not dramatic. Cool clean daylight. No text, no logos. |
| `pizza.png` | 08 | Photorealistic lifestyle photo. A Latino man in his 30s at a home dining table at night, a plate with a slice of pepperoni pizza. He holds the slice, pausing, eyes looking up and to the right as if thinking. Large empty space in the upper right. Cool, crisp blue lighting. No text, no logos. |
| `fin-de-semana.png` | 09 | Photorealistic lifestyle photo. Latino friends in their 30s at a relaxed weekend lunch on a sunny terrace, grilled chicken, salads and some fries, laughing. One woman in the center enjoys her plate. Cool clean color grading. Empty area in the upper third. No text, no logos. |
| `delivery.png` | 10, 11 | Photorealistic photo at night at an apartment door. A tired Latina woman in her 30s in office clothes receives a brown paper bag with a burger from a courier with a plain insulated backpack, no logos. She looks pensive, eyes up as if thinking. Empty dark space in the upper part. Cool blue night lighting. No text, no logos, no brand names. |

En `08-lunes` y `10-hamburguesa` la burbuja con el calendario (lunes marcado) la pone la plantilla, y en
`11-delivery` la burbuja "¿Y mi dieta?". No hace falta pedírselas al modelo de imagen.

## A/B de los conceptos delicados

| Concepto | A · versión segura | B · tu versión, sutil |
|---|---|---|
| Espejo | `01a` — sonríe frente al espejo después de entrenar | `01b` — el reflejo se ve un poco más atlético |
| Bikini | `03a` — amigas con distintos cuerpos disfrutando | `03b` — chica fit se quita el polo; al fondo, otras con polos holgados |
| Jean | `05a` — saca su jean favorito, feliz | `05b` — dos jeans en la mano, mira el más ajustado |

Las versiones B se acercan más al antes/después o a comparar cuerpos, que la política de
[Salud y bienestar de Meta](https://transparency.meta.com/policies/ad-standards/restricted-goods-services/health-wellness)
restringe en anuncios de pérdida de peso. Pueden tener más rechazos.

## Antes de publicar

- Segmenta todos los anuncios solo a mayores de 18. La política lo exige para pérdida de peso; por eso el sello "+18" en cada pieza.
- Revisa cada foto generada: nada de balanzas, cintas métricas, zonas del cuerpo pellizcadas ni logos de marcas (Rappi, etc.).
- La frase "en 12 semanas" es una promesa con plazo. No pude confirmar cómo la evalúa Meta.
