import * as React from 'react';

/**
 * Cifra grande sacada del estudio (el resultado va con numeros primero).
 */
export interface StatFigureProps extends React.HTMLAttributes<HTMLDivElement> {
  /** La cifra tal como aparece en el estudio. Nunca redondear ni inventar. */
  value: string | number;
  unit?: string | null;
  /** Que significa la cifra, en lenguaje del viewer. */
  label?: string | null;
  /** Pie en mono mayusculas: n, poblacion o duracion. */
  note?: string | null;
  tone?: 'evidence' | 'myth' | 'info' | 'navy' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  onDark?: boolean;
  align?: 'left' | 'center';
}
export function StatFigure(props: StatFigureProps): JSX.Element;
