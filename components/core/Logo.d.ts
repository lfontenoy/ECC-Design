import * as React from 'react';

/**
 * Lockup de marca: isotipo (atomo + mancuerna) + nombre.
 * El wordmark es una reconstruccion tipografica en Barlow: no se entrego archivo de logotipo.
 */
export interface LogoProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'mark' | 'horizontal' | 'stacked';
  /** dark = sobre navy (texto blanco). light = sobre fondo claro. */
  theme?: 'dark' | 'light';
  /** Lado del isotipo en px. Minimo legible: 24. */
  size?: number;
  /** Ruta relativa al PNG del isotipo desde el archivo que lo monta.
   *  Si se omite: isotipo-ecc.png con theme="dark", isotipo-ecc-navy.png con theme="light". */
  src?: string | null;
}
export function Logo(props: LogoProps): JSX.Element;
