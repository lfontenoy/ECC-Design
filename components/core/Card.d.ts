import * as React from 'react';

/**
 * Contenedor base de bloques de contenido.
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** deep y void llevan atmosfera (halo + grano) en lugar de navy plano. */
  theme?: 'light' | 'dark' | 'deep' | 'void';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Eleva la tarjeta en hover (usar solo si toda la tarjeta es clicable). */
  interactive?: boolean;
  /** Trama blueprint de 32px de fondo. */
  grid?: boolean;
  /** Filete vertical de 3px a la izquierda. Usar con moderacion. */
  accent?: 'evidence' | 'myth' | 'info' | null;
  children?: React.ReactNode;
}
export function Card(props: CardProps): JSX.Element;
