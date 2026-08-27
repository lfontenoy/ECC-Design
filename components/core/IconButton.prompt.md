Boton cuadrado de un solo icono (guardar, compartir, silenciar, cerrar). Requiere `label`.

```jsx
<IconButton variant="onDark" label="Guardar" round>
  <i data-lucide="bookmark" style={{width:20,height:20}}></i>
</IconButton>
```

Iconos: Lucide (stroke 2px), cargado desde `https://unpkg.com/lucide@0.469.0/dist/umd/lucide.min.js`; llama `lucide.createIcons()` después de montar. `round` para controles flotantes sobre video.
