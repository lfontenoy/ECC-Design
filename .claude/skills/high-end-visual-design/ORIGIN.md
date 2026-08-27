# Origen de este skill

Skill de terceros, incluido (vendored) en el repositorio para que cargue
automáticamente en cualquier sesión de Claude Code —local, web o programada—
sin depender de instalaciones por máquina.

- **Repositorio de origen:** https://github.com/leonxlnx/taste-skill
- **Ruta en origen:** `skills/soft-skill/SKILL.md` (el directorio se llama
  `soft-skill`, pero el front-matter declara `name: high-end-visual-design`,
  que es el nombre por el que se invoca).
- **Autor:** leonxlnx
- **Licencia:** MIT — ver `LICENSE` en esta misma carpeta.
- **Instalado el:** 2026-08-27

`SKILL.md` está copiado sin modificaciones. Si se edita para adaptarlo a
Entrena con Ciencia, anota aquí qué cambió, para no perder la diferencia
contra el original al actualizar.

## Actualizarlo

```bash
git clone --depth 1 https://github.com/leonxlnx/taste-skill /tmp/taste-skill
cp /tmp/taste-skill/skills/soft-skill/SKILL.md \
   .claude/skills/high-end-visual-design/SKILL.md
```

## Nota de convivencia con el design system de ECC

Este skill trae opiniones propias que **chocan con reglas ya fijadas** en
`readme.md` (fuentes, iconos Lucide, radios, motion). El design system de ECC
manda: es la fuente de verdad de la marca. Usa este skill como criterio de
acabado y de nivel de exigencia, no como sustituto de los tokens.
