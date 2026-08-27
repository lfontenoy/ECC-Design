import * as React from 'react';

export interface DividerProps extends React.HTMLAttributes<HTMLElement> {
  /** Rotulo centrado en mono mayusculas, p. ej. "Evidencia". */
  label?: string | null;
  onDark?: boolean;
}
export function Divider(props: DividerProps): JSX.Element;
