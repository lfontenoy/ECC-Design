Lockup de marca. Pasa `src` con la ruta relativa correcta al isotipo desde el archivo que lo monta, o omítelo y deja que `theme` elija el archivo.

```jsx
<Logo variant="horizontal" theme="dark" size={44} src="../../assets/isotipo-ecc.png" />
```

`mark` para avatares y esquinas de video; `stacked` para covers de Reel. Área de respeto: 0.5x el lado del isotipo.

El isotipo transparente es cyan y se lava sobre fondo claro: con `theme="light"` el componente cambia solo a `assets/isotipo-ecc-navy.png` (isotipo en cuadro navy). Si pasas `src` a mano sobre fondo claro, apunta a esa versión. Nunca recolorear el isotipo.
