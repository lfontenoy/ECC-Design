import * as React from 'react';

/**
 * Par mito / evidencia. Es el motor narrativo del canal: primero la creencia, luego su negacion.
 */
export interface MythBusterProps extends React.HTMLAttributes<HTMLDivElement> {
  /** La creencia comun, en las palabras del viewer. */
  myth: string;
  /** La negacion respaldada por el estudio. Sin sobre-extrapolar. */
  fact: string;
  mythLabel?: string;
  factLabel?: string;
  layout?: 'stacked' | 'side-by-side';
  /** Multiplicador de tipo y padding. Usa 2.4 en lienzos de 1080px (Reels y carrusel). */
  scale?: number;
}
export function MythBuster(props: MythBusterProps): JSX.Element;
